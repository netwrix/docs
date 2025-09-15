---
description: >-
  Shows how to investigate repeated failed logons and identify their source
  using Event Viewer XML queries, Netwrix Auditor search, local audit policy,
  and NetLogon debugging.
keywords:
  - failed logon
  - account lockout
  - Event Viewer
  - Netwrix Auditor
  - NetLogon
  - netlogon.log
  - event ID 4625
  - XML query
  - audit policy
products:
  - auditor
sidebar_label: Investigating Failed Logons
tags: []
title: "Investigating Failed Logons"
knowledge_article_id: kA00g000000PbciCAC
---

# Investigating Failed Logons

## Symptom

You have encountered a situation where an account is getting locked out from multiple failed logons. Reports show that this account is in fact performing failed logons, however, the events from which Netwrix Auditor has parsed do not provide what is causing the logon events on the workstation.

## Cause

There are several root causes for this scenario, but most commonly there are services or applications that are running via the locked out account. The stored credentials become expired and when the service or application attempts to authenticate via the account, it performs a failed logon.

## Resolution

If further investigation is needed, the XML query below can be executed against the Security Event Logs of systems that you suspect the account to being performing failed logons.

In order to populate the Security Log with logon/logoff details, you will need to enable logon/logoff auditing via local policy. The Security Log will now provide additional logon activity details.

Next, navigate to the Windows Event Viewer and open the Security Log. Filter the log, as seen here.

**Enter the following query into the XML tab**

```xml
<QueryList>
  <Query Id="0" Path="Security">
    <Select Path="Security">*[System[(EventID=4625 or EventID=4776 or EventID=4777 or EventID=4624 or EventID=4634 or EventID=4740 or EventID=4767 or EventID=4768 or EventID=4769 or EventID=4779) and TimeCreated[timediff(@SystemTime) <= 43200000]]] and *[EventData[Data[@Name ='TargetUserName'] ='ACCOUNT_IN_QUESTION']]</Select>
  </Query>
</QueryList>
```

You will need to replace the `ACCOUNT_IN_QUESTION` of the query to the name of the account that caused failed logon.  
Alternatively, if you want to only see auth requests and failed logon attempts, use this query:

```xml
<QueryList>
  <Query Id="0" Path="Security">
    <Select Path="Security">*[System[(EventID=4625 or EventID=4776 or EventID=4777 or EventID=4624 or EventID=4740 or EventID=4768 or EventID=4769) and TimeCreated[timediff(@SystemTime) <= 43200000]]] and *[EventData[Data[@Name ='TargetUserName'] ='ACCOUNT_IN_QUESTION']]</Select>
  </Query>
</QueryList>
```

You can also remove or expand the time frame by manipulating the `TimeCreated[timediff(@SystemTime) <= 43200000]` element of the query.

- Last Hour = 3600000
- Last 12 Hours = 43200000
- Last 24 Hours = 86400000
- Last 7 days = 604800000

### Investigating Recurring Failed Logons

The most common scenario for failed logons is when some service or application is running using wrong credentials. To find the exact program or see more details for the logon event, please follow the instructions below:

1. Run Netwrix Auditor → Search, and specify the filters:  
   **Data Source – Equals – Logon Activity**  
   **Action – Equals – Failed logon**
2. Find the event, and locate the workstation where the failed logon occurred. (details – originating workstation)
3. Navigate to the workstation where the failed logon occurred and enable local audit policy settings:  
   - Use `gpedit.msc` → `Computer Configurations` → `Windows Settings` → `Security Settings` → `Local Policies` → `Audit Policy`  
   - **Audit process tracking: Success, Failure**  
   - **Audit Logon events: Success, Failure**
4. Right-click **Start > Event Viewer > Windows > Security event log.**  
   Now wait for new failed logons for the account, and filter security event log by event ID 4625.
5. Find the event we are looking for (you can press Ctrl+F and enter the problematic account name).

**NOTE**: The username in events can be indicated in different formats, for example, `domain\\user`, `user@domain.com`, or simply `user` in general. You can search for the unique part of the username, the `[user]` part in `domain\\user`.

In the Caller Process Name you can see the name of the program which is using wrong credentials.

For example:  
Caller Process Name: `C:\Program Files\Microsoft SQL Server\MSRS13.SQLEXPRESS\Reporting Services\ReportServer\bin\ReportingServicesService.exe`  
In such case you can open SQL Server Reporting Services Configuration Manager and change the credentials for user there. Also you can check if you have old SSRS instances on this server.

Update the password for the problematic service and disable audit policies that have been enabled in step 3 after the investigation.

### Investigating Failed Logons from Outside of Domain using Netlogon Debugging

Sometimes failed logons occur when users from outside of Domain try to logon onto your servers. This can be detected by Netwrix Auditor when there is no domain name in the WHO field (neither `domain\\username` nor `username@domain` style). This means that there is an attempt to logon using NTLM.

Step 1: Find your logon server  
First, check which server is your domain’s logon server by typing `set logonserver` in CMD

Step 2: Look at Event Viewer  
Log into that server and open Event Viewer, or open Event viewer and choose **Action > Connect to another Computer**  
Look in the Security log files, and if you see **Audit failure** with **logon type=3** that means there are Network “Netlogon” failure attempts.

Step 3: Enable NetLogon logging  
Enable NetLogon Logging: Use the following command on the logon server in a command prompt:

```bash
nltest /dbflag:0x2080ffff
```

The `netlogon.log` file is located in the `%SystemRoot%\Debug` directory of the Microsoft Windows Logon Server.

Step 4: Identify the source of the attack  
In the `netlogon.log` file, you can find which entries correspond to your failed logon attempts and this will also show you what the hostname is that the attempt is coming from.  
If an internal attack, the workstation name is likely part of your domain/network already.  
If an outside attack, the hostname can be anything, even the name of a brute force program such as FreeRDP - in some cases, it may even be blank.

Step 5: Disable NetLogon logging  
When finished, and you have found examples of your impacted username being attempted, disable NetLogon Logging with this command:

```bash
nltest /dbflag:0x0
```

You don't want to keep NetLogon enabled simply because it will use resources and disk space on your system when it is not actively needed.

Step 6: Identify Reason Codes/Error Codes  
See code translations:  
https://techcommunity.microsoft.com/t5/core-infrastructure-and-security/quick-reference-troubleshooting-netlogon-error-codes/bc-p/1561127/

2 Common codes you may see in the log file:  
- `0XC000006A` – An incorrect password was guessed  
- `0XC0000234` – An account lockout was issued from the “Via” computer name - this is the computer which is being attempted against, and which sends the lockout signal to your domain controller (or local policy holder if in a workgroup).

If you want an overview on how Failed Logon information is collected, check this article: https://kb.netwrix.com/5905

If you have multiple Failed Logons, check this article: https://kb.netwrix.com/3553

<div id="hzImg" style={{width: 'auto', height: 'auto', backgroundColor: 'rgb(255, 255, 255)', display: 'none'}}> </div>
