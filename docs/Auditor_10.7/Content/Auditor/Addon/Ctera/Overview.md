---
sidebar_position: 1555
title: Ctera
---

Filter: 

* All Files

Submit Search

# Ctera

The add-on works in collaboration with Netwrix Auditor, supplying data about activity on your Ctera-based devices. Aggregating data into a single audit trail simplifies analysis, makes activity monitoring more cost effective, and helps you keep tabs on your IT infrastructure.

Implemented as a service, this add-on facilitates the data transition from Ctera-based systems to Netwrix Auditor. All you have to do is provide connection details and specify parsing rules.

On a high level, the add-on works as follows:

1. The add-on listens to the specified UDP ports and captures designated Syslog messages.
2. The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each Activity Record contains the user account, action, time, and other details.
3. Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server, which writes them to the Long-Term Archive and the Audit Database.

See the [Integration API](../../API/Overview "Integration API") topic for additional information on the structure of the Activity Record and the capabilities of the Integration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as follows:

| On... | Ensure that... |
| --- | --- |
| The Auditor Server side | * The Audit Database settings are configured in Auditor Server. See the [Prerequisites](../../API/Prerequisites "Prerequisites") and [Audit Database](../../Admin/Settings/AuditDatabase "Audit Database") topics for additional information.  * The TCP **9699** port (default Integration API port) is open for inbound connections.  * The user writing data to the Audit Database is granted the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](../../Admin/MonitoringPlans/Delegation "Role-based access and delegation") topic for additional information.  Alternatively, you can grant the **Global administrator** role or add the user to the **Netwrix Auditor Administrators** group. In this case, this user will have the most extended permissions in the product. |
| The computer where the add-on will be installed | * The UDP 514 port is open for inbound connections.  * .Net Framework 4.7.2 and above is installed. Review the following Microsoft technical article for additional information on how to install .Net Framework 4.7.2: [Microsoft .NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2 "Microsoft .NET Framework 4.7.2 offline installer for Windows"). |

### Configure Logging for CTERA Edge Filer

Prior to start using the Add-On, configure syslog logging settings on your CTERA Edge Filers. See the [Configuring Syslog Settings](https://kb.ctera.com/docs/configuring-logging#configuring-syslog-settings "Configuring Syslog Settings") article on the CTERA product documentation portal for detailed instructions.

### Accounts and Rights

By default, the add-on will run under the *Local System* account. The add-on and Auditor must be installed on the same server.

### Considerations and Limitations

* The Add-On must be deployed in the same subnet as CTERA Edge Filer and Auditor.
* If the monitoring plan name in the ** add-on configuration parameter is specified incorrectly, this may lead to temp files generation and, therefore, to inefficient disk space usage.
* If you are using Netwrix Auditor for Network Devices, the 514 UDP port may be already in use, and you should specify another port when configuring the add-on settings (see the [Install Add-On](Install "Install Add-On") and [Define Parameters](Parameters "Define Parameters") topics for additional information). Another option is to install the add-on and Auditor Server on different machines.

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.