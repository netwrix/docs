---
title: "Agent Safe Mode"
description: "Agent Safe Mode"
sidebar_position: 10
---

# Agent Safe Mode

To collect real-time activity data, the Agent hooks into (intercepts) specific Microsoft APIs in the
LSASS process. Below are some considerations:

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
  [Enable Agent Started in AD Monitor Pending Mode Email Alert](#enable-agent-started-in-ad-monitor-pending-mode-email-alert)
  topic for additional information.
  :::


:::tip
Remember, in Safe Mode, Threat Prevention does not terminate the LSASS process; it only prevents
the Active Directory monitoring/blocking module from loading on the Agent machine every time key
LSASS DLLs are changed.
:::


:::note
Most Microsoft Security Bulletins that alter LSASS will not interfere with Agent
instrumentation.
:::


Active Directory monitoring/blocking will not resume until the pending modules are started. To
determine if the LSASS changes will conflict with the Agent instrumentation, start the pending
modules on one domain controller (see the
[Start Pending Modules](/docs/threatprevention/7.4/admin/agents/agentmanagement/startpendingmodules.md)
topic). If there are no issues after five minutes, it is unlikely that the changes are conflicting
with the Agent instrumentation. If there are any concerns about the changes, reach out to
[](mailto:support@stealthbits.com)[Netwrix Support](https://www.netwrix.com/support.html) for more
information. Netwrix tests Microsoft Security Bulletins affecting LSASS prior to their becoming
public and sends notifications to Threat Prevention users when an issue is identified.

When the pending modules are started, the recorded versions of the LSASS DLLs the Agent hooks into
are overwritten with the current versions.

## Enable Agent Started in AD Monitor Pending Mode Email Alert

Follow the steps to enable email notifications for the Agent Started in AD Monitor pending mode
Operations alert.

:::note
These steps require the Threat Prevention administrator role. They also assume that the
[System Alerting Window](/docs/threatprevention/7.4/admin/configuration/systemalerting/overview.md)
has been configured and email alerts have been enabled.
:::


**Step 1 –** Clck **Configuration** > **Alerts** on the menu. The Netwrix Threat Prevention System
Alerting window opens.

**Step 2 –** On the Email tab, click **Configure**.

**Step 3 –** Create a message profile for the Safe Mode notification with the recipient(s) to be
notified when the AD modules are pending. See the
[Create Message Profiles](/docs/threatprevention/7.4/admin/configuration/systemalerting/email.md#create-message-profiles)
topic for additional information.

![Netwrix Threat Prevention System Alerting window](/images/threatprevention/7.4/admin/agents/adpendingmodealert.webp)

**Step 4 –** Select **Events**, and then **Operations** on the left. Check the **Agent Started in AD
Monitor pending mode** event alert and select the message profile you created in Step 3 from the
drop-down menu to assign it to the alert. See the
[Email Tab](/docs/threatprevention/7.4/admin/configuration/systemalerting/email.md)
topic for additional information.

**Step 5 –** Ensure that the email alerts are **Enabled** and click **OK**.

When the Agent Started in AD Monitor pending mode event alert is triggered, an email notification is
sent to the recipient(s) in the selected message profile.
