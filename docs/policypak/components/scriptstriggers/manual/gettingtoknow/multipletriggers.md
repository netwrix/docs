---
title: "Using Multiple Triggers"
description: "Assign multiple triggers to a single policy in Scripts and Triggers Manager and Software Package Manager."
sidebar_position: 40
---

# Using Multiple Triggers

PolicyPak Scripts & Triggers Manager and PolicyPak Software Package Manager both support
assigning **multiple triggers** to a single policy. This means one policy can fire on several
different events — for example, running a script both at Logon and at Session unlock — without
creating separate duplicate policies for each event.

## Trigger Mode

The **Trigger settings** page of the wizard includes two modes, selected via radio buttons at
the top:

| Mode | Behavior |
|---|---|
| **Multiply (recommended)** | The policy runs once for **each** matching trigger that fires. If two triggers are configured and both fire during a session, the script runs twice. |
| **Single (old version compatible)** | The policy runs only once, even if multiple configured triggers fire. Use this mode when compatibility with older CSE versions is required. |

**Multiply** is the default and recommended mode for new policies.

:::note
If a script is already running for a policy when another one of its triggers fires, PolicyPak
suppresses the duplicate execution rather than queuing or retrying it — this applies per policy,
not per trigger, so a second trigger firing while any trigger's script for that policy is still
running is skipped.
:::

## Available Trigger Types

Click **New Item** to add a trigger. The following trigger types are available:

| Trigger | Fires when… |
|---|---|
| **Logon** | A user logs on |
| **Logoff** | A user logs off |
| **Shutdown** | The system shuts down |
| **Session locked** | The user locks the session |
| **Session unlocked** | The user unlocks the session |
| **Process start** | A specified process starts |
| **Process close** | A specified process closes |
| **VPN connect** | A VPN connection is established |
| **VPN disconnect** | A VPN connection is terminated |
| **Schedule** | A configured schedule fires |
| **Event log** | A specified Windows Event Log event occurs |

:::note
You can add **Logoff**, **Session locked**, **Session unlocked**, and **Shutdown** only once
each per policy, even in **Multiply** mode. Trigger types not in this list can be added more
than once, for example to configure multiple Process start triggers for different processes.
:::

:::note
Software Package Manager doesn't support the **Shutdown** trigger. The wizard for Software
Package Manager policies doesn't offer it as an option.
:::

## Configuring the Schedule Trigger

The **Schedule** trigger fires a script at a specific date and time rather than in response to a
system event. When you add a Schedule trigger, a configuration panel appears in the lower half of
the page.

### Schedule Type

Choose one of three recurrence options:

| Option | Behavior |
|---|---|
| **One time** | Runs the script once at the specified date and time. |
| **Weekly** | Runs the script on selected days of the week at the specified time. |
| **Monthly** | Runs the script on a specified day of each month at the specified time. |

### Start At

Set the date and time when the trigger should first fire.

### Time Zone

Choose how the scheduled time is interpreted on the endpoint:

| Option | Behavior |
|---|---|
| **Use time zone** | The trigger fires at the scheduled time in the selected time zone, regardless of the local PC clock. Use this to synchronize script execution across machines in multiple time zones. |
| **Use local PC time** | The trigger fires at the scheduled time according to the local clock of each endpoint. |

### Run as soon as possible after a scheduled start is missed

Check this option to run the script immediately the next time the endpoint is available, if
the machine missed the scheduled time, for example because it was powered off or the user
wasn't logged on.

When you leave this option unchecked, PolicyPak skips a missed schedule entirely and the
script waits for the next scheduled occurrence.

:::tip
Enable **Run as soon as possible after a scheduled start is missed** for any maintenance or
compliance script where it's important that the script runs at least once per cycle, even if
the machine was offline at the scheduled time.
:::

:::note
**Run as soon as possible after a scheduled start is missed** applies to Scripts & Triggers
Manager policies only. Software Package Manager Schedule triggers don't offer this option.
:::

## Adding Multiple Triggers

To add more than one trigger to a policy:

**Step 1 –** In the wizard, navigate to the **Trigger settings** page.

**Step 2 –** Confirm **Multiply (recommended)** is selected.

**Step 3 –** Click **New Item** and select the first trigger type from the dropdown.

**Step 4 –** Click **New Item** again and select the next trigger type. Repeat for each additional
trigger you want to add.

Each added trigger appears as a row in the list with a short description of when it fires.

**Step 5 –** To remove a trigger, select its row and click **Delete**.

**Step 6 –** Continue through the wizard to complete the policy configuration.

## Example: Run a Script at Logon and Session Unlock

A common scenario is ensuring a drive mapping or printer connection is applied both when a user
first logs on and when they return from a locked session. Without multiple triggers, this requires
two separate policies with identical scripts. With multiple triggers, a single policy handles both
events:

1. Add trigger: **Logon**
2. Add trigger: **Session unlocked**
3. Configure the script once in the policy.

In **Multiply** mode, the script runs at each event independently.

## Compatibility Note

:::note
**Multiply** mode requires an updated PolicyPak CSE. If your environment includes endpoints
running older CSE versions that don't support multiple trigger processing, select
**Single (old version compatible)** to ensure consistent behavior across all machines.
:::
