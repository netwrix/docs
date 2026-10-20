---
title: "Policy Templates: Installed Software and Updates"
description: "Policy Templates: Installed Software and Updates"
sidebar_position: 60
---

# Policy Templates: Installed Software and Updates

:::note
This template applies to Windows OS only.
:::


Software installations and updates are critical dimensions of a host's configuration, so tracking
and recording them is essential from compliance, security, and configuration management
perspectives.

To enable the Tracker, check the **Track Installs and Windows Updates** box and save the settings
to the device. Change Tracker detects changes on a scheduled, polled basis; the **Repeat** setting
governs the frequency. A **No Repeat** setting ensures that a poll only occurs on a server reboot,
which may be appropriate for a host with tightly governed resources.

![PolicyTemplateInstalledSoftware](/images/changetracker/admin/settings/policytemplates/policytemplateinstalledsoftware.webp)
