# Domain Level Reports

The following reports are available at the **Domain** level:

- Activity – Displayed but not populated at the domain level
- [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/exceptions.md)
- [Membership Changes Report](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/domain-auditing.md)
- [Principal Attribute Changes Report](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/domain-auditing.md)

# Membership Changes Report

The Membership Changes report at the domain level provides list of groups that had membership
changes on the selected domain during the specified date range.

![Membership Changes report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/activedirectory/domain/membershipchanges.webp)

This table is blank if no changes occurred during the specified date range. This report is comprised
of the following columns:

- Scan Time – Date and timestamp of the Access Analyzer scan that identified the change
- Group Name – Name of the group
- Group Type – Type and scope of the group object: Domain Local/Global/Universal,
  Distribution/Security
- Description – Description of this group as read from Active Directory
- Group DN – Distinguished name for the group account
- Change Type – Type of change that occurred: Added or Removed
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted

# Principal Attribute Changes Report

The Principal Attribute Changes report at the domain level provides change event information by
trustee on the selected domain during the specified date range.

![Principal Attribute Changes report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/activedirectory/domain/principalattributechanges.webp)

This table is blank if no changes occurred during the specified date range. This report is comprised
of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongss
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Scan Time – Date and timestamp of the Access Analyzer scan that identified the change
- Attribute – Attribute changed for the trustee
- Old – Original attribute value
- New – New attribute value

# Domain Object Level Reports

The following reports are displayed at the Domain Object level:

- [Access Report](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/domain-auditing.md)
- Activity – Displayed but not populated at the Domain Object level
- [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/domain-auditing.md)
- Sensitive Content – Displayed but not populated at the Domain Object level

# Access Report

The Access report at the domain object level provides information on the level of access trustees
have at the domain object level. This report includes a Permission Source table.

![Access report at the domain object level](/img/product_docs/accessanalyzer/12.0/admin/settings/access/access.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Direct – True or False if the permission is directly assigned
- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources
- Changed – True or False if the trustee has changes modeled that would impact access to the
  selected resource

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource.

- Source Path – Location for which the audited object was granted rights to the selected resource,
  which can be represented two ways:

  - Directly Applied – Rights granted directly to the audited object
  - Access through another trustee, path starts with trustee assigned the direct rights and shows
    all nested groups leading to the audited object

- Source Type – Source of the permission (for example, Share, Folder, Site Permission, Web
  Application Policy, and so on)
- Source Name – Name of the resource where the permission is assigned
- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

# Permissions Report

The Permissions report at the domain object level provides the trustees that have rights on the
selected Active Directory object.

![Permissions report at the domain object level](/img/product_docs/threatprevention/threatprevention/admin/policies/permissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Source – Direct or Inherited permission type
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the permissions granted to the selected
object:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

# Domain Summary Report

The Domain Summary report at the **Active Directory** node provides a top-level view of domains that
have been scanned.

![Domain Summary report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/activedirectory/domainsummary.webp)

This report is comprised of the following columns:

- Domain Name – Name of the domain
- NetBIOS – NetBIOS name for the domain
- Users – Count of users in the domain
- Groups – Count of groups in the domain
- Computers – Count of computers in the domain
- Last Scanned – Date and timestamp of the last Access Analyzer scan
