---
description: >-
  Resolving the "System Error / An unknown error occurred" message when
  uploading agent updates in Netwrix Change Tracker by increasing the IIS
  maxAllowedContentLength value.
keywords:
  - agent update
  - upload failed
  - IIS
  - Web.config
  - maxAllowedContentLength
  - requestFiltering
  - agent update upload error
  - request size limit
  - iisreset
  - 250000000
products:
  - change-tracker
sidebar_label: Unable to Upload Agent Update Files
tags:
  - kb
  - troubleshooting-and-errors
title: Unable to Upload Agent Update Files
knowledge_article_id: ""
---

# Unable to Upload Agent Update Files

## Symptom

When attempting to upload agent updates in Netwrix Change Tracker, the following errors appear:

```text
System Error
An unknown error occurred
```

```text
<number> File(s) failed to upload
```

## Cause

The default maximum file upload size in Internet Information Services (IIS) is too low for the agent update files.

## Resolution

Increase the file upload size limit in `Web.config`:

1. Stop all IIS services by running the following command in an elevated Command Prompt:

   ```bat
   iisreset /stop
   ```

2. Open the `Web.config` file:

   ```text
   C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Web.config
   ```

3. Modify the `<requestFiltering>` node to increase the allowed content length:

   ```xml
   <requestFiltering>
       <requestLimits maxAllowedContentLength="250000000" />
   </requestFiltering>
   ```

4. Save the changes and start IIS services:

   ```bat
   iisreset /start
   ```

5. Log in to the Change Tracker console and reupload the update files.
