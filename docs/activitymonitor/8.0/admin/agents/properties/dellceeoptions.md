---
title: "Dell CEE Options Tab"
description: "Dell CEE Options Tab"
sidebar_position: 70
---

# Dell CEE Options Tab

The Dell CEE Options tab provides options to configure Dell Common Event Enabler (CEE) settings for
monitoring Dell devices. File activity monitoring leverages the Dell CEE to deliver activity events
from Dell devices.

CEE supports two protocols to deliver events to Activity Monitor: RPC and HTTP. An agent can receive
activity from several CEEs at the same time. Among them can be a local Windows CEE, remote Windows
and Linux CEEs. Windows versions of CEEs can use both RPC and HTTP protocols. Linux versions can
only support HTTP protocols.

:::note
Dell CEE can be installed on the same host as the activity agent, or on a different host.
If it is installed on the same host, the activity agent can configure it automatically.
:::


![EMC CEE Options  Tab](/images/activitymonitor/8.0/admin/agents/properties/emcceeoptionstab.webp)

The options are:

- Check CEE Status – Click the button to confirm the status of Dell CEE installed on the agent
  server
- Choose the CEE event delivery mode:

    - Synchronous real-time delivery – Events are delivered immediately as they occur, one by one.
    - Asynchronous bulk delivery (VCAPS) - Events are delivered in batches with a cadence based on a
      time period or a number of events. As this mode provides better throughput, it is recommended
      for heavily loaded servers. If selected, specify how often events are delivered by Dell CEE
      using the following options:

        - Every [number] seconds (from 60 to 600) - Default is 60 seconds
        - Or every [number] events (from 10 to 10000) - Default is 100 events
        - The number of events and number of seconds, are used simultaneously, whichever is reached
          first

- Choose network protocols for event delivery:

    - Both – Delivers events via MS-RPC and HTTP protocol
    - MS-RPC – Delivers events via the MS-RPC protocol (Windows versions of CEE only)
    - HTTP – Delivers events via the HTTP protocol (Windows and Linux versions of CEE)

        - HTTP port – The port number to communicate with the agent. The default port number is
          4492, modify if needed. The agent will add the port to the firewall exclusions
          automatically.
        - IPv4 or IPv6 allowlist – Specify IP addresses of CEE instance that are allowed to connect
          to the agent via the HTTP protocol. Leave blank to accept connections from any host.

:::note
For Remote Windows CEE or Linux CEE, Manual Configuration is needed.
:::


Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The Agent
Properties window closes.

## Windows CEE Manual Configuration

Windows CEE is configured with the windows registry and depends on the selected event delivery mode,
AUDIT or VCAPS.

For the synchronous real-time delivery mode (AUDIT), use the following steps.

**Step 1 –** Navigate to the following windows registry key
`HKEY_LOCAL_MACHINE\SOFTWARE\EMC\CEE\CEPP\Audit\Configuration`.

**Step 2 –** Set the `Enabled` parameter to 1.

**Step 3 –** If the `EndPoint` parameter is empty, set it to the string listed below. If it is not
empty (i.e. some other 3rd party application is also receiving activity events from CEE), append the
following string to the existing `EndPoint` value, separating them with a semicolon.

- For the RPC protocol, `StealthAUDIT@ip-address-of-the-agent`
- For the HTTP protocol, `StealthAUDIT@http://ip-address-of-the-agent:port`

**Step 4 –** Restart the CEE Monitor service.

For the asynchronous bulk delivery mode with a cadence based on a time period or a number of events
(VCAPS), use the following steps.

**Step 1 –** Navigate to the following windows registry key
`HKEY_LOCAL_MACHINE\SOFTWARE\EMC\CEE\CEPP\VCAPS\Configuration`.

**Step 2 –** Set the `Enabled` parameter to 1.

**Step 3 –** If the `EndPoint` parameter is empty, set it to the string listed below. If it is not
empty (i.e. some other 3rd party application is also receiving activity events from CEE), append the
following string to the existing `EndPoint` value, separating them with a semicolon.

- For the RPC protocol, `StealthVCAPS@ip-address-of-the-agent`
- For the HTTP protocol, `StealthVCAPS@http://ip-address-of-the-agent:port`

**Step 4 –** Set `FeedInterval` to how often, in seconds, information is sent from CEE to the
Activity Monitor. The default is 60 seconds. The range is from 60 seconds to 600 seconds.

**Step 5 –** Set `MaxEventsPerFeed` to how many events must occur before information is sent from
CEE to Activity Monitor. The default is 100 events. The range is from 10 events to 10,000 events.

:::note
The `FeedInterval` and `MaxEventsPerFeed` delivery cadences are used simultaneously.
:::


**Step 6 –** Restart the CEE Monitor service.

:::note
All protocol strings are case sensitive.
:::


## Linux CEE Manual Configuration

CEE binaries, configuration, and log files are located in `/opt/CEEPack` directory.

**Step 1 –** Update the configuration file `/opt/CEEPack/emc_cee_config.xml`.

**Step 2 –** Restart CEE with `/opt/CEEPack/emc_cee_svc restart` command.

The CEE configuration file is located at` /opt/CEEPack/emc_cee_config.xml`. You need to add an
endpoint to the `EndPoint` node. In addition to the `EndPoint` node, you need to set `Enabled` to
`1` in either `Audit` or `VCAPS` if the Activity Monitor is the only application getting events from
the CEE. If there are multiple applications, enable the delivery modes accordingly.

The EndPoint node's format is a semicolon-separated list of applications
in` PartnerId@http://address-of-the-app:port` format.

For the Activity Monitor use the following strings:

- For Audit, `StealthAUDIT@http://ip-address-of-the-agent:port`
- For VCAPS, `StealthVCAPS@http://ip-address-of-the-agent:port`

Here's an example for the synchronous delivery (Audit):

```xml
<?xml version="1.0" encoding="utf-8"?>

**<CEEConfig version="8.8.1.0">**

<CEPP>

**<Audit>**

<Configuration>

**<Enabled>1</Enabled>**

<EndPoint>StealthAUDIT@http://[IP Address]:[Port]</EndPoint>

**</Configuration>**

</Audit>

...

**<VCAPS>**

<Configuration>

**<Enabled>0</Enabled>**

<EndPoint>StealthVCAPS@http://[IP Address]:[Port]</EndPoint>

**<FeedInterval>60</FeedInterval>**

<MaxEventsPerFeed>100</MaxEventsPerFeed>

**</Configuration>**

</VCAPS>

</CEPP>
```

Here's an example for the asynchronous delivery (VCAPS):

```xml
<?xml version="1.0" encoding="utf-8"?>

**<CEEConfig version="8.8.1.0">**

<CEPP>

**<Audit>**

<Configuration>

**<Enabled>0</Enabled>**

<EndPoint>StealthAUDIT@http://[IP Address]:[Port]</EndPoint>

**</Configuration>**

</Audit>

...

**<VCAPS>**

<Configuration>

**<Enabled>1</Enabled>**

<EndPoint>StealthVCAPS@http://[IP Address]:[Port]</EndPoint>

**<FeedInterval>60</FeedInterval>**

<MaxEventsPerFeed>100</MaxEventsPerFeed>

**</Configuration>**

</VCAPS>

</CEPP>
```

Make sure to set `Enabled` to `1` only in `Audit` or `VCAPS` if Activity Monitor is the only product
receiving activity from CEE. Otherwise, enable the modes according to all product requirements.

If you want to send activity to several 3rd party applications, separate them with semicolons.

```xml
<Audit>

**<Configuration>**

<Enabled>1</Enabled>

**<EndPoint>Splunk@10.20.30.40:12345;StealthAUDIT@http://[IP Address]:[Port]</EndPoint>**

</Configuration>

</Audit>
```

:::note
All protocol strings are case sensitive.

:::
