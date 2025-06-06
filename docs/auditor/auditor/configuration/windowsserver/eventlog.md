# Adjusting Event Log Size and Retention Settings

Consider that if the event log size is insufficient, overwrites may occur before data is written to the Long-Term Archive and the Audit Database, and some audit data may be lost.

To prevent overwrites, you can increase the maximum size of the event logs and set retention method for these logs to "_Overwrite events as needed_". This refers to the following event logs:

- Application
- Security
- Setup
- System
- Applications and Services logs > Microsoft>Windows > TaskScheduler > Operational
- Applications and Services logs > Microsoft > Windows > DNS-Server > Audit (only for DCs running Windows Server 2012 R2 and above)
- Applications and Services logs > AD FS > Admin log (for AD FS servers )

Refer to the following Microsoft [article to read about the recommended event log settings](https://support.microsoft.com/en-us/help/957662/recommended-settings-for-event-log-sizes-in-windows).

The procedure below provides a possible way to specify the event log settings manually. However, if you have multiple target computers, consider configuring these settings via Group Policy as also described in this section

## Configure the Event Log Size Manually

Follow the steps to configure Event Log Size and Retention Settings.

__Step 1 –__ On a target server, navigate to Start > Windows Administrative Tools > Event Viewer.

__Step 2 –__ Navigate to Event Viewer tree > Windows Logs, right-click __Security__ and select __Properties__.

[![Log Properties dialog box](/static/img/product_docs/1secure/1secure/configuration/computer/manualconfig_ws_eventviewerpr2016_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/manualconfig/manualconfig_ws_eventviewerpr2016.png)

__Step 3 –__ Make sure Enable logging is selected.

__Step 4 –__ In the Maximum log size field, specify the desired log size.

__Step 5 –__ Make sure the Do not overwrite events (Clear logs manually) check box is cleared. If selected, change the retention method to _Overwrite events as needed (oldest events first)_.

Make sure the Maximum security log size group policy does not overwrite your log settings. To check this, start the Group Policy Management console, proceed to the GPO that affects your server, and navigate to Computer Configuration > Policies > Windows Settings > Security Settings > Event Log.

Repeat these steps for the following event logs:

- __Windows Logs__ __>__ __Application__
- __Windows Logs__ __>__ __System__
- __Applications and Services Logs > Microsoft > Windows > TaskScheduler > Operational__

  Configure setting for TaskScheduler/Operational log only if you want to monitor scheduled tasks.
- __Applications and Services Logs > Microsoft > Windows > DNS-Server > Audit__

  Configure setting for DNS log only if you want to monitor DNS changes. The log is available on Windows Server 2012 R2 and above and is not enabled by default. See Microsoft documentation for more information on how to enable this log.
- __Applications and Services Logs__ __>__ __AD FS__ __>__ __Admin__

  Applies to the AD FS servers.

## Configure the Event Log Size Using Group Policy

Personnel with administrative rights can use Group Policy Objects to apply configuration settings to multiple servers in bulk.

Follow the steps to configure settings for Application, System and Security event logs.

__Step 1 –__ Open the Group Policy Management Editor on the domain controller and go to __Computer Configuration > Policies > Administrative Templates > Windows Components > Event Log Service__.

__Step 2 –__ Select the log you need.

__Step 3 –__ Edit Specify the maximum log file size setting; the value is usually set to _4194240 KB_.

__Step 4 –__ Specify retention settings for the log; usually it is Overwrite as needed.

Follow the steps to configure settings for other logs.

__Step 1 –__ Open the registry editor and go to
HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\<log\_name>. For example: HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Directory Service

__Step 2 –__ Set the MaxSize to the required decimal value (in bytes).

[![gpo_eventlog_regedit_thumb_0_0](/static/img/product_docs/auditor/auditor/configuration/windowsserver/gpo_eventlog_regedit_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/configviagpo/gpo_eventlog_regedit.png)

You can configure Group Policy Preferences to push registry changes to the target domain computers. For the example above (Directory Service Log), perform the following steps.

__Step 1 –__ In Group Policy Management Console on the domain controller go to __Computer > Preferences > Windows Settings > Registry__.

__Step 2 –__ Right-click Registry and select __New > Registry Item__.

__Step 3 –__ In the Properties window on the General tab select the following:

- Action > Create
- Hive > HKEY\_LOCAL\_MACHINE
- Key Path – browse to MaxSize value at the
  SYSTEM\CurrentControlSet\Services\EventLog\Directory Service  
  [![gpo_eventlog_gpmc_thumb_0_0](/static/img/product_docs/auditor/auditor/configuration/windowsserver/gpo_eventlog_gpmc_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/configviagpo/gpo_eventlog_gpmc.png)

__Step 4 –__ Change the MaxSize REG\_DWORD to the required decimal value (in bytes).

__Step 5 –__ Save the preferences and link them to the necessary servers (OUs).

When finished, run the ```gpupdate /force``` command to force group policy update.
