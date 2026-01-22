---
description: >-
  This article addresses the issue of the Threat Prevent Agent being unresponsive on a Domain Controller and provides steps to resolve the installation failure due to an existing agent.
keywords:
  - Threat Prevent Agent
  - installation failure
  - Domain Controller
sidebar_label: Agent Not Detected
tags: []
title: "Agent Not Detected and Reinstallation Fails With Error: Agent Is Already Installed"
knowledge_article_id: kA0Qk0000002dbZKAQ
products:
  - threat-prevention
---

# Agent Not Detected and Reinstallation Fails With Error: Agent Is Already Installed

## Related Query

- "I have an Agent on one DC that is unresponsive. The Agent is installed. However, the Netwrix Threat Prevent Agents screen shows **No Agent**. When I try to reinstall the Agent via the Threat Prevent interface, I get a message that says it **Failed because the Agent is already installed.**"

## Symptoms

- The Threat Prevent Agent on a Domain Controller is unresponsive.
- The Threat Prevent Agent's interface displays **No Agent** for the affected server.
- Attempts to reinstall the agent via the Threat Prevent interface fail with the message: `Failed because the Agent is already installed`.

## Causes

- An older version of the Threat Prevent Agent (e.g., 7.4) remains installed on the server, causing a version conflict.
- Residual configuration files, such as those in the `CertsInfo` folder, may prevent proper detection or reinstallation of the Agent.

## Resolution

1. Open **Programs and Features** (`appwiz.cpl`) on the affected server.
2. Manually uninstall any older versions of the Threat Prevent Agent (e.g., version 7.4) that are still listed.
3. Navigate to the Agent installation directory, typically `C:\Program Files\Netwrix\Netwrix Threat Prevention\SIWindowsAgent`.
4. Rename the **CertsInfo** folder to **CertsInfo_old** or another unique name.
5. Return to the Threat Prevent console and push the latest Agent version (e.g., 7.5.0.188) to the server.

> **IMPORTANT:** Renaming the **CertsInfo** folder ensures that any corrupted or outdated certificate information does not interfere with the new Agent installation. Upon successful installation, you can delete the renamed folder as it is no longer necessary.