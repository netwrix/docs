---
title: "Authenticate Using an API Key in Postman"
description: "How to configure Postman to authenticate against the Privilege Secure Discovery (NPS-D) API using an API key and store the resulting JWT token as a global variable."
sidebar_label: "Authenticate Using an API Key in Postman"
keywords:
- Postman
- API key
- authentication
- JWT
- NPS-D
- Privilege Secure Discovery
- global variable
- SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- authentication-and-access
---

# Authenticate Using an API Key in Postman

## Overview

Postman is free to download at [postman.com/downloads](https://www.postman.com/downloads/). Use these instructions to authenticate against the Privilege Secure Discovery API using an API key and store the resulting JWT token as a global variable.

Refer to the NPS-D API documentation for a full list of available endpoints and usage.

## Prerequisites

You need:
- A valid **userId**
- An **API Key** generated for that user

## Instructions

1. Open Postman.

2. Click the **eye icon** in the upper-right corner.
   ![Postman eye icon in upper-right corner](../0-images/postman-globals-eye-icon.png)

3. Click **Edit** next to **Globals**.
   ![Edit button next to Globals](../0-images/postman-globals-edit.png)

   Add the following variables:

   - **api_key**
     - Initial Value: *your API key*
     - Current Value: *your API key*

   - *(Optional)* **base_url**
     - Enter the SecureONE environment URL if required.

   ![Global variables with api_key and base_url configured](../0-images/postman-globals-variables.png)

4. Navigate to the **SecureONE API collection**, expand **API Keys**, and select **Authenticate using an API key**.
   ![SecureONE API collection with Authenticate using an API key selected](../0-images/postman-api-collection.png)

5. Click the **Body** tab and enter the **userId** associated with the API key.

> **NOTE:** `{{api_key}}` automatically pulls from the global variable.

   ![Body tab with userId field](../0-images/postman-body-tab.png)

6. Click the **Tests** tab.
   ![Tests tab](../0-images/postman-tests-tab.png)

   Paste the following:

   ```javascript
   var jsonData = JSON.parse(responseBody);
   postman.setGlobalVariable("current_jwt", jsonData.token);
   ```

7. Click **Save**, or use **Save As** to store it separately.
   ![Save button](../0-images/postman-save.png)

8. Click **Send** and verify the response appears at the bottom. You should receive a token in the response.
   ![Send button and response at the bottom](../0-images/postman-send-response.png)

9. You can now send **GET** and **POST** requests using the stored `current_jwt` token.

> **NOTE:** The authentication token expires every 8 hours. Re-run the **Authenticate using an API key** request to refresh it.
