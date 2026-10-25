---
title: "Events"
description: "Review the events that Privilege Secure logs for sessions, services, and configuration changes, and open the log of a session from its event."
sidebar_position: 50
---

# Events

The **Events** page lists the events that Privilege Secure logs, such as password changes, sign-ins, service starts, and session activity. Use it to see what the system did and for whom.

To open it, select **Auditing & Reporting** > **Events**.

{/* TODO screenshot: Events page showing the Access Policy column and the result count (redact host names and account names) */}

## Browse events

The toolbar has these controls:

| Control | Description |
|---|---|
| **View Logs** | Opens the log for the selected event. The button is unavailable until you select one row that has a session or an action log. For an event with an action log, it opens the **Event Logs** window. Otherwise it opens the **Session Logs** window for the event's session. See [View session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md). |
| **Search** | Filters the list to events that match the text you enter. |
| **Refresh** | Reloads the list. |

The toolbar shows the number of events, abbreviated for large counts (for example, 60.9k results). The list is paged, so you can browse all events.

## Read the list

| Column | Description |
|---|---|
| **STATUS** | The severity of the event: Information, Warning, or Error. |
| **TIME** | When the event occurred, shown relative to now (for example, "18 minutes ago") or as the time of day. |
| **USER** | The user associated with the event. System events show `<nobody>`. |
| **ACCESS POLICY** | The access policy of the session. Events with no policy show `<none>`. |
| **EVENT MESSAGE** | A description of the event. |
| **SESSION ID** | The identifier of the session, when the event belongs to one. |

You can sort the columns.

## Events you see

The list includes events such as these:

- Password changed, and failed to update a password (shown as a Warning).
- One-time-use token created.
- Login success, with the source IP address.
- Service started, for the Scheduler, security information and event management (SIEM), Action, and Email services.
- Changes to activities.

The list has no column for the event type. SIEM templates can include the event type and the service that logged the event. See [SIEM templates and event fields](/docs/privilegesecure/26.07/integrations/siem/siem-templates.md).

When a SIEM server is enabled, Privilege Secure forwards each event that appears in this list to it. Events from the Remote Access Gateway service are written only to that service's log file, so they don't appear in the list or reach a SIEM.

To forward events to a SIEM, see [Forward events to a SIEM](/docs/privilegesecure/26.07/integrations/siem/siem-servers.md).
