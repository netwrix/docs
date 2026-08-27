---
title: "Integrate Alerts with Add-On"
description: "Integrate Alerts with Add-On"
sidebar_position: 30
---

# Integrate Alerts with Add-On

Netwrix ships the add-on with a special set of alerts developed by Netwrix industry experts. These
alerts are helpful for handling some routine cases that require service manager's attention, e.g.,
account lockouts, changes to administrative groups. The alerts have preset filters. You can upload
them to Auditor, and then integrate them with the add-on and your ServiceNow system. These alerts
have an ITSM Addon prefix in their names.

Alternatively, you can integrate any default Auditor alert or your custom-built alerts with the
addon.

By default, none of the alerts are integrated with the add-on. To instruct the add-on to create
tickets for alerts, enable integration.

In Auditor, go to Alerts, select the required alerts, click Edit, and in the Response
Action section of the alert properties specify the full path to Netwrix.ITSM.AlertResponseAction.exe
file (the add-on component responsible for alert handling), for example,
_C:\Addon\ITSM_SI\Netwrix.ITSM.AlertResponseAction.exe_.

**NOTE:** Ensure that alerting is turned on in Auditor. Manually set the state to "**On**"
for all alerts you want to integrate with the add-on.

Perform the following steps to integrate alerts with the add-on:

**Step 1 –** On the computer where the Auditor Server is installed, start the **Command Prompt** and
run the **Netwrix.ITSM.AlertsUploaderTool.exe** tool. The tool is located in the add-on folder. For
example:

C:\>cd C:\Add-on

C:\Add-on\Netwrix.ITSM.AlertsUploaderTool.exe

**Step 2 –** Execute one of the following commands depending on your task.

| To...                                    | Execute...                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------------------------| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upload alert set shipped with the add-on | Netwrix.ITSM.AlertsUploaderTool.exe /UploadTemplates Once uploaded, the alerts appear in the **All Alerts** list in Auditor; their names start with "_ITSM add-on_". Manually set their state to **"On**" to turn them on.
