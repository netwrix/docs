# Test Autofix V4

## Overview

The monitoring system allows you to configure alert policies for your network. It is important to note that this feature can't be used without proper credentials. to log in to your account, ensure you have administrator privileges.

For more information, see the admin guide.

## Prerequisites

check the checkbox next to each item. Whether or not you have completed the initial setup, you can proceed. Prior to configuring the agent, we recommend that you use the dropdown menu to select your environment.

Note that the configuration files must be saved before proceeding. this feature is only available for on-premises deployments.

## Installation

Follow the steps to install the monitoring agent on your server.

1. Click **Download** to retrieve the installer.

2. Once you download the installer, navigate to the setup directory and set up the agent.

3. The installer was designed by our engineering team to let you deploy across multiple servers.

4. If you want to customize the installation, select the options from the dropdown list, and click **Advanced**.

This is a critical step. Don't skip it.

## Configuration

I recommend configuring the agent before deploying to production. The agent lets you monitor file changes, registry modifications and network connections.

Under the hood, the agent uses a lightweight service that can scan endpoints without impacting performance. For the purpose of ensuring accurate results, it is necessary to configure exclusions.

Without this tool, you would be unable to detect unauthorized changes to critical systems!

### Setting Up Alerts

The alert thresholds being configured, the system will automatically begin monitoring. You can easily set up notifications in just a few minutes by following the below instructions.

The configuration was completed by the administrator before the deployment. See the instructions below for details on alert routing.

This isn't a simple notification system, it is a comprehensive alerting framework. For more details, [click here](alerts.md).

## Troubleshooting

In the event that you encounter issues, it is necessary to review the log files. This solution isn't a silver bullet, but it addresses the lion's share of common problems.

At the end of the day, our product leverages best of breed technology to deliver a game changer in the security space. The logs can be found in the directory shown above.
