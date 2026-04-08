---
title: "Active Directory App for QRadar"
description: "Active Directory App for QRadar"
sidebar_position: 10
---

# Active Directory App for QRadar

The Netwrix Active Directory security monitoring solution enables organizations to efficiently
monitor and prevent Active Directory changes, authentications, and attacks in real-time, without any
reliance on native logging or security controls. Using the preconfigured Netwrix Active Directory
App for QRadar, you can quickly understand all Active Directory changes as a whole, patterns of
activity indicative of account compromise, and attempts to compromise security, along with the
ability to block undesired changes and access.

Threat Prevention (formerly StealthINTERCEPT) can be configured to monitor Active Directory events
and send the monitored events to QRadar.

You can integrate Netwrix’ products with the Netwrix Active Directory App for QRadar found in the
IBM X-Force Exchange.

- Install the Active Directory App for QRadar.
- Ensure that Threat Prevention has been configured to send events to QRadar. See the
  [SIEM Tab](/docs/threatprevention/8.0/admin/configuration/systemalerting/siem.md) topic for additional information.

## App Installation in QRadar

Download the
[Stealthbits Active Directory App for QRadar](https://exchange.xforce.ibmcloud.com/hub/extension/STEALTHbits%20Technologies:StealthINTERCEPT%20Dashboard)
from the [IBM X-Force App Exchange](https://exchange.xforce.ibmcloud.com/hub). After downloading it,
follow these steps to install it within QRadar.

**Step 1 –** Click on the Admin tab in QRadar.

**Step 2 –** Under System Configuration, click Extensions Management.

**Step 3 –** Click Add in the top-right corner of the window. Navigate to the location where you
downloaded the app, and select it. Check the Install Immediately checkbox, and then click Add.

**Step 4 –** When the Validating Install window is finished processing, check the Overwrite option.
Then click Install.

**Step 5 –** Close the Extensions Management window, and then select the Active Directory tab in
QRadar.

The Active Directory tab will appear in QRadar. It is necessary for the QRadar SEC token to be saved
to the Settings interface of the Active Directory App. See the [Settings](/docs/threatprevention/8.0/siemdashboard/qradar/navigate/settings.md) topic for
additional information.

## Initial Configuration for the Active Directory App for QRadar

Follow the steps to configure QRadar to receive data from Threat Prevention.

:::tip
Remember, prior to using the Active Directory app for QRadar, Threat Prevention must be configured
to send data to QRadar.
:::


**Step 1 –** Determine the IP address of the QRadar console. If QRadar is hosted on a UNIX machine,
run `ifconfig`. If QRadar is hosted on a Windows machine, run `ipconfig`. This IP address is
required on the [SIEM Tab](/docs/threatprevention/8.0/admin/configuration/systemalerting/siem.md), where you configure
Threat Prevention to send data to QRadar.

**Step 2 –** Navigate to the Admin tab in the QRadar web interface and click Data Sources.

**Step 3 –** Select **Log Sources**.

**Step 4 –** View the Log Sources list. If the data source was not automatically created, click Add,
enter the following information, and click Save.

- Log Source Name – Enter a descriptive name to identify the data source
- Log Source Description – Enter a description of the data source
- Log Source Type – Enter one of the following options:

  - Threat Prevention
  - Threat Prevention Alerts
  - Threat Prevention Analytics

    (It is necessary to set up three separate log sources, and each one should use one of these
    types.)

- Protocol Configuration – Select Syslog
- Log Source Identifier – Enter the hostname or IP address of the host where Threat Prevention is
  installed

**Step 5 –** To test that the configuration is working correctly, check the Log Activity page inside
of the web console for QRadar. There should be logs of events with the Event Name of Unknown. If
there are no events, use a packet sniffer to ensure that packets are being sent correctly between
the two hosts, and diagnose any possible network issues.

The Netwrix Active Directory App will now display activity from the Threat Prevention data.

## Index StealthINTERCEPT Logs

Creating an index for the StealthINTERCEPT logs enhances the performance of the Netwrix Active
Directory App for QRadar.

**Step 1 –** Click on the Admin tab in QRadar.

**Step 2 –** Under System Configuration, click Index Management.

**Step 3 –** Select the “SI1 Policy Name” property from the list of possible attributes.

**Step 4 –** Then click Enable Index.

**Step 5 –** Close the Index Management window, and then deploy the changes within QRadar.

The StealthINTERCEPT logs now have an index.
