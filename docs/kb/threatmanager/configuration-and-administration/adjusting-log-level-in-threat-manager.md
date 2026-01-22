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

Refer to the following steps to modify the logging level for a Threat Manager job service:

1. Proceed to the installation folder. Refer to the following default location:

   ```
   C:\Program Files\STEALTHbits\StealthDEFEND
   ```

2. The `StealthDEFEND` folder contains separate folders for all job services. Proceed to the required service folder and locate the `appsettings.default.json` file to manage the service settings. Open the file with an available text editor.

3. Locate the `"Serilog": \{ \}` node and modify the values. Refer to the following example:

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

The default logging level is `Warning`. The `Information` or `Debug` level is necessary to provide a sufficient level of logging to troubleshoot most issues. Refer to the following list of available logging options from least detailed to most detailed:

- Error
- Warning
- Information
- Debug