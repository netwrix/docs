---
title: "ISmsGateway.ProxyDomain"
description: "ISmsGateway.ProxyDomain"
sidebar_position: 40
---

# ISmsGateway.ProxyDomain

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

If communication with the SMS gateway is through a proxy server, this property can be used to set
the domain name or IP address of that proxy server.