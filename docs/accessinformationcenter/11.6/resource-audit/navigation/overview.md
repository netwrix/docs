# Audit Interfaces

The audit interfaces are accessible from the home page of the Access Information Center.

![Home page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/auditinterface.webp)

The **Resource Audit** button opens the Resource Audit interface. The search features, which include
a search bar and a Recent Searches box, can be used to open any audit interface.

## Interface Components

All audit interfaces consist of at least three components, and the Resource Audit interface includes
a fourth pane.

![Interface components](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/interfacecomponents.webp)

The main section of the audit interface is the Results pane. On the right-side of the page are the
Reports and Group Membership panes. On the Resource Audit interface, the Resources pane is to the
left of the Results pane. Theses panes have the following functions:

- [Reports Pane](#reports-pane) – Lists available reports for the resource type
- [Results Pane](#results-pane) – Displays the report content
- [Group Membership Pane](#group-membership-pane) – Displays group membership for group trustees
  selected in the Results pane
- [Resources Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#resources-pane)
  – Navigation tree for the selected resource (only present in the Resource Audit interface)

### Reports Pane

The Reports pane lists available reports based on the type of resource selected.

![Reports pane](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/reportspane.webp)

The report for the selected resource displays in the Results pane.

### Results Pane

The Results pane displays report data based on the selections in both the Resources pane and the
Reports pane. Reports may consist of multiple tables and graphs.

![Results pane](/img/product_docs/accessanalyzer/11.6/admin/navigate/resultspane.webp)

Tables and graphs that display at the bottom of the pane vary according to the selected report. See
the [Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md)
topic for additional information on table options. See the individual report topics for specific
information on columns and displayed data for a report.

#### Additional Report Options

There are two checkbox options depending on the report selected:

- Include Subfolders – Select to include subfolders of the selected share or folder in the report
- Highlight Active Permissions – Select to show permissions that are in use. When a user or
  effective member of a group that has permissions to a resource also has activity on the resource,
  a yellow icon is displayed for the permission type to indicate the access level used to perform
  the activity. Therefore, access level cells not highlighted when activity is being monitored
  represent permissions that are identified as stale. See the
  [Stale Permissions](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md#stale-permissions)
  topic for additional information.

#### Activity Report Results Pane Features

Activity reports contain the following unique features.

Date Range Filter

Activity reports display information for a selected date range. To adjust the date range, click the
**Date Range** filter to open a calendar window. The date range can be changed manually by selecting
dates in the calendars, using the arrows to change the month. Once the selection is made, click
**OK**. The report loads data for the new date range.

Trend Graphs

Trend graphs are line graphs that provide a visual representation of the activity that occurred over
the selected date range.

![trendgraph](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/trendgraph.webp)

The vertical axis (X-axis) is the activity count value for the graph (unit is the number of events).
The horizontal axis (Y-axis) is the time line for the graph. The legend identifies what the colors
represent. Hover over any point on the graph for the details to appear. Trend graphs can be filtered
to only display specific objects from the legend. Deselect an object in the legend to remove that
object from the graph, only showing the remaining objects.

![Trend graph with Writes line removed](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/trendgraphremoved.webp)

For example, if the **Writes** operation is deselected, only the operations of **Reads**,
**Deletes**, and **Manages** remain on the line graph.

### Group Membership Pane

The Group Membership pane list members for an Active Directory or Entra ID group selected in the
Results pane. Groups can also be searched for using the textbox at the top of the pane.

![Group Membership pane](/img/product_docs/accessanalyzer/11.6/admin/action/activedirectory/operations/groupmembership.webp)

All group members are listed, including any nested group membership. The **Change Group Membership**
button displays any access changes being modeled. This is a primary component of change modeling.
See the
[Change Modeling](/docs/accessinformationcenter/11.6/resource-audit/change-modeling/overview.md)
topic for additional information.

**NOTE:** If the Access Information Center has been configured to commit changes to Active
Directory, then there is a **Commit** button within the **Changes** window. Click **Commit** to
commit the modeled changes to Active Directory. Only Access Information Center Administrators can
configure the Access Information Center to commit changes to Active Directory.

While a resource owner has access to a Resource Audit interface filtered for their resource and can
model changes, only users with an Administrator or a Security Team role are able to commit modeled
access changes. However, if the ad hoc changes have been enabled on a resource, the owner can use
the **Change Access** button in the Owner portal to commit changes.

### Interface Breadcrumb

In the upper-left corner of every interface, with the exception of the home page, is the Access
Information Center Console navigation path, or breadcrumb.

![Interface breadcrumb](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/breadcrumb.webp)

In this example, the path is **Home > Resource Audit**. If a link from a resource report is used to
view a particular user audit, it would read **Home > Resource Audit > User Audit**. Clicking any
part of the path takes you to that interface.

# Resource Audit Interface

The Resource Audit interface is where resource reports are located. Summary and detail reports are
available for permissions, effective access, activity, and sensitive data. Open the Resource Audit
interface by clicking **Resource Audit** on the home page of the Access Information Center or using
the search features to open a filtered view for a resource.

Available reports vary based on the type of resource and the level within the resource. See the
following topics for specific report details:

- [File System Reports](/docs/accessinformationcenter/11.6/resource-audit/file-systems/overview.md)
- [SharePoint Reports](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/overview.md)
- [Active Directory Reports](/docs/accessinformationcenter/11.6/resource-audit/active-directory/overview.md)
- [Amazon (AWS) Reports](/docs/accessinformationcenter/11.6/resource-audit/cloud-storage/aws-s3.md)
- [Dropbox Reports](/docs/accessinformationcenter/11.6/resource-audit/cloud-storage/dropbox.md)
- [Exchange Reports](/docs/accessinformationcenter/11.6/resource-audit/messaging/exchange.md)
- [MongoDB Reports](/docs/accessinformationcenter/11.6/resource-audit/databases/mongodb.md)
- [MySQL Reports](/docs/accessinformationcenter/11.6/resource-audit/databases/mysql.md)
- [Oracle Reports](/docs/accessinformationcenter/11.6/resource-audit/databases/oracle.md)
- [PostgreSQL Reports](/docs/accessinformationcenter/11.6/resource-audit/databases/postgresql.md)
- [SQL Server Reports](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)
- [Flexible Imports Feature](/docs/accessinformationcenter/11.6/resource-audit/custom-imports/flexible-imports.md)

## Resources Pane

The Resources pane, which is unique to the Resource Audit interface, displays a navigation view of
available resources. Only those resource environments that have been scanned by Enterprise Auditor
or introduced to the Access Information Center with Flexible Imports are available. Explore the
desired resource by expanding the levels.

![Resources pane](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/resourcespane.webp)

Select a resource in the Resources pane and a report in the Reports pane to to view the report data
in the Results pane. Hover over any icon in the Access Information Center interface to view its
description.

The Explicit Permissions, Exception, and Alert icons can shown next a resource icon in the Resources
pane.

- Explicit Permissions – Indicates permissions for the resource are different than the permission of
  its parent. This is caused by broken inheritance or adding new permissions to a resource.
- Exception – Indicates the existence of a risk to data governance security on the resource as
  identified by Enterprise Auditor. Exceptions include permissions granted to stale, disabled, or
  high-risk trustees (for example, Everyone, Authenticated Users, and Domain Users). The following
  Enterprise Auditor jobs identify the Access Information Center exceptions:

  - **.Active Directory Inventory** > **3-AD_Exceptions**
  - **.Entra ID Inventory** > **2-AAD_Exceptions**
  - **FileSystem** > **0.Collection** > **3-FSAA Exceptions**
  - **SharePoint** > **0.Collection** > **7-SPAA_Exceptions**

- Alert – Indicates the existence of an activity exception that has been identified by Enterprise
  Auditor as a security risk on that resource. Alerts include periods of unusually high volumes of
  activity events and users accessing shares for the first time. The following Enterprise Auditor
  job identifies the Access Information Center alerts:

  - **FileSystem** > **0.Collection** > **3-FSAC Exceptions**

These icons are designed to draw attention to resources where potential security concerns may exist.

**NOTE:** The Domain Group icon is used to indicate both Active Directory groups and Entra ID
groups. See the
[AIC Icons ](/docs/accessinformationcenter/11.6/resource-audit/navigation/icons.md)topic
for additional information.
