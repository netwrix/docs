---
description: >-
  Netwrix Privilege Secure DirectConnect strings in mRemoteNG can appear as
  empty due to saved RDP credentials on the same host. This article explains the
  cause and two ways to resolve the "Invalid Connection String" error.
keywords:
  - mRemoteNG
  - DirectConnect
  - Invalid Connection String
  - Remote Desktop Connection
  - RDP credentials
  - Netwrix Privilege Secure
  - Proxy Server
  - connection string error
products:
  - privilege-secure-access-management
sidebar_label: Resolving "Invalid Connection String" for DirectCo
tags: []
title: Resolving "Invalid Connection String" for DirectConnect in mRemoteNG
knowledge_article_id: kA04u0000000HdXCAU
---

# Resolving "Invalid Connection String" for DirectConnect in mRemoteNG

## Summary
In a specific scenario, valid Netwrix Privilege Secure `DirectConnect` strings used in mRemoteNG will result in an invalid connection string error, stating the connection string is empty.

![Screenshot of Netwrix Privilege Secure DirectConnect error, stating the connection string is invalid (empty).](./../0-images/ka04u000000Hca3_0EM4u000004bv9Z.png)

## Instructions
This error is caused by having credentials saved for the Netwrix Privilege Secure server (for example, the Netwrix Privilege Secure Proxy Server) in the Windows built-in RDP client, **Remote Desktop Connection**, on the same host that is running mRemoteNG.

![Screenshot of a credential saved in Remote Desktop Connection, the built-in Windows RDP client, for the Netwrix Privilege Secure Proxy Server.](./../0-images/ka04u000000Hca3_0EM4u000004bv9t.png)

To resolve the issue, you have two options:

1. Delete the credential saved in **Remote Desktop Connection**. After you delete that credential, the valid `DirectConnect` string will work as expected in mRemoteNG.
2. Fill in a password for each `DirectConnect` connection saved in mRemoteNG. This resolves the issue without deleting any credentials from **Remote Desktop Connection**.
