---
description: >-
  Learn where Netwrix Auditor stores its logs, how to read them, and how to
  prepare logs for Technical Support to troubleshoot collectors and services.
keywords:
  - logs
  - Netwrix Auditor
  - collectors
  - troubleshooting
  - NwArchiveSVC
  - log location
  - Control + F
  - archive service
products:
  - auditor
sidebar_label: How to Read Netwrix Auditor Logs
tags: []
title: "How to Read Netwrix Auditor Logs"
knowledge_article_id: kA00g000000H9eaCAC
---

# How to Read Netwrix Auditor Logs

## What to expect from Netwrix Auditor logs

Logs can reveal many aspects of operations for all Netwrix Auditor Collectors and Services. Not all log information is related to errors; most of the text will walk you through the collection process.

## Where are the logs?

The Netwrix Auditor logs can be found by default at `C:\ProgramData\Netwrix Auditor\Logs` on the Netwrix Auditor Server.

There is an overwhelming amount of logs to choose from. To efficiently view logs, first choose which collector you want to troubleshoot or investigate. Most log folders display the name of the related collector. Some logs are nested and may take longer to find until you build familiarity with the file structure.

- **Data Collection Core**  
  This is an example of a less obvious log location. This directory has logs for collectors like File Server Auditing and Logon Activity.

- **Audit Core**  
  This directory includes logs for Netwrix Auditor Core Services. For example, Technical Support will view these logs in instances where data may not be getting stored in SQL. In this example, you would look at the `NwArchiveSVC` because the Netwrix Auditor Archive Service is responsible for storing data in SQL.

## How to read the logs

Due to variance between logs, the general rule of thumb when viewing logs is to start with the largest sized log. Alternatively, you can choose to start with log files with names that match the collector in question. In this example, they are the same:

![Reading Logs](https://kb.netwrix.com/wp-content/uploads/2019/10/Reading-Logs.png)

Once you open a log, you will want to either scroll to the bottom or use the keystroke `Control + End`.

Log data is formatted in columns. From left to right, data is presented as: Date/Time, Message Type, Process Code, Process Name, Process description/Error Description.

![Reading log data](https://kb.netwrix.com/wp-content/uploads/2019/10/reading-log-data-1-1024x147.png)

Unless you are viewing logs to better understand collector processes, you will want to filter through the log using a find function. Useful search terms to find errors and warnings include:

- `Control + F`
- warn
- err
- error
- failed
- tracing (This may not be present in every log, but if it is, you can see when a collection begins, follow it through, and watch for signs of root cause)
- names of servers and domain controllers (If you suspect issues with collections from identified machines, you may find clues by searching their names in the logs)

Ultimately, learning logs requires the ability to watch for patterns. While extremely useful, logs will not always lead to a direct resolution. They tend to act as a stepping stone along the path to resolution.

## Sending logs to Technical Support

In most cases, Technical Support will request logs for tickets not resolved on initial contact. If you want to anticipate this and possibly expedite resolution, you can prepare the logs using the steps seen here: https://kb.netwrix.com/4645.
