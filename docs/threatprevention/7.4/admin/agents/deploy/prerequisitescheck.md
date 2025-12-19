---
title: "Prerequisites Check Window"
description: "Prerequisites Check Window"
sidebar_position: 30
---

# Prerequisites Check Window

The Deploy Agents wizard's Prerequisites Check window is the third in a sequence of four windows to
deploy the Agent on a computer. On this window, Threat Prevention checks if the provided credentials
successfully allow Agent deployment.

![Deploy Agents wizard – Prerequisites Check page](/images/threatprevention/7.4/admin/agents/deploy/prerequisitescheck.webp)

After the check is run, the status registers as either Success or Failed. Select a host to view the
full message in the box at the bottom of the window.

- Failed – Read the failure message and either click **Back** to provide new credentials or click
  **Finish** to close the window and ensure any error messages are taken care of prior to next
  attempt
- Success – Click **Next** to install the Agent
- If some but not all items fail, you can click **Next** to deploy the Agent on those where access
  verification was successful

In addition to confirming access, Threat Prevention also verifies if the target machine has the
minimum .NET Framework version needed by the Agent already installed; else the deployment fails.

See the
[Installing Window ](/docs/threatprevention/7.4/admin/agents/deploy/installing.md)topic
for the next step.
