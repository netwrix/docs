---
title: "Jira Walkthrough Example"
description: "Jira Walkthrough Example"
sidebar_position: 20
---

# Jira Walkthrough Example

This walkthrough is one example based on our test account. You must
[install and configure](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md) the Platform Governance for Salesforce Salesforce Jira
integration, including setting up the **[Jira Statuses](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md)** prior to using this
walkthrough.

The walkthrough demonstrates these steps:

- Create a Jira Ticket
- Connect to the App
- Add Customizations
- Perform Risk Assessment
- Ready for Development
- Deploy Changes and Complete the Ticket

## Create a Jira Ticket

1. Login in to your Jira account.
2. Open a Project.
3. Click **Create** (**+**).

    ![Create a Jira ticket](/images/platgovnetsuite/integrations/jira_example_create_issue.webp)

4. Enter your information on the **Create issue** form:

    - **Project**: Select your Project. **NS & SF Jira Demo (SJD)** is selected for this example.
    - **Issue Type**: Select your Jira type. **Task** is selected for this example.
    - **Summary**: Add a name
    - **Description** (optional)

5. Click **Create**.

:::note
Alerts and notifications may occur during this walkthrough, and are not included in these steps. For example, override alert, notifications for approvers, and notification for the change request.
:::

## Connect to the App

1. Open the **Comments** tab and select **Strongpoint Salesforce**.

    ![Accessing the Strongpoint Salesforce app](/images/platgovsalesforce/integrations/jira_comments_open_app.webp)

2. There are two ways to connect: **Login User** or **Connected App** tabs.

    ![Connection options](/images/platgovsalesforce/integrations/connection_options.webp)

### Connected App

Use the **Connected App** tab if you set up the connected app using the procedure:
[Access Data with API Integration](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md)

1. Open the **Connected App** tab.

    ![Using the connected app](/images/platgovsalesforce/integrations/connection_options_app.webp)

2. Enter the **Consumer Key** and **Consumer Secret**.
3. Click **Is Sandbox account?** if you are logging in to a sandbox.
4. Click **Connect**. If this is the first time you are using the connected app, you are prompted to
   select your username. The connected app is configured for you. Once finished, click **Close** on
   the confirmation screen. The Strongpoint form is displayed. Your connection persists unless you
   click **Change Account** on the integration page.

If the configuration fails, an error message is displayed. For example,

> **error=redirect_uri_mismatch**
>
> - The 10 minutes timing slot from Salesforce is not completed yet. Please wait
> - If the error persists, check the [Callback URL](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md).
>
>     - You may have left a space between the two Callback URLs
>     - You may have an error in the newly added Callback URL it should be:
>       **https://spjira.my.salesforce-sites.com/SpHandleJiraAuth**

### Login User

Enter your Salesforce **Username**, **Password** and **Security Token**. If you are using MFA or
SSO: use your SSO Password. The Security token is the changing 6 digit code from your SSO or MFA
app.

![Enter your Jira credentials](/images/platgovsalesforce/integrations/jira_credentials.webp)

If you do not have your security token, you can use these steps to reset your token:

1. Log in to your Salesforce account.
2. Open **View Profile** > **Settings**.
   ![Open your Salesforce Profile settings](/images/platgovsalesforce/integrations/jira_example_settings.webp)
3. Select **Reset My Security Token** from the menu.
4. Click **Reset Security Token**. Check your email for your new token.
5. Click **Sandbox Account?** if you are using your sandbox.
6. Click **Connect**. If the connection is successful, the form is displayed (see Add Customizations
   section). The **Synchronized with** status displays the org you are logged into for Salesforce.

:::note
You cannot login if you do not have the **appropriate role permissions to create a change request**.
:::

If you do not enter the correct credentials, an error is displayed. After six unsuccessful
consecutive attempts to login, your account is suspended for 30 minutes.

## Add Customizations

Once you have logged in, the form is displayed.

![Connection details for the ticket](/images/platgovsalesforce/integrations/jira_connection.webp)

- **Synchronized with** displays the connected Org. Click **Change Account** if you need to switch
  Orgs.
- **Policy** is blank until Customizations have been added. The Policy is determined by the
  Customization with the strictest policy.
- **Change Level Req** is blank until Customizations have been added. If there are multiple change
  levels, the most stringent one is applied.
- **Select Customizations** is where you specify the Customizations you are changing or adding. If
  the Customization exists in your account, it is added to the **Select Customizations** list. **Add
  Proposed Customizations** are added to the **Proposed Customizations** list. You can delete added
  Customizations with the
  ![delete](/images/platgovnetsuite/integrations/delete.webp) icon.
- **View DRD** and **Impact Analysis** are tools to Perform Risk Assessment.
- **Push** creates the Change Request in Salesforce. **Push** is also used to manually update your
  Change Request if you are not using the [Automatic Synchronization](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md) feature.

### Add Existing Customizations by Name or API Name

1. Enter all or part of a Name in **Add customization** for **Existing Customizations**. This
   example uses **maintenance** as the search string.
2. Click **+** to search for matching Customizations. Hover over **View** to display the **Type**
   and **API Name** for a Customization.

    ![Add an existing customization](/images/platgovsalesforce/integrations/jira_customization_add.webp)

3. Select one or more Customizations. This example uses **Maintenance Type (Parent: Account)**, a
   customization in the _Strongpoint Demo Org_.
4. Click **Add Selected Customizations**. The selected Customization is added to the **Existing
   Customizations** list.

    ![Add an existing customization](/images/platgovsalesforce/integrations/jira_example_add_existing.webp)

5. Enter an **API Name** in **Add customization** for **Existing Customizations** and click **+**.
   This example uses **UpsellOpportunities**, an API in the _Strongpoint Demo Org_.
6. The **API Name** is displayed. Select it, and click **Add Selected Customizations**. The selected
   Customization is added to the **Existing Customizations** list. This example shows
   **UpsellOpportunities (ApexClass)**, an API in the _Strongpoint Demo Org_.

    ![Add an existing customization by API Name](/images/platgovsalesforce/integrations/jira_example_add_existing_api.webp)

### Add Proposed Customizations

In this procedure, we are adding a new Customization.

1. Enter a new, valid API Name in the **Add Customization** for **Proposed Customizations** field.
   For this example, enter **CustomerPriorities**.
2. Click (**+**) to add it. If the API Name is valid, and does not match an existing API Name, the
   new Customization is added to the **Proposed Customizations** list.

    ![Add a proposed customization](/images/platgovsalesforce/integrations/jira_example_proposed.webp)

### Create the Change Request

Using the Platform Governance for Salesforce Jira integration, your Change Requests are created
automatically when you add a Customization. To setup or update the status mapping, refer to setting
up the **[Jira Statuses](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md)** procedure.

1. Change the Jira status of your ticket to match the status set up for **CR In Progress**. For
   example, **In Progress**. Refer to setting up the **[Jira Statuses](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md)**
   procedure.
2. Click **Push** to create the Change Request if you are not using the
   [Automatic Synchronization](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md) feature. The change request is created in
   Salesforce with the **In Progress** status.
3. Expand the **Change Request** field on the right. The status is now **None/In Progress**. There
   is a link to open the Change Request in Salesforce.

    ![Change Request is In Progress](/images/platgovsalesforce/integrations/jira_example_in_progress_status.webp)

Note the **Policy** and **Change Level Req** reflect the most stringent requirement for your
selected customizations, in this example, **Change Request**.

![Policy and Change Level Req have been updated](/images/platgovsalesforce/integrations/jira_example_policy.webp)

## Perform Risk Assessment

### Impact Analysis

The impact analysis tool reviews your customizations for dependencies or risks. Click **Impact
Analysis** to run the tool. Here is an example report showing the Customizations that **Cannot be
Safely Deleted or Modified** tab:

![Impact analysis report](/images/platgovnetsuite/integrations/jira_example_impact_analysis.webp)

Before proceeding with your changes, review each warning to ensure your change does not break
something. Dependencies can easily be reviewed with the DRD tool.

### View DRD

The [Dependency Relationship Diagram](/docs/platgovsalesforce/tools/viewing_drd.md) (DRD) tool graphically displays your
Customizations and all dependencies.

1. Click **View DRD**.
2. When the diagram opens, you can explore the dependencies to evaluate the effect of your intended
   changes.

![Use the DRD to explore dependencies](/images/platgovsalesforce/integrations/jira_example_drd.webp)

## Ready for Development

Once you have resolved any risk or conflicts, your changes are ready for development:

1. Change the Jira status of your ticket to match the status set up for **CR Pending Approval**. For
   example, **Selected for Development**.
2. Click **Push** if you are not using [Automatic Synchronization](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md) to push
   status changes.
3. Expand the **Change Request** field on the right. The status is now **Pending Approval / In
   Progress**. There is a link to open the Change Request in Salesforce.

    ![Change Request in Pending Approval](/images/platgovsalesforce/integrations/jira_example_pending_approval_status.webp)

4. Click the **Go To Record** link to view the Change Request.

    ![Change Request is In Progress / Pending Approval](/images/platgovsalesforce/integrations/jira_example_pending_approval_change_request.webp)

## Deploy Changes and Complete the Ticket

When development is done, and the Change Request is approved according to your policy, the Jira
ticket is ready to be updated.

1. Expand the **Change Request** field on the right. The status is **Approved / In Progress**.

    ![Change Request is approved](/images/platgovsalesforce/integrations/jira_example_approved_status.webp)

2. Change the Jira status of your ticket to match the status set up for **CR Approved**. For
   example, **Ready for Deployment**.
3. Click **Push** if you are not using [Automatic Synchronization](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md) to push
   status changes.
4. Once your deployment and verification activities are complete, change the Jira status of your
   ticket to match the status set up **CR Complete**. For example, **Done**.

If you open the Change Request in Salesforce:

- All Customizations added from Jira are displayed.
- **Change Overview** is set to the Jira ticket description.
- **Change Type** is **Jira**, and **External Change Request Number** is the Ticket number.
- Change Request shows as **Completed**.
- **External Created By**: is the user that created the Jira ticket .
- **External last Modified by**: is the last user who modified the Jira ticket.

    ![user_guide_example](/images/platgovsalesforce/integrations/user_guide_example.webp)
