---
title: "Log Level Configuration Window"
description: "Log Level Configuration Window"
sidebar_position: 40
---

# Log Level Configuration Window

The Log Level Configuration window displays the current log levels for the Agents, Enterprise
Manager, and Administration Console. It also enables you to set new log levels.

:::note
Since Threat Prevention supports multiple instances of the Administration Console, each
instance has its own settings for log levels. Changing the settings only affect the respective
console instance. The Enterprise Manager and Agent log settings are global - the most recent changes
made from any console instance apply.
:::


Follow the steps to set log levels.

**Step 1 –** Click **Agents** in the left pane to launch the Agents interface. Then click **Update
Logging Levels** on the top bar to launch the Log Level Configuration window.

![Log Level Configuration Window](/images/threatprevention/7.5/admin/agents/window/loglevelconfiguration.webp)

**Step 2 –** To update the logging level for an Agent:

- The Active Agent List data grid lists the active Agents with the following information:

  - Platform – Operating system platform for the machine where the Agent is deployed, for example,
    Windows
  - Domain – Targeted Active Directory domain
  - Machine Name – Server where the Agent is deployed
  - Agent Address – IP address of the server where the Agent is deployed
  - Version – Agent build version
  - Log Level – The current log level set for the Agent

- Select an Agent in the data grid and choose a new log level from the New Agent Log Level dropdown
  menu. Then click Update Log Levels to assign the log level to the Agent. Available file log levels
  are:

  - Debug – Records everything that happens, most verbose level of logging
  - Info – Records information about individual APIs called, in addition to warnings and errors
  - Warn – Records all warnings that occur, in addition to errors
  - Error – Records all errors that occur
  - Fatal – Records only when catastrophic system failures/crashes occur

  No matter what log level is selected, the logs have a maximum cap size of 55 MB. When a log file
  reaches 50 MB, it is closed and a new file is started. No more than ten closed files (50 MB) are
  kept. When the eleventh file reaches 50 MB, the oldest closed file is overwritten.

**Step 3 –** To update the logging level for Enterprise Manager and the Administration Console:

- Current Level – The current log level set for the Enterprise Manager / Administration Console
- New Level – Use the dropdown menu to select a new log level.Then click Update Log Levels to assign
  the new log level to the Enterprise Manager / Administration Console.
- Build – The build of the Enterprise Manager / Administration Console. The builds may differ in
  rare scenarios.
- Time Stamp – The date and time when the Enterprise Manager / Administration Console build was last
  updated

**Step 4 –** Click **Close** to close the window.

## Access Agent Log Files

Follow the steps to access the Agent log files.

![Get Agent Log icon](/images/threatprevention/7.5/admin/agents/window/getagentlog.webp)

**Step 1 –** Click **Agents** in the left pane to launch the Agents interface. Select a server/Agent
and click **Get Agent Log** .

![Save As window for Agent logs](/images/threatprevention/7.5/admin/agents/window/saveaswindow.webp)

**Step 2 –** The Save As window opens with the selected Agent’s log already selected from its
original location. Select the new location and click **Save**.

You can now view a copy of the log file without navigating to its location on the machine where the
Agent is deployed.

## Access the Enterprise Manager & Administration Console Log Files

The Enterprise Manager log files are stored on the Threat Prevention server while the Administration
Console log files are stored on the machine where the respective console is installed.

Log files are stored in the following locations:

**Enterprise Manager Log Files**

![Enterprise Manager Log File Location](/images/threatprevention/7.5/admin/agents/window/emlogs.webp)

The default location is:

**…\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\logs\**

Administration Console Log Files

![Administration Console Log File Location](/images/threatprevention/7.5/admin/agents/window/consolelogs.webp)

The default location is:

**…\Netwrix\Netwrix Threat Prevention\SIWinConsole\logs\**

:::note
Log files for a remote instance of the Administration Console are available at the same
location on the respective machine.

:::
