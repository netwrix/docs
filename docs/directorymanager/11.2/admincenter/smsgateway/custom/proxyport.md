---
title: "ISmsGateway.ProxyPort"
description: "ISmsGateway.ProxyPort"
sidebar_position: 70
---

# ISmsGateway.ProxyPort

Gets or sets the port number used by the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyPort { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The port number.

**Remarks**

If communication with the SMS gateway is through a proxy server, you can use this property to set
the port number the proxy server uses.