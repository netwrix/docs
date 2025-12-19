---
title: "SharePoint Content Type Hubs"
description: "SharePoint Content Type Hubs"
sidebar_position: 10
---

# SharePoint Content Type Hubs

SharePoint 2010+ supports Enterprise Content Types allowing Content Types to be defined on a
Publishing SharePoint site with one or more secondary sites consuming the Enterprise Content Types.

Once Netwrix Data Classification for SharePoint is installed on the SharePoint Farm, it is possible
to define SharePoint workflow actions at the SharePoint Content Type Hub site. Any actions of type
Content Type Update may be run on the site collection itself however they may also be run on
consuming SharePoint Site collections.

![content_type_hubs_thumb_0_0](/images/dataclassification/5.6.2/workflows/content_type_hubs_thumb_0_0.webp)

To configure a Workflow to run against all sites that consume a Content Type Hub please follow the
below steps:

1. Navigate to Workflows → Configs → Content Type Hubs
2. Select Add
3. Enter the connection details for the Content Type Hub Site Collection
4. Once added, navigate back to the main Workflows screen, and select the newly added group from the
   Workflow Groups grid
5. Finally, select Add and create the Workflow as normal.
