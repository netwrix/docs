---
description: >-
  When you add a custom logo in the Branding tab of the Netwrix Password Reset
  admin portal and the Admin and Self-Service portals are on different web
  servers, the Self-Service portal may not display the new logo. Copy the logo
  file to the Self-Service server Web_SSImages folder to resolve the issue.
keywords:
  - custom branding
  - logo
  - Self-Service portal
  - Admin portal
  - Netwrix Password Reset
  - Web_SSImages
  - logo.gif
  - two server install
products:
  - general
sidebar_label: Custom Branding in a two server install configurat
tags: [configuration-and-customization]
title: "Custom Branding in a two server install configuration"
knowledge_article_id: kA00g000000H9aRCAS
---

# Custom Branding in a two server install configuration

When you add a custom logo on the **Branding** tab in the Netwrix Password Reset admin portal, the Self-Service portal does not show this logo.

When the Self-Service portal and the Admin portal are on two different web servers, the image does not exist in the Self-Service portal's web folder.

### Resolution

1. On the computer that hosts the Self-Service portal, navigate to ` %install drive%Program Files(x86)Netwrix Password ManagerWeb_SSImages ` and copy the logo into this folder to replace the existing `logo.gif`.
2. Refresh the Self-Service portal. After refreshing the Self-Service portal, the new logo should show up.
