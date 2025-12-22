---
title: "Configure G Suite and Google Drive for Crawling"
description: "Configure G Suite and Google Drive for Crawling"
sidebar_position: 50
---

# Configure G Suite and Google Drive for Crawling

Netwrix Data Classification can crawl both: Personal Google Drives and G Suite domains. Netwrix Data
Classification for Google Drive uses the OAuth 2.0 protocol to authenticate to your G Suite domain.
You will need to create a service account and authorize it to access data in individual and shared
Drives on behalf of users using the Google Drive API. Depending on your drive type, do the
following:

- [Сonfiguring G Suite for Crawling](#сonfiguring-g-suite-for-crawling)
- [Configuring Personal Google Drive for Crawling](#configuring-personal-google-drive-for-crawling)

## Сonfiguring G Suite for Crawling

In Google Cloud Platform web console:

1. Create a new project
2. Select Application type
3. Create a new service account
4. Create a service account key (JSON, save a copy for the data source configuration)
5. Enable G Suite domain-wide delegation for the service account (write down the Client ID)
6. Enable Google Drive API

In G Suite Admin Console:

1. Authorize service account to access the Google Drive API

**To configure G Suite for crawling**

**IMPORTANT!** Google administrative interfaces tend to change over time, so refer to the following
guide for up-to-data instructions on creating OAuth 2.0 service accounts:
[Using OAuth 2.0 for Server to Server Applications](https://developers.google.com/identity/protocols/OAuth2ServiceAccount).

Review the following for additional information:

| To...                                                 | Do...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create a new project                                  | 1. Navigate to https://console.developers.google.com (Google Cloud Platform web console) while logged in as a G-Suite administrator within the domain to be crawled (if the user is not added within the correct domain then the correct data will not be identified). 2. Create a new project.                                                                                                                                                                                                                                                                                                                                                                                               |
| Select Application type                               | 1. Once a new project has been created, navigate to APIs&Services → OAuth consent screen. 2. Set User type to "_Internal_". 3. Provide the name for new application. 4. Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Create a new service account                          | 1. In Google Cloud Platform web console, navigate to Credentials and click Create Credentials. 2. Then, click Service account. 3. Create service account as described in Google official [article](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#article). 4. On the Grant this service account access to project (optional) step, do not select any roles. 5. On the Grant users access to this service account (optional) step, do not grant any user access. Click Done.                                                                                                                                                                                           |
| Create a service account key                          | 1. On the Service accounts section, click edit on the account you want to create a key for. 2. Click ![add_key_icon](/images/dataclassification/5.7/configuration/configinfrastructure/add_key_icon.webp) icon under Actions and select Create key. 3. In the Create private key for `<Service account name>` dialog, select JSON format, and download the file to a known location as it will be required later. <br />**NOTE:** Your new public / private keypair is generated and downloaded to your machine; it serves as the only copy of this key. You are responsible for storing it securely. If you lose this keypair, you will need to generate a new one.                |
| Delegate domain-wide authority to the service account | 1. On the Service accounts section, select your service account and click Edit. 2. Click the Show Domain-Wide Delegation link and tick the Enable G Suite Domain-wide Delegation checkbox. 3. Click Save. 4. Once completed, review the "_Domain wide delegation_" column for this account and make sure that the delegation enabled. 5. Click the View Client ID link. 6. Copy your Client ID, you will need it later.                                                                                                                                                                                                                                                                       |
| Enable Google Drive API                               | 1. In Google Cloud Platform web console, navigate to the API Dashboard and select Enable APIs and Services (if APIs have not previously been enabled). 2. Search for Google Drive API and click Enable (or Manage). 3. Search for Admin SDK API and click Enable (or Manage). 4. Switch to G Suite Admin Console. 5. Navigate to Security → API Controls → Manage Domain-wide Delegation within the Google admin portal. 6. Set the client name to the Client ID you copied on the previous step. 7. Set the API scopes and select Authorize: <ul><li>https://www.googleapis.com/auth/drive</li><li>https://www.googleapis.com/auth/admin.directory.user</li></ul>                            |


## Configuring Personal Google Drive for Crawling

In Google Cloud Platform web console:

1. Create a new project
2. Select Application type
3. Create a new service account
4. Create a service account key (JSON, save a copy for the data source configuration)
5. Enable Google Drive API

In your Google Drive:

1. Allow sharing for your files and folders

Review the following for additional information:

| To...                                    | Do...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create a new project                     | 1. Navigate to https://console.developers.google.com Google Cloud Platform web console) while logged in as a G-Suite administrator within the domain to be crawled (if the user is not added within the correct domain then the correct data will not be identified). 2. Create a new project.                                                                                                                                                                                                                                                                                                                                                                                    |
| Select Application type                  | 1. Once a new project has been created, navigate to APIs&Services → OAuth consent screen. 2. Set User type to "_Internal_". 3. Provide the name for new application. 4. Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Create a new service account             | 1. In Google Cloud Platform web console, navigate to IAM & Admin→Service Accounts. 2. Create service account as described in Google official [article](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#article). 3. On the Grant this service account access to project (optional) step, do not select any roles. 4. On the Grant users access to this service account (optional) step, do not grant any user access. Click Done.                                                                                                                                                                                                                           |
| Create a service account key             | 1. On the Service accounts page, select the account you want to create a key for. 2. Click ![add_key_icon](/images/dataclassification/5.7/configuration/configinfrastructure/add_key_icon.webp) icon under Actions and select Create key. 3. In the Create private key for `<Service account name>` dialog, select JSON format, and download the file to a known location as it will be required later. <br />**NOTE:** Your new public/private keypair is generated and downloaded to your machine; it serves as the only copy of this key. You are responsible for storing it securely. If you lose this keypair, you will need to generate a new one.                |
| Enable Google Drive API                  | 1. In Google Cloud Platform web console, navigate to the API Dashboard and select Enable APIs and Services (if APIs have not previously been enabled). 2. Search for Google Drive API and click Enable (or Manage).                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Allow sharing for your files and folders | 1. Navigate to each Google Drive account that you wish to crawl 2. Right click each file / folder you wish to crawl and select Share… 3. Enter email address of the service account you created on the Create a new service account step. To view email address, do the following: <ul><li>In Google API console, navigate to IAM & Admin → Service Accounts.</li><li>Select your service account and click Edit.</li><li>Review email address in the Email field. 4. If you wish to write classifications or apply workflows, ensure that Can organize, add, &edit option is selected (expand the menu to the right of People field).</li></ul>                                  |
