---
title: "Threat Hunting App for Splunk"
description: "Threat Hunting App for Splunk"
sidebar_position: 30
---

# Threat Hunting App for Splunk

The Netwrix Threat Hunting solution enables organizations to target and hunt active cyber threats.
Using the preconfigured Netwrix Threat Hunting App for Splunk, analysts have a powerful incident
response tool that lets them compile forensic evidence efficiently to investigate
the scope, impact, and root cause of an incident. The Netwrix Threat Hunting App for Splunk focuses
in on the actions of specific users, including the files they accessed and changes they made to
escalate privileges to data resources.

You can integrate Netwrix products with the Netwrix Threat Hunting App for Splunk. You can configure
both Threat Prevention and Netwrix File Activity Monitor to monitor Threat Hunting events and
send the monitored events to Splunk.

- If you configure only Netwrix File Activity Monitor to send events to Splunk, only the cards that
  show file system activity display data.
- If you configure only Threat Prevention to send events to Splunk, all the cards display data.

After installing the Threat Hunting App for Splunk, ensure that you have configured the applicable
Netwrix products to send events to Splunk.

## App Installation in Splunk (Threat Hunting)

Download the [Stealthbits Threat Hunting App for Splunk](https://splunkbase.splunk.com/app/3646/)
from the [Splunkbase](https://splunkbase.splunk.com/). Then follow the
[Splunk Add-ons](http://docs.splunk.com/Documentation/AddOns/released/Overview/Installingadd-ons)
guide provided by Splunk to install the app.

The Netwrix Threat Hunting tab appears in the Splunk web interface.

After installing the Netwrix Threat Hunting App for Splunk, configure it to receive data from either
Threat Prevention or Netwrix File Activity Monitor.

## Initial Configuration of the Threat Hunting App for Splunk

To configure Splunk to receive data from either Threat Prevention or Netwrix
Activity Monitor:

:::tip
Before using the Netwrix Threat Hunting App for Splunk, you must configure the relevant Netwrix
product to send data to Splunk.
:::


**Step 1 –** Determine the IP address of the Splunk console. If Splunk is hosted on a UNIX machine,
run `ifconfig`. If Splunk is hosted on a Windows machine, run `ipconfig`. This IP address is
required for the following:

- To configure Threat Prevention to send data to Splunk. See the
  [SIEM Tab](/docs/threatprevention/8.1/admin/configuration/systemalerting/siem.md) topic for additional information.
- To configure Netwrix File Activity Monitor to send data to Splunk. See the File Activity Monitor
  App for Splunk topic in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

**Step 2 –** Navigate to the Settings menu in the Splunk web interface and click Data Inputs.

**Step 3 –** Select UDP.

**Step 4 –** Click New and add a new data input with port 514. If another Splunk UDP input is
already using 514, you should be able to safely use another value (515 or higher), as long as the
network doesn't block it.

**Step 5 –** Click Next.

**Step 6 –** Under Input Settings, enter the following information:

- Source Type – Enter one of the following options:

  - For data coming from Threat Prevention – Threat Prevention
  - For data coming from the Netwrix File Activity Monitor – **SFAM**

- App context – Select Search and Reporting
- Host – Select IP
- Index – Select Default

**Step 7 –** Review and save the new settings.

**Step 8 –** To test that the configuration is working correctly, check the Search and Reporting app
inside of the web console for Splunk (search for SFAM or Threat Prevention). There should be logs of
events that are generated as soon as Splunk starts receiving data. If there are no events, use a
packet sniffer to ensure that packets travel correctly between the two hosts, and diagnose
any possible network issues.

The Netwrix Threat Hunting App will now display activity from either the Activity Monitor data or
the Threat Prevention data.
