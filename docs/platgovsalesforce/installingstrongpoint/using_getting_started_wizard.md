---
title: "Run the Getting Started Wizard"
description: "Run the Getting Started Wizard"
sidebar_position: 20
---

# Run the Getting Started Wizard

The Getting Started Wizard helps you set up Platform Governance for Salesforce after you have done
the [basic installation](/docs/platgovsalesforce/installingstrongpoint/installing_strongpoint.md) and configuration.

To use the Getting Started Wizard:

1. Open **Netwrix Dashboard**.
2. Open **Settings**> **Getting Started Wizard**

The **Getting Started Wizard** opens to help you finish the configuration and set up.

## Choose Your License Type

On the Initial Setup Wizard page, choose the package type you have purchased. If you have an
Intelligent Change Management or Enterprise Compliance License, enter the **Input Authorization
Token** sent to you. Click **Next**.

![getting_started_wizard2](/images/platgovsalesforce/installing_strongpoint/getting_started_wizard2.webp)

## Add your Credentials

Once you have chosen your license type, you need to add your credentials. If your credentials
change, an alert is sent to update the saved credentials. Expired credentials can cause auto
scanners to fail. Use **Netwrix Dashboard** > **Settings**> **SP Credentials** to update your
credentials.

![getting_started_wizard3](/images/platgovsalesforce/installing_strongpoint/getting_started_wizard3.webp)

1. On the Credentials page, add the following values:

    - **Salesforce Username**
    - **Salesforce Password**
    - **Salesforce Security Token**
    - **Salesforce Consumer Key** Extracted when you created the Strongpoint Connected App
    - **Salesforce Consumer Secret** Extracted when you created the Strongpoint Connected App

2. Click **Next**

## Test Your Connection

Once you have set up your credentials, you need to configure the remote site settings.

![Testing the connection](/images/platgovsalesforce/installing_strongpoint/getting_started_wizard10.webp)

1. Open Salesforce **Setup** > **Security** > **Remote Site Settings**.
2. Click **New Remote Site**.

    ![New Remote Site](/images/platgovsalesforce/installing_strongpoint/getting_started_new_rss.webp)

3. Copy/paste the information from the wizard to create the remote sites.
4. Click on **Test Connection**. **Test connection was Successful** is displayed if the connection
   succeeds. If the connection fails, the wizard suggests troubleshooting steps to resolve the
   issue.
5. Click **Next**.

**Next Step:** [Set Up the Initial Scan](/docs/platgovsalesforce/installingstrongpoint/setting_up_initial_scan.md)
