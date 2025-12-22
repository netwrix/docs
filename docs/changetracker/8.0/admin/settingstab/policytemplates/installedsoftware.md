---
title: "Policy Templates: Installed Software and Updates"
description: "Policy Templates: Installed Software and Updates"
sidebar_position: 60
---

# Policy Templates: Installed Software and Updates

:::note
This template applicable to Windows OS only.
:::


Software installations and updates are critical dimensions of a host’s configuration. It is
therefore essential that these are tracked and recorded from compliance, security, and configuration
management perspectives.

Enabling the Tracker is simple – check the **Track Installs and Windows Updates** box and then save
the settings to the device. Changes will be detected on a scheduled, polled basis, with the
frequency governed by the **Repeat** setting. A **No Repeat** setting will ensure a poll only occurs
on a server re-boot which may be appropriate for a host with tightly governed resources.

![PolicyTemplateInstalledSoftware](/images/changetracker/8.0/admin/settings/policytemplates/policytemplateinstalledsoftware.webp)
