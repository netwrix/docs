---
title: "Configure SharePoint Online Classification App"
description: "Setup guide for 1Secure SPO Data Classification Connector and Azure classifier deployment"
sidebar_position: 30
---

# Configure SharePoint Online Classification App

## Create 1Secure SPO Data Classification Connector

* Log in to 1Secure
* Go to Configuration
* Go to Managed organizations
* Select the child tenant you're working within
* Select the SharePoint Online source's Connectors
* Add/Edit SharePoint Online Data Classification

## Deploy and Configure the Classifier in Azure

* Create new resource group
* Give current user at least: Domain Services Contributor, Contributor, Key Vault Secrets Officer, Key Vault Certificates User, and Role Based Access Control Administrator within resource group
* Add "Netwrix 1Secure Classifier" from marketplace

  \
  ![The configuration screen for deploying the 1Secure classifier app](attachments/c8e939c8-8634-4a60-9cba-a931ef38e8f1.png " =599x391")
* Set Region
* Set Resource name `<prefix>`e.g. CompanyName-1Secure
* After creation go to resource group
* Go to `<prefix>`-textextraction
* Open Functions page and go to App Keys
* Copy "default" key
* Go to `<prefix>`-classifier
* Open Settings folder and go to Environment variables
* Paste "default" key into "TextExtraction__ApiKey" value

## Register the Classifier in 1Secure

* In Azure classifier app, go to Overview
* Click on the "Default domain" link and copy the full url (see below)

  \
  ![](attachments/0138b931-17d4-4266-ade7-d619757f14e2.png " =1890x197")


* In 1Secure and paste as "Classifier Function App Url"
* Go to `<prefix>`-sb-core
* Open Settings Folder and go to Shared access policies
* Create new shared access policy, only 'Send' claims are required


 ![](attachments/0fff23ad-9695-406b-b172-636c384d5fba.png " =1678x899")


* Copy the "Primary connection string"
* Swap to 1Secure tab and paste as "Service Bus SAS Connection String"


 ![](attachments/b27669d7-bc3f-4c61-9722-118b77a3d0c2.png " =642x303")


* Press Register
* After success, save and swap back to Azure Portal (tab 1)

## Set Up Classifier Link to SPO

**On Azure Portal (tab 1):**

* Go to `<prefix>`-kv
* Open Objects folder and go to Secrets![](attachments/ac55f3e0-fee7-4318-a86b-58e9899c3a10.png " =1738x283")
* Swap to Azure Portal (tab 2)

**On Azure Portal (tab 2):**

* Open your SharePoint App Registration


 ![](attachments/9ed38a58-714f-4733-98c2-dc6fbc7c7ce4.png " =642x320")


* Copy App Registration tenant ID
* Swap to Azure Portal (tab 1)
  * Click on the secret with the name "source-auth-key-\{Guid\}-__tenant-id__"
  * Click "+New Version"
  * Paste the tenant ID as the secret value
  * Click Create\n![](attachments/beabf83e-a591-4914-be74-37cd6755fe25.png " =1510x876")
* Copy App Registration client ID
* Swap to Azure Portal (tab 1)
  * Click on the secret with the name "source-auth-key-\{Guid\}-__client-id__"
  * Click "+New Version"
  * Paste the client ID as the secret value
  * Click Create




**On Azure Portal (tab 1):**


 ![](attachments/2dfd2ba5-c013-43b5-ae8f-c813dda8e9a0.png " =1852x685")

* Go to Certificates
* Click on "sharepoint-auth-\{Guid\}"
* Click on current version
* Click on "Download in CER format"
* Swap to Azure Portal (tab 2)

**On Azure Portal (tab 2):**

* Open Manage folder in App Registration and click Certificates & Secrets
* Go to Certificates
* Click "Upload certificate"
* Upload the downloaded certificate and give it a name


 ![](attachments/3b0612ed-6b25-40c4-b091-7a5a73921914.png " =1409x817")

## Troubleshooting

### General Errors

**Classification connector successfully registers but shows status 'New' even after a successful state crawl**

* There could be errors in the classifier app - check the Application Insights resource (in the classifier resource group, resource ending in `-ai`) for more detailed errors - use the below section for further troubleshooting steps

### Application Insights Errors

**No ClientId was specified**

*(Full error: Microsoft.Graph.ServiceException: Code: generalException Message: An error occurred sending the request. ---> MSAL.NetCore.4.70.2.0.MsalClientException: ErrorCode: no_client_id……)*

* Check that the client ID and tenant ID secrets are set in the KeyVault instance

**The maximum entity size has been reached or exceeded for queue**

* The classifier has been unable to process service bus messages and the queue is now full, the queue can be emptied. The classifications should be processed successfully on the next crawl.
  * In the classifier resource group, find the service bus namespace resource (named `<classifier-name>`**-class-sb-core**)
  * Open the **state-classification** queue, and click **Service Bus Explorer** in the left-hand side bar
  * Click **Peek Mode** and change it to **Receive Mode**, then click **Purge messages**

**Name or service not known**

*(Example error: Microsoft.Graph.ServiceException: Code: generalException*\n*Message: An error occurred sending the request.*\n *---> System.AggregateException: Retry failed after 4 tries. Retry settings can be adjusted in ClientOptions.Retry or by configuring a custom retry policy in ClientOptions.RetryPolicy. (Name or service not known (*`<classifier-name>`*-kv:443))*

* One of the environment variables may be incorrect in the classifier or text extraction app. Ensure that URLs in the variables are valid (for example variables `FileDownload__ClientCredentialsKeyVaultUrl` and `TextExtraction__ApiBaseUrl`)