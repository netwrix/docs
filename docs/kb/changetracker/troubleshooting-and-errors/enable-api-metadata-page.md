---
description: >-
  Fixes a 404 error when accessing the Netwrix Change Tracker API Metadata
  page by enabling the plugins.metadataenabled key in appSettings.config.
keywords:
  - API metadata
  - 404 error
  - Netwrix Change Tracker
  - appSettings.config
  - plugins.metadataenabled
  - IIS
  - Gen 7
  - metadata
products:
  - changetracker
knowledge_article_id: kA04u0000000JdyCAE
sidebar_label: 'Error: API Metadata Page Returns 404'
tags: [kb, troubleshooting-and-errors]
title: 'Error: API Metadata Page Returns 404'
---

# Error: API Metadata Page Returns 404

## Symptom

Accessing the Netwrix Change Tracker API Metadata page at `https://<hub-address>/api/metadata` returns a `404` error.

## Cause

The `plugins.metadataenabled` key in `appSettings.config` controls the API Metadata page. This key defaults to `false`, so the metadata page is unavailable until an administrator enables it.

## Resolution

1. On the Netwrix Change Tracker Hub server, open the following file in a text editor:

   `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs\appSettings.config`

2. Find the `options.serviceStackPlugins.metadataenabled` key and change its value from `false` to `true`.
3. Save the file.
4. Restart IIS.

`https://<hub-address>/api/metadata` now loads without a `404` error.

> **NOTE:** The related `options.serviceStackPlugins.swaggerenabled` key controls the Swagger API documentation page in the same way. Enable it if you also need access to Swagger.
