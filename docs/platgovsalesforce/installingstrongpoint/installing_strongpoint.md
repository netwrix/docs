---
title: "Install Platform Governance for Salesforce"
description: "Install Platform Governance for Salesforce"
sidebar_position: 10
---

# Install Platform Governance for Salesforce

Platform Governance for Salesforce is installed with package installation file sent to you by our
customer success team. To install:

1. Click on the install URL, if installing in the sandbox, replace the initial portion of the URL
   with [http://test.salesforce.com](http://test.salesforce.com)
2. Select **Install for Admins Only**
3. Click **Install**
   ![install1](/images/platgovsalesforce/installing_strongpoint/install1.webp)

:::note
The installation runs in the background. An email notification is sent to you when the installation
is complete.
:::

## Configure Platform Governance for Salesforce

**Requirements**

- Create a **Connected App** to generate and extract the Salesforce **Consumer Key** and the
  Salesforce **Consumer Secret Key**
- Your Salesforce **username**, **password** and **authentication token**

**Installation**

1. Open Salesforce **Setup** > **Apps** > **App Manager**
2. Click **New Connected App**
3. Select **Create a Connected App** and click **Continue**
4. Under **Basic Information** enter the required fields:

    - **Connected App Name**: **Netwrix Platform Governance**
    - **API Name**: **Netwrix_Platform_Governance**
    - **Contact E-mail**

5. Click **API (Enable OAuth Settings)** to expand the section.
6. Set **Call Back URL** to **[https://localhost.com](https://localhost.com)**
7. Set **Selected OAuth Scopes** to **Full access (full)**

    ![Setting for Connected App](/images/platgovsalesforce/integrations/connected_app.webp)

    **The Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows**
    should not be checked.

8. Click **Save**. **Netwrix Platform Governance**is now listed under **Custom Apps**.
9. Click on **Netwrix Platform Governance**.

    ![configure-1](/images/platgovsalesforce/installing_strongpoint/configure-1.webp)

10. Click **Manage Consumer Details**. You must verify your identity before you can proceed.
11. Copy the **Consumer Key** and the **Consumer Secret Key**.
12. Open the Salesforce App Launcher.
13. Locate and select **Netwrix Lightning**.
14. Click **I Accept** for the EULA.

**Next Step:** [Run the Getting Started Wizard](/docs/platgovsalesforce/installingstrongpoint/using_getting_started_wizard.md)
