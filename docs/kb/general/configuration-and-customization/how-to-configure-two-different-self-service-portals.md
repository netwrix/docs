---
description: >-
  Shows how to create a second Self-Service portal instance by copying the
  Web_SS folder and configuring a new IIS virtual directory to support separate
  portals for different domains.
keywords:
  - Self-Service portal
  - Web_SS
  - IIS
  - virtual directory
  - PM
  - NetWrix Password Manager
  - branding settings
  - predefined domain
products:
  - general
sidebar_label: How to configure two different Self-Service portal
tags:
  - configuration-and-customization
title: "How to configure two different Self-Service portals"
knowledge_article_id: kA00g000000H9WpCAK
---

# How to configure two different Self-Service portals

How to create the second instance of Self-Service portal? I have two domains and whant to have a separate portal for each domain.

To create the second instance of Self-Service portal, do the following:

1. In the NetWrix Password Manager installation directory, create a new folder.
2. Copy the entire content of `Web_SS` folder to the new folder.
3. Run Internet Information Services (IIS) Manager.
4. Create a new virtual directory in the same site, where the **PM** virtual directory is located (by default it is `%ComputerName%/Sites/Default Web Site/PM`).
5. In the **Add Virtual Directory** dialog, populate the **Physical path** field with the new folder full name, for example `C:Program files (x86)Netwrix Password ManagerWeb_SS_2`. Click **OK**.

**NOTE**: In this case all the Branding settings  (logo, support phone/link, prdefined domaine, etc) will be copied too. However changing of these settings via the Administrative portal will only affect the original Self-Service portal.

Refer to the following KB for instructions on hiding domain list and setting predefined domain for portals: https://kb.netwrix.com/2062
