---
title: "Discovery of CMD Inline Commands Blocked by SecureRun"
description: "Use the Audit Command Prompt inline commands setting to discover which command prompt inline commands would be blocked by SecureRun."
sidebar_position: 40
---

# Discovery of CMD Inline Commands Blocked by SecureRun™

When SecureRun™ is enabled, it evaluates not only standalone application launches but also inline
commands executed inside a command prompt session. If a user whose context isn't on the
SecureRun™ members list runs a command prompt inline command, SecureRun™ blocks it the same way
it blocks untrusted or unsigned applications.

The **Audit Command Prompt inline commands** setting lets you discover which inline commands would
be blocked before you enable SecureRun™ enforcement. This lets you create the necessary rules
in advance, so users aren't unexpectedly blocked from legitimate command-line workflows.

:::note
This setting works similarly to **Audit untrusted applications** and **Audit unsigned
applications**, but applies specifically to command prompt inline commands rather than
standalone executable or script launches.
:::

## Enabling the Setting

The **Audit Command Prompt inline commands** setting is located on the **Logging and Audit** tab
of the Global Settings Policy editor. It supports three states:

| State | Behavior |
|---|---|
| **Not Configured** (default) | Auditing of command prompt inline commands isn't active. |
| **Disabled** | Auditing is explicitly turned off, overriding any inherited configuration. |
| **Enabled** | PolicyPak writes an audit event to the event log each time a command prompt inline command runs that would be blocked by SecureRun™. The command isn't blocked at this stage — events are for discovery only. |

<!-- TODO: Add screenshot of Global Settings — Logging and Audit tab showing Audit Command Prompt inline commands set to Not Configured alongside the other four audit settings -->

To enable the setting:

1. In the **Local Group Policy Editor**, navigate to
   **Computer Configuration** (or **User Configuration**) **| PolicyPak | Least Privilege Manager**.
2. Add a **New Global Settings Policy** or open an existing one.
3. On the **Logging and Audit** tab, set **Audit Command Prompt inline commands** to **Enabled**.
4. Click **OK** and run `gpupdate /force` on the test endpoint.

Once enabled, execute command prompt sessions as a standard user. Any inline command that would be
blocked by SecureRun™ generates an audit event under
**Applications and Services Logs | PolicyPak**.

## Event 6211 — CMD Inline Command Audit Event

When **Audit Command Prompt inline commands** is enabled, PolicyPak Least Privilege Manager
generates **Event 6211** in the event log for each command prompt inline command that would be
blocked by SecureRun™.

### Trigger Conditions

Event 6211 is written when **all three** of the following conditions are met simultaneously:

1. **Audit Command Prompt inline commands** is set to **Enabled** in the Global Settings Policy.
2. **SecureRun™** is **Disabled** or **Not Configured**.
3. The ADMX policy **"Use legacy (less secure) Endpoint Privilege Manager SecureRun™ Command
   Prompt Inline Commands Processing Method"** is **Disabled** or **Not Configured**.

Additionally, the event is generated when a command prompt inline command runs and any of
the following parent process conditions is true:

- **Apply if parent process is elevated** is configured for the policy, but the parent process
  isn't elevated.
- **Apply if parent process is signed** is configured for the policy, but the parent process
  isn't signed.
- **Apply if parent process is trusted** is configured for the policy, but the parent process
  isn't trusted.

In each case, the condition expected by the policy isn't met, indicating that the inline command
would be blocked when SecureRun™ enforcement is active.

### Event Message Format

```
Severity:  Warning
Event ID:  6211

AUDIT: Command Prompt tries to run inline command and would have been blocked by SecureRun

Process Type:
Process Id:, Parent Id:
Executable Name:
Command Line:
Executable Hash:
Product Name:, Product Version:
Executable Original Name:
Executable Version:
Publisher:
Owner SID:, Owner Name:
User SID:, User Name:
Process Path:
Executable File Name:
```

Use the **Command Line** field to identify the exact inline command that would have been blocked,
and the **Owner SID / Owner Name** and **User SID / User Name** fields to understand which user
context triggered the event. The **Process Path** and **Parent Id** fields help identify the
parent process conditions (elevated, signed, trusted) that weren't satisfied.

<!-- TODO: Add screenshot of Event 6211 in the PolicyPak event log -->

## Limitation: Legacy SecureRun™ Processing Method

:::note
**Audit Command Prompt inline commands** doesn't perform auditing if the ADMX policy
**"Use legacy (less secure) Endpoint Privilege Manager SecureRun™ Command Prompt Inline Commands
Processing Method"** is set to **Enabled**. Ensure this ADMX policy isn't enabled on machines
where you intend to use this audit setting.
:::

## Next Steps

After collecting audit events from your pilot machines:

1. Review the event log for Event 6211 entries.
2. For each command that appears, note the parent process conditions (elevated, signed, trusted)
   that weren't met.
3. Create the corresponding Least Privilege Manager rules to allow those commands under the
   required parent process conditions.
4. Once all necessary rules are in place, enable SecureRun™ enforcement.

For more information on creating rules based on audit events, see
[Creating Policy from Audit Event](/docs/policypak/components/leastprivilegemanager/manual/windows/events/audit.md).
