---
title: "GroupID Portal Server Settings"
description: "See which server settings you can manage for a GroupID portal, including its name, identity stores, advanced options, and deployment instances."
keywords:
  - portal server settings
  - application name
  - portal deployment instances
  - advanced settings
  - Admin Center
  - native IIS and remote IIS
sidebar_position: 30
---

# GroupID Portal Server Settings

A GroupID portal is deployed as a web application on a web server (native IIS or remote
IIS). You can manage the following server-related settings for a portal:

- Change a portal’s name (the application name given to the portal).
- Update support information for the portal, that is, the contact email address and the portal’s help
  URL.
- Specify search-related, group-related, and other advanced settings for a portal.
- Associate identity stores with a portal.

You can also view the deployment details for all instances of a portal and do the following:

- Start or stop an instance.
- Configure Windows logging and file logging for an instance.
- Delete an instance.
- Move a portal instance under a different site in IIS.

:::note
On changing some of these settings, the portal’s session ends and all connected users are signed
out. When accessed again, the portal runs under the new configurations.
:::

**See Also**

- [Create a GroupID Portal](/docs/directorymanager/11.0/signin/applications/portal/create.md)
- [Manage General Portal Server Settings in GroupID](/docs/directorymanager/11.0/signin/applications/portal/server/general.md)
- [Manage Native IIS Deployment Settings in GroupID](/docs/directorymanager/11.0/signin/applications/portal/server/nativeiis.md)
- [Manage Remote IIS Deployment Settings in GroupID](/docs/directorymanager/11.0/signin/applications/portal/server/remoteiis.md)
- [Manage Portal Log Settings in GroupID](/docs/directorymanager/11.0/signin/applications/portal/server/log.md)
- [Configure Portal Support Email and Help URL](/docs/directorymanager/11.0/signin/applications/portal/server/support.md)
- [Manage Advanced Portal Settings in GroupID](/docs/directorymanager/11.0/signin/applications/portal/server/advanced.md)
