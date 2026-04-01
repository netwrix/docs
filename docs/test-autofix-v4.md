# Test Autofix V4

## Overview

The monitoring agent lets you configure alert policies and track security events across your network.

:::note
This feature requires proper credentials. To log in to your account, ensure you have administrator privileges.
:::

For configuration details, see the *Netwrix Administration Guide*.

## Prerequisites

Check the checkbox next to each item. Complete the initial setup described in the *Netwrix Installation Guide* before proceeding. Before configuring the agent, use the dropdown menu to select your environment.

:::note
Save the configuration files before proceeding. This feature is only available for on-premises deployments.
:::

## Installation

Install the monitoring agent on your server.

1. Click **Download** to retrieve the installer.

2. After you download the installer, navigate to the setup directory and set up the agent.

3. Select the target servers when prompted, then click **Next**.

4. If you want to customize the installation, select the options from the dropdown list, and click **Advanced**.

:::warning
Complete all installation steps before proceeding. Skipping steps may cause configuration errors.
:::

## Configuration

Configure the agent before deploying to production. The agent lets you monitor file changes, registry modifications and network connections.

Internally, the agent uses a lightweight service that can scan endpoints without impacting performance. To ensure accurate results, configure exclusions.

This agent detects unauthorized changes to critical systems.

### Setting Up Alerts

After you configure the alert thresholds, the system automatically begins monitoring.

An administrator must complete the configuration before deployment.

:::note
For step-by-step alert routing instructions, see [Alert Configuration](alerts.md).
:::

## Troubleshooting

If you encounter issues, review the log files. This solution isn't a guaranteed fix for all problems, but it addresses most common problems.

Ultimately, the product uses leading technology to deliver significant advancements in the security space. Find the logs in the directory configured during installation.
