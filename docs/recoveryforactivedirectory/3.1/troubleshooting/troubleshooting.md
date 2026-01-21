---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 60
---

# Troubleshooting

This topic provides steps for troubleshooting common issues for the following Identity Recovery components:

- RSAT Extension Recovery Diagnostics
- RSAT Extension Rollback Diagnostics
- RSAT Extension Registration Diagnostics
- Recovery Application Server Diagnostics

## RSAT Extension Recovery

The RSAT Extension Recovery Diagnostics flow chart helps diagnose issues when the Recycle Bin is
missing or empty in Active Directory Users and Computers (ADUC).

![RSAT Extension Recover Diagnostics](/images/recoveryforactivedirectory/3.1/troubleshooting/recoverrsat.webp)

## RSAT Extension Rollback

The RSAT Extension Rollback Diagnostics flow chart helps diagnose issues when the rollback
right-click menu option is missing in ADUC.

![RSAT Extension Rollback Diagnostics](/images/recoveryforactivedirectory/3.1/troubleshooting/rollbackrsat.webp)

## RSAT Extension Registration Validation

In the Recovery Configuration Utility, the RSAT Extension Register/Unregister button is used to
activate the new right-click menu options in ADUC. This is done once per domain. The registration
status is displayed as either Registered or Unregistered.

Follow the steps to validate the registration status of the RSAT Extension by finding the presence
of a specific GUID in ADSI Edit.

**Step 1 –** On the domain joined machine or domain controller, ensure the user is logged in as a
Domain Administrator.

**Step 2 –** Open ADSI (Active Directory Services Interfaces Editor) by navigating to
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Administrative Tools. The ADSI Edit window
opens.

**Step 3 –** If the Configuration naming context does not display automatically, navigate to
**Action** **> Connect to...** and the Connection Settings window opens.

**Step 4 –** On the Connection Settings window, select **Configuration** under the Select a well
known Naming Context radio button. Click **OK**. The Connection Settings window closes and the AD
Configuration Partition (also called naming context) opens on the left hand pane.

**Step 5 –** Navigate from the AD Configuration Partition folder until **CN=DisplaySpecifiers** is
selected. In this folder, select either **CN=409** which is the code for US English or another code
for the active locale of the operating system if not using US English.

**Step 6 –** Double-click on the proper locale (such as CN=409). A list is displayed in the middle
pane. Right click on any of the Display Specifiers and select **Properties** from the menu. The
Properties window is displayed. Select the adminContextMenu attribute or click Edit to show the
Multi-valued String Editor listing known GUIDs. In the list, the RSAT Extension GUID entry is:

`{50fb3a3c-5700-4232-ae3b-c6d49a6a97ab}`

:::note
The adminContextMenu attribute of every object in the active locale (i.e. CN=409 for US
English), should have the GUID above.
:::

**Step 7 –** Verify the GUID.

If the GUID matches the number above, the RSAT Extension is successfully registered.

## Recovery Application Server

The Recovery Application Server Diagnostics flow chart helps diagnose issues when the Netwrix
Recovery Server service is not running.

![Application Server Diagnostics](/images/recoveryforactivedirectory/3.1/troubleshooting/applicationserver.webp)

## Log Files

Log files are available at the following locations:

On the Identity Recovery server

- ...\Netwrix\Recovery for Active Directory\Logs
- ...\Netwrix\Recovery for Active Directory\ModuleEngine.exe.log
- ...\Netwrix\Recovery for Active Directory\TaskServer.exe.log

On the domain controllers for backups

- ...\Netwrix\Netwrix Recovery Server Backup\Logs
