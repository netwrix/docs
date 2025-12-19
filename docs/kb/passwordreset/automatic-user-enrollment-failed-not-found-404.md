---
description: >-
  Explains the cause and resolution for a 404 Not Found error that occurs after
  installing Netwrix Password Reset. Describes how the `PRM_server` registry
  value determines the portal URL and where to change it.
keywords:
  - 404
  - Not found
  - automatic user enrollment
  - PRM_server
  - registry
  - Netwrix Password Reset
  - self-service portal
  - client configuration
products:
  - general
sidebar_label: 'Automatic user enrollment failed: Not found (404)'
tags: []
title: 'Automatic user enrollment failed: Not found (404)'
knowledge_article_id: kA00g000000H9biCAC
---

# Automatic user enrollment failed: Not found (404)

The following error occurs after installation of Netwrix Password Reset.

![User-added image](./images/ka04u00000116c8_0EM7000000052RW.png)

---

The error occurs because the client cannot connect to the Netwrix Password Reset portals by the specified URL.  
The 404 error code means that there are no portals at the specified URL.

---

## Resolution

1. Reconfigure the client to connect to the server via the correct URL (should point to the Netwrix Password Reset Self-service portal).

2. The URL is determined by the `PRM_server` registry value located in the following registry keys (by priority):

   1. `HKLMSoftware[Wow6432Node]PoliciesNetWrixPassword Manager`
   2. `HKLMSoftware[Wow6432Node]NetWrixPassword Manager Self-Service client (is used if there is no value in the 1st key)`

   ![User-added image](./images/ka04u00000116c8_0EM7000000052KG.png)
