---
title: "Event Log"
description: "Event Log"
sidebar_position: 20
---

# Event Log

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Event Log
monitoring scope.

To exclude data from the Event Log monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Event Log Management_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Netwrix Auditor treats lines that start with the # sign as comments and ignores them.

| File               | Description                                                                                                             | Syntax                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| OmitErrorsList.txt | Contains a list of data collection errors and warnings to exclude from the Netwrix Auditor System Health event log. | `Error text`                                             |
| omitServerList.txt | Contains a list of server names or server IP addresses to exclude from processing.                                 | `ip address` or `server name` For example: `192.168.3.*` |
