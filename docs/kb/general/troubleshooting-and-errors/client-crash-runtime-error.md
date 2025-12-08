---
description: >-
  Explains how to resolve a runtime error that occurs when the Password Manager
  client crashes at startup by checking deployment permissions and required
  registry keys.
keywords:
  - Password Manager
  - client crash
  - runtime error
  - UAC
  - registry
  - NetWrixPasswordManager
  - deployment
  - local admin
products:
  - general
sidebar_label: Client crash - Runtime Error!
tags:
  - troubleshooting-and-errors
title: "Client crash - Runtime Error!"
knowledge_article_id: kA00g000000H9bcCAC
---

# Client crash - Runtime Error!

I deployed the Password Manager client on several machines and on some of them I receive the following error at startup

![User-added image](./../0-images/ka04u00000116ci_0EM7000000052dI.png)

---

The application adds files to Program files and keys to the registry, also registers its components in registry.  
The error above occurs because some of required components were not installed or registered.

The most common reason is the lack of permissions granted to the account under which the client was installed.  
Microsoft User Account Control (UAC) can also cause this.

---

1. First of all make sure that the account used to deploy the client has full access to the local system (local admin permissions or local system account).
2. Try perform the deployment with UAC disabled.

If the issue persists, please manually check that after deployment of the client the following registry keys exist.

- `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\NetWrixPasswordManager`
- `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Policies\NetwrixPasswordManager` (this is only in 64-bit OS)

![User-added image](./../0-images/ka04u00000116ci_0EM7000000052dS.png)

If the key does not exist you can create it manually. No values are necessary.  
Change the deployment procedure to create this key.
