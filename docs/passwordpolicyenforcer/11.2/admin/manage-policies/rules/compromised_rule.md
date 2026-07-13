---
title: "Compromised"
description: "Configure the Compromised rule to reject passwords from known data breaches."
sidebar_position: 50
---

# Compromised rule

The Compromised rule rejects passwords found in data breaches. Blocking these passwords reduces the risk of a successful credential stuffing attack.

![Compromised password rule](/images/passwordpolicyenforcer/11.2/administration/compromised.webp)

Select the **Compromised** checkbox to enable the Compromised rule.

Password Policy Enforcer (PPE) uses data from the [Have I Been Pwned](https://haveibeenpwned.com/) service to identify compromised passwords. PPE creates a local copy of the database for better performance, and to ensure that no password information leaves your network. Click **HIBP Downloader** to open the database downloader. The [HIBP Updater](../../hibpupdater.md) page explains how to configure and use the database downloader. You must download the database before you can use the Compromised rule.

After you download the database, click **Browse** to select the database folder. You can also enter a path into the text box. Paths can include environment variables. You can configure the Compromised rule to use up to three databases if you have other compatible data sources.
