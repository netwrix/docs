---
title: "SharePoint Agent-Less Permissions"
description: "SharePoint Agent-Less Permissions"
sidebar_position: 10
---

# SharePoint Agent-Less Permissions

When SharePoint agent-less scans are run, it means all of the data collection processing is
conducted by the Access Analyzer Console server across the network.

The SharePoint agent-less scan architecture requires permissions to be configured on the specified
server:

- SharePoint Application Server permissions:

    - Membership in the local Backup Operators group

        - This is required so Access Analyzer can read remote registry to identify if the server is
          part of the farm, what the server’s role is, and to identify the location of the
          SharePoint configuration database.

    - Membership in the local WSS_WPG group

        - This is required to gain read access to system resources used by Microsoft SharePoint
          Foundation.

For complete configuration steps for farm, web application, database, and MySites permissions, see
[SharePoint required permissions for Access Analyzer](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint/sharepoint/access.md).
