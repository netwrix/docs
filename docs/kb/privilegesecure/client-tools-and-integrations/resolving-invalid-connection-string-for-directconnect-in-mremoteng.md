---
description: >-
  Fix the "Invalid Connection String" error for DirectConnect strings in mRemoteNG, caused by saved RDP credentials for the Proxy Server.
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
  - privilegesecure
sidebar_label: 'Resolving "Invalid Connection String" for DirectConnect in mRemoteNG'
tags:
  - kb
  - client-tools-and-integrations
title: 'Resolving "Invalid Connection String" for DirectConnect in mRemoteNG'
knowledge_article_id: kA04u0000000HdXCAU
---

# Resolving "Invalid Connection String" for DirectConnect in mRemoteNG

## Symptom

In a specific scenario, valid Netwrix Privilege Secure for Access Management `DirectConnect` strings used in mRemoteNG result in an invalid connection string error, stating the connection string is empty.

![Screenshot of Netwrix Privilege Secure DirectConnect error, stating the connection string is invalid (empty).](./../0-images/ka04u000000Hca3_0EM4u000004bv9Z.png)

## Cause

This error is caused by having credentials saved for the Privilege Secure server (for example, the Privilege Secure Proxy Server) in the Windows built-in Remote Desktop Protocol (RDP) client, **Remote Desktop Connection**, on the same host that is running mRemoteNG.

![Screenshot of a credential saved in Remote Desktop Connection, the built-in Windows RDP client, for the Netwrix Privilege Secure Proxy Server.](./../0-images/ka04u000000Hca3_0EM4u000004bv9t.png)

## Resolution

To resolve the issue, choose one of the following two options:

- Delete the credential saved in **Remote Desktop Connection**. After you delete that credential, the valid `DirectConnect` string works as expected in mRemoteNG.
- Fill in a password for each `DirectConnect` connection saved in mRemoteNG. This resolves the issue without deleting any credentials from **Remote Desktop Connection**.
