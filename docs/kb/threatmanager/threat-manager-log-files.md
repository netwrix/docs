---
description: 'Review the Netwrix Threat Manager log files to troubleshoot issues. This article lists each log file, its location, and what information it contains.'
keywords: ['Threat Manager','log files','logs','troubleshooting','SIEM','Active Directory','email notifications','Job Service','License Service']
products:
- threat-manager
title: 'Threat Manager Log Files'
knowledge_article_id: kA04u0000000IwkCAE
---

# Threat Manager Log Files

To be able to successfully troubleshoot issues, it is often necessary to review the content of Netwrix Threat Manager's log files. These files can be found at `C:\ProgramData\STEALTHbits\StealthDEFEND`.

Each component of Netwrix Threat Manager has a log file that will report Errors, Warnings, and Debug information depending on the Logging Level. Instructions on adjusting the Logging Level can be found here: `https://stealthbits.zendesk.com/hc/en-us/articles/360043055772-Adjust-log-level-in-Threat Manager`

Netwrix Threat Manager generates the following logs:

- **Action Service Log**  
  This is the log for the Action Service which is the actual component that runs PowerShell actions in response to threats. This log is useful for troubleshooting threat response.

- **Active Directory Service Log**  
  This log is responsible for output from the Active Directory Service. The Active Directory service handles AD Login functions and everything related to the Active Directory Sync. Reference this log for any issues with AD Logins or AD Syncs.

- **Email Service Log**  
  This log contains information relating to all functions of the built-in Email Notification service in Netwrix Threat Prevention. If you have issues with missing email notifications reference this log.

- **Event Message Service Log**  
  This is the log for the Event Message Service which handles turning data from SI/SAM into an Event in the Netwrix Threat Prevention Database. This service also will do Threat detection for many of the AD Threats. This log is very useful for issues with incoming data and AD Threats.

- **Job Service Log**  
  This log is for the Job Service which is the service that schedules a variety of maintenance actions and all the python based threats. If there are issues with threat detection or problems on the system health page this log should be retrieved for troubleshooting.

- **License Service Log**  
  This log contains information for the third party licensing components utilized by Netwrix Threat Prevention. Reference this log for any issues with licensing.

- **Rest Service Log**  
  This log contains a number of pieces of information such as logging into the Netwrix Threat Prevention app, licensing, and some web site functions. This log is very useful for any AJAX errors or errors that are exposed via the UI.

- **SIEM Service Log**  
  This log contains a information relating to threat information being sent from Netwrix Threat Manager to a SIEM or email notification.

**Product:** Netwrix Threat Manager  
**Module:** Threat Manager - General  
**Versions:** 2.0  
**Legacy Article ID:** 2259