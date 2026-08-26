---
title: "Configure Box for Crawling"
description: "Configure Box for Crawling"
sidebar_position: 10
---

# Configure Box for Crawling

Netwrix Data Classification connects to and crawls a Box source via a custom Box app, created within
Box management portal.

## Prerequisites

1. Check if your Box license plan provides the capacity you need. Netwrix Data Classification uses
   API calls for content crawling (min one API call for a single file). Therefore, if you need to store and crawl many files (e.g., 100,000), your plan must support enough API calls per month. Otherwise, NDC can't crawl your content within a month if you have limited API calls (e.g. with
   a *Starter* plan that provides only 25 000 calls per month). When selecting a Business subscription plan at [https://www.box.com/pricing](https://www.box.com/pricing),
   click **Show more features** and examine the **API calls per month** supported by each plan.

![box_lic_plans_thumb_0_0](/images/dataclassification/5.7/configuration/configinfrastructure/box_lic_plans_thumb_0_0.webp)

2. Ensure you have configured a valid Google account (with multi-factor authentication supported)
   and registered it as a _Box Developer Account_. This account is needed to create an app that
   Netwrix Data Classification will use for interaction with Box API. For more information on the
   custom apps and Box API, refer to
   [this article](https://developer.box.com/guides/authentication/sso/).

:::note
Account with multi-factor authentication is required for private/public keys creation and usage. If you haven't enabled two-factor authentication, NDC displays a warning and suggests configuring it.
:::


## Procedure Steps

There are four key stages in this procedure:

1. Create an app.
2. Authorize the app to access your organization’s data.
3. Register the source with Netwrix Data Classification.
4. Configure content for crawling within Box.

This section covers the steps you perform on the Box side. You perform steps 3 and 4 on the Netwrix Data Classification side. See the
[Box](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addbox.md) section for those steps.

### Step 1. Create the App

1. Log into your Box cloud-based storage facility using your _Box Developer Account_.
2. Open the Box developer's console endpoint: `https://app.box.com/developers/console`.
3. If you have not created an app before, you will see a screen similar to the following:

    ![box_app](/images/dataclassification/5.7/configuration/configinfrastructure/box_app.webp)

4. Click **Create New App**.
5. Select Custom App.
6. Ensure that the Authentication Method is selected as OAuth 2.0 with JWT (Server Authentication).
7. Name the app appropriately, typically Netwrix Data Classification.
8. Select View Your App on the confirmation screen.
9. Open the **Configuration** window by clicking the related item on the left.

    Navigate to Application Access and set the level to Enterprise. Click **Save
    changes**.

10. Navigate to **Advanced Features** and turn ON both switches: **Perform Actions as User** and
    **Create User Access Token**.
11. Then you should create a public/private key pair to authenticate the JWT requests made by your
    app. Navigate to Add and Manage Public Keys and select Generate a Public/Private Keypair.

    :::note
    If you have not enabled two-factor authentication for the app account in advance, you
    will be prompted to do it. Click **Settings**, then in the **Account Settings**, navigate to
    **Authentication**. Select **Require 2-step verification to protect your account**, then provide
    the necessary information in the **Enable Login Verification** dialog and complete the
    verification. When finished, get back to the **Configuration** section, clicking the related
    item in the left pane.
    :::


    ![box_keys](/images/dataclassification/5.7/configuration/configinfrastructure/box_keys.webp)

12. You will be notified about downloading a JSON file with all configuration settings of your app.

    **IMPORTANT!** Since Box doesn't store any private keys, this file contains the only copy of
    your private key, so store it securely.

### Step 2. Authorize the App

1. Go to the **General** section by clicking the item in the left pane.
2. Navigate to **App Authorization** and click **Submit for Authorization**. In the dialog
   displayed, review the settings.

:::note
If you are a Box administrator, copy the **Client ID** and store it to a safe location.
:::


3. Click **Submit** to send a request to Box administrator.

**IMPORTANT!** If you change the app configuration later, you must re-authorize the app.

If you are a Box administrator, you will receive an email with submitted request. Authorize it, as
decribed in Box documentation. For instance, you can take these steps:

1. Navigate to [box.com](https://www.box.com/en-gb/home) and open the **Admin Console**.
2. Click **Apps** on the left.
3. Navigate to Custom Apps and select Authorise New App:
4. Enter the Client ID of the app you received (the _API Key_ in email).
5. Click Authorize.

See also:

Box documentation
at[ https://developer.box.com/guides/authentication/#section-advanced-features](https://developer.box.com/guides/authentication/#httpsdeveloperboxcomguidesauthenticationsection-advanced-features)
