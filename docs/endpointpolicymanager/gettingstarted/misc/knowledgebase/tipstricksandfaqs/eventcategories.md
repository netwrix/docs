---
title: "List of Endpoint Policy Manager Event Categories and IDs"
description: "List of Endpoint Policy Manager Event Categories and IDs"
sidebar_position: 180
---

# List of Endpoint Policy Manager Event Categories and IDs

## Feature Specific Events

[Remote Work Delivery Manager](#remote-work-delivery-manager)

[Feature Manager for Windows](#feature-manager-for-windows)

[Least Privilege Manager](#least-privilege-manager)

[Least Privilege Manager Mac OS](#least-privilege-manager-mac-os)

[Java Rules Manager](#java-rules-manager)

[Browser Router](#browser-router)

[Device Manager](#device-manager)

[Network Security Manager](#network-security-manager)

[Cloud Client](#cloud-client)

## Global Event Ranges

| Event IDs | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| 100-199   | Events related to policy processing, and specifically Group Policy processing.              |
| 200-299   | General events, such as errors that don't belong to any other category.                     |
| 300-599   | Product-specific events, such as errors that don't belong to any other category.            |
| 600-9999  | Events related to operational activities, such as allowing, blocking or elevating a process |

### Policy Processing (100-199)

100. Policies refreshed successfully

Description: Processed Group Policy successfully.

Message: Policies for %1 have been refreshed successfully. Flags: %2. Elapsed: %3. Message ID: %4

Severity: Informational

102. Policy refresh failed

Description: Failed to process Group Policy.

Message: Couldn't refresh policies for %1. Cause: %2. Flags: %2. Elapsed: %4. Message ID: %5

Severity: Error

104. Product is not supported on this OS.

Description: One of the products is not supported on this OS build and can’t be loaded.

Message: Product is not supported on this OS. Minimum version: %1.%2, SP: %3, Build: %4.

Severity: Informational

105. Product is not supported on this OS.

Description: One of the products is not supported on this OS build and can’t be loaded.

Message: Product is not supported on this OS. Maximum version: %1.%2, SP: %3, Build: %4..

Severity: Informational

### General (200-299)

200. Couldn't send a message to the service

Description: Some component failed to communicate with PPExtensionService. This usually indicates a
bug (e.g., the service has crashed).

Message: Couldn't send a message to the service. Cause: %1

Severity: Error

201. The service has been disabled by Administrator

Description: Some component failed to communicate with PPExtensionService because the service is
disabled.

Message: The service has been disabled by Administrator!

Severity: Warning

202. Couldn't start the service

Description: Some component failed to communicate with PPExtensionService because it wasn't running
(has probably crashed). When the component tried to start the service, it failed.

Message: Couldn't start the service. Error code: %1

Severity: Error

203. Starting the service

Description: Some component failed to communicate with PPExtensionService because it wasn't running
(has probably crashed). When the component tried to start the service, it succeeded.

Message: Starting the service...

Severity: Informational

230. Licenses found on the machine are all valid.

Description: All of the licenses on the machine are valid.

Message: The following licenses have been found on this machine.

%1%0

Severity: Informational

231. Licenses found on the machine are not all valid.

Description: Some of the licenses on the machine are invalid.

Message: The following licenses have been found on this machine, and there is a problem with one or
more of them.

%1%0

Severity: Warning

232. Licenses were not found on the machine.

Description: No license was found on the machine.

Message: There is no Endpoint Policy Manager license found on this machine.

%1%0

Severity: Warning

233. Licenses were not found on the machine.

Description: No license was found on the machine.

Message: The computers license for Endpoint Policy Manager has become unavailable or this computer
has become unlicensed.

%1%0

Severity: Warning

801. Join status report.

Description: Join status report for this computer.

Message: This machine join status is shown below

%1%0

Severity: Informational

## Operational Events

The following are all the operational events for Endpoint Policy Manager:

- Remote Work Delivery Manager
- Feature Manager for Windows
- Least Privilege Manager
- Least Privilege Manager Mac OS
- Java Rules Manager
- Browser Router
- Device Manager
- Network Security Manager
- Cloud Client

### Remote Work Delivery Manager

| Event ID | Description                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| 300      | The system will reboot to complete installation of Windows Features.            |
| 301      | The system reboot is pending.                                                   |
| 500      | Bits became unavailable.                                                        |
| 501      | The Background Intelligent Transfer Service is stopped.                         |
| 505      | The Background Intelligent Transfer Service has been disabled by Administrator. |
| 510      | Bits became available.                                                          |
| 600      | SMB job is created.                                                             |
| 601      | SMB job gets a temp error.                                                      |
| 602      | SMB job temp error details.                                                     |
| 603      | SMB job fails with error.                                                       |
| 604      | SMB job error details.                                                          |
| 605      | SMB job is completed.                                                           |
| 606      | SMB revert job is created.                                                      |
| 607      | SMB revert job gets a temp error.                                               |
| 608      | SMB revert job temp error details.                                              |
| 609      | SMB revert job fails with error.                                                |
| 610      | SMB revert job error details.                                                   |
| 611      | SMB revert job fails with error.                                                |
| 700      | HTTP job is created.                                                            |
| 701      | HTTP job gets a temp error.                                                     |
| 702      | HTTP job temp error details.                                                    |
| 703      | HTTP job fails with error.                                                      |
| 704      | HTTP job error details.                                                         |
| 705      | HTTP job is completed.                                                          |
| 706      | HTTP revert job is created.                                                     |
| 707      | HTTP revert job gets a temp error.                                              |
| 708      | HTTP revert job temp error details.                                             |
| 709      | HTTP revert job fails with error.                                               |
| 710      | HTTP revert job error details.                                                  |
| 711      | HTTP revert job is completed.                                                   |

### Feature Manager for Windows

| Event ID | Description                                |
| -------- | ------------------------------------------ |
| 600      | Windows Feature is being installed.        |
| 601      | Installing Windows Feature was canceled.   |
| 602      | Windows Feature was installed.             |
| 603      | Installing Windows Feature progress.       |
| 604      | Installing Windows Feature failed.         |
| 650      | Windows Feature is being removed.          |
| 651      | Removing Windows Feature was canceled.     |
| 652      | Windows Feature was removed.               |
| 653      | Removing Windows Feature progress.         |
| 654      | Removing Windows Feature failed.           |
| 700      | Optional Feature is being installed.       |
| 701      | Installing Optional Feature was canceled.  |
| 702      | Installing Optional Feature was completed. |
| 703      | Installing Optional Feature progress       |
| 704      | Installing Optional Feature failed.        |
| 750      | Optional Feature is being removed.         |
| 751      | Removing Optional Feature was canceled.    |
| 752      | Removing Optional Feature was completed.   |
| 753      | Removing Optional Feature progress         |
| 754      | Removing Optional Feature failed.          |

### Least Privilege Manager

| Event ID | Description                                                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1000     | A process has been allowed to run by a rule.                                                                                                      |
| 1001     | A process has been allowed to run by a rule inherited from parent process.                                                                        |
| 1002     | An AppX package (UWP app) has been allowed to run by a rule.                                                                                      |
| 1003     | A DLL has been allowed by a rule                                                                                                                  |
| 1010     | Access to a resource has been granted                                                                                                             |
| 1020     | A process has been allowed to run by an on-demand rule.                                                                                           |
| 1021     | A process has been allowed to run by an on-demand rule inherited from parent process.                                                             |
| 1022     | A COM object has been allowed by a rule                                                                                                           |
| 1023     | An ActiveX installer has been allowed by a rule                                                                                                   |
| 1100     | A process has been forced to run with a limited token by a rule.                                                                                  |
| 1101     | A process has been forced to run with a limited token by a rule inherited from parent process.                                                    |
| 1120     | A process has been forced to run with a limited token by an on-demand rule.                                                                       |
| 1121     | A process has been forced to run with a limited token by an on-demand rule inherited from parent process.                                         |
| 1200     | A process has been elevated by a rule.                                                                                                            |
| 1201     | A process has been elevated by a rule inherited from parent process.                                                                              |
| 1202     | A COM object has been elevated by a rule                                                                                                          |
| 1203     | An ActiveX installer has been elevated by a rule                                                                                                  |
| 1220     | A process has been elevated by an on-demand rule.                                                                                                 |
| 1221     | A process has been elevated by an on-demand rule inherited from parent process.                                                                   |
| 1300     | A process has been allowed to run with custom security settings.                                                                                  |
| 1301     | A process has been allowed to run with custom security settings inherited from parent process.                                                    |
| 1320     | A process has been allowed to run with custom security settings by an on-demand rule.                                                             |
| 1321     | A process has been allowed to run with custom security settings by an on-demand rule inherited from parent process.                               |
| 2000     | A process has been blocked by a rule.                                                                                                             |
| 2002     | An AppX package (UWP app) has been blocked by a rule.                                                                                             |
| 2003     | A DLL has been blocked by a rule                                                                                                                  |
| 2010     | A process has been blocked by SecureRun.                                                                                                          |
| 2011     | A process has been blocked repeatedly                                                                                                             |
| 6200     | AUDIT: Process runs elevated.                                                                                                                     |
| 6205     | AUDIT: Process requires elevation.                                                                                                                |
| 6206     | A COM object requires elevation                                                                                                                   |
| 6207     | An ActiveX installer requires elevation                                                                                                           |
| 6210     | AUDIT: Process is untrusted and would have been blocked by SecureRun.                                                                             |
| 6211     | AUDIT: Active best matching SecureRun configuration                                                                                               |
| 6215     | Executable is unsigned and would have been blocked by SecureRun                                                                                   |
| 6300     | AA prompt is displayed because a process requires admin privileges.                                                                               |
| 6301     | AA prompt is displayed because a process is blocked by SecureRun.                                                                                 |
| 6302     | AA prompt is displayed because user right-clicked on a file and selected Run with Endpoint Policy Manager.                                        |
| 6303     | A COM object requires administrator privileges                                                                                                    |
| 6304     | An ActiveX installer requires administrator privileges                                                                                            |
| 6310     | Correct Response Code provided in AA prompt.                                                                                                      |
| 6311     | Response code verified for COM Object                                                                                                             |
| 6312     | Response code verified for an ActiveX installer                                                                                                   |
| 6315     | Alternate Admin Credentials provided in AA prompt.                                                                                                |
| 6316     | COM object elevation approved with Admin credentials                                                                                              |
| 6317     | An ActiveX installer elevation was approved with admin credentials                                                                                |
| 6320     | AA prompt has been canceled.                                                                                                                      |
| 6321     | COM object AA prompt has been canceled.                                                                                                           |
| 6322     | ActiveX installer AA prompt has been canceled.                                                                                                    |
| 6330     | Incorrect Response Code provided in AA prompt.                                                                                                    |
| 6331     | Incorrect Response Code provided in COM object AA prompt.                                                                                         |
| 6332     | Incorrect Response Code provided in ActiveX installer AA prompt.                                                                                  |
| 6400     | Process elevated with self elevation                                                                                                              |
| 6401     | Process elevated with self elevation (with justification text)                                                                                    |
| 6402     | Self Elevate mode ALLOWED vs NOT ALLOWED list                                                                                                     |
| 6403     | A COM object elevated with self elevation                                                                                                         |
| 6404     | A COM object elevated with self elevation (with justification text)                                                                               |
| 6500     | Process has been elevated as SecureCopy                                                                                                           |
| 6501     | Process has been elevated by a SecureCopy rule inherited from parent process                                                                      |
| 6500     | A process has been elevated as SecureCopy.                                                                                                        |
| 6501     | A process has been elevated by a SecureCopy rule inherited from parent process.                                                                   |
| 12300    | Process is configured to start with Netwrix Privilege Secure credentials (matching rule was found)                                                |
| 12310    | Netwrix Privilege Secure actvity session is started. Process has been restarted with user credentials provided by Netwrix Privilege Secure server |
| 12312    | Netwrix Privilege Secure activity session is extended                                                                                             |
| 12313    | Netwrix Privilege Secure activity session is stopped                                                                                              |
| 12320    | Netwrix Privilege Secure client dialog canceled                                                                                                   |
| 12330    | User successfully signed in with Netwrix Privilege Secure                                                                                         |

### Least Privilege Manager Mac OS

| Event ID | Description                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| 1000     | Application launch allowed by rule.                                             |
| 1001     | Package allowed by rule.                                                        |
| 1002     | Sudo allowed by rule.                                                           |
| 1003     | Preferences allowed by rule.                                                    |
| 1005     | Mount allowed by rule.                                                          |
| 1006     | Finder allowed by rule.                                                         |
| 1007     | Elevate Privileges allowed by rule                                              |
| 1101     | Package elevated by rule.                                                       |
| 1102     | Sudo elevated by rule.                                                          |
| 1103     | Preferences elevated by rule.                                                   |
| 1105     | Mount allowed by rule.                                                          |
| 1106     | Finder elevated by rule.                                                        |
| 1107     | Elevate Privileges elevated by rule.                                            |
| 1200     | Application launch blocked by rule.                                             |
| 1201     | Package blocked by rule.                                                        |
| 1202     | Sudo blocked by rule.                                                           |
| 1203     | Preferences blocked by rule.                                                    |
| 1205     | Mount blocked by rule.                                                          |
| 1206     | Finder blocked by rule.                                                         |
| 1207     | ElevatePrivileges blocked by rule.                                              |
| 2000     | Administrator approval is required for application launch.                      |
| 2001     | Administrator approval is required for package.                                 |
| 2002     | Administrator approval is required for sudo.                                    |
| 2003     | Administrator approval is required for preferences.                             |
| 2005     | Administrator approval is required for mount.                                   |
| 2006     | Administrator approval is required for Finder.                                  |
| 2007     | Administrator approval is required for Elevate Privileges.                      |
| 2100     | Administrator approval is required to allow application to run by response code |
| 2101     | Administrator approval allows package by existing code.                         |
| 2102     | Administrator approval allows sudo by existing code.                            |
| 2103     | Administrator approval allows preferences by existing code.                     |
| 2104     | Administrator approval allows application launch by parent existing code.       |
| 2105     | Administrator approval allows mount by existing code.                           |
| 2106     | Administrator approval allows Finder by existing code.                          |
| 2107     | Administrator approval allows Elevate Privileges by existing code.              |
| 2200     | Administrator approval canceled for application launch.                         |
| 2201     | Administrator approval canceled for package.                                    |
| 2202     | Administrator approval canceled for sudo.                                       |
| 2203     | Administrator approval canceled for preferences                                 |
| 2205     | Administrator approval canceled for mount                                       |
| 2206     | Administrator approval canceled for Finder                                      |
| 2207     | Administrator approval canceled for Elevate Privileges                          |
| 2300     | Administrator approval response code verified for application launch            |
| 2301     | Administrator approval response code verified for package                       |
| 2302     | Administrator approval response code verified for sudo                          |
| 2303     | Administrator approval response code verified for preferences                   |
| 2305     | Administrator approval response code verified for mount                         |
| 2306     | Administrator approval response code verified for Finder                        |
| 2307     | Administrator approval response code verified for Elevate Privileges            |
| 2400     | Administrator approval incorrect response code for application launch           |
| 2401     | Administrator approval incorrect response code for package                      |
| 2402     | Administrator approval incorrect response code for sudo                         |
| 2403     | Administrator approval incorrect response code for preferences                  |
| 2405     | Administrator approval incorrect response code for mount                        |
| 2406     | Administrator approval incorrect response code for Finder                       |
| 2407     | Administrator approval incorrect response code for Elevate Privileges           |
| 2500     | Administrator approval allows application launch by administrator credentials   |
| 2501     | Administrator approval allows package by administrator credentials              |
| 2502     | Administrator approval allows sudo by administrator credentials                 |
| 2503     | Administrator approval allows preferences by administrator credentials          |
| 2505     | Administrator approval allows mount by administrator credentials                |
| 2506     | Administrator approval allows Finder by administrator credentials               |
| 2507     | Administrator approval allows Elevate Privileges by administrator credentials   |
| 3000     | Approval is required for application launch                                     |
| 3001     | Approval is required for package                                                |
| 3002     | Approval is required for sudo                                                   |
| 3003     | Approval is required for preferences                                            |
| 3005     | Approval is required for mount                                                  |
| 3006     | Approval is required for finder                                                 |
| 3007     | Approval is required for elevate privileges                                     |
| 3100     | Approval is granted for application launch                                      |
| 3101     | Approval is granted for package                                                 |
| 3102     | Approval is granted for sudo                                                    |
| 3103     | Approval is granted for preferences                                             |
| 3105     | Approval is granted for mount                                                   |
| 3106     | Approval is granted for finder                                                  |
| 3107     | Approval is granted for elevate privileges                                      |
| 3200     | Approval is canceled for application launch                                     |
| 3201     | Approval is canceled for package                                                |
| 3202     | Approval is canceled for sudo                                                   |
| 3203     | Approval is canceled for preferences                                            |
| 3205     | Approval is canceled for mount                                                  |
| 3206     | Approval is canceled for finder                                                 |
| 3207     | Approval is canceled for elevate privileges                                     |

### Java Rules Manager

| Event ID | Description                   |
| -------- | ----------------------------- |
| 8021     | PPJER policy has been changed |
| 8022     | PPJER policy has been removed |

### Browser Router

| Event ID | Description                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 9001     | Couldn't send message to Endpoint Policy Manager Helper Service. Cause: Endpoint Policy Manager Helper Service was not in a started state. |
| 9002     | An exception occurred while processing a request from a Endpoint Policy Manager Browser Router extension.                                  |

### Device Manager

| Event ID | Description                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| 10000    | Access to the device has been blocked due to Endpoint Policy Manager Device Manager Rule |
| 10001    | Access to the device was granted by policies                                             |

### Network Security Manager

| Event ID | Description                                              |
| -------- | -------------------------------------------------------- |
| 10300    | Access to the network connection was granted by policies |
| 10301    | Access to the network connection was granted by policies |

### Cloud Client

| Event ID | Description                                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 11001    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client is starting/stopping                                             |
| 11002    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client has been started/stopped or failed to start/stop                 |
| 11003    | Netwrix Endpoint Policy Manager (formerly PolicyPak) product ( PPC Client or CSE) is being installed/updated                       |
| 11004    | Netwrix Endpoint Policy Manager (formerly PolicyPak) product ( PPC Client or CSE) installation/update has been completed or failed |
| 11005    | Customer certificate backup/restore activity                                                                                       |
| 11006    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client registration in progress                                         |
| 11007    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client registration has been completed or failed                        |
| 11008    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client unregistration in progress                                       |
| 11009    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client unregistration has been completed or failed                      |
| 11010    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client sync in progress                                                 |
| 11011    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client sync has been completed or failed                                |
| 11012    | Netwrix Endpoint Policy Manager (formerly PolicyPak) Product (PPC Client or CSE) is being uninstalled                              |
| 11013    | Netwrix Endpoint Policy Manager (formerly PolicyPak) product (PPC Client or CSE) uninstallation has been completed or failed       |
| 11014    | Event Collector activity                                                                                                           |
| 11015    | Collector Events submission started on schedule                                                                                    |
| 11016    | Collector Events submission activity ended                                                                                         |
| 11017    | Collector Events pushed manually                                                                                                   |

