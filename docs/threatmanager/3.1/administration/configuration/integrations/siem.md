---
title: "SIEM Page"
description: "SIEM Page"
sidebar_position: 80
---

# SIEM Page

The SIEM page provides configuration settings for forwarding threat information to a SIEM service
such as QRadar or Splunk. Prior to configuring this page, determine the IP address and Port for the
SIEM server.

Follow the instructions to enable SIEM notifications.

![siempage](/images/threatmanager/3.0/administration/configuration/integrations/siempage.webp)

**Step 1 –** In the Integrations box, click **SIEM**. The SIEM window opens.

**Step 2 –** Enter the following information:

- Enabled – Sends threat configuration settings to the configured SIEM service if set to ON. The
  default is ON.
- Server – The IP address of the SIEM server. This field is blank and turned off by default.
- Type – Select a protocol type from the drop-down list to use when sending a Syslog message to a
  SIEM application:
    - UDP
    - TCP
- Port – The port of the SIEM server.
- Template – Select the desired template from the drop-down list

    - LEEF template – Threat data is sent to the SIEM application in the standard LEEF format
    - CEF template – Threat data is sent to the SIEM application in the standard CEF format
    - Custom template – Threat data is sent to the SIEM application in a customized format

        :::note
        Only one custom template can be implemented.
        :::


    - Notification template – Threat data is sent to the SIEM application in a basic notification
      format:

    `%SYSLOG_DATE%|%HOST%|%COMPANY%|%PRODUCT%|%PRODUCT_VERSION%|%MESSAGE_TYPE%|%MESSAGE%`

- Template Format – Selecting Custom template from the Template drop-down list enables this box. It
  displays the variables in Threat Manager that can be used to create a custom SIEM template:

  All template variables are case-insensitive and wrapped in `%` delimiters (e.g., `%VARIABLE_NAME%`). The template replaces unresolved variables with an empty string.

  **General Variables**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%SYSLOG_DATE%` | Current UTC date/time in universal sortable format | `string` (DateTime format `u`) | `2026-03-03 14:30:00Z` |
  | `%SYSLOG_DATE_ISO%` | Current UTC date/time in ISO 8601 format with milliseconds | `string` (DateTime format `yyyy-MM-ddTHH:mm:ss.fffZ`) | `2026-03-03T14:30:00.123Z` |
  | `%SYSLOG_DATE_ISO_D%` | Current UTC date/time in compact ISO 8601 format with milliseconds | `string` (DateTime format `yyyyMMddTHH:mm:ss.fffZ`) | `20260303T14:30:00.123Z` |
  | `%HOST%` | Machine name of the Netwrix Threat Manager server | `string` | `NTM-SERVER01` |
  | `%COMPANY%` | Company name from application info | `string` | `Netwrix Corporation` |
  | `%PRODUCT%` | Product name from application info | `string` | `Netwrix Threat Manager` |
  | `%PRODUCT_VERSION%` | Product version from application info | `string` | `4.5.0.0` |
  | `%THREAT_TYPE_ID%` | Job ID of the threat definition | `string` (from `long`) | `42` |
  | `%THREAT_TIME%` | UTC time of the primary event in universal sortable format | `string` (DateTime format `u`) | `2026-03-03 14:25:00Z` |
  | `%THREAT_TYPE%` | Job type / threat category name | `string` | `Abnormal Authentication` |
  | `%THREAT_LEVEL%` | Numeric threat severity level ID (-1 if null) | `string` (from `long`) | `3` |
  | `%PERMISSION_DIFF%` | Formatted permission difference for the primary event (syslog format) | `string` | *(Structured permission change details)* |
  | `%USERS%` | SAM account name of the perpetrating user | `string` | `DOMAIN\jsmith` |
  | `%COMPUTERS%` | Semicolon-delimited list of computers involved in the threat | `string` | `SERVER01; WORKSTATION02` |
  | `%FILENAME%` | File or share name from the primary event (prefers share name over file name) | `string` | `\\SERVER01\SharedDocs` |
  | `%NEW_FILENAME%` | New attribute value from the primary event (e.g., renamed file) | `string` | `\\SERVER01\NewFolder` |
  | `%PROCESS%` | Process name from the primary event | `string` | `explorer.exe` |


  **Perpetrator**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%PERPETRATORSAMACCOUNTNAME%` | SAM account name of the perpetrator | `string` | `DOMAIN\jsmith` |
  | `%PERPETRATORDISTINGUISHEDNAME%` | Distinguished name of the perpetrator | `string` | `CN=John Smith,OU=Users,DC=domain,DC=com` |
  | `%PERPETRATORDOMAIN%` | Domain of the perpetrator | `string` | `DOMAIN` |
  | `%PERPETRATORTAGS%` | Comma-delimited list of tags assigned to the perpetrator | `string` | `VIP, Executive, Service Account` |
  | `%THREATUSERDISPLAYNAME%` | Display name of the threat user (falls back to NT Account Name) | `string` | `John Smith` |
  | `%THREATUSEREMAIL%` | Email address of the threat user | `string` | `jsmith@domain.com` |
  | `%THREATUSERMANAGERDISPLAYNAME%` | Display name of the threat user's manager (falls back to manager NT Account Name) | `string` | `Jane Doe` |
  | `%THREATUSERMANAGEREMAIL%` | Email address of the threat user's manager | `string` | `jdoe@domain.com` |

  **Client**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%CLIENTDOMAIN%` | Domain name of the client host | `string` | `DOMAIN` |
  | `%CLIENTTAGS%` | Comma-delimited list of tags assigned to the client host | `string` | `Workstation, Finance` |

  **Target Host**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%TARGETHOSTDOMAIN%` | Domain name of the target host | `string` | `DOMAIN` |
  | `%TARGETHOSTTAGS%` | Comma-delimited list of tags assigned to the target host | `string` | `Domain Controller, Critical` |

  **Affected User**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%AFFECTEDUSERSAMACCOUNTNAME%` | Comma-delimited list of affected user NT Account Names | `string` | `DOMAIN\user1, DOMAIN\user2` |
  | `%AFFECTEDUSERDISPLAYNAME%` | Comma-delimited list of affected user display names (falls back to SAM account name) | `string` | `User One, User Two` |
  | `%AFFECTEDUSERDOMAIN%` | Domain of the first affected user (parsed from SAM account name or AD domain) | `string` | `DOMAIN` |
  | `%AFFECTEDUSERTAGS%` | Comma-delimited, deduplicated list of tags across all affected users (includes group tags) | `string` | `VIP, Admins` |

  **Primary Event**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%PRIMARYEVENTCLIENT%` | Client name from the primary event (could be Domain\Computer, FQDN, or (unknown) IPAddress) | `string` | `DOMAIN\WORKSTATION01` |
  | `%PRIMARYEVENTCLIENTID%` | NTM ID of the client on the primary event, this is internal to Threat Manager | `long` | `1234` |
  | `%PRIMARYEVENTCLIENTIP%` | IP address of the client on the primary event | `string` | `192.168.1.100` |
  | `%PRIMARYEVENTFROMIP%` | IP address of the originating client (alias for client IP) | `string` | `192.168.1.100` |
  | `%PRIMARYEVENTFROMMAC%` | MAC address of the originating client | `string` | `00:1A:2B:3C:4D:5E` |
  | `%PRIMARYEVENTTOIP%` | IP address of the target/source host | `string` | `10.0.0.50` |
  | `%PRIMARYEVENTHOST%` | Source host name from the primary event | `string` | `DOMAIN\SERVER01` |
  | `%PRIMARYEVENTDOMAIN%` | Domain name of the primary event source host | `string` | `DOMAIN` |
  | `%PRIMARYEVENTOPERATION%` | Category/type of operation for the primary event | `string` | `File Modified` |
  | `%PRIMARYEVENTPATH%` | File path from the primary event (falls back to share name) | `string` | `\\SERVER01\Share\Documents\file.docx` |

  **Primary Event Affected Object**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%PRIMARYEVENTAFFECTEDOBJECTSAMACCOUNTNAME%` | SAM account name of the affected object on the primary event | `string` | `svc-backup` |
  | `%PRIMARYEVENTAFFECTEDOBJECTDISTINGUISHEDNAME%` | Distinguished name of the affected object on the primary event | `string` | `CN=svc-backup,OU=Service Accounts,DC=domain,DC=com` |
  | `%PRIMARYEVENTAFFECTEDOBJECTSID%` | SID of the affected object on the primary event | `string` | `S-1-5-21-123456789-987654321-111111111-1234` |
  | `%PRIMARYEVENTAFFECTEDOBJECTGUID%` | GUID of the affected object on the primary event | `string` | `a1b2c3d4-e5f6-7890-abcd-ef1234567890` |
  | `%PRIMARYEVENTAFFECTEDOBJECTCLASS%` | Object class of the affected object on the primary event | `string` | `user` |
  | `%PRIMARYEVENTAFFECTEDOBJECTDOMAIN%` | Domain of the affected object on the primary event | `string` | `domain.com` |

  **Threat Metadata**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%THREATID%` | Unique ID of the threat | `long` | `98765` |
  | `%THREATTYPE%` | Type/category of the threat (from Job.JobType) | `string` | `Abnormal Authentication` |
  | `%THREATLEVEL%` | Severity level name of the threat | `string` | `High` |
  | `%THREATDEFINITION%` | Description of the threat definition (from Job.ThreatDescription) | `string` | `Detects abnormal authentication patterns` |
  | `%THREATSUMMARY%` | Formatted summary/description of the threat | `string` | `User jsmith authenticated from an unusual location` |
  | `%THREATPROPERTIES%` | Raw JSON string of the threat properties | `string` (JSON) | `{"key":"value"}` |
  | `%THREATEVENTCOUNT%` | Number of events associated with the threat | `int` | `15` |
  | `%THREATPROCESSNAME%` | Name of the process from the primary event | `string` | `powershell.exe` |
  | `%THREATTIMEGENERATED%` | Full date/time when the threat was detected | `DateTime` | `03/03/2026 2:30:00 PM` |
  | `%THREATTIMEGENERATEDDATE%` | Date when the threat was detected (long date format) | `string` (DateTime format `D`) | `Tuesday, March 3, 2026` |
  | `%THREATTIMEGENERATEDTIME%` | Time when the threat was detected in UTC (short time format) | `string` (DateTime format `t`) | `2:30 PM` |

  **Evidence**

  | Variable | Description | Data Type | Example Value |
  |---|---|---|---|
  | `%THREATEVIDENCE%` | JSON-serialized array of visible evidence items | `string` (JSON) | `[{"Description":"Logon from unusual IP","Show":true}]` |
  | `%EVIDENCE%` | Semicolon-delimited string of evidence descriptions | `string` | `Logon from unusual IP; Account used outside business hours` |

  **Special Characters**

  The template also processes special characters:

  | Sequence | Replacement | Description |
  |---|---|---|
  | `\t` (literal) | Tab character | The template converts tab characters to actual tabs |
  | `\r` | `\\r` | The template escapes carriage returns in the output |
  | `\n` | `\\n` | The template escapes newlines in the output |

  The template appends `\r\n` to the end of every built message.


**Step 3 –** Click Send Test Message to send a test email to the configured email address.

**Step 4 –** Click Save Settings to save the configuration settings.

SIEM notifications are now configured.
