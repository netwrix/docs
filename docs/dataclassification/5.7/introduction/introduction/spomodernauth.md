---
title: "Accessing SharePoint Online Using Modern Authentication"
description: "Accessing SharePoint Online Using Modern Authentication"
sidebar_position: 60
---

# Accessing SharePoint Online Using Modern Authentication

This option is recommended for organizations that use modern authentication as the identity
management approach, having multi-factor authentication (MFA) enabled for their user accounts. In
this scenario, Netwrix Data Classification will access the cloud-based infrastructure via Microsoft
Graph and other modern APIs, being authenticated through a pre-configured Azure AD application with
appropriate access permissions.

So, if you plan to implement such scenario, you should register an Azure AD app manually and provide
its settings to Netwrix Data Classification when configuring a monitored item.

## Step 1: Prepare an Application Certificate

Prepare application certificate as follows:

1. Create (or load) an IIS certificate on NDC Server (recommended).

:::note
This certificate should be installed for the local machine so that it can be accessed by
Netwrix Data Classification and other services.
:::


2. Export the certificate (.CER file):

    1. Open the certificate in IIS management console.
    2. Go to the **Details** tab.
    3. Select **Copy to File**.

**:::note**
    
    :::


    Do not export private key.

    4. Set file type to _DER-encoded CER_.

## Step 2: Create and Register a New App in Azure AD

To register a new Azure AD application, do the following:

1. Sign into the **Microsoft 365** **Admin Center** (with your _Global Administrator_, _Application
   Administrator_ or _Cloud Application Administrator_ account).
2. Search for and select the **Azure Active Directory admin center**.
3. Under the Azure Directory select the **App registrations** section.
4. Select **New registration**.
5. In the **Name** field, enter the application name.
6. In the **Supported account types** select who can use this application – use the **Accounts in
   this organizational directory only** option.
7. Click the **Register** button.

    :::note
    Application redirect URl is optional, you can leave it blank on this step.
    :::


8. Copy your application ID from the **Overview** section it to a safe location.

## Step 3: Grant Required Permissions

Next, you need to grant your new application the required API permissions.

Azure AD applications can be assigned _Delegated_ or _Application_ permissions:

- _Delegated_ permissions require a signed-in user present who consents to the permissions every
  time an API call is sent.
- _Application_ permissions are consented by an administrator once granted.

For the newly created app, you should use _Application_ permissions.

:::note
By default, a new application is granted one delegated permission for **Microsoft Graph
API** – **User.Read**. It is not required and can be removed.
:::


Do the following:

When found, click on the entry and proceed with adding the necessary permissions. The steps from
here on remain the same, so in most cases you would need the Application permissions entry, and the
relevant set of permissions therein.

1. Select the relevant entries, hit the Add permissions.
2. On the **Request API permissions**→Microsoft APIs pane, scroll down and select SharePoint.
3. Select Application Permissions.
4. Apply the following permissions:

    - Graph – Application permissions (With admin consent granted)

        - Sites.FullControl.All (Crawling)
        - Sites.Read.All
        - Sites.ReadWrite.All
        - TermStore.ReadWrite.All

    - SharePoint – Application permissions (With admin consent granted)

        - Sites.FullControl.All (Crawling)
        - TermStore.ReadWrite.All (Term Set access)

    :::note
    For taxonomy manager to full operate you must also make the user “app@sharepoint” a
    taxonomy admin (or group admin).
    :::


5. Click **Add permissions**.

## Step 4: Configure Certificates & Secrets

Having configured the app, you can upload its application certificate.

1. In the app settings, click **Certificates & secrets** and select **Upload certificate**.
2. Upload the .CER file you prepared at Step 1: Prepare an Application Certificate.
3. Copy the certificate thumbprint to a safe location.

## Step 5: Obtain Tenant ID

1. Open **Azure Active Directory admin center**.
2. Select **Azure Active Directory > Overview** section for the required Exchange Online
   organization.
3. Locate the **Tenant ID** and copy it to a safe location.
