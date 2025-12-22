---
title: "Advanced Configuration"
description: "Advanced Configuration"
sidebar_position: 20
---

# Advanced Configuration

## Advanced Prompt Configuration – Using RegEx

RegEx can be used to define the Prompts. By default, if any of the Prompt strings defined in the
Credentials key match any part of a prompt displayed by the monitored device, this will be treated
as a full prompt and the next step in the Logon script will be progressed.

However, more complex Regular Expression based prompts can be defined to ‘wildcard’ sections of the
prompt and to more precisely define the Prompt with a new line prefix for instances where a simple
prompt (e.g. a single > or $) may appear elsewhere in the data being tracked, triggering an early
termination of the tracking operation.

![AgentlessScriptAdvConfigRegEx](/images/changetracker/8.0/admin/agentlessscript/agentlessscriptadvconfigregex.webp)

This prompt definition matches a sequence of ‘new line’’any characters’’-1700>’. Please contact
[Netwrix Support](https://www.netwrix.com/support.html) if you have any challenging prompt or logon
script issues.
