---
title: "ServiceNow integration"
description: "Create a ServiceNow connector so Privilege Secure validates tickets when users request sessions and adds work notes to the ticket."
sidebar_position: 10
---

# ServiceNow integration

The ServiceNow integration checks the ticket number that a user enters when they request a session. When the check passes, Privilege Secure adds work notes to the ticket as the session is approved, starts, and ends. This page shows how to prepare ServiceNow, create the connector, and attach it to a connection profile.

For the user side, see [Use ServiceNow tickets with sessions](../../user-guide/servicenow-tickets.md).

## How the integration works

You create one connector for each ticket type. A connector handles incidents or change requests, not both. To use both, create two connectors.

A connection profile uses one ServiceNow connector. Every access policy that uses the profile then validates tickets against that connector.

The connector uses the ServiceNow Table REST API and works with ServiceNow releases that provide it.

The connector connects to ServiceNow with HTTP basic authentication over HTTPS. The account that you select in **System Credentials** signs in to the ServiceNow REST API.

## Prerequisites

Prepare the ServiceNow instance first.

- An integration account in ServiceNow that can read and update the tickets of the type that the connector handles.
- The `snc_basic_auth_api_access` role on that account. ServiceNow describes the role as granting basic authentication API access when the instance enforces the basic authentication restriction. Instances that restrict basic authentication reject the account with a generic 401 error without this role, even when the credentials are correct. A developer instance's sample `itil` user has the `itil` role but not this role.
- A password that you set with the **Set Password** UI action in ServiceNow. Don't set the password by editing the field.
- The ServiceNow host name, reachable over HTTPS from the Privilege Secure server.
- A service account in Privilege Secure that holds the integration account's user name and password, to select in **System Credentials**. See [Service accounts](../../configuration/service-accounts/service-accounts.md).

The Table API applies the access controls of your instance to the integration account. The account needs access to read the ticket table that the connector uses (`incident` or `change_request`). When **Add Comments To Ticket** is selected, it also needs access to write the **Work notes** and **State** fields of those tickets. In a default instance, the `itil` role grants read and write access to incident and change request records and their work notes. Custom access controls can change this, so check the controls on your instance. See the ServiceNow documentation on incident and change management roles.

## Create the connector

1. Select **Configuration** > **Integration Connectors**.
2. Click **+** above the list.
3. Enter a name and a description.
4. In **Connector Template**, select **ServiceNow**.
5. Complete the fields in the following table.
6. Click **Save**.

| Field | Description |
|---|---|
| **Ticket Number Label** | The label that appears when users are asked for a ticket number, for example `INC#` or `Change Request`. |
| **Ticket Type**\* | The type of ticket that the connector handles. Select **Incidents** (default) or **Change Requests**. |
| **View Ticket Url Template**\* | The address that opens a ticket in ServiceNow. Enter `{ticket}` where the ticket number goes. |
| **Ticket Number Regex** | A regular expression that the ticket number must match. The default is `^INC[\d]{7}$`. Leave it empty to skip the format check. |
| **Validation Error Message** | The message that users see when the number doesn't match the regular expression. |
| **Domain Name**\* | The host name of the ServiceNow instance, without `https://`. |
| **Allowed Statuses** | The ticket statuses that Privilege Secure accepts, separated by commas. The default is `New,In Progress`. Privilege Secure compares each entry with the status label that ServiceNow displays for the ticket, for example `In Progress`, and ignores case. It rejects a ticket in any other status. |
| **System Credentials**\* | The credential of the integration account. |
| **Add Comments To Ticket** | When selected, Privilege Secure adds work notes to the ticket. It's selected by default. |

An asterisk (\*) marks a required field.

{/* TODO screenshot: the ServiceNow connector form. The lab has no ServiceNow instance. */}

### Example: connectors for incidents and change requests

This example creates one connector for each ticket type.

| Field | Incident connector | Change request connector |
|---|---|---|
| **Ticket Number Label** | `INC#` | `CHG#` |
| **Ticket Type**\* | Incidents | Change Requests |
| **Ticket Number Regex** | `^INC[\d]{7}$` | `^CHG[\d]{7}$` |
| **View Ticket Url Template**\* | `https://<instance-name>.service-now.com/incident.do?sysparm_query=number={ticket}` | `https://<instance-name>.service-now.com/change_request.do?sysparm_query=number={ticket}` |
| **Domain Name**\* | `<instance-name>.service-now.com` | `<instance-name>.service-now.com` |
| **Allowed Statuses** | `New,In Progress` | `New,Assess,Authorize,Scheduled,Implement` |

{/* TODO verify: the change request form of the view ticket URL. It follows the incident form from the field help with change_request.do, and it needs a ServiceNow dev instance. */}

The default regular expression matches incident numbers only. For change requests, replace the `INC` prefix with `CHG`.

By default, ServiceNow numbers change requests as `CHG` followed by 7 digits. The change request example uses state labels from the default ServiceNow change model (New, Assess, Authorize, Scheduled, Implement, Review, Closed, and Canceled). Instances can customize both the number format and the labels.

{/* TODO verify: whether the connector's update to In Progress at session start works for change requests, which have no In Progress state in the default change model. This needs a ServiceNow dev instance. */}

## Attach the connector to a connection profile

1. Open the connection profile that your access policies use. See [Connection profiles](../../configuration/access-policies/connection-profiles.md).
2. Select **Require Ticket Number for Sessions**. The **ServiceNow Connector** list appears.
3. In **ServiceNow Connector**, select the connector.
4. Save the profile.

## What Privilege Secure does with a ticket

When a user requests a session and enters a ticket number, Privilege Secure:

1. Checks the number against **Ticket Number Regex**. If the number doesn't match, the request fails with **Validation Error Message**.
2. Looks up the ticket in ServiceNow. It tries the lookup twice before it reports an error.
3. Checks the ticket status against **Allowed Statuses**.

If a check fails, the request shows one of these messages:

| Message | Cause |
|---|---|
| "Ticket 'X' not found in ServiceNow." | ServiceNow has no ticket with that number. |
| "Ticket 'X' has status 'S' which is not allowed." | The ticket status isn't in **Allowed Statuses**. |
| "Unable to reach ServiceNow. Please try again." | The lookup failed. The cause can be a network or certificate problem, a wrong host name, or ServiceNow refusing the integration account, for example a wrong password. |
| "ServiceNow connector not configured." | The profile requires a ticket, but the profile has no usable connector. |

To find the cause of "Unable to reach ServiceNow", open the `PAM-Web` log in `C:\ProgramData\Stealthbits\PAM\Log` on the Privilege Secure server and search for "ServiceNow ticket lookup failed". The next line names the error. For example, "ServiceNow returned 401 for ticket lookup" means that ServiceNow refused the integration account. Check the account's password in the service account, that the account doesn't need a password reset, and that the account has the `snc_basic_auth_api_access` role. See [Log files](/docs/privilegesecure/26.07/admin/audit-reporting/log-files.md).

When **Add Comments To Ticket** is selected, Privilege Secure adds a work note to the ticket when:

- The request is waiting for approval.
- An approver approves or denies the request.
- The session starts. The ticket status also changes to In Progress. Privilege Secure adds any notes that the user entered to this work note.
- The session ends. The work note includes the final status of the session.

If Privilege Secure can't add a work note, the session continues.

When a user ends a session that has a ServiceNow ticket, Privilege Secure asks how to update the ticket: **Keep In Progress**, **On Hold**, or **Resolved**. Privilege Secure applies that status to the ticket. For the user steps, see [Use ServiceNow tickets with sessions](../../user-guide/servicenow-tickets.md).

## Known limitation

**Resolved status can fail with a 403 error.**

If your ServiceNow data policy requires a resolution code and close notes, ServiceNow rejects the update to Resolved. The Privilege Secure log records a warning that the update returned "Forbidden", and the console doesn't show an error. Privilege Secure sends only a work note and the status, so the ticket isn't resolved. A data policy that requires these fields can cause this.

{/* TODO verify: a supported workaround for the Resolved update. It depends on the data policy of the ServiceNow instance. */}

## Other ticketing tools

Privilege Secure has a built-in connector for ServiceNow only. It validates ticket numbers only against ServiceNow, and it doesn't pass the ticket number to PowerShell steps as a parameter.
