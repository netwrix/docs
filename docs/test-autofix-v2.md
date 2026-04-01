# Test Autofix V2

## Overview

Use the monitoring system to configure alert policies for your network. This feature requires proper credentials. To log in to your account, ensure you have administrator privileges.

See [Netwrix Auditor Administration Guide](link) for details on configuring alert policies.

## Prerequisites

Before you begin, verify that you have:

- Completed the initial setup
- Administrator credentials for the target environment

:::note
The configuration files must be saved before proceeding. This feature is only available for on-premises deployments.
:::

## Installation

Install the monitoring agent on your server.

1. Click **Download** to retrieve the installer.

2. After you download the installer, navigate to `C:\Netwrix\Setup\` and run `setup.exe`.

3. Select the servers to deploy the agent to.

4. If you want to customize the installation, select the options from the dropdown list, and click **Advanced**.

   :::warning
   Complete step 4 before proceeding to configuration. Skipping this step may result in an incomplete installation.
   :::

## Configuration

Use the dropdown menu to select your environment. Configure the agent before deploying to production. The agent lets you monitor file changes, registry modifications, and network connections.

The agent uses a lightweight service that can scan endpoints without impacting performance. To ensure accurate results, configure exclusions. See [Configure exclusions](link) for instructions.

Use Netwrix Auditor to detect unauthorized changes to critical systems.

### Setting Up Alerts

After you configure the alert thresholds, the system will automatically begin monitoring. To set up notifications, see [Configure notifications](link).

Complete the configuration before deploying to production. See [Configure alert routing](link) for details on alert routing.

This is a comprehensive alerting framework. See [alert configuration details](alerts.md).

## Troubleshooting

If you encounter issues, review the log files at `C:\ProgramData\Netwrix\Logs\`. This solution does not resolve every problem, but it addresses most common problems. For additional support, contact [Netwrix Support](link).

Netwrix Auditor captures and correlates event data across file systems, Active Directory, and network devices.
