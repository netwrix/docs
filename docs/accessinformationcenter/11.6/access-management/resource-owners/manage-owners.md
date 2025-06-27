# Add New Resource Wizard

The Add new resource wizard is opened with the **Add** button in the Resource Owners interface.

![Add new resource wizard page showing 1. Select Resources page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectresource.webp)

It contains five pages:

- 1. Select Resource — Select the resource or group to be managed by the owner
- 2. Select Owners — Select Owners from Active Directory
- 3. Description — Optionally enter a note describing the resource
- 4. Access Groups — Optionally enable Access Requests and Owner Ad Hoc changes for this resource.
     When File System or SharePoint resources will be managed through the AIC, it is necessary to
     configure access groups for those resources in the target environment. An access group
     provides one of the following access levels to a specific resource: Read, Modify, or Full
     Control.

  **NOTE:** This feature requires the Access Information Center is to be configured to commit
  changes in Active Directory. Additionally, resource based groups must be set up on the resource.
  See the
  [Commit Active Directory Changes](/docs/accessinformationcenter/11.6/resource-audit/change-modeling/commit-changes.md) topic
  for additional information.

- 5. Summary — This page provides a preview of the settings selected within the wizard

See the [Add a Resource](#add-a-resource) topic for additional information.

## Add a Resource

Follow the steps to add resources one at a time and assign owners.

**Step 1 –** In the Resource Owners interface, click **Add**. The Add new resource wizard opens.

![Add new resource wizard page showing 1. Select Resources page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectresource.webp)

**Step 2 –** On the Select Resource page, select the resource to be managed. Then click **Next**.

- Search field – Begin typing the name of the resource:
  - For File System, enter a share UNC path starting with “\\”
    - For example, \\example\share
  - For SharePoint, enter the site URL starting with “http://”
    - For example, http://farm.corp.com
  - For groups, enter the group name in NTAccount format [DOMAIN\GROUP]
    - For example, acme\app.group
- Browse option – Navigate through the resource tree to select the desired File System or SharePoint
  resource.

![Add new resources wizard showing 2. Select Owners page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectowners.webp)

**Step 3 –** On the Select Owners page, click **Add** to browse for an owner. Repeat this Step to
add multiple owners. See the
[Add Owner Window](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
topic for additional information.

![Add new resources wizard with the 2. Select Owners page showing multiple owners selected](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectownerswithowners.webp)

**Step 4 –** When only one owner is assigned, the owner will be the Primary by default. When
multiple owners are assigned, the first owner in the list is the Primary owner. Use the arrow
buttons to order the owners. Use the **Add** and **Remove** buttons to modify the list of owners.
When the owners list is complete, click **Next**.The table has several columns with information on
the owners:

- Owner Name — Name of the assigned owner
- Owner Account — sAMAccountName associated with the owner, as read from Active Directory
- Owner Title — Trustee's title as read from Active Directory
- Owner Mail — Trustee's email address as read from Active Directory
- Owner Department — Trustee's department as read from Active Directory
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource.
  Tool-tips display when hovering over the icons indicating whether the resource ownership has been
  confirmed, declined, pending response, or that a confirmation has not been requested.

![Add new resource wizard showing 3. Description page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/action/servicenow/description.webp)

**Step 5 –** On the Description page, optionally add a description for the resource in the textbox.
Then click **Next**.

![Add new resource wizard showing 4. Access Groups page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/wizard/accessgroups.webp)

**Step 6 –** On the Access Groups page, optionally enable Access Requests and Owner Ad Hoc changes
for this resource:

- Allow access requests — Check this option to enable your domain users to make self-service access
  requests for this resource
- Allow owners to change access — Check this option to enable the owner to make ad hoc access
  changes for this resource

![Add new resource wizard showing 4. Access Groups page with groups configured](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/wizard/accessgroupsconfigured.webp)

**Step 7 –** When File System or SharePoint resources will be managed through the AIC, it is
necessary to configure access groups for those resources in the target environment. An access group
provides one of the following access levels to a specific resource: Read, Modify, or Full Control.
If either option in Step 6 is selected for this resource, it is necessary to set a group for at
least one access level. Select the desired access level and click **Change**. The Select Group
Window opens. Select the desired group and click **OK**. The Select Group window closes and the
group appears in the table. Repeat this step for each access level desired. See the
[Select Group Window](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
topic for additional information.

**Step 8 –** Click **Next** to continue.

![Add new resource wizard showing 5. Summary page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

**Step 9 –** On the Summary page, review the settings and click **Next**. The Access Information
Center begins to process the ownership configuration.

![Add new resource wizard completed page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 10 –** The action status displays on the page. When the task has completed (100%), click
**Close**. The Add new resource wizard closes.

This resource is now being managed through the Access Information Center.

# Confirm Ownership Wizard

The Confirm Ownership wizard is opened with the **Request Confirmation** button in the Resource
Owners interface. It can be opened for one or multiple resources.

![Confirm Ownership wizard showing 1.Select Owners page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectowners.webp)

It contains one page:

- 1. Select Owners — Lists the current owner(s) for each selected resource and confirmation status

See the [Request Ownership Confirmation](#request-ownership-confirmation) topic for additional
information.

## Request Ownership Confirmation

Follow the steps to request ownership confirmation.

**Step 1 –** In the Resource Owners interface, select the desired resource or resources and click
Request Confirmation. The Confirm Ownership wizard opens.

![Confirm Ownership wizard showing 1.Select Owners page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectowners.webp)

**Step 2 –** On the Select Owners page, you can optionally remove owners you do not want or need
ownership confirmation from. Select those owners and click **Remove**. Those owners will not receive
the confirmation email. Once the list is set as desired, click **Finish**. The Access Information
Center begins to send the confirmation email. The table provides the following information:

- Resource Name — The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Owner Name — Name of the assigned owner
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource.
  Tool-tips display when hovering over the icons indicating whether the resource ownership has been
  confirmed, declined, pending response, or that a confirmation has not been requested.

![Owners have been notified message](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 3 –** The action status displays on the page. When the owner confirmation notification has
completed (100%), click Close. The Confirm Ownership wizard closes.

The selected owners receive an email from the Access Information Center asking if they are the owner
of the assigned resource. See the
[Owner Confirmation Request Email](/docs/accessinformationcenter/11.6/access-management/resource-owners/email-notifications.md)
topic for additional information.

# Import Owners Wizard

The Import Owners wizard is opened with the **Import** button in the Resource Owners interface.

![Import Owners wizard showing 1. Select File page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/wizard/selectfile.webp)

It contains two pages:

- 1. Select File — Select the CSV file with the resource or group to be managed through the Access
     Information Center and the assigned owner. A preview of the selected file displays on this
     page.
- 2. Options — Provides the option for marking all imported resources as having confirmed
     ownership. If the CSV file only contains Groups, you can additionally select to enable Access
     Requests and Owner Ad Hoc changes for them.

The CSV file should list one resource per row using the following format:

[ResourcePath],[Owner1];[Owner2];[Owner3],[Description]

![Example CSV File showing file system, SharePoint, and group resource formats](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/wizard/csvfileformat.webp)

- Resource Formats:

  - File System Resources – Resource path should be the UNC path to the share or folder.

    \\ExampleServer\ExampleShare,ExampleDomain\ExampleOwner

  - SharePoint Resources – Resource path should be the URL to the site resource.

    http://ExampleFarm/ExampleSiteCollection/ExampleSite,ExampleDomain\ExampleOwner

  - Groups – Resource path should be the NTAccount [DOMAIN\NAME] for the group or distribution
    list

    ExampleDomain\ExampleGroup,ExampleDomain\ExampleOwner

- Multiple owners can be added, separated by a semicolon (;)

  ExampleDomain\ExampleGroup,ExampleDomain\ExampleOwner1;ExampleDomain\ExampleOwner2

- _(Optional)_ A description for the resource can be added after the last owner

  ExampleDomain\ExampleGroup,ExampleDomain\ExampleOwner1;ExampleDomain\ExampleOwner2,Security
  group for access to the Example share

_Remember,_ if the CSV file contains resources other than just Groups, this method only imports
resources with owners. It will be necessary to update each resource to enable Access Requests and
Owner Ad Hoc changes. See the
[Update Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
topic for additional information.

See the [Import Owners](#import-owners) topic for additional information.

## Import Owners

Follow the steps to import a list of multiple resources with assign owners into the Owners
interface.

**Step 1 –** In the Resource Owners interface, click **Import**. The Import Owners wizard opens.

![Import Owners wizard showing 1. Select File page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/wizard/selectfile.webp)

**Step 2 –** On the Select Files page, click **Add**.Navigate to the CSV file to be imported and
click **Open**.

![Import Owners wizard with the 1. Select File page showing resources with assigned owners to be imported](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/wizard/selectfilepreview.webp)

**Step 3 –** A preview of the resources and owners appears in the table. The Status column indicates
whether or not there is a problem (invalid resource or owner). Ensure all resources in the table
have a green tick icon in the Status column, and click **Next** to continue with the import.

**NOTE:** If a problem is indicated, additional information is displayed by hovering over the red
exclamation icon. You can not continue with the import if any row contains an invalid resource or
owner. To remove a resource from the table, select the row and click **Remove**. The row is removed
from the table.

![Import Owners wizard 2. Options page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/application/options.webp)

**Step 4 –** On the Options page, configure the available options as required.

- Confirm ownership — This will automatically confirm ownership for all of the resources upon
  import, and is selected by default. If ownership confirmation is not required for these resources,
  deselect the Confirm ownership for imported resources checkbox.
- If the CSV file only contains Groups and no other resource types, the following additional options
  are available:

  - Allow access requests — Enable/Disable your domain users to make self-service access requests
    for this Group
  - Allow owners to change access — Enable/Disable the owner to make Ad Hoc access changes for
    this Group

**Step 5 –** Click **Next**. The Access Information Center will begin to process the import.

![Import Owners wizard completed import page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 6 –** The action status displays on the page. When the update has completed (100%), click
**Close**. The Import Owners wizard closes.

These resources are now being manages by the Access Information Center. See the
[Update Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
topic for information on making alterations to the imported resources.

# Update Resource Wizard

The Update resource wizard is opened with the **Update** button in the Resource Owners interface.

![Update Resource wizard showing 1. Select Owners page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectowners.webp)

It contains four pages:

- 1. Select Owners — Lists the current owner(s). Modify by adding new owners, removing owners, or
     changing owner priority order (primary, secondary, etc.)
- 2. Description — Enter or modify a note describing the resource
- 3. Access Groups — Enable or disable Access Requests and Owner Ad Hoc changes for this resource.
     When File System or SharePoint resources will be managed through the AIC, it is necessary to
     configure access groups for those resources in the target environment. An access group
     provides one of the following access levels to a specific resource: Read, Modify, or Full
     Control.

  **NOTE:** This feature requires the Access Information Center is to be configured to commit
  changes in Active Directory. Additionally, resource based groups must be set up on the resource.
  See the
  [Commit Active Directory Changes](/docs/accessinformationcenter/11.6/resource-audit/change-modeling/commit-changes.md) topic
  for additional information.

- 4. Summary — Provides a preview of the settings selected within the wizard

See the [Update a Resource](#update-a-resource) topic for additional information.

## Update a Resource

Follow the steps to update ownership configuration for a resource.

**Step 1 –** In the Resource Owners interface, select the desired resource and click **Update**. The
Update resource wizard opens.

![Update Resource wizard showing 1. Select Owners page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectowners.webp)

**Step 2 –** The Select Owners page lists the currently assigned owner(s). Modify as desired and
click **Next** to continue.

- Add new owners — Click **Add** to browse for a new owner. See the
  [Add Owner Window](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
  topic for additional information.
- Remove an owner — Select an owner and click **Remove**
- Change owner priority — Select an owner and use the arrow buttons to change the order

_Remember,_ the first owner in the list is the primary owner. The table has several columns with
information on the owners:

- Owner Name — Name of the assigned owner
- Owner Account — sAMAccountName associated with the owner, as read from Active Directory
- Owner Title — Trustee's title as read from Active Directory
- Owner Mail — Trustee's email address as read from Active Directory
- Owner Department — Trustee's department as read from Active Directory
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource.
  Tool-tips display when hovering over the icons indicating whether the resource ownership has been
  confirmed, declined, pending response, or that a confirmation has not been requested.

![Update resource wizard showing 2. Description page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/action/servicenow/description.webp)

**Step 3 –** The Description page displays any description that has been provided by either the
Ownership Administrator or the assigned owner(s) for the resource. Modify as desired by typing in
the textbox. Then click **Next** to continue.

![Update resource wizard showing 3. Access Groups page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/wizard/accessgroups.webp)

**Step 4 –** The Access Groups page indicates whether or not the resource is available for Access
Requests or Owner Ad Hoc changes. Modify as desired and click **Next** to continue.

- Allow access requests — Enable/Disable your domain users to make self-service access requests for
  this resource
- Allow owners to change access — Enable/Disable the owner to make ad hoc access changes for this
  resource

**NOTE:** File System and SharePoint resources must have resource based groups configured for each
level of access: Read, Modify, and Full Control. If either option is selected for this resource, it
is necessary to set a group for at least one access level. Select the desired access level and click
**Change**. The Select Group Window opens. Select the desired group and click **OK**. The Select
Group window closes and the group appears in the table. Repeat this step for each access level
desired. See the
[Select Group Window](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
topic for additional information.

![Update resource wizard showing 4. Summary page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

**Step 5 –** On the Summary page, review the settings and click **Next**. The Access Information
Center begins to process the ownership configuration.

![Update resource wizard completed page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 6 –** The action status displays on the page. When the update has completed (100%), click
**Close**. The Update resource wizard closes.

This updates to ownership configuration have been processed.

# Add Owner Window

The Add Owner window opens from either the
[Add New Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
or the
[Update Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md).
Choose between:

- [Select a Probable Owner](#select-a-probable-owner) — Select from a calculated list of probable
  owners
- [Search for Owner](#search-for-owner) — Browsing Active Directory for a user account

## Select a Probable Owner

![Add Owner window showing Probable Owner option](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/window/addownerprobable.webp)

Probable owners are calculated from the available data:

- For File System and SharePoint resources

  - Common Managers – Calculated by looking at the users who have created content within the
    resource and their manager as defined in Active Directory
  - Content Owners – Calculated by looking at the users who have created content within the
    resource
  - Active Users – Calculated by looking at the users who have performed activity within the
    resource as identified by Enterprise Auditor activity audits

- For groups

  - Administrators – Calculated by looking at the Managed By property for the selected group
  - Common Managers – Calculated by looking at the Manager property for the users within the
    selected group

**NOTE:** The Probable Owner categories may or may not be populated with options. For File System or
SharePoint resources, it depends on content and activity data which has been collected by Enterprise
Auditor. If no content or activity information exists, no owner will be recommended. For Active
Directory resources, it depends on the Managed By property for groups and the Manager property for
users to be set within Active Directory. If these properties are blank, no owner will be
recommended.

Select the desired owner from the list and click **OK**. The Add Owner window closes and the
selected user appears in the Owner list.

## Search for Owner

![Add Owner window showing Search option](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/window/addownersearch.webp)

Enter a name in the search field to find and select users from Active Directory, which populates in
a drop-down menu as you type. If multiple domains are known to the application, ensure the correct
domain is selected from the drop-down menu. Click **OK** and the Add Owner window closes. The
selected user appears in the Owner list.

# Confirm Removal Window

The process of removing a resource from the Resource Owners interface disassociates the owner(s)
from the resource, it does not remove the resource from the database or from the available reports.
Any history of actions performed by the owner for that resource will be maintained, but pending
actions will be canceled. Pending actions may include outstanding reviews or access requests.

Follow the steps to remove a resource from being managed through the application.

**Step 1 –** In the Resource Owners interface, select the resource and click Remove. The Confirm
Removal window opens.

![Confirm Removal window asking are you sure you wish to remove](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/collectionmanager/confirmremoval.webp)

**Step 2 –** Click Yes to complete the removal process or **No** to cancel it.

The resource no longer appears in the Resource Owners interface.

# Select Group Window

The Select Group window opens from either the
[Add New Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
or the
[Update Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md).

![Select Group window](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/window/selectgroup.webp)

The window displays groups with the selected access level for this resource. If there are no groups
displayed, then it will be necessary to create a group and grant it this level of access to the
selected resource. Do not forget to run the Enterprise Auditor collection jobs to introduce the new
group to the Access Information Center. Select the desired group and click **OK**. The Select Group
window closes and the group appears in the table for the wizard.

# Ownership Confirmation

The reason for assigning owners to resources is to enable business data owners to manage access to
those resources without requiring IT Administrative privileges. In order for this to work, the
assigned owner needs to claim that ownership responsibility. Resources that do not have confirmed
owners may fall through the cracks.

**NOTE:** This requires the Notification settings to be configured for the Access Information
Center. See the
[Notifications Page](/docs/accessinformationcenter/11.6/administration/configuration/notifications.md)
topic for additional information.

![Status Column in Resource Owners interface](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/ownershipconfirmation.webp)

The table in the Resource Owners interface includes a Status column. The following icons appear in
this column to indicate confirmation status:

| Icon                                                                                                                          | Meaning   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Yellow circle with white question mark](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/statusnostatus.webp) | No Status | Indicates ownership confirmation has not been requested, and there is no ownership status at this time The exception is if ownership was automatically confirmed with the [Import Owners Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md).                                                                                                                                                                                                                                |
| ![Blue circle with white clock face](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/statuswaiting.webp)       | Waiting   | Indicates a request for confirmation has been sent, and you are waiting for a response from the assigned owner. Hover over the icon to view the date timestamp of the request.                                                                                                                                                                                                                                                                                                                                          |
| ![Green circle with white checkmark](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/statusconfirmed.webp)     | Confirmed | Indicates the assigned owner confirmed ownership of the resource. Hover over the icon to view the date timestamp of the confirmation.                                                                                                                                                                                                                                                                                                                                                                                   |
| ![Red circle with white X](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/statusdeclined.webp)                | Declined  | Indicates the assigned owner declined ownership of the resource. These individuals would have been asked to suggest an alternative owner. Check the Notes for the resource to view this information. Hover over the icon to view the date timestamp of the decline. _Remember,_ a resource with declined ownership needs to be updated to assign a new owner. See the [Update Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md) topic for additional information. |

If multiple owners have been assigned, there is a choice for which assigned owner(s) should receive
the confirmation. If multiple owners were sent the request, the column remains as a waiting symbol
until the assigned Primary owner replies.

See the
[Confirm Ownership Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
topic for additional information.
