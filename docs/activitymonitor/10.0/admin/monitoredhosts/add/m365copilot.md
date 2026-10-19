---
title: "Microsoft 365 Copilot"
description: "Microsoft 365 Copilot"
sidebar_position: 65
---

# Microsoft 365 Copilot

The Activity Monitor can be configured to monitor Microsoft 365 Copilot interaction events,
reporting resources accessed while users interact with Copilot.

Before adding a Microsoft 365 Copilot host to the Activity Monitor, the prerequisites for the
target environment must be met. See the
[Microsoft 365 Copilot Activity Auditing Configuration](/docs/activitymonitor/10.0/requirements/activityagent/m365copilot-activity.md)
topic for additional information.

:::tip
Remember, the Activity Agent must be deployed to a Windows server that acts as a proxy for
monitoring the target environment.
:::


## Add Microsoft 365 Copilot Host

**Step 1 –** In the Activity Monitor, go to the Monitored Hosts & Services tab and click **Add**.
The Add New Host or Service window opens.

**Step 2 –** On the Choose Agent page, select the Agent to monitor Microsoft 365 Copilot. Click
**Next**.

**Step 3 –** On the Choose Event Source Type page, select the **Microsoft 365 Copilot** radio
button and enter the tenant domain name.

_(Optional)_ Enter a comment for the host.

Click **Next**.

**Step 4 –** On the Azure AD / Entra ID Connection page, configure the following options:

- Domain – Displays the tenant domain name entered in the previous step.
- Azure Cloud – Select the Azure cloud environment from the dropdown menu.
- Tenant ID – Auto-populated from the domain entered.
- Client ID – Enter the Client ID for the registered application.
- Client Secret – Enter the Client Secret for the registered application.
- Region – (Optional) Enter the region.
- Certificate – Click **Open agent certificate location** to locate the agent certificate file.
  Upload this certificate to the registered application in Microsoft Entra ID.

Click **Open Instruction...** for steps on registering the Activity Monitor with Microsoft Entra ID,
uploading the agent certificate, and granting the required permissions.

Click **Connect** to verify the connection. Click **Next**.

**Step 5 –** Complete the wizard by configuring the output options. See the
[Output for Monitored Hosts](/docs/activitymonitor/10.0/admin/monitoredhosts/output/output.md) topic
for additional information.

The Microsoft 365 Copilot host appears in the monitored hosts/services table.

## Host Properties for Microsoft 365 Copilot

To edit configuration settings, select the host and open its Properties window. The configurable
host properties are:

- [Connection Tab](/docs/activitymonitor/10.0/admin/monitoredhosts/properties/connection.md)
- [Inactivity Alerts Tab](/docs/activitymonitor/10.0/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/activitymonitor/10.0/admin/monitoredhosts/properties/overview.md)
topic for additional information.
