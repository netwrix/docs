---
title: "Server Settings"
description: "Server Settings"
sidebar_position: 30
---

# Server Settings

A GroupID portal is deployed as a web application on a web server (native IIS or remote IIS). You
can manage the following server-related settings for a portal:

- Change a portal’s name (i.e., the application name given to the portal).
- Update support information for the portal, i.e., the contact email address and the portal’s help
  URL.
- Specify search-related, group-related, and other advanced settings for a portal.
- Associate identity stores with a portal.

You can also view the deployment details for all instances of a portal and do the following:

- Start or stop an instance.
- Configure Windows logging and file logging for an instance.
- Delete an instance.
- Move a portal instance under a different site in IIS.

NOTE: On changing some of these settings, the portal’s session ends and all connected users are
logged out. When accessed again, the portal runs under the new configurations.

**See Also**

- [Create a GroupID Portal](/docs/directorymanager/11.0/signin/applications/portal/create.md)
- [Manage General Server Settings](/docs/directorymanager/11.0/signin/applications/portal/server/general.md)
- [Manage Settings for a Native IIS Deployment](/docs/directorymanager/11.0/signin/applications/portal/server/nativeiis.md)
- [Manage Settings for a Remote IIS Deployment](/docs/directorymanager/11.0/signin/applications/portal/server/remoteiis.md)
- [Manage Log Settings](/docs/directorymanager/11.0/signin/applications/portal/server/log.md)
- [Add Support for a Portal](/docs/directorymanager/11.0/signin/applications/portal/server/support.md)
- [Manage Advanced Settings](/docs/directorymanager/11.0/signin/applications/portal/server/advanced.md)
