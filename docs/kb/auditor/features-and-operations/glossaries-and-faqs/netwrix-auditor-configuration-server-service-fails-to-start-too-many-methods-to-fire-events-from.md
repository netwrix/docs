---
description: >-
  Describes how to resolve 'Error 0x80040209: An interface has too many methods
  to fire events from' when the Netwrix Auditor Configuration Server Service
  fails to start and shows 'Access is denied'.
keywords:
  - Netwrix Auditor
  - Configuration Server
  - Error 0x80040209
  - Access is denied
  - ConfigServer
  - Configuration.xml
  - backup
  - service fails to start
  - System Health log
products:
  - auditor
sidebar_label: Configuration Server Service Fails - Too Many Methods
tags: []
title: "Netwrix Auditor Configuration Server Service Fails to Start — Too Many Methods to Fire Events From"
knowledge_article_id: kA04u000000PoMPCA0
---

# Netwrix Auditor Configuration Server Service Fails to Start — Too Many Methods to Fire Events From

## Symptoms

- Netwrix Auditor Configuration Server Service stopped. When attempting to restart the service, it stops again with the following message in Netwrix Auditor System Health log:

```
Windows could not start the Netwrix Auditor Configuration Server Service service on Local Computer.
Error 0x80040209: An interface has too many methods to fire events from.
```

![Screenshot 1]./../0-images/ka04u00000117L8_0EM4u000008LCum.png)

Other services are running as expected.

![Screenshot 2]./../0-images/ka04u00000117L8_0EM4u000008LCuw.png)

- The following error is prompted in the main Netwrix Auditor screen:

```
Connection failed
Access is denied
```

![Screenshot 3]./../0-images/ka04u00000117L8_0EM4u000008M2Tz.png)

Upon checking Services running, Netwrix Auditor Configuration Server Service appears to have stopped. When attempting to restart the service, the same error is prompted.

## Causes

Any of the following potential causes may lead to corruption of the configuration server status file:

- The C drive of the Netwrix Auditor server has reached or is running out of its capacity.
- Unexpected shutdown of the Netwrix Auditor server (e.g. due to the power outage).
- Cross-program interaction (e.g. antivirus software blocks an operation performed by Netwrix Auditor).

## Resolution

Refer to the following steps to troubleshoot the issue:

1. Back up the ConfigServer folder located in ` %Working Folder%\AuditCore\ConfigServer`.
2. Delete all files in the original ConfigServer folder except for the StorageBackups folder and the Configuration.xml file.

![ConfigServer folder contents]./../0-images/ka04u00000117L8_0EM4u000008LCv1.png)

3. Restart Netwrix Auditor Configuration Server Service.
4. Make sure the following services are running (including all the monitoring plan-related services):

- Netwrix Auditor Core Service.
- Netwrix Auditor Archive Service.

In case the aforementioned steps did not help, refer to the following steps to troubleshoot the issue:

1. Back up the ConfigServer folder located in ` %Working Folder%\AuditCore\ConfigServer`.
2. Delete all files in the original ConfigServer folder except for the StorageBackups folder. It is located in ` %Working Folder%\AuditCore\ConfigServer`.

![ConfigServer StorageBackups folder]./../0-images/ka04u00000117L8_0EM4u000008LCvL.png)

3. Copy the Configuration.xml file from the latest **BACKUP_%DATE%**\%GUID% folder.

![Backup folder selection]./../0-images/ka04u00000117L8_0EM4u000008LCvk.png)

4. Paste the copied Configuration.xml file to ` %Working Folder%\AuditCore\ConfigServer`.
5. Restart Netwrix Auditor Configuration Server Service.
6. Make sure the following services are running (including all the monitoring plan-related services):

- Netwrix Auditor Core Service.
- Netwrix Auditor Archive Service.

> **NOTE:** If these steps did not help, try using the Configuration.xml file from the second to the last **BACKUP_%DATE%**\%GUID% folder. Paste the file to ` %Working Folder%\AuditCore\ConfigServer` and restart Netwrix Auditor services.

![Configuration restored]./../0-images/ka04u00000117L8_0EM4u000008LCwE.png)

> **NOTE:** If the issue reoccurs after some time, contact [Netwrix Technical Support](https://www.netwrix.com/open_a_ticket.html).

