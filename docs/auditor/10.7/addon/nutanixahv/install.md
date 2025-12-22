---
title: "Deploy the Add-On"
description: "Deploy the Add-On"
sidebar_position: 10
---

# Deploy the Add-On

Follow the steps to deploy the Add-On:

**Step 1 –** Prepare Auditorfor data processing.

**Step 2 –** Configure message forwarding for Nutanix Prism.

**Step 3 –** Download the Add-On.

**Step 4 –** Configure Add-On parameters.

**Step 5 –** Connect to Prism Central Server.

**Step 6 –** Register the Add-On

## Prepare Auditor for Data Processing

In Auditor client, go to the Integrations section and verify Integration API settings:

1. Make sure the **Leverage Integration API** is switched to **ON**.
2. Check the TCP communication port number – default is **9699**.

See the [Prerequisites](/docs/auditor/10.7/api/prerequisites.md) topic for additional information.

By default, activity records are written to _Netwrix_Auditor_API_ database which is not associated
with a specific monitoring plan.

Optionally, you can create a dedicated monitoring plan in Auditor. In this case, data will be
written to a database linked to this plan. Target it at Netwrix API data source and enable for
monitoring. Add a dedicated item of _Integration_ type to the plan for data to be filtered by item
name. See the [Integration API](/docs/auditor/10.7/api/overview.md) topic for additional information.

In such scenario, you will need to specify this monitoring plan in the _MonitoringPlan_ and
_MonitoringPlanItem_ attributes in the add-on configuration parameters. See **Step 4** below for
details.

## Configure Message Forwarding for Nutanix Prism

To provide for interaction and data flow between Nutanix Prism and the Add-On, you should set up the
add-on installation server as a remote Syslog listener for Nutanix Prism. For that remote Syslog
server, you will need to specify the IP address and port for inbound messages. Depending on Nutanix
Prism server you are using (Element/Central), follow the related procedure below.

### Procedure for Nutanix Prism Element

Follow the steps If you are using Nutanix Prism Element.

**Step 1 –** Connect to a Controller VM (or Nutanix Prism) by SSH or via web console and execute the
`ncli` command.

**Step 2 –** Find the IP address of the Controller VM in Nutanix web console under **Settings** >
**General** > **Configure CVM**.

### Procedure for Nutanix Command-Line Interface

Alternatively, you can download and install the _ncli_ (Nutanix command-line interface) on any
server in your infrastructure, as described in the
[Nutanix Command-Line Interface (nCLI)](https://portal.nutanix.com/page/documents/details?targetId=Command-Ref-AOS-v55:man-ncli-c.html)
article, and connect to a Controller VM in your cluster.

Follow the steps if you are using Nutanix command-line interface.

**Step 1 –** Disable it temporarily until you configure a new remote Syslog listener. By default,
the remote Syslog listening server is enabled. For that, run the following command in ncli:

`ncli> rsyslog-config set-status enable=false`

**Step 2 –** Create a remote Syslog server — a remote server that will operate as a Syslog listener,
receiving the Syslog messages from Nutanix server. In the integration solution deployment, it will
be the add-on installation server. Run the following command in _nlci_:

`ncli> rsyslog-config add-server name=<CustomServerName> ip-address=<RemoteIP> port=<Port> network-protocol=udp`

here:

- `CustomServerName` — remote server that will receive the syslog messages (i.e., server on which
  the add-on will be deployed)
- `RemoteIP` — remote server IP address
- `Port` — Destination port number on the remote server

**Step 3 –** To ensure the server was created successfully, review the list of servers. For that,
run the following command:

`ncli> rsyslog-config ls-servers`

The server will be added to the cluster automatically.

**Step 4 –** Instruct the AUDIT module of Nutanix solution to forward its log information to the new
remote syslog listener, and specify the logging level. For that, run the following command:

`ncli> rsyslog-config add-module server-name=<CustomServerName> module-name=AUDIT include-monitor-logs=false level=notice`

**Step 5 –** Finally, enable syslog forwarding to remote server:  
` ncli> rsyslog-config set-status enable=true`

This syslog server will be added to the cluster automatically.

### Procedure for Nutanix Prism Central

First, provide the new remote Syslog server settings to Nutanix Prism server that will forward
Syslog messages. For that, follow the steps below:

**Step 1 –** Log in to Nutanix Prism Central.

**Step 2 –** Select **Settings** > **Email and Alerts** > **Syslog Server**.

**Step 3 –** Click **Configure Syslog Server**.

**Step 4 –** Enter remote Syslog server settings you specified at Step 2:

- **Server Name** — name of the remote server.
- **IP Address** — server IP address.
- **Port**— port for incoming messages

**Step 5 –** Select **UDP** as communication protocol.

**Step 6 –** Click **Configure**.

Next, for the most detailed logs to be sent to remote Syslog server, set the logging level in Prism
to _5_ (_Notice_). For that, follow the steps below:

**Step 1 –** Select **Data Source** and click **Edit**.

**Step 2 –** Select **Audit** module and select **5 - Notice** level.

**Step 3 –** Finally, click **Save**.

## Download the Add-On

Download the distribution package from the Netwrix website and unpack it to a folder on the computer
where you plan to deploy the add-on.

Customers who are logged in to the Netwrix Customer Portal can download the latest version of their
software products from the My Products page:
[https://www.netwrix.com/my_products.html](https://www.netwrix.com/my_products.html). See the
[Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
topic for information on how to register for a Customer Portal account.

Partners and MSPs who are logged into the Netwrix Partner Portal can download the latest version of
their software products from the My Product page:
[https://www.netwrix.com/par/site/products](https://www.netwrix.com/my_products.html). To receive an
invitation to the Partner Portal, please contact
[netwrix.msp@netwrix.com](http://netwrix.msp@netwrix.com/).

## Configure Add-On Parameters

Open the add-on folder and edit the **settings.xml** file to configure the add-on parameters:

| Parameter                 | Default value                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NetwrixAuditorIntegration |                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| NetwrixAuditorEndpoint    | https://localhost: 9699/netwrix/api/ v1/activity_records | Auditor server IP address and port number followed by endpoint for posting Activity Records. Assumes that the add-on runs on the computer hosting Auditor Server and uses default port **9699**. If you want to run the add-on on another machine, provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15, EnterpriseNAServer, WKS.enterprise.local_). To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.enterprise.local:9999_). Do not modify the endpoint part (/netwrix/api . . . . ) |
| CertificateThumbprint     | NOCHECK                                                  | Auditor Certificate Thumbprint Property. Possible values: - `Empty`—Check Netwrix Auditor certificate via Windows Certificate Store. - `AB:BB:CC.`—Check Netwrix Auditor Server certificate thumbprint identifier. - `NOCHECK`—Do not check Netwrix Auditor certificate. Make sure to select this parameter if you plan to specify servers by their IP.                                                                                                                                                                                                       |
| DateTimeFormat            | yyyy-MM-ddTHH:mm:ssZ                                     | Auditor time format. By default, set to zero offset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| MonitoringPlan            | —                                                        | Unless specified, data is written to Netwrix_Auditor_API database and is not associated with a specific monitoring plan. Specify a name of associated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan. If you select a plan name in the add-on, make sure a dedicated plan is created in Auditor, the Netwrix API data source is added to the plan and enabled for monitoring. Otherwise, the add-on will not be able to write data to the Audit Database.                                                   |
| MonitoringPlanItem        | —                                                        | Unless specified, data is not associated with a specific plan and, thus, cannot be filtered by item name. Specify an item name. Make sure to create a dedicated item in Auditor in advance.                                                                                                                                                                                                                                                                                                                                                                   |
| UserName                  | Current user credentials                                 | Credentials to access Auditor server. Unless specified, the add-on runs with the current user credentials. If you want the add-on to use another account to connect to Auditor server, specify the account name in the _DOMAIN\username_ format.                                                                                                                                                                                                                                                                                                              |
| Password                  | Current user credentials                                 | Unless specified, the service runs with the current user credentials. Provide a different password if necessary.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ARsNumberAtTime           |                                                          | Maximum number of Audit Records that can be sent to Auditor at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ARsSendingPeriodicity     |                                                          | Periodic time interval for sending Activity Records (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| PauseWhenSendingFailed    |                                                          | Pause after a failed attempt to send Activity Records (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **DataCollection**        |                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ListenUDPPort             | 514                                                      | UDP port for receiving incoming Syslog messages. Make sure that this port is not used by any other add-ons or applications (for example, Netwrix Auditor for Network Devices); otherwise specify another port here.                                                                                                                                                                                                                                                                                                                                           |
| StateUpdatingPeriodicity  |                                                          | Periodic time interval for updating state of clusters (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| EventsReadingPeriodicity  |                                                          | Periodic time interval for reading events (in seconds). Target endpoint: _/api/nutanix/v2.0/events_                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| PageLength                |                                                          | The number of objects loaded with one request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ShortTermFolder           |                                                          | Short term folder for collected data (full or local path).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

If you modify parameters in the **settings.xml** file, remember to save the changes and then restart
the **Netwrix Auditor Add-on for Nutanix AHV** service for them to take effect.

If you need to change user name or password for accessing Prism Central, you should run
Netwrix.IntegrationConfiguration.exe file that will prompt you for the new credentials (see step 5
below). Then restart the Netwrix Auditor Add-on for Nutanix AHV service for the changes to take
effect.

## Connect to Prism Central Server

Run the Netwrix.IntegrationConfiguration.exe file and specify the following:

- Prism IP address – IP address of Prism Cental server.
- User name – Specify a user name to connect to Prism Central server.
- Password – Specify password fof the account used to connect to Prism Central server.

These parameters will be configured automatically by **install.ps1** script. If you need to modify
it later, use this configurator from the add-on package.

Credentials for connection to Nutanix Prism server will be then encrypted and stored in the solution
configuration. Consider that user account should have the **User Admin** role in Nutanix Prism.

## Register the Add-On

Run the **install.ps1** PowerShell script to register the add-on service. You will be also prompted
to specify credentials for accessing Nutanix Prism Central. These credentials will be encrypted and
used for secure communication. If you need to modify them later, run the
Netwrix.IntegrationConfiguration.exe file from the add-on package.
