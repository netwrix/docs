---
description: >-
  This article describes how to change credentials used by Netwrix Threat
  Prevention, including SQL Server accounts for production and archive
  databases, Auto Deploy service accounts, SMTP credentials, and the Netwrix
  Threat Manager app token.
keywords:
  - Netwrix Threat Prevention
  - credentials
  - SQL Server
  - SMTP
  - Auto Deploy
  - Netwrix Threat Manager
  - SIDBConfigMgr.exe
  - SIEnterpriseManager
products:
  - threat-prevention
sidebar_label: How to Change Threat Prevention Credentials
tags: []
title: "How to Change Threat Prevention Credentials"
knowledge_article_id: kA04u0000000HwtCAE
---

# How to Change Threat Prevention Credentials

Netwrix Threat Prevention uses credentials to access one or more other resources, depending on configuration and enabled features. This document describes the steps for changing the passwords for each account and how to update Netwrix Threat Prevention.

- Netwrix Threat Prevention uses credentials to connect to the SQL Server for its production and archive databases. See the "SQL Server Credentials" section.
- The **Auto Deploy** feature requires credentials to deploy agents on domain controllers. See the "Auto Deploy Credentials" section.
- Enabling email notifications requires credentials for the SMTP server. See the "SMTP Server Credentials" section.
- The Netwrix Threat Manager integration requires a Netwrix Threat Manager API key. See the "Threat Manager Credentials" section.

## SQL Server Credentials

### Events Database

#### During a Netwrix Threat Prevention Enterprise Manager Upgrade

1. Uninstall Netwrix Threat Prevention Enterprise Manager
2. Reset the password of the service account in SQL Server if using SQL Server Authentication or Active Directory if using Windows Authentication
3. Run the installer for the new version of Netwrix Threat Prevention Enterprise Manager
4. When prompted to enter the SQL Connection information, supply the new password
5. Continue with the remainder of the installation

#### On a running instance of Netwrix Threat Prevention

1. Stop the `SIEnterpriseManager` service, and if installed `SIReportingService` and `SISchedulerService` services
2. Reset the password of the service account in SQL Server if using SQL Server Authentication or Active Directory if using Windows Authentication
3. Open the Netwrix Threat Prevention Database Connection Manager (`SIDBConfigMgr.exe` located in the `SIEnterpriseManager` installation folder)
4. Update the SQL Connection Settings section with the updated username and password
   1. If Windows Authentication is used then check the **Windows Authentication** checkbox
5. Click the **Update** button to apply the settings

### Archive Database

1. Open the Netwrix Threat Prevention Database Connection Manager (`SIDBConfigMgr.exe` located in the `SIEnterpriseManager` installation folder)
2. Check the box **Update Archiving Connection Settings**
3. Ensure the Archive server name, database and port are filled in correctly
4. Reset the password of the service account in SQL Server if using SQL Server Authentication or Active Directory if using Windows Authentication
5. Update the SQL Connection Settings section with the updated username and password
   1. If Windows Authentication is used then check the **Windows Authentication** checkbox

## Auto Deploy Credentials

If you are using the Netwrix Threat Prevention **Auto Deploy** feature then you'll need to update the credentials in the Netwrix Threat Prevention Console by:

1. Open the Netwrix Threat Prevention Console
2. Click on the **Agents** menu option in the Policy Center
3. Click on the **Configure Auto Deploy** button
4. Reset the service account's password in Active Directory
5. Replace the password with the updated password
6. Click **Apply** to save the settings

## SMTP Server Credentials

If you are using SMTP credentials to send authenticated emails from the Netwrix Threat Prevention Server you can replace these by:

1. Open the Netwrix Threat Prevention Console
2. Open the Alerts options by clicking on **Configuration** on the top menu bar followed by **Alerts**
3. Click on the **Email** tab in the Netwrix Threat Prevention System Alerting window
4. Click on **Configure**
5. Reset the password for the user account
6. Enter the updated password in the **Password** field
7. Click **Ok**

## Threat Manager Credentials

Sometimes it may be required to update the Netwrix Threat Manager App Token. When this is required you can replace this by:

1. Generate a new app token in Netwrix Threat Manager, shown [here](https://stealthbits.com/jdownloads/Documentation-Website/StealthDEFEND_2.7/Content/StealthDEFEND/User%20Guide/Configuration%20Menu/Integrations%20Page/App%20Tokens.htm), and copy it to the clipboard
2. Open the Netwrix Threat Prevention Console
3. Open the Netwrix Threat Manager Configuration by clicking on **Configuration** in the top menu bar and clicking **Threat Manager Configuration**
4. Paste the Netwrix Threat Manager App Token into the **App Token** field
5. Click **Save**
