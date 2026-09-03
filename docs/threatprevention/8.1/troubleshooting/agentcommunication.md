---
title: "Agent Not Communicating with the Enterprise Manager"
description: "Agent Not Communicating with the Enterprise Manager"
sidebar_position: 10
---

# Agent Not Communicating with the Enterprise Manager

If the Agent isn't communicating with the Enterprise Manager, the following questions should be
addressed:

- Is there a firewall blocking communication?

  - If yes, ensure the Windows Firewall has an ‘inbound’ rule to open port 3136 and an ‘outbound’
    rule to open port 3136.
  - Alternatively, have an ‘inbound’ rule to ‘allow connection’ (General tab) for the Agent,
    (default path is `…\Netwrix\Threat Prevention\SIWindowsAgent\SIWindowsAgent.exe`) specified on
    the **Program and Services** tab along with selecting the **This Program** radio button.

- Does the server where the Agent has been deployed have multiple network adapters (multi-homed)?

  - If yes, then the Agent is likely trying to communicate with the Enterprise Manager through the
    wrong network. See the Bind To topic to resolve this issue.

contact [Netwrix Support](https://www.netwrix.com/support.html) if these recommendations do
not resolve the issue.

## Bind To

For the Agent to communicate in a multiple network card environment, you must uncomment the
‘… bindTo …’ line in the `SIWindowsAgent.exe.config` file and set it to the IP address associated
with the local (to Agent) network adapter you want, or to the name of that adapter, which
communicates with the Enterprise Manager. The installer will attempt to configure this
setting if it detects multiple NICs. If the chosen setting doesn't work in the environment, you may
need to set it manually.

The default location of the `SIWindowsAgent.exe.config` file is:

**…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent**
