---
title: "System Alerting Window"
description: "System Alerting Window"
sidebar_position: 80
---

# System Alerting Window

The System Alerting window is only available to administrators and enables them to configure and
manage all alerting avenues. Click **Configuration** > **Alerts** on the menu to open it.

![Netwrix Threat Prevention System Alerting window](/images/threatprevention/7.4/admin/configuration/systemalerting/systemalerting.webp)

Alerts can be sent to recipients via email, to Windows Event Log, and to SIEM products. Alerts are
grouped into five types:

**Threat Prevention Security events**

The Security type provides alerts on things that impact:

- What data is collected
- The ability to collect the data
- Changes to who can access it

**Threat Prevention Operations events**

The Operations type provides alerts on internal operations of the product that are not directly
influenced by a user.

**Threat Prevention Configuration events**

The Configuration type provides alerts on changes to general configuration settings.

**Analytic incidents**

The Analytics type provides alerts when an analytic incident is triggered. These alerts are not
available for Event Log alerts.

**Policy events**

The Policies type provides alerts when a policy monitors or blocks an event. These alerts are not
available for Event Log alerts.

## Email and SIEM Alert Notifications for Policy Events

Email and SIEM alert notifications for policy events can be enabled through:

- The System Alerting window
- The
  [Actions Tab](/docs/threatprevention/7.4/admin/policies/configuration/actions/overview.md)
  of a policy
- The
  [Actions Tab](/docs/threatprevention/7.4/admin/templates/configuration/actions.md) of
  a policy template

In any case, configuration must first be set through the System Alerting window. The
[Alerts Interface](/docs/threatprevention/7.4/admin/alerts/overview.md)
allows you to quickly view recent alerts in a centralized location.

## Email and SIEM Alert Notifications for Analytic Incidents

Email and SIEM alert notifications for Analytic incidents can be configured through the System
Alerting window to send Ongoing Attack Alerts. In this case, Threat Prevention sends periodic
reminders of an ongoing attack if it continues after the initial notification has been sent.

## View the Alert Notifications

Notifications are generated for the alerts you enable on the the System Alerting window.

- All Security, Configuration, and Operation alert notifications are displayed on the
  [Alerts Interface](/docs/threatprevention/7.4/admin/alerts/overview.md).
- All Analytics incidents are displayed on the
  [Analytics Interface](/docs/threatprevention/7.4/admin/analytics/overview.md).
- All Policies events are displayed on the
  [Investigate Interface](/docs/threatprevention/7.4/admin/investigate/overview.md).

## General Considerations

Below are some considerations:

- Occasionally a Microsoft Security Bulletin impacting LSASS can interfere with the Agent
  instrumentation resulting in LSASS shutting down. The Agent is configured to monitor for an LSASS
  process termination shortly after a server reboot. The
  [LSASS Process Terminated](/docs/threatprevention/7.4/troubleshooting/lsass.md)
  alert (Operations alert) is triggered in this event and the Agent is stopped. As a result, all
  monitoring/blocking by that Agent will be stopped. To resolve the issue, the Threat
  Prevention administrator should check if the Agent service is set to manual start. The most likely
  solution is to upgrade to the latest version of the Agent.

  :::info
  Activate an email notification for the _LSASS process terminated_ alert. See
  the
  [Enable the 'LSASS Process Terminated' Email Alert](/docs/threatprevention/7.4/troubleshooting/lsass.md#enable-the-lsass-process-terminated-email-alert)
  topic for additional information.
  :::


- In addition to the LSASS process termination check, the Agent can be configured for a Safe Mode.
  In Safe Mode, the Agent records the version of the LSASS DLLs that it hooks into during
  installation. When an Agent is restarted, it compares the DLL versions with the recorded list. If
  the versions do not match, the Windows AD Events monitoring module is not loaded. The Agent’s
  status in the Agents interface changes to Active (Modules Pending), and all Active Directory
  monitoring/blocking by that Agent stops. The 'Agent Started in AD Monitor pending mode' alert
  (Operations alert) is triggered in this event. To resolve the issue, the Threat Prevention
  administrator must start the pending modules. See the
  [Start Pending Modules](/docs/threatprevention/7.4/admin/agents/agentmanagement/startpendingmodules.md)
  topic for additional information.

  :::info
  Activate an email notification for this alert. See the
  [Enable Agent Started in AD Monitor Pending Mode Email Alert](/docs/threatprevention/7.4/admin/agents/safemode.md#enable-agent-started-in-ad-monitor-pending-mode-email-alert)
  topic and the
  [Agent Safe Mode](/docs/threatprevention/7.4/admin/agents/safemode.md)
  topic for additional information.

  :::
