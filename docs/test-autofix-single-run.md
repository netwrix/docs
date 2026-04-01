# Test Autofix Single Run

## Overview

Use the monitoring system to configure alert policies for your network.

:::note
This feature can't be used without proper credentials.
:::

See the [Admin Guide](admin-guide.md) for configuration details and available options.

## Prerequisites

- You have administrator privileges and valid credentials.
- You have completed the initial setup.
- You have selected your environment from the dropdown menu.

:::note
Save the configuration files before proceeding. This feature is only available for on-premises deployments.
:::

## Installation

Install the monitoring agent on your server.

1. Click **Download** to retrieve the installer.

2. After you download the installer, navigate to the setup directory and set up the agent.

3. If you want to customize the installation, select the options from the dropdown list, and click **Advanced**.

   :::note
   This step is required. If you skip it, the agent will not deploy correctly.
   :::

## Configuration

Configure the agent before deploying to production. The agent lets you monitor file changes, registry modifications and network connections.

The agent uses a lightweight service that can scan endpoints without impacting performance. To ensure accurate results, configure exclusions.

This tool detects unauthorized changes to critical systems.

### Set Up Alerts

After you configure the alert thresholds, the system will automatically begin monitoring. You can set up notifications in just a few minutes by following these instructions.

Complete the configuration before you deploy. For details on alert routing and notifications, see [Configuring Alerts](alerts.md).

## Troubleshooting

If you encounter issues, review the log files.

The logs are in `C:\ProgramData\Netwrix\Logs\` (Windows) or `/var/log/netwrix/` (Linux).
