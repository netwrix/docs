---
title: "Log Files"
description: "Log Files"
sidebar_position: 10
---

# Log Files

Each component of Threat Manager has a log file that will report errors, warnings, and debug
information depending on the logging level.

The log location for Threat Manager logs is:

**C:\ProgramData\Stealthbits\StealthDEFEND**

Threat Manager has the following logs:

- Action Service Log – This is the log for the Action Service which is the actual component that
  runs PowerShell actions in response to threats. This log is useful for troubleshooting threat
  response.
- Active Directory Service Log – This log is responsible for output from the Active Directory
  Service. The Active Directory service handles AD Login functions and everything related to the
  Active Directory Sync. Reference this log for any issues with AD Logins or AD Syncs.
- Email Service Log – This log contains information relating to all functions of the built-in Email
  Notification service in Threat Manager. If you have issues with missing email notifications
  reference this log.
- Event Message Service Log – This is the log for the Event Message Service which handles turning
  data from Threat Manager and Activity Monitor into an event in the Threat Manager Database. This
  service also will do Threat detection for many Active Directory threats. This log is very useful
  for issues with incoming data and Active Directory threats.
- Job Service Log – This log is for the Job Service which is the service that schedules a variety of
  maintenance actions and all the Python-based threats. If there are issues with threat detection or
  problems on the system health page this log should be retrieved for troubleshooting.
- License Service Log – This log contains information for the third party licensing components
  utilized by Threat Manager. Reference this log for any issues with licensing.
- Reset Service Log – This log contains a number of pieces of information such as logging into the
  Threat Manager application, licensing, and some website functions. This log is very useful for any
  AJAX errors or errors that are exposed via the UI.
- SIEM Service Log – This log contains information relating to emailing threat information from
  Threat Manager.
