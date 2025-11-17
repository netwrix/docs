---
description: >-
  Troubleshoot Netwrix Data Classification services that fail to start due to
  credential or timeout issues and learn how to verify credentials and increase
  the Windows service startup timeout.
keywords:
  - data classification
  - service start
  - ServicesPipeTimeout
  - services.msc
  - regedit
  - Windows services
  - startup timeout
  - credentials
products:
  - auditor
  - data-classification
sidebar_label: Data Classification services do not start
tags: []
title: "Data Classification services do not start"
knowledge_article_id: kA00g000000H9e7CAC
---

# Data Classification services do not start

You may see one of the following errors:

- The service did not start due to a logon failure
- The service did not respond to the start or control request in a timely fashion
- Service cannot be started. The service process could not connect to the service controller
- A timeout was reached (30000 milliseconds) while waiting for the `<ServiceName>` service to connect.

Typically this is related to one of the following issues:

- Invalid/Incorrect credentials
- Low service start-up time thresholds for the server specification

## Verify Credentials

1. Open the **Run** window by clicking the **Start** button and then clicking **Run**.  
2. In the **Run** window, type `services.msc` and then click **OK**.  
3. Locate the affected **service**.  
4. Right-click and select **Properties**.  
5. Select the tab **Log On**.  
6. Update the **credentials**.  
7. Click **OK**.  
8. **Restart** the **service**.

## Increase Service Start-up Timeout

We may need to increase the default startup timeout period on the server. Follow the steps below to increase the startup timeout value for all services:

1. Open the **Run** window by clicking the **Start** button and then clicking **Run**.  
2. In the **Run** window, type `regedit` and then click **OK** to open the **Registry Editor**.  
3. Locate and then select the following registry subkey: `HKEY_LOCAL_MACHINESYSTEMCurrentControlSetControl`  
4. In the right pane locate the `ServicesPipeTimeout` entry.  
5. Right-click the `ServicesPipeTimeout` entry and select **Modify**.  
6. Ensure **Decimal** is selected.  
7. Specify a value of `120000` (2 mins).  
8. Click **OK**.  
9. **Restart** the server.

## Note

If the `ServicesPipeTimeout` entry does not exist you should first create it:

1. On the Edit menu hover over **New** and then select `DWORD` `Value`.  
2. Type `ServicesPipeTimeout` and then press **ENTER**.
