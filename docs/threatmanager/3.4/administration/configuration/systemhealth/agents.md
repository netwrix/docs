---
title: "Agents"
description: "Agents"
sidebar_position: 30
---

# Agents

The Agents Overview reports which Threat Prevention agents have successfully sent events to Threat
Manager. This requires a minimum version of Threat Prevention 7.5. This section may be used to
troubleshoot or diagnose agent issues, because it shows the connectivity of the Threat Prevention agent
to the Threat Manager server.

![System Health Page Agent Overview](/images/threatmanager/3.0/administration/configuration/systemhealth/agentoverview.webp)

Clicking **Decommission** will remove an agent from the Threat Manager agent list.

If an active agent has not contacted the Threat Manager server for 10 minutes, it goes
into offline mode. This will generate an alert in Threat Manager. If an agent becomes
unresponsive, a magenta alert banner displays just under the navigation header.
