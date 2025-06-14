# Activity Report

The Activity report at the Databases node displays activity across the databases logged during the
selected date range. The **Include Subfolders** option is active by default until removed. See the
[Results Pane](../../navigate/overview.md#results-pane) topic for information on changing this
option.

![Activity report at the Databases node](../../../../../../../static/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/sql/databases/databasesactivity.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
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
- Resource – Type of resource
- Operation – Type of operation performed
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Database object that was acted upon
- Target Path – Query that triggered the activity event to be stored
- Process Name – Not populated for SQL Server reports

The table data grid functions the same way as other table grids. See the
[Data Grid Features](../../../../general/datagrid.md) topic for additional information.
