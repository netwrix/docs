---
title: "Run the Getting Started Wizard"
description: "Run the Getting Started Wizard"
sidebar_position: 20
---

# Run the Getting Started Wizard

The Getting Started Wizard helps you set up Platform Governance for Salesforce after you have done
the [basic installation](installing_strongpoint.md) and configuration.

## Prerequisites

Before running the Getting Started Wizard, ensure you have completed:

- ✅ [Installed the Platform Governance package](installing_strongpoint.md)
- ✅ [Assigned the Netwrix Grant Permissions permission set](installing_strongpoint.md#assign-permission-set-to-users) to users
- ✅ Configured authentication using **one** of these methods:
  - **Recommended:** [Named Credentials](named_credential.md) (for MFA-enabled orgs)
  - **Legacy:** Session ID authentication (username/password/token)

## Access the Wizard

To use the Getting Started Wizard:

1. Open **Netwrix Dashboard** from the Salesforce App Launcher
2. Navigate to **Settings** > **Getting Started Wizard**

The **Getting Started Wizard** opens to help you finish the configuration and set up.

## Choose Your License Type

On the Initial Setup Wizard page, choose the package type you have purchased and enter the **License Key** sent to you. Click **Next**.

![getting_started_wizard2](/images/platgovsalesforce/installing_strongpoint/getting_started_wizard2.webp)

## Add your Credentials

Once you have chosen your license type, you need to add your credentials. If your credentials
change, an alert is sent to update the saved credentials. Expired credentials can cause auto
scanners to fail. Use **Netwrix Dashboard** > **Settings**> **SP Credentials** to update your
credentials.

:::warning High Assurance Users
If your organization has High Assurance enabled, you **cannot** use this credential method. You must use [Named Credentials](named_credential.md) instead.
:::

![getting_started_wizard3](/images/platgovsalesforce/installing_strongpoint/getting_started_wizard3.webp)

**For Session ID Authentication only:**

1. On the Credentials page, add the following values:

    - **Salesforce Username**
    - **Salesforce Password**
    - **Salesforce Security Token**
    - **Salesforce Consumer Key** (Not required can be left blank)
    - **Salesforce Consumer Secret** (Not required can be left blank)

2. Click **Next**

## Test Your Connection

This step applies to **both** Named Credentials and Session ID authentication methods. You need to configure the remote site settings to allow Platform Governance to communicate with external services.

![Testing the connection](/images/platgovsalesforce/installing_strongpoint/getting_started_wizard10.webp)

### Configure Remote Site Settings

1. Open Salesforce **Setup** > **Security** > **Remote Site Settings**
2. Click **New Remote Site**

    ![New Remote Site](/images/platgovsalesforce/installing_strongpoint/getting_started_new_rss.webp)

3. Copy/paste the information from the wizard to create the remote sites
4. Repeat for each remote site URL shown in the wizard

:::tip Multiple Remote Sites
You may need to create multiple remote site settings. The wizard will display all required URLs. Create a separate remote site entry for each URL shown.
:::

### Test the Connection

1. Return to the Getting Started Wizard
2. Click **Test Connection**
3. **Test connection was Successful** is displayed if the connection succeeds
4. Once the test is successful, click **Next**

## Next Steps

After completing the Getting Started Wizard:

- [Set Up the Initial Scan](setting_up_initial_scan.md)
