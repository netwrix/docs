---
title: "Compromised Rule"
description: "Compromised Rule"
sidebar_position: 50
---

# Compromised Rule

The Compromised rule rejects passwords from prior breaches. Don't use these passwords, as they are
vulnerable to credential stuffing attacks.

![Compromised password rule](/images/passwordpolicyenforcer/11.0/administration/compromised.webp)

Select the **Compromised** checkbox to enable the Compromised rule.

You can browse to your compromised passwords base files or enter a path into the text box. The path
can contain environment variables like

:::warning
Read hash files only from a local disk. Using shared hash files
degrades performance, and could jeopardize security.
:::


See the [HIBP Updater](/docs/passwordpolicyenforcer/11.0/installation/hibpupdater.md) topic for information about using the Have I Been
Pwnd (HIBP) database.
