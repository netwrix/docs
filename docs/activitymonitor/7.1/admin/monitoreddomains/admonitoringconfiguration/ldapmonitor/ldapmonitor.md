---
title: "LDAP Monitor Tab"
description: "LDAP Monitor Tab"
sidebar_position: 60
---

# LDAP Monitor Tab

The LDAP Monitor tab on a domain’s Configuration window allows users to scope monitoring by adding
filters for accounts by name or type.

![Operations Tab in the LDAP Monitor Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

After checking the Enable Ldap Monitor box, the following event filters can be modified on the
sub-tabs:

- Host (From)
- LDAP
- Operations
- Servers
- Users

Each filter tab acts like an “AND” statement for the filter. Any filter tab left blank is treated
like an all for that filter set.

## Host (From)

The Hosts (from) option is where the policy can be scoped to only monitor specific hosts as
originators of an authentication event or to exclude specific hosts from being monitored for
authentication events.

![Host (From) Tab in the LDAP Monitor Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/hostfrom.webp)

Underneath each section, there are additional Host details:

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. dc01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. dc01

Double-click the text boxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the originating host
from authentication event collection.

## LDAP

The LDAP option is where query and result objects can be monitored by group type.

![LDAP Tab in the LDAP Monitor Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/ldap.webp)

The Query section is where monitoring can be scoped to those LDAP queries that contain at least one
of the user-supplied string as a substring in BaseDN or in Query field of the LDAP Search request.
For the Query value, provide the user-supplied string in the text box.

Double-click the text box beneath Value to enter the desired string. Press the Enter or Tab key to
add another text box.

Example Values:

- ‘DC=domain’
- ‘objectClass=’

The Result section is where monitoring can be scoped to those LDAP query results that contain at
least one of the user-supplied string as a substring. For the Result value, provide the
user-supplied string in the text box.

Double-click the text box beneath Value to enter the desired string. Press the Enter or Tab key to
add another text box.

Example Value:

- ‘CN=Domain Admins’

## Operations

The Operations option filters for successful events, failed events, or both.

![Operations Tab in the LDAP Monitor Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

The Monitor These Attempts section is where monitoring is set to filter for successful events,
failed events, or both:

- Success – Monitors successful events
- Failure – Monitors failed events

## Servers

The Servers option targets servers to be included or excluded when filtering for a LDAP changes.

![Servers Tab in the LDAP Monitor Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/servers.webp)

In both sections, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS
Domain name and SERVER is NetBIOS server name.

Double-click the text box beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another text box.

## Users

The Users option is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored.

![Users Tab in the LDAP Monitor Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/users.webp)

The following details appear beneath both sections:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

    - user – Indicates that selected object is user
    - group – Indicates that selected object is group
    - context – Indicates that selected object is container
    - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of 'distinguishedName' attribute syntax,
  e.g. 'CN=Users,DC=Domain,DC=com'. However, for objects with 'sidType' type, it must be in the form
  of WellKnownSidType Enum, e.g. 'AnonymousSid' or 'LocalSid'.

Double-click the text box beneath Distinguished Name to enter the desired group types to include or
exclude. Double-click the text box beneath Type to enter the desired AD object to include or
exclude. Press the Enter or Tab key to add another text box. Check the box under Subtree to include
or exclude child contexts.
