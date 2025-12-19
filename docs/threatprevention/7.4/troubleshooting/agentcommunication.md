---
title: "Agent Not Communicating with the Enterprise Manager"
description: "Agent Not Communicating with the Enterprise Manager"
sidebar_position: 10
---

# Agent Not Communicating with the Enterprise Manager

If the Agent is not communicating with the Enterprise Manager, the following questions should be
addressed:

- Is there a firewall blocking communication?

  - If yes, ensure the Windows Firewall has an ‘inbound’ rule to open port 3136 and an ‘outbound’
    rule to open port 3136.
  - Alternatively, have an ‘inbound’ rule to ‘allow connection’ (General tab) for the Agent,
    (default path is `…\Netwrix\Threat Prevention\SIWindowsAgent\SIWindowsAgent.exe`) specified on
    the **Program and Services** tab along with selecting the **This Program** radio button.

- Does the server where the Agent has been deployed have multiple network adapters (multi-homed)?

  - If yes, then the Agent is likely trying to communicate with the Enterprise Manager through the
    wrong network. See the [Bind To](#bind-to) topic to resolve this issue.

Please contact [Netwrix Support](https://www.netwrix.com/support.html) if these recommendations do
not resolve the issue.

## Bind To

For the Agent to communicate in a multiple network card environment, the ‘… bindTo …’ line in the
`SIWindowsAgent.exe.config` file needs to be uncommented and set to the IP address associated with
the desired local (to Agent) network adapter or the name of the desired network adapter that is to
be used to communicate with the Enterprise Manager. The installer will attempt to configure this
setting if it detects multiple NICs. If the chosen setting does not work in the environment, it may
need to be set manually.

The default location of the `SIWindowsAgent.exe.config` file is:

**…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent**
