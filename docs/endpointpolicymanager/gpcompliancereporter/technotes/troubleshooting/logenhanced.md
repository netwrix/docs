---
title: "How do I turn on enhanced logging for Endpoint Policy Manager Group Policy Compliance Reporter if asked to do so?"
description: "How do I turn on enhanced logging for Endpoint Policy Manager Group Policy Compliance Reporter if asked to do so?"
sidebar_position: 70
---

# How do I turn on enhanced logging for Endpoint Policy Manager Group Policy Compliance Reporter if asked to do so?

If asked by Netwrix Endpoint Policy Manager (formerly PolicyPak) Support to turn on enhanced
logging, follow the steps detailed below.

Enhanced logging is controlled by registry entries. As enhanced logging creates a potentially large
amount of data, this allows a quick turn on and off to limit the amount of ‘junk' in the logs.

## Pre-requisites:

Download the .reg update files from
[https://www.policypak.com/pp-files/PPGPCR_Logging.zip](https://www.policypak.com/pp-files/PPGPCR_Logging.zip).
After downloading, unzip the files and copy them to the required computer(s): GPCR Server, Client
(Admin console), and/or Endpoint.

## Get Logs from Server and/or Client

**Step 1 –** Close Admin Console

**Step 2 –** Import required ‘Enable' Logging reg files (Admin rights required)

- For Server: PPGPCR Server Enable` Logging.reg`
- For Client: PPGPCR Client (Admin Console) Enable `Logging.reg`

**Step 3 –** If getting server logs, Stop and Start "Endpoint Policy Manager GP Compliance Reporter
Server Service"

**Step 4 –** Open the Admin Console and force the issue – make it do the thing and cause the error

**Step 5 –** Close the Admin Console

**Step 6 –** Import required ‘Disable' Logging reg files (Admin rights required)

- For Server: PPGPCR Server Disable `Logging.reg`
- For Client: PPGPCR Client (Admin Console) Disable `Logging.reg`

**Step 7 –** If getting server logs, Stop and Start "Endpoint Policy Manager GP Compliance Reporter
Server Service"

**Step 8 –** Zip the requested logs from the following directories

- For Server:`%ProgramData%\PolicyPak\PolicyPak`Group Policy Compliance Reporter
  `Server\Diagnostics`
- For Client: `%LOCALAPPDATA%\PolicyPak\PolicyPak` Group Policy Compliance `Reporter\Diagnostics`

**Step 9 –** If both logs were requested, combine to one zip and rename to reference your ticket
number (e.g. `SRX0000????-gpcr.zip`), otherwise just rename the one zip file

**Step 10 –** Upload to ShareFile link provided by your support rep.

## Endpoint

**Step 1 –** Import required ‘Enable' Logging reg files (Admin rights required)

- For Endpoint: PPGPCR Endpoint Enable `Logging.reg`

**Step 2 –** Run "`GPUpdate /force`" to trigger the auditor

**Step 3 –** Wait about 2-5 minutes to allow the trigger to take place and the log collection to
complete

**Step 4 –** Import required ‘Disable' Logging reg files (Admin rights required)

- For Endpoint: PPGPCR Endpoint Disable `Logging.reg`

**Step 5 –** Zip the requested logs from the following directories and rename to reference your
ticket number (e.g. `SRX0000????-gpcr.zip`)

- For Endpoint: `%ProgramData%\PolicyPak\PolicyPak` Group Policy Compliance Reporter Auditor
  `Endpoint\Diagnostics`

  :::note
  If also gathering Server and/or Client logs, add this log to the `SRX*-gpcr.zip` file
  created in the previous section
  :::


**Step 6 –** Upload to ShareFile link provided by your support rep.

