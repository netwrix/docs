---
title: "Link Directory Manager Workflows to Power Automate"
description: "Connect an identity store to Power Automate and link a workflow to a flow so the flow triggers when the workflow does."
keywords:
  - Power Automate integration
  - link workflow to flow
  - Power Automate client
  - flow request URL
  - Directory Manager workflows
  - Microsoft Entra application
sidebar_position: 40
---

# Link Directory Manager Workflows to Power Automate

You can link an identity store in Directory Manager to Power Automate to achieve the following:

- **Trigger a flow from Directory Manager** - To do this, you must link a workflow in an identity
  store to a Power Automate flow. When the Directory Manager workflow triggers, the linked flow
  triggers automatically.

## Trigger a Flow from Directory Manager

You can link a workflow in an identity store to a flow. You can link both system and user-defined
workflows to flows.

- As a one-time process, connect your identity store to Microsoft Power Automate. See the
  [Connect an Identity Store to Power Automate](#connect-an-identity-store-to-power-automate) topic.
- Link a workflow to a flow by providing the URL of that flow in the workflow. See the
  [Link an Identity Store Workflow to a Flow](#link-an-identity-store-workflow-to-a-flow) topic.

As a result, when the identity store workflow triggers, the linked flow triggers automatically.

:::note
When you approve the flow in Power Automate, Directory Manager automatically approves the identity
store workflow request. However, if you approve the identity store workflow request first, Power
Automate doesn't automatically approve the flow.
:::

### Connect an Identity Store to Power Automate

To connect an identity store to Power Automate, you must configure a Power Automate client for that
identity store. This establishes a communication channel between the Directory Manager Data service
and the Power Automate platform.

:::note
Ensure that the Directory Manager server is deployed on a machine that is exposed over the Internet,
because Power Automate needs to communicate with the Directory Manager server to process requests.
Power Automate can't communicate with a server deployed on a machine behind NAT.
:::

**To configure a Power Automate client for an identity store:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Workflows** page, click the **Advanced Workflow Settings** tab.
5. In the **Power Automate Settings** section, click **Register Client**.
6. Enter the following information:

    - **Organization Code** - the unique name for the environment that stores your flows in Power
      Automate.
    - **Region** - the location of your environment.
    - **GroupID Data Service URL** - the URL of the Data service. Requests from Power Automate
      communicate with the Data service endpoint. The URL is as follows:
      `https://<GroupID server name>/<Data service name>`
      For example:
      https://powerautomate-netwrix1.msappproxy.net/directorymanagerdataservice
    - **Tenant ID** - the tenant ID assigned to the Directory Manager application when you
      registered it in Microsoft Entra Admin Center.
    - **Client ID** - the application ID assigned to the Directory Manager application when you
      registered it in Microsoft Entra Admin Center.

    :::note
    The Directory Manager application in Microsoft Entra Admin Center must have the following
    permissions for Power Automate:

    ![Microsoft Entra permissions required for the Directory Manager application to use Power Automate](/images/directorymanager/11.0/admincenter/workflow/pa_permissions.webp)
    :::

7. Click **Save** on the **Advanced Workflow Settings** page.

### Link an Identity Store Workflow to a Flow

To link an identity store workflow to a Power Automate flow, generate a flow template from an
identity store workflow and provide the URL of the flow in workflow settings. When the workflow
triggers, the linked flow triggers automatically.

**To link a workflow to a flow:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click the ellipsis button for a
   workflow and select **Edit**.
5. On the **Edit Workflow** page, click **Power Automate Settings** in the top right corner.
6. On the **Power Automate Settings** dialog box, provide the username and password of a Microsoft
   Entra ID account for managing flows in the Microsoft Power Automate portal. This account must
   have the following permissions on the Entra tenant:

    ![Microsoft Entra permissions required for the account that manages flows in Power Automate](/images/directorymanager/11.0/admincenter/workflow/pa_permissions.webp)

7. Click **Create Template**. Directory Manager creates a basic flow in Power Automate with the same
   name as the workflow, and displays the following message:

    ![Message confirming that Directory Manager created the flow template in Power Automate](/images/directorymanager/11.0/admincenter/workflow/pa_template_message.webp)

8. Next, copy the flow URL from Power Automate and provide it here. To copy the URL, do the
   following:

    1. Launch Power Automate and navigate to **Environments > GroupID application > My Flows**. This
       page displays the flow you created in Power Automate from the Directory Manager workflow.
    2. Hover the mouse over the flow to display the ellipsis button. Click it and select **Edit**.
    3. Expand the **Connections** area.

        ![Connections area of the flow in Power Automate](/images/directorymanager/11.0/admincenter/workflow/connections_area.webp)

    4. Click **Approvals** in the **Connections** area. Power Automate automatically adds the
       approver of the Directory Manager workflow here. Click **Save**.
    5. Expand the **When a HTTP request is received** area and copy the URL displayed for **HTTP
       POST URL**.

9. In Directory Manager, return to the workflow you are linking to the flow, and click **Configure a
   Request URL** on the **Power Automate Settings** dialog box.
10. Enter the copied HTTP POST URL in the **Request URL** box.
11. Click **Authenticate** and then **Save**.
12. Click **Update Workflow** on the **Edit Workflow** page to save the settings.
13. Click **Save** on the **Workflows** page.
14. Next, enable the linked flow in Power Automate. To do so:

    1. In Power Automate, navigate to **Environments > GroupID application > My Flows**. This page
       displays the flow you created in Power Automate from the Directory Manager workflow.
    2. Hover the mouse over the flow to display the ellipsis button. Click it and select **Turn
       on**.

**See Also**

- [Directory Manager Workflows Overview](/docs/directorymanager/11.0/signin/workflow/overview.md)
- [Create and Manage Workflows in Directory Manager](/docs/directorymanager/11.0/signin/workflow/implement.md)
- [Manage Advanced Workflow Settings in Directory Manager](/docs/directorymanager/11.0/signin/workflow/advancedsettings.md)
- [Configure Workflow Approver Acceleration in Directory Manager](/docs/directorymanager/11.0/signin/workflow/approveracceleration.md)
