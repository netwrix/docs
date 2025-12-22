---
description: >-
  Troubleshoot why no data is collected in a Linux Generic Syslog monitoring
  plan in Netwrix Auditor by checking port usage and verifying the target IP
  address in the add-on settings.xml.
keywords:
  - linux syslog
  - syslog
  - netwrix auditor
  - port 514
  - settings.xml
  - SyslogService.log
  - UDP
  - Add-on for Generic Linux Syslog
products:
  - auditor
sidebar_label: No Data Collected in Linux Generic Syslog Monitori
tags: []
title: "No Data Collected in Linux Generic Syslog Monitoring Plan"
knowledge_article_id: kA04u000000wnq7CAA
---

# No Data Collected in Linux Generic Syslog Monitoring Plan

## Symptoms

### Scenario #1

- No data is collected in your Linux Generic Syslog monitoring plan in Netwrix Auditor.
- `Netwrix Auditor Syslog Message Processing Service` is not running. When attempting to start the process, the following error is prompted:

```
The Netwrix Auditor Syslog Message Processing Service service on Local Computer started and then stopped.
Some services stop automatically if they are not in use by other services or programs.
```

- The `SyslogService.log` file located in `C:\ProgramData\Add-on for Generic Linux Syslog\Logs` contains the following error:

```
[MAIN][6][INFO] Start to listen udp at port 514

[MAIN][6][ERROR] Error occurred when starting the syslog udp listener.
Only one usage of each socket address (protocol/network address/port) is normally permitted.
```

### Scenario #2

- No data is collected in your Linux Generic Syslog monitoring plan in Netwrix Auditor.
- The `Netwrix Auditor Syslog Message Processing Service` is running.

## Causes

- Scenario #1 − The default UDP port 514 is occupied by another add-on, the Network Device monitoring plan, or a third-party app.
- Scenario #2 − The target IP address is misconfigured.

## Resolutions

### Scenario #1 − Reviewing the port

To verify whether port 514 is free, run the following command in the Command Prompt on the Netwrix Auditor server:

```bash
netstat -nao | find "514"
```

You can specify the port you would like to review instead of port 514. If the command returns nothing, the port is free.

### Scenario #1 − Modifying the port

Refer to the following steps:

1. Locate the `settings.xml` file in the following folder on your Netwrix Auditor server:

   ```
   C:\ProgramData\Add-on for Generic Linux Syslog
   ```

2. Open the `settings.xml` file with a text editor and locate the following node:

   ```xml
   <ListenUdpPort>514</ListenUdpPort>
   ```

3. Change the 514 UDP port to any other UDP port not used by another add-on, any Network Device monitoring plans, or any third-party apps.

4. Save the changes to the `settings.xml` file.

> **IMPORTANT:** Once you've introduced the change, stop and start the `Netwrix Auditor Add-on for Generic Linux Service` on your Netwrix Auditor host.

### Scenario #2 − Verifying the target IP address

Refer to the following steps:

1. Locate the `settings.xml` file in the following folder:

   ```
   C:\ProgramData\Add-on for Generic Linux Syslog
   ```

2. Open the `settings.xml` file with a text editor and locate the following node:

   ```xml
   <Address>%target_address%</Address>
   ```

3. Verify the target address, modify it if required, and save the changes.

> **IMPORTANT:** Once you've introduced the change, stop and start the `Netwrix Auditor Add-on for Generic Linux Service` on your Netwrix Auditor host.
