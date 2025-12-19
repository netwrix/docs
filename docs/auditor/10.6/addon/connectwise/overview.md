---
title: "ConnectWise Manage"
description: "ConnectWise Manage"
sidebar_position: 50
---

# ConnectWise Manage

Managed Service Providers (MSP) need to effectively utilize and standardize IT service management
tools. Those who use for that purpose the ConnectWise Manage solution usually have similar processes
in place:

- When an incident or a problem occurs in the IT environment, managed client sends (usually by
  email) a request to the MSP’s service desk. A service ticket is then created manually or
  automatically in ConnectWise Manage.
- Each ticket is assigned to authorized personnel for investigation and resolution in accordance
  with the existing workﬂow.
- To control ticket handling and report on statistics, ConnectWise service boards are used.

Netwrix has built a ready-to-use add-on that automates incident management, automatically creating
service tickets for security alerts triggered by Netwrix Auditor This integration brings in the
following beneﬁts:

- Seamless integration with the existing MSP service process
- Speeding up the process of restoring secure, normal business service
- Minimizing the gap between incident detection and the start of a resolution process
- Automating ticket handling and reducing human errors that could impact its quality
- Meeting or exceeding service level agreements (SLAs) while saving time and eﬀort

To implement the solution, Managed Service Provider does the following on the client side:

1. Deploys and maintains Netwrix Auditor that monitors users’ activity and configuration changes
2. Installs and configures integration solution (add-on) on Netwrix Auditor Server
3. Controls ticket resolution and corrective measures

On a high level, the workflow is as follows:

![CW_workflow](/images/auditor/10.6/addon/connectwise/diagramworkflow.webp)

1. Managed Service Provider installs and configures the add-on on AuditorServer. MSP also enables
   the necessary alerts in Netwrix Auditor, specifying add-on launch as the response action in the
   alert settings.
2. Whenever the alert is triggered, the add-on uses the Integration API to retrieve activity record
   for the original event from the audit store. An activity record contains the user account,
   action, time, and other details. The add-on creates a service ticket in ConnectWise Manage,
   populates it with data from the activity record, and assigns Impact, Priority and SLA status to
   the ticket.
3. The designated service team performs data analysis and root cause detection to resolve the
   ticket; MSP is notified of the results and possible response actions to take on the client side.
4. MSP performs actions for incident response.

Solution architecture and key components are shown in the figure below:

![diagram](/images/auditor/10.6/addon/connectwise/diagram.webp)

- **Alert Handler (Netwrix.ITSM.AlertResponseAction.exe)** — the executable that is specified in the
  Auditor alerts as the response action. Alert Handler:
    1. Receives the IDs of the alert and associated activity record.
    2. Forwards them to the Netwrix AuditorConnectWise Manage Integration Service over RPC, putting
       the alert into the service queue.

For details on the alert response action, see the
[Configure a Response Action for Alert](/docs/auditor/10.6/admin/alertsettings/responseaction.md)
topic for additional information.

- **Netwrix Auditor ConnectWise Manage Integration Service (Netwrix.ITSM.IntegrationServiceCW.exe)**
  — the main component of the solution, implemented as Windows service. It does the following:
    1. Interacts with Auditor via its Integration API to retrieve the activity records from the
       Audit Database by record ID.
    2. Forwards activity record data to ConnectWise Manage via its REST API, creates a new service
       ticket and populates its properties, as specified by user in the add-on configuration.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| Location           | Prerequisites                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auditor Server     | - The add-on supports Auditor version 9.96. - The add-on will run on the computer where Auditor Server works, so the add-on package should be copied to that machine. - For add-on operation, **NET 4.5** framework is required on Auditor Server. - Starting with add-on build 1.0.12.0, **TLS 1.2** protocol is supported. By default, this capability is disabled. For detailed information on enabling it, see the [Deploy the Add-On](/docs/auditor/10.6/addon/connectwise/deployment.md) topic for additional information. **Auditor settings** - The Audit Database settings should be configured in Auditor Server. - Monitoring plans should be configured to store data to the Audit Database. - The **TCP 9699** port (default Integration API port) should be open for inbound connections. **Required permissions** - Unless specified, the **Netwrix.ITSM.IntegrationServiceCW.exe** Windows service (main add-on co mponent) will run under the **LocalSystem** account. - The account that will be used by Netwrix.ITSM.IntegrationServiceCW.exe component to access Auditor Server must be granted the Global administrator role in Auditor. -OR- be a member of the Netwrix Auditor **Administrators** group. |
| ConnectWise Manage | - By default, the add-on connects to the latest version of the ConnectWise Manage application (v4_6_release). **Required permissions** - To connect to ConnectWise Manage via its REST API, you will require an API Member account — it is needed to log in to ConnectWise Manage. See [this article](https://docs.connectwise.com/ConnectWise_Documentation/090/040/010/040) for details. - It is recommended to assign the **API Member** account to a limited security role with the following permissions: - **System** – **Table Setup** – **Inquire Level** = **All** - **Companies** – **Company Maintenance** – **Add(all)**, **Inquire(all)** - **Companies** – **Manage Attachments** – **Add(all)**, **Inquire(all)** - **Service Desk** – **Service Tickets** – **Add(all)**, **Inquire(all)**                                                                                                                                                                                                                                                                                                                                                                                                                                        |
