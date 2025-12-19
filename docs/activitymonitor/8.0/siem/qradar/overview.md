---
title: "Netwrix File Activity Monitor App for QRadar"
description: "Netwrix File Activity Monitor App for QRadar"
sidebar_position: 10
---

# Netwrix File Activity Monitor App for QRadar

Netwrix File Activity monitoring solutions enable organizations to successfully, efficiently, and
affordably monitor file access and permission changes across Windows and Network Attached Storage
(NAS) file systems in real-time. Using the preconfigured  Netwrix File Activity Monitor App for
QRadar, users can quickly understand all file activities as a whole, for specific resources or
users, as well as patterns of activity indicative of threats such as crypto ransomware or data
exfiltration attempts. With full control over the data, users can create custom searches, all while
enabling QRadar to correlate file system activity with any log source.

This document describes how to integrate Netwrix products with the Netwrix File Activity Monitor App
for QRadar found in the IBM X-Force Exchange. Any Netwrix products can be configured to monitor file
system activity and send the monitored events to QRadar. After installing this app, ensure that
either the Activity Monitor, Threat Prevention, or Access Analyzer has been configured to send
events to QRadar. See the [Netwrix Technical Knowledge Center](https://helpcenter.netwrix.com/) on
the Netwrix website for additional information.

## App Installation in QRadar

Download the [Stealthbits File Activity Monitor App for
QRadar](https://exchange.xforce.ibmcloud.com/hub/extension/STEALTHbits Technologies:STEALTHbits File
Activity Monitor) from the [IBM X-Force App Exchange](https://exchange.xforce.ibmcloud.com/hub).
After downloading the Stealthbits File Activity Monitor App for QRadar, follow the steps to install
it within QRadar.

**Step 1 –** Click on the Admin tab within QRadar.

**Step 2 –** Under System Configuration, click Extensions Management.

**Step 3 –** Click **Add** in the top-right corner of the window. Navigate to the location where you
downloaded the app, and select it. Check the Install Immediately checkbox, and then click Add.

**Step 4 –** When the Validating Install window is finished processing, check the Overwrite option.
Then click **Install**.

**Step 5 –** Close the Extensions Management window, and then select the File Activity Monitor tab
within QRadar.

The File Activity Monitor tab will appear within QRadar. It is necessary for the QRadar SEC token to
be saved to the Settings interface of the **File Activity Monitor** App. See the
[Settings](/docs/activitymonitor/8.0/siem/qradar/settings.md) topic for additional information.

## Initial Configuration of the QRadar App

Follow the steps to configure QRadar to receive data from Stealthbitsproducts.

**Step 1 –** Determine the IP Address of the QRadar Console, e.g. run the _ifconfig_ command. This
information is required for the following sections:

- See the Syslog Tab section of the Stealthbits File Activity Monitor User Guide for information on
  how to configure the Stealthbits Activity Monitor to send data to QRadar.
- See the SIEM Tab section of the StealthINTERCEPT Admin Console User Guide for information on how
  to configure StealthINTERCEPT to send data to QRadar.

**Step 2 –** Navigate to the **Admin** tab in the QRadar web interface and click Data Sources.

**Step 3 –** Select Log Sources.

**Step 4 –** View the Log Sources list. If the data source was not automatically created, click Add
and enter the following information:

- Log Source Name – Enter a descriptive name to identify the data source
- Log Source Description – Enter a description of the data source
- Log Source Type – Stealthbits StealthINTERCEPT
    - Use this source type for both the Stealthbits Activity Monitor and StealthINTERCEPT.

**Step 5 –** Test that the configuration is working correctly. Check the Log Activity page inside of
the web console for QRadar. There should be logs of events that are generated as soon as QRadar
starts receiving data. If there are no events, use a packet sniffer to ensure that packets are being
sent correctly between the hosts, and diagnose any possible network issues.

- Protocol Configuration – Select Syslog
- Log Source Identifier – Enter the host name or IP Address of the host where the Stealthbits
  Activity Monitor Console OR StealthINTERCEPT is installed
- Then click Save. Remember, prior to using the StealthbitsFile Activity Monitor App for QRadar, the
  related Stealthbits product must be configured to send data to QRadar.

The  Stealthbits File Activity Monitor App for QRadar can now display activity data from either the
 Stealthbits Activity Monitor or StealthINTERCEPT.
