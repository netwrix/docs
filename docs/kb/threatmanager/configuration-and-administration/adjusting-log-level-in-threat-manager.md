---
description: 'Shows how to change the logging level for a specific Netwrix Threat Manager job service by editing the service''s appsettings.default.json file.'
keywords: [threat manager, logging, log level, Serilog, appsettings.default.json, Debug, Information, Warning, Error]
products:
- threat-manager
title: 'Adjusting Log Level in Threat Manager'
knowledge_article_id: kA04u0000000IqmCAE
---

# Adjusting Log Level in Threat Manager

## Overview

Netwrix Threat Manager job services support several logging levels to provide the required level of details to users. This article covers the steps to adjust the logging level for a specific service.

## Instructions

To modify the logging level for a Threat Manager job service:

1. Go to the installation folder. The default location is:

   ```
   C:\Program Files\STEALTHbits\StealthDEFEND
   ```

2. The `StealthDEFEND` folder contains separate folders for all job services. Go to the required service folder and locate the `appsettings.default.json` file. Open the file with a text editor.

3. Locate the `"Serilog": \{ \}` node and modify the values. For example:

   ```json
   "Serilog": {
       "MinimumLevel": {
           "Default": "Debug",
           "Override": {
             "Microsoft": "Warning",
              "System": "Warning"
           }
       }
   },
   ```

The default logging level is `Warning`. The `Information` or `Debug` level provides sufficient logging to troubleshoot most issues. Available logging options from least detailed to most detailed:

- Error
- Warning
- Information
- Debug