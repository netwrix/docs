---
title: Platform Governance for Salesforce - Zendesk Integration
---

# Overview

Platform Governance for Salesforce's Change Management capabilities are integrated with Zendesk, one of the most popular customer service and issue ticketing systems. Customers are able to look for and include Salesforce Customizations, assess impacts for requested changes, and push Zendesk change tickets into a Change Request. This enables easy management of changes, seamless tracking of compliant changes and automating the reconciliation of change logs during an audit.

User benefits include:

- Avoid duplicate effort of creating tickets in two different systems.
- Pull Customizations into Zendesk for scope of changes.
- Perform impact analysis assessment.
- Approve requests in either Zendesk or Salesforce.
- Automatic ticket reconciliation between Zendesk and Salesforce.
- Enable automatic synchronization of Zendesk and Salesforce change tickets.

# Prerequisites

- Salesforce org with Platform Governance (FLODocs) package installed
- Zendesk account with admin access
- Consumer Key and Consumer Secret from Salesforce Connected App
- Platform Governance for Salesforce Zendesk App installed from Marketplace

To set up the Zendesk integration:

1. Install the App
2. Set up Approvals

## Install the App

Here are the steps to install the Zendesk app. You must have **Admin** privileges to install the app.

1. Open your Zendesk dashboard.
2. Click the **Admin** icon in the left panel.
3. Navigate to **Apps and integrations** > **Zendesk Support apps** > **Marketplace**.
![Zendesk App Menu](/images/platgovsalesforce/integrations/zendesk/Zendesk_Apps_Menu.webp)
4. Search for **Platform Governance for Salesforce**.
5. Click **Platform Governance for Salesforce** when it is displayed.
6. Click **Install**. When installation is complete, you are prompted to sign in to your Zendesk dashboard to continue.
7. Click the **Admin** icon in the left panel.
8. Navigate to **Apps and integrations** > **Zendesk Support apps**.
9. Hover on the **Platform Governance for Salesforce** tile to access the **Settings** menu.
![Zendesk App Menu](/images/platgovsalesforce/integrations/zendesk/App_Change_Setting.webp)
10. Click **Change settings**.

    ![Set up the Platform Governance for Salesforce Zendesk app](/images/platgovsalesforce/integrations/zendesk/App_Setup.webp)

    - **Title**: the name associated with the app. The default is **Platform Governance for Salesforce**.
    - **Consumer Key**: Enter the Consumer Key from your Salesforce Connected App.
    - **Consumer Secret**: Enter the Consumer Secret from your Salesforce Connected App.
    - **Sandbox**: Check this option if connecting to a Salesforce sandbox org.

    :::note
    OAuth authentication is required by Salesforce. You need to create a Connected App in Salesforce first:
    1. Go to https://test.salesforce.com/ for sandbox or https://login.salesforce.com/ for production.
    2. Navigate to Setup > Apps > App Manager > New Connected App.
    ![New Connected App](/images/platgovsalesforce/integrations/zendesk/New_Connected_App.webp)
    3. Fill in the required fields and enable API (Enable OAuth Settings).
    4. Set the Callback URL: https://server-sf.herokuapp.com/auth/handle_decision.
    5. Select OAuth Scopes: 'api, web, refresh_token'.
    ![New Connected App OAuth](/images/platgovsalesforce/integrations/zendesk/New_Connected_App_OAuth.webp)
    6. Save the new app.
    7. In App Manager, open the app > Manage > Edit policies:
       - OAuth Policies: Relax IP restrictions.
       - Refresh Token Policy: 'Refresh token is valid until revoked'.
    ![Connected App Policy](/images/platgovsalesforce/integrations/zendesk/Connected_App_Policy.webp)

    8. Copy the Consumer Key and Consumer Secret for use in the Zendesk app configuration.

    Only administrators can view the **Consumer Key** and **Consumer Secret** information.
    :::

    - **Enable role restrictions**: Check this option to restrict access to the app based on roles. Enter the roles allowed to access the app.
    - **Enable group restrictions**: Check this option to restrict access to the app based on group membership. Enter the groups allowed to access the app.

11. Click **Install**. The Consumer Key and Secret information is hidden when it is saved.

### Authorize Salesforce Connection

:::note Admin Only
This step is only for Zendesk Admins.
:::

After installation, you need to authorize the connection to Salesforce:

1. Click the new **Platform Governance for Salesforce** icon in the left panel.
1. Click the **Salesforce Credentials** option.
2. Click the **Login** button.

![Admin Panel OAuth](/images/platgovsalesforce/integrations/zendesk/Admin_Panel_Oauth.webp)

3. A popup window will open redirecting to Salesforce's OAuth 2.0 authorization screen.
4. Log in with your Salesforce credentials.
5. You will be asked to authorize Platform Governance for Salesforce to access data in your org.
6. Once authorized, the app securely stores the access and refresh tokens and links the Salesforce org with Zendesk.

![Auth Succesfull](/images/platgovsalesforce/integrations/zendesk/Auth_Succesfull.webp)

# Set up Approvals

:::note Admin Only
This step is only for Zendesk Admins.
:::

After you install the Zendesk app, set up the approvals.

Click the new Platform Governance for Salesforce icon in the left panel. The Group Configurations page opens.

Enter the group and approval information:

- **Allow these Zendesk groups to request approval**: one or more groups who can request approval for a change request. Select a group from the drop down list. Click +. Repeat as needed.
- **Allow these Zendesk groups to approve**: one or more groups who can approve a change request. Select a group from the drop down list. Click +. Repeat as needed.
- **Approval process**: select the approval process to use:
  - **Approval in Zendesk**: Approvals managed directly in Zendesk.
  - **Approval in Salesforce**: Approval continues in Salesforce.
  - **No Approval Needed**: Direct push of changes without approval.

![Admin Panel Configuration](/images/platgovsalesforce/integrations/zendesk/Admin_Panel_configuration.webp)

# Using the App in Tickets

In the ticket sidebar, the Platform Governance app displays CR information, action buttons, and accordions for existing/proposed customizations and data records. External links to Impact Analysis and Document Requirements (DRD) in Salesforce are also available.

:::note
The integration will only appear in the ticket sidebar once the Zendesk ticket has been created.
:::

![Integration After Create Zendesk Ticket](/images/platgovsalesforce/integrations/zendesk/1_See_integration_after_create_a_zendesk_ticket.webp)

# Approval Flow

The approval flow depends on the selected approval process:

## Approval in Zendesk
- Operators can Request Approval when CR is in Draft.
- Admins can Approve or Reject when CR is Pending Approval.
- Admins can Complete when CR is Approved.

## Approval in Salesforce
- Operators can Request Approval, which moves the process to Salesforce.
- Admins only see Complete once Salesforce approves.

## No Approval Needed
- Admins can Push the change request directly.
- Complete becomes available once approved/pushed.

# Troubleshooting

- **Buttons not visible**: Verify group configuration and approval process.
- **Authentication errors**: Token expired; re-login from configuration page.
