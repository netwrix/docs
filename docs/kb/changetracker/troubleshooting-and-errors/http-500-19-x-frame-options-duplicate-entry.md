---
description: >-
  Resolves HTTP/HTTPS Error 500.19 caused by a duplicate X-Frame-Options
  collection entry in web.config after upgrading Netwrix Change Tracker from
  an older version.
keywords:
  - HTTP 500.19
  - X-Frame-Options
  - IIS
  - web.config
  - Netwrix Change Tracker
  - duplicate collection entry
  - IIS conflict
  - upgrade
products:
  - changetracker
knowledge_article_id: ka04u000000QmkBAAS
sidebar_label: 'HTTP 500.19: Duplicate X-Frame-Options Entry'
tags: [kb, troubleshooting-and-errors]
title: 'HTTP 500.19: Duplicate X-Frame-Options Entry'
---

# HTTP 500.19: Duplicate X-Frame-Options Entry

## Symptom

After you upgrade Netwrix Change Tracker from a much older version, the console returns the following error:

```text
HTTP Error 500.19 - Internal Server Error
Cannot add duplicate collection entry of type 'add' with unique key attribute 'name' set to 'X-Frame-Options'
```

## Cause

This behavior is most likely caused by the upgrade process adding a new `X-Frame-Options` entry to `web.config` without removing the entry from the previous installation, leaving two entries with the same key. IIS then rejects the duplicate key, which prevents the site from loading.

## Resolution

1. Open IIS and stop the IIS server.
2. Navigate to `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) WebUI\html\`.
3. Open `web.config` in a text editor and locate the two `X-Frame-Options` entries, for example:

   ```text
   <add name="X-Frame-Options" value="SAMEORIGIN"/>
   ```

4. Comment out one of the two duplicate `X-Frame-Options` entries so only one remains active.
5. Save the file.

   > **NOTE:** You may need to save the file to the desktop first, then copy it back into the WebUI `html` directory, replacing the original.

6. Start IIS and open the Change Tracker console.

You should now be able to log in to the console without the `500.19` error.
