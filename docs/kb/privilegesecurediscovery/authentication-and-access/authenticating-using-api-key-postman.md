---
title: "Authenticating with an API Key in Postman"
description: "Configure Postman to authenticate to the Privilege Secure for Discovery API with an API key and store the returned JWT token as a global variable."
sidebar_label: "Authenticating with an API Key in Postman"
keywords:
- Postman
- API key
- authentication
- JWT
- NPS-D
- SecureONE
- Remediant SecureONE
- global variable
- current_jwt
- api_key
products:
- privilegesecurediscovery
tags:
- kb
- authentication-and-access
---

:::warning[Needs dev input: remove before publishing]
TODO: Product documentation no longer includes Postman setup pages (API key and curl only). Decide whether to retire this article or keep it as a Postman-specific KB. Confirm the "API Keys" request name in the Postman collection at 26.09.1. Evidence: none.
:::

## Overview

This article describes how to configure [Postman](https://www.postman.com/downloads/) to authenticate to the Netwrix Privilege Secure for Discovery API with an API key and store the returned JSON Web Token (JWT) as a global variable.

For the available endpoints, see the [Advanced API Reference](/docs/privilegesecurediscovery/integrations/api/advanced-api-reference). To authenticate without Postman, see [Authenticate with an API key](/docs/privilegesecurediscovery/integrations/api/authenticate-with-an-api-key).

## Prerequisites

You need:
- A valid **userId**
- An API key generated for that user

## Instructions

1. Open Postman.

2. Click the eye icon in the upper-right corner.

   ![Postman toolbar with the eye icon highlighted in the upper-right corner](../0-images/postman-globals-eye-icon.png)

3. Click **Edit** next to **Globals**.

   ![Postman environment quick look with the Edit button next to Globals](../0-images/postman-globals-edit.png)

4. Add the following variables:

   - **api_key**
     - Initial Value: `<api-key>`
     - Current Value: `<api-key>`

   - *(Optional)* **base_url**
     - Enter the URL of your environment if required.

   ![Postman global variables list with api_key and base_url entries](../0-images/postman-globals-variables.png)

5. Go to the API collection, expand **API Keys**, and select **Authenticate using an API key**.

   ![Postman API collection with the Authenticate using an API key request selected](../0-images/postman-api-collection.png)

6. Click the **Body** tab and enter the **userId** associated with the API key.

   > **NOTE:** `{{api_key}}` automatically pulls from the global variable.

   ![Postman Body tab with the userId field](../0-images/postman-body-tab.png)

7. Click the **Tests** tab.

   ![Postman request with the Tests tab open](../0-images/postman-tests-tab.png)

   Paste the following:

   ```javascript
   var jsonData = JSON.parse(responseBody);
   postman.setGlobalVariable("current_jwt", jsonData.token);
   ```

8. Click **Save**, or use **Save As** to store it separately.

   ![Postman request toolbar with the Save button](../0-images/postman-save.png)

9. Click **Send** and verify the response appears at the bottom. You should receive a token in the response.

   ![Postman Send button and the token returned in the response pane](../0-images/postman-send-response.png)

10. Send **GET** and **POST** requests that use the stored `current_jwt` token.

> **IMPORTANT:** The authentication token expires every 8 hours. Run the **Authenticate using an API key** request again to refresh it.
