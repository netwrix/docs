---
title: "Generate the Consumer URL and Metadata File for PingOne"
description: "Generate the consumer URL and the Directory Manager metadata file that you import into PingOne to set up single sign-on."
keywords:
  - Directory Manager metadata for PingOne
  - PingOne consumer URL
  - metadata file for PingOne
sidebar_position: 10
---

# Generate the Consumer URL and Metadata File for PingOne

In Directory Manager Authenticate, you can generate a metadata file for the Directory Manager client
with which you want to set up the PingOne identity provider.

When you import this file into PingOne, it populates all Directory Manager-related configurations
into the provider.

In Authenticate, you must:

- Generate the consumer URL for the Directory Manager client with which you want to set up the
  PingOne identity provider
- Generate the metadata file

## Generate Consumer URL

To generate the consumer URL, see the [Generate Consumer and Audience URLs for AD FS](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/generateurls.md) topic. Replace
references to AD FS with PingOne.

## Generate the Metadata File

In Authenticate, use the **Metadata** section on the **Generate URLs** page to generate the metadata
file for the Directory Manager client with which you want to set up PingOne for single sign-on.

Because the consumer URL was generated for the _Wizard_ portal, generate the metadata file
for the same portal.

**To generate the file:**

1. In Authenticate, click the **Generate URL's** tab. The **Generate URL's** page is displayed.
2. In the **Metadata** section, select an identity store in the **Identity store** dropdown list.  
   This identity store authenticates users who use PingOne for single sign-on.
3. The **Client** dropdown list displays the Directory Manager clients for the identity store.
   Select the client for which you have already generated the consumer URL.
4. Click **Download** to download the metadata file to your machine.
