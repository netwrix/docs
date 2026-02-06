---
title: "Quickstart guide"
description: "Get started with Netwrix 1Secure quickly"
sidebar_position: 2
---

# Quickstart guide

This quickstart guide helps you get started with Netwrix 1Secure quickly. You'll activate your account, add your first organization, configure a data source, and start monitoring your IT environment. The entire process takes approximately 30 minutes to complete.

After completing this guide, you'll be able to view activity data from your environment and configure additional monitoring capabilities.

## Prerequisites

Before you begin, ensure you have the following:

- An invitation email from Netwrix with the subject "Welcome to Netwrix 1Secure"
- Administrative access to the IT infrastructure you want to monitor
- For on-premises monitoring (Active Directory or file servers):
  - A Windows Server 2012 R2 or later machine to host the Netwrix Cloud Agent
  - .NET Framework 4.8 or later installed on the agent host machine
  - Outbound TCP port 443 access from the agent host to the internet
- For cloud monitoring (Microsoft Entra ID, SharePoint Online, or Exchange Online):
  - Administrative access to your Microsoft 365 tenant
  - Permissions to register applications in Microsoft Entra ID

See the [Netwrix Cloud Agent Requirements](/docs/1secure/requirements/CloudAgentRequirements.md) topic for detailed system requirements.

## Activate your account and log in

When the Netwrix team provisions your account, you'll receive an email invitation from "noreply-account@netwrix.com". You must activate your account within two days.

1. Open the invitation email and click the **Activate my Netwrix account** button. The Change Your Password page is displayed.
2. In the **New password** field, enter a password for your account.
3. In the **Re-enter new password** field, enter the same password to confirm.
4. Click the **Reset Password** button. Your account is now activated.
5. Click the Netwrix 1Secure tenant link in the invitation email to navigate to the login page.
6. Click the **Log In** button.
7. In the Email address field, enter your email address and click **Continue**.
8. In the Password field, enter your password and click **Continue**. The Keep Your Account Safe page is displayed.
9. Select an authentication method:
   - Click **Google Authenticator or Similar** to use an authenticator app. Scan the QR code with your authenticator app and enter the one-time code.
   - Click **Security Key** to use a hardware security key. Follow the prompts to register your security key.

After successful authentication, you're redirected to the dashboard.

See the [First Login to 1Secure](/docs/1secure/admin/login/login.md) topic for additional information about account activation and authentication.

## Add your first organization

Organizations in Netwrix 1Secure represent the companies or departments you want to monitor. Managed Service Providers (MSPs) can create multiple organizations to manage different clients.

1. On the **Home** page, click the Add organization icon.
2. On the Add Organization (Step 1 of 4) window, configure the following settings:
   - **Name** – Enter a name for the organization
   - **Timezone** – Select the appropriate timezone
   - **Country** – Select the country where the organization is located
   - **Tags** – Select one or more tags to categorize the organization (optional)
   - **Alert profile** – Select an alert profile or use the default profile
   - **Risk Profile** – Select a risk profile or use the default profile
   - **Groups** – Select one or more groups to organize the organization (optional)
3. Click **Next** to continue to the data source selection.

## Add a data source

Select the data source you want to monitor first. You can add additional data sources later.

1. On the Select Data Source (Step 2 of 4) window, select one of the following data sources:
   - **Active Directory** – Monitor Active Directory changes and logon activity
   - **Azure AD** (Microsoft Entra ID) – Monitor Entra ID changes and sign-in activity
   - **Computer** – Monitor file server activity on Windows servers
   - **Exchange Online** – Monitor Exchange Online mailbox activity
   - **SharePoint Online** – Monitor SharePoint Online and OneDrive for Business activity
2. Click **Next** to proceed to configuration.

The configuration steps differ based on the data source you selected. Follow the appropriate section below.

### Configure Active Directory or Computer monitoring

For on-premises data sources, you must install the Netwrix Cloud Agent.

1. On the Configure source details (Step 3 of 4) window, configure the site settings:
   - **Site Name** – Enter a name for the physical location or site
   - **Site Description** – Enter a description (optional)
2. Click **Next**. The agent installation instructions are displayed.
3. Click **Download Agent** to download the Netwrix Cloud Agent installer.
4. On the server where you want to install the agent, run the downloaded installer.
5. In the installation wizard, click **Next** to continue.
6. Select the installation folder and click **Next**.
7. Click **Install** to begin the installation.
8. When the installation completes, ensure the **Launch Netwrix Cloud Agent Configuration** tool checkbox is selected and click **Finish**.
9. In the Netwrix Cloud Agent Configuration tool, click **Configure**.
10. Return to the Netwrix 1Secure browser window and click **Copy Connection String** to copy the agent connection details.
11. Paste the connection string into the Netwrix Cloud Agent Configuration tool and click **Save**. The agent status changes to **Connected**.
12. Return to the Netwrix 1Secure browser window and click **Retry connecting to the client**. The agent status changes to **Healthy**.
13. Click **Next** to continue to connector configuration.
14. On the Configure source details (Step 3 of 4) window, configure the data source settings:
    - For **Active Directory**, enter the domain name and select the connectors you want to enable (Active Directory Activity, Active Directory Logons)
    - For **Computer**, enter the file server name or IP address and configure the File Server Activity connector
15. Click **Next**.
16. On the Choose new connector (Step 4 of 4) window, review the selected connectors and click **Finish**.

See the [Install Agent](/docs/1secure/install/installagent.md) topic for detailed installation instructions.

### Configure cloud data source monitoring

For cloud data sources (Microsoft Entra ID, SharePoint Online, or Exchange Online), you must register an application in Microsoft Entra ID.

1. On the Configure source details (Step 3 of 4) window, you'll see instructions for registering an application in Microsoft Entra ID.
2. Open a new browser tab and navigate to the Microsoft Entra admin center.
3. Register a new application and configure the required API permissions as described in the on-screen instructions.
4. Copy the following values from your registered application:
   - **Application (client) ID**
   - **Directory (tenant) ID**
   - **Client secret** (create a new client secret if needed)
5. Return to the Netwrix 1Secure window and enter the application credentials:
   - **Client ID** – Paste the Application (client) ID
   - **Tenant ID** – Paste the Directory (tenant) ID
   - **Client Secret** – Paste the client secret value
6. Click **Next**.
7. On the Choose new connector (Step 4 of 4) window, select the connectors you want to enable:
   - For **Azure AD** (Entra ID), select Azure AD Activity or Azure AD Logons
   - For **SharePoint Online**, select SharePoint Online Activity
   - For **Exchange Online**, select Exchange Online Activity
8. Click **Finish**.

See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic for detailed configuration instructions.

## Verify data collection

After you complete the setup, Netwrix 1Secure begins collecting data from your environment.

1. Navigate to the **Home** page to view your organization.
2. Click on the organization name to view the organization dashboard.
3. Review the **Organization Statistics** panel to see the number of activity records collected.
4. Review the **Alerts Timeline** panel to see any triggered alerts.

:::note
Data collection begins immediately after configuration. For on-premises data sources, the agent uploads data every 15 minutes. For cloud data sources, data collection frequency depends on the connector and data source.
:::

If you don't see data after 30 minutes, verify the following:
- For on-premises sources, ensure the agent status is **Healthy** and the agent service is running
- For cloud sources, verify the application credentials are correct and the required API permissions are granted
- Check that the required audit policies are configured in your environment

See the [How It Works](/docs/1secure/admin/howitworks.md) topic to understand the data collection architecture.

## Next steps

Now that you have Netwrix 1Secure set up and collecting data, you can explore additional capabilities:

- **Add more data sources** – Configure additional Active Directory domains, file servers, or cloud services to expand monitoring coverage. See the [Add Organizations](/docs/1secure/admin/organizations/addorganizations.md) topic for additional information.
- **Configure alerts** – Set up custom alerts to receive notifications about specific activities or anomalies. See the [Alerts](/docs/1secure/admin/alerts/overview.md) topic for additional information.
- **Add users** – Invite team members and assign them appropriate roles to collaborate on monitoring and investigation. See the [Add Users](/docs/1secure/admin/organizations/addingusers/addingusers.md) topic for additional information.
- **Configure IT infrastructure auditing** – Optimize audit policy settings to ensure comprehensive data collection. See the [Configure IT Infrastructure for Auditing and Monitoring](/docs/1secure/setup-and-configuration/index.md) topic for additional information.
- **Review the dashboard** – Explore the organization dashboard to understand activity patterns and potential security risks. See the [1Secure Dashboard](/docs/1secure/admin/dashboard/overview.md) topic for additional information.

For answers to common questions and troubleshooting guidance, see the Netwrix 1Secure Knowledge Base.
