---
title: "Deployment Procedure"
description: "Deployment Procedure"
sidebar_position: 10
---

# Deployment Procedure

Follow the steps to install Azure Files add-on.

**Step 1 –** Accept EULA.

![azurefileeula](/images/auditor/10.7/addon/azurefiles/azurefileeula.webp)

**Step 2 –** Select the installation folder and click **Next**.

![azurefileinstfolder](/images/auditor/10.7/addon/azurefiles/azurefileinstfolder.webp)

**Step 3 –** Click **Install**. The wizard will start and ask the additional parameters.

## Configure Azure Files for Monitoring

Follow the steps to configure Azure files for monitoring.

**Step 1 –** Make sure you have a storage account to store logs. To reduce the volume of the stored
logs and the corresponding cost, it is recommended to create a rule in Life Cycle Management for
this storage. Netwrix Auditor doesn't need historic logs, after the add-on has written them into the
database. Refer to the
[corresponding Microsoft article](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview?tabs=azure-portal)
for additional information.

**Step 2 –** Enable audit in the Azure Files settings. Go to the Diagnostic settings, and make sure
that the following options are selected:

- "Audit" under the **Logs**
- "Archive to a storage account" under the **Destination details**
- Correct Storage account in the drop-down menu

**Step 3 –** Go to the storage account that has been created before and copy Connection String. This
parameter will be used in the add-on configuration.

**Step 4 –** If Microsoft Entra Kerberos or Active Directory Domain Services is used as an Identity
source, Graph API will be used to resolve the user names. It is necessary to register an Azure App
and grant it the following permissions:

- Type - Application
- Microsoft.Graph - User.Read.All

After that, save the Tenant ID, Application ID, and secret.

## Configure the add-on

Follow the steps to configure the add-on.

**Step 1 –** After the installation, the add-on configuration wizard will start. If it didn't start
automatically - open it from the installation folder.

**Step 2 –** Select **Proceed**.

**Step 3 –** Provide Auditor Server IP address and port number followed by endpoint for posting
Activity Records. See the [API Endpoints](/docs/auditor/10.7/api/endpoints.md) topic for more information.

This assumes that the add-on runs on the computer hosting Auditor Server and uses default port 9699.

If you want to run the add-on on another machine, you need to provide a name of the computer where
Auditor Server resides (e.g., _172.28.6.15_, EnterpriseNAServer, WKS.enterprise.local). To specify a
non-default port, provide a server name followed by the port number (e.g., WKS.ent
erprise.local:9999).

**CAUTION:** Do not modify the endpoint part (_/netwrix/api_).

![generalsettings](/images/auditor/10.7/addon/azurefiles/generalsettings.webp)

**Step 4 –** Specify Active Directory credentials:

- Username – Provide the name of the account under which the service runs. Unless specified, the
  service runs under the account currently logged on.
- Password – Provide the password for the selected account.

![adcredentials](/images/auditor/10.7/addon/azurefiles/adcredentials.webp)

**Step 5 –** Paste Azure Connection String in the corresponded field and click **Next**.

![azurefileconnectionstring](/images/auditor/10.7/addon/azurefiles/azurefileconnectionstring.webp)

**Step 6 –** Enter Tenant ID, App ID and App Secret of the Azure App you registered for the add-on.
Click **Next**.

![microsoftgraphapi](/images/auditor/10.7/addon/azurefiles/microsoftgraphapi.webp)

**Step 7 –** Click **Run** and close the window. The service should start the data collection now.
