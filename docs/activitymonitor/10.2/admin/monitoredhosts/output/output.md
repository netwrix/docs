---
title: "Output for Monitored Hosts/Services"
description: "Output for Monitored Hosts/Services"
sidebar_position: 30
---

# Output for Monitored Hosts/Services

After you start monitoring a host, you can send its event stream to multiple outputs.

![Output Properties Overview](/images/activitymonitor/9.0/admin/monitoredhosts/outputpropertiesoverview.webp)

Activity Monitor groups configured outputs under the host. You can have multiple outputs configured for a host.
The host event outputs are:

- 1Secure Cloud Agent – Sends file activity events to Netwrix 1Secure via Netwrix Cloud Agent.
- Access Analyzer 26 – Sends activity events to Netwrix Access Analyzer 26.
- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server or Netwrix Threat Manager, where
  supported



## Add 1Secure Cloud Agent Output

:::note
1Secure output supports only File System events.
:::

### Generate an Enrollment Code in Netwrix Cloud Agent Configuration

An enrollment code from Netwrix Cloud Agent Configuration authenticates the connection between the applications.

**Step 1 –** On the Cloud Agent server, open the **Netwrix Cloud Agent Configuration** application.

**Step 2 –** Under Activity Monitor connection status, click **Configure**.

**Step 3 –** Click **Copy Enrollment Code to Clipboard**.

:::note
The enrollment code is valid for 1 hour. You can use it more than once to connect multiple storage devices.
:::

### Add the Output in Activity Monitor

**Step 1 –** Open the Netwrix Activity Monitor console.

**Step 2 –** On the Monitored Hosts & Services tab, select the host or service you want and click **Add Output**.

:::note
You can add an output in bulk by selecting multiple hosts or services and clicking **Add Output**.
:::

**Step 3 –** Select **Netwrix 1Secure Cloud Agent** from the dropdown menu. The Add New Output window opens.

**Step 4 –** Enter the enrollment code.

**Step 5 –** If needed, modify the hostname or IP address of your Cloud Agent server and the port (default: 4507).

**Step 6 –** Click **Enroll**. Ensure the connection is successful.

The Activity Monitor agent connects to the server, compares the server's certificate to the expected one embedded in the enrollment code, 
and sends the code to 1Secure Cloud Agent. 
If Cloud Agent confirms the enrollment, both products store the peer certificate's Subject Public Key Info (SPKI) SHA-256 hash and 
use mutual TLS (mTLS) with SPKI hash pinning for mutual authentication. You no longer need the enrollment code after this step.

If a certificate changes so that its SPKI hash changes — for example, when the agent generates a new key pair — you must re-enroll. 
Generate a new code and click **Enroll** again.

**Step 7 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. 

See the [1Secure Integration](/docs/activitymonitor/10.2/requirements/activityagent/1secure-integration.md) topic for additional information.


## Add Access Analyzer 26 Output

:::note
The Access Analyzer 26 output supports only File System, SharePoint Online, and Microsoft 365 Copilot events.
:::

### Generate an Enrollment Token in Access Analyzer 26

An enrollment token from Netwrix Access Analyzer 26 authenticates the connection between the applications.

**Step 1 –** Open the Netwrix Access Analyzer.

**Step 2 –** Go to **Configuration > Application Settings**.

**Step 3 –** Scroll to the **Activity Monitor** section.

**Step 4 –** Under **Enrollment Token**, click **Generate Token**.

**Step 5 –** Copy the token using the clipboard icon.

:::note
Tokens expire after **1 hour**. Generating a new token immediately invalidates any previously issued token.
A single token can enroll multiple agents and outputs simultaneously — plan your enrollment session and generate the token immediately before you begin.
:::

See the [Netwrix Access Analyzer 26 Documentation](/docs/accessanalyzer/26_1/integrations/netwrix-activity-monitor) for
additional information.

### Add the Output in Activity Monitor

**Step 1 –** Open the Netwrix Activity Monitor console.

**Step 2 –** On the Monitored Hosts & Services tab, select the host or service you want and click **Add Output**.

:::note
You can add an output in bulk by selecting multiple hosts or services and clicking **Add Output**.
:::

**Step 3 –** Select **Access Analyzer 26** from the dropdown menu. The Add New Output window opens.

**Step 4 –** Enter the hostname or IP address of your Access Analyzer 26 server and the port (default: 4504).

**Step 5 –** Enter the enrollment token and click **Enroll**. Ensure the connection is successful.

The Activity Monitor agent connects to the server, compares the server's certificate to the expected one embedded in the enrollment token, and sends the token to Access Analyzer. If Access Analyzer confirms the enrollment, both products store the peer certificate's Subject Public Key Info (SPKI) SHA-256 hash and use mTLS with SPKI hash pinning for mutual authentication. You no longer need the enrollment token after this step.

If a certificate changes so that its SPKI hash changes — for example, when the agent generates a new key pair — you must re-enroll. Generate a new token and click **Enroll** again.

**Step 6 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/10.2/admin/outputs/overview.md) topic for additional
information.


## Add File Output

**Step 1 –** On the Monitored Hosts & Services tab, select the host you want and click **Add Output**.

**Step 2 –** Select **File** from the dropdown menu. The Add New Output window opens.

![addnewoutputfile](/images/activitymonitor/9.0/admin/monitoredhosts/addnewoutputfile.webp)

**Step 3 –** Configure the tabs as needed.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/10.2/admin/outputs/overview.md) topic for additional
information.

## Add Syslog Output

**Step 1 –** On the Monitored Hosts & Services tab, select the host you want and click **Add Output**.

**Step 2 –** Select **Syslog** from the dropdown menu. The Add New Output window opens.

![addnewoutputsyslog](/images/activitymonitor/9.0/admin/monitoredhosts/addnewoutputsyslog.webp)

**Step 3 –** Configure the tabs as needed.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/10.2/admin/outputs/overview.md) topic for additional
information.
