---
title: "ISmsGateway.ProxyUsername"
description: "Get or set the user name that a custom SMS gateway uses to connect to its proxy server."
keywords:
  - ISmsGateway.ProxyUsername
  - SMS gateway proxy user name
  - custom SMS gateway
  - Imanami.PublicInterfaces
sidebar_position: 80
---

# ISmsGateway.ProxyUsername

Gets or sets the user name to connect to the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyUsername { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The user name of the proxy account.

**Remarks**

Use this property if your proxy server requires a user name and password to connect to it.

**See Also**

- [Implement and Deploy a Custom SMS Gateway in GroupID](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
