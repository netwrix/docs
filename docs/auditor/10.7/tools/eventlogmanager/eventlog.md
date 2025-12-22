---
title: "Event Log"
description: "Event Log"
sidebar_position: 20
---

# Event Log

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Event Log
monitoring scope.

Follow the steps to exclude data from the Event Log monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Event Log Management_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File               | Description                                                                                                             | Syntax                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| OmitErrorsList.txt | Contains a list of data collection errors and warnings to be excluded from the Netwrix Auditor System Health event log. | `Error text`                                             |
| omitServerList.txt | Contains a list of server names or servers IP addresses to be excluded from processing.                                 | `ip address` or `server name` For example: `192.168.3.*` |
