---
title: "SMARTLog: Log Type"
description: "SMARTLog: Log Type"
sidebar_position: 10
---

# SMARTLog: Log Type

The Log Type page is used to select the log type to be processed.

![SMART Log DC Wizard Log Type page](/images/accessanalyzer/11.6/admin/datacollector/smartlog/logtype.webp)

The log types are:

- Windows Event Log – Connects to and extract information from any Windows event log made available
  on the target host
- Windows Event Log (Archived) – Extract events from an offline log by moving the log to the
  Enterprise Auditor Console and having it processed on the local host instead of the target host
- Internet Information Server Log – An Exchange query that returns information from Outlook Web
  Access IIS logs found on CAS servers

    - The IIS log must be configured to generate specific columns in order for the SMARTLog Data
      Collector to audit them. See the
      [IIS Log Auditing Requirements](#iis-log-auditing-requirements) topic for additional
      information.

- File Change Detection Log – This is a legacy option. It should not be selected.

## IIS Log Auditing Requirements

The SMARTLog Data Collector needs the IIS logs to generate the following columns:

- Date (date)
- Time (time)
- ClientIP (c-ip)
- UserName (cs-username)
- UriSteam (cs-uri-stem)
- UriQuery (cs-uri-query)
- Protocol Status (HttpStatus)
- Protocol substatus (HttpSubStatus)
- BytesSent (sc-bytes)
- BytesRecv (cs-bytes)
- UserAgent (cs(User-Agent))
