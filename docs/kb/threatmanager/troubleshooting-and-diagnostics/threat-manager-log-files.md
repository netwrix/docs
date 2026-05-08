---
description: 'Review the Netwrix Threat Manager log files to troubleshoot issues. This article lists each log file, its location, and what information it contains.'
keywords: ['Threat Manager','log files','logs','troubleshooting','SIEM','Active Directory','email notifications','Job Service','License Service']
products:
- threat-manager
title: 'Threat Manager Log Files'
knowledge_article_id: kA04u0000000IwkCAE
---

# Threat Manager Log Files

To troubleshoot issues, review the Netwrix Threat Manager log files located at `C:\ProgramData\STEALTHbits\StealthDEFEND`.

Each component of Netwrix Threat Manager has a log file that reports Errors, Warnings, and Debug information depending on the Logging Level. For instructions on adjusting the Logging Level, see: `https://stealthbits.zendesk.com/hc/en-us/articles/360043055772-Adjust-log-level-in-Threat Manager`

Netwrix Threat Manager generates the following logs:

- **Action Service Log**  
  This is the log for the Action Service which is the actual component that runs PowerShell actions in response to threats. This log is useful for troubleshooting threat response.

- **Active Directory Service Log**  
  This log contains output from the Active Directory Service. The Active Directory service handles AD login functions and everything related to the Active Directory Sync. Review this log for any issues with AD logins or AD syncs.

- **Email Service Log**  
  This log contains information about all functions of the built-in Email Notification service in Netwrix Threat Prevention. Review this log for any issues with missing email notifications.

- **Event Message Service Log**  
  This is the log for the Event Message Service, which handles turning data from SI/SAM into an event in the Netwrix Threat Prevention database. This service also performs threat detection for many AD threats. Review this log for issues with incoming data and AD threats.

- **Job Service Log**  
  This log is for the Job Service, which schedules a variety of maintenance actions and all Python-based threats. Review this log for issues with threat detection or problems on the system health page.

- **License Service Log**  
  This log contains information about the third-party licensing components used by Netwrix Threat Prevention. Review this log for any issues with licensing.

- **Rest Service Log**  
  This log contains information about logging into the Netwrix Threat Prevention app, licensing, and website functions. Review this log for AJAX errors or errors exposed via the UI.

- **SIEM Service Log**  
  This log contains information about threat data sent from Netwrix Threat Manager to a SIEM or email notification.

**Product:** Netwrix Threat Manager  
**Module:** Threat Manager - General  
**Versions:** 2.0  
**Legacy Article ID:** 2259