---
title: "Compromised Rule"
description: "Compromised Rule"
sidebar_position: 60
---

# Compromised Rule

The Compromised rule rejects passwords from prior breaches. These passwords should not be used as
they are vulnerable to credential stuffing attacks.

![ppe_rules_6_337x406](/images/passwordpolicyenforcer/10.2/administration/ppe_rules_6_337x406.webp)

Select the **Enabled** check box to enable the Compromised rule.

Click the **...** (ellipsis) button beside each text box to select a hash file. You can also type a
path into the text box. The path can contain environment variables like

:::warning
%SystemRoot%. hash files should only be read from a local disk. Using shared hash files
degrades performance, and could jeopardize security.
:::


Click the **Messages** tab to customize the Password Policy Client rule inserts.

For the information about Have I Been Pwnd (HIBP) database usage, please see the
[HIBP Updater](/docs/passwordpolicyenforcer/10.2/administration/hibpupdater.md)
topic.
