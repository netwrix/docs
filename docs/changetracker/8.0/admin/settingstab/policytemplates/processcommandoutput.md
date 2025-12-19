---
title: "Policy Templates: Process/Command Output"
description: "Policy Templates: Process/Command Output"
sidebar_position: 110
---

# Policy Templates: Process/Command Output

Where required, Netwrix Change Tracker can also execute commands on the endpoint device. Note that
commands must be pre-approved for usage. All standard commands employed within Change Tracker
Compliance Reports and the built-in Policy Templates are pre-approved but if you add any new
commands these may require Admin approval. See the
[Allowed Commands](/docs/changetracker/8.0/admin/settingstab/allowedcommands.md)
topic for additional information.

- **Agent-Based Monitoring** – Where an Agent is being used for monitoring the commands will be
  executed directly by the Agent and the initial baseline stored in the local Agent database, with
  any subsequent changes detected being reported back to the Hub. The commands will be run using
  whichever service account has been assigned to it. When run on Windows any commands are run from
  the standard Windows\System32 shell and therefore may require a full executable path to be
  specified e.g.

cmd /C %systemroot%\system32\inetsrv\appcmd list VDIR /text:VDIR.NAME

![ProcessCommandOutput](/images/changetracker/8.0/admin/settings/policytemplates/processcommandoutput.webp)

- Commands will be executed indirectly by the **Master Proxy Agent** being used and the initial
  baseline stored in the **Proxy Agent** database, with any subsequent changes detected being
  reported back to the Hub. The commands will be run using whichever service account has been used
  in the assigned **Credentials**.

![ProcessCommandOutputCredentials](/images/changetracker/8.0/admin/settings/policytemplates/processcommandoutputcredentials.webp)

- **Use of RegEx** – Whether using Agent-based or Agentless Command Output Trackers, a Regular
  Expression can be applied to the command output to filter/match specific keywords/patterns. Note
  that any device-offered RegEx capabilities e.g. egrep on Linux, can still be used instead of or to
  complement the Agent regex applied.

The Agent will only trust a signed **Configuration Template** issued from its assigned Hub. Please
contact [Netwrix Support](https://www.netwrix.com/support.html) for additional information.
