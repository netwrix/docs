---
title: "Zendesk"
description: "Zendesk"
sidebar_position: 30
---

# Zendesk

Platform Governance For NetSuite's Change Management capabilities are integrated with Zendesk, one
of the most popular customer service and issue ticketing systems. Customers are able to look for and
include NetSuite Customizations, assess impacts for requested changes, and push Zendesk change
tickets into a Change Request. This enables easy management of changes, seamless tracking of
compliant changes and automating the reconciliation of change logs during an audit.

User benefits include:

- Avoid duplicate effort of creating tickets in two different systems.
- Pull Customizations into Zendesk for scope of changes.
- Specify Bundle ID as needed.
- Perform impact analysis assessment.
- Approve requests in either Zendesk or NetSuite.
- Automatic ticket reconciliation between Zendesk and NetSuite.
- Enable automatic synchronization of Zendesk and NetSuite change tickets.

To set up the Zendesk integration:

1. Install the NetSuite Bundle
2. Install the App
3. Set up Approvals

## Install the NetSuite Bundle

1. Open **Customization** > **SuiteBundler** > **Search & Install Bundles**
2. Search for bundle **402177**
3. Click on **Netwrix Platform Governance Zendesk** in the search results.
4. Click **Install** when the Bundle Details opens.
5. Click **Install Bundle** on the **Preview Bundle** Install page.

## Install the App

Here are the steps to install the Zendesk app. You must have **Admin** privileges to install the
app.

1. Open your Zendesk dashboard.
2. Click the **Admin** icon in the left panel. It should open a new window to Admin Center.
3. Navigate to **Apps and integrations** > **Zendesk Support apps** > **Marketplace**.

    ![Open the Zendesk Marketplace](/images/platgovnetsuite/integrations/zendesk_admin_marketplace.webp)

4. Search for **Platform Governance For NetSuite**.
5. Click **Platform Governance For NetSuite** when it is displayed.

    ![Platform Governance For NetSuite app in the Marketplace](/images/platgovnetsuite/integrations/zendesk_platform_governance.webp)

6. Click **Install**. When installation is complete, you are prompted to sign in to your Zendesk
   dashboard to continue.
7. Click the **Admin** icon in the left panel. It should open a new window to Admin Center.
8. Navigate to **Apps and integrations** > **Zendesk Support apps**.

    ![Configure the Platform Governance Zendesk app](/images/platgovnetsuite/integrations/zendesk_configure_app.webp)

9. Hover on the **Platform Governance For NetSuite** tile to access the **Settings** menu.

    ![Hover to access the Settings](/images/platgovnetsuite/integrations/zendesk_configure_app_menu.webp)

10. Click **Change settings**.

    ![Set up the Platform Governance For NetSuite Zendesk app](/images/platgovnetsuite/integrations/zendesk_change_settings.webp)

    - **Title**: the name associated with the app. The default is **Platform Governance For NetSuite**.
    - Account ID: enter the NetSuite account ID. The **Account ID** must be a lowercase string. For
      example, **tstdrv12345678**.

        Account ID must be entered in lower case.

    - **Consumer Key**: Enter the Consumer Key of the Integration Record from your NetSuite account.
    - **Consumer Secret**: Enter the Consumer Secret of the Integration Record from your NetSuite
      account.
    - **Token ID**: Enter the Token ID of the Integration Record from your NetSuite account.
    - **Token Secret**: Enter the Token Secret of the Integration Record from your NetSuite account.

    :::note
    Token-based authentication (TBA) is required by NetSuite. Refer to the NetSuite help:
    [TBA Setup Requirements](https://netsuite.custhelp.com/app/answers/detail/a_id/51000/kw/tba) for
    details if you have not yet set up TBA.
    Only administrators can view the **Consumer Key**, **Consumer Secret**, **Token ID** and **Token
    Secret** information.
    This information is generated when you create your Integration Record with the Token-Based
    Authentication option enabled. If you lose or forget these credentials, you must reset them to
    obtain new values.
    :::

    - **Enable role restrictions**: Check this option to restrict access to the app based on roles.
      Enter the roles allowed to access the app.
    - **Enable group restrictions**: Check this option to restrict access to the app based on group
      membership. Enter the groups allowed to access the app.

11. Click **Install**. The keys, secrets, and token information is hidden when it is saved.

## Set up Approvals

After you install the Zendesk app, set up the approvals.

1. Click the new **Platform Governance For NetSuite** icon in the left panel. The **Group Configurations**
   page opens.
2. Enter the group and approval information:

    - **Allow these Zendesk groups to request approval** one or more groups who can request approval
      for a change request. Select a group from the drop down list. Click **+**. Repeat as needed.
    - **Allow these Zendesk groups to approve** one or more groups who can approve a change request.
      Select a group from the drop down list. Click **+**. Repeat as needed.
    - **Approval process** select the approval process to use. **Platform Governance Approval in Zendesk**,
      **Platform Governance Approval in NetSuite**, **No Approval Needed**, or **Not set**.

**Next Step:** [ Zendesk Walkthrough Example](/docs/platgovnetsuite/ticketingintegrations/zendeskintegration/zendesk_walkthrough_example.md)
