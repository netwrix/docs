---
title: "ISmsGateway.ProxyDomain Property"
description: "Get or set the domain name or IP address of the proxy server that a custom SMS gateway uses to reach the provider."
keywords:
  - ISmsGateway.ProxyDomain
  - SMS gateway proxy server
  - proxy domain name
  - custom SMS gateway
sidebar_position: 40
---

# ISmsGateway.ProxyDomain Property

Gets or sets the domain name or IP address of the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyDomain { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The domain name or IP address of the proxy server.

**Remarks**

If communication with the SMS gateway is through a proxy server, use this property to set the
domain name or IP address of that proxy server.

**See Also**

- [Implement and Deploy a Custom SMS Gateway in Directory Manager](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
