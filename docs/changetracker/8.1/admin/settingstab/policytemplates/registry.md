---
title: "Policy Templates: Registry"
description: "Policy Templates: Registry"
sidebar_position: 70
---

# Policy Templates: Registry

:::note
This template applicable to Windows OS only.
:::


The Windows Registry was designed as the core repository for configuration settings. Monitoring of
Registry Keys and Values is another way to ‘fingerprint’ an application or device configuration
state.

:::note
To select a Registry Key to monitor, the best way is to use the Microsoft ‘regedit’
program (start -> run -> regedit). You can then browse all Registry Keys for the device and at any
point use a ‘right click’ to access the tools menu which includes an option to ‘copy key name’. You
can then paste the key name into the **Compliance Hub** field.
:::


Click **Add new registry key** and type or paste the Key into monitor. Once you have added a Key to
monitor, click **Insert** then **Save Settings to Device**.

![PolicyTemplateRegistry](/images/changetracker/8.1/admin/settings/policytemplates/policytemplateregistry.webp)

Like the **File Integrity** settings covered earlier, exclusion rules can be used, and Registry
Trackers can also be filtered using a **Registry Key/Value Match Rule** and a **Tracked Attributes**
dimension.

Use the **Advanced Options** to create and edit new Definitions. See
the[Registry Inclusion/Exclusion Match Rules ](/docs/changetracker/8.1/admin/matchrulesoverview/registryrules.md) topic for
additional information.

![PolicyTemplateRegistryExclude](/images/changetracker/8.1/admin/settings/policytemplates/policytemplateregistryexclude.webp)
