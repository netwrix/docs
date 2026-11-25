---
title: "ISmsGateway.ProxyHostName Property"
description: "Get or set the host name of the proxy server that a custom SMS gateway uses to reach the provider."
keywords:
  - ISmsGateway.ProxyHostName
  - SMS gateway proxy host name
  - proxy server host name
  - custom SMS gateway
sidebar_position: 50
---

# ISmsGateway.ProxyHostName Property

Gets or sets the host name of the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyHostName { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The host name of the proxy server.

**Remarks**

If communication with the SMS gateway is through a proxy server, you can use this property to
provide the host name of the proxy server.