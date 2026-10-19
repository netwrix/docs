---
title: "Connection Node"
description: "Connection Node"
sidebar_position: 10
---

# Connection Node

At the job group level, the **Connection** node identifies the Connection Profile assigned for the
job group. You create all Connection Profiles at the global level (**Settings** > **Connection**).

![Job Group Connection Settings](/images/accessanalyzer/12.0/admin/jobs/group/connection.webp)

By default, Access Analyzer sets all job groups to inherit the **Use Default Profile** option from
the global level or a parent job group. See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for
additional information.

If you don't prefer the Default Setting, select one of the following custom connection settings:

- System default

    - For manual or ad hoc job execution, Access Analyzer applies the account logged into the
      Access Analyzer Console to the target hosts for authentication
    - For scheduled job execution, Access Analyzer applies the account supplied as the Schedule
      Service account at the **Settings** > **Schedule** node to the target hosts for authentication

- Select one of the following user defined profiles

    - Select a pre-configured Connection Profile from the dropdown menu

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When you enable this option, it
overrides any custom settings configured for the child objects.
