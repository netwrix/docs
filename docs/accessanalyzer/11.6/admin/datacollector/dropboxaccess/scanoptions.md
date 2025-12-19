---
title: "DropboxAccess: Scan Options"
description: "DropboxAccess: Scan Options"
sidebar_position: 40
---

# DropboxAccess: Scan Options

Use the Scan Options page to authorize Enterprise Auditor to generate an Access Token allowing the
DropboxAccess Data Collector to access and scan an organization’s Dropbox environment. The Access
Token is used as the credential in the Connection Profile.

:::note
The Access Token needs to be generated only once, prior to the first execution of any job
in which the DropboxAccess Data Collector is used in a query.
:::


The Scan Options page is a wizard page for the following categories:

- Scan Dropbox Access
- Scan for Sensitive Content

Follow the steps to create the Access Token:

![Dropbox Access Auditor Data Collector Wizard Scan Options page](/images/accessanalyzer/11.6/admin/datacollector/dropboxaccess/scanoptions.webp)

**Step 1 –** Click the **Authorize** button to access the Dropbox Authentication page.

![Dropbox Log in page](/images/accessanalyzer/11.6/admin/datacollector/dropboxaccess/scanoptionsdropboxlogin.webp)

**Step 2 –** On the Dropbox Authentication page, log in as the Team Administrator.

![Copy Access Token](/images/accessanalyzer/11.6/admin/datacollector/dropboxaccess/scanoptionsaccesstoken.webp)

**Step 3 –** Once the Access Token has been generated, click **Copy to Clipboard**. Click **Next**
to finish choosing the configuration options or click **Cancel** to close the Dropbox Access Auditor
Data Collector Wizard.

Create a Connection Profile using this access token as the credential. See the
[Custom Dropbox Connection Profile & Host List](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/configurejob.md)
topic for additional information on configuring the Dropbox credential.

:::tip
Remember, assign this Connection Profile to the job group or job where the host assignment for the
Dropbox environment to be targeted has been assigned.
:::
