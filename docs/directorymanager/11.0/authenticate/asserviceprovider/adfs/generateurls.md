---
title: "Generate URLs"
description: "Generate URLs"
sidebar_position: 10
---

# Generate URLs

Generate the consumer URL and audience URL for the GroupID client with which you want to configure
AD FS. These URLs are required while creating the relying party trust in AD FS.

The consumer URL and audience URL are unique for each GroupID client. Clients include:

- Admin Center
- GroupID portals (each portal is treated as a separate client)
- Management Shell
- GroupID APIs

With multiple instances of GroupID, multiple Admin Centers and Management Shells are available as
separate clients.

What do you want to do?

- [Generate the Consumer URL for a GroupID Client](#generate-the-consumer-url-for-a-groupid-client)
- [Generate Entity ID/Audience URL](#generate-entity-idaudience-url)

## Generate the Consumer URL for a GroupID Client

1. In Authenticate, click the **Generate URL's** tab. The **Generate URL's** page is displayed.
2. In the **Select Client to Generate Consumer URL** drop-down list, select a GroupID client to set
   up AD FS with it. Let’s suppose you select the GroupID portal named _Wizard_.
3. The URL displayed in the **Consumer URL** box is a unique identifier for the selected client. It
   is used to set up relying party trust in AD FS. Click **Copy** to copy it. Then paste it in a
   file, preferably a text file, to save it.

NOTE: On upgrade to GroupID 11, you must generate the consumer URL again for the GroupID client
configured with AD FS, and update it in AD FS.

## Generate Entity ID/Audience URL

1. In Authenticate, click the **SAML Providers** tab. The **SAML Providers** page is displayed.
2. Click **New Provider**.
3. On the **Create New Provider** page, the **Identity stores** drop-down list displays the identity
   stores defined in GroupID. Select an identity store.

    The **Client** drop-down list displays the GroupID clients with respect to the identity store.
    Select the client with which you want to set up the SAML provider.  
     The client you select must be the one for which you generated the consumer URL.  
     To continue with the example, select the GroupID portal named _Wizard_ in the **Client**
    drop-down list.

4. The **Entity ID/Audience** box displays a URL. Click **Copy** to copy it. Then paste it in a
   file, preferably a text file, to save it.
