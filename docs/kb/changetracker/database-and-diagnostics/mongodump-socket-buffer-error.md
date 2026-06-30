---
title: >-
  MongoDB Log Fix: Error Reading Collection — An Operation on a Socket Could Not
  Be Performed Because the System Lacked Sufficient Buffer Space
description: >-
  Shows how to troubleshoot a MongoDump failure caused by a Windows socket
  buffer issue and links to Microsoft guidance for resolution.
sidebar_label: MongoDump Socket Buffer Error
keywords:
  - MongoDump
  - MongoDB
  - WSARecv
  - WSAENOBUFS
  - socket buffer
  - TCP port
  - Windows networking
  - mongodump error
  - buffer space
  - error reading collection
products:
  - change-tracker
tags:
  - kb
  - database-and-diagnostics
knowledge_article_id:
---

# MongoDB Log Fix: Error Reading Collection — An Operation on a Socket Could Not Be Performed

## Symptom

When you attempt to perform a MongoDump on your MongoDB database, the dump fails with the following error:

```text
Failed: error reading collection: WSARecv tcp 127.0.0.1:50290: An operation on a socket could not be performed because the system lacked sufficient buffer space or because a queue was full.
```

## Cause

This error is linked to a Windows issue rather than a MongoDB issue. The error occurs when a system tries to connect to a TCP port that is greater than 5000. The TCP port number is referenced in the error message.

## Resolution

Review the Microsoft guidance on this issue:
[https://learn.microsoft.com/en-GB/troubleshoot/windows-client/networking/connect-tcp-greater-than-5000-error-wsaenobufs-10055](https://learn.microsoft.com/en-GB/troubleshoot/windows-client/networking/connect-tcp-greater-than-5000-error-wsaenobufs-10055)

If possible, implement the steps the Microsoft article recommends and then re-run the MongoDump task.
