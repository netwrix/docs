---
title: "Installation In Netwrix 1Secure Guide"
sidebar_label: "Installation"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Installation

Netwrix 1Secure is a cloud product. However, if you want to use an on-premise version, you need to
install an agent for collecting the data from your sources.

## Install Agent

This topic describes an installation of the agent for collecting the data from your sources. Prior
to installing the agent, ensure that all installation requirements have been met. See the
[Netwrix Cloud Agent Software Requirements](/docs/1secure/getting-started/requirements.md) topic for
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

![organization_cloudagent](/img/product_docs/1secure/install/organization_cloudagent.webp)

**Step 5 –** On the displayed Netwrix Cloud Agent Configuration screen, select Configure to
configure with Netwrix Cloud Agent.

![installagent_copyagent](/img/product_docs/1secure/install/installagent_copyagent.webp)

**Step 6 –** Go back to your Netwrix 1Secure configuration panel and copy the agent connection
details by selecting Copy Connection String. This information will be used for agent deployment.

![cloudagent_copyagent](/img/product_docs/1secure/install/cloudagent_copyagent.webp)

**Step 7 –** Paste the information in the Netwrix Cloud Agent Configuration that you copied earlier
and save settings.

**NOTE:** The agent status has changed to **Connected** (green).

**Step 8 –** Go back to the Netwrix 1Secure configuration panel and select **Retry connecting to the
client**. The agent status shall change to Healthy.

## Install the Agent

Follow the steps to install the agent.

**Step 1 –** Check the prerequisites.

**Step 2 –** Download the agent installer while adding the organization.

![organization_cloudagentsetup1](/img/product_docs/1secure/install/organization_cloudagentsetup1.webp)

**Step 3 –** Click **Next** to continue.

![installnetwrixcloudagent](/img/product_docs/1secure/install/installnetwrixcloudagent.webp)

**Step 4 –** Specify the installation folder and click **Next** to continue.

![installagentnetwrixcloudagentready](/img/product_docs/1secure/install/installagentnetwrixcloudagentready.webp)

**Step 5 –** Click **Install**. The agent starts the installation process.

![installagentnetwrixcloudagentinstalling](/img/product_docs/1secure/install/installagentnetwrixcloudagentinstalling.webp)

![installagentnetwrixcloudagentfinish](/img/product_docs/1secure/install/installagentnetwrixcloudagentfinish.webp)

**Step 6 –** Keep the **Launch Netwrix Cloud Agent Configuration** tool checkbox selected and click
Finish to complete the setup.
