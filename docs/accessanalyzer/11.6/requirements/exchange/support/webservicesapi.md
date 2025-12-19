---
title: "Exchange Web Services API Permissions"
description: "Exchange Web Services API Permissions"
sidebar_position: 40
---

# Exchange Web Services API Permissions

The EWSMailbox and EWSPublicFolder data collectors utilizes Exchange Web Services API to access and
communicate with Exchange. These data collectors collect statistical, content, permission, and
sensitive data information from mailboxes and public folders.

**Exchange Online Hybrid Environment Requirement**

In addition to the permissions required by the EWSMailbox and EWSPublicFolder data collectors, the
Connection Profile assigned to the 7. Sensitive Data Job Group requires the following permissions
(based on default settings):

- Customized Administrator > Exchange Administrator Role
