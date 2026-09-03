---
title: "System Alerting Window"
description: "System Alerting Window"
sidebar_position: 100
---

# System Alerting Window

The System Alerting window is only available to administrators, enabling them to configure and
manage all alerting avenues. Click **Configuration** > **Alerts** on the menu to open it.

![Netwrix Threat Prevention System Alerting window](/images/threatprevention/8.1/admin/configuration/systemalerting/systemalerting.webp)

Threat Prevention can send alerts to recipients via email, to the Windows Event Log, and to SIEM
products. Alerts are grouped into five types:

- Security – Provides alerts on things that impact:

  - What data is collected
  - The ability to collect the data
  - Changes to who can access it

- Operations – Provides alerts on internal operations of the product that aren't directly
  influenced by a user
- Configuration – Provides alerts on changes to general configuration settings
- Analytics – Provides alerts when an analytic incident is triggered. These alerts aren't available
  for Event Log alerts.
- Policies – Provides alerts when a policy monitors or blocks an event. These alerts aren't
  available for Event Log alerts.

## Email and SIEM Alert Notifications for Policy Events

You can enable email and SIEM alert notifications for policy events through:

- The System Alerting window
- The [Actions Tab](/docs/threatprevention/8.1/admin/policies/configuration/actions/overview.md) of a policy
- The [Actions Tab](/docs/threatprevention/8.1/admin/templates/configuration/actions.md) of a policy template

In any case, you must first set the configuration through the System Alerting window. The
[Alerts Interface](/docs/threatprevention/8.1/admin/alerts/overview.md) shows recent alerts in a
centralized location.

## Email and SIEM Alert Notifications for Analytic Incidents

You can configure email and SIEM alert notifications for Analytic incidents through the System
Alerting window to send Ongoing Attack Alerts. In this case, Threat Prevention sends periodic
reminders of an ongoing attack if it continues after the initial notification.

## View the Alert Notifications

Threat Prevention generates notifications for the alerts you enable on the System Alerting window.

- The [Alerts Interface](/docs/threatprevention/8.1/admin/alerts/overview.md) displays all Security, Configuration, and Operation
  alert notifications.
- The [Analytics Interface](/docs/threatprevention/8.1/admin/analytics/overview.md) displays all Analytics incidents.
- The [Investigate Interface](/docs/threatprevention/8.1/admin/investigate/overview.md) displays all Policies events.

## General Considerations

Consider the following:

- Occasionally a Microsoft Security Bulletin impacting LSASS can interfere with the Agent
  instrumentation resulting in LSASS shutting down. The Agent is configured to monitor for an LSASS
  process termination shortly after a server reboot. The
  [LSASS Process Terminated](/docs/threatprevention/8.1/troubleshooting/lsass.md) alert (Operations alert)
  triggers in this event and the Agent stops. As a result, all monitoring/blocking by that
  Agent stops. To resolve the issue, either upgrade to the latest version of the Agent or
  upgrade SI.ActiveDirectoryMonitor.dll - commonly known as ADMonitor DLL (recommended). See the
  [Upgrade ADMonitor](/docs/threatprevention/8.1/admin/agents/agent-management/upgradeadmonitor.md)topic for additional information.

  :::info
  Activate an email notification for the _LSASS process terminated_ alert. See
  the
  [Enable the 'LSASS Process Terminated' Email Alert](/docs/threatprevention/8.1/troubleshooting/lsass.md#enable-the-lsass-process-terminated-email-alert)
  topic for additional information.
  :::


- In addition to the LSASS process termination check, you can configure the Agent for a Safe Mode.
  In Safe Mode, the Agent records the version of the LSASS DLLs that it hooks into during
  installation. When you restart an Agent, it compares the DLL versions with the recorded list. If
  the versions don't match, the Windows AD Events monitoring module doesn't load. The Agent’s
  status in the Agents interface changes to Active (Modules Pending), and all Active Directory
  monitoring/blocking by that Agent stops. The 'Agent Started in AD Monitor pending mode' alert
  (Operations alert) triggers in this event. To resolve the issue temporarily, the Threat
  Prevention administrator should start the pending modules. See the
  [Start Pending Modules](/docs/threatprevention/8.1/admin/agents/agent-management/startpendingmodules.md) topic for additional
  information. Netwrix also recommends upgrading SI.ActiveDirectoryMonitor.dll (commonly known as
  ADMonitor DLL) to resolve the issue permanently. See the
  [Upgrade ADMonitor](/docs/threatprevention/8.1/admin/agents/agent-management/upgradeadmonitor.md) topic for additional information.

  :::info
  Activate an email notification for this alert. See the
  [Enable Agent Started in AD Monitor Pending Mode Email Alert](/docs/threatprevention/8.1/admin/agents/safemode.md#enable-agent-started-in-ad-monitor-pending-mode-email-alert)
  topic and the [Agent Safe Mode](/docs/threatprevention/8.1/admin/agents/safemode.md) topic for additional information.

  :::
