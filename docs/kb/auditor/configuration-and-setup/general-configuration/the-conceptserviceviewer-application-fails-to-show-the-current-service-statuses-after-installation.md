---
description: >-
  After installation, the conceptServiceViewer application may fail to display
  current service statuses and log a WMI schema registration error. This article
  describes the error and provides step-by-step remediation, including ensuring
  service accounts are local administrators and repairing the installation.
keywords:
  - conceptServiceViewer
  - Concept Searching Event Viewer
  - WMI schema
  - local administrator
  - services.msc
  - conceptInstaller
  - Server 2016
  - conceptCollector
  - conceptIndexer
  - conceptClassifier
products:
  - auditor
  - data-classification
sidebar_label: The conceptServiceViewer application fails to show
tags: []
title: "The conceptServiceViewer application fails to show the current service statuses after installation"
knowledge_article_id: kA00g000000H9eICAS
---

# The conceptServiceViewer application fails to show the current service statuses after installation

## Symptom

Typically an **error** similar to the below is logged to the **Concept Searching** **Event Viewer** log:

```text
Error: System.Exception: This schema for this assembly has not been registered with WMI.
at System.Management.Instrumentation.Instrumentation.Initialize(Assembly assembly)
at System.Management.Instrumentation.Instrumentation.GetInstrumentedAssembly(Assembly assembly)
at System.Management.Instrumentation.Instrumentation.GetFireFunction(Type type)
at System.Management.Instrumentation.BaseEvent.get_FireFunction()
at System.Management.Instrumentation.BaseEvent.Fire()
```

The specified **error** can occur when the initial **installation** is completed with an **account** that does not have **local administration** **rights**.

## Resolution

1. Ensure that the **account** specified to run each **Windows** **service** is configured as a **local** **administrator**:
   1. Open the **Run** window by clicking the **Start** button and then clicking **Run**.
   2. In the **Run** window, type `services.msc` and then click **OK**.
   3. Locate each **Windows** service (`conceptCollector`, `conceptIndexer`, and `conceptClassifier`).
   4. Ensure that each **user** specified as the `Log on as` value is a **local administrator**.
2. **Restart** the **Server**.
3. **Logon** as the specified service account (or another **local administrator**).
4. Re-run the **conceptInstaller application** and run a **"Repair"** operation.

## Making the user a local administrator on Server 2016 computer

1. Click **Start** > **Server Manager**.
2. On the upper-right corner of the **Server Manager** dashboard page, click **Tools** > **Computer Management**.
3. In the navigation pane of the **Computer Management** page, expand **Local Users and Groups**, and then click **Users**.
4. From the **Users** list, right-click the **user** to which you want to assign **administrator** rights, and click **Properties**.
5. Click the **Member Of** tab, and click **Add**.
6. On the **Select Group** page, type `Administrators`, and then click **OK**.
7. Click **Apply** and **OK**.
