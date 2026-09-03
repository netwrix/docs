---
title: "Actions Tab"
description: "Actions Tab"
sidebar_position: 30
---

# Actions Tab

The Actions tab lets you configure various responses, or event consumers, to the event data a policy
captures.

![Policies - Actions tab](/images/threatprevention/7.5/admin/policies/actions/actionstab.webp)

The following types of actions are available:

- Send to Events DB – Logs events to the event database for reporting, using the built-in database
  event consumer
- Send to SIEM – Sends formatted messages to a SIEM server as configured in a profile
- Send to Netwrix Threat Manager – Sends data for this policy to Netwrix Threat Manager, formerly
  StealthDEFEND
- Email Notifications – Sends formatted email notifications to the selected message profile
- Add Custom Scripts

  - File Actions – Records the events to a log (text) file in XML or Comma Delimited (CSV) format
  - .NET Script Actions – Runs a user‐supplied script that implements an automated action in
    response to the event. Scripts can be written in Visual Basic or C#
  - PowerShell 4.0 Actions – Runs a user-supplied PowerShell script that implements an automated
    action in response to the event

You can configure multiple event consumers for a single policy, but only one database event consumer per policy.

Actions run on a separate thread from the policy’s event processing thread. The system dedicates a separate thread/queue for incoming events, one for email notifications, and one for custom script actions. This prevents actions from blocking new events from entering the database while the action completes.

You can enable or disable an action in any of the following ways:

- Check or uncheck the Enabled checkbox for an action in the Action Configurations list
- Select an action in the Action Configurations list to view its details on the Actions
  tab. You can check or uncheck the Enabled checkbox for the action here.

Save any changes to a policy or template before leaving the configuration interface.

## Send to Events DB

This action is enabled by default in new policies. It saves the event data your
policy monitors and captures to the NVMonitorData database. Netwrix Support typically disables this option during troubleshooting or when you need only file output for alerts. Reporting relies on the events database.

## Send to SIEM

Add this action by selecting a SIEM profile from the dropdown menu to receive SIEM
notifications. Only SIEM profiles you've already created are available for
selection. You can also configure this action on the
[SIEM Tab](/docs/threatprevention/7.5/admin/configuration/systemalerting/siem.md) of the System Alerting Window.

The [SIEM Output Viewer](/docs/threatprevention/7.5/admin/configuration/siemoutputviewer.md) window also shows all notifications sent to SIEM.

:::note
To enable this feature, a Threat Prevention administrator must first establish a
connection with the SIEM server and configure the mapping file through the
[System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md).
:::


## Send to Netwrix Threat Manager

Enable this action to send event data for the policy to Netwrix Threat Manager. This applies
to full version deployments of Netwrix Threat Manager. The Threat Manager Reporting Module uses the NVMonitorData database (Send to Events DB option) for reporting.

:::note
To enable this feature, a Threat Prevention administrator must create and configure the Web Request Action Module (Netwrix Threat Manager URI) through the
[Event Sink Tab](/docs/threatprevention/7.5/admin/configuration/threatmanagerconfiguration.md#event-sink-tab) of the Netwrix
Threat Manager Configuration window.
:::


## Email Notifications

:::warning
Don't use email notifications on highly active policies. Reserve this
feature for policies that require immediate notification of events.
:::


To enable email notifications, select a message profile from the dropdown menu to receive notifications. Only message profiles you've already created are available for
selection. You can also configure this action on the
[System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md).

![Actions tab - Email Notifications section](/images/threatprevention/7.5/admin/policies/actions/emailnotificationssetup.webp)

Enable the Email Notifications checkbox, select a message profile and then choose to enable the
**Prevent Repeat Emails by** option. If enabled:

- Select the radio button for either Policy or Subject:

  - Policy – Threat Prevention sends an email notification for the first event only and skips
    notifications for any other events captured by the same policy during the duration you specify
    in the boxes below.
  - Subject – Threat Prevention sends an email notification for the first
    event only and skips notifications for any other events with the
    same subject line. It skips sending notifications for the duration you
    specify in the boxes below. The message profile defines the subject line.

- Set the duration (in minutes or hours) for which Threat Prevention skips email notifications after it sends one for a policy or subject line.

Example:

In the following example, let’s assume you have the following settings for Prevent Repeat Emails by:

- Option selected: Policy
- Duration set: 5 minutes

For example: if Threat Prevention captures 15 events in 5 minutes against a policy, it sends an email
notification in real time for the first event only. The system logs the remaining events
in the application but doesn't generate email notifications.

Two hours later, when another event occurs against that same policy, Threat Prevention sends an email notification for it. If more events occur within the next five minutes, Threat Prevention doesn't generate email notifications.

:::note
To enable email notifications, the SMTP gateway must first be configured and message
profiles created by a Threat Prevention  administrator, which is done through the
[System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md).
:::


## Custom Scripts

The Actions Configurations area at the top of the tab lists your assigned File, .NET Script, or PowerShell
4.0 actions with their name, type, description, and whether they are enabled or disabled.

- Click **Add** (+) to open the Add Action window. Choose the type of action and configure the
  script.
- Use the Remove (x) button to delete a custom script action from a policy.

See the following topics for additional information:

- [File Actions](/docs/threatprevention/7.5/admin/policies/configuration/actions/file.md)
- [.NET Script Actions](/docs/threatprevention/7.5/admin/policies/configuration/actions/netscript.md)

  - Optionally, Netwrix can provide custom scripts through a Statement of Work.

- [PowerShell 4.0 Actions](/docs/threatprevention/7.5/admin/policies/configuration/actions/powershell.md)

  - Optionally, Netwrix can provide custom scripts through a Statement of Work.

:::note
Netwrix Engineers have created custom scripts that execute notification
emails. See the [Custom Scripts](/docs/threatprevention/7.5/admin/templates/folder/actions/actions.md#custom-scripts) topic for
additional information.

:::
