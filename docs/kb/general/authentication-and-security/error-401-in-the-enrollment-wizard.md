---
description: >-
  Resolve Error 401 (Not authorized) that appears when starting the Enrollment
  wizard by adding the Password Manager Self-service portal URL to the Local
  Intranet Zone or by configuring automatic logon settings.
keywords:
  - Error 401
  - Enrollment wizard
  - Password Manager
  - Local Intranet Zone
  - Internet Options
  - Automatic logon
  - Group Policy
  - self-service portal
products:
  - general
sidebar_label: Error 401 in the Enrollment wizard
tags:
  - authentication-and-security
title: "Error 401 in the Enrollment wizard"
knowledge_article_id: kA00g000000H9UUCA0
---

# Error 401 in the Enrollment wizard

You see the Error 401 (Not authorized) message when starting the Enrollment wizard.

## Resolution

To resolve the issue, add the Password Manager Self-service portal URL to the **Local Intranet Zone**.

1. Launch **Internet Options** from **Control Panel**
2. Go to the **Security** tab
3. Select **Local intranet**, click **Sites**
4. Click **Advanced**
5. Type the URL and click **Add**
6. Click **Close**, then **Ok**, and again **Ok**

![User-added image](./../0-images/ka04u00000116cL_0EM700000004yGK.png)

## Workaround: Force the browser to send credentials to the Internet zone

As a workaround, you can force the browser to send credentials to the Internet zone.

1. Launch **Internet Options** from **Control Panel**
2. Go to the **Security** tab
3. Select **Internet**, click **Custom level**
4. In the **Security Settings** window that opens, scroll to the bottom
5. Select **Automatic logon with current username and password** radio-button under **User authentication - Logon**
6. Click **Ok** then **Ok** again

![User-added image](./../0-images/ka04u00000116cL_0EM700000004yGP.png)

These settings can also be applied via Group Policy.
