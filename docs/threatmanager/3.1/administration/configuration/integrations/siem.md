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

    - %SYSLOG_DATE% – UTC timestamp of the SIEM message
    - %SYSLOG_DATE_ISO% – ISO-formatted UTC timestamp of the SIEM message
    - %HOST% – Threat Manager server hostname
    - %COMPANY% – Netwrix
    - %PRODUCT% – Threat Manager
    - %PRODUCT_VERSION% – Threat Manager version
    - %THREAT_TIME% – The date and time of the primary event associated with the threat
    - %THREATTYPE% – Threat type
    - %USERS% – Threat perpetrator(s)
    - %COMPUTERS% – Threat host (typically domain controller or file server)
    - %FILENAME% – File or share name for file events
    - %NEW_FILENAME% – New file name (for rename events)
    - %PROCESS% – Process name
    - %THREATID% – Threat ID
    - %THREATSUMMARY% – Summary of the threat
    - %THREATDEFINITION% – Definition of the threat
    - %THREATLEVEL% – Threat level of severity
    - %THREATPROPERTIES% – Threat properties JSON string
    - %THREATTIMEGENERATED% – Date and time the threat was generated (UTC)
    - %THREATTIMEGENERATEDTIME% – Time the threat was generated (UTC)
    - %THREATTIMEGENERATEDDATE% – Date the threat was generated (UTC)
    - %TARGETHOSTDOMAIN% – Active Directory domain of the target host
    - %TARGETHOSTTAGS% – Comma-delimited list of target host tags
    - %CLIENTDOMAIN% – Active Directory domain of the client host
    - %CLIENTTAGS% – Comma-delimited list of client host tags
    - %THREATPROCESSNAME% – Name of process running (e.g., for Unusal Process threat)
    - %THREATEVENTCOUNT% – The number of events related to the threat
    - %THREATEVIDENCE% – Threat evidence JSON string
    - %PERPETRATORSAMACCOUNTNAME% – SAMAccountName of the perpetrator
    - %PERPETRATORDISTINGUISHEDNAME% – Distinguished name of the perpetrator
    - %THREATUSERDISPLAYNAME% – Display name of the perpetrator
    - %THREATUSEREMAIL% – Email address of the perpetrator
    - %PERPETRATORDOMAIN% – Active Directory domain of the perpetrator
    - %PERPETRATORTAGS% – Comma-delimited list of perpetrator tags
    - %THREATUSERMANAGERDISPLAYNAME% –Display name of the manager of the perpetrator
    - %THREATUSERMANAGEREMAIL% – Email address of the manager of the perpetrator
    - %AFFECTEDUSERSAMACCOUNTNAME% – Comma-delimited list of affected User SAMAccount names
    - %AFFECTEDUSERDISPLAYNAME% – Comma-delimited list of display names of the affected user
    - %AFFECTEDUSERDOMAIN% – Active Directory domain of affected users
    - %AFFECTEDUSERTAGS% – Comma-delimted list of tags for affected users
    - %PRIMARYEVENTPATH% – Primary event path
    - %PRIMARYEVENTHOST% – Primary event host
    - %PRIMARYEVENTCLIENT% – Primary event client
    - %PRIMARYEVENTCLIENTID% – ID of the client of the primary event
    - %PRIMARYEVENTFROMIP% – IP address of the client of the primary event
    - %PRIMARYEVENTOPERATION% – Type of event that occurred for the primary event
    - %PRIMARYEVENTDOMAIN% – Active Directory domain of the primary event host
    - %PRIMARYEVENTTOIP% – IP address of the primary event target host
    - %PRIMARYEVENTTOMAC% – MAC address of the primary event target host

**Step 3 –** Click Send Test Message to send a test email to the configured email address.

**Step 4 –** Click Save Settings to save the configuration settings.

SIEM notifications are now configured.
