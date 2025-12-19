---
title: "SIEM"
description: "SIEM"
sidebar_position: 210
---

# SIEM

Netwrix Auditor Add-on for SIEM helps you to get most from your SIEM investment. This topic focuses
on the AlienVault USM SIEM solution.

The add-on works in collaboration with Netwrix Auditor, supplying additional data that augments the
data collected by the SIEM solution.

The add-on enriches your SIEM data with actionable context in human-readable format, including the
before and after values for every change and data access attempt, both failed and successful.
Aggregating data into a single audit trail simplifies analysis, makes your SIEM more cost effective,
and helps you keep tabs on your IT infrastructure.

Implemented as a PowerShell script, this add-on facilitates the audit data transition from Netwrix
Auditor to the SIEM solution. All you have to do is provide connection details and schedule the
script for execution.

On a high level, the add-on works as follows:

1. The add-on connects to the Netwrix Auditor server and retrieves audit data using the Netwrix
   Auditor Integration API.
2. The add-on processes Netwrix Auditor-compatible data (Activity Records) into log events that work
   as input for the SIEM solution. Each event contains the user account, action, time, and other
   details.
3. The add-on creates a special Windows event log named **Netwrix_Auditor_Integration** and stores
   events there. These events are structured and ready for integration with the SIEM solution.

See the [Integration API](/docs/auditor/10.7/api/overview.md) topic for additional information on the structure
of the Activity Record and the capabilities of the Netwrix Auditor Integration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

### Netwrix Auditor Activity Records to Event Log Add-on

| On...                                          | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor side                               | - Auditor version is **9.8** or later. - The Audit Database settings are configured in Auditor Server. - The TCP 9699 port (default Integration API port) is open for inbound connections. The user retrieving data from the Audit Database is granted the Global reviewer role in Auditor or is a member of the Netwrix Auditor Client Users group. Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor Administrators group. In this case, this user will have the most extended permissions in the product.                                                                                                                                            |
| The computer where the script will be executed | - PowerShell **3.0** or later must be installed. - .NET **4.5** or later must be installed. - Execution policy for powershell scripts is set to _"Unrestricted"_. Run Windows PowerShell as administrator and execute the following command: Set-ExecutionPolicy Unrestricted - The user running the script is granted the write permission on the script folder—the add-on creates a special .bin file with the last exported event. - The user running the script must be a member of the Domain Users group. - At least the first script run should be performed under the account with elevated privileges, as it will be necessary to create event log file and perform other required operations. |

### Netwrix Auditor Alerts to Event Log Add-on

| On...                   | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side | - Auditor version is **9.96** or 10. - The alert response action settings in Auditor Server are configured as follows: - **Take action when alert occurs** is switched **ON** - **Run** field contains the path to Windows PowserShell: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` - **With parameters** field contains the required parameters, including the path to **Netwrix_Auditor_Alerts_to_Event_Log_Add-on.ps1** file. Example: `-File C:\Netwrix_Auditor_Add-on_for_SIEM\Netwrix_Auditor_Alerts_to_Event_Log_Add-on.ps1 -NetwrixPathToCsvData` For details on script parameters, see the section below. - **Write data to CSV file** option is selected - **Command line preview** looks like this: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -File C:\Netwrix_Auditor_Add-on_for_SIEM\Netwrix_Auditor_Alerts_to_Event_Log_Add-on.ps1 -NetwrixPathToCsvData {CsvFile}` - By default, the executable file will be launched under the _LocalSystem_ account. If you want to use another account, make sure it has **Log on as batch job** privilege on Netwrix Auditor server. You may want to perform the test run after configuring the script as the alert response action. If so, consider that current user account (logged on to Auditor client) must have local **Administrator** privileges on AuditorServer where the executable file is located. |

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.

## Activity Records to Event Log Add-on

On a high level, this add-on works as follows:

1. The add-on connects to the Auditor server and retrieves audit data using the Integration API.
2. The add-on processes Netwrix Auditor -compatible data (Activity Records) into log events that
   work as input for Windows event log. Each event contains the user account, action, time, and
   other details.
3. The add-on creates a special Windows event log named Netwrix_Auditor_Integration and stores
   events there. These events are structured and ready for integration with Windows event log.

For more information on the structure of the Activity Record and the capabilities of the Netwrix
Auditor Integration API, refer to [Integration API](/docs/auditor/10.7/api/overview.md).

## Netwrix Auditor Alerts to Event Log Add-on

This add-on works as response action to the alert, as follows:

1. The administrator enables and configured response action for selected alert, as described in the
   following topic:
   [Configure a Response Action for Alert](/docs/auditor/10.7/admin/alertsettings/responseaction.md). Make sure
   to provide correct path to the script file and to select the Write data to CSV file option.
2. When the alert is triggered, the script starts - it retrieves audit data (activity record fields)
   from the CSV file and processes it into log events. Each event contains the user account, action,
   time, and other details.
3. The add-on creates a special Windows event log named Netwrix_Auditor_Integration and stores
   events there. These events are structured and ready for integration with SIEM system.

See the [Configure a Response Action for Alert](/docs/auditor/10.7/admin/alertsettings/responseaction.md)
topic for additional information on the alert response actions and CSV file.
