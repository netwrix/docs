---
title: "Restrict SSH commands"
description: "Create a command restriction that logs, blocks, locks, or terminates a session when a command matches a rule, and apply it to a connection profile."
sidebar_position: 60
---

# Restrict SSH commands

A command restriction is a named set of rules. When a user enters a command that matches a rule, the console takes the action that you chose for that rule. You apply a command restriction to a connection profile.

Command restrictions apply to SSH sessions that go through the Privilege Secure proxy. They don't apply to RDP or website sessions.

:::note
If the **Command Restriction** page or list doesn't appear, contact Netwrix support.
:::

## Create a command restriction

1. Select **Access Policy** > **Command Restriction**.
1. Click the plus (**+**) button above the list.
1. In **Name**, enter a name for the set of rules.
1. (Optional) In **Email Recipient**, enter the address that receives notifications.
1. In the **Settings** section, fill in the first rule row. See [Command restriction fields](#command-restriction-fields).
1. To add another rule, click the plus icon at the end of the row.
1. Click **Save**.

![The new Command Restriction form with one rule row showing Active, Match (regex), Action to Perform set to Block, and Email.](/images/privilegesecure/26.07/configuration/command-restriction-new-form.webp)

### Example

This restriction blocks a command and sends an email:

- **Name**: Block shutdown
- **Email Recipient**: the address of a security mailbox
- Rule: **Active** selected, **Match (regex)** set to `shutdown`, **Action to Perform** set to **Block**, and **Email** selected

**Match (regex)** takes a regular expression in Go (RE2) syntax. The proxy tests the command line that the user typed when the user presses Enter. The expression matches if it matches any part of the line, so `shutdown` matches `sudo shutdown -h now`. To match the whole line, anchor the expression with `^` and `$`. If more than one rule matches, only the first match that the proxy finds applies, and that isn't necessarily the first matching rule in the console list. Avoid rules whose expressions overlap.

The proxy skips a rule whose expression isn't valid.

## Command restriction fields

| Field | Description |
|---|---|
| **Name** | The name of the command restriction. |
| **Email Recipient** | The email address that receives a message when a rule with **Email** selected matches. |
| **Active** | Turns the rule on or off. New rules are active. |
| **Match (regex)** | The text that identifies the commands to act on. |
| **Action to Perform** | What the console does when a command matches. The default is **Block**. |
| **Email** | Sends an email to the email recipient when the rule matches, regardless of the action. New rules have it selected. |
| **Custom Lock Message** | The message shown to the user when the session is locked. It appears only when the action is **Block And Lock**. |

### Actions

| Action | Result |
|---|---|
| **Log Only** | The console records the command. The command runs. |
| **Block** | The console doesn't run the command. |
| **Block And Lock** | The console doesn't run the command and locks the session. The user sees the custom lock message. |
| **Terminate** | The console ends the session. |

The **Custom Lock Message** field is empty and shows `Locked by NPS Command Restrictions Rule` as placeholder text. If you leave it empty, the user sees that text.

## Apply a command restriction

1. Select **Access Policy** > **Connection Profiles**.
1. Select the connection profile.
1. In the **Proxy** section, select the restriction in the **Command Restriction** list. The default is `<none>`.
1. Click **Save**.

See [Connection profiles](connection-profiles.md).

## Delete a command restriction

Point to a restriction in the list, click the trash icon, and confirm.

## Related topics

- [Connection profiles](connection-profiles.md)
- [Access policies](overview.md)
