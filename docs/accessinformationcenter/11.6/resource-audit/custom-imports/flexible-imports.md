# Flexible Imports Feature

Flexible imports allow an Access Information Center user to view reports on permissions, activity,
and sensitive content from sources or data not reported in the Access Information Center by default.
Enterprise Auditor users can query any supported system for this type of information and import it
into Access Information Center tables to display information in the Access Information Center. With
flexible imports, the Access Information Center provides a single view of entitlements across any
set of systems and applications.

The flexible imports feature populates the following Enterprise Auditor database tables, which
enable Access Information Center to access the data for reports:

- SA_AIC_FlexibleActivityEvents table
- SA_AIC_FlexibleHosts table
- SA_AIC_FlexibleLocalGroupMembership table
- SA_AIC_FlexiblePermissions table
- SA_AIC_FlexibleResources table
- SA_AIC_FlexibleSddMatches table
- SA_AIC_FlexibleSddMatchHits table

Imported data reports are accessed through the Resource Audit interface. Explore the resources by
expanding the levels within the Resources pane and selecting the desired resource. These reports
identify the following information in the targeted environment:

- Permissions applied to a particular resource
- What trustees are doing with their access
- What potentially sensitive data exists across the targeted environment

# Activity Report

The Activity report for imported data displays activity on the resource during the selected date
range. The **Include Subfolders** option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Activity report for imported data](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/flexibleimports/activity.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
- Trustee Name – Owner of the trustee account
- Trustee Account – Account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title
- Mail – Trustee’s email account
- EmployeeId – Corporate ID for the employee
- Description – Description of the trustee object
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Resource – Type of resource
- Operation – Type of operation performed
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Database object that was acted upon
- Target Path – Query that triggered the activity event to be stored
- Process Name – Name of the process which performed the operation

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

# Permissions Report

The Permissions report for imported data shows the permissions for trustees on the resource.

![Permissions report for imported data](/img/product_docs/accessanalyzer/11.6/admin/action/mailbox/permissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title
- Mail – Trustee’s email account
- EmployeeId – Corporate ID for the employee
- Description – Description of the trustee object
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Source – Direct or Inherited permission type
- Type – Type of resource where the permission is set

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

If the selected trustee is a group, the Group Membership pane displays the Active Directory and
local group membership, including nested groups.

# Sensitive Content Report

The Sensitive Content report for imported data provides a list of paths and a hit count per table
where criteria matches were found on the selected resource. This report includes a table visible to
Access Information Center users with either Security Team Member or Administrator roles with
criteria Matches. The Matches table requires the storage of discovered sensitive data within the
Enterprise Auditor database or it will be blank. The **Include Subfolders** option is active by
default until removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Sensitive Content report for imported data](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches on the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

# Flexible Import Reports Quick Reference

The following imported data reports are available for selections within the Resources pane.

**NOTE:** Although the reports are always displayed at the nodes and levels listed, whether they are
populated is determined by what data is imported for the environment.

Environment Node Report

| Report                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/custom-imports/flexible-imports.md) | Provides a list of paths and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria Matches that is visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor database or it will be blank. |

Environment > Host Level Reports

| Report                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Report](/docs/accessinformationcenter/11.6/resource-audit/custom-imports/flexible-imports.md)          | Provides details on activity across the resource for every activity logged during the selected date range.                                                                                                                                                                                                                                                                                                     |
| [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/custom-imports/flexible-imports.md) | Provides a list of paths and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria Matches that is visible to Access Information Center users with either Security Team Member or Administrator roles . The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor database or it will be blank. |

Environment > Host > Sub-level Reports

| Report                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Report](/docs/accessinformationcenter/11.6/resource-audit/custom-imports/flexible-imports.md)          | Displays activity on the resource during the selected date range.                                                                                                                                                                                                                                                                                                                                             |
| [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/custom-imports/flexible-imports.md)       | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                               |
| [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/custom-imports/flexible-imports.md) | Provides a list of paths and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria Matches that is visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor database or it will be blank. |
