---
title: "Nasuni"
description: "Nasuni"
sidebar_position: 140
---

# Nasuni

The add-on works in collaboration with Netwrix Auditor, supplying data about activity on your
Nasuni-based devices. Aggregating data into a single audit trail simplifies analysis, makes activity
monitoring more cost effective, and helps you keep tabs on your IT infrastructure.

Implemented as a service, this add-on facilitates the data transition from Nasuni-based systems to
Netwrix Auditor. All you have to do is provide connect ion details and specify parsing rules.

On a high level, the add-on works as follows:

1. The add-on listens to the specified UDP ports and captures designated Syslog messages.
2. The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each
   Activity Record contains the user account, action, time, and other details.
3. Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server,
   which writes them to the Long-Term Archive and the Audit Database.

See the [Integration API](/docs/auditor/10.8/api/overview.md) topic for additional information on the structure
of the Activity Record and the capabilities of the NIntegration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                                           | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The Auditor Server side                         | - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/docs/auditor/10.8/api/prerequisites.md) and [Audit Database](/docs/auditor/10.8/admin/settings/auditdatabase.md) topics for additional information. - The TCP **9699** port (default Integration API port) is open for inbound connections. - The user writing data to the Audit Database is granted the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](/docs/auditor/10.8/admin/monitoringplans/delegation.md) topic for additional information. Alternatively, you can grant the **Global administrator** role or add the user to the **Netwrix Auditor Administrators** group. In this case, this user will have the most extended permissions in the product. |
| The computer where the add-on will be installed | - The UDP 514 port is open for inbound connections. - .Net Framework 4.7.2 and above is installed. Review the following Microsoft technical article for additional information on how to install .Net Framework 4.7.2: [Microsoft .NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2).                                                                                                                                                                                                                                                                                                               |

### Configure Logging for

Follow the steps to configure the syslog integration.

**Step 1 –** Log in to the Nasuni Management Console and go to the **Console Settings** > **Syslog
Exports**.

**Step 2 –** In the Network section, specify the **IP Address** and **Port** and save the
configuration.

**Step 3 –** Configure log settings:

- Set **Send Auditing Messages** to "_ON_";
- Set **Logging Facility** to default "_Local0 (16)_";
- Set **Log Level for Audit Message** to "_Info_".

**Step 4 –** Enable auditing:

1. On the Volumes tab, open **Auditing**.
2. Choose the volume you wish to be audited and click **Edit Volumes**.
3. Select the **Auditing Enabled** option and choose which Event Types you wish to be reported.
4. Hit the **Save Auditing Settings** button.

### Accounts and Rights

By default, the add-on will run under the _Local System_ account. The add-on and Auditor must be
installed on the same server. If a specific account is designated to run the add-on, it needs local
admin privileges.

### Considerations and Limitations

- The Add-On must be deployed in the same subnet as Nasuni NAS & File Server Silo Consolidation and
  Auditor.
- If the monitoring plan name in the _`<NetwrixAuditorPlan>`_ add-on configuration parameter is
  specified incorrectly, this may lead to temp files generation and, therefore, to inefficient disk
  space usage.
- If you are using Netwrix Auditor for Network Devices, the 514 UDP port may be already in use, and
  you should specify another port when configuring the add-on settings (see the
  [Install Add-On](/docs/auditor/10.8/addon/nasuni/install.md) and [Define Parameters](/docs/auditor/10.8/addon/nasuni/parameters.md) topics for additional
  information). Another option is to install the add-on and Auditor Server on different machines.

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.
