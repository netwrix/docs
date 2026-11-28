---
title: "ISmsGateway.TestCredentials Method (SMS Gateway API)"
description: "Validate the credentials GroupID uses to communicate with a custom SMS gateway by implementing ISmsGateway.TestCredentials."
keywords:
  - ISmsGateway.TestCredentials
  - SMS gateway credentials
  - custom SMS gateway
  - Imanami.PublicInterfaces
sidebar_position: 110
---

# ISmsGateway.TestCredentials Method (SMS Gateway API)

Tests the credentials for communicating with the SMS gateway for validity.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
bool TestCredentials();
```

**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if the credentials are valid.

**See Also**

- [Implement and Deploy a Custom SMS Gateway in GroupID](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
