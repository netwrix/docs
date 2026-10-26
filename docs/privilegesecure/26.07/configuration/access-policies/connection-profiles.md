---
title: "Connection profiles"
description: "Look up every connection profile setting, its default value, and what it controls for proxies, sessions, credentials, websites, custom fields, and approvals."
sidebar_position: 40
---

# Connection profiles

A connection profile defines how sessions run for the access policies that use it. It sets the proxy, the session length and extensions, the notes and ticket requirements, how users view passwords, website cleanup, custom fields, and whether a session needs approval.

Every access policy uses one connection profile. Several policies can share a profile. For how policies use profiles, see [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).

To open the page, select **Access Policy** > **Connection Profiles** in the left navigation. The list on the left has **Search Profiles...** and a plus (**+**) button with the tooltip "Add Connection Profile". Point to a profile to show its trash icon, which deletes it. **Save** and **Cancel** appear only after you change a field.

## Create a connection profile

1. Select **Access Policy** > **Connection Profiles**.
2. Click the plus (**+**) button.
3. Enter a **Name**. Names must be unique.
4. (Optional) Enter a **Description** that states the purpose of the profile.
5. Review each section in this order: **Proxy**, **Session Control**, **Credential Management**, **Website**, **Custom Fields**, and **Approval Workflow**.
6. Click **Save**.

The new profile appears in the list. Select it in the **Connection Profile** list of an [access policy](/docs/privilegesecure/26.07/configuration/access-policies/resource-based-policy.md#create-the-policy) to use it.

For example, to create a profile for short sessions that need a ticket, enter the name `Short sessions`, set **Max Duration (minutes)** to `30`, and leave **Require Ticket Number for Sessions** selected. The new-profile form selects it by default, along with **Require Notes for Sessions**.

## Default values

The console has two sets of defaults. The seeded **Default** profile has one set. The new-profile form pre-fills another set. Settings that aren't listed as different have the same default in both.

| Setting | Seeded Default profile | New-profile form |
|---|---|---|
| **Description** | "Default connection profile." | Empty |
| **Max Duration (minutes)** | 120 | 120 |
| **Session End Notification (minutes)** | 5 | 5 |
| **Enable Session Extension** | Off | Off |
| **Extend By (minutes)** | 30 | 30 |
| **Session Extension Limit** | 2 | 2 |
| **Monitor for Logon** | On | On |
| **Monitor Interval (minutes)** | 5 | 5 |
| **Leave Existing Members in Group** | On | On |
| **Validate Users for SSH Sessions** | Off | Off |
| **Require Notes for Sessions** | Off | On |
| **Require Ticket Number for Sessions** | Off | On |
| **Activity Token Complexity Policy** | `<default>` | `<default>` |
| **Command Restriction** | `<none>` | `<none>` |
| **Allow Proxy Auto-connect** | On | On |
| **Record Proxy Session** | On | On |
| **Record Keystrokes and Metadata** | On | On |
| **Allow User to Access Password** | On | On |
| **Enable credential auto-fill in browser extension** | On | On |
| **Enable 'Show Password' option in user interface and browser extension** | Off | Off |
| **View Password Timeout (seconds)** | Empty (the effective timeout is 20) | 20 |
| **Clear Website Data Before Start** | Off | On |
| **Clear Website Data After Stop** | Off | On |
| **Record Session Audio** | Off | On |
| **Approval Workflow** | Automatic | Automatic |

## Proxy

The **Proxy** section controls which proxy servers start sessions and what the proxy records. The section note reads "Leave either of these blank to use default settings".

| Setting | Description |
|---|---|
| **RDP Proxy** | The RDP proxy to use, in `host:port` format. If blank, the local proxy on the Privilege Secure server is used. The default RDP proxy port is 4489. |
| **SSH Proxy** | The SSH proxy to use, in `host:port` format. If blank, the local proxy on the Privilege Secure server is used. The default SSH proxy port is 4422. |
| **Allow Proxy Auto-connect** | When you clear it, the requester must give secondary authentication (password and multifactor authentication) to start a proxy connection from the dashboard. |
| **Record Proxy Session** | Records the session so that an administrator can watch it live or review it later. |
| **Record Keystrokes and Metadata** | Records keystrokes and metadata for sessions. Clear it to stop keystroke recording. The session video is still recorded. |
| **Command Restriction** | The command restriction to apply to SSH sessions. The default is `<none>`. The list shows the restrictions you create on the **Command Restriction** page. See [Restrict SSH commands](/docs/privilegesecure/26.07/configuration/access-policies/command-restrictions.md). |

Each proxy field takes one server. To use more than one proxy server, put a load balancer in front of the servers.

## Session Control

The **Session Control** section sets the session length, extensions, and the information users must provide.

| Setting | Description |
|---|---|
| **Max Duration (minutes)** | The session length for a new activity request. The default is 120. Sessions for activities without a resource also respect this value. |
| **Session End Notification (minutes)** | How long before the session ends the requester is notified in the RDP or SSH client. It works for direct connections and for connections through the proxy. The default is 5. |
| **Enable Session Extension** | Lets users extend the current session. The default is off. |
| **Extend By (minutes)** | The number of minutes added by each extension. The default is 30. |
| **Session Extension Limit** | The number of times a user can extend a session. The default is 2. |
| **Monitor for Logon** | Monitors the resource for the user's logon. The default is on. |
| **Monitor Interval (minutes)** | How often the console checks the resource for a logon. The default is 5. |
| **Leave Existing Members in Group** | Keeps a user in a group when the user was already a member before the activity started and no other activity added the user. The default is on. |
| **Validate Users for SSH Sessions** | Checks that the target account exists and is enabled on all valid domain controllers for the Linux host. The default is off. |
| **Require Notes for Sessions** | Requires users to enter notes when they create a session. |
| **Require Ticket Number for Sessions** | Requires users to enter a ticket number when they create a session. |
| **ServiceNow Connector** | Appears when **Require Ticket Number for Sessions** is selected. Selects the ServiceNow connector that validates the ticket. The default is `<none>`. |
| **Activity Token Complexity Policy** | The complexity rules for activity token accounts. The default is `<default>`, the built-in policy. |

**Enable Session Extension** shows **Extend By (minutes)** and **Session Extension Limit**. **Monitor for Logon** shows **Monitor Interval (minutes)**.

:::note
Select **Validate Users for SSH Sessions** when users have authentication problems with direct-connect SSH sessions. It increases the time to create sessions for Linux activities that use managed domain users or activity token domain users.
:::

To validate tickets against ServiceNow, create the connector first. See [ServiceNow integration](/docs/privilegesecure/26.07/integrations/itsm/servicenow.md). When the profile has a connector, the console checks the ticket number that a user enters. When the connector is `<none>`, the console only requires that the ticket number isn't empty. It accepts any text.

To define custom complexity rules for activity token accounts, see [Activity token complexity](/docs/privilegesecure/26.07/configuration/access-policies/activity-token-complexity.md).

## Credential Management

The **Credential Management** section controls how users view the password of the managed account for a session or checkout.

| Setting | Description |
|---|---|
| **Allow User to Access Password** | Lets users view or copy the password of the managed account from the dashboard. The password is valid only while the session is active. The default is on. |
| **Enable credential auto-fill in browser extension** | Allows auto-fill in the browser extension. The default is on. |
| **Enable 'Show Password' option in user interface and browser extension** | Shows the Show Password icon on the sign-in page of the console and the browser extension. The default is off. |
| **View Password Timeout (seconds)** | How long a user can view the password on the sign-in page. |

Select **Allow User to Access Password** to show the two options for auto-fill and the Show Password icon.

## Website

The **Website** section applies to website sessions.

| Setting | Description |
|---|---|
| **Clear Website Data Before Start** | Clears the browser cache before the session starts. |
| **Clear Website Data After Stop** | Clears the browser cache after the session ends. |
| **Record Session Audio** | Records the computer audio during the session. |

## Custom Fields

Custom fields add data entries that users complete when they create a session. Click **Add Custom Field** to add a row. Click **Remove Custom Field** to delete a row.

| Setting | Description |
|---|---|
| **Label** | The display name of the field. |
| **Variable Name** | The name that PowerShell scripts use to read the field. |
| **Description** | A description of the field. |
| **Required** | When selected, users must complete the field. |
| **Data Type** | The type of entry: **Integer** (the default), **String**, or **Options**. |
| **Length** | Appears for **String**. The maximum number of characters, from 1 to 32. |
| **Options** | Appears for **Options**. Click **Edit Options** to add or remove the values that users choose from. The list doesn't accept duplicate values. |

A profile holds up to three custom fields. A variable name must be unique within the profile, can't contain spaces, can't start with a number, and uses letters and numbers only. Users complete the fields on the **Notes** step of the session request. The console rejects a non-numeric **Integer** value, a **String** value longer than **Length**, and an empty value in a **Required** field.

## Approval Workflow

The **Approval Workflow** radio buttons set whether a session needs approval.

| Option | Description |
|---|---|
| **Automatic** | No approval is required. This is the default. |
| **Tiered** | One or more approver tiers must approve the session before the requester can sign in. |

See [Configure approval workflows](/docs/privilegesecure/26.07/configuration/access-policies/approval-workflows.md).

## Related topics

- [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md)
- [Configure approval workflows](/docs/privilegesecure/26.07/configuration/access-policies/approval-workflows.md)
- [Restrict SSH commands](/docs/privilegesecure/26.07/configuration/access-policies/command-restrictions.md)
- [Activity token complexity](/docs/privilegesecure/26.07/configuration/access-policies/activity-token-complexity.md)

{/* TODO screenshot: the Proxy and Session Control sections of a connection profile. */}
{/* TODO screenshot: the Credential Management and Website sections of a connection profile. */}
{/* TODO screenshot: the Require Ticket Number for Sessions option with the ServiceNow Connector list shown. */}
