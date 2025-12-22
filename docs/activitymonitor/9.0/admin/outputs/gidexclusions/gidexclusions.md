---
title: "GID Exclusions Tab"
description: "GID Exclusions Tab"
sidebar_position: 30
---

# GID Exclusions Tab

The GID Exclusions tab on an output Properties window is where monitoring scope by group can be
modified. These settings are initially configured when the output is added.

Select an output for a Linux host on the Monitored Hosts & Services tab and click **Edit** to open the output
Properties window.

![gidexclusionstab](/images/activitymonitor/9.0/admin/outputs/gidexclusionstab.webp)

The tab contains the following settings:

- Add – Opens the Add or Edit GID window to add a group for exclusion. See the
  [Add or Edit GID Window](/docs/activitymonitor/9.0/admin/outputs/gidexclusions/addeditgid.md) topic for additional information.
- Remove – Removes the selected group from exclusion. Confirmation is not requested.

    :::warning
    If an account is removed by group, use the **Cancel** button to discard the change.
    :::


- Edit – Opens the Add or Edit GID window to edit a selected group for exclusion. See the
  [Add or Edit GID Window](/docs/activitymonitor/9.0/admin/outputs/gidexclusions/addeditgid.md) topic for additional information.

The table lists groups that are being excluded from monitoring, displayed in the GID column. By
default, no groups are being excluded.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.
