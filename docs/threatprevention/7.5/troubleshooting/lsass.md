---
title: "LSASS Process Terminated"
description: "LSASS Process Terminated"
sidebar_position: 30
---

# LSASS Process Terminated

To collect real-time activity data, the Agent hooks into (intercepts) specific Microsoft APIs in the
LSASS process. Note the following:

- Occasionally Microsoft issues KBs (hot-fixes) that alter the LSASS components. Most of these
  hot-fixes do not alter the APIs in terms of the number or type parameters passed into them or
  values returned which are monitored by the Agent, and therefore do not impact operation of the
  Agent.
- Infrequently Microsoft issues a KB that changes one of these APIs in a way that can result in
  interfering with the Agent instrumentation. This in turn can result in an exception which causes
  the LSASS process to terminate. Historically, an update resulting in this type of exception is
  released less than once a year. When it does occur, such a conflict is typically manifested within
  a minute of boot up, often before the GINA allowing interactive login is initialized. When the
  Windows operating system (OS) detects such a situation, it will initiate a reboot of the OS. The
  end result can be an OS reboot loop which is resolved by either applying a ‘counter’ patch from
  Netwrix to adapt to the Microsoft change or by setting the Threat Prevention Agent service from
  its default ‘automatic start’ to ‘disabled’ or ‘manual start’ so that on the next reboot the
  Threat Prevention hooks are not deployed.

The Agent can detect if the LSASS process has terminated. If an LSASS termination is observed within
the first five minutes from last reboot, then the Agent assumes it is due to the above situation and
will take the following two actions well before the OS shuts down for the first time:

- First, it sends an alert to the Enterprise Manager, “LSASS shutdown detected”
- Second, it sets itself to “manual start” so that the Agent instrumentation is not loaded on reboot

While this does result in a suspension of further Threat Prevention event monitoring and/or blocking
on the affected domain controller, it ensures the domain controller continues to operate normally.
Once the counter patch provided by Netwrix is deployed, you can restart the Agent from the
Administration Console. In this case, the console will first check if the Agent is currently set to
‘manual start’ mode. If yes, then the Agent service is set back to ‘automatic start’ mode and
restarted, restoring normal operation.

:::note
It is necessary to register a primary and a secondary technical contact for your
orgaization with Netwrix throughout the lifetime of Threat Prevention usage. Netwrix will issue
notifications to these registered technical contacts related to Microsoft-issued KBs affecting LSASS
and the counter patch (if one is needed). Contact the organization’s Netwrix Sales Representative or
[](mailto:support@stealthbits.com)[Netwrix Support](https://www.netwrix.com/support.html) to ensure
that these contacts have been registered.
:::


Prior to Microsoft releasing a KB that alters the LSASS components in a manner that causes a
conflict with the Agent, Netwrix will first send a notification informing the registered technical
contact(s) of the release along with detailed instructions on how to obtain and apply the relevant
Agent counter patch. Counter patches are typically made available via these notifications 24 hours
or more prior to Microsoft issuing the incompatible KB.

Since this requires the Threat Prevention administrator to take action, there is an Operations alert
specific to this event.

:::info
Enable the _LSASS process terminated_ alert under Operations on the
[System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md).
:::


The Agent can be enabled with a safe mode, which would prevent the Active Directory monitoring
module of the Agent from loading if any LSASS change is detected. See the
[Agent Safe Mode](/docs/threatprevention/7.5/admin/agents/safemode.md) topic for additional information.

## Enable the 'LSASS Process Terminated' Email Alert

Follow the steps to enable email notifications for the _LSASS process terminated_ alert under
Operations.

:::note
These steps require the Threat Prevention administrator user role. They also assume that
the SMTP host information has been configured and email alerts have been enabled. See the
[Configure SMTP Host Information](/docs/threatprevention/7.5/admin/configuration/systemalerting/email.md#configure-smtp-host-information)
topic for additional information
:::


**Step 1 –** Click **Configuration** > **Alerts** on the menu to open the
[System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md).

**Step 2 –** On the Email tab, click **Configure**.

**Step 3 –** Create a Message Profile for the LSASS notification with the recipient(s) to be
notified when the LSASS process terminates. See the
[Create Message Profiles](/docs/threatprevention/7.5/admin/configuration/systemalerting/email.md#create-message-profiles)
topic for additional information.

![System Alerting window - LSASS Process Terminated alert](/images/threatprevention/7.5/troubleshooting/lsassprocessterminated.webp)

**Step 4 –** On the Email tab, click **Events**, and then click **Operations** in the left pane.
Check the **LSASS process terminated** event alert and select the Message Profile created in Step 3
from the drop-down menu. See the [Email Tab](/docs/threatprevention/7.5/admin/configuration/systemalerting/email.md) topic
for additional information.

**Step 5 –** Ensure that the email alerts are enabled, as indicated by the Enabled toggle button,
and click **OK**.

When the LSASS process terminated event alert is triggered, an email notification is sent to the
assigned (step 3) recipient(s).
