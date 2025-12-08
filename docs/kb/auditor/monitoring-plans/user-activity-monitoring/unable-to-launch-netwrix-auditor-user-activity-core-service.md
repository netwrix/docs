---
description: >-
  This article describes how to resolve the "Unable to launch the Netwrix
  Auditor User Activity Core Service" error and how to manually install the User
  Activity Core Service using the CLI or the MSI installer.
keywords:
  - Netwrix Auditor
  - User Activity Core Service
  - UACoreSvcSetup
  - msiexec
  - E_ACCESSDENIED
  - UAVR_SERVERNAME
  - installation
  - ports
products:
  - auditor
sidebar_label: Unable to Launch Netwrix Auditor User Activity Cor
tags: []
title: "Unable to Launch Netwrix Auditor User Activity Core Service"
knowledge_article_id: kA0Qk0000000L65KAE
---

# Unable to Launch Netwrix Auditor User Activity Core Service

## Symptom

When trying to deploy the Netwrix Auditor User Activity Core Service, the following error appears:

```
Unable to launch the Netwrix Auditor User Activity Core Service.
See the Netwrix Auditor System Health event log for more information.
Access is denied. (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED))
```

## Cause

The Remote procedure call failed error can have a number of root causes such as a closed port, Antivirus or EDR software, resource availability on the target system, etc.

## Resolutions

When, for some reasons, Netwrix Auditor cannot not install or upgrade the Netwrix Auditor User Activity Core Service automatically, you should install the service manually via CLI or from the .MSI file directly.

### To install the service via CLI:

1. Run command prompt on the computer that hosts your Auditor Server.
2. Execute the following commands:

```
cd C:\Program Files (x86)\Netwrix Auditor\User Activity Video Recording
```

```
msiexec.exe /i "UACoreSvcSetup.msi" ALLUSERS=1 /qn /norestart /log output.log UAVR_SERVERNAME=yourservername UAVR_SERVERPORT=9004
```

where `yourservername` is the name of your SMTP server in the FQDN format and `9004` is the required port number.

### To run the service via the .MSI file:

1. On the computer that hosts your Auditor Server, navigate to `C:\Program Files (x86)\Netwrix Auditor\User Activity Video Recording`.
2. Run the **UACoreSvcSetup.msi** file.
3. Follow the installation prompts up to the **Specify User Activity Video Reporter server and TCP port** step.
4. On this step, provide your SMTP server name in the FQDN format in the **Host server** field and provide the port number **9004**.

![User-added image]./../0-images/ka0Qk0000001S2H_0EMQk000001wr0A.png)

5. Complete the installation.

> NOTE: In case User Activity Core Service is installed in target servers, make sure to check the Core Service version in **Apps & Features**. In case of version mismatch, refer to the following article for additional information: [Manually Update User Activity Core Service](/docs/kb/auditor/monitoring-plans/user-activity-monitoring/manually-update-user-activity-core-service).

### Related articles

- Configuration — User Activity — User Activity Ports — v10.6
- [Manually Update User Activity Core Service](/docs/kb/auditor/monitoring-plans/user-activity-monitoring/manually-update-user-activity-core-service)

