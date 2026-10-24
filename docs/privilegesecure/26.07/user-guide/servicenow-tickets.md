---
title: "Use ServiceNow tickets with sessions"
description: "Enter a ServiceNow ticket when you request a session, and choose how Privilege Secure updates the ticket when the session ends."
sidebar_position: 80
---

# Use ServiceNow tickets with sessions

When your access policy uses a ServiceNow connector, Privilege Secure checks the ticket you enter against ServiceNow and posts updates to the ticket as your session progresses. When you end the session, you choose the state the ticket moves to.

An administrator sets up the connector and attaches it to the connection profile. For that setup, see [ServiceNow integration](/docs/privilegesecure/26_07/integrations/itsm/servicenow).

## Enter a ticket number

1. Start a session request. See [Request a session](/docs/privilegesecure/26_07/user-guide/request-session).
2. On the **Notes** step, enter the ticket number in the ticket box. The box uses the label that your administrator set for the connector.
3. Click **Next >** and finish the request.

Example: If the label is **INC#**, enter `INC0012345`.

{/* TODO screenshot: the Notes step with a ServiceNow ticket label. The lab has no ServiceNow connector. */}

If the connection profile requires a ticket, you can't continue without one. {/* TODO verify: the connector is selectable in the connection profile only when Require Ticket Number for Sessions is on, so confirm whether a ServiceNow-backed profile can accept an empty ticket box. */}

### Ticket checks

Privilege Secure checks the format of the number, then looks up the ticket in ServiceNow. The request fails with one of these messages:

| Message | Cause |
|---|---|
| "Ticket number does not match the required format" | The number doesn't match the pattern that your administrator set. The message can include a custom text. |
| "Ticket '`<ticket>`' not found in ServiceNow." | ServiceNow has no ticket with that number. |
| "Ticket '`<ticket>`' has status '`<status>`' which is not allowed." | The ticket is in a state that the connector doesn't accept. By default, the allowed states are New and In Progress. |
| "Unable to reach ServiceNow. Please try again." | Privilege Secure couldn't connect to ServiceNow. Try again. |
| "ServiceNow connector not configured." | The profile needs a ticket, but the connector isn't set up. Contact your administrator. |

## Ticket updates during the session

If the connector has **Add Comments to Ticket** on, Privilege Secure adds a work note to the ticket when:

- The request is waiting for approval.
- An approver approves or denies the request.
- The session starts. The ticket state also changes to In Progress. Notes that you entered are added to this work note.
- The session ends. The work note includes the final status of the session.

If Privilege Secure can't post a work note, the session still continues.

## End a session and update the ticket

When you end a session that has a ServiceNow ticket, the console shows a dialog titled "End Session" with the prompt "How should the ServiceNow ticket be updated?" The dialog links to the ticket.

1. Click **Dashboard** in the left navigation, then click the **Active** tile.
2. Select the session and click **End Session**.
3. Click the state to set: **Keep In Progress** (leaves the ticket state unchanged), **On Hold**, or **Resolved**. The session ends. Click **Cancel** to keep the session running.

{/* TODO screenshot: the End Session dialog with Keep In Progress, On Hold, and Resolved. The lab has no ServiceNow connector. */}
{/* TODO verify: the exact ServiceNow state that On Hold and Resolved set. */}

The text in this dialog appears in English in every console language.

For the general procedure, see [Connect to a session](/docs/privilegesecure/26_07/user-guide/connect-session#end-a-session).

### Resolved can fail

{/* TODO verify: SME approval to publish PSAM-1402 and its workaround. */}

Choosing **Resolved** can fail with a 403 "Forbidden" error when your ServiceNow instance requires a resolution code and close notes to resolve a ticket. Privilege Secure sends only a work note and the new state, so the instance rejects the update.

If this happens, end the session with **Keep In Progress** or **On Hold**, and then resolve the ticket in ServiceNow. {/* TODO verify: what the console shows to the user when the Resolved update fails, and whether the session still ends. */}

## Related topics

- [Request a session](/docs/privilegesecure/26_07/user-guide/request-session)
- [Manage active and scheduled sessions](/docs/privilegesecure/26_07/admin/sessions/active-sessions)
- [Connection profiles](/docs/privilegesecure/26_07/configuration/access-policies/connection-profiles)
