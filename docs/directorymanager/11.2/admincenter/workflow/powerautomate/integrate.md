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

- **Trigger a flow from Directory Manager** - To do this, you must link a workflow in an
  identity store to a Power Automate flow. When the Directory Manager workflow triggers, the
  linked flow triggers automatically.

## Trigger a Flow from Directory Manager

You can link a workflow in an identity store to a flow. You can link both system and user-defined
workflows to flows.

- As a one-time process, connect your identity store to Microsoft Power Automate. See the
  [Connect an Identity Store to Power Automate](#connect-an-identity-store-to-power-automate) topic.
- Link a workflow to a flow by providing the URL of that flow in the workflow. See the
  [Link an Identity Store Workflow to a Flow](#link-an-identity-store-workflow-to-a-flow) topic.

As a result, when the identity store workflow triggers, the linked flow triggers automatically.

:::note
When you approve the flow in Power Automate, Directory Manager automatically approves the
identity store workflow request. However, if you approve the identity store workflow request
first, Power Automate doesn't automatically approve the flow.
:::


### Before you begin

1. Check the SSL certificate for the Power Automate Reverse Proxy and ensure it's valid and issued by a
   publicly trusted CA, as Power Automate runs in Microsoft's cloud and validates the proxy's TLS
   certificate against the Microsoft Trusted Root Program. Power Automate silently rejects
   certificates from internal or private CAs.
2. Ensure that the Power Automate Reverse Proxy is deployed on the same machine as Directory Manager. If
   not, [install the Power Automate Reverse Proxy](installproxy.md) before proceeding.


### Connect an Identity Store to Power Automate

To connect an identity store to Power Automate, you must configure a Power Automate client for that
identity store. This establishes a communication channel between the Directory Manager Data
service and the Power Automate platform.

**To configure a Power Automate client for an identity store:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Workflows** page, click the **Advanced Workflow Settings** tab.
5. In the **Power Automate Settings** section, click **Register Client**.
6. Enter the following information:

    - **Organization Code** - the unique name for the environment that stores your flows in Power
      Automate (the segment before the first period; for example, myorg in myorg.crm.dynamics.com).
    - **Region** - the location of your environment (the segment before the second period;
      for example, crm in myorg.crm.dynamics.com).
    - **Tenant ID** - the tenant ID assigned to the Directory Manager application when you
      registered it in Microsoft Entra Admin Center.
    - **Client ID** - the application ID assigned to the Directory Manager application when you
      registered it in Microsoft Entra Admin Center.
    - **Client Secret** - the client secret value for the Directory Manager application when you
      registered it in Microsoft Entra Admin Center.

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
6. Click **Create Template**. Directory Manager creates a basic flow in Power Automate with the same
   name as the workflow, and displays the following message:

    ![Message confirming that Directory Manager created the flow template in Power Automate](/images/directorymanager/11.2/admincenter/workflow/pa_template_message.webp)

7. Next, copy the flow URL from Power Automate and provide it here. To copy the URL,
   do the following:

    1. Launch Power Automate, choose your environment, and navigate to **My Flows**. This page displays the 
       flow you created in Power Automate from the Directory Manager workflow.
    2. Hover the mouse over the flow to display the ellipsis button. Click it and select **Edit**.

    ![Power Automate flow editor showing the Manual and Start and wait for an approval areas](/images/directorymanager/11.2/admincenter/workflow/connections_area.webp)

    3. Expand the **Manual** area and set **Who can trigger the flow**.
    4. Expand the **Start and wait for an approval** area and set up a new connection field, signing in with your Microsoft account when prompted. Click **Save**.
    5. Navigate back to the **Edit** window. Expand the **Manual** area and copy the URL displayed for **HTTP URL**.

8. In Directory Manager, return to the workflow you are linking to the flow, and click
   **Configure Request URL** on the **Power Automate Settings** dialog box.
9. Enter the copied HTTP URL in the **Request URL** box.
10. Close the **Power Automate Settings** dialog box.
11. Click **Update Workflow** on the **Edit Workflow** page to save the settings.
12. Click **Save** on the **Workflows** page.
13. Next, enable the linked flow in Power Automate. To do so:

    1. In Power Automate, choose your environment and navigate to **My Flows**. This page
       displays the flow you created in Power Automate from the Directory Manager workflow.
    2. Hover the mouse over the flow to display the ellipsis button. Click it and select **Turn
       on**.
