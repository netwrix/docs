---
title: "Resource Audit Interface"
description: "Resource Audit Interface"
sidebar_position: 20
---

# Resource Audit Interface

The Resource Audit interface is where resource reports are located. Summary and detail reports are
available for permissions, effective access, activity, and sensitive data. Open the Resource Audit
interface by clicking **Resource Audit** on the home page of the Access Information Center or using
the search features to open a filtered view for a resource.

Available reports vary based on the type of resource and the level within the resource. See the
following topics for specific report details:

- [File System Reports](/docs/accessinformationcenter/11.6/resourceaudit/filesystem/overview.md)
- [SharePoint Reports](/docs/accessinformationcenter/11.6/resourceaudit/sharepoint/overview.md)
- [Active Directory Reports](/docs/accessinformationcenter/11.6/resourceaudit/activedirectory/overview.md)
- [Amazon (AWS) Reports](/docs/accessinformationcenter/11.6/resourceaudit/aws/overview.md)
- [Dropbox Reports](/docs/accessinformationcenter/11.6/resourceaudit/dropbox/overview.md)
- [Exchange Reports](/docs/accessinformationcenter/11.6/resourceaudit/exchange/overview.md)
- [MongoDB Reports](/docs/accessinformationcenter/11.6/resourceaudit/mongodb/overview.md)
- [MySQL Reports](/docs/accessinformationcenter/11.6/resourceaudit/mysql/overview.md)
- [Oracle Reports](/docs/accessinformationcenter/11.6/resourceaudit/oracle/overview.md)
- [PostgreSQL Reports](/docs/accessinformationcenter/11.6/resourceaudit/postgresql/overview.md)
- [SQL Server Reports](/docs/accessinformationcenter/11.6/resourceaudit/sql/overview.md)
- [Flexible Imports Feature](/docs/accessinformationcenter/11.6/resourceaudit/flexibleimports/overview.md)

## Resources Pane

The Resources pane, which is unique to the Resource Audit interface, displays a navigation view of
available resources. Only those resource environments that have been scanned by Enterprise Auditor
or introduced to the Access Information Center with Flexible Imports are available. Explore the
desired resource by expanding the levels.

![Resources pane](/images/accessinformationcenter/11.6/resourceaudit/navigate/resourcespane.webp)

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

:::note
The Domain Group icon is used to indicate both Active Directory groups and Entra ID
groups. See the
[AIC Icons ](/docs/accessinformationcenter/11.6/resourceaudit/navigate/icons.md)topic
for additional information.

:::
