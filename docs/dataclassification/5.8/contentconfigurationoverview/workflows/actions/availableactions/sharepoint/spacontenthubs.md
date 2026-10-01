---
title: "SharePoint Content Type Hubs"
description: "SharePoint Content Type Hubs"
sidebar_position: 20
---

# SharePoint Content Type Hubs

SharePoint 2010+ supports Enterprise Content Types, which let you define Content Types on a
Publishing SharePoint site with one or more secondary sites consuming the Enterprise Content Types.

After you install Netwrix Data Classification for SharePoint on the SharePoint Farm, you can
define SharePoint workflow actions at the SharePoint Content Type Hub site. You can run any actions
of type Content Type Update on the site collection itself, and you can also run them on
consuming SharePoint Site collections.

![content_type_hubs_thumb_0_0](/images/dataclassification/5.8/admin/workflows/content_type_hubs_thumb_0_0.webp)

To configure a Workflow to run against all sites that consume a Content Type Hub, follow these
steps:

1. Navigate to Workflows → Configs → Content Type Hubs
2. Select Add
3. Enter the connection details for the Content Type Hub Site Collection
4. Once added, navigate back to the main Workflows screen, and select the newly added group from the
   Workflow Groups grid
5. Finally, select Add and create the Workflow as normal.
