---
description: >-
  Explains how to resolve IIS-hosted pages that load blank when Request
  Filtering blocks file extensions, with PowerShell commands to set
  allowUnlisted and add the necessary file extensions.
keywords:
  - iis
  - requestfiltering
  - allowUnlisted
  - PowerShell
  - Add-WebConfigurationProperty
  - Set-WebConfigurationProperty
  - AIC
  - SI Reports
products:
  - general
sidebar_label: Resolving IIS hosted pages loading blank when requ
tags: [troubleshooting-and-errors]
title: "Resolving IIS hosted pages loading blank when requested filtering in IIS is enabled"
knowledge_article_id: kA04u0000000IztCAE
---

# Resolving IIS hosted pages loading blank when requested filtering in IIS is enabled

## Summary
Use the following PowerShell command to set the Request Filtering behavior in IIS so unlisted file extensions are denied:

```powershell
Set-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "allowUnlisted" -value "False" -errorAction SilentlyContinue
```

## Issue
In IIS there is an installable component called Request Filtering. An element within that functionality allows you to allow or deny certain file extensions from loading in the webpage.

`allowUnlisted` - Specifies whether the Web server should process files that have unlisted file name extensions. If you set this attribute to `true`, you must list all file name extensions you want to deny. If you set this attribute to `false`, you must list all file name extensions you want to allow. The default value is `true`.

## Command used
```powershell
Set-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "allowUnlisted" -value "False" -errorAction SilentlyContinue
```

Enabling this option is common practice when securing IIS; however, this can potentially break Access Information Center (AIC) and SI Reporting Console reports from loading as these both utilize IIS.

For more context on this functionality see:
https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/requestfiltering/fileextensions/

If this is the case, you can run the following commands in PowerShell as Administrator to add the necessary extensions:

```powershell
Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension=‘.svc’} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.xaml'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.xap'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.xbap'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.ashx'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.js'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.css'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.html'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.aspx'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.png'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.gif'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.woff'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.woff2'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.csv'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.xls'} -errorAction SilentlyContinue

Add-WebConfigurationProperty -pspath 'MACHINE/WEBROOT/APPHOST'  -filter "system.webServer/security/requestFiltering/fileExtensions" -name "." -value @{fileExtension='.xlsx'} -errorAction SilentlyContinue
```

## Submitted by
- Ricky Calder

## Product
- Netwrix Access Analyzer and Netwrix Threat Prevention

## Affected Versions
- ALL

## Affected Module
- Netwrix Access Analyzer, AIC, SI Reports

## Dev Ticket
- N/A

## Resolved In Version
- N/A

## KB Type
- How To
