---
title: "Deploy the Add-On"
description: "Deploy the Add-On"
sidebar_position: 10
---

# Deploy the Add-On

Follow the steps to deploy the Add-On for ConnectWise.

**Step 1 –** Prepare Auditor for using the add-on:

1. In the Auditor settings, enable Integration API and specify connection port. See the
   [Integrations](/docs/auditor/10.7/admin/settings/integrations.md) topic for additional information.
2. Make sure your monitoring plans set up in Auditor are using Audit Databases to store collected
   data. See the [Audit Database](/docs/auditor/10.7/admin/settings/auditdatabase.md) topic for additional
   information.

**Step 2 –** Download the add-on package and copy it to the computer where Auditor Server resides.

**Step 3 –** Unpack the ZIP archive to a folder of your choice; by default, it will be unpacked to
the Netwrix Auditor Add-On for ConnectWise Manage folder.

**Step 4 –** Run the install.cmd file. It will deploy and enable the Netwrix Auditor **ConnectWise
Manage Integration Service**.

**Step 5 –** Run the ConfigureConnection.exe and follow the steps of the wizard to configure
connection and ticketing settings for ConectWise Manage. See the
[Configure ConnectWise ](/docs/auditor/10.7/addon/connectwise/configure.md)topic for additional information.

**Step 6 –** (optional) To adjust the add-on operation and data flow settings, edit the
ITSMSettings.xml file. See the [Operational Settings](/docs/auditor/10.7/addon/connectwise/operationalsettings.md) topic for additional
information.

**Step 7 –** In Auditor, go to Alerts, select the required alerts, click Edit, and in the Response
Action section of the alert properties specify the full path to Netwrix.ITSM.AlertResponseAction.exe
file (the add-on component responsible for alert handling), for example,
_C:\Addon\ITSM_CW\Netwrix.ITSM.AlertResponseAction.exe_.

## Enabling TLS 1.2 Usage

The add-on supports Transport Layer Security (TLS) 1.2 security protocol. By default, this
capability is disabled. To enable it, in the **ConnectWiseSettings.xml**, locate the
**`<EnableTls12>`** parameter and set its value to _TRUE_.
