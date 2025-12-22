---
title: "Trace Logs"
description: "Trace Logs"
sidebar_position: 20
---

# Trace Logs

While activity agents store activity logs on the servers where they are deployed, the Activity
Monitor creates Trace Logs that aid in troubleshooting issues. The Trace level option set in the
drop-down list in the lower right corner of the Activity Monitor Console determines the kind of
information kept in the activity agent and monitored hosts logs.

![Activity Monitor with location of trace logs](/images/activitymonitor/7.1/troubleshooting/tracelogs.webp)

The selected log level applies to all hosts added to the **Agents** list (if not specified in agent
properties). Select from the following trace log levels:

- Trace – Records everything that happens, most verbose level of logging
- Debug – Records all debug messages, in addition to info messages
- Info – Records information on the steps that occur, in addition to warn messages, and is the
  recommended setting
- Warning – Records all warnings that occur, in addition to error messages
- Error – Records all errors that occur, in addition to fatal messages
- Fatal – Records only when catastrophic system failures / crashes occur

When the log level is changed in the Activity Monitor Console, the new log level is propagated and
applied immediately to all of the activity agents that do not have custom trace setting.

:::note
Trace level can be adjusted in the Agent Properties for the selected agent. See the
[Archiving Tab](/docs/activitymonitor/7.1/admin/agents/properties/archiving.md)
topic for additional information.
:::


![Collect Logs button](/images/activitymonitor/7.1/troubleshooting/collectlogsbutton.webp)

The Activity Monitor Console has a function to copy Trace Logs from the activity agents to the
Console machine. Click the Collect Logs button to open the log collection dialog and select Start to
begin the log collection.

![Copying the log files popup window](/images/activitymonitor/7.1/troubleshooting/collectlogswindow.webp)

Specific agents or console can be selected. After log collection is successful the logs are
compressed into a zip file and file explorer opens with the zip file selected.
