---
description: >-
  Explains the cause and resolutions for Event ID 1016 where the WMI Classes
  data provider cannot get Win32_Printer information; includes steps to start
  the Print Spooler service and alternatives to omit printer monitoring.
keywords:
  - Win32_Printer
  - Print Spooler
  - WMI
  - Event ID 1016
  - omitcollectlist.txt
  - omiterrors.txt
  - Netwrix Auditor
  - monitoring
products:
  - auditor
sidebar_label: WMI Classes Data Provider Failed to Get the Inform
tags: []
title: "WMI Classes Data Provider Failed to Get the Information on Win32_Printer Error"
knowledge_article_id: kA00g000000H9bkCAC
---

# WMI Classes Data Provider Failed to Get the Information on Win32_Printer Error

## Symptom

The Netwrix Auditor Health Log contains the following error:

```text
Event ID 1016: <server>: Error: The WMI Classes data provider failed to get the information on "Win32_Printer" due to the following error: 'Generic failure'"
```

## Cause

The Print Spooler service is stopped or disabled on the monitored server.

## Resolution

1. Log on to the problematic server.
2. Start the **Services** snap-in (Click **Start** > **Run**, type `services.msc` and press Enter).
3. Locate the **Print Spooler** service and double-click it.
4. In the **General** tab, review the **Startup type** value − switch it to **Automatic** and click **Start**.
5. Click **Apply**.

![User-added image]./../0-images/ka0Qk0000001f7Z_0EM4u000002CQsV.png)

---

Both of the alternative resolutions are aimed at removing the error from reports. The downside is that the collector will not report any information regarding printers on omitted servers. Use the alternative resolutions if you would like to disable Print Spooler service monitoring on selected servers.

### Alternative Resolution 1

You may choose to omit this error using the `omitcollectlist.txt` (for Activity Records) or `omitsitcollectlist.txt` (for State-in-Time data).

Use the following syntax:

```text
monitoring plan name, server name, WIN32_PRINTER
```

Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8/configuration/windowsserver/overview

This method can be used to exclude the error by excluding the Print Spooler events from the monitoring scope. Refer to the following article for the full list of objects monitored on Windows Servers: https://docs.netwrix.com/docs/auditor/10_8/configuration/windowsserver/overview Scroll down to **Object type** > **Printing**.

The **Printer Changes** report for Windows Server also will show only events collected before this resolution.

### Alternative Resolution 2

You may omit the error itself from being displayed in the Netwrix Auditor Health Log using the `omiterrors.txt` file.

Use the following syntax:

```text
monitoring plan name, server name,*The WMI Classes data provider failed to get information on Win32_Printer due to the following error: Generic failure*
```

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8/configuration/windowsserver/overview
- https://docs.netwrix.com/docs/auditor/10_8/configuration/windowsserver/overview

