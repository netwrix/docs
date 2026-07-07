---
title: "Deploy the Add-On"
description: "Deploy the Add-On"
sidebar_position: 10
---

# Deploy the Add-On

Follow the steps to deploy the Add-On:

**Step 1 –** Prepare Auditor for data processing.

**Step 2 –** Configure message forwarding for Nutanix Prism.

**Step 3 –** Install the Add-On.

**Step 4 –** Configure Add-On parameters.

## Step 1: Prepare Auditor for Data Processing

In Auditor client, go to the Integrations section and verify Integration API settings:

1. Make sure the **Leverage Integration API** is switched to **ON**.
2. Check the TCP communication port number – default is **9699**.

See the [Prerequisites](/docs/auditor/10.9/api/prerequisites.md) topic for additional information.

By default, activity records are written to _Netwrix_Auditor_API_ database which is not associated
with a specific monitoring plan.

Optionally, you can create a dedicated monitoring plan in Auditor. In this case, data will be
written to a database linked to this plan. Target it at Netwrix API data source and enable for
monitoring. Add a dedicated item of _Integration_ type to the plan for data to be filtered by item
name. See the [Integration API](/docs/auditor/10.9/api/overview.md) topic for additional information.

In such scenario, you will need to specify this monitoring plan in the **Monitoring Plan** and
**Monitoring Plan Item** fields in the add-on configuration wizard. See **Step 4** below for
details.

## Step 2: Configure Message Forwarding for Nutanix Prism

To provide for interaction and data flow between Nutanix Prism and the Add-On, you should set up the
add-on installation server as a remote Syslog listener for Nutanix Prism. For that remote Syslog
server, you will need to specify the IP address and port for inbound messages. Depending on Nutanix
Prism server you are using (Element/Central), follow the related procedure below.

### Procedure for Nutanix Prism Element

Configure the remote Syslog listener using `ncli`. You can run `ncli` directly on a Controller VM
(via SSH or the Nutanix web console), or install it on any server in your infrastructure as
described in the
[Nutanix Command-Line Interface (nCLI)](https://portal.nutanix.com/page/documents/details?targetId=Command-Ref-AOS-v55:man-ncli-c.html)
article and connect to a Controller VM in your cluster.

To find the Controller VM IP address, open the Nutanix web console and go to **Settings** >
**General** > **Configure CVM**.

**Step 1 –** Disable syslog forwarding temporarily until the new remote Syslog listener is
configured (it is enabled by default):

`ncli> rsyslog-config set-status enable=false`

**Step 2 –** Create a remote Syslog server — the add-on installation server that will receive
Syslog messages from Nutanix:

`ncli> rsyslog-config add-server name=<CustomServerName> ip-address=<RemoteIP> port=<Port> network-protocol=udp`

where:

- `CustomServerName` — name for the remote server (the add-on installation server)
- `RemoteIP` — remote server IP address
- `Port` — destination port number on the remote server

**Step 3 –** Verify the server was created:

`ncli> rsyslog-config ls-servers`

**Step 4 –** Forward the AUDIT module logs to the new remote syslog listener at Notice level:

`ncli> rsyslog-config add-module server-name=<CustomServerName> module-name=AUDIT include-monitor-logs=false level=notice`

**Step 5 –** Enable syslog forwarding:

`ncli> rsyslog-config set-status enable=true`

The remote syslog server is added to the cluster automatically.

### Procedure for Nutanix Prism Central

#### Configure the Syslog Server

Provide the new remote Syslog server settings to Nutanix Prism Central so it can forward Syslog
messages:

**Step 1 –** Log in to Nutanix Prism Central.

**Step 2 –** Select **Settings** > **Email and Alerts** > **Syslog Server**.

**Step 3 –** Click **Configure Syslog Server**.

**Step 4 –** Enter remote Syslog server settings you specified at Step 2:

- **Server Name** — name of the remote server.
- **IP Address** — server IP address.
- **Port**— port for incoming messages

**Step 5 –** Select **UDP** as communication protocol.

**Step 6 –** Click **Configure**.

#### Set the Logging Level

To send the most detailed logs to the remote Syslog server, set the logging level in Prism to _5_
(_Notice_):

**Step 1 –** Select **Data Source** and click **Edit**.

**Step 2 –** Select **Audit** module and select **5 - Notice** level.

**Step 3 –** Finally, click **Save**.

## Step 3: Install the Add-On

**Step 1 –** Navigate to your add-on package.

**Step 2 –** Unzip the Add-On to a desired folder.

**Step 3 –** Run the installation package.

**Step 4 –** Accept the license agreement and follow the instructions of the setup wizard.

**Step 5 –** On the **Destination Folder** step, specify the installation folder (_C:\Program Files
(x86)\Netwrix Add-ons\Netwrix Auditor Add-on for Nutanix AHV_ by default). Configuration files
(`settings.xml`, logs, encryption keys) are stored separately under
_C:\ProgramData\Add-on for Nutanix AHV\_.

**Step 6 –** Click **Install**.

**Step 7 –** When done, click **Finish**.

## Step 4: Configure Add-On Parameters

After installation, the configuration wizard opens in your default web browser. If it does not,
launch it manually from the Start menu shortcut. The wizard guides you through six configuration
steps.

**Step 1 – Specify Nutanix Prism connection.** Provide the parameters used to query the Prism REST
API:

- **Prism URL** — URL or hostname of Prism Central or Prism Element (for example,
  `prism-central.domain.com`).
- **User name** — account with the **User Admin** role in Nutanix Prism.
- **Password** — password for the account. Credentials are encrypted and stored securely.

**Step 2 – Specify Netwrix Auditor connection.** Provide the Netwrix Auditor endpoint that will
receive activity records:

- **Netwrix Auditor Endpoint** — full endpoint URL (default:
  `https://localhost:9699/netwrix/api/v1/activity_records`).
- **Certificate Thumbprint** — TLS certificate thumbprint of the Netwrix Auditor server, or
  `NOCHECK` to skip verification (default: `NOCHECK`).

**Step 3 – Specify Active Directory credentials.** Provide the service account under which the
add-on uploads data to Netwrix Auditor:

- **User name** — service account in `domain\user` format. The account must have the
  **Contributor** role in Netwrix Auditor.
- **Password** — password for the account.

Leave both fields empty to run under the Local System account.

**Step 4 – Specify monitoring plan settings.** Optionally associate collected data with a
monitoring plan in Netwrix Auditor:

- **Netwrix Auditor Plan** — name of the monitoring plan.
- **Netwrix Auditor Plan Item** — name of the plan item of **Integration** type.

Leave both fields empty to upload data without a monitoring plan — data will be written to the
default `Netwrix_Auditor_API` database.

**Step 5 – Specify general settings.** Configure Syslog reception and polling intervals:

- **Listen UDP Port** — UDP port on which the add-on listens for Nutanix Syslog messages (default:
  `514`). The port must be open on Windows Firewall for inbound connections.
- **State update interval (seconds)** — Prism inventory refresh interval (default: `300`).
- **Events polling interval (seconds)** — Prism audit event polling interval (default: `30`).

**Step 6 – Complete configuration.** Click **Run** to save the settings and start the add-on
service. You can then close the wizard tab.

To change the configuration later, launch the wizard again from the Start menu.
