---
title: "Connection Node"
description: "Connection Node"
sidebar_position: 10
---

# Connection Node

At the job group level, the **Connection** node identifies the Connection Profile assigned for the
job group. All Connection Profiles are created at the global level (**Settings** > **Connection**).

![Job Group Connection Settings](/images/accessanalyzer/11.6/admin/jobs/group/connection.webp)

By default, all job groups are set to inherit the **Use Default Profile** option from the global
level or a parent job group. See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

If the Default Setting is not preferred, select the custom type of connection settings desired
below:

- System default

    - For manual or ad hoc job execution, the account logged into the Enterprise Auditor Console is
      applied to the target hosts for authentication
    - For scheduled job execution, the account supplied as the Schedule Service account at the
      **Settings** > **Schedule** node is applied to the target hosts for authentication

- Select one of the following user defined profiles

    - Select a pre-configured Connection Profile from the drop-down menu

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When enabled, this option overrides
any custom settings configured for the child objects.
