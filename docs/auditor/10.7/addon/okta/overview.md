---
title: "Okta"
description: "Okta"
sidebar_position: 160
---

# Okta

The add-on works in collaboration with Netwrix Auditor, supplying data about activity on your
Okta-based devices. Aggregating data into a single audit trail simplifies analysis, makes activity
monitoring more cost effective, and helps you keep tabs on your IT infrastructure.

Implemented as a service, this add-on facilitates the data transition from Okta-based systems to
Netwrix Auditor. All you have to do is provide connect ion details and specify parsing rules.

On a high level, the add-on works as follows:

1. The add-on listens to the specified UDP ports and captures designated Syslog messages.
2. The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each
   Activity Record contains the user account, action, time, and other details.
3. Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server,
   which writes them to the Long-Term Archive and the Audit Database.

See the [Integration API](/docs/auditor/10.7/api/overview.md) topic for additional information on the structure
of the Activity Record and the capabilities of the NIntegration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                   | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side | - .NET Framework [4.5](https://www.microsoft.com/en-us/download/details.aspx?id=30653) or later is installed. - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/docs/auditor/10.7/api/prerequisites.md) and [Audit Database](/docs/auditor/10.7/admin/settings/auditdatabase.md) topics for additional information. - The TCP **9699** port (default Integration API port) is open for inbound connections. - The user writing data to the Audit Database is granted the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](/docs/auditor/10.7/admin/monitoringplans/delegation.md) topic for additional information. Alternatively, you can grant the **Global administrator** role or add the user to the **Netwrix Auditor Administrators** group. In this case, this user will have the most extended permissions in the product. |

### Accounts and Rights

By default, the add-on will run under the _Local System_ account. So, if the add-on and Auditor will
be running on different machines, the corresponding computer account will require at least the
**Contributor** role in Auditor. See the
[Role-Based Access and Delegation](/docs/auditor/10.7/admin/monitoringplans/delegation.md) topic for additional
information.

In case the add-on and Auditor are installed on the same server, no special settings are needed.

### Considerations and Limitations

- The Add-On must be deployed in the same subnet as Okta and Auditor.
- If the monitoring plan name in the _`<NetwrixAuditorPlan>`_ add-on configuration parameter is
  specified incorrectly, this may lead to temp files generation and, therefore, to inefficient disk
  space usage.

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.
