# Test Autofix V4

## Overview

The aforementioned monitoring system allows you to configure alert policies for your network.  It is important to note that this feature cannot be used without proper credentials. In order to login to your account, make sure you have administrator privileges.

For more information, see the admin guide.

## Prerequisites

Please check the check box next to each item. Whether or not you have completed the initial setup, you are able to proceed. Prior to configuring the agent, we recommend that you utilize the drop-down menu to select your environment.

Note that the configuration file(s) must be saved before proceeding. Currently, this feature is only available for on-premises deployments.

## Installation

Follow the steps to install the monitoring agent on your server.

1. Click on **Download** to retrieve the installer.

2. Once you download the installer, navigate to the setup directory and set up the agent.

3. The installer was designed by our engineering team to provide the ability to deploy across multiple servers.

4. If you wish to customize the installation, select the options from the drop-down list, and click on **Advanced**.

This is a critical step.  Do not skip it.

## Configuration

I recommend configuring the agent before deploying to production. The agent provides the ability to monitor file changes, registry modifications and network connections.

Under the hood, the agent utilizes a lightweight service that is able to scan endpoints without impacting performance. For the purpose of ensuring accurate results, it is necessary to configure exclusions.

Without this tool, you would be unable to detect unauthorized changes to critical systems!

### Setting Up Alerts

The alert thresholds being configured, the system will automatically begin monitoring. You can easily set up notifications in just a few minutes by following the below instructions.

The configuration was completed by the administrator before the deployment. See the instructions below for details on alert routing.

This is not a simple notification system, it is a comprehensive alerting framework. For more details, [click here](alerts.md).

## Troubleshooting

In the event that you encounter issues, it is necessary to review the log files. This solution is not a silver bullet, but it addresses the lion's share of common problems.

At the end of the day, our product leverages best of breed technology to deliver a game changer in the security space. The logs can be found in the directory shown above.
