---
description: >-
  Learn how to reduce excessive FSAA_Applet_Server log growth by changing the
  logging level in the NLog.config file and restarting the service.
keywords:
  - FSAA
  - FSAA_Applet_Server
  - NLog.config
  - logs
  - log level
  - Debug
  - Error
  - StealthAUDIT
  - STEALTHbits
products:
  - access-analyzer
sidebar_label: How to Adjust the Log Level of the FSAA_Applet_Ser
tags:
  - file-system-and-sensitive-data-discovery
title: "How to Adjust the Log Level of the FSAA_Applet_Server Logs"
knowledge_article_id: kA0Qk00000022KHKAY
---

# How to Adjust the Log Level of the FSAA_Applet_Server Logs

## Symptoms

- The `FSAA_Applet_Server` logs are growing excessively.
- The log that it is written to is located at the following path:
  - `\%SAINSTALLDIR%\FSAA\FSAA_Applet_Server_<SERVER_NAME>_9492_YYMMDDHHMISSMSX.log`

  Example:
  - `E:\Program Files (x86)\STEALTHbits\StealthAUDIT\FSAA\FSAA_Applet_Server_<SERVER_NAME>_9492_250227095535674.log`

## Cause

The FSAA Applet server log level settings default to `Debug`, which can lead to rapid log growth in certain environments.

## Resolution

1. Locate the `NLog.config` file to adjust the logging level:
   - For proxy servers installed as a service, the file is located in:
     - `C:\Program Files (x86)\STEALTHbits\StealthAUDIT\FSAA\NLog.config`
   - For automatic deployments, the file is located on the application server in:
     - `StealthAUDIT\PrivateAssemblies\FILESYSTEMACCESS\Applet`

2. Open the `NLog.config` file using Notepad++ or a similar text/code editor.

3. Edit the logging level configuration to reduce log growth:
   - Locate the logger settings in the `NLog.config` file.
   - Set the `minlevel` attribute to one of the following levels based on your needs:
     - `Error` – Recommended for minimal logging.
     - `Info` – Provides informational logs.
     - `Warn` – Captures warnings and errors.
   - **IMPORTANT:** A level lower than `Error` is *not* recommended.

   Example logger configuration:
   ```xml
   <rules>
     <logger name="*FSAA*" minlevel="Error" writeTo="ServerFile" />
     <logger name="*Kestrel*" minlevel="Info" writeTo="ServerFile" />
     <logger name="*HttpsConnectionMiddleware*" minlevel="Debug" writeTo="ServerFile" />
     <logger name="*" minlevel="Warn" writeTo="ServerFile" />
   </rules>
   ```

4. Save the changes to the `NLog.config` file.

5. Restart the FSAA Applet Server or Proxy Host to apply the changes.
