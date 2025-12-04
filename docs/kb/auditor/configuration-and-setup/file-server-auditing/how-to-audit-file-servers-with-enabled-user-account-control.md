---
description: >-
  Explains why Netwrix Auditor cannot configure audit settings for file server
  managed objects when User Account Control is enabled and how to resolve the
  issue.
keywords:
  - Netwrix Auditor
  - File Server
  - User Account Control
  - UAC
  - audit settings
  - System Health
  - permissions
  - BUILTINAdministrators
products:
  - auditor
sidebar_label: How to audit File Servers with enabled User Accoun
tags: []
title: "How to audit File Servers with enabled User Account Control"
knowledge_article_id: kA00g000000H9V8CAK
---

# How to audit File Servers with enabled User Account Control

Why Netwrix Auditor cannot configure audit settings for File Servers Managed Object?

---

Most likely, this is due to enabled User Account Control. ​In this case the Netwrix Auditor System Health log contains the following error:
*Cannot configure audit settings for the object `&lt;Managed Object name&gt;`: A required privilege is not held by the client.*

To resolve this issue, do the following:

1. If your target server is not in a domain, create a user that is not a member of the **BUILTINAdministrators** group. Grant all required rights and permissions to the account.
2. Enable User Account Control for local connections only and disable it for remote connections.
