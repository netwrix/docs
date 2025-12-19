---
title: "Generate the Consumer URL and Metadata File"
description: "Generate the Consumer URL and Metadata File"
sidebar_position: 10
---

# Generate the Consumer URL and Metadata File

In GroupID Authenticate, you can generate a metadata file for the GroupID client with which you want
to set up the PingOne identity provider.

When you import this file into PingOne, it populates all GroupID-related configurations into the
provider.

In Authenticate, you have to:

- Generate the consumer URL for the GroupID client you want to set up the PingOne identity provider
  with
- Generate the metadata file

## Generate Consumer URL

To generate the consumer URL, see the
[Generate URLs](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/generateurls.md)
topic. Replace references to AD FS with PingOne.

## Generate the Metadata File

In Authenticate, use the **Metadata** section on the **Generate URLs** page to generate the metadata
file for the GroupID client with which you want to set up PingOne for single sign-on.

Since we generated the consumer URL for the _Wizard_ portal, we should generate the metadata file
for this same portal.

**To generate the file:**

1. In Authenticate, click the **Generate URL's** tab. The **Generate URL's** page is displayed.
2. In the **Metadata** section, select an identity store in the **Identity store** drop-down list.  
   Users will be authenticated in this identity store when they use PingOne for single sign-on.
3. The **Client** drop-down list displays the GroupID clients for the identity store. Select the
   client for which you have already generated the consumer URL.
4. Click **Download** to download the metadata file to your machine.
