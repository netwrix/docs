#!/usr/bin/env python3
"""Build the public OpenAPI 3.0 spec for Netwrix Privilege Secure for Access Management 26.07.3.

Usage:
    python3 tools/api-inventory/build_spec.py [--out-dir DIR]
    python3 tools/api-inventory/build_spec.py --filter-public FULL.json PUBLIC.json

One run builds the FULL spec (every route; operations outside the public set carry x-internal: true) and derives the
PUBLIC spec from it with filter_public(). --filter-public does only the second step from a full file, with no plans/ inputs.

Reads (all under plans/api-inventory unless noted, read-only):
    descriptions/route-list.json        the public route set (method + path); nothing else is emitted
    descriptions/descriptions.json      verified summaries, descriptions, parameters, responses, cautions
    descriptions/write-shape-diff.json  cross-check of status codes only
    static/openapi/privilegesecure-26.07.json   base spec (stale snapshot; supplies schemas and shapes)
    supplement/merged.json              operations and schemas missing from the base spec
    routes.json                         controller and action names (operationId)
    models/schema-corrections.json      verified schema corrections (only each "definition" is used)
    models/enum-map.json                integer wire values of enums
    clients/request-examples.json       placeholder-only request examples
    clients/ad-schemas.json             live-confirmed extra properties of AD schemas

Also reads for the full spec: routes.json (all routes), audience/audience.json, audience/facts.json.

Writes (default DIR = plans/api-inventory/spec):
    privilegesecure-26.07.3.full.openapi.json   internal, never published
    privilegesecure-26.07.3.openapi.json        public, filtered from the full file
    BUILD-REPORT.md                     internal report (counts, unresolved items)

Pure standard library, deterministic (no clocks, sorted output), safe to re-run.
Exits non-zero when any built-in check fails (route set, refs, params, ids, leaks).
Does not read secrets and does not contact any server.
"""
import argparse
import collections
import copy
import hashlib
import json
import os
import re
import subprocess
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
INV = os.path.join(ROOT, 'plans', 'api-inventory')
METHODS = ['get', 'put', 'post', 'delete', 'patch', 'head', 'options']


def load(*parts):
    with open(os.path.join(*parts), encoding='utf-8') as f:
        return json.load(f)


BASE_REL = 'plans/api-inventory/in/base-spec-2024.json'


def load_base(path=None):
    """The stale base spec: the pinned copy of the generated API description with the SbPAM.* schema names (the
    static/openapi file is overwritten with the public spec when it is published, so it is not the base)."""
    path = path or os.path.join(ROOT, *BASE_REL.split('/'))
    with open(path, encoding='utf-8') as f:
        d = json.load(f)
    assert any(k.startswith('SbPAM.') for k in d['components']['schemas']), 'the base spec has no SbPAM schema names: %s' % path
    return d


def code_param_text(name):
    """Meaning of a path parameter from the spelling the controller uses (nodeName, policyId, ...)."""
    words = re.sub(r'(?<=[a-z0-9])(?=[A-Z])', ' ', name).lower().split()
    if len(words) > 1 and words[-1] in ('name', 'id'):
        return 'The %s of the %s.' % ('name' if words[-1] == 'name' else 'ID', ' '.join(words[:-1]))
    return None


def strip_constraints(p):
    return re.sub(r'\{([^}:]+)(?::[^}]*)?\}', r'{\1}', p)


def tkey(p):
    """Template key: parameter names erased, case and trailing slash ignored."""
    p = strip_constraints(p.split('?')[0])
    p = re.sub(r'\{[^}]*\}', '{}', p)
    if len(p) > 1:
        p = p.rstrip('/')
    return p.lower()


def clean_text(s):
    if not isinstance(s, str):
        return s
    s = s.replace('\r\n', '\n').replace('\r', '\n')
    return s.strip()


# ---------------------------------------------------------------- schema names
def sanitize_name(name):
    """Make a component key match ^[a-zA-Z0-9._-]+$ and drop assembly text."""
    n = name
    m = re.match(r'^(.*?)`(\d+)\[\[(.*)\]\]$', n)
    if m:
        outer, _, inner = m.groups()
        args = re.split(r'\],\[', inner)
        parts = []
        for a in args:
            t = a.split(',')[0].strip()
            parts.append(sanitize_name(t).split('.')[-1])
        n = outer + 'Of' + 'And'.join(parts)
    n = n.replace('+', '.')
    n = re.sub(r'[^A-Za-z0-9._-]', '_', n)
    return n


# ---------------------------------------------------------------- walking helpers
def walk_refs(o, fn):
    if isinstance(o, dict):
        for k, v in o.items():
            if k == '$ref' and isinstance(v, str):
                fn(o)
            else:
                walk_refs(v, fn)
    elif isinstance(o, list):
        for v in o:
            walk_refs(v, fn)


def ref_name(r):
    return r[len('#/components/schemas/'):] if r.startswith('#/components/schemas/') else None


def infer_schema(example, name):
    if isinstance(example, bool):
        return {'type': 'boolean'}
    if isinstance(example, int):
        return {'type': 'integer', 'format': 'int32'}
    if isinstance(example, str):
        e = example.strip()
        if e.lower() in ('true', 'false'):
            return {'type': 'boolean'}
        if re.fullmatch(r'-?\d+', e):
            return {'type': 'integer', 'format': 'int32'}
        if re.fullmatch(r'[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}', e):
            return {'type': 'string', 'format': 'uuid'}
        if re.fullmatch(r'\d{4}-\d{2}-\d{2}T[\d:.]+Z?', e):
            return {'type': 'string', 'format': 'date-time'}
    return {'type': 'string'}


def typed_example(example, schema):
    t = (schema or {}).get('type')
    try:
        if t == 'boolean':
            return str(example).strip().lower() == 'true'
        if t == 'integer':
            return int(str(example).strip())
        if t == 'number':
            return float(str(example).strip())
        if t == 'string':
            return str(example)
    except ValueError:
        return None
    return None


# ---------------------------------------------------------------- revision 2: fixes applied on top of the sources
def _seq(names, start=0):
    return {n: start + i for i, n in enumerate(names)}


# Integer values of enums that enum-map.json does not hold. Taken from the 26.07.3 release source
# (declaration order, explicit values where the source gives them).
RELEASE_ENUMS = {
    'SbPAM.ActiveDirectory.Models.Enums.ActiveDirectoryNameFormat': _seq(
        ['DistinguishedName', 'NtAccountName', 'DisplayName', 'ObjectGuid', 'CanonicalName', 'UserPrincipalName',
         'ObjectSid'], 1),
    'SbPAM.ActiveDirectory.Models.Enums.ActiveDirectorySyncStatusType': dict(
        [('None', -1)] + list(_seq(['Created', 'Queued', 'Failed', 'Complete', 'Unauthorized', 'ProcessingGroups',
                                    'ProcessingUsers', 'ProcessingGroupMembers', 'ProcessingComputers',
                                    'ProcessingServiceAccounts', 'Cancelled']).items())),
    'SbPAM.ActiveDirectory.Models.Enums.LoginSessionState': {'Unknown': -1, 'Inactive': 0, 'Active': 1},
    'SbPAM.ActiveDirectory.Models.Enums.UserPrivilege': _seq(
        ['NotSet', 'Administrator', 'PowerUser', 'Guest', 'User', 'SuperUser', 'LinuxUser'] +
        ['CiscoPrivilege_%d' % i for i in range(16)] + ['DomainAdmin', 'EnterpriseAdmin']),
    'SbPAM.Models.Common.DatabaseType': {'Unknown': -1, 'PostgreSQL': 0, 'SqlServer': 1, 'Sqlite': 2, 'Oracle': 3,
                                         'MySql': 4},
    'SbPAM.Models.Common.ServiceStartType': {'Boot': 0, 'System': 1, 'Automatic': 2, 'Manual': 3, 'Disabled': 4},
    'SbPAM.Models.Common.ServiceTypeFlags': {'KernelDriver': 1, 'FileSystemDriver': 2, 'Adapter': 4,
                                             'RecognizerDriver': 8, 'Win32OwnProcess': 16, 'Win32ShareProcess': 32,
                                             'InteractiveProcess': 256},
}
FLAG_ENUMS = {'SbPAM.Models.Common.ServiceTypeFlags'}
# RadiusAuthType is declared in a third-party library that is not in the release source. The numbers come from the
# console (identity-privilegesecuream-web src/components/Config/MfaConnectors/RadiusOptions.tsx sends 0 for MSCHAPv2
# and 1 for PAP) and agree with the enum list [0, 1] of the release swagger.json.
RELEASE_ENUMS['Stealthbits.Radius.RadiusAuthType'] = {'MSCHAPv2': 0, 'PAP': 1}
ENUM_LEAD = {'Stealthbits.Radius.RadiusAuthType': 'Authentication protocol. '}
UNVERIFIED_ENUMS = set()

# Wording for schema text (key: (schema, property or None)). Replaces developer notes inherited from the base spec.
_RES = 'SbPAM.Models.ManagedResource'
SCHEMA_TEXT = {
    ('SbPAM.Models.ActionGroup', 'trigger'): 'Reserved. This property is not used in this release.',
    ('SbPAM.Models.ActionGroup', 'actionGroupJob'): 'Current action group jobs that refer to this action group, if any.',
    ('SbPAM.Models.ActionTemplate', 'userDefined'): 'True if a user created the template.',
    ('SbPAM.Models.ActionTemplate', None): 'An action template that is associated with an action group action.',
    ('SbPAM.Models.ActionJobSchedule', 'id'): 'The ID of the scheduled action job.',
    (_RES, 'hostId'): 'The ID of the host, if this resource is a host.',
    (_RES, 'domainConfigId'): 'The ID of the Active Directory domain configuration, if this resource represents a domain.',
    (_RES, 'websiteId'): 'The ID of the website, if this resource represents a website.',
    (_RES, 'azureAdTenantId'): 'The ID of the Azure AD tenant, if this resource represents an Azure AD tenant.',
    (_RES, 'secretVaultId'): 'The ID of the secret vault, if this resource represents a secret vault.',
    (_RES, 'managedDatabaseId'): 'The ID of the database, if this resource represents a database.',
    ('SbPAM.Models.ManagedResourceSkeletonDto', None):
        'A reduced view of a managed resource that carries only the fields the action service needs, together with '
        'some host information.',
    ('SbPAM.Models.ManagedResourceView', None):
        'One row of the managed resource listing: the hosts under management, plus Active Directory domains and other '
        'items that act as lists of users.',
    ('SbPAM.Models.ManagedResourceView', 'hostId'): 'The ID of the Active Directory host, if this resource is a host.',
    ('SbPAM.Models.EventMessage', 'sourceHost'):
        'Name of the host that generated the event, for example the host of the action service. That host may not be '
        'in the list of hosts, so the value is a name and not an ID.',
    ('SbPAM.Models.HostServiceView', 'serviceAccountId'):
        'The ID of the credential record for the local account on the host that runs the service and that Privilege '
        'Secure manages.',
    ('SbPAM.ActiveDirectory.Models.HostUser', 'passwordChangedDateTimeUtc'): 'Time of the last password change.',
    ('SbPAM.Models.ManagedAccountCandidateView', 'managedAccountId'):
        'The ID of the managed account or managed account group, if Privilege Secure manages this item.',
    ('SbPAM.Models.ManagedResourceGroup', 'ouAutoOnboard'): 'Automatically onboard to Privilege Secure.',
    ('SbPAM.Models.ConnectorConfiguration', None):
        'An integration connector for Netwrix products and available third-party apps.',
    ('SbPAM.Models.ConnectorConfigurationValue', None):
        'An integration connector for Netwrix products and available third-party apps.',
    ('SbPAM.Models.IntegrationConnector', None):
        'An integration connector for Netwrix products and available third-party apps.',
    ('SbPAM.Models.MaxIdleTimeout', 'maxIdleUserDays'):
        'Days of inactivity after which a user is treated as idle. Valid values are 0, which turns the feature off, '
        'or 90 to 365. The server rejects 1 to 89. The minimum and maximum below give the outer bounds only.',
}

SCHEMA_TEXT.update({
    ('SbPAM.Models.ActionJobSchedule', None):
        'A scheduled action job. It combines the details of the action queue entry and the action job.',
    ('SbPAM.Models.ConnectionProfileInfo', None): 'Summary information about a connection profile.',
    ('SbPAM.Models.EventMessage', 'managedResourceId'): 'Optional ID of the host that the event happened to.',
    ('SbPAM.Models.ActivitySession', 'targetUserId'): 'The ID of the host user that the activity targets.',
    ('SbPAM.ActiveDirectory.Models.HostUser', 'passwordHash'): 'Stored password hash for the account.',
    ('SbPAM.Models.Website', 'associatedResourceId'): 'The ID of the managed resource that represents the server that hosts this website.',
    ('SbPAM.Models.ManagedUserCredentialDto', None):
        'A managed user together with its credential details, for website managed users, who do not have host user '
        'records.',
    ('SbPAM.Models.ManagedResourceLocalUserView', None):
        'One local user of a managed resource. The console uses it to list all the users of a domain on the domain '
        'detail page.',
    ('SbPAM.Models.AzureAdTenant', 'name'): 'Name of the Microsoft Entra tenant. Required.',
    ('SbPAM.Models.AzureAdTenant', 'tenantId'): 'The Microsoft Entra directory (tenant) ID. Required.',
    ('SbPAM.Models.AzureAdTenant', 'logonUrl'):
        'The sign-in URL for the tenant portal, where the browser is sent so that the user can sign in. Required.',
    ('SbPAM.Models.AzureAdTenant', 'emailDomain'):
        'The email domain of the tenant, for example example.com. The random characters of an activity token form '
        'the part of the email address before the domain.',
    ('SbPAM.Models.Email', 'toAddress'): 'Destination email addresses, for example user@example.com.',
    ('SbPAM.Models.ActionTemplateParameter', 'multiline'): 'True if the console shows the field on several lines.',
    ('SbPAM.Models.ManagedAccount', 'sid'): 'The security identifier (SID) of the user. It must match an existing host user.',
})

# Revision 3: phrase-level rewrites applied to every description and summary in paths and schemas.
# (pattern, replacement). Patterns are specific on purpose: "Internal" is also a real enum member name.
_NODE = 'Identifier of the server node that stores this record.'
DATATABLE_TEXT = 'A page of search results.'
RECORDS_TOTAL_TEXT = 'Total number of matching records; data may hold only one page of them.'
TEXT_RULES = [
    (r' via join table', ''),
    (r'^Unique id and DB key for this (.+?)\.?$', r'Unique ID of this \1.'),
    (r'^Internal identifier for node that is the primary database\. This should not be sent as a property during creation\.$',
     _NODE + ' Do not send it when you create the record.'),
    (r'^Internal identifier of the primary database node\. Do not send it on create\.$',
     _NODE + ' Do not send it when you create the record.'),
    (r'^Internal identifier of the primary database node\. Do not send it\.$', _NODE + ' Do not send it.'),
    (r'^Internal node id$', _NODE),
    (r'^Internal date \(when object was created in database\)$', 'Date and time in UTC when the record was created.'),
    (r'^Internal date \(when object was modified in database\)$', 'Date and time in UTC when the record was last modified.'),
    (r'^Internal creation date and time in UTC\.$', 'Date and time in UTC when the record was created.'),
    (r'^Internal modification date and time in UTC\.$', 'Date and time in UTC when the record was last modified.'),
    (r'^Internal reason for action failure if available\.$', 'Reason the action failed, if available.'),
    (r'\s*(?:UI|Endpoint) => (?:Endpoint|UI)\s+Not persisted$', '. Not stored.'),
    (r'whatever\.com', 'example.com'),
    (r'<a href="([^"]+)">([^<]+)</a>', r'[\2](\1)'),
    (r'\s*Not used\?{2,}', ' Not used.'),
    (r'\be\.g\. sbitsinc\b', 'for example corp'),
    (r'\bdatabse\b', 'database'),
    (r'^Id of host(?: database)? with this database\.$', 'ID of the host that has this database.'),
    (r'<Deleted Activity>', '"Deleted Activity"'),
    (r'Two internal file-release templates are left out\.', 'Templates that are not available for selection are left out.'),
    (r'The internal custom base platform is never listed;', 'The base platform that custom platforms build on is never listed;'),
    (r'[ ]?This route does not require sign-in\.(\n\nPermission required: No sign-in required\.)\n\nCaution: This route can be '
     r'called without signing in, so anyone who can reach the server can read th(?:is setting|ese settings)\.',
     r'\1\n\nThis route does not require a sign-in.'),
    (r"(Returns the number of days without sign-in after which Privilege Secure removes a user's account\. "
     r"A value of 0 means the check is off\.)", r'\1 Application users and console access members are not removed.'),
    (r'\(application users are excluded\)', '(application users and console access members are excluded)'),
    (r'Hash of password from linux /etc/shadow', 'Stored password hash for the account.'),
    # revision 4: paged-result containers, join models and other source-comment leftovers
    (r'^Generic container for the output of some API endpoints and \.Search\(\) methods in some actors that return paged '
     r'subsets of filtered search results\.?$', DATATABLE_TEXT),
    (r'^What is the total count of search results that \.DataRows may only be a paged subset of \(e\.g\., rows 30 - 39 of '
     r'589 found\)\.?$', RECORDS_TOTAL_TEXT),
    (r'^(?:This model is used to model|Used to model) the many[- ]to[- ]many relationship between (.+?) and (.+?)\.?$',
     r'Links \1 to \2.'),
    (r'^Many[- ]to[- ]many relationship between activities and activity groups\.?$',
     'The links between activities and activity groups.'),
    (r'^Primary key for (.+?)\.?$', r'Unique ID of the \1.'),
    (r'^Combined ManagedResource and ManagedDatabase object$',
     'A managed database together with the managed resource that it belongs to.'),
    (r'\(by Action\.ExecutionOrder\)', '(in the execution order of each action)'),
    (r'by the Action\.ExecutionOrder \(lowest to highest\)', 'by the execution order of each action, lowest first'),
    (r'^Id of target for activity\. References either Host or Domain\. See ManagedResource\.Type \(ManagedResourceType\) '
     r'to determine which\.$',
     'The ID of the target of the activity. It is the ID of a host or of a domain; the type of the managed resource '
     'tells you which.'),
    (r'^If true \(default\) and \.ValueSet is given then the user may not enter something off that list$',
     'If true (the default) and a value set is given, the user can only choose a value from that list.'),
    (r"Optional alternative to DisplayName for populating new actions's \.DisplayName properties\.",
     'Optional alternative to the display name, used to fill in the display names of new actions.'),
    (r'\bparameter vales\b', 'parameter values'),
    (r'\s*\(comma-separated, not persisted\)$', ', as a comma-separated list. Not stored.'),
    (r'^Gets or sets the specific groups this job should scan\.$', 'The specific groups that this job scans.'),
    (r'^Gets or sets a value indicating whether all object should be re-scanned or a scan should continue from the '
     r'position of the last scan\.$', 'True to scan all objects again. False to continue from the position of the last scan.'),
    (r'^Gets or sets a value indicating if the name translations should be performed by a global catalog server\.$',
     'True if a global catalog server performs the name translations.'),
    (r'^Property for resource$', 'ID of the service account to set.'),
    (r'\s*https://docs\.microsoft\.com/(\S+)', r' See [Microsoft documentation](https://learn.microsoft.com/\1).'),
    (r'\n\nPermission required: No sign-in required\.(\n\nThis route does not require a sign-in\.)', r'\1'),
    (r'^The audit change row actor models\.$', 'The record types in the change audit log.'),
    (r'See the entity type values\.', 'See the values of `entityType`.'),
    # revision 5: process language, link wording, paged-result variants, typos
    (r" Format taken from the scheduler's parser and console traffic\.", ''),
    (r'clears the saved change watermark first', 'resets the saved change position first'),
    (r"they are not taken from the original activity", 'they are not copied from the original activity'),
    (r'Taken from the body, not from the original role\.', 'Set in the request body, not copied from the original role.'),
    (r'^(.*?)\s*\[MS Documentation\]\((\S+?)\)$', r'\1. See [Microsoft documentation](\2).'),
    (r'Values for `response value`:', 'Values for the response:'),
    (r'^Generic container for paged search results\.?$', DATATABLE_TEXT),
    (r'^Generic container for the output of endpoints that return paged subsets of filtered search results\.?$',
     DATATABLE_TEXT),
    (r'\bdesciption\b', 'description'),
    (r'the database generates one', 'the server generates one'),
]
TEXT_RULES = [(re.compile(p), r) for p, r in TEXT_RULES]

# Placeholder GUIDs for examples (valid version 4 GUIDs).
EXAMPLE_GUIDS = [
    '3fa85f64-5717-4562-b3fc-2c963f66afa6', '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d', 'b4c5d6e7-f8a9-4b0c-9d1e-2f3a4b5c6d7e',
    'c6d7e8f9-0a1b-4c2d-8e3f-4a5b6c7d8e9f', 'd8e9f0a1-b2c3-4d4e-9f5a-6b7c8d9e0f1a',
    'e0f1a2b3-c4d5-4e6f-8a7b-8c9d0e1f2a3b', 'f2a3b4c5-d6e7-4f8a-9b9c-0d1e2f3a4b5c']
GUID_RE = re.compile(r'^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$')
NIL_GUID = '00000000-0000-0000-0000-000000000000'
ID_PLACEHOLDER_RE = re.compile(r'^[<{][A-Za-z _-]*(?:id|guid)[>}]$', re.I)
ENUM_EXAMPLE_PREFERRED = {'SbPAM.Models.Common.ServiceTypeFlags': 16}

# 2xx responses whose own description says there is no body lose any content schema.
EMPTY_BODY_RE = re.compile(r'\bThe body is empty\b|\bNo body is returned\b|\bThe response has no body\b')
# Prose bullets that describe a request field the schema does not have.
PROSE_FIELD_DROP = {('POST', '/api/v1/managedresourcegroup/{}/rotateaccounts'): ['domainConfigId']}
# Prose "required" marks that the server does not enforce: (method, template key) -> {field: new prose}
PROSE_NOT_REQUIRED = {
    ('POST', '/api/v1/connectionprofile'): {
        'type': 'Kind of configuration. Defaults to 0 (Generic) when left out. Send 1 (ConnectionProfile) so that the '
                'profile appears in the connection profile list.'}}

OS_EXAMPLE_OLD, OS_EXAMPLE_NEW = 'Windows Fake Edition', 'Windows Server 2022'

PARAM_TEXT = {
    'filtercolumns': 'Accepted but not used by this route. The text filter always searches a fixed set of columns.',
    'metadatafiltertext': 'Return only sessions whose recorded keystrokes or output contain this text.',
    'username': 'Return only sessions for this user name. Repeat the parameter to match several users '
                '(userName=X&userName=Y).',
}
# Parameters kept by the source spec that the controller does not bind.
UNBOUND_PARAMS = {'includefailcount'}

KV_STRING = {'type': 'array', 'items': {'type': 'object', 'properties': {
    'key': {'type': 'string'}, 'value': {'type': 'string'}}}}
KV_INT = {'type': 'array', 'items': {'type': 'object', 'properties': {
    'key': {'type': 'string'}, 'value': {'type': 'integer', 'format': 'int32'}}}}
STR = {'type': 'string'}


def _ref(n):
    return {'$ref': '#/components/schemas/' + n}


def _arr(n):
    return {'type': 'array', 'items': _ref(n)}


def _int_object(names, doc):
    return {'type': 'object', 'description': doc,
            'properties': {n: {'type': 'integer', 'format': 'int32'} for n in names}}


def _datatable_name(inner):
    return ('SbPAM.Models.DataTable`1[[SbPAM.Models.%s, SbPAM.Models, Version=1.0.0.0, Culture=neutral, '
            'PublicKeyToken=null]]' % inner)


def _datatable(inner):
    return {'type': 'object', 'additionalProperties': False,
            'description': DATATABLE_TEXT,
            'properties': {'data': {'type': 'array', 'items': _ref('SbPAM.Models.' + inner), 'nullable': True,
                                    'description': 'The rows on this page.'},
                           'recordsTotal': {'type': 'integer', 'format': 'int32',
                                            'description': RECORDS_TOTAL_TEXT}}}


_G = {'type': 'string', 'format': 'uuid'}
_DT = {'type': 'string', 'format': 'date-time'}
# Schemas the base spec and the supplement do not hold; shapes from the 26.07.3 release models.
NEW_SCHEMAS = {
    'SbPAM.Models.AccessCertificationTaskRequestResponse': {
        'type': 'object', 'additionalProperties': False,
        'description': 'An access certification task: its summary and the detail of each activity row.',
        'properties': {'summary': _ref('SbPAM.Models.AccessCertificationTaskSummary'),
                       'activitiesDetail': {'type': 'array', 'nullable': True,
                                            'items': _ref('SbPAM.Models.AccessCertificationTaskRowDetail')}}},
    'SbPAM.Models.AccessCertRowTable': {
        'type': 'object', 'additionalProperties': False,
        'description': 'One row of the access certification review table.',
        'properties': {'id': _G, 'taskId': _G,
                       'permissions': {'type': 'array', 'items': STR, 'nullable': True},
                       'status': _ref('SbPAM.Models.AccessCertificationTaskRowStatus'),
                       'userName': {'type': 'string', 'nullable': True}, 'userId': _G,
                       'activityName': {'type': 'string', 'nullable': True}, 'activityId': _G,
                       'resourceName': {'type': 'string', 'nullable': True},
                       'resourceId': dict(_G, nullable=True), 'accessPolicyId': _G,
                       'accessPolicyName': {'type': 'string', 'nullable': True},
                       'credentialId': dict(_G, nullable=True),
                       'credentialName': {'type': 'string', 'nullable': True},
                       'connectionProfile': {'type': 'string', 'nullable': True},
                       'lastAccessedDateTimeUtc': _DT}},
    'SbPAM.Models.AccessCertUserTable': {
        'type': 'object', 'additionalProperties': False,
        'description': 'One user row of an access certification task.',
        'properties': {'id': _G, 'taskId': _G, 'userId': _G,
                       'userName': {'type': 'string', 'nullable': True},
                       'userEmail': {'type': 'string', 'nullable': True},
                       'groupName': {'type': 'string', 'nullable': True},
                       'samAccountName': {'type': 'string', 'nullable': True},
                       'type': _ref('SbPAM.Constants.SbPAMAccountType')}},
    _datatable_name('AccessCertRowTable'): _datatable('AccessCertRowTable'),
    _datatable_name('AccessCertUserTable'): _datatable('AccessCertUserTable'),
    'SbPAM.Models.ActionQueueStatus': {
        'type': 'object', 'additionalProperties': False,
        'description': 'The status of one action queue and of each of its steps.',
        'properties': {'id': _G, 'statusDescription': {'type': 'string', 'nullable': True},
                       'status': _ref('SbPAM.Constants.ActionConstants+ActionStatus'), 'startTime': _DT,
                       'actionQueueActionStatus': {'type': 'array', 'nullable': True,
                                                   'items': _ref('SbPAM.Models.ActionQueueActionStatus')}}},
    'SbPAM.Models.ActionQueueActionStatus': {
        'type': 'object', 'additionalProperties': False,
        'description': 'The status of one step of an action queue.',
        'properties': {'id': _G, 'name': {'type': 'string', 'nullable': True},
                       'status': _ref('SbPAM.Constants.ActionConstants+ActionStatus'),
                       'statusDescription': {'type': 'string', 'nullable': True}, 'startTime': _DT}},
    'SbPAM.Models.SiemSettings': {
        'type': 'object', 'additionalProperties': False,
        'description': 'The SIEM settings of a SIEM server: its connection details and the template it uses.',
        'properties': {'id': _G, 'serverType': {'type': 'string', 'nullable': True},
                       'host': {'type': 'string', 'nullable': True}, 'enabled': {'type': 'boolean'},
                       'port': {'type': 'integer', 'format': 'int32'}, 'siemTemplateId': _G, 'nodeId': _G,
                       'createdDateTimeUtc': _DT, 'modifiedDateTimeUtc': _DT}},
    'SbPAM.Models.SshCertificateInfoResponse': {
        'type': 'object', 'additionalProperties': False,
        'description': 'The response body for the SSH key settings of a credential. The settings are in value.',
        'properties': {'value': _ref('SbPAM.Models.SshCertificateInfo'),
                       'formatters': {'type': 'array', 'items': {'type': 'object'}, 'nullable': True},
                       'contentTypes': {'type': 'array', 'items': STR, 'nullable': True},
                       'declaredType': {'type': 'string', 'nullable': True},
                       'statusCode': {'type': 'integer', 'format': 'int32', 'nullable': True}}},
    'SbPAM.Models.SshCertificateInfo': {
        'type': 'object', 'additionalProperties': False,
        'description': 'The SSH key settings of a credential.',
        'properties': {'credentialId': _G, 'credentialType': _ref('SbPAM.Models.CredentialType'),
                       'authenticationMethod': _ref('SbPAM.Models.AuthenticationMethodType'),
                       'autoGenPassphrase': {'type': 'boolean', 'nullable': True},
                       'keyGenAlgorithm': {'type': 'string', 'nullable': True},
                       'keyLength': {'type': 'integer', 'format': 'int32', 'nullable': True},
                       'privateKey': {'type': 'string', 'nullable': True},
                       'passphrase': {'type': 'string', 'nullable': True},
                       'publicKey': {'type': 'string', 'nullable': True},
                       'sudoCommand': {'type': 'string', 'nullable': True}}},
}
_DT_ROW = 'SbPAM.Models.DataTable`1[[SbPAM.Models.AccessCertRowTable, SbPAM.Models, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]'
_DT_USR = 'SbPAM.Models.DataTable`1[[SbPAM.Models.AccessCertUserTable, SbPAM.Models, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]'
_ACT = 'SbPAM.Models.AccessCertificationTaskRequestResponse'
_BIN = {'type': 'string', 'format': 'binary'}

# Success bodies the code returns that the source spec lacks. (route, status) -> (media type, schema) or None for
# "no body". Media type None means application/json.
RESPONSE_FIXES = [
    ('DELETE /api/v1/AccessCertificationDenial/{denialId}', '202', None, _G),
    ('GET /api/v1/AccessCertificationTask/Csv/{taskId}', '200', None, STR),
    ('PUT /api/v1/AccessCertificationTask/Review/{taskId}', '200', None, _ref(_ACT)),
    ('GET /api/v1/AccessCertificationTask/Rows/Review/{taskId}', '200', None, _ref(_DT_ROW)),
    ('PUT /api/v1/AccessCertificationTask/Rows/Update/{taskId}', '200', None, _ref(_ACT)),
    ('GET /api/v1/AccessCertificationTask/Rows/{taskId}', '200', None, _ref(_DT_ROW)),
    ('GET /api/v1/AccessCertificationTask/Summary', '200', None, _arr('SbPAM.Models.AccessCertificationTaskSummary')),
    ('POST /api/v1/AccessCertificationTask/Tasks/New', '200', None, _ref(_ACT)),
    ('PUT /api/v1/AccessCertificationTask/Tasks/Update/{taskId}', '200', None, _ref(_ACT)),
    ('GET /api/v1/AccessCertificationTask/Users/Review/{taskId}', '200', None, _ref(_DT_USR)),
    ('GET /api/v1/AccessCertificationTask/Users/{taskId}', '200', None, _ref(_DT_USR)),
    ('GET /api/v1/AccessCertificationTask/{taskId}', '200', None, _ref(_ACT)),
    ('POST /api/v1/ActionGroup', '201', None, _ref('SbPAM.Models.ActionGroup')),
    ('POST /api/v1/ActionGroup/Action', '201', None, _ref('SbPAM.Models.Action')),
    ('PUT /api/v1/ActionGroup/{actionGroupId}', '200', None, _ref('SbPAM.Models.ActionGroup')),
    ('GET /api/v1/ActionQueue', '200', None, _arr('SbPAM.Models.ActionQueueStatus')),
    ('GET /api/v1/ActionQueue/Log/{id}', '200', None, _ref('SbPAM.Models.ActionLog')),
    ('GET /api/v1/ActionQueue/{actionQueueId}', '200', None, _ref('SbPAM.Models.ActionQueue')),
    ('GET /api/v1/ActiveDirectory/Domain/{domain}/User/{samaccountname}/Properties', '200', None, KV_STRING),
    ('PUT /api/v1/ActivityGroup/{id}', '200', None, _ref('SbPAM.Models.ActivityGroup')),
    ('POST /api/v1/ActivitySession', '201', None, _ref('SbPAM.Models.ActivitySession')),
    ('GET /api/v1/ActivitySession/{sessionId}', '200', None, _ref('SbPAM.Models.ActivitySession')),
    ('POST /api/v1/ActivitySession/{sessionId}/Approve', '200', None, STR),
    ('POST /api/v1/ActivitySession/{sessionId}/Deny', '200', None, STR),
    ('GET /api/v1/Credential/GetAuthenticationMethodTypes', '200', None, _int_object(
        ['password', 'sshCertificate', 'sshCertificateAndPassword'],
        'Each authentication method name with its number.')),
    ('GET /api/v1/Credential/GetCredentialTypes', '200', None, _int_object(
        ['any', 'configuration', 'user', 'service', 'activityToken', 'application', 'vaultUser', 'sshKeyCert'],
        'Each credential type name with its number.')),
    ('POST /api/v1/GennixCommandPlan', '200', None, _ref('SbPAM.Models.GennixCommandPlan')),
    ('GET /api/v1/GennixCommandPlan/{commandPlanId}', '200', None, _ref('SbPAM.Models.GennixCommandPlan')),
    ('PUT /api/v1/GennixCommandPlan/{commandPlanId}', '200', None, _ref('SbPAM.Models.GennixCommandPlan')),
    ('PUT /api/v1/IPAddressRule', '200', None, _ref('SbPAM.Models.IPAddressRule')),
    ('GET /api/v1/Log/downloadzip', '200', 'application/zip', _BIN),
    ('PUT /api/v1/ManagedAccount/ResetLocalUserPassword/{managedAccountId}', '200', None, STR),
    ('POST /api/v1/ManagedAccountGroup', '200', None, _ref('SbPAM.Models.ManagedAccountGroup')),
    ('POST /api/v1/ManagedResource/Delete', '200', None, STR),
    ('POST /api/v1/ManagedResourceGroup', '200', None, _ref('SbPAM.Models.ManagedResourceGroup')),
    ('PUT /api/v1/OverridePolicy/Credential/{id}/RemoveMultiple', '200', None, _ref('SbPAM.Models.PassFailReportDto')),
    ('DELETE /api/v1/OverridePolicy/{id}', '200', None, STR),
    ('GET /api/v1/RegisteredService/Nodes', '200', None, KV_INT),
    ('GET /api/v1/ReplaySession/Historical/Search', '200', None, _arr('SbPAM.Models.ReplayMetadata')),
    ('GET /api/v1/Report/DownloadCsv/{reportId}', '200', 'text/csv', STR),
    ('GET /api/v1/Report/DownloadPdf/{reportId}', '200', 'application/pdf', _BIN),
    ('DELETE /api/v1/SecretVault/{id}', '200', None, STR),
    ('POST /api/v1/SiemServer', '201', None, _ref('SbPAM.Models.SiemServer')),
    ('GET /api/v1/SiemServer/Names', '200', None, _arr('SbPAM.Models.NameAndId')),
    ('GET /api/v1/SiemServer/status/{enabled}', '200', None, _arr('SbPAM.Models.SiemServer')),
    ('GET /api/v1/SiemServer/{siemServerId}', '200', None, _ref('SbPAM.Models.SiemServer')),
    ('GET /api/v1/SiemSettings/{siemSettingsId}', '200', None, _ref('SbPAM.Models.SiemSettings')),
    ('POST /api/v1/SiemTemplate', '201', None, _ref('SbPAM.Models.SiemTemplate')),
    ('GET /api/v1/SiemTemplate/attributes', '200', None, {'type': 'array', 'items': STR}),
    ('GET /api/v1/SiemTemplate/Names', '200', None, _arr('SbPAM.Models.NameAndId')),
    ('GET /api/v1/SiemTemplate/{siemTemplateId}', '200', None, _ref('SbPAM.Models.SiemTemplate')),
    ('PUT /api/v1/User', '200', None, _ref('SbPAM.ActiveDirectory.Models.HostUser')),
    ('GET /api/v1/User/GetByUserNameHostId/{username}/{hostId}', '200', None, _ref('SbPAM.ActiveDirectory.Models.HostUser')),
    ('DELETE /api/v1/Website/{id}', '200', None, STR),
    ('POST /api/v1/Website/{websiteId}/User/DeleteMultiple', '200', None, {'type': 'integer', 'format': 'int32'}),
    # the code returns Accepted() with no body
    ('DELETE /api/v1/PasswordComplexity/{id}', '202', 'NOBODY', None),
]
# Success responses that are replaced outright: (route, status) -> (content or None for "no body", description or
# None to keep, headers or None). content maps media type -> {schema, example}.
_SSH_RESP = 'SbPAM.Models.SshCertificateInfoResponse'
RESPONSE_OVERRIDES = [
    ('GET /api/v1/Version', '200',
     {'application/json': {'schema': STR, 'example': '26.07.00123'},
      'text/plain': {'schema': STR, 'example': '26.07.00123'}}, None, None),
    ('GET /api/v1/ActivitySession/{sessionId}/Password', '200',
     {'text/plain': {'schema': STR}, 'application/json': {'schema': STR}}, None, None),
    ('GET /api/v1/ManagedResource/WinRmHttps/{resourceId}/Test', '200',
     {'application/json': {'schema': STR, 'example': 'A1B2C3D4E5F60718293A4B5C6D7E8F9012345678'}}, None, None),
    ('DELETE /api/v1/AdConfiguration/domain/configuration/{id}', '200',
     {'application/json': {'schema': STR, 'example': 'Ok'}}, None, None),
    ('DELETE /api/v1/ManagedAccount/{managedAccountId}', '202', None,
     'The delete was accepted. The response has no body; the Location header holds a text message that includes the '
     'user ID.',
     {'Location': {'description': 'A text message that includes the user ID.', 'schema': STR}}),
    ('GET /api/v1/Credential/GetCredentialSSHCertificate/{credentialId}', '200',
     {'application/json': {'schema': _ref(_SSH_RESP)}},
     'The body wraps the key settings: value holds the credential ID, type, authentication method, key settings, '
     'private key, passphrase, public key and sudo command, and statusCode is 200. The other wrapper properties are '
     'empty.', None),
    ('DELETE /api/v1/UserAndGroupCollection/{userAndGroupCollectionId}', '200', None,
     'The collection was deleted. The body is empty.', None),
    ('DELETE /api/v1/ActionTemplate/{templateId}', '202', None, 'The template is deleted. The body is empty.', None),
]
# Statuses the code returns that the descriptions do not list: (route, status, description)
EXTRA_STATUS = [
    ('GET /api/v1/ActivityGroup/{id}/AccessPolicies', '404', 'No activity group has this ID. The body is the ID.'),
    ('GET /api/v1/AzureAdTenant/RetrieveAll', '400', 'The tenant list could not be retrieved. The body is the message "Unable to retrieve Entra ID Tenant list."'),
    ('PUT /api/v1/MfaConnector/Group/{groupId}', '204', 'No group has this ID. The response has no body.'),
]

# Required fields, read-only fields and bounds for request bodies (from write-shape-diff.json). Each entry makes a
# request-specific copy of the shared schema, so the response schema stays unchanged.
REQUEST_FIXES = [
    ('POST /api/v1/AccessControlPolicy', 'CreateRequest', ['name', 'activityConfigurationId'],
     ['notesRequired', 'ticketRequired', 'approvalTypeRequired', 'activityConfiguration',
      'activityConfigurationMaxSessionLength', 'activities', 'activityGroups'], {}, {}),
    ('POST /api/v1/ActionGroup/Action', 'CreateRequest', ['actionGroupId', 'actionTemplateId'],
     ['createdBy', 'createdDateTimeUtc', 'lastModifiedBy', 'modifiedDateTimeUtc'], {}, {}),
    ('POST /api/v1/Activity', 'CreateRequest', ['name'], [], {}, {}),
    ('POST /api/v1/ConnectionProfile', 'CreateRequest', ['name'], [], {}, {}),
    ('PUT /api/v1/ManagedResource/ServiceAccount/Bulk', 'Request', ['property', 'resourceIds'], [], {}, {}),
    ('POST /api/v1/ManagedResourceGroup', 'CreateRequest', ['name'], [], {}, {}),
    ('POST /api/v1/PasswordComplexity', 'CreateRequest', ['name'], [],
     {'length': {'minimum': 2}, 'maxConsecutive': {'minimum': 1, 'maximum': 128}}, {}),
    ('POST /api/v1/Platform', 'CreateRequest', ['name'], ['basePlatformId', 'showCommandPlans'], {}, {}),
    ('POST /api/v1/Report', 'SaveRequest', [], [], {}, {'reportAttributes': ['operator', 'value']}),
    ('POST /api/v1/Report/Subscribe', 'Request', ['reportId', 'scheduledChangePolicyId'], [], {}, {}),
    ('POST /api/v1/SystemSettings/CredentialPasswordHistoryOptions', 'UpdateRequest', ['id'],
     ['nodeId', 'createdDateTimeUtc', 'modifiedDateTimeUtc'], {}, {}),
    ('PUT /api/v1/SystemSettings/EncryptedFileSettings', 'UpdateRequest', ['encryptedFileMaxSizeMb'], [],
     {'encryptedFileMaxSizeMb': {'minimum': 1, 'maximum': 20}}, {}),
    ('POST /api/v1/UserAndGroupCollection', 'CreateRequest', ['name'], [], {}, {}),
]

HOSTSCAN_NOTE = ('In this operation the `hostScanJobId` path segment holds the ID of a managed resource, not the ID '
                 'of a scan job; the response carries the ID of the new scan job.')
DELETE_BODY_NOTE = ('The server reads the list from the request body of this DELETE request, so the body is '
                    'required. Some HTTP clients and API tools drop the body of a DELETE request; check that yours '
                    'sends it.')
JSONISH_EXTRA = ('application/json-patch+json', 'text/json', 'application/*+json')


def fix_enum_text(text, notes, default_field=None):
    """Replace a pointer to the internal enumNotes field with a pointer to the public Values paragraph."""
    if not isinstance(text, str) or 'enumNotes' not in text:
        return text
    fields = [n['field'] for n in notes]

    def resolve(hint):
        if hint:
            h = hint.lower()
            for f in fields:
                for tok in [t.strip().lower() for t in f.split(',')]:
                    if tok == h or tok.startswith(h) or tok.endswith('.' + h):
                        return f
        return fields[0] if len(fields) == 1 else None

    out = []
    for line in text.split('\n'):
        if 'enumNotes' in line:
            m = re.match(r'- `([^`]+)`', line)
            fld = resolve(m.group(1) if m else default_field)
            tgt = ('the `Values for %s` paragraph' % fld) if fld else 'the `Values for` paragraphs'
            line = re.sub(r'\b([Ss])ee (?:the values in )?enumNotes',
                          lambda mm: '%see %s in the operation description' % (mm.group(1), tgt), line)
            line = line.replace('enumNotes', 'the Values paragraphs')
        out.append(line)
    return '\n'.join(out)



# ---------------------------------------------------------------- revision 3 helpers
def curl_placeholders(ex):
    """<name> placeholders in a curl example become UPPER_CASE words (the docs build strips <...> as tags); the host
    gets the API port."""
    def sub(m):
        w = re.sub(r'(?<=[a-z0-9])(?=[A-Z])', '_', m.group(1).strip())
        return re.sub(r'[^A-Za-z0-9]+', '_', w).strip('_').upper()
    ex = re.sub(r'https://<host>/', 'https://HOST:6500/', ex)
    ex = re.sub(r'https://HOST/', 'https://HOST:6500/', ex)
    return re.sub(r'<([A-Za-z][A-Za-z0-9 _-]*)>', sub, ex)


def apply_text_rules(o, rules, counter):
    """Rewrite description and summary strings in place."""
    if isinstance(o, dict):
        for k, v in list(o.items()):
            if isinstance(v, str) and k in ('description', 'summary'):
                nv = v
                for rx, rep in rules:
                    nv = rx.sub(rep, nv)
                if nv != v:
                    counter.append((v[:70], nv[:70]))
                    o[k] = nv
            elif k not in ('example', 'enum', 'x-enum-varnames'):
                apply_text_rules(v, rules, counter)
    elif isinstance(o, list):
        for v in o:
            apply_text_rules(v, rules, counter)


NS_SEGMENTS = {'SbPAM', 'Models', 'ActiveDirectory', 'Enums', 'Constants', 'Identity', 'WebAPI', 'Controllers',
               'Actors', 'Interfaces', 'Cryptography', 'System', 'ServiceProcess', 'Stealthbits', 'Radius', 'Common',
               'ActiveDirectoryWebApi', 'ActionConstants', 'SshConstants', 'ProxyConstants'}
# applied to the final public name
FINAL_RENAME = {'TupleOfInt32AndInt32': 'IntPair'}
# Revision 5: code-type suffixes (Dto, Entity, Enum) and the internal "actor model" name are not used in public names.
FINAL_RENAME.update({
    'ActionLogDto': 'ActionLogLine', 'CredentialDto': 'CredentialSummary', 'CustomFieldDto': 'CustomFieldValue',
    'ManagedDatabaseDto': 'ManagedDatabaseWithResource', 'SecretVaultDto': 'SecretVaultSummary',
    'WinRmHttpSettingsDto': 'WinRmSettings',
    'AuditChangeRowActorModel': 'AuditChangeRow', 'DataTableOfAuditChangeRowActorModel': 'DataTableOfAuditChangeRow',
    'AccountIdAndEntity': 'AccountReference', 'ActivityIdAndEntity': 'ActivityReference',
    'ActivityIdAndEntityType': 'ActivityOrGroupReference', 'ManagedAccountIdAndEntityType': 'ManagedAccountOrGroupReference',
    'ManagedResourceIdAndEntity': 'ManagedResourceReference', 'ManagedResourceIdAndEntityType': 'ManagedResourceOrGroupReference',
    'ActivityAndGroupEntityType': 'ActivityOrGroupKind', 'ManagedAccountCandidateViewEntityType': 'ManagedAccountCandidateKind',
    'ManagedAccountViewEntityTypeEnum': 'ManagedAccountKind', 'ManagedResourceAndGroupEntityType': 'ManagedResourceOrGroupKind',
    'AdUserFormatEnum': 'AdUserFormat', 'ImportanceEnums': 'EmailImportance', 'PriorityEnums': 'EmailPriority',
    'ManagedAccountGroupCandidateViewAppGroupTypeEnum': 'ManagedAccountGroupAppGroupType',
    'ManagedResourceCandidateViewAppResourceTypeEnum': 'ManagedResourceAppResourceType',
    'ManagedResourceGroupManageAccountsEnum': 'ManagedResourceGroupManageAccounts',
    'ManagedResourceLocalUserViewAppUserTypeEnum': 'ManagedResourceLocalUserAppUserType',
    'ManagedResourceManageAccountEnum': 'ManagedResourceManageAccount', 'ManagedTypeEnum': 'ManagedStatus',
    'PasswordComplexityTypeEnum': 'PasswordComplexityType', 'PlatformTypeEnum': 'PlatformType',
    'ReportOperatorEnum': 'ReportOperator', 'UserRoleEnums': 'UserRoleLevel'})
# Revision 5: "This model represents ..." descriptions. Generic rule: drop the prefix and keep the sentence; the
# explicit entries (keyed by the sentence the generic rule produces) fix broken grammar and developer wording.
MODEL_PREFIX_RE = re.compile(r'^This model represents (?:(an?|the) )?(.+)$', re.S)
MODEL_TEXT = {
    'A policy which can be associated with an elevation session. Policies are matched to a particular group, user and host and sorted by priority to determine which policy to use.':
        'A policy that can be applied to an elevation session. Policies are matched to a group, user and host and sorted by priority to determine which policy applies.',
    'An action which is a member of an action group.': 'An action in an action group.',
    'A group of actions which can be performed in a particular order (in the execution order of each action) by an action service.':
        'A group of actions that an action service performs in order, lowest execution order first.',
    'A job that has been scheduled to an associated action queue.': 'A job that is scheduled on an action queue.',
    'A log entry associated with the execution of an action queue action.': 'A log entry for the execution of an action queue action.',
    'A parameter statically associated with an action.': 'A parameter with a fixed value for an action.',
    'A collection of action queue actions associated with the actions in an action group, which can be scheduled for execution. The queue is ordered by the execution order of each action, lowest first.':
        'A queue of the actions in an action group, which can be scheduled for execution. The queue is ordered by the execution order of each action, lowest first.',
    'An action which is a member of an action queue and can be execute by and action service.':
        'An action in an action queue that an action service can run.',
    'A dynamically associated with an action queue action and then applied to an action in the action service.':
        'A parameter that is added to an action queue action at run time and then applied to the action in the action service.',
    'A property which can be associated with an action service.': 'A property of an action service.',
    "A demand template that is used to find an action service that can process a particular type of action. This is done by searching for this demand template using the template id associated with the action and then matching this demand template's name and value against a property associated with a registered action service.":
        "A demand template that is used to find an action service that can process a type of action. Privilege Secure looks up the demand template by the template ID of the action and then matches the name and value of the demand template against the properties of the registered action services.",
    'A template for a parameter associated with an action group action.': 'A template for a parameter of an action in an action group.',
    'An active directory domain.': 'An Active Directory domain.',
    'An activity that a user can perform such as requesting elevated access to a resource.':
        'An activity that a user can perform, such as requesting elevated access to a resource.',
    'A collection of settings for running an activity.': 'The settings for running an activity.',
    'A collection of settings (name/value pairs) for running an activity.': 'The settings (name and value pairs) for running an activity.',
    'An group of activities.': 'A group of activities.',
    'A session which runs a particular activity such such as granting an user elevated access to a resource.':
        'A session that runs an activity, such as giving a user elevated access to a resource.',
    'A token that can be used by a service for authorization.': 'A token that a service can use for authorization.',
    'An approval workflow approval.': 'An approval in an approval workflow.',
    'An approval workflow tier.': 'A tier of an approval workflow.',
    'The stored credentials for a user.': 'The stored credentials of a user.',
    'A host machine.': 'A host machine.',
    'A group which may be associated with target host.': 'A group that can be associated with a target host.',
    'A user which may be associated with target host.': 'A user that can be associated with a target host.',
    'A managed resource such as a Host.': 'A managed resource, such as a host.',
    'An platform on which a particular activity can be performed.': 'A platform on which an activity can be performed.',
    'A policy which specifies a group or groups to be protected on a collection of managed resources.':
        'A policy that specifies the groups to protect on a collection of managed resources.',
    'A group protected by a protected group policy.': 'A group that is protected by a protection policy.',
    'A member of a protected group associated with a protected group policy.': 'A member of a group that a protection policy protects.',
    'A registration for an service.': 'A registration for a service.',
}


def model_text(desc):
    """Plain description for a schema description that starts with "This model represents", or None."""
    m = MODEL_PREFIX_RE.match(desc)
    if not m:
        return None
    out = (m.group(1) or 'a').capitalize() + ' ' + m.group(2)
    return MODEL_TEXT.get(out, out)


PUBLIC_RENAME = {
    'SbPAM.Models.NatsStringDto': 'StringResult',
    'SbPAM.ActiveDirectory.Models.ActiveDirectoryController': 'ActiveDirectoryDC',
    'System.ServiceProcess.ServiceControllerStatus': 'ServiceStatus',
}


def public_base(n, keep_dto=False):
    """Short public name for a fully qualified .NET schema name."""
    if n in PUBLIC_RENAME:
        return PUBLIC_RENAME[n]
    parts = n.split('.')
    i = 0
    while i < len(parts) - 1 and parts[i] in NS_SEGMENTS:
        i += 1
    rest = parts[i:]
    # a controller class that only holds nested types: drop the class suffix
    rest = [r[:-len('Controller')] if (r.endswith('Controller') and len(rest) > 1 and k < len(rest) - 1) else r
            for k, r in enumerate(rest)]
    s = ''.join(rest)
    s = re.sub(r'SbPAM(?=[A-Z])', '', s)
    s = re.sub(r'(?<=[a-z])Async(?=Request|$)', '', s)
    if not keep_dto:
        s = re.sub(r'Dto(?=$|[A-Z])', '', s)
    s = re.sub(r'Request(Create|Update)Request$', r'\1Request', s)
    s = re.sub(r'[^A-Za-z0-9_-]', '_', s)
    return s


def public_names(names):
    """Map old schema names to short public names. Deterministic: names are handled in sorted order. On a collision
    a name that lost its Dto suffix gets it back, then a name outside SbPAM.Models gets its closest namespace
    segment as a prefix, then the later names get a number."""
    names = sorted(names)
    out = {n: public_base(n) for n in names}
    cnt = collections.Counter(out.values())
    for n in names:
        if cnt[out[n]] > 1:
            out[n] = public_base(n, keep_dto=True)
    cnt = collections.Counter(out.values())
    for n in names:
        if cnt[out[n]] > 1 and not n.startswith('SbPAM.Models.'):
            ns = [p for p in n.split('.')[:-1] if p in NS_SEGMENTS and p not in ('SbPAM', 'Models', 'System')]
            if ns:
                out[n] = ns[-1] + out[n]
    seen = collections.Counter()
    for n in names:
        seen[out[n]] += 1
        if seen[out[n]] > 1:
            out[n] = '%s%d' % (out[n], seen[out[n]])
    return out


# Revision 5: property descriptions that named code classes or internal mechanics, in plain words.
# Key: (public schema name, property). A schema listed as a tuple of names gets the same text on each.
PROP_TEXT = {
    (('Host', 'HostUpdateRequest'), 'lsaLookupCache'): 'Most recent value of the LSA lookup cache size setting on the host.',
    (('BatchResponse',), 'status'): 'HTTP status code of this response.',
    (('ActivitySession',), 'vaultId'): 'ID of the vault to use to look up the credential for this session. Leave it empty to use a credential that is not in a vault.',
    (('ActivitySession',), 'loginAccountName'): 'Account name generated from the login account name format.',
    (('ActivitySession',), 'credentialId'): 'ID of the credential for this session. If you do not specify one, the credential of the host of the managed resource is used, if there is one.',
    (('ActionJob',), 'managedObjectId'): 'ID of the managed item. The type of the item is in managedObjectType.',
    (('EventMessage',), 'sessionId'): 'Optional ID of the activity session for this event.',
    (('HostGroupGroupJoin',), 'domainGroupMemberId'): 'ID of the member Active Directory group.',
    (('ManagedAccountSessionCount',), 'managedAccountId'): 'ID of the managed account of the user.',
    (('ActionJobSchedule',), 'name'): 'Name of the action group that is associated with the action job.',
    (('ActionJobSchedule',), 'actionQueueId'): 'ID of the action queue that is associated with the action job.',
    (('ActionQueue',), 'heartBeatDateTimeUtc'): 'Date and time in UTC of the last update to the queue. It changes when an action in the queue is updated.',
    (('ActionQueueAction',), 'heartbeatUtc'): 'Date and time in UTC of the last update from the running action. Privilege Secure uses it to detect an action job that has stalled.',
    (('ManagedDatabase', 'ManagedDatabaseWithResource', 'ManagedDatabaseUpdateRequest'), 'integratedSecurity'):
        'For SQL Server databases: true to connect with integrated security.',
    (('ConnectorConfigurationValue',), 'displayOrder'): 'Position of this setting in the list shown in the console.',
    (('ActionTemplateParameter',), 'valueSet'): 'Allowed values (if restricted).',
    (('ActionTemplateParameter',), 'shouldSerialize_ValueSet'): 'Not used.',
}
# examples must not look like real data: GUIDs come from EXAMPLE_GUIDS, SIDs and addresses use documentation values
DOC_SID = 'S-1-5-21-1111111111-2222222222-3333333333'
ALLOWED_SID_PARTS = {('1111111111', '2222222222', '3333333333'), ('1234567890', '1234567890', '123456789'), ('0', '0', '0')}
SID_RE = re.compile(r'S-1-5-21-(\d+)-(\d+)-(\d+)((?:-\d+)?)')
EXAMPLE_REPLACE = {'10.4.2.1': '10.0.20348'}
GUID_IN_TEXT_RE = re.compile(r'[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}')


def clean_example_string(x, counter):
    def g(m):
        v = m.group(0)
        if v.lower() in EXAMPLE_GUIDS or v == NIL_GUID:
            return v
        counter.append(v)
        return example_guid(v)

    def sid(m):
        if (m.group(1), m.group(2), m.group(3)) in ALLOWED_SID_PARTS:
            return m.group(0)
        counter.append(m.group(0))
        return DOC_SID + m.group(4)
    y = GUID_IN_TEXT_RE.sub(g, x)
    y = SID_RE.sub(sid, y)
    if y in EXAMPLE_REPLACE:
        counter.append(y)
        y = EXAMPLE_REPLACE[y]
    return y


def clean_example_value(v, counter):
    if isinstance(v, str):
        return clean_example_string(v, counter)
    if isinstance(v, list):
        return [clean_example_value(x, counter) for x in v]
    if isinstance(v, dict):
        return {k: clean_example_value(x, counter) for k, x in v.items()}
    return v


def clean_examples(o, counter):
    """Replace example values that look like real GUIDs, SIDs or addresses, wherever an example sits."""
    if isinstance(o, dict):
        for k, v in list(o.items()):
            if k in ('example', 'examples'):
                o[k] = clean_example_value(v, counter)
            elif k != 'enum':
                clean_examples(v, counter)
    elif isinstance(o, list):
        for v in o:
            clean_examples(v, counter)


RFC3339_RE = re.compile(r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$')
EXAMPLE_DATETIME = '2024-03-27T01:01:01Z'


def to_rfc3339(v):
    """A date-time example in RFC 3339 form: compact dates get dashes, placeholders become a sample time."""
    m = re.match(r'^(\d{4})-?(\d{2})-?(\d{2})[Tt ](\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|z|[+-]\d{2}:?\d{2})?$', v)
    if not m:
        return EXAMPLE_DATETIME
    tz = (m.group(8) or 'Z').upper()
    if tz != 'Z' and ':' not in tz:
        tz = tz[:3] + ':' + tz[3:]
    return '%s-%s-%sT%s:%s:%s%s%s' % (m.group(1), m.group(2), m.group(3), m.group(4), m.group(5), m.group(6),
                                      m.group(7) or '', tz)


def fix_schema_examples(o, changes):
    """date-time examples that sit on schema properties must be RFC 3339 too."""
    if isinstance(o, dict):
        if o.get('format') == 'date-time' and isinstance(o.get('example'), str) and not RFC3339_RE.match(o['example']):
            changes.append(o['example'])
            o['example'] = to_rfc3339(o['example'])
        for k, v in o.items():
            if k != 'example':
                fix_schema_examples(v, changes)
    elif isinstance(o, list):
        for v in o:
            fix_schema_examples(v, changes)


def load_response_fixes():
    """Response corrections from plans/api-inventory/spec/response-fixes/slice-*.json. Input files: a missing
    directory or file is not an error, the step then changes nothing."""
    d = os.path.join(INV, 'spec', 'response-fixes')
    fixes, files = [], []
    if os.path.isdir(d):
        for fn in sorted(os.listdir(d)):
            if fn.startswith('slice-') and fn.endswith('.json'):
                try:
                    data = load(d, fn)
                except (OSError, ValueError):
                    continue
                files.append(fn)
                fixes += [x for x in (data.get('fixes') or []) if isinstance(x, dict)]
    return fixes, files


def resolve_schema(sch, schemas):
    """Follow $ref and a single-element allOf; returns (name or None, schema)."""
    name = None
    for _ in range(6):
        if not isinstance(sch, dict):
            return name, {}
        if '$ref' in sch:
            name = ref_name(sch['$ref'])
            sch = schemas.get(name, {})
        elif isinstance(sch.get('allOf'), list) and len(sch['allOf']) == 1:
            sch = sch['allOf'][0]
        else:
            break
    return name, sch if isinstance(sch, dict) else {}


def example_guid(label):
    key = re.sub(r'[^a-z0-9]+', '', str(label).lower())
    return EXAMPLE_GUIDS[int(hashlib.md5(key.encode('utf-8')).hexdigest(), 16) % len(EXAMPLE_GUIDS)]


def fix_example(ex, sch, schemas, changes, depth=0):
    """Return an example whose values fit the schema: GUID-shaped strings on uuid fields, members of the enum."""
    if depth > 8:
        return ex
    name, rs = resolve_schema(sch, schemas)
    if isinstance(ex, str):
        if rs.get('type') == 'integer' and re.fullmatch(r'-?\d+', ex):
            changes.append(ex)
            return int(ex)
        if rs.get('type') == 'string' and rs.get('format') == 'date-time' and not RFC3339_RE.match(ex):
            changes.append(ex)
            return to_rfc3339(ex)
        if rs.get('type') == 'string' and rs.get('format') == 'uuid' and not GUID_RE.match(ex):
            changes.append(ex)
            return example_guid(ex)
        if rs.get('type') == 'string' and not rs.get('format') and ID_PLACEHOLDER_RE.match(ex):
            changes.append(ex)
            return example_guid(ex)
        return ex
    if isinstance(ex, bool):
        return ex
    if isinstance(ex, int):
        if isinstance(rs.get('enum'), list) and rs['enum'] and ex not in rs['enum']:
            changes.append(ex)
            pref = ENUM_EXAMPLE_PREFERRED.get(name)
            return pref if pref in rs['enum'] else rs['enum'][0]
        return ex
    if isinstance(ex, dict):
        props = rs.get('properties') or {}
        res = {}
        for k, v in ex.items():
            if k not in props:
                res[k] = v
            elif v is None and '$ref' in props[k]:
                changes.append(None)  # a bare $ref cannot be null in OpenAPI 3.0, so the example leaves the key out
            else:
                res[k] = fix_example(v, props[k], schemas, changes, depth + 1)
        return res
    if isinstance(ex, list):
        items = rs.get('items') or {}
        return [fix_example(v, items, schemas, changes, depth + 1) for v in ex]
    return ex




# ---------------------------------------------------------------- full spec and public filter
FULL_NAME = 'privilegesecure-26.07.3.full.openapi.json'
PUBLIC_NAME = 'privilegesecure-26.07.3.openapi.json'
INTERNAL_LEAD = 'Internal. Not part of the public API.'
INTERNAL_TRAIL = 'Details not reviewed for external use.'
INTERNAL_NOTE = ('This file lists every route of the 26.07.3 backend, including the ones that are not part of the public '
                 'API. Operations marked x-internal: true have not been reviewed for external use. Internal file: do not '
                 'publish, do not copy to the docs site, do not send to customers. The public spec is produced from this '
                 'file with: python3 tools/api-inventory/build_spec.py --filter-public FULL.json PUBLIC.json')
INTERNAL_REASONS = ('hidden-by-review', 'cautioned-not-published', 'hidden-after-review', 'internal-plumbing')
REASON_TEXT = {
    'hidden-by-review': 'The audience review voted this route hidden (not for customers).',
    'cautioned-not-published': 'The audience review voted this route public with caution, and the dev team does not '
                               'publish it, so it was left out of the public API.',
    'hidden-after-review': 'The audience review voted this route public, but it was hidden after review (anonymous '
                           'routes that return personal data, or routes with unreliable responses).',
    'internal-plumbing': 'The audience review judged this route to be internal plumbing between the product parts '
                         '(console, services, proxy), not a customer API.'}
STATUS_TEXT = {'200': 'The call succeeded.', '201': 'Created.', '202': 'Accepted.', '204': 'The call succeeded. No body.',
               '400': 'The request was not accepted.', '401': 'Not signed in or the token is not valid.',
               '403': 'The signed-in user is not allowed to do this.', '404': 'Not found.', '409': 'Conflict.',
               '500': 'Server error.'}


def public_info():
    return collections.OrderedDict([
        ('title', 'Netwrix Privilege Secure for Access Management API'),
        ('description', 'REST API for Netwrix Privilege Secure for Access Management. Operations available in the '
                        'web console are available through this API. Sign in to get a JSON Web Token (JWT) and send '
                        'it in the Authorization header as a bearer token.'),
        ('version', '26.07.3')])


def dump_spec(spec):
    return json.dumps(spec, indent=2, ensure_ascii=False) + '\n'


def filter_public(full):
    """The public spec from the full one: drop x-internal operations and the paths they leave empty, keep only the
    schemas the remaining operations reach, drop every x-internal key, and set info to the public text."""
    spec = copy.deepcopy(full)
    paths = collections.OrderedDict()
    for p, item in spec['paths'].items():
        kept = collections.OrderedDict((m, o) for m, o in item.items()
                                       if not (isinstance(o, dict) and o.get('x-internal') is True))
        if any(m in METHODS for m in kept):
            paths[p] = kept
    for item in paths.values():
        for o in item.values():
            if isinstance(o, dict):
                o.pop('x-internal', None)
                o.pop('x-internal-reason', None)
    schemas = spec['components']['schemas']
    reach = set()
    walk_refs(paths, lambda d: reach.add(ref_name(d['$ref'])))
    todo = list(reach)
    while todo:
        n = todo.pop()
        if n not in schemas:
            continue
        acc = set()
        walk_refs(schemas[n], lambda d: acc.add(ref_name(d['$ref'])))
        for a in acc - reach:
            reach.add(a)
            todo.append(a)
    spec['components']['schemas'] = collections.OrderedDict((k, v) for k, v in schemas.items() if k in reach)
    used = {o['tags'][0] for item in paths.values() for o in item.values() if o.get('tags')}
    spec['tags'] = [{'name': t} for t in sorted(used, key=str.lower)]
    spec['paths'] = paths
    spec['info'] = public_info()
    return spec


def action_words(act):
    act = re.sub(r'(?<=.)Async$', '', act or '')
    w = re.sub(r'(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])', ' ', act).split()
    w = [x if (len(x) > 1 and x.isupper()) else x.lower() for x in w]
    if not w:
        return 'Call'
    w[0] = w[0][:1].upper() + w[0][1:]
    return ' '.join(w)


def strip_code_cites(t):
    t = re.sub(r'\s+', ' ', t or '').strip()
    prev = None
    while prev != t:
        prev = t
        t = re.sub(r'\s*\([^()]*\.cs[^()]*\)\s*$', '', t)
    return strip_line_cites(t)


LINE_CITE_RE = re.compile(r'\s*\((?:see |at )?lines? \d+(?:\s*[-\u2013,]\s*\d+)*\)|,?\s+(?:at |on )?lines? \d+(?:\s*[-\u2013]\s*\d+)?(?![\w.])', re.I)


def strip_line_cites(t):
    """Remove source line cites such as '(line 896)' or 'line 896' from internal text."""
    return LINE_CITE_RE.sub('', t or '').strip()


def internal_reason(rid, aud, rl_dropped, rl_after):
    if rid in rl_after:
        return 'hidden-after-review'
    if rid in rl_dropped:
        return 'cautioned-not-published'
    a = aud.get(rid)
    if a is None:
        return 'hidden-by-review'
    if a.get('final') == 'public':
        return 'cautioned-not-published'
    if 'internal-plumbing' in (a.get('reasonCodes') or []):
        return 'internal-plumbing'
    return 'hidden-by-review'


FULL_SECRET_PATS = collections.OrderedDict([
    ('PSAM id', r'PSAM-\d+'), ('AB id', r'AB#\d+'), ('ticket id', r'\b(?!SHA|UTF|RFC|TLS|AES|RSA|MD|HMAC|ISO|ECDSA|PBKDF|SSL)[A-Z]{2,6}-\d{2,6}\b'),
    ('user path', r'/Users/[a-z]'), ('windows path', r'[A-Za-z]:\\\\'),
    ('lab host', r'(?i)chucksoft|cloud\.lab|cloudshare|nps-server'),
    ('email', r'[A-Za-z0-9._%+-]+@(?!example\.)[A-Za-z0-9.-]+\.[a-z]{2,}'), ('jwt', r'eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}'),
    ('bearer literal', r'(?i)bearer\s+[A-Za-z0-9._~+/=-]{16,}'),
    ('private key', r'-----BEGIN [A-Z ]*PRIVATE KEY-----'), ('stack', r'\\r|\\n\s*at\s')])


def check_full(full, route_keys, public_keys, public_ids_count):
    """Structural checks of the full spec. route_keys: set of (METHOD, template key) that must all be present;
    public_keys: the subset that is public."""
    fails = []
    schemas = full['components']['schemas']
    refs = set()
    walk_refs(full, lambda d: refs.add(ref_name(d['$ref'])))
    for r in sorted(x for x in refs if x not in schemas):
        fails.append('unresolved $ref: %s' % r)
    got, oids, flagged, unflagged = set(), collections.Counter(), set(), set()
    for p, item in full['paths'].items():
        for m, op in item.items():
            if m not in METHODS:
                continue
            k = (m.upper(), tkey(p))
            if k in got:
                fails.append('duplicate operation %s %s' % k)
            got.add(k)
            oids[op['operationId']] += 1
            (flagged if op.get('x-internal') is True else unflagged).add(k)
            tn = re.findall(r'\{([^}]+)\}', p)
            pn = [x['name'] for x in op.get('parameters', []) if x['in'] == 'path']
            if sorted(tn) != sorted(pn):
                fails.append('path params mismatch %s %s: %s vs %s' % (m, p, tn, pn))
            for x in op.get('parameters', []):
                if x['in'] == 'path' and not x.get('required'):
                    fails.append('path param not required %s %s' % (p, x['name']))
            if not op.get('responses'):
                fails.append('no responses %s %s' % (m, p))
            if op.get('tags') is None or len(op['tags']) != 1:
                fails.append('operation without exactly one tag %s %s' % (m, p))
            if op.get('x-internal') is True and re.search(r'\blines? \d+', op.get('description', ''), re.I):
                fails.append('source line cite in an internal description %s %s' % (m, p))
            if op.get('x-internal') is True:
                if 'Status codes listed here come from the generated API description and may be incomplete.' not in op.get('description', ''):
                    fails.append('internal status codes sentence %s %s' % (m, p))
                if op.get('x-internal-reason') not in INTERNAL_REASONS:
                    fails.append('bad x-internal-reason %s %s' % (m, p))
                if not op.get('description', '').startswith(INTERNAL_LEAD):
                    fails.append('internal description lead %s %s' % (m, p))
                if INTERNAL_TRAIL not in op.get('description', ''):
                    fails.append('internal description trail %s %s' % (m, p))
            elif 'x-internal-reason' in op or 'x-internal' in op:
                fails.append('public operation carries an x-internal key %s %s' % (m, p))
    for k, v in oids.items():
        if v > 1:
            fails.append('duplicate operationId ' + k)
    if got != route_keys:
        fails.append('route set mismatch: missing %s extra %s' % (sorted(route_keys - got)[:5], sorted(got - route_keys)[:5]))
    if unflagged != public_keys:
        fails.append('public operation set mismatch: %d unflagged, %d expected' % (len(unflagged), len(public_keys)))
    if flagged != route_keys - public_keys:
        fails.append('non-public operations not all flagged x-internal')
    for k, v in schemas.items():
        if not re.fullmatch(r'[A-Za-z0-9._-]+', k):
            fails.append('bad schema key ' + k)
    strings = []

    def walk(o, path=''):
        if isinstance(o, dict):
            for k, v in o.items():
                if k != '$ref':
                    walk(v, path + '/' + k)
        elif isinstance(o, list):
            for i, v in enumerate(o):
                walk(v, path + '/%d' % i)
        elif isinstance(o, str) and not path.endswith('/version'):
            strings.append((path, o))
    walk(full)
    hits = []
    for path, s in strings:
        for name, pat in FULL_SECRET_PATS.items():
            mm = re.search(pat, s)
            if mm:
                hits.append((name, path, s[max(0, mm.start() - 30):mm.end() + 30].replace('\n', ' ')))
        for im in re.findall(r'(?<![\d.])\d{1,3}(?:\.\d{1,3}){3}(?![\d.])', s):
            if not im.startswith('192.0.2.') and im not in ('0.0.0.0', '255.255.255.255', '127.0.0.1'):
                hits.append(('address', path, im))
        for gm in GUID_IN_TEXT_RE.findall(s):
            if gm.lower() not in EXAMPLE_GUIDS and gm != NIL_GUID:
                hits.append(('guid', path, gm))
        for sm in SID_RE.finditer(s):
            if (sm.group(1), sm.group(2), sm.group(3)) not in ALLOWED_SID_PARTS:
                hits.append(('sid', path, sm.group(0)))
    for h in hits[:40]:
        print('FULL-LEAK', h)
    if hits:
        fails.append('%d secret/host/ticket pattern hits in the full spec' % len(hits))
    return fails


def cli_filter(full_path, public_path):
    with open(full_path, encoding='utf-8') as f:
        full = json.load(f, object_pairs_hook=collections.OrderedDict)
    text = dump_spec(filter_public(full))
    os.makedirs(os.path.dirname(os.path.abspath(public_path)), exist_ok=True)
    with open(public_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print('public %s sha256 %s' % (public_path, hashlib.sha256(text.encode('utf-8')).hexdigest()))


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('--out-dir', default=os.path.join(INV, 'spec'))
    ap.add_argument('--base', default=None, help='the stale base spec (default: %s)' % BASE_REL)
    ap.add_argument('--filter-public', nargs=2, metavar=('FULL', 'PUBLIC'),
                    help='write PUBLIC from the full spec FULL and stop (no other inputs are read)')
    args = ap.parse_args()
    if args.filter_public:
        cli_filter(*args.filter_public)
        return

    base = load_base(args.base)
    sup = load(INV, 'supplement', 'merged.json')
    rlist = load(INV, 'descriptions', 'route-list.json')
    descs = {d['id']: d for d in load(INV, 'descriptions', 'descriptions.json')['routes']}
    wsd = load(INV, 'descriptions', 'write-shape-diff.json')
    code_routes = load(INV, 'routes.json')
    corr = load(INV, 'models', 'schema-corrections.json')
    enum_map = load(INV, 'models', 'enum-map.json')['enums']
    rex = load(INV, 'clients', 'request-examples.json')['routes']
    adsch = load(INV, 'clients', 'ad-schemas.json')['schemas']

    report = collections.OrderedDict()
    notes = collections.defaultdict(list)  # report sections -> lines

    # ------------------------------------------------------------ route universe
    routes = rlist['routes']
    dropped = set(rlist.get('droppedForCaution', []))
    ids = [r['id'] for r in routes]
    assert len(ids) == len(set(ids)), 'duplicate route ids'
    assert not (set(ids) & dropped), 'dropped route present in route list'

    def split_id(i):
        m, p = i.split(' ', 1)
        return m.upper(), p

    # choose one spelling per path template
    by_t = collections.defaultdict(list)
    for r in routes:
        m, p = split_id(r['id'])
        by_t[tkey(p)].append((m, p, r))
    chosen_path = {}   # tkey -> spec path
    for t, lst in by_t.items():
        spellings = collections.Counter(strip_constraints(p) for _, p, _ in lst)
        # most common spelling, ties broken alphabetically
        best = sorted(spellings.items(), key=lambda kv: (-kv[1], kv[0]))[0][0]
        chosen_path[t] = best
        if len(spellings) > 1:
            notes['path_unify'].append('%s: spellings %s -> %s' % (t, sorted(spellings), best))

    # ------------------------------------------------------------ source operations
    src_base, src_sup = {}, {}
    for p, item in base['paths'].items():
        for m, o in item.items():
            if m in METHODS:
                src_base[(m.upper(), tkey(p))] = (p, o)
    for p, item in sup['paths'].items():
        for m, o in item.items():
            if m in METHODS:
                src_sup[(m.upper(), tkey(p))] = (p, o)
    overlay_ops = {}
    for k, v in sup['overlay']['operations'].items():
        m, p = k.split(' ', 1)
        overlay_ops[(m.upper(), tkey(p))] = v

    code_idx = {}
    for r in code_routes:
        code_idx[(r['method'].upper(), tkey(r['route']))] = r

    ex_idx = {}
    for r in rex:
        ex_idx[(r['verb'].upper(), tkey(r['route']))] = r

    wsd_idx = {}
    for c in wsd['calls']:
        rt = c['route']
        if re.match(r'^[A-Za-z]+ /', rt):  # the route field carries the method as a prefix
            rt = rt.split(' ', 1)[1]
        wsd_idx[(c['method'].upper(), tkey(rt))] = c

    # ------------------------------------------------------------ schemas
    schemas = {}
    for k, v in base['components']['schemas'].items():
        schemas[k] = copy.deepcopy(v)
    for k, v in sup['schemas'].items():
        if k in schemas and schemas[k] != v:
            notes['schema_conflict'].append('%s defined in both base and supplement; supplement kept' % k)
        schemas[k] = copy.deepcopy(v)

    applied = collections.Counter()
    skipped_corr = []
    for sname, entry in sorted(corr.items()):
        for c in entry.get('corrections', []):
            act = c.get('action')
            if c.get('status') != 'verified':
                skipped_corr.append('%s.%s (%s, status %s)' % (sname, c.get('property'), act, c.get('status')))
                continue
            if act == 'remove_schema':
                continue  # decided after reachability below
            sch = schemas.get(sname)
            if sch is None:
                notes['corr_missing_schema'].append('%s (%s)' % (sname, act))
                continue
            if act == 'update_enum':
                continue  # enum values come from enum-map
            prop = c.get('property')
            props = sch.setdefault('properties', {}) if 'enum' not in sch else None
            if props is None:
                notes['corr_on_enum'].append('%s.%s' % (sname, prop))
                continue
            if act == 'add_property':
                props[prop] = copy.deepcopy(c['definition'])
            elif act in ('modify_property', 'set_not_nullable'):
                props[prop] = copy.deepcopy(c['definition'])
            elif act == 'add_constraint':
                props.setdefault(prop, {}).update(copy.deepcopy(c['definition']))
            elif act == 'remove_property':
                props.pop(prop, None)
                if isinstance(sch.get('required'), list) and prop in sch['required']:
                    sch['required'].remove(prop)
            else:
                notes['corr_unknown'].append('%s.%s %s' % (sname, prop, act))
                continue
            applied[act] += 1
    remove_schemas = [s for s, e in corr.items() for c in e.get('corrections', [])
                      if c.get('action') == 'remove_schema' and c.get('status') == 'verified']

    # live-confirmed extra properties on AD schemas
    ad_added = []
    for s in adsch:
        sch = schemas.get(s['schema'])
        if not sch or 'enum' in sch:
            continue
        for p in s['properties']:
            if p['inSpec'] or p.get('evidenceLevel') != 'live-confirmed':
                continue
            lv = p.get('live') or {}
            types = [t for t in lv.get('jsonTypes', []) if t != 'null']
            t = types[0] if types else 'string'
            d = {'type': {'number': 'number', 'integer': 'integer', 'boolean': 'boolean', 'string': 'string',
                          'array': 'array', 'object': 'object'}.get(t, 'string')}
            if d['type'] == 'array':
                d['items'] = {}
            if d['type'] == 'string' and p['name'].lower().endswith('utc'):
                d['format'] = 'date-time'
            if 'null' in lv.get('jsonTypes', []):
                d['nullable'] = True
            sch.setdefault('properties', {}).setdefault(p['name'], d)
            ad_added.append('%s.%s' % (s['schema'], p['name']))

    # overlay descriptions (schema and property text)
    for sname, ov in sup['overlay'].get('schemas', {}).items():
        sch = schemas.get(sname)
        if not sch:
            continue
        if ov.get('description'):
            sch['description'] = ov['description']
        for pn, pv in (ov.get('properties') or {}).items():
            tgt = (sch.get('properties') or {}).get(pn)
            if tgt is not None and pv.get('description') and '$ref' not in tgt:
                tgt['description'] = pv['description']

    # revision 2: neutral wording for inherited developer notes, and schemas the sources do not hold
    text_fixed = []
    for (sname, prop), txt in sorted(SCHEMA_TEXT.items(), key=lambda kv: (kv[0][0], kv[0][1] or '')):
        sch = schemas.get(sname)
        if sch is None:
            notes['text_fix_missing'].append('%s.%s' % (sname, prop))
            continue
        tgt = sch if prop is None else (sch.get('properties') or {}).get(prop)
        if tgt is None or '$ref' in tgt:
            notes['text_fix_missing'].append('%s.%s' % (sname, prop))
            continue
        tgt['description'] = txt
        text_fixed.append('%s.%s' % (sname, prop) if prop else sname)
    for n, sch in NEW_SCHEMAS.items():
        if n in schemas:
            notes['new_schema_exists'].append(n)
        else:
            schemas[n] = copy.deepcopy(sch)
            notes['schema_added'].append('%s (shape from the release models)' % n)

    # schemas referenced by corrections but absent from the spec
    unresolved0 = set()
    for sch in schemas.values():
        walk_refs(sch, lambda d: unresolved0.add(ref_name(d['$ref'])))
    for n in sorted(x for x in unresolved0 if x and x not in schemas):
        if n in enum_map:
            schemas[n] = {'type': 'integer', 'format': 'int32', 'enum': [0]}
            notes['schema_added'].append('%s (enum from enum-map)' % n)
        elif n == 'SbPAM.Models.RuntimeParameterOverride':
            schemas[n] = {'type': 'object', 'description': 'A value that replaces one action parameter for a single run.',
                          'properties': {'actionId': {'type': 'string', 'format': 'uuid'},
                                         'parameterName': {'type': 'string', 'nullable': True},
                                         'value': {'type': 'string', 'nullable': True}}}
            notes['schema_added'].append('%s (object synthesized from the correction note: actionId, parameterName, value)' % n)

    # enums -> integer
    enum_converted, enum_unmapped = [], []

    # .NET framework enums with fixed, documented values (not in enum-map)
    DOTNET = {
        'System.DayOfWeek': {'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5,
                             'Saturday': 6},
        'System.ServiceProcess.ServiceControllerStatus': {'Stopped': 1, 'StartPending': 2, 'StopPending': 3,
                                                          'Running': 4, 'ContinuePending': 5, 'PausePending': 6,
                                                          'Paused': 7}}

    def convert_enum(name, sch):
        mp = enum_map.get(name) or RELEASE_ENUMS.get(name) or DOTNET.get(name)
        if not mp:
            return False
        items = sorted(mp.items(), key=lambda kv: (kv[1], kv[0]))
        sch['type'] = 'integer'
        sch['format'] = 'int32'
        sch['enum'] = [v for _, v in items]
        sch['x-enum-varnames'] = [k for k, _ in items]
        sch['description'] = ENUM_LEAD.get(name, '') + 'Integer values: ' + ', '.join('%d = %s' % (v, k) for k, v in items) + '.'
        if name in FLAG_ENUMS:
            sch['description'] += ' A flags value: add the numbers together to combine members.'
        if name in RELEASE_ENUMS:
            notes['release_enum'].append(name)
        return True

    for k in sorted(schemas):
        sch = schemas[k]
        if 'enum' in sch:
            if all(isinstance(v, int) for v in sch['enum']) and 'x-enum-varnames' in sch:
                continue
            if k in enum_map:
                if convert_enum(k, sch):
                    enum_converted.append(k)
                continue
            if convert_enum(k, sch):
                enum_converted.append(k)
                if k in DOTNET:
                    notes['dotnet_enum'].append(k)
            else:
                enum_unmapped.append(k)
    # check update_enum additions are present
    for sname, entry in corr.items():
        for c in entry.get('corrections', []):
            if c.get('action') == 'update_enum' and c.get('status') == 'verified':
                names = set(schemas.get(sname, {}).get('x-enum-varnames', []))
                for mem in c.get('addMembers', []):
                    if mem.split(' =')[0].strip() not in names:
                        notes['update_enum_missing'].append('%s lacks %s' % (sname, mem))

    # ------------------------------------------------------------ operations
    def build_params(rid, m, code_path, spec_path, src_op, desc):
        # positional rename of path params (code spelling -> chosen spelling)
        code_names = re.findall(r'\{([^}:]+)', code_path)
        spec_names = re.findall(r'\{([^}:]+)', spec_path)
        ren = dict(zip(code_names, spec_names))
        src_params = {}
        for p in (src_op.get('parameters') or []):
            src_params[(p['name'].lower(), p['in'])] = p
        out, seen = [], set()
        for dp in desc['parameters']:
            if dp['in'] == 'header' and dp['name'].lower() == 'authorization':
                notes['auth_header_param'].append(rid)  # the bearerAuth security requirement covers it
                continue
            name = ren.get(dp['name'], dp['name']) if dp['in'] == 'path' else dp['name']
            key = (name.lower(), dp['in'])
            if key in seen:
                continue
            seen.add(key)
            sp = src_params.get(key)
            if sp is None and dp['in'] == 'path':
                # source path param may carry another name; match by position
                pass
            schema = copy.deepcopy(sp['schema']) if sp and sp.get('schema') else infer_schema(dp.get('example'), name)
            p = {'name': name, 'in': dp['in']}
            if dp.get('description'):
                p['description'] = clean_text(dp['description'])
            p['required'] = True if dp['in'] == 'path' else bool(dp.get('required'))
            p['schema'] = schema
            if dp.get('example') is not None:
                ex = typed_example(dp['example'], schema) if '$ref' not in schema else None
                if ex is not None:
                    p['example'] = ex
            out.append(p)
        # path parameters required by the template but absent from descriptions
        have = {(p['name'], p['in']) for p in out}
        for n in spec_names:
            if (n, 'path') not in have:
                sp = None
                for (ln, loc), v in src_params.items():
                    if loc == 'path' and ln == n.lower():
                        sp = v
                out.append({'name': n, 'in': 'path', 'required': True,
                            'schema': copy.deepcopy(sp['schema']) if sp and sp.get('schema') else {'type': 'string'}})
                notes['path_param_added'].append('%s: %s' % (rid, n))
        # spec-only parameters (not described) are kept without description text
        for (ln, loc), sp in sorted(src_params.items()):
            if loc == 'path' or (ln, loc) in seen:
                continue
            if loc == 'header' and ln == 'authorization':
                continue
            if ln in UNBOUND_PARAMS:
                notes['unbound_param'].append('%s: %s' % (rid, sp['name']))
                continue
            if ln in ('canbecanceled', 'iscancellationrequested') or ln.startswith('waithandle'):
                notes['junk_param'].append('%s: %s' % (rid, sp['name']))
                continue
            newp = {'name': sp['name'], 'in': loc}
            if ln in PARAM_TEXT:
                newp['description'] = PARAM_TEXT[ln]
                notes['param_described'].append('%s: %s' % (rid, sp['name']))
            elif sp.get('description'):
                newp['description'] = clean_text(sp['description'])
            newp['required'] = bool(sp.get('required'))
            newp['schema'] = copy.deepcopy(sp.get('schema') or {'type': 'string'})
            out.append(newp)
            notes['spec_only_param'].append('%s: %s (%s)' % (rid, sp['name'], loc))
        for p in out:
            if not p.get('description') and p['name'].lower() in PARAM_TEXT:
                p['description'] = PARAM_TEXT[p['name'].lower()]
                notes['param_described'].append('%s: %s' % (rid, p['name']))
        # order: path, query, header
        order = {'path': 0, 'query': 1, 'header': 2, 'cookie': 3}
        out.sort(key=lambda p: (order.get(p['in'], 9)))
        return out

    def example_score(ex, schema_props):
        if not isinstance(ex, dict) or not schema_props:
            return 0
        sc = 0
        for k, v in ex.items():
            pd = schema_props.get(k)
            if not pd:
                continue
            t = pd.get('type')
            if t == 'integer' and isinstance(v, int) and not isinstance(v, bool):
                sc += 1
            elif t == 'integer' and isinstance(v, str):
                sc -= 1
            elif t == 'string' and isinstance(v, str):
                sc += 1
            elif t == 'boolean' and isinstance(v, bool):
                sc += 1
            elif t == 'boolean' and isinstance(v, str):
                sc -= 1
            elif '$ref' in pd:
                tgt = schemas.get(ref_name(pd['$ref']) or '')
                if tgt and 'enum' in tgt and isinstance(v, int):
                    sc += 1
                elif tgt and 'enum' in tgt and isinstance(v, str):
                    sc -= 1
        return sc

    def body_props(content):
        for mt in content.values():
            s = mt.get('schema') or {}
            if '$ref' in s:
                s = schemas.get(ref_name(s['$ref']) or '', {})
            return s.get('properties') or {}
        return {}

    MERGE_NOTES = {
        'GET /api/v1/AdConfiguration/domain/configuration/{id:guid}': {
            'with': 'GET /api/v1/AdConfiguration/domain/configuration/{domainName}',
            'summary': 'Get a domain configuration by ID or name',
            'extra': 'The path value is either the ID of the domain configuration or the name of the domain.',
            'param': ('id', 'ID of the domain configuration, or the name of the domain.')}}
    resp_fix = collections.defaultdict(list)
    for key, status, media, schema in RESPONSE_FIXES:
        fm, fp = key.split(' ', 1)
        resp_fix[(fm, tkey(fp))].append((status, media, schema))
    resp_over = collections.defaultdict(list)
    for key, status, content, odesc, ohdrs in RESPONSE_OVERRIDES:
        fm, fp = key.split(' ', 1)
        resp_over[(fm, tkey(fp))].append((status, content, odesc, ohdrs))
    extra_status = collections.defaultdict(list)
    for key, status, text in EXTRA_STATUS:
        fm, fp = key.split(' ', 1)
        extra_status[(fm, tkey(fp))].append((status, text))
    req_fix = {}
    for key, suffix, req, ro, bounds, nested in REQUEST_FIXES:
        fm, fp = key.split(' ', 1)
        req_fix[(fm, tkey(fp))] = (suffix, req, ro, bounds, nested)
    ignored_fields = {}
    for k, call in wsd_idx.items():
        names = []
        for d in call.get('requestDiff') or []:
            if d.get('kind') != 'extra-sent-ignored':
                continue
            for tok in d['field'].split(','):
                tok = re.sub(r'\(.*?\)', '', tok).strip()
                if re.fullmatch(r'[A-Za-z_]\w*(\[\]\.[A-Za-z_]\w*)?', tok):
                    names.append(tok)
        if names:
            ignored_fields[k] = names

    def strip_ignored(example, names):
        if not isinstance(example, dict):
            return example
        example = copy.deepcopy(example)
        for nm in names:
            if '[]' in nm:
                a, b = nm.split('[].')
                for el in example.get(a) or []:
                    if isinstance(el, dict):
                        el.pop(b, None)
            else:
                example.pop(nm, None)
        return example

    def apply_request_fix(rid, rb, fix):
        suffix, req, ro, bounds, nested = fix
        mt = list(rb['content'].values())[0]
        sc = mt.get('schema') or {}
        sname = ref_name(sc.get('$ref', '')) if '$ref' in sc else None
        if not sname or sname not in schemas or schemas[sname].get('type') != 'object':
            notes['req_fix_failed'].append('%s: body schema is not a plain object reference' % rid)
            return
        new = copy.deepcopy(schemas[sname])
        props = new.setdefault('properties', {})
        for f in req + ro + list(bounds) + list(nested):
            if f not in props:
                notes['req_fix_failed'].append('%s: %s has no property %s' % (rid, sname, f))
                return
        if req:
            new['required'] = list(dict.fromkeys(list(new.get('required') or []) + req))
        for f in ro:
            if '$ref' in props[f]:
                props[f] = {'readOnly': True, 'allOf': [props[f]]}
            else:
                props[f]['readOnly'] = True
            if f in (new.get('required') or []):
                new['required'].remove(f)
        for f, b in bounds.items():
            props[f].update(b)
        for f, nreq in nested.items():
            items = props[f].get('items') or {}
            tname = ref_name(items.get('$ref', '')) if '$ref' in items else None
            if not tname or tname not in schemas:
                notes['req_fix_failed'].append('%s: %s items are not a schema reference' % (rid, f))
                return
            inner = copy.deepcopy(schemas[tname])
            if any(n not in (inner.get('properties') or {}) for n in nreq):
                notes['req_fix_failed'].append('%s: %s lacks %s' % (rid, tname, nreq))
                return
            inner['required'] = list(dict.fromkeys(list(inner.get('required') or []) + nreq))
            iname = sanitize_name(tname) + '.' + suffix
            schemas[iname] = inner
            props[f]['items'] = {'$ref': '#/components/schemas/' + iname}
        name = sanitize_name(sname) + '.' + suffix
        n = 1
        while name in schemas and schemas[name] != new:
            n += 1
            name = '%s.%s%d' % (sname, suffix, n)
        schemas[name] = new
        mt['schema'] = {'$ref': '#/components/schemas/' + name}
        notes['req_fix'].append('%s -> %s (required %s, readOnly %d, bounds %d, nested %d)' % (
            rid, name, req or '-', len(ro), len(bounds), len(nested)))

    fix_used = set()
    req_prose = collections.defaultdict(list)  # (method, template key) -> fields the prose marks required
    merged_pairs = []
    paths = {}
    opid_used = collections.Counter()
    status_issues, ex_used, no_src, resp_nocontent = [], 0, [], []
    merge_skip = {v['with'] for v in MERGE_NOTES.values()}
    for r in sorted(routes, key=lambda r: (strip_constraints(split_id(r['id'])[1]).lower(), split_id(r['id'])[0])):
        rid = r['id']
        if rid in merge_skip:
            continue
        m, code_path = split_id(rid)
        t = tkey(code_path)
        spec_path = chosen_path[t]
        desc = copy.deepcopy(descs[rid])
        en_notes = desc.get('enumNotes') or []
        n_before = json.dumps({k: v for k, v in desc.items() if k != 'enumNotes'}).count('enumNotes')
        desc['description'] = fix_enum_text(desc.get('description'), en_notes)
        for dp in desc['parameters']:
            dp['description'] = fix_enum_text(dp.get('description'), en_notes, dp['name'])
        rbd = desc.get('requestBody')
        if rbd:
            rbd['description'] = fix_enum_text(rbd.get('description'), en_notes)
            for f in rbd.get('fields') or []:
                f['description'] = fix_enum_text(f.get('description'), en_notes, f['name'])
                if f.get('notes'):
                    f['notes'] = fix_enum_text(f['notes'], en_notes, f['name'])
        for x in desc['responses']:
            x['description'] = fix_enum_text(x.get('description'), en_notes)
        if n_before:
            notes['enum_pointer_fixed'].append('%s: %d' % (rid, n_before))
        if rid in MERGE_NOTES:
            mn = MERGE_NOTES[rid]
            other = descs[mn['with']]
            desc['summary'] = mn['summary']
            desc['description'] = desc['description'].rstrip() + ' ' + mn['extra']
            desc['description'] = desc['description'].replace(
                'with the given ID.', 'with the given ID or domain name.', 1)
            for x in other['responses']:
                if int(x['status']) == 404:
                    x['description'] = x['description'].replace('that name', 'that domain name')
            for x in desc['responses']:
                if int(x['status']) == 404:
                    x['description'] = re.sub(r'that ID\.?$', 'that ID or domain name.', x['description'])
            for pp in desc['parameters']:
                if pp['name'] == mn['param'][0]:
                    pp['description'] = mn['param'][1]
            have = {int(x['status']) for x in desc['responses']}
            desc['responses'] += [x for x in other['responses'] if int(x['status']) not in have]
            merged_pairs.append('%s + %s' % (rid, mn['with']))
        src = src_sup.get((m, t)) or src_base.get((m, t))
        src_op = src[1] if src else {}
        if not src:
            no_src.append(rid)
        op = {}
        op['tags'] = [r['controller']]
        op['summary'] = clean_text(desc['summary'])
        parts = [clean_text(desc['description'])]
        if m == 'POST' and tkey(code_path) == tkey('/api/v1/HostScanJob/{hostScanJobId}'):
            parts[0] += ' ' + HOSTSCAN_NOTE
            notes['hostscan_note'].append(rid)
        if m == 'DELETE' and src_op.get('requestBody'):
            parts[0] += ' ' + DELETE_BODY_NOTE
            notes['delete_body_note'].append(rid)
        if desc.get('permission'):
            parts.append('Permission required: ' + clean_text(desc['permission']).rstrip('.') + '.')
        for en in desc.get('enumNotes') or []:
            vals = ', '.join('%s = %s' % (v['number'], v['name']) for v in en['values'])
            parts.append('Values for `%s`: %s.' % (en['field'], vals))
        if desc.get('cautions'):
            parts.append('Caution: ' + clean_text(desc['cautions']))
        op['description'] = '\n\n'.join(parts)
        # operationId
        cr = code_idx.get((m, t))
        act = cr['action'] if cr else (src_op.get('operationId') or m.lower())
        act = re.sub(r'(?<=.)Async$', '', act)
        oid = '%s_%s' % (r['controller'], act)
        opid_used[oid] += 1
        if opid_used[oid] > 1:
            oid = '%s_%s%d' % (r['controller'], act, opid_used[oid])
        op['operationId'] = oid
        params = build_params(rid, m, code_path, spec_path, src_op, desc)
        if params:
            op['parameters'] = params
        # request body
        if src_op.get('requestBody'):
            rb = copy.deepcopy(src_op['requestBody'])
            rb['required'] = True
            db = desc.get('requestBody')
            lines = []
            if db:
                if db.get('description'):
                    lines.append(clean_text(db['description']))
                drop = PROSE_FIELD_DROP.get((m, t), [])
                nreq = PROSE_NOT_REQUIRED.get((m, t), {})
                for f in db.get('fields') or []:
                    if f['name'] in drop:
                        notes['prose_field_dropped'].append('%s: %s' % (rid, f['name']))
                        continue
                    if f['name'] in nreq:
                        f['required'] = False
                        f['description'] = nreq[f['name']]
                        f['notes'] = None
                    if f.get('required'):
                        req_prose[(m, t)].append(f['name'])
                    ln = '- `%s` (%s%s): %s' % (f['name'], f.get('type', 'string'),
                                                 ', required' if f.get('required') else '',
                                                 clean_text(f.get('description') or ''))
                    if f.get('notes'):
                        ln += ' ' + clean_text(f['notes'])
                    lines.append(ln)
            if lines:
                rb['description'] = lines[0] + ('\n\n' + '\n'.join(lines[1:]) if len(lines) > 1 else '')
            example, esrc = None, None
            e = ex_idx.get((m, t))
            if e and e['examples']:
                props = body_props(rb.get('content', {}))
                best = sorted(range(len(e['examples'])),
                              key=lambda i: (-example_score(e['examples'][i]['body'], props), i))[0]
                example = e['examples'][best]['body']
                esrc = 'request-examples'
            elif (m, t) in overlay_ops and overlay_ops[(m, t)].get('requestExample') is not None:
                example = overlay_ops[(m, t)]['requestExample']
                esrc = 'overlay'
            if example is not None and (m, t) in ignored_fields:
                stripped = strip_ignored(example, ignored_fields[(m, t)])
                if stripped != example:
                    notes['example_stripped'].append('%s: %s' % (rid, ', '.join(ignored_fields[(m, t)])))
                    example = stripped
            if example is not None:
                for mt in rb.get('content', {}).values():
                    mt['example'] = copy.deepcopy(example)
                    break
                ex_used += 1
            if (m, t) in req_fix:
                fix_used.add(('req', m, t))
                apply_request_fix(rid, rb, req_fix[(m, t)])
            op['requestBody'] = rb
        elif (m, t) in req_fix:
            notes['req_fix_failed'].append('%s: no request body in the source' % rid)
        # responses
        succ_content = None
        for resp in (src_op.get('responses') or {}).values():
            for mt in (resp.get('content') or {}).values():
                sc = mt.get('schema') or {}
                if sc.get('$ref') and ref_name(sc['$ref']) in remove_schemas:
                    mt['schema'] = {'type': 'object'}
                    notes['generic_object'].append('%s: response schema %s replaced by a generic object' % (rid, ref_name(sc['$ref'])))
        for code, resp in sorted((src_op.get('responses') or {}).items()):
            if code.startswith('2') and resp.get('content'):
                succ_content = copy.deepcopy(resp['content'])
                break
        responses = {}
        codes = [int(x['status']) for x in desc['responses']]
        succ_codes = [c for c in codes if 200 <= c < 300]
        target = None
        for c in succ_codes:
            if c not in (204, 205):
                target = c
                break
        for x in sorted(desc['responses'], key=lambda x: int(x['status'])):
            c = int(x['status'])
            resp = {'description': clean_text(x['description'])}
            if succ_content and c == target:
                resp['content'] = succ_content
                ov = overlay_ops.get((m, t))
                if ov and ov.get('responseExample') is not None:
                    for mt in resp['content'].values():
                        if 'json' in str(list(resp['content'].keys())[0]):
                            mt['example'] = copy.deepcopy(ov['responseExample'])
                        break
            responses[str(c)] = resp
        if not succ_codes:
            status_issues.append('%s: no 2xx status in descriptions' % rid)
        if succ_content and target is None:
            resp_nocontent.append(rid)
        wc = wsd_idx.get((m, t))
        if wc and wc.get('statusObserved') and int(wc['statusObserved']) not in codes:
            status_issues.append('%s: observed %s not in described %s' % (rid, wc['statusObserved'], codes))
        for status, text in extra_status.get((m, t), []):
            fix_used.add(('status', m, t, status))
            if status not in responses:
                responses[status] = {'description': text}
                notes['status_added'].append('%s: %s' % (rid, status))
        for status, media, schema in resp_fix.get((m, t), []):
            fix_used.add(('resp', m, t, status))
            resp = responses.get(status)
            if resp is None:
                notes['resp_fix_failed'].append('%s: status %s is not described' % (rid, status))
                continue
            if media == 'NOBODY':
                if resp.pop('content', None) is not None:
                    notes['resp_body_removed'].append('%s: %s' % (rid, status))
                continue
            if resp.get('content'):
                notes['resp_fix_kept'].append('%s: %s already has a body' % (rid, status))
                continue
            resp['content'] = {media or 'application/json': {'schema': copy.deepcopy(schema)}}
            notes['resp_body_added'].append('%s: %s' % (rid, status))
        for (ost, ocontent, odesc, ohdrs) in resp_over.get((m, t), []):
            fix_used.add(('over', m, t, ost))
            resp = responses.get(ost)
            if resp is None:
                notes['resp_fix_failed'].append('%s: override status %s is not described' % (rid, ost))
                continue
            if ocontent is None:
                resp.pop('content', None)
            else:
                resp['content'] = copy.deepcopy(ocontent)
            if odesc:
                resp['description'] = odesc
            if ohdrs:
                resp['headers'] = copy.deepcopy(ohdrs)
            notes['resp_overridden'].append('%s: %s' % (rid, ost))
        for ost, resp in sorted(responses.items()):
            if ost.startswith('2') and resp.get('content') and EMPTY_BODY_RE.search(resp['description']):
                resp.pop('content')
                notes['resp_body_removed_auto'].append('%s: %s' % (rid, ost))
        op['responses'] = dict(sorted(responses.items(), key=lambda kv: int(kv[0])))
        op['security'] = [] if r.get('anonymous') else [{'bearerAuth': []}]
        paths.setdefault(spec_path, {})[m.lower()] = op

    for (fm, ft), _ in sorted(req_fix.items()):
        if ('req', fm, ft) not in fix_used:
            notes['fix_unused'].append('request fix %s %s: route not in the public route set' % (fm, ft))
    for (fm, ft), lst in sorted(resp_fix.items()):
        for status, _, _ in lst:
            if ('resp', fm, ft, status) not in fix_used:
                notes['fix_unused'].append('response fix %s %s %s: route not in the public route set' % (fm, ft, status))
    for (fm, ft), lst in sorted(resp_over.items()):
        for status, _, _, _ in lst:
            if ('over', fm, ft, status) not in fix_used:
                notes['fix_unused'].append('response override %s %s %s: route not in the public route set' % (fm, ft, status))
    for (fm, ft), lst in sorted(extra_status.items()):
        for status, _ in lst:
            if ('status', fm, ft, status) not in fix_used:
                notes['fix_unused'].append('status fix %s %s %s: route not in the public route set' % (fm, ft, status))

    # ------------------------------------------------------------ prune & rename schemas
    def collect(o, acc):
        walk_refs(o, lambda d: acc.add(ref_name(d['$ref'])))

    reach = set()
    collect(paths, reach)
    reach.discard(None)
    frontier = list(reach)
    while frontier:
        n = frontier.pop()
        if n not in schemas:
            continue
        acc = set()
        collect(schemas[n], acc)
        for a in acc:
            if a and a not in reach:
                reach.add(a)
                frontier.append(a)
    removed_by_corr = []
    for s in remove_schemas:
        if s in reach:
            notes['remove_schema_still_referenced'].append(s)
        elif s in schemas:
            removed_by_corr.append(s)
    # drop refs to non-existent properties? (none expected) -- check later
    final_names = sorted(n for n in reach if n in schemas)
    mapping = {}
    for n in final_names:
        mapping[n] = sanitize_name(n)
    inv = collections.defaultdict(list)
    for a, b in mapping.items():
        inv[b].append(a)
    collisions = {b: a for b, a in inv.items() if len(a) > 1}
    if collisions:
        print('FAIL: sanitized schema name collisions', collisions)
        sys.exit(1)

    def fix_refs(o):
        def fn(d):
            n = ref_name(d['$ref'])
            if n is not None:
                d['$ref'] = '#/components/schemas/' + mapping.get(n, sanitize_name(n))
        walk_refs(o, fn)

    out_schemas = {}
    for n in final_names:
        s = copy.deepcopy(schemas[n])
        out_schemas[mapping[n]] = s
    fix_refs(out_schemas)
    fix_refs(paths)
    # clean schema text
    def clean_tree(o):
        if isinstance(o, dict):
            for k, v in list(o.items()):
                if isinstance(v, str) and k in ('description', 'summary', 'title'):
                    o[k] = clean_text(v)
                else:
                    clean_tree(v)
        elif isinstance(o, list):
            for v in o:
                clean_tree(v)
    clean_tree(out_schemas)
    ip_re = re.compile(r'^(?:10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(?:1[6-9]|2\d|3[01])\.\d+\.\d+)$')

    def fix_ips(o):
        if isinstance(o, dict):
            for k, v in o.items():
                if isinstance(v, str) and k != 'version' and ip_re.match(v):
                    o[k] = '192.0.2.10'
                else:
                    fix_ips(v)
        elif isinstance(o, list):
            for v in o:
                fix_ips(v)
    fix_ips(out_schemas)
    fix_ips(paths)
    for k, v in out_schemas.items():
        if 'enum' in v and any(isinstance(x, str) for x in v['enum']):
            names = list(v['enum'])
            v.pop('enum')
            v['type'] = 'integer'
            v['format'] = 'int32'
            v.pop('x-enum-varnames', None)
            v['description'] = 'Authentication protocol. Members: ' + ', '.join(names) + '.'
            notes['enum_no_values'].append(k)
    out_schemas = {k: out_schemas[k] for k in sorted(out_schemas)}

    # ---- revision 2 post-pass: wording, examples, media types
    def tidy_text(s, schema_text):
        s0 = s
        if schema_text:
            s = re.sub(r'[ \t]*\n[ \t]*', ' ', s)
        s = re.sub(r'(?<=\S)[ \t]{2,}(?=\S)', ' ', s)
        s = re.sub(r'\bSbPAM\b(?![.\w])', 'Privilege Secure', s)
        s = re.sub(r'\bStealthbits\b(?![.\w])', 'Netwrix', s)
        if s != s0:
            notes['text_tidied'].append(s0[:60])
        return s

    def tidy_tree(o, schema_text):
        if isinstance(o, dict):
            for k, v in list(o.items()):
                if isinstance(v, str) and k in ('description', 'summary'):
                    o[k] = tidy_text(v, schema_text)
                elif k not in ('example', 'enum', 'x-enum-varnames'):
                    tidy_tree(v, schema_text)
        elif isinstance(o, list):
            for v in o:
                tidy_tree(v, schema_text)

    tidy_tree(out_schemas, True)
    tidy_tree(paths, False)

    def swap_example_text(o):
        if isinstance(o, dict):
            for k, v in o.items():
                if v == OS_EXAMPLE_OLD:
                    o[k] = OS_EXAMPLE_NEW
                    notes['os_example'].append(k)
                else:
                    swap_example_text(v)
        elif isinstance(o, list):
            for i, v in enumerate(o):
                if v == OS_EXAMPLE_OLD:
                    o[i] = OS_EXAMPLE_NEW
                else:
                    swap_example_text(v)

    swap_example_text(out_schemas)
    swap_example_text(paths)

    def schema_kind(sc):
        sc = sc or {}
        if '$ref' in sc:
            tgt = out_schemas.get(sc['$ref'][len('#/components/schemas/'):], {})
            return tgt.get('type') or ('enum' if 'enum' in tgt else 'object')
        return sc.get('type')

    def append_desc(holder, text):
        holder['description'] = (holder.get('description', '') + '\n\n' + text).strip()

    for pth, item in paths.items():
        for mm, op in item.items():
            media_holders = []
            rbody = op.get('requestBody')
            if rbody:
                media_holders.append((rbody, rbody['content'], 'request'))
            for code, resp in op['responses'].items():
                if resp.get('content'):
                    media_holders.append((resp, resp['content'], 'response ' + code))
            for holder, content, where in media_holders:
                # keep one JSON media type: drop the duplicates the base spec carried
                if 'application/json' in content:
                    for extra in JSONISH_EXTRA:
                        gone = content.pop(extra, None)
                        if gone is not None:
                            if 'example' in gone and 'example' not in content['application/json']:
                                content['application/json']['example'] = gone['example']
                            notes['media_pruned'].append('%s %s %s: %s' % (mm.upper(), pth, where, extra))
                for mtype, mt in content.items():
                    if 'example' not in mt:
                        continue
                    ex, kind = mt['example'], schema_kind(mt.get('schema'))
                    if kind in ('object', 'array') and isinstance(ex, str):
                        parsed = None
                        try:
                            parsed = json.loads(ex)
                        except ValueError:
                            pass
                        if isinstance(parsed, (dict, list)):
                            mt['example'] = parsed
                            notes['example_parsed'].append('%s %s %s' % (mm.upper(), pth, where))
                        else:
                            del mt['example']
                            if where == 'request' and ex.startswith('curl '):
                                append_desc(holder, 'Example request:\n\n```\n%s\n```' % curl_placeholders(ex))
                            elif where == 'request':
                                append_desc(holder, ex.rstrip('.') + '.')
                            notes['example_dropped'].append('%s %s %s: text, not a %s' % (mm.upper(), pth, where, kind))
                    elif kind == 'string' and not isinstance(ex, str):
                        del mt['example']
                        notes['example_dropped'].append('%s %s %s: %s example on a string schema' % (
                            mm.upper(), pth, where, type(ex).__name__))
                    elif kind == 'string' and len(ex) > 1 and ex[0] == '"' and ex[-1] == '"':
                        mt['example'] = ex[1:-1]
                        notes['example_unquoted'].append('%s %s %s' % (mm.upper(), pth, where))


    # ---- revision 3 post-pass: wording, examples, required fields, schema names
    text_rewritten = []
    apply_text_rules(out_schemas, TEXT_RULES, text_rewritten)
    apply_text_rules(paths, TEXT_RULES, text_rewritten)

    # /signin: declare both content types and the keys the text names
    sign = (paths.get('/signin') or {}).get('post')
    if sign and sign.get('requestBody'):
        form = {'type': 'object', 'required': ['login', 'password'], 'properties': {
            'login': {'type': 'string', 'description': 'The user name to sign in with. Local user name or DOMAIN\\user.'},
            'password': {'type': 'string', 'format': 'password', 'description': 'The password for the user.'}}}
        sign['requestBody']['content'] = {
            'application/x-www-form-urlencoded': {'schema': copy.deepcopy(form)},
            'multipart/form-data': {'schema': copy.deepcopy(form)}}
        notes['signin_form'].append('/signin')

    # examples: GUID-shaped values on uuid fields, enum members on enum fields
    ex_changes = []
    for pth, item in paths.items():
        for mm, op in item.items():
            for prm in op.get('parameters', []):
                if 'example' not in prm:
                    continue
                if prm['example'] == NIL_GUID and prm.get('schema', {}).get('format') == 'uuid' \
                        and not re.search(r'(?i)empty|all zero', prm.get('description', '')):
                    prm['example'] = example_guid(prm['name'])
                    ex_changes.append(NIL_GUID)
                prm['example'] = fix_example(prm['example'], prm.get('schema'), out_schemas, ex_changes)
            conts = list((op.get('requestBody') or {}).get('content', {}).values())
            for resp in op['responses'].values():
                conts += list((resp.get('content') or {}).values())
            for mt in conts:
                if 'example' in mt:
                    mt['example'] = fix_example(mt['example'], mt.get('schema'), out_schemas, ex_changes)
    fix_schema_examples(out_schemas, ex_changes)
    notes['example_fixed'] = ex_changes

    # required fields: the prose marks a request field required, so the schema must agree
    use_count = collections.Counter()
    collect_all = lambda o: walk_refs(o, lambda d: use_count.update([ref_name(d['$ref'])]))
    collect_all(paths)
    collect_all(out_schemas)
    DERIVED = re.compile(r'\.(CreateRequest|UpdateRequest|Request)$')
    REQ_SUFFIX = {'post': 'CreateRequest', 'put': 'UpdateRequest'}
    req_made = {}
    for pth in sorted(paths):
        for mm in sorted(paths[pth]):
            op = paths[pth][mm]
            rb = op.get('requestBody')
            pnames = req_prose.get((mm.upper(), tkey(pth)))
            if not rb or not pnames:
                continue
            mts = [mt for mt in rb['content'].values() if '$ref' in (mt.get('schema') or {})]
            if not mts:
                notes['required_inline'].append('%s %s' % (mm.upper(), pth))
                continue
            bname = ref_name(mts[0]['schema']['$ref'])
            tgt = out_schemas.get(bname)
            if not tgt or tgt.get('type') != 'object':
                continue
            props = tgt.get('properties') or {}
            lower = {k.lower(): k for k in props}
            want = []
            for n in pnames:
                k = n if n in props else lower.get(n.lower())
                if k is None:
                    notes['required_unmapped'].append('%s %s: %s' % (mm.upper(), pth, n))
                elif not (props[k].get('readOnly') or any(x.get('readOnly') for x in props[k].get('allOf', []))):
                    want.append(k)
            need = [k for k in want if k not in (tgt.get('required') or [])]
            if not need:
                continue
            final = list(dict.fromkeys(list(tgt.get('required') or []) + need))
            if DERIVED.search(bname) and use_count[bname] == 1:
                tgt['required'] = final
                name = bname
            else:
                root = DERIVED.sub('', bname)
                suffix = REQ_SUFFIX.get(mm, 'Request')
                key = (bname, tuple(final), suffix)
                if key not in req_made:
                    name, n = root + '.' + suffix, 1
                    if name in out_schemas:  # name the copy after the route's last literal segment
                        seg = [x for x in pth.split('/') if x and not x.startswith('{')][-1]
                        name = root + '.' + seg[:1].upper() + seg[1:] + 'Request'
                    while name in out_schemas:
                        n += 1
                        name = '%s.%s%d' % (root, suffix, n)
                    cp = copy.deepcopy(tgt)
                    cp['required'] = final
                    out_schemas[name] = cp
                    req_made[key] = name
                name = req_made[key]
                for mt in mts:
                    if ref_name(mt['schema']['$ref']) == bname:
                        mt['schema']['$ref'] = '#/components/schemas/' + name
            notes['required_added'].append('%s %s -> %s: %s' % (mm.upper(), pth, name, ', '.join(need)))
    for k, v in out_schemas.items():
        if DERIVED.search(k):
            for rq in v.get('required') or []:
                pr = (v.get('properties') or {}).get(rq)
                if pr is not None and '$ref' not in pr:
                    pr.pop('nullable', None)

    # ---- revision 4: response corrections (input files plans/api-inventory/spec/response-fixes/slice-*.json)
    r4_fixes, r4_files = load_response_fixes()
    r4 = collections.defaultdict(list)
    r4_keys = set()
    op_idx = {(mm.upper(), tkey(pth)): (pth, op) for pth, item in paths.items() for mm, op in item.items()}
    reach_now = set()
    collect(paths, reach_now)
    fr_now = list(reach_now)
    while fr_now:
        n = fr_now.pop()
        a = set()
        collect(out_schemas.get(n, {}), a)
        for x in a:
            if x not in reach_now:
                reach_now.add(x)
                fr_now.append(x)
    # fixes name schemas by their public names; the current public names are the ones the output already has
    pub_now = public_names(reach_now)
    by_pub = {v: k for k, v in pub_now.items()}
    NO_BODY_RE = re.compile(r'(?i)\bno body\b|\bbody is empty\b|\bresponse is empty\b|\bempty body\b')

    def key_of(pname):
        return by_pub.get(pname)

    def r4_schema(fx, rtxt):
        """The schema object for one fix, or (None, reason)."""
        kind = fx.get('kind')
        if kind in ('empty', 'none', 'nobody'):
            return 'EMPTY', None
        if kind == 'string':
            sch = {'type': 'string'}
            if re.search(r'(?i)\buuid\b|\bguid\b', fx.get('note') or '') and re.search(r'(?i)uuid string', fx.get('note') or ''):
                sch['format'] = 'uuid'
            return sch, None
        if kind == 'array':
            k = key_of(fx.get('itemSchemaName') or '')
            if k is None:
                return None, 'item schema %s is not in the spec' % fx.get('itemSchemaName')
            return {'type': 'array', 'items': {'$ref': '#/components/schemas/' + k}}, None
        if kind == 'object' and fx.get('additionalPropertiesType'):
            return {'type': 'object', 'additionalProperties': {'type': fx['additionalPropertiesType']}}, None
        if kind == 'object':
            name = fx.get('schemaName') or ''
            k = key_of(name)
            if k is None and fx.get('properties'):
                props = copy.deepcopy(fx['properties'])
                bad = []

                def retarget(d):
                    n = d['$ref'].rsplit('/', 1)[-1]
                    if key_of(n) is None:
                        bad.append(n)
                    else:
                        d['$ref'] = '#/components/schemas/' + key_of(n)
                walk_refs(props, retarget)
                apply_text_rules(props, TEXT_RULES, [])
                if bad:
                    return None, 'schemas %s are not in the spec' % sorted(set(bad))
                if name in out_schemas:
                    return None, 'schema name %s is already taken' % name
                desc = {'DataTableOfActiveDirectoryGroup': DATATABLE_TEXT,
                        'DataTableOfAuditChangeRowActorModel': 'The record types in the change audit log and how many there are.',
                        'RoleAssignmentCounts': 'How many role assignments succeeded (item1) and how many failed (item2).'}.get(
                    name, 'The response of this operation.')
                out_schemas[name] = {'type': 'object', 'additionalProperties': False, 'description': desc,
                                     'properties': props}
                by_pub[name] = name
                r4['schema_added'].append(name)
                k = name
            if k is None:
                return None, 'schema %s is not in the spec' % name
            ref = {'$ref': '#/components/schemas/' + k}
            if re.search(r'\bor an array\b', rtxt):
                return {'oneOf': [ref, {'type': 'array', 'items': copy.deepcopy(ref)}]}, 'oneOf'
            return ref, None
        return None, 'unknown kind %r' % kind

    for fx in r4_fixes:
        fm, fpath, fst = str(fx.get('method', '')).upper(), fx.get('path', ''), str(fx.get('status', ''))
        label = '%s %s %s' % (fm, fpath, fst)
        hit = op_idx.get((fm, tkey(fpath)))
        if hit is None:
            r4['skipped'].append('%s: route not in the public route set' % label)
            continue
        pth, op = hit
        resp = op['responses'].get(fst)
        if resp is None:
            r4['skipped'].append('%s: the operation does not declare this status' % label)
            continue
        rtxt = resp.get('description', '')
        if fx.get('kind') not in ('empty', 'none', 'nobody') and (EMPTY_BODY_RE.search(rtxt) or NO_BODY_RE.search(rtxt)):
            r4['skipped'].append('%s: contradicts the response text ("%s"); the text says there is no body' % (label, rtxt[:110]))
            continue
        sch, why = r4_schema(fx, rtxt)
        if sch is None:
            r4['skipped'].append('%s: %s' % (label, why))
            continue
        if sch == 'EMPTY':
            resp.pop('content', None)
        else:
            if resp.get('content') and any('example' in mt for mt in resp['content'].values()):
                r4['example_dropped'].append(label)
            resp['content'] = {'application/json': {'schema': sch}}
            if why == 'oneOf':
                r4['oneof'].append('%s: the text says "%s", so the schema is one object or an array of them' % (label, 'or an array'))
        r4['applied'].append(label)
        r4_keys.add((fm, tkey(fpath)))
    notes['generic_object'] = [x for x in notes['generic_object'] if (
        x.split(' ', 1)[0], tkey(x.split(': ')[0].split(' ', 1)[1])) not in r4_keys]

    # prune schemas that nothing reaches any more, then give every schema its short public name
    reach3 = set()
    collect(paths, reach3)
    fr = list(reach3)
    while fr:
        n = fr.pop()
        a = set()
        collect(out_schemas.get(n, {}), a)
        for x in a:
            if x not in reach3:
                reach3.add(x)
                fr.append(x)
    for k in sorted(set(out_schemas) - reach3):
        notes['pruned_r3'].append(k)
        del out_schemas[k]

    # routes that use RadiusAuthType (directly or through the schemas that contain it)
    radius_name = 'Stealthbits.Radius.RadiusAuthType'
    holders = {radius_name}
    grew = True
    while grew:
        grew = False
        for k, v in out_schemas.items():
            if k not in holders and any(('#/components/schemas/' + h + '"') in json.dumps(v) for h in holders):
                holders.add(k)
                grew = True
    for pth in sorted(paths):
        for mm in sorted(paths[pth]):
            dump = json.dumps(paths[pth][mm])
            if any(('#/components/schemas/' + h + '"') in dump for h in holders):
                notes['radius_routes'].append('%s %s' % (mm.upper(), pth))

    public_map = public_names(out_schemas)
    for k, v in list(public_map.items()):
        if v in FINAL_RENAME:
            public_map[k] = FINAL_RENAME[v]
            notes['final_rename'].append('%s -> %s' % (v, FINAL_RENAME[v]))
    clashes = collections.Counter(public_map.values())
    assert all(v == 1 for v in clashes.values()), 'public name collision'

    def to_public(o):
        def fn(d):
            n = ref_name(d['$ref'])
            if n is not None:
                d['$ref'] = '#/components/schemas/' + public_map[n]
        walk_refs(o, fn)
    to_public(out_schemas)
    to_public(paths)
    out_schemas = {public_map[k]: out_schemas[k] for k in sorted(out_schemas, key=lambda x: public_map[x])}
    FINAL_RENAME_R5 = {k: v for k, v in FINAL_RENAME.items() if k != 'TupleOfInt32AndInt32'}
    pair = out_schemas.get('IntPair')
    if pair is not None:
        pair['description'] = 'A pair of counts: item1 is the number of items that succeeded and item2 is the number that failed.'
        pair['properties']['item1']['description'] = 'Number of items that succeeded.'
        pair['properties']['item2']['description'] = 'Number of items that failed.'

    # ---- revision 5: plain model descriptions, paged-result wording, property text, shared count schema, examples
    r5 = collections.defaultdict(list)
    for k in sorted(out_schemas):
        v = out_schemas[k]
        nd = model_text(v['description']) if isinstance(v.get('description'), str) else None
        if nd is not None:
            r5['model'].append((k, v['description'], nd))
            v['description'] = nd
    for k in sorted(out_schemas):
        pr = out_schemas[k].get('properties') or {}
        if 'data' in pr and 'recordsTotal' in pr and pr['data'].get('type') == 'array':
            if pr['data'].get('description') != 'The rows on this page.':
                pr['data']['description'] = 'The records on this page.'
                pr['recordsTotal']['description'] = RECORDS_TOTAL_TEXT
                r5['paged'].append(k)
    for names, prop in sorted(PROP_TEXT, key=lambda x: (x[0], x[1])):
        for nm in names:
            pr = (out_schemas.get(nm) or {}).get('properties') or {}
            if prop in pr:
                pr[prop]['description'] = PROP_TEXT[(names, prop)]
                r5['prop'].append('%s.%s' % (nm, prop))
    grp = (paths.get('/api/v1/RolesRole/AddRolesToManagedAccountGroup/{managedAccountGroupId}') or {}).get('post')
    if grp:
        for rsp in grp['responses'].values():
            for mt in (rsp.get('content') or {}).values():
                if (mt.get('schema') or {}).get('$ref') == '#/components/schemas/IntPair':
                    mt['schema']['$ref'] = '#/components/schemas/RoleAssignmentCounts'
                    r5['counts'].append('POST /api/v1/RolesRole/AddRolesToManagedAccountGroup/{managedAccountGroupId}')
    clean_examples(paths, r5['example'])
    clean_examples(out_schemas, r5['example'])

    # inline enums left as names
    inline_enum = []

    def find_inline(o, where):
        if isinstance(o, dict):
            if 'enum' in o and any(isinstance(v, str) for v in o['enum']) and o.get('type') != 'string':
                inline_enum.append(where)
            for k, v in o.items():
                find_inline(v, where)
        elif isinstance(o, list):
            for v in o:
                find_inline(v, where)
    find_inline(paths, 'paths')
    for k, v in out_schemas.items():
        find_inline(v, k)
    # string enums that are really names of integer-wire enums
    str_enum_schemas = [k for k, v in out_schemas.items() if 'enum' in v and any(isinstance(x, str) for x in v['enum'])]

    tags = sorted({r['controller'] for r in routes}, key=str.lower)
    spec = collections.OrderedDict()
    spec['openapi'] = '3.0.3'
    spec['info'] = collections.OrderedDict([
        ('title', 'Netwrix Privilege Secure for Access Management API'),
        ('description', 'REST API for Netwrix Privilege Secure for Access Management. Operations available in the '
                        'web console are available through this API. Sign in to get a JSON Web Token (JWT) and send '
                        'it in the Authorization header as a bearer token.'),
        ('version', '26.07.3')])
    spec['servers'] = [collections.OrderedDict([
        ('url', 'https://{host}:6500'),
        ('description', 'Your Privilege Secure server. The console and the API use port 6500.'),
        ('variables', {'host': {'default': 'server.example.com',
                                'description': 'Host name or address of your Privilege Secure server.'}})])]
    spec['security'] = [{'bearerAuth': []}]
    spec['tags'] = [{'name': t} for t in tags]
    spec['paths'] = collections.OrderedDict((p, paths[p]) for p in sorted(paths, key=str.lower))
    spec['components'] = collections.OrderedDict([
        ('securitySchemes', {'bearerAuth': {'type': 'http', 'scheme': 'bearer', 'bearerFormat': 'JWT',
                                            'description': 'JSON Web Token returned by the sign-in call.'}}),
        ('schemas', out_schemas)])

    # ------------------------------------------------------------ checks
    fails = []
    got = set()
    for p, item in spec['paths'].items():
        for m in item:
            got.add((m.upper(), tkey(p)))
    want = {(split_id(i)[0], tkey(split_id(i)[1])) for i in ids}
    if got != want or sum(len(v) for v in spec['paths'].values()) != len(want):
        fails.append('route set mismatch: missing %s extra %s' % (sorted(want - got)[:5], sorted(got - want)[:5]))
    for d in dropped:
        dm, dp = split_id(d)
        if (dm, tkey(dp)) in got:
            fails.append('dropped route present: ' + d)
    # templated-path duplicates
    tt = collections.Counter(tkey(p) for p in spec['paths'])
    for k, v in tt.items():
        if v > 1:
            fails.append('templated path duplicate: ' + k)
    sk = set(out_schemas)
    all_refs = set()
    collect(spec, all_refs)
    for rr in all_refs:
        if rr not in sk:
            fails.append('unresolved $ref: ' + str(rr))
    # NOTE collect() stripped prefix of mapped refs; mapped names are keys
    for k in sk:
        if not re.fullmatch(r'[A-Za-z0-9._-]+', k):
            fails.append('bad schema key ' + k)
    unreachable = sk - all_refs
    # closure: referenced-from-schemas counts as reachable; recompute from paths
    reach2 = set()
    collect(spec['paths'], reach2)
    fr = list(reach2)
    while fr:
        n = fr.pop()
        a = set()
        collect(out_schemas.get(n, {}), a)
        for x in a:
            if x not in reach2:
                reach2.add(x)
                fr.append(x)
    for k in sk - reach2:
        fails.append('unreachable schema ' + k)
    oids = collections.Counter()
    for p, item in spec['paths'].items():
        for m, op in item.items():
            oids[op['operationId']] += 1
            tnames = re.findall(r'\{([^}]+)\}', p)
            pn = [x['name'] for x in op.get('parameters', []) if x['in'] == 'path']
            if sorted(tnames) != sorted(pn):
                fails.append('path params mismatch %s %s: %s vs %s' % (m, p, tnames, pn))
            for x in op.get('parameters', []):
                if x['in'] == 'path' and not x.get('required'):
                    fails.append('path param not required %s %s' % (p, x['name']))
            if not op['responses']:
                fails.append('no responses %s %s' % (m, p))
    for k, v in oids.items():
        if v > 1:
            fails.append('duplicate operationId ' + k)
    # revision 2 checks
    for p, item in spec['paths'].items():
        for m, op in item.items():
            for x in op.get('parameters', []):
                if not x.get('description'):
                    fails.append('parameter without description: %s %s %s' % (m, p, x['name']))
            for mt in ([op['requestBody']['content']] if 'requestBody' in op else []) + [
                    r['content'] for r in op['responses'].values() if r.get('content')]:
                for mname, v in mt.items():
                    if mname != 'application/json' and any(mname == e for e in JSONISH_EXTRA):
                        fails.append('duplicate JSON media type %s %s' % (m, p))
    for k, v in out_schemas.items():
        if 'x-enum-varnames' in v and ('enum' not in v or len(v['enum']) != len(v['x-enum-varnames'])):
            fails.append('enum varnames without matching numbers: ' + k)
        if 'enum' in v and not all(isinstance(e, int) and not isinstance(e, bool) for e in v['enum']) and v.get('type') == 'integer':
            fails.append('non-integer enum values: ' + k)
        for rq in v.get('required') or []:
            if rq not in (v.get('properties') or {}):
                fails.append('required property missing: %s.%s' % (k, rq))
    # revision 3 checks
    for k in sk:
        if re.search(r'SbPAM|Stealthbits|Nats|Controller', k):
            fails.append('internal name in schema key: ' + k)
    for p, item in spec['paths'].items():
        for m, op in item.items():
            if re.search(r'Async$', op['operationId']):
                fails.append('operationId ends in Async: ' + op['operationId'])
            if op['operationId'].count(op['tags'][0] + '_') > 1:
                fails.append('operationId repeats the controller: ' + op['operationId'])
            if any(x['in'] == 'header' and x['name'].lower() == 'authorization' for x in op.get('parameters', [])):
                fails.append('Authorization header parameter: %s %s' % (m, p))
            for code, rsp in op['responses'].items():
                if code.startswith('2') and rsp.get('content') and EMPTY_BODY_RE.search(rsp['description']):
                    fails.append('empty-body response has a schema: %s %s %s' % (m, p, code))
            nm_req = req_prose.get((m.upper(), tkey(p)))
            rbc = (op.get('requestBody') or {}).get('content', {})
            for mt in rbc.values():
                sc0 = mt.get('schema') or {}
                if '$ref' in sc0 and nm_req:
                    tgt0 = out_schemas.get(ref_name(sc0['$ref']), {})
                    low = {k.lower(): k for k in tgt0.get('properties', {})}
                    for fld in nm_req:
                        k0 = fld if fld in tgt0.get('properties', {}) else low.get(fld.lower())
                        if k0 and k0 not in (tgt0.get('required') or []) and not (tgt0['properties'][k0].get('readOnly')):
                            fails.append('prose marks %s required but the schema does not: %s %s' % (fld, m, p))
            for prm in op.get('parameters', []):
                if 'example' in prm:
                    chg = []
                    fix_example(prm['example'], prm.get('schema'), out_schemas, chg)
                    if chg:
                        fails.append('parameter example does not fit its schema: %s %s %s' % (m, p, prm['name']))
            for mt in list(rbc.values()) + [c for r_ in op['responses'].values() for c in (r_.get('content') or {}).values()]:
                if 'example' in mt:
                    chg = []
                    fix_example(mt['example'], mt.get('schema'), out_schemas, chg)
                    if chg:
                        fails.append('example does not fit its schema: %s %s %s' % (m, p, chg[:2]))
    for g in EXAMPLE_GUIDS:
        if not GUID_RE.match(g):
            fails.append('bad example GUID ' + g)
    rad = out_schemas.get(public_map.get('Stealthbits.Radius.RadiusAuthType', ''), {})
    if rad.get('enum') != [0, 1] or rad.get('x-enum-varnames') != ['MSCHAPv2', 'PAP']:
        fails.append('RadiusAuthType numbers: %r %r' % (rad.get('enum'), rad.get('x-enum-varnames')))
    for k in sk:
        if re.search(r'Dto|Entity|Enum|Actor', k):
            fails.append('code-type name in schema key: ' + k)
    for nm, pr in sorted(out_schemas.items()):
        pp = pr.get('properties') or {}
        if 'data' in pp and 'recordsTotal' in pp and pp['data'].get('description') not in (
                'The records on this page.', 'The rows on this page.'):
            fails.append('paged schema data text: ' + nm)
    for k in sk:
        if re.search(r'Tuple', k):
            fails.append('framework tuple type name in schema key: ' + k)
    for nm in ('req_fix_failed', 'resp_fix_failed', 'text_fix_missing', 'new_schema_exists'):
        for x in notes[nm]:
            fails.append('%s: %s' % (nm, x))

    text = json.dumps(spec, indent=2, ensure_ascii=False) + '\n'
    leak_pats = collections.OrderedDict([
        ('PSAM id', r'PSAM-\d+'), ('AB id', r'AB#\d+'), ('user path', r'/Users/[a-z]'), ('windows path', r'[A-Za-z]:\\\\'),
        ('source file', r'\.(cs|ts|tsx|py|csproj|sln)\b'), ('api-docs', r'api-docs'), ('Controllers/', r'Controllers/'),
        ('TODO', r'\bTODO\b'), ('evidence', r'(?i)\bevidence\b'), ('confidence', r'(?i)\bconfidence\b'),
        ('Widdershins', r'(?i)widdershins'), ('regression', r'(?i)\bregression\b'), ('the code', r'(?i)26\.07\.3 code|\bthe code (reads|does|path|base)'),
        ('nps-server', r'nps-server'), ('lab host', r'(?i)chucksoft|cloud\.lab|cloudshare'),
        ('ip', r'\b(?:10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})\b'),
        ('email', r'[A-Za-z0-9._%+-]+@(?!example\.)[A-Za-z0-9.-]+\.[a-z]{2,}'), ('jwt', r'eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}'),
        ('bearer literal', r'(?i)bearer\s+[A-Za-z0-9._~+/=-]{16,}'), 
        ('stack', r'\\r|\\n\s*at\s'),
        ('developer note', r'\?\?'), ('internal field name', r'enumNotes'), ('internal product name', r'\bSbPAM\b'),
        ('former company name', r'Stealthbits'), ('first person', r'\b[Ww]e\b'), ('test data', r'Fake Edition'),
        ('padding spaces', r'\S {2,}\S'),
        ('developer table or join note', r'(?i)\bjoin table\b|\bDTO\b|\bFK to\b|host_user|\bDB key\b|\bDB view\b'),
        ('many to many', r'(?i)many[- ]to[- ]many'), ('primary key', r'(?i)\bprimary key\b'), ('join table', r'(?i)\bjoin tables?\b'),
        ('actors', r'(?i)\bactors?\b'), ('search method', r'\.Search\(\)'), ('DataRows member', r'\.DataRows\b'),
        ('DTO', r'\bDTOs?\b'), ('entity', r'(?i)\bentit(?:y|ies)\b'), ('FK', r'\bFKs?\b'),
        ('bare Microsoft docs URL', r'docs\.microsoft\.com'),
        ('message bus name', r'\bNats\b'), ('former company domain', r'(?i)whatever\.com|sbitsinc'),
        ('html anchor', r'<a\s+href'), ('UI note', r'(?:UI|Endpoint) => (?:Endpoint|UI)'),
        ('unverified claim', r'(?i)not confirmed|not documented for this release'),
        ('script placeholder', r'\$TenantId|/etc/shadow'),
        ('process language', r"(?i)console traffic|\bparser\b|\btaken from\b|\bobserved in\b|could not be confirmed|\bwe\b|\bour\b|"
                             r"\brecorded (?:calls?|traffic|requests?)\b|\b(?:traffic|call) recordings?\b"),
        ('code class or scheduler internals', r"(?i:\bhealth ?check\b|scheduler service)|\bLsaLookupCacheMaxSize\b|\bHttpStatus\b|"
                                             r"\bLoginAccountNameFormat\b|\bActivitySessionId\b|\bManagedObjectType\b"),
        ('model wording', r'This model represents|\bdesciption\b|\ban [bcdfgjklmnpqrstvwxz]'),
    ])
    # scan strings only (not $ref values or object keys)
    strings = []

    def collect_strings(o, path=''):
        if isinstance(o, dict):
            for k, v in o.items():
                if k == '$ref':
                    continue
                collect_strings(v, path + '/' + k)
        elif isinstance(o, list):
            for i, v in enumerate(o):
                collect_strings(v, path + '/%d' % i)
        elif isinstance(o, str):
            if not path.endswith('/version'):
                strings.append((path, o))
    collect_strings(spec)
    for path, s in strings:
        for gm in GUID_IN_TEXT_RE.findall(s):
            if gm.lower() not in EXAMPLE_GUIDS and gm != NIL_GUID:
                fails.append('GUID that is not a placeholder at %s: %s' % (path, gm))
        for sm in SID_RE.finditer(s):
            if (sm.group(1), sm.group(2), sm.group(3)) not in ALLOWED_SID_PARTS:
                fails.append('SID that is not a documentation value at %s: %s' % (path, sm.group(0)))
        for im in re.findall(r'(?<![\d.])\d{1,3}(?:\.\d{1,3}){3}(?![\d.])', s):
            if not im.startswith('192.0.2.') and im not in ('0.0.0.0', '255.255.255.255', '127.0.0.1'):
                fails.append('address that is not a documentation address at %s: %s' % (path, im))
    leaks = []
    for path, s in strings:
        if (path.endswith('/description') or path.endswith('/summary')) and '/example' not in path:
            tm = re.search(r'</?[A-Za-z][^>]*>', s)
            if tm:
                fails.append('tag-like text in %s: %s' % (path, tm.group(0)))
        for name, pat in leak_pats.items():
            mm = re.search(pat, s)
            if mm:
                leaks.append((name, path, s[max(0, mm.start() - 40):mm.end() + 40].replace('\n', ' ')))
    if leaks:
        for l in leaks[:60]:
            print('LEAK', l)
        fails.append('%d leak scan hits' % len(leaks))

    # ------------------------------------------------------------ full spec: every route, internal ones flagged
    # The public build above is untouched. The internal operations are added after it, so the public part of the
    # full spec is exactly the public build, and filter_public() has to give the public build back byte for byte.
    pub_notes = notes
    notes = collections.defaultdict(list)
    aud = {a['id']: a for a in load(INV, 'audience', 'audience.json')['routes']}
    facts = {x['id']: x for x in load(INV, 'audience', 'facts.json')['records']}
    rl_after = set(rlist.get('hiddenAfterReview', []))
    public_ids = set(ids)
    fpaths = collections.OrderedDict((p, collections.OrderedDict(item)) for p, item in copy.deepcopy(paths).items())
    # group the internal routes by (method, template); spellings of one template follow the public choice
    int_groups = collections.OrderedDict()
    for cr in sorted(code_routes, key=lambda x: (strip_constraints(x['route']).lower(), x['method'].upper())):
        rid = '%s %s' % (cr['method'].upper(), cr['route'])
        if rid in public_ids:
            continue
        int_groups.setdefault((cr['method'].upper(), tkey(cr['route'])), []).append((rid, cr))
    int_spell = collections.defaultdict(collections.Counter)
    for lst in int_groups.values():
        for rid, cr in lst:
            int_spell[tkey(cr['route'])][strip_constraints(cr['route'])] += 1
    full_chosen = dict(chosen_path)
    for t, cnt in int_spell.items():
        if t not in full_chosen:
            full_chosen[t] = sorted(cnt.items(), key=lambda kv: (-kv[1], kv[0]))[0][0]
            if len(cnt) > 1:
                notes['path_unify'].append('%s: spellings %s -> %s' % (t, sorted(cnt), full_chosen[t]))
    int_merged, by_reason = [], collections.Counter()
    oid_taken = {o['operationId'] for item in paths.values() for o in item.values()}
    new_ops = []   # (spec path, method, op, raw-ref op)
    for (m, t), lst in int_groups.items():
        rid, cr = lst[0]
        if len(lst) > 1:
            int_merged.append(' + '.join(x for x, _ in lst))
        code_path = cr['route']
        spec_path = full_chosen[t]
        reason = internal_reason(rid, aud, dropped, rl_after)
        by_reason[reason] += 1
        src = src_sup.get((m, t)) or src_base.get((m, t))
        src_op = copy.deepcopy(src[1]) if src else {}
        op = collections.OrderedDict()
        op['tags'] = [cr['controller']]
        act = re.sub(r'(?<=.)Async$', '', cr['action'] or src_op.get('operationId') or m.lower())
        op['summary'] = action_words(act) + ' (internal)'
        op['description'] = ''   # composed below, once the schema names are final
        oid = '%s_%s' % (cr['controller'], act)
        n = 1
        while oid in oid_taken:
            n += 1
            oid = '%s_%s%d' % (cr['controller'], act, n)
        oid_taken.add(oid)
        op['operationId'] = oid
        params = build_params(rid, m, code_path, spec_path, src_op, {'parameters': []})
        code_of = dict(zip(re.findall(r'\{([^}:]+)', spec_path), re.findall(r'\{([^}:]+)', code_path)))
        for prm in params:
            prm.pop('example', None)
            if prm['in'] == 'path' and code_of.get(prm['name'], prm['name']) != prm['name']:
                # the template spelling was unified across methods: describe the parameter by the code's own name
                prm['description'] = code_param_text(code_of[prm['name']]) or prm.get('description')
            if not prm.get('description'):
                prm['description'] = ('Value of the {%s} segment of the path.' % prm['name']) if prm['in'] == 'path' \
                    else ('%s parameter `%s`.' % (prm['in'].capitalize(), prm['name']))
            prm['description'] = clean_text(prm['description'])
        if params:
            op['parameters'] = params
        if src_op.get('requestBody'):
            rb = copy.deepcopy(src_op['requestBody'])
            rb['required'] = True
            rb.pop('description', None)
            content = rb.get('content') or {}
            if 'application/json' in content:
                for extra in JSONISH_EXTRA:
                    content.pop(extra, None)
            for mt in content.values():
                mt.pop('example', None)
                mt.pop('examples', None)
            op['requestBody'] = rb
        responses = {}
        for code, resp in sorted((src_op.get('responses') or {}).items()):
            if not str(code).isdigit():
                continue
            rr = {'description': clean_text(resp.get('description') or '') or STATUS_TEXT.get(str(code), 'Response.')}
            if str(code).startswith('2') and resp.get('content'):
                cont = copy.deepcopy(resp['content'])
                if 'application/json' in cont:
                    for extra in JSONISH_EXTRA:
                        cont.pop(extra, None)
                for mt in cont.values():
                    mt.pop('example', None)
                    mt.pop('examples', None)
                rr['content'] = cont
            responses[str(code)] = rr
        if not any(c.startswith('2') for c in responses):
            responses['200'] = {'description': 'The call succeeded. The response type is not recorded for this route.'}
            notes['no_source_response'].append(rid)
        if not cr.get('anonymous') and '401' not in responses:
            responses['401'] = {'description': STATUS_TEXT['401']}
        op['responses'] = dict(sorted(responses.items(), key=lambda kv: int(kv[0])))
        op['security'] = [] if cr.get('anonymous') else [{'bearerAuth': []}]
        op['x-internal'] = True
        op['x-internal-reason'] = reason
        if not src:
            notes['no_source'].append(rid)
        new_ops.append((spec_path, m, op, rid, cr, reason, src_op))

    # schemas the internal operations reach: shared ones keep their public name and text, new ones are named by the
    # same rules (public_base, Dto/namespace/number on a collision, FINAL_RENAME) around the names already taken
    raw_refs = set()
    for _, _, op, *_ in new_ops:
        collect(op, raw_refs)
    raw_refs.discard(None)
    need, todo = set(), list(raw_refs)
    while todo:
        n = todo.pop()
        if n in need:
            continue
        need.add(n)
        if sanitize_name(n) in public_map or n not in schemas:
            continue
        a = set()
        collect(schemas[n], a)
        a.discard(None)
        todo += [x for x in a if x not in need]
    raw_by_san = collections.defaultdict(list)
    for k in schemas:
        raw_by_san[sanitize_name(k)].append(k)
    ref_map = {}   # name used inside the internal operations / copied schemas -> final name
    taken = set(public_map.values())
    fresh = sorted(n for n in need if sanitize_name(n) not in public_map and n in schemas)
    for n in fresh:
        sn = sanitize_name(n)
        if len(raw_by_san[sn]) > 1:
            fails.append('sanitized schema name collision in the full spec: %s' % raw_by_san[sn])
    def final_name(n):
        sn = sanitize_name(n)
        if sn in public_map:
            return public_map[sn]
        cands = [public_base(n), public_base(n, keep_dto=True)]
        ns = [x for x in n.split('.')[:-1] if x in NS_SEGMENTS and x not in ('SbPAM', 'Models', 'System')]
        if ns:
            cands.append(ns[-1] + public_base(n, keep_dto=True))
        for c in cands:
            c = FINAL_RENAME.get(c, c)
            if c not in taken:
                return c
        k = 2
        while '%s%d' % (cands[-1], k) in taken:
            k += 1
        return '%s%d' % (cands[-1], k)
    for n in fresh:
        # the public name set is public_names() over the sanitized names; fresh names are fitted around it
        sn = sanitize_name(n)
        ref_map[n] = final_name(n)
        taken.add(ref_map[n])
        ref_map[sn] = ref_map[n]
    for n in need:
        sn = sanitize_name(n)
        if sn in public_map:
            ref_map[n] = public_map[sn]
            ref_map[sn] = public_map[sn]
    missing_schema = sorted(n for n in need if n not in schemas and sanitize_name(n) not in public_map)
    for n in missing_schema:
        fails.append('full spec: schema %s is referenced by an internal operation but no source defines it' % n)

    def retarget(o):
        def fn(d):
            n = ref_name(d['$ref'])
            if n is not None and n in ref_map:
                d['$ref'] = '#/components/schemas/' + ref_map[n]
        walk_refs(o, fn)
    new_schemas = {}
    for n in fresh:
        sch = copy.deepcopy(schemas[n])
        new_schemas[ref_map[n]] = sch
    retarget(new_schemas)
    for _, _, op, *_ in new_ops:
        for mt in [c for c in (op.get('requestBody') or {}).get('content', {}).values()] + [
                c for r_ in op['responses'].values() for c in (r_.get('content') or {}).values()]:
            sc = mt.get('schema') or {}
            if sc.get('$ref') and ref_name(sc['$ref']) in remove_schemas:
                mt['schema'] = {'type': 'object'}
        retarget(op)
    clean_tree(new_schemas)
    fix_ips(new_schemas)
    for k, v in new_schemas.items():
        if 'enum' in v and any(isinstance(x, str) for x in v['enum']):
            notes['string_enum'].append(k)
    tidy_tree(new_schemas, True)
    swap_example_text(new_schemas)
    apply_text_rules(new_schemas, TEXT_RULES, [])
    for k, v in new_schemas.items():
        nd = model_text(v['description']) if isinstance(v.get('description'), str) else None
        if nd is not None:
            v['description'] = nd
    fix_schema_examples(new_schemas, [])
    clean_examples(new_schemas, [])
    fix_ips(fpaths)

    # descriptions: composed from the code inventory (controller, action, authorization, parameters, types, statuses)
    def type_of(content):
        for mt in (content or {}).values():
            sc = mt.get('schema') or {}
            if '$ref' in sc:
                return '`%s`' % ref_name(sc['$ref'])
            if sc.get('type') == 'array' and '$ref' in (sc.get('items') or {}):
                return 'an array of `%s`' % ref_name(sc['items']['$ref'])
            if sc.get('type'):
                return '`%s`' % sc['type']
        return None
    for spec_path, m, op, rid, cr, reason, src_op in new_ops:
        a, f = aud.get(rid) or {}, facts.get(rid) or {}
        parts = [INTERNAL_LEAD + ' %s `%s` is handled by the `%s` action of the %s controller.' % (
            m, cr['route'], re.sub(r'(?<=.)Async$', '', cr['action'] or '-'), cr['controller'])]
        parts.append('Why it is not public: ' + REASON_TEXT[reason] + (
            ' Review reason codes: %s.' % ', '.join(a['reasonCodes']) if a.get('reasonCodes') else ''))
        auth = []
        if cr.get('anonymous'):
            auth.append('Anonymous: no sign-in required (security: []).')
        else:
            auth.append('Roles: %s.' % (cr['roles'] if cr.get('roles') else 'none declared'))
            if cr.get('policy'):
                auth.append('Policy: %s.' % cr['policy'])
            if cr.get('permission'):
                auth.append('Permission: %s.' % ', '.join(str(x) for x in cr['permission']))
        if not cr.get('authorized') and not cr.get('anonymous'):
            auth.append('The controller declares no authorization attribute for this action.')
        parts.append('Authorization: ' + ' '.join(auth))
        if op.get('parameters'):
            parts.append('Parameters: ' + '; '.join('`%s` (%s%s)' % (x['name'], x['in'], ', required' if x.get('required') else '')
                                                    for x in op['parameters']) + '.')
        rbt = type_of((op.get('requestBody') or {}).get('content'))
        parts.append('Request body: %s.' % (rbt if rbt else ('none recorded' if not op.get('requestBody') else 'see the schema')))
        ok = [(c, r_) for c, r_ in op['responses'].items() if c.startswith('2')]
        rt = next((type_of(r_.get('content')) for c, r_ in ok if r_.get('content')), None)
        parts.append('Response: %s. Status codes listed here come from the generated API description and may be incomplete. Listed: %s.' % (
            rt if rt else 'no body type recorded', ', '.join(op['responses'])))
        flags = []
        for k, txt in (('obsolete', 'marked obsolete'), ('debugOnly', 'only available in debug builds'),
                       ('ignoreApi', 'excluded from the generated API description'),
                       ('allowReadOnlyMutation', 'allowed for read-only tokens although it changes state')):
            if cr.get(k):
                flags.append(txt)
        if flags:
            parts.append('Code flags: ' + ', '.join(flags) + '.')
        sec = []
        if f.get('stateChanging'):
            sec.append('Changes state.')
        if f.get('returnsSecretsPotential'):
            sec.append('The response may carry secret material (passwords, tokens, keys).')
        if f.get('callerCategories'):
            sec.append('Called by: %s.' % ', '.join(f['callerCategories']))
        if a.get('contested'):
            sec.append('Flagged for a human security decision by the audience review.')
        for dn in f.get('devNotes') or []:
            if dn.get('security'):
                t = strip_code_cites(dn.get('text'))
                if t:
                    sec.append('Security note: ' + (t if t.endswith('.') else t + '.'))
        if sec:
            parts.append('Internal notes: ' + ' '.join(sec))
        parts.append(INTERNAL_TRAIL)
        op['description'] = '\n\n'.join(strip_line_cites(clean_text(x)) for x in parts)

    # assemble
    for spec_path, m, op, *_ in new_ops:
        fpaths.setdefault(spec_path, collections.OrderedDict())[m.lower()] = op
    fpaths = collections.OrderedDict((p, fpaths[p]) for p in sorted(fpaths, key=str.lower))  # public methods keep their order
    fschemas = dict(out_schemas)
    fschemas.update(new_schemas)
    fschemas = collections.OrderedDict((k, fschemas[k]) for k in sorted(fschemas))
    ftags = sorted({o['tags'][0] for item in fpaths.values() for o in item.values()}, key=str.lower)
    full_spec = collections.OrderedDict()
    full_spec['openapi'] = '3.0.3'
    full_spec['info'] = public_info()
    full_spec['info']['title'] += ' (full, internal)'
    full_spec['info']['x-internal-note'] = INTERNAL_NOTE
    full_spec['servers'] = copy.deepcopy(spec['servers'])
    full_spec['security'] = copy.deepcopy(spec['security'])
    full_spec['tags'] = [{'name': t} for t in ftags]
    full_spec['paths'] = fpaths
    full_spec['components'] = collections.OrderedDict([
        ('securitySchemes', copy.deepcopy(spec['components']['securitySchemes'])), ('schemas', fschemas)])
    route_keys = {(x['method'].upper(), tkey(x['route'])) for x in code_routes}
    public_keys = {(split_id(i)[0], tkey(split_id(i)[1])) for i in ids}
    fails += check_full(full_spec, route_keys, public_keys, len(ids))
    full_text = dump_spec(full_spec)
    pub_text = dump_spec(filter_public(full_spec))
    if pub_text != text:
        fails.append('the public spec filtered from the full spec differs from the direct public build')
    int_notes = notes
    notes = pub_notes
    n_full_ops = sum(1 for item in fpaths.values() for k in item if k in METHODS)

    os.makedirs(args.out_dir, exist_ok=True)
    out_json = os.path.join(args.out_dir, PUBLIC_NAME)
    with open(out_json, 'w', encoding='utf-8') as f:
        f.write(pub_text)
    full_json = os.path.join(args.out_dir, FULL_NAME)
    with open(full_json, 'w', encoding='utf-8') as f:
        f.write(full_text)
    sha = hashlib.sha256(pub_text.encode('utf-8')).hexdigest()
    full_sha = hashlib.sha256(full_text.encode('utf-8')).hexdigest()

    # ------------------------------------------------------------ report
    nops = sum(len(v) for v in spec['paths'].values())
    L = ['# Build report: privilegesecure-26.07.3.openapi.json', '',
         'Internal. Generated by `tools/api-inventory/build_spec.py`; do not publish.', '',
         '## Counts', '',
         '- Routes in route-list.json: %d; operations built: %d (distinct method + path template); paths: %d' % (len(ids), nops, len(spec['paths'])),
         '- Routes merged because OpenAPI cannot hold two operations on one path template: %s' % (merged_pairs or 'none'),
         '- Dropped for caution (excluded): %d; present in output: 0' % len(dropped),
         '- Operation source: supplement %d, base %d, neither %d' % (
             sum(1 for r in routes if (split_id(r['id'])[0], tkey(split_id(r['id'])[1])) in src_sup),
             sum(1 for r in routes if (split_id(r['id'])[0], tkey(split_id(r['id'])[1])) not in src_sup
                 and (split_id(r['id'])[0], tkey(split_id(r['id'])[1])) in src_base), len(no_src)),
         '- Operations with a request body: %d; with an example attached: %d' % (
             sum(1 for v in spec['paths'].values() for o in v.values() if 'requestBody' in o), ex_used),
         '- Anonymous operations (security: []): %d' % sum(
             1 for v in spec['paths'].values() for o in v.values() if o['security'] == []),
         '- Schemas: base %d, supplement %d, emitted (reachable) %d' % (
             len(base['components']['schemas']), len(sup['schemas']), len(out_schemas)),
         '- Schema keys renamed to satisfy the OpenAPI key pattern: %d' % sum(1 for a, b in mapping.items() if a != b),
         '- Enums converted to integer: %d (emitted: %d)' % (len(enum_converted),
                                                             sum(1 for v in out_schemas.values() if 'x-enum-varnames' in v)),
         '- SHA-256 of output: `%s`' % sha, '',
         '## Routes that could not be built', '',
         ('None. All %d routes built.' % len(ids)) if not no_src else
         'Built without a base or supplement shape (descriptions only, no body or response schema): ' + ', '.join(no_src), '',
         '## Schema corrections', '',
         '- Applied (verified): ' + ', '.join('%s %d' % kv for kv in sorted(applied.items())),
         '- update_enum: values come from enum-map; missing members: %s' % (notes['update_enum_missing'] or 'none'),
         '- remove_schema dropped (unreachable): %s' % (removed_by_corr or 'none'),
         '- remove_schema still referenced (kept): %s' % (notes['remove_schema_still_referenced'] or 'none'),
         '- Corrections targeting schemas not in the spec: %s' % (notes['corr_missing_schema'] or 'none'),
         '- Corrections skipped (not verified): %s' % (skipped_corr or 'none'),
         '- Live-confirmed AD properties added: %d' % len(ad_added), '']
    L += ['  - ' + a for a in ad_added] + ['']
    L += ['## Unresolved items', '',
          '- String enums with no enum-map entry (left as names): %s' % (enum_unmapped or 'none'),
          '- Reachable enums emitted as integer with member names but NO numeric values (not in enum-map): %s' % (notes['enum_no_values'] or 'none'),
          '- .NET framework enums given their documented values (not in enum-map): %s' % (notes['dotnet_enum'] or 'none'),
          '- Inline enums holding names on non-string types: %d' % len(inline_enum),
          '- Status checks (described vs observed): %s' % (status_issues or 'none'),
          '- Path spelling unified (same template, different parameter names): %d' % len(notes['path_unify'])]
    L += ['  - ' + x for x in notes['path_unify']]
    L += ['- Path parameters added from template (not in descriptions): %d' % len(notes['path_param_added'])]
    L += ['  - ' + x for x in notes['path_param_added']]
    L += ['- Model-binder artifact parameters dropped (cancellation token members): %d' % len(notes['junk_param'])]
    L += ['- Parameters kept from the source spec that descriptions do not cover (no description text): %d' % len(notes['spec_only_param'])]
    L += ['  - ' + x for x in notes['spec_only_param']]
    L += ['- Response schema replaced by a generic object (schema removed by correction): %s' % (notes['generic_object'] or 'none')]
    L += ['- Schemas added that the spec did not hold: %s' % (notes['schema_added'] or 'none')]
    no_body = sorted('%s %s' % (mm.upper(), pp) for pp, it in spec['paths'].items() for mm, o in it.items()
                     if not any(k.startswith('2') and v.get('content') for k, v in o['responses'].items()))
    L += ['', '## Revision 2 changes', '',
          '- Developer notes and old product names reworded (schema text overrides): %d; text tidied in the post-pass: %d' % (
              len(text_fixed), len(notes['text_tidied'])),
          '- Operations whose description pointed at the internal enumNotes field, now pointing at the Values paragraph: %d' % len(
              notes['enum_pointer_fixed']),
          '- Release-source enums given numeric values: %s' % (sorted(notes['release_enum']) or 'none'),
          '- Enums left without numbers: %s' % (sorted(public_map[n] for n in UNVERIFIED_ENUMS if n in public_map) or 'none'),
          '- Request schemas made request-specific (required, readOnly, bounds): %d' % len(notes['req_fix'])]
    L += ['  - ' + x for x in notes['req_fix']]
    L += ['- Success bodies attached: %d; removed: %s; statuses added: %s' % (
              len(notes['resp_body_added']), notes['resp_body_removed'] or 'none', notes['status_added'] or 'none')]
    L += ['  - ' + x for x in notes['resp_body_added']]
    L += ['- Schemas added from the release models: %d' % len(notes['schema_added'])]
    L += ['- Examples: ignored fields removed from %d, parsed from text to JSON %d, dropped as a type mismatch %d, quotes stripped %d' % (
              len(notes['example_stripped']), len(notes['example_parsed']), len(notes['example_dropped']),
              len(notes['example_unquoted']))]
    L += ['  - ' + x for x in notes['example_stripped'] + notes['example_dropped']]
    L += ['- Duplicate JSON media types dropped (json-patch+json, text/json, *+json): %d' % len(notes['media_pruned']),
          '- Parameters described: %d; parameters dropped because the controller does not bind them: %s' % (
              len(notes['param_described']), notes['unbound_param'] or 'none'),
          '- DELETE operations with a request body that now say the body is required: %d' % len(notes['delete_body_note']),
          '- Fixes that target routes outside the public route set (not applied): %s' % (notes['fix_unused'] or 'none'),
          '- Operations with no schema on any 2xx response: %d (all described as returning no body or an empty body)' % len(no_body),
          '- write-shape-diff status check ran against %d recorded calls' % len(wsd_idx)]
    L += ['  - ' + x for x in no_body]
    renamed = [(a, b) for a, b in sorted(public_map.items()) if a != b]
    L += ['', '## Revision 3 changes (second judge round)', '',
          '- Schema names shortened to public names: %d of %d schemas renamed (old name -> new name below). Collisions keep the Dto '
          'suffix, then take a namespace prefix, then a number. Two names are not literal strips because "Controller" must not '
          'appear in a key: `ActiveDirectoryController` (an Active Directory domain controller model) is `ActiveDirectoryDC` and '
          '`ServiceControllerStatus` is `ServiceStatus`. `NatsStringDto` is `StringResult` (no longer reachable after the WinRM '
          'Test fix, so it is not emitted).' % (len(renamed), len(public_map))]
    L += ['  - `%s` -> `%s`' % kv for kv in renamed]
    L += ['- Text rule rewrites applied to descriptions and summaries: %d (rule list `TEXT_RULES`, plus `SCHEMA_TEXT` overrides)' % len(text_rewritten),
          '- Response bodies overridden: %s' % (notes['resp_overridden'] or 'none'),
          '- Response bodies removed because the response text says the body is empty: %s' % (notes['resp_body_removed_auto'] or 'none'),
          '- Required fields added to request schemas (prose marks them required): %d operations' % len(notes['required_added'])]
    L += ['  - ' + x for x in notes['required_added']]
    L += ['- Prose required marks that match no top-level property (nested fields, left in the text only): %s' % (notes['required_unmapped'] or 'none'),
          '- Prose field removed because the schema has no such property: %s' % (notes['prose_field_dropped'] or 'none'),
          '- Examples corrected to fit their schema (non-GUID or all-zero GUID on uuid fields, enum member): %d values' % len(notes['example_fixed']),
          '- Header parameter named Authorization removed (the bearerAuth requirement covers it): %s' % (notes['auth_header_param'] or 'none'),
          '- `RadiusAuthType` is used by: %s (through the MFA connector request body).' % (notes['radius_routes'] or 'none'),
          '- operationId is `Controller_Action` with the Async suffix dropped. `scripts/prepare-privilegesecure-spec.mjs` no longer '
          'adds the controller name a second time, so page slugs lose the repeated controller and the Async word. Committed '
          'reference pages under `docs/privilegesecure/26.07/integrations/api/reference/` use the old slugs and are regenerated '
          'by the docs build; no hand-written page links to them.',
          '- `prepare-privilegesecure-spec.mjs` `clean()` keeps line breaks and Markdown lists (collapses spaces and tabs only) and '
          'leaves `example` and `examples` values untouched. Checked in the privilegesecure container: 594 unique operationIds, the '
          'curl fence survives, "Deleted Activity" survives, no description loses a non-space character, example payloads are equal.',
          '- Schemas pruned after the required-field pass (no longer referenced): %s' % (notes['pruned_r3'] or 'none')]
    L += ['', '## Revision 4 changes (third judge round)', '',
          '- Response corrections (input files `plans/api-inventory/spec/response-fixes/slice-*.json`, read by the generator; '
          'a missing file or folder changes nothing): %d files, %d entries, %d applied, %d not applied' % (
              len(r4_files), len(r4_fixes), len(r4['applied']), len(r4['skipped'])),
          '  - Each applied entry replaces the success-response schema of that operation (an "empty" entry would remove it). '
          'An entry is not applied when the response text contradicts it.']
    L += ['  - Not applied: ' + x for x in r4['skipped']]
    L += ['  - Applied as one object or an array: ' + x for x in r4['oneof']]
    L += ['  - Schemas added with their properties: %s' % (r4['schema_added'] or 'none'),
          '  - Response examples of the old schema dropped: %s' % (r4['example_dropped'] or 'none'),
          '  - Applied: %s' % r4['applied'],
          '- Framework tuple names: `ValueTupleOfInt32AndInt32` is gone (no operation uses it any more); `TupleOfInt32AndInt32`, '
          'still used by `POST /api/v1/ManagedUser/AddMultiple` and `POST /api/v1/RolesRole/AddRolesToManagedAccountGroup`, is '
          'renamed %s and described as a pair of counts.' % ([x for x in sorted(set(notes['final_rename'])) if x.startswith('TupleOf')] or 'none'),
          '- `RadiusAuthType` now has numbers: 0 = MSCHAPv2, 1 = PAP. Source: the console sends `authType: 0` / `1` '
          '(`identity-privilegesecuream-web` `src/components/Config/MfaConnectors/RadiusOptions.tsx`, ref origin/release/26.07.3) and the '
          'release `swagger.json` lists the enum as `[0, 1]` in the order MSCHAPv2, PAP.',
          '- Text rules added: paged-result container and `recordsTotal` wording, join-model sentences ("Links X to Y."), '
          'source-comment leftovers, bare docs.microsoft.com URLs (now Markdown links to learn.microsoft.com), the doubled '
          '"Permission required: No sign-in required." line on the anonymous GETs, "entity type" pointers. Rewrites applied in '
          'total: %d' % len(text_rewritten),
          '- Examples fixed in the revision 3 and 4 passes (RFC 3339 date-times, numbers sent as text, null on a bare `$ref` '
          'property dropped from the example): %d values' % len(notes['example_fixed']),
          '- 204 added to `PUT /api/v1/MfaConnector/Group/{groupId}` (the 200 text already described it).',
          '- Leak check now also fails on: many to many, primary key, join table, actors, .Search(), .DataRows, DTO, entity, FK, '
          'docs.microsoft.com.',
          '- Route set: exactly the %d ids of `descriptions/route-list.json` are built (check "route set mismatch" passes); '
          '%d are not buildable, %d are merged onto another route\'s path template, so %d operations.' % (
              len(ids), len(no_src), len(merged_pairs), nops)]
    L += ['', '## Revision 5 changes (fourth judge round)', '',
          '- Process language removed from public text: the `schedule` bullet of `POST /api/v1/DomainSync/scan/domain` no longer says '
          'where the format came from, and "clears the saved change watermark first" is now "resets the saved change position first". '
          'Also reworded: "not taken from the original activity" and "Taken from the body, not from the original role" (Activity copy, '
          'Role copy). New leak checks: console traffic, parser, taken from, observed in, could not be confirmed, we/our, recorded '
          'calls/traffic/requests, traffic/call recordings. The bare word "recording" is not checked because it is product wording '
          '(session recordings, the ReplaySession routes).',
          '- Public schema names: no key contains Dto, Entity, Enum or Actor (new key check). Mapping of the public names before this '
          'revision to the new ones (%d):' % len(FINAL_RENAME_R5)]
    L += ['  - `%s` -> `%s`' % kv for kv in sorted(FINAL_RENAME_R5.items())]
    L += ['- Paged schemas: `data` is "The records on this page." and `recordsTotal` is the standard sentence on %d schemas (the two '
          'access-certification tables keep "The rows on this page."). `DataTableOfEncryptedFile` and `DataTableOfGroupRoleCandidate` '
          'now say "A page of search results.". The audit change schema (`DataTableOfAuditChangeRow` / `AuditChangeRow`) follows the '
          'same wording. New check: every paged schema has one of the two `data` texts.' % len(r5['paged']),
          '- Developer comments rewritten in plain words: %d property descriptions (%s), plus "desciption" -> "description" and '
          '"the database generates one" -> "the server generates one" in `POST /api/v1/ManagedResourceGroup`. New leak checks cover '
          'health check, scheduler service and the C# member names found.' % (len(r5['prop']), ', '.join(r5['prop'])),
          '- "This model represents ..." descriptions: %d rewritten with the rule "drop the prefix, keep the sentence" plus explicit '
          'entries for the broken ones (`MODEL_TEXT` in the generator). New check: no description starts with "This model represents", '
          'contains "desciption" or "an" before a consonant.' % len(r5['model'])]
    L += ['  - `%s`: %s' % (k, new) for k, old, new in r5['model']]
    L += ['- Example values: %d GUIDs and SIDs replaced (`ActiveDirectoryDomain.objectSid` is now `S-1-5-21-1111111111-2222222222-3333333333`; '
          'GUIDs outside the placeholder set map to it; the OS version `10.4.2.1` is `10.0.20348`). New checks fail on any GUID, SID '
          'or IPv4 address in the spec that is not a placeholder or a documentation value (192.0.2.x).' % len(r5['example']),
          '- Link wording is "See [Microsoft documentation](url)" everywhere (`ActiveDirectoryDomain.maxRenewAge`, `maxTicketAge`).',
          '- `POST /api/v1/RolesRole/AddRolesToManagedAccountGroup/{managedAccountGroupId}` now returns `RoleAssignmentCounts` like '
          'the account route (`IntPair` stays for `POST /api/v1/ManagedUser/AddMultiple`).',
          '- `ActionTemplateParameter`: "Allowed values (if restricted)." is on `valueSet`; `shouldSerialize_ValueSet` says "Not used.".',
          '- `GET /api/v1/ActivitySession/{sessionId}/Password` declares `text/plain` (first) and `application/json`.',
          '- `GET /api/v1/AzureAdTenant/RetrieveAll` declares 400.',
          '- `GET /api/v1/ApprovalWorkflow/{id}/State`: "Values for the response: ...".',
          '- "Unique id from AD sync" left as it is (decision).']
    L += ['', '## Not fixable from the sources', '',
          '- `PUT /api/v1/ConnectionProfile/{id}`: the text still marks `type` required for the update; only the create route was '
          'changed because the create route defaults to Generic.',
          '- `SbPAM.Models.MaxIdleTimeout.maxIdleUserDays`: OpenAPI 3.0 cannot express "0 or 90 to 365". The schema keeps '
          'minimum 0 and maximum 365 and the description states the gap. The schema-corrections definition (range 0 to 365) is '
          'wrong and is superseded here by a text override.',
          '- `POST /api/v1/HostScanJob/{hostScanJobId}`: GET, POST and DELETE share one path template, and OpenAPI allows one '
          'parameter name per template, so the path variable cannot be renamed for POST only. The summary-level note says the '
          'value is a managed resource ID.',
          '- `activityConfiguration`-style required rules that depend on another field (Activity `loginAccountNameFormat`, '
          'required unless `loginAccount` is Requester or Vault) are left optional in the schema and stay in the request body text.',
          '- `GET /api/v1/ActivityGroup/{id}/AccessPolicies`: the 200 text describes an object with `activityGroup` and `policies`, '
          'but the schema is the activity group alone; the wrapper type is not in the sources and was not invented. Open item.',
          '- `POST /api/v1/Report` and `POST /api/v1/Report/Subscribe` appear in write-shape-diff but are not in the public route '
          'set, so their request schemas are not in the spec and the required rules for them were not applied.']
    L += ['', '## Full spec and public filter', '',
          'The build writes `%s` first (every route; internal) and derives `%s` from it with `filter_public()`; the public file '
          'can also be rebuilt from the full file alone: `python3 tools/api-inventory/build_spec.py --filter-public FULL.json PUBLIC.json`. '
          'The build fails when the filtered public text differs from the direct public build.' % (FULL_NAME, PUBLIC_NAME),
          '- Routes in `routes.json`: %d; operations in the full spec: %d (distinct method + path template); paths: %d; schemas: %d' % (
              len(code_routes), n_full_ops, len(fpaths), len(fschemas)),
          '- Public operations: %d; internal (`x-internal: true`): %d' % (n_full_ops - sum(by_reason.values()), sum(by_reason.values())),
          '- Internal by `x-internal-reason`: ' + ', '.join('%s %d' % (k, by_reason[k]) for k in INTERNAL_REASONS),
          '  - hidden-after-review: listed in `route-list.json` hiddenAfterReview; cautioned-not-published: `droppedForCaution`, plus '
          'routes the panel voted public with caution that the dev team does not publish; internal-plumbing: voted hidden with the '
          'reason code internal-plumbing; hidden-by-review: every other hidden vote.',
          '- Routes merged because OpenAPI cannot hold two operations on one path template: public %s; internal %s' % (
              merged_pairs or 'none', int_merged or 'none'),
          '- SHA-256 of the full spec: `%s`' % full_sha,
          '- Internal operations without a base or supplement shape (parameters, body and responses not recorded): %d' % len(int_notes['no_source']),
          '- Internal operations given a default 200 because no 2xx response is recorded: %d' % len(int_notes['no_source_response']),
          '- Schemas that only internal operations use (named by the public rules): %d; string enums left as names: %s' % (
              len(new_schemas), int_notes['string_enum'] or 'none'),
          '- Internal text comes from `routes.json`, `audience.json` and `facts.json` (security notes with the source file references removed); '
          'request and response examples are not carried over. Checks on the full spec: refs resolve, operationIds unique, path parameters, '
          'every route present, every non-public operation flagged, no tokens, e-mail addresses, lab hosts, ticket IDs or non-documentation '
          'addresses, GUIDs and SIDs in any string. The public leak scan does not run on the full spec.',
          '- Path spelling unified for internal-only templates: %s' % (int_notes['path_unify'] or 'none'), '']
    L += ['- Success content with no 2xx body code to hang it on: %s' % (resp_nocontent or 'none'), '',
          '## Decisions', '',
          '- Error responses carry descriptions only; response schemas are attached to the success status.',
          '- Anonymous routes (route-list `anonymous`) get `security: []`.',
          '- Server variable host defaults to `server.example.com`.',
          '- All summary and description text comes from descriptions.json; the base and supplement summaries are not used.',
          '- Request examples: the example whose property types best match the body schema; first on ties.', '',
          '## Checks', '', '- Failures: %s' % (fails or 'none')]
    with open(os.path.join(args.out_dir, 'BUILD-REPORT.md'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(L) + '\n')
    print('public: operations %d, paths %d, schemas %d, sha256 %s' % (nops, len(spec['paths']), len(out_schemas), sha))
    print('full: operations %d (internal %d: %s), schemas %d, sha256 %s' % (
        n_full_ops, sum(by_reason.values()), dict(sorted(by_reason.items())), len(fschemas), full_sha))
    if fails:
        print('FAILED:')
        for x in fails:
            print(' -', x)
        sys.exit(1)


if __name__ == '__main__':
    main()
