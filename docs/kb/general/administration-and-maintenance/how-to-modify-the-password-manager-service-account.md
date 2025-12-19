---
description: >-
  Explains how to modify the Windows service account used by the Netwrix
  Password Manager service after installation.
keywords:
  - Password Manager
  - service account
  - services.msc
  - Windows Services
  - Netwrix Password Manager
  - modify service account
products:
  - general
sidebar_label: How to modify the Password Manager Service account
tags:
  - administration-and-maintenance
title: "How to modify the Password Manager Service account"
knowledge_article_id: kA00g000000H9dnCAC
---

# How to modify the Password Manager Service account

Password Manager runs as a service. The service account is the account you use to run the Netwrix Password Manager service. The Password Manager installer prompts you for the credentials of this account.

## Modify the service account

To modify this account after installation, do the following:

1. Run the **Services** snap-in (navigate to **Start** -> **Run** and type `services.msc`).
2. Locate the **Netwrix Password Manager** service.
3. Right-click it and select **Properties**.
4. Navigate to the **Log on** tab.
5. Specify the account you want to use to run the service.
6. Click **OK** and restart the service.

[![User-added image](./../0-images/ka04u00000116Ro_0EM700000004xUu.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAd0&feoid=00N700000032Pj2&refid=0EM700000004xUu)
