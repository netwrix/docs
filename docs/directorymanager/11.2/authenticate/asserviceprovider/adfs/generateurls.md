---
title: "Generate Consumer and Audience URLs for AD FS"
description: "Generate the consumer URL and audience URL for a Directory Manager client, which AD FS requires to create a relying party trust."
keywords:
  - AD FS consumer URL
  - AD FS audience URL
  - Entity ID/Audience
  - Directory Manager client URLs
  - relying party trust URLs
sidebar_position: 10
---

# Generate Consumer and Audience URLs for AD FS

Generate the consumer URL and audience URL for the Directory Manager client with which you want to
configure AD FS. AD FS requires these URLs when you create the relying party trust.

The consumer URL and audience URL are unique for each Directory Manager client. Clients include:

- Admin Center
- Directory Manager portals (each portal is treated as a separate client)
- Management Shell
- Directory Manager APIs

With multiple instances of Directory Manager, multiple Admin Centers and Management Shells are
available as separate clients.

## Generate the Consumer URL for a Directory Manager Client

Step 1 – In Authenticate, click the **Generate URL's** tab. The Generate URL's page opens.  
See the [Launch Authenticate](/docs/directorymanager/11.2/authenticate/overview.md#launch-authenticate) section of the
[Directory Manager Authenticate and SAML Single Sign-On](/docs/directorymanager/11.2/authenticate/overview.md) topic for additional information.

Step 2 – In the Select Client to Generate Consumer URL dropdown list, select the Directory Manager
client with which to set up AD FS. For example, select the Directory Manager portal named
_Wizard_.

Step 3 – The URL in the Consumer URL box is a unique identifier for the selected client.
You use it to set up the relying party trust in AD FS. Click **Copy** to copy it. Then paste it in a
file, preferably a text file, to save it.

:::note
When you upgrade to Directory Manager 11, you must generate the consumer URL again for the Directory
Manager client configured with AD FS, and update it in AD FS.
:::

## Generate Entity ID/Audience URL

Step 1 – In Authenticate, click the **SAML Providers** tab. The SAML Providers page opens.  
See the [Launch Authenticate](/docs/directorymanager/11.2/authenticate/overview.md#launch-authenticate) section of the
[Directory Manager Authenticate and SAML Single Sign-On](/docs/directorymanager/11.2/authenticate/overview.md) topic for additional information.

Step 2 – Click **New Provider**.

Step 3 – On the Create New Provider page, the Identity stores dropdown list displays the identity
stores defined in Directory Manager. Select an identity store.

The Client dropdown list displays the Directory Manager clients for the identity store.
Select the client with which you want to set up the SAML provider.  
The client you select must be the one for which you generated the consumer URL.  
To continue with the example, select the Directory Manager portal named _Wizard_ in the Client
dropdown list.

Step 4 – The Entity ID/Audience box displays a URL. Click **Copy** to copy it. Then paste it in a
file, preferably a text file, to save it.
