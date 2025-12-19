---
title: "Storage Node"
description: "Storage Node"
sidebar_position: 50
---

# Storage Node

At the job group level, the Storage node identifies the Storage Profile assigned for the job group.
All Storage Profiles are created at the global level (**Settings** > **Storage**). See the
[Storage](/docs/accessanalyzer/12.0/admin/settings/storage/overview.md) topic for additional information.

![Job Group Storage Settings](/images/accessanalyzer/12.0/admin/jobs/group/storage.webp)

By default, all job groups are set to inherit the **Use Default Profile** option from the global
level or a parent job group. If it is necessary for a job group to send data to a different
database, the Storage Profile must already exist at the global level. Select the **Use This
Profile** radio button and choose the non-default Storage Profile from the drop-down menu.

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When enabled, this option overrides
any custom settings configured for the child objects.
