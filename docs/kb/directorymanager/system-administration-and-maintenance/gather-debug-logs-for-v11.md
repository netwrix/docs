---
description: >-
  Shows how to enable Debug logging for Netwrix Directory Manager v11 components
  and collect logs using the Admin Center portal or by locating log files on
  disk.
keywords:
  - Netwrix Directory Manager
  - debug logs
  - Admin Center
  - GroupID
  - elasticsearch
  - log dump
  - Data Service
  - Scheduler Service
products:
  - directory-manager
sidebar_label: Gather Debug Logs for v11
tags:
  - system-administration-and-maintenance
title: "Gather Debug Logs for v11"
knowledge_article_id: kA0Qk0000001dvNKAQ
---

# Gather Debug Logs for v11

## Applies To
Netwrix Directory Manager 11

## Overview
By default, Netwrix Directory Manager application logs are set to **Error** mode for logging. To capture detailed logs, you must manually set each application to **Debug** mode before collecting the logs.

Netwrix Directory Manager logging levels are configured per application, so you must enable Debug mode for each relevant component individually.

This article covers the steps to:
- Dump log files to a specific location from the Admin Center portal
- Enable Debug mode for individual applications including:
  - Admin Center
  - Data Service
  - Security Service
  - Application Portal
  - Email Service
  - Scheduler Service
  - Configuration Tool
  - Elasticsearch

## Instructions
Follow the steps in the sections below to enable Debug logging for individual applications and collect the relevant logs.

### Enable Debug for Admin Center Logs
1. Log in to the Admin Center for the Identity Store where the issue is occurring.
2. Navigate to **Applications** then click on the **Admin Center** application.
3. Open the Admin Center application settings by clicking the three-dot icon on the application.
4. In the application settings, click **Deployment**.
5. In the Deployment settings, click on **Logging**.
6. Under **File Logging**, change **Log Events** to **Debug** and save.

Alternatively, you can manually capture this log from the following location:

```text
X:\Program Files\Imanami\GroupID 11.0\AdminCenter\Inetpub\AdminCenter\Web\Logs
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Locate the file named GroupID11-AdminCenter.

### Enable Debug for Data Service Logs
1. Log in to the Admin Center for the Identity Store where the issue is occurring.
2. Navigate to **Applications** then click on the **Data Service** application.
3. Open the Data Service application settings by clicking the three-dot icon on the application.
4. In the application settings, click **Deployment**.
5. In the Deployment settings, click on **Logging**.
6. Under **File Logging**, change **Log Events** to **Debug** and save.

Alternatively, you can manually capture this log from the following location:

```text
X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\Logs
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Locate the file named GroupID11-GroupID Data Service.

### Enable Debug for Security Service Logs
1. Log in to the Admin Center for the Identity Store where the issue is occurring.
2. Navigate to **Applications** then click on the **Security Service** application.
3. Open the Security Service application settings by clicking the three-dot icon on the application.
4. In the application settings, click **Deployment**.
5. In the Deployment settings, click on **Logging**.
6. Under **File Logging**, change **Log Events** to **Debug** and save.

Alternatively, you can manually capture this log from the following location:

```text
X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\GroupIDSecurityService\Web\Logs
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Locate the file named GroupID11-SecurityService.

### Enable Debug for Application Portal Logs
1. Log in to the Admin Center for the Identity Store where the issue is occurring.
2. Navigate to **Applications** then click on the **Application Portal** application.
3. Open the Application Portal application settings by clicking the three-dot icon on the application.
4. In the application settings, click **Deployment**.
5. In the Deployment settings, click on **Logging**.
6. Under **File Logging**, change **Log Events** to **Debug** and save.

Alternatively, you can manually capture this log from the following location:

```text
X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\[Application portal for which the logging level is changed]\Web\Logs
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Locate the file named GroupID11-GroupID Portal.

### Enable Debug for Email Service Logs
1. Log in to the Admin Center for the Identity Store where the issue is occurring.
2. Navigate to **Applications** then click on the **Email Service** application.
3. Open the Email Service application settings by clicking the three-dot icon on the application.
4. In the application settings, click **Deployment**.
5. In the Deployment settings, click on **Logging**.
6. Under **File Logging**, change **Log Events** to **Debug** and save.

Alternatively, you can manually capture this log from the following location:

```text
X:\Program Files\Imanami\GroupID 11.0\EmailService\Inetpub\GroupIDEmailService\Web\Logs
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Locate the file named GroupID11-Email Service.

### Enable Debug for Scheduler Service Logs
1. Log in to the Admin Center for the Identity Store where the issue is occurring.
2. Navigate to **Applications** then click on the **Scheduler Service** application.
3. Open the Scheduler Service application settings by clicking the three-dot icon on the application.
4. In the application settings, click **Deployment**.
5. In the Deployment settings, click on **Logging**.
6. Under **File Logging**, change **Log Events** to **Debug** and save.

Alternatively, you can manually capture this log from the following location:

```text
X:\Program Files\Imanami\GroupID 11.0\GroupIDSchedulerService\Inetpub\GroupIDSchedulerService\Web\Logs
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Locate the file named GroupID11-Scheduler Service.

### Replication Logs
The Replication Service runs in Debug mode by default, so no changes are required. You can capture the logs directly from the following location:

```text
X:\Program Files\Imanami\GroupID 11.0\ReplicationService\Inetpub\GroupIDReplicationService\Web\Logs
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Locate the file named GroupID11-Replication Service.

### Configuration Tool logs
You can manually capture the Configuration Tool logs from the following location:

```text
X:\ProgramData\Imanami\GroupID 11.0\Configuration Tool
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Locate the file named GroupIDConfigurationTool11.

### Elasticsearch Logs
You can manually capture the Elasticsearch logs from the following location:

```text
X:\Program Files\Imanami\GroupID 11.0\elasticsearch\elasticsearch-8.0.0\logs
```

> **NOTE:** X refers to the installation directory of Netwrix Directory Manager. Compress the entire Logs folder.

### Dump Log Files To a Specific Location
You can use the Logs Dump feature to collect and dump your required logs to a specific location.

1. Log on to the Netwrix Directory Manager Admin Center portal.
2. Once you have set the chosen applications to **Debug mode**, you must replicate the issue for the logs to capture.
3. Once the issue has been reproduced, click the settings **Gear** icon on the Dashboard of the Admin Center portal.
4. In Netwrix Directory Manager settings, click **Logs**.
5. In the **Dump logs of** area, select the check boxes for the Netwrix Directory Manager modules or event sources you want to include.
   - If you select **Event Viewer**, the **Event Logs** list becomes available. Expand the list and select the logs you want to capture. These correspond to logs maintained by Windows Event Viewer.
   - If you select **IIS**, the **Websites** list becomes available. Expand it and select the websites for which you want to collect logs.
6. Click **Download**. Netwrix Directory Manager will generate a zip file with the selected application log files and download it to your web browser Downloads folder.
