---
title: "SharePoint Agent-Less Permissions"
description: "SharePoint Agent-Less Permissions"
sidebar_position: 10
---

# SharePoint Agent-Less Permissions

When SharePoint agent-less scans are run, it means all of the data collection processing is
conducted by the Enterprise Auditor Console server across the network.

The SharePoint agent-less scan architecture requires permissions to be configured on the specified
server:

- SharePoint Application Server permissions:

    - Membership in the local Backup Operators group

        - This is required so Enterprise Auditor can read remote registry to identify if the server
          is part of the farm, what the server’s role is, and to identify the location of the
          SharePoint configuration database.

    - Membership in the local WSS_WPG group

        - This is required to gain read access to system resources used by Microsoft SharePoint
          Foundation.

- SharePoint Farm permissions:

    - Membership in the Farm Read group at the farm level

        - This is required so the Enterprise Auditor auditing account can make calls against the
          SharePoint web services to remotely gather information around permissions, site hierarchy,
          content and more.
        - If the group does not exist already, then you will need to create a new group at that
          level and grant it ‘Read’ access. Specifically, it is a group that exists within Central
          Administration at the farm administrator level. This group only requires ‘Read’ access and
          is not giving farm admin access. Once the group is created, add the service account that
          Enterprise Auditor will be leveraging to scan SharePoint.

- Web Application permissions:

    - Custom Role with Site Collection Auditor at the web application level with the Open Items
      permission

        - This is needed for Enterprise Auditor to execute web service calls against Central
          Administration.

- SharePoint Database Server permissions:

    - SPDataAccess on the on the SharePoint Content database and all Configuration databases

        - This permission should be applied on the desired Configuration database and all Content
          databases for the SharePoint version.
        - This version-specific permission is required for Enterprise Auditor to execute read
          operations directly against the SharePoint databases, gather information from the
          configuration database regarding the names and locations of the web applications and
          content databases, and give read access around sites, roles, and users.

- MySites permissions are based on the SharePointAccess Data Collector configuration option:

    - Forcing the service account to become a temporary admin of the personal sites either as the
      service account or as a member of the Company Administrators group requires SharePoint Farm
      Administrator role or Site Collection Auditor at the web application housing MySites.
    - The skipping inaccessible personal sites option will only scan sites where the service account
      has administrative access. It requires the service account to be provisioned prior to the scan
      to scan OneDrives / personal sites.
