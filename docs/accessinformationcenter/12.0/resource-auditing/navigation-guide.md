# Audit Interfaces

The audit interfaces are accessible from the home page of the Access Information Center.

![Home page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/auditinterface.webp)

The **Resource Audit** button opens the Resource Audit interface. The search features, which include
a search bar and a Recent Searches box, can be used to open any audit interface.

## Interface Components

All audit interfaces consist of at least three components, and the Resource Audit interface includes
a fourth pane.

![Interface components](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/interfacecomponents.webp)

The main section of the audit interface is the Results pane. On the right-side of the page are the
Reports and Group Membership panes. On the Resource Audit interface, the Resources pane is to the
left of the Results pane. Theses panes have the following functions:

- Reports Pane – Lists available reports for the resource type
- Results Pane – Displays the report content
- Group Membership Pane – Displays group membership for group trustees selected in the Results pane
- [Resources Pane](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#resources-pane) – Navigation tree for the selected resource (only
  present in the Resource Audit interface)

### Reports Pane

The Reports pane lists available reports based on the type of resource selected.

![Reports pane](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/reportspane.webp)

The report for the selected resource displays in the Results pane.

### Results Pane

The Results pane displays report data based on the selections in both the Resources pane and the
Reports pane. Reports may consist of multiple tables and graphs.

![Results pane](/img/product_docs/accessanalyzer/12.0/admin/navigate/resultspane.webp)

Tables and graphs that display at the bottom of the pane vary according to the selected report. See
the [Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information on table
options. See the individual report topics for specific information on columns and displayed data for
a report.

#### Additional Report Options

There are two checkbox options depending on the report selected:

- Include Subfolders – Select to include subfolders of the selected share or folder in the report
- Highlight Active Permissions – Select to show permissions that are in use. When a user or
  effective member of a group that has permissions to a resource also has activity on the resource,
  a yellow icon is displayed for the permission type to indicate the access level used to perform
  the activity. Therefore, access level cells not highlighted when activity is being monitored
  represent permissions that are identified as stale. See the
  [Stale Permissions](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/permissions-analysis.md#stale-permissions) topic for
  additional information.

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

![trendgraph](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/trendgraph.webp)

The vertical axis (X-axis) is the activity count value for the graph (unit is the number of events).
The horizontal axis (Y-axis) is the time line for the graph. The legend identifies what the colors
represent. Hover over any point on the graph for the details to appear. Trend graphs can be filtered
to only display specific objects from the legend. Deselect an object in the legend to remove that
object from the graph, only showing the remaining objects.

![Trend graph with Writes line removed](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/trendgraphremoved.webp)

For example, if the **Writes** operation is deselected, only the operations of **Reads**,
**Deletes**, and **Manages** remain on the line graph.

### Group Membership Pane

The Group Membership pane list members for an Active Directory or Entra ID group selected in the
Results pane. Groups can also be searched for using the textbox at the top of the pane.

![Group Membership pane](/img/product_docs/accessanalyzer/12.0/admin/action/activedirectory/operations/groupmembership.webp)

All group members are listed, including any nested group membership. The **Change Group Membership**
button displays any access changes being modeled. This is a primary component of change modeling.
See the [Change Modeling](/docs/accessinformationcenter/12.0/resource-auditing/change-modeling/index.md) topic for additional information.

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

![Interface breadcrumb](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/breadcrumb.webp)

In this example, the path is **Home > Resource Audit**. If a link from a resource report is used to
view a particular user audit, it would read **Home > Resource Audit > User Audit**. Clicking any
part of the path takes you to that interface.

# Computer Audit Interface

The Computer Audit interface is opened by searching for a particular computer. See the
[Search Features](/docs/accessinformationcenter/12.0/resource-auditing/search-and-filters.md) topic for additional information. It contains three panes in all audit
interfaces: Reports, Results, and Group Membership.

![Computer Audit Interface](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/computerauditinterface.webp)

The computer being audited is identified at the top of the interface as part of the interface
breadcrumb. See the [Computer Reports](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/computer-auditing.md) topic for additional information.

# Group Audit Interface

The Group Audit interface is opened by searching for a particular Active Directory or Entra ID
group. See the [Search Features](/docs/accessinformationcenter/12.0/resource-auditing/search-and-filters.md) topic for additional information. It contains three
panes in all audit interfaces: Reports, Results, and Group Membership.

![Group Audit Interface](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/groupauditinterface.webp)

The group being audited is identified at the top of the interface as part of the interface
breadcrumb. See the [Group Reports](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/group-auditing.md) topic for additional information.

# Resource Audit Interface

The Resource Audit interface is where resource reports are located. Summary and detail reports are
available for permissions, effective access, activity, and sensitive data. Open the Resource Audit
interface by clicking **Resource Audit** on the home page of the Access Information Center or using
the search features to open a filtered view for a resource.

Available reports vary based on the type of resource and the level within the resource. See the
following topics for specific report details:

- [File System Reports](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/index.md)
- [SharePoint Reports](/docs/accessinformationcenter/12.0/resource-auditing/cloud-storage/sharepoint-online.md)
- [Active Directory Reports](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/index.md)
- [Amazon (AWS) Reports](/docs/accessinformationcenter/12.0/resource-auditing/cloud-storage/aws-s3.md)
- [Dropbox Reports](/docs/accessinformationcenter/12.0/resource-auditing/cloud-storage/dropbox.md)
- [Exchange Reports](/docs/accessinformationcenter/12.0/resource-auditing/cloud-storage/exchange.md)
- [MongoDB Reports](/docs/accessinformationcenter/12.0/resource-auditing/databases/mongodb.md)
- [MySQL Reports](/docs/accessinformationcenter/12.0/resource-auditing/databases/mysql.md)
- [Oracle Reports](/docs/accessinformationcenter/12.0/resource-auditing/databases/oracle.md)
- [PostgreSQL Reports](/docs/accessinformationcenter/12.0/resource-auditing/databases/postgresql.md)
- [SQL Server Reports](/docs/accessinformationcenter/12.0/resource-auditing/databases/sql-server.md)
- [Flexible Imports Feature](/docs/accessinformationcenter/12.0/resource-auditing/flexible-imports/index.md)

## Resources Pane

The Resources pane, which is unique to the Resource Audit interface, displays a navigation view of
available resources. Only those resource environments that have been scanned by Access Analyzer or
introduced to the Access Information Center with Flexible Imports are available. Explore the desired
resource by expanding the levels.

![Resources pane](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/resourcespane.webp)

Select a resource in the Resources pane and a report in the Reports pane to to view the report data
in the Results pane. Hover over any icon in the Access Information Center interface to view its
description.

The Explicit Permissions, Exception, and Alert icons can shown next a resource icon in the Resources
pane.

- Explicit Permissions – Indicates permissions for the resource are different than the permission of
  its parent. This is caused by broken inheritance or adding new permissions to a resource.
- Exception – Indicates the existence of a risk to data governance security on the resource as
  identified by Access Analyzer. Exceptions include permissions granted to stale, disabled, or
  high-risk trustees (for example, Everyone, Authenticated Users, and Domain Users). The following
  Access Analyzer jobs identify the Access Information Center exceptions:

  - **.Active Directory Inventory** > **3-AD_Exceptions**
  - **.Entra ID Inventory** > **2-AAD_Exceptions**
  - **FileSystem** > **0.Collection** > **3-FSAA Exceptions**
  - **SharePoint** > **0.Collection** > **7-SPAA_Exceptions**

- Alert – Indicates the existence of an activity exception that has been identified by Access
  Analyzer as a security risk on that resource. Alerts include periods of unusually high volumes of
  activity events and users accessing shares for the first time. The following Access Analyzer job
  identifies the Access Information Center alerts:

  - **FileSystem** > **0.Collection** > **3-FSAC Exceptions**

These icons are designed to draw attention to resources where potential security concerns may exist.

**NOTE:** The Domain Group icon is used to indicate both Active Directory groups and Entra ID
groups. See the [AIC Icons ](/docs/accessinformationcenter/12.0/resource-auditing/icons-reference.md)topic for additional information.

# User Audit Interface

The User Audit interface is opened by searching for a particular Active Directory or Entra ID user.
See the [Search Features](/docs/accessinformationcenter/12.0/resource-auditing/search-and-filters.md) topic for additional information. It contains three panes in
all audit interfaces: Reports, Results, and Group Membership.

![User Audit Interface](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/userauditinterface.webp)

The user being audited is identified at the top of the interface as part of the interface
breadcrumb. See the [User Reports](/docs/accessinformationcenter/12.0/resource-auditing/active-directory/user-auditing.md) topic for additional information.

# Scope an Effective Access Report

Once an Effective Access report’s loading process has stopped, either by completing the analysis of
the targeted environments or via the **Cancel** button, follow the steps to change the scoping
settings.

![Scope button](/img/product_docs/activitymonitor/config/activedirectory/scope.webp)

**Step 1 –** Click **Scope** at the top of the report in the Results pane. The Scope Configuration
window opens.

![Scope Configuration window](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/scopeconfiguration.webp)

**Step 2 –** There are three scoping options that can be applied individually or in any combination:

- Scope report to the following hosts – Limits the report to selected hosts

  - Select the checkbox to apply this scoping option
  - Select a host from the list in the left box. It is possible to select multiple hosts with
    basic Windows commands (Ctrl-left-click).
  - Click **Add**
  - Use **Remove** to edit the selection box on the right

- Exclude resources with open access – Limits the report to exclude access granted through high-risk
  trustee (for example, Everyone, Authenticated Users, and Domain Users)

  - Select the checkbox to exclude these high-risk trustees from the effective access calculations

- Include nested resources – Broadens the report to include nested resources according to the depth
  level set

  - Select the checkbox to include nested resources
  - Move the slider to select the desired nested depth level

**Step 3 –** When the scoping options have been set as desired, click **OK**.

The Effective Access report begins the loading process based on the new scoping parameters.
