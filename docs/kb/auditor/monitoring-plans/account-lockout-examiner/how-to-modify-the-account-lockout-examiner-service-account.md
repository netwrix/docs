---
description: >-
  Shows how to change the service account used by the Netwrix Account Lockout
  Examiner service after installation.
keywords:
  - account lockout
  - service account
  - Services snap-in
  - Netwrix
  - Account Lockout Examiner
  - restart service
products:
  - auditor
sidebar_label: How to modify the Account Lockout Examiner service
tags: []
title: "How to modify the Account Lockout Examiner service account"
knowledge_article_id: kA00g000000H9UhCAK
---

# How to modify the Account Lockout Examiner service account

I am asked to specify an account during installation of Netwrix Account Lockout Examiner. How to change it once it is installed?

The Netwrix Account Lockout Examiner service account you entered during installation is used to run the Netwrix Account Lockout Examiner service. To change it, perform the following steps:

## Resolution

1. Go to **Services** snap-in - **Start** - **Administrative Tools** - **Services**.  
2. Locate **Netwrix Account Lockout Examiner**, right click it and select **Properties**.  
3. Click the **Log On** tab.  
4. Change the account, click **OK**.  
5. Restart the **Account Lockout Examiner** service.

![User-added]./../0-images/servlet_image_3823966b1661.png)

