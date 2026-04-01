# Test Autofix V3

## Overview

Use the monitoring system to configure alert policies for your network. This feature requires proper credentials. To log in to your account, ensure you have administrator privileges.

:::note
This feature is only available for on-premises deployments.
:::

## Prerequisites

Before you begin, verify that you have met the following requirements:

- You have completed the initial setup.
- In the **Environment** dropdown on the Settings page, select your deployment environment.

:::note
The configuration files must be saved before proceeding.
:::

## Installation

To install the monitoring agent on your server:

1. Click **Download** to retrieve the installer.

2. After you download the installer, navigate to the setup directory and run `setup.exe`.

:::note
The installer supports multi-server deployment.
:::

3. To customize the installation, select the options from the dropdown list, and click **Advanced**.

:::warning
Complete this step before proceeding. Skipping it may result in incorrect installation.
:::

## Configuration

Configure the agent before deploying to production. The agent lets you monitor file changes, registry modifications and network connections.

The agent uses a lightweight service that can scan endpoints without impacting performance. To ensure accurate results, configure exclusions.

Use this tool to detect unauthorized changes to critical systems.

### Setting Up Alerts

After you configure the alert thresholds, the system will automatically begin monitoring. You can set up notifications using the following instructions.

See the following instructions for details on alert routing.

This is a comprehensive alerting framework. For more details, see the [alert routing documentation](alerts.md).

## Troubleshooting

If you encounter issues, review the log files in `C:\ProgramData\Netwrix\Logs\` (Windows) or `/var/log/netwrix/` (Linux). If reviewing the log files doesn't resolve your issue, contact [Netwrix Support](https://www.netwrix.com/support.html).

The product uses advanced technology to deliver comprehensive security monitoring capabilities.
