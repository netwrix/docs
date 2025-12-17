---
description: >-
  This article provides step-by-step instructions on how to capture client logs using the Support Tool-v2 on a Windows machine.
keywords:
  - client logs
  - Support Tool-v2
  - Windows
sidebar_label: Capture Client Logs
tags: []
title: "Capture Client Logs Using the Support Tool-v2 on a Windows Machine"
knowledge_article_id: kA0Qk0000002B72KAE
products:
  - endpointprotector
---

# Capture Client Logs Using the Support Tool-v2 on a Windows Machine

## Question

How do you capture client logs using the Support Tool-v2 on a Windows machine?

## Answer

To capture client logs using the Support Tool-v2, follow the steps below:

1. Download the Support Tool from [https://download.endpointprotector.com/Support_files/Support_Tool_V2.zip](https://download.endpointprotector.com/Support_files/Support_Tool_V2.zip).
2. Extract the contents of the ZIP archive to a new folder.
3. Run **SupportTool_x64.exe** with administrator privileges.
4. From the drop-down menu, select **Create Log File** and click **Execute**.
5. From the drop-down menu, select **Create DPI Log File** and click **Execute**.
6. Leave the Support Tool open and running in the background. Reproduce the issue or retest the scenario several times.
7. After reproducing or retesting the issue, return to the Support Tool and click **Export Files**.
8. From the drop-down menu, select **Create Archive** and click **Execute**.
9. An archive containing all the log files will be created in the same folder where the Support Tool files were extracted.
10. Once done, send the ZIP archive to the Netwrix Support team.
11. After the logs have been collected and sent to Netwrix Support, you must stop the log collection.
12. From the drop-down menu, select **Delete Log File** and click **Execute**.
13. From the drop-down menu, select **Delete DPI Log File** and click **Execute**.