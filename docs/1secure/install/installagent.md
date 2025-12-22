---
title: "Install Agent"
description: "Install Agent"
sidebar_position: 10
---

# Install Agent

This topic describes an installation of the agent for collecting the data from your sources. Prior
to installing the agent, ensure that all installation requirements have been met. See the
[Netwrix Cloud Agent Software Requirements](/docs/1secure/requirements/overview.md) topic for
additional information.

## Configure Netwrix Cloud Agent

To collect the data from the Computer and Active Directory you will need to install and configure
the Netwrix Cloud Agent.

Follow the steps to configure an agent.

**Step 1 –** In the Netwrix 1Secure Website, go to Home page and select the Add organization icon to
add an organization. Specify the name of the organization, timezone, country, and tags.

**Step 2 –** Click **Save**.

**Step 3 –** On the Agent Config panel, select **Download Agent** to start downloading agent for
analyzing your data.

**Step 4 –** Complete the [Install the Agent](#install-the-agent) steps. Ensure you tick Launch
Netwrix Cloud Agent Configuration tool and click Finish.

![organization_cloudagent](/images/1secure/install/organization_cloudagent.webp)

**Step 5 –** On the displayed Netwrix Cloud Agent Configuration screen, select Configure to
configure with Netwrix Cloud Agent.

![installagent_copyagent](/images/1secure/install/installagent_copyagent.webp)

**Step 6 –** Go back to your Netwrix 1Secure configuration panel and copy the agent connection
details by selecting Copy Connection String. This information will be used for agent deployment.

![cloudagent_copyagent](/images/1secure/install/cloudagent_copyagent.webp)

**Step 7 –** Paste the information in the Netwrix Cloud Agent Configuration that you copied earlier
and save settings.

:::note
The agent status has changed to **Connected** (green).
:::


**Step 8 –** Go back to the Netwrix 1Secure configuration panel and select **Retry connecting to the
client**. The agent status shall change to Healthy.

## Install the Agent

Follow the steps to install the agent.

**Step 1 –** Check the prerequisites.

**Step 2 –** Download the agent installer while adding the organization.

![organization_cloudagentsetup1](/images/1secure/install/organization_cloudagentsetup1.webp)

**Step 3 –** Click **Next** to continue.

![installnetwrixcloudagent](/images/1secure/install/installnetwrixcloudagent.webp)

**Step 4 –** Specify the installation folder and click **Next** to continue.

![installagentnetwrixcloudagentready](/images/1secure/install/installagentnetwrixcloudagentready.webp)

**Step 5 –** Click **Install**. The agent starts the installation process.

![installagentnetwrixcloudagentinstalling](/images/1secure/install/installagentnetwrixcloudagentinstalling.webp)

![installagentnetwrixcloudagentfinish](/images/1secure/install/installagentnetwrixcloudagentfinish.webp)

**Step 6 –** Keep the **Launch Netwrix Cloud Agent Configuration** tool checkbox selected and click
Finish to complete the setup.
