---
description: >-
  When you send an API command to the EPE REST server, the server responds with
  Error Code 0x80070021. This article explains the detailed error information,
  cause, and steps to resolve the issue.
keywords:
  - EPE
  - REST
  - '0x80070021'
  - IIS
  - web.config
  - ASP.NET
  - EpeRestSite
  - Netwrix Threat Prevention
  - API
products:
  - threat-prevention
sidebar_label: 'Error: EPE Rest Server API Returns Error Code 0x80'
tags: []
title: 'Error: EPE Rest Server API Returns Error Code 0x80070021'
knowledge_article_id: kA0Qk0000001vc9KAA
---

# Error: EPE Rest Server API Returns Error Code 0x80070021

## Symptom

When sending an API command to the EPE REST server, the response is: `Error Code 0x80070021`.

### Detailed Error Information

```
Module    IIS Web Core
Notification    BeginRequest
Handler    Not yet determined
Error Code    0x80070021
Config Error    This configuration section cannot be used at this path. This happens when the section is locked at a parent level. Locking is either by default (overrideModeDefault="Deny"), or set explicitly by a location tag with overrideMode="Deny" or the legacy allowOverride="false".
Config File    \?\C:\Program Files\Netwrix\Netwrix Threat Prevention\EpeRestSite\web.config
Config Source:
  28:   </modules>
  29:   <handlers>
  30:   <remove name="ExtensionlessUrlHandler-Integrated-4.0" />
```

## Cause

The installed ASP.NET version is not high enough or is not installed. See the EPE REST Site Requirements for the minimum required versions: https://docs.netwrix.com/docs/threatprevention/7_5

## Resolution

1. Install the ASP.NET version that matches the requirements documentation or a higher version on the EPE REST server.
2. Restart IIS using the following command from the Windows command prompt:

```text
iisreset restart
```

## Related Link

- EPE REST Site Requirements: https://docs.netwrix.com/docs/threatprevention/7_5
