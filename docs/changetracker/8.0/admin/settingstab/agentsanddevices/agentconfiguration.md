---
title: "Agent Configuration"
description: "Agent Configuration"
sidebar_position: 20
---

# Agent Configuration

There are multiple ways to set values in an agent's configuration file on installation. Once an
agent has been configured and has successfully registered with the Hub, its configuration can be
managed remotely with the Agent Updates tab.See the
[Agent Installation](/docs/changetracker/8.0/install/agent/overview.md)
topic for additional information.

Follow these steps to update the agent hub configuration.

**Step 1 –** Select **Agent Updates** from the Settings menu and then click **Actions** on the page
that loads to display the options for Upload an Agent Update andUpdateHubDetails. HubDetails is the
name of the config file used for agents.

![remoteagentconfig](/images/changetracker/8.0/admin/settings/remoteagentconfig.webp)

**Step 2 –** Select **Update HubDetails** to open the Update agent hub details window.

![remoteagentconfigsettings](/images/changetracker/8.0/admin/settings/remoteagentconfigsettings.webp)

**Step 3 –** Select the devices or groups of devices to configure and then enter the desired values.

:::warning
Altering the URL could cause the agent to be unable to communicate with the Hub and
require direct manual intervention to resolve.
:::


:::warning
Altering the agent username or password could cause the agent to be unable to
communicate with the Hub if a matching user account does not exist. This too would require direct
manual intervention to resolve.
:::


:::warning
Altering the username or password of the user account used by any agent will render
those agents incapable of communicating with the Hub. A corrective password will not be able to be
broadcast to the now offline agents. Direct manual intervention would be required to resolve.
:::


For most fields, leaving a blank value will ensure that the current values for those fields in the
target agent's configuration files will remain as they are. Leaving the Name prefix field blank will
remove any existing prefix for the target devices.

**Step 4 –** Click **OK** to broadcast the new configuration to the agents on the target devices.

![broadcastagentconfig](/images/changetracker/8.0/admin/settings/broadcastagentconfig.webp)

This should take less than a minute to apply.
