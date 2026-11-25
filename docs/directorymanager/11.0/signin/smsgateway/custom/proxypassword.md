---
title: "ISmsGateway.ProxyPassword"
description: "Get or set the password of the account that connects a custom SMS gateway to its proxy server."
keywords:
  - ISmsGateway.ProxyPassword
  - SMS gateway proxy password
  - custom SMS gateway
  - Imanami.PublicInterfaces
sidebar_position: 60
---

# ISmsGateway.ProxyPassword

Gets or sets the password of the user account that is used to connect to the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyPassword { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The password of the proxy account.

**Remarks**

Use this property if your proxy server requires a user name and password to connect to it.

**See Also**

- [Implement and Deploy a Custom SMS Gateway in Directory Manager](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
