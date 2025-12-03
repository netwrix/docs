---
description: >-
  When you open the Licensing page in the Password manager Administration
  console, you may see a server error caused by the service lacking permissions
  to read the license information from the registry. This article explains the
  cause and how to resolve it by granting the required permissions.
keywords:
  - Password Manager
  - licensing
  - Administration console
  - registry
  - HKLM
  - Wow6432Node
  - permissions
  - service account
  - Netwrix Password Manager
products:
  - general
sidebar_label: Cannot access Licensing page
tags:
  - troubleshooting-and-errors
title: "Cannot access Licensing page"
knowledge_article_id: kA00g000000H9byCAC
---

# Cannot access Licensing page

## Symptoms

I get the following error when trying to get to a License page in the Administration console of the Password manager.

An error occurred on the server when processing the URL. Please contact the system administrator.
If you are the system administrator please click here to find out more about this error.

---

## Cause

The error occurs because Password Manager service fails to get information about current license form the registry.

---

## Resolution

To address the issue make sure that the Password Manager service account has Full control on the following:

1. Password Manager installation directory
2. Registry key `HKLMSoftware[Wow6432Node]NetwrixPassword Manager (Wow6432Node only for x64 OS)`

![User-added image](./../0-images/ka04u00000116bt_0EM700000004yh6.png)
![User-added image](./../0-images/ka04u00000116bt_0EM700000004yh1.png)

Even if the service account is a member of local Administrators group, please try to grant Full control to the service account explicitly.
Restart the Netwrix Password Manager service after granting permissions.
