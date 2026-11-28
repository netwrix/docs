---
title: "ISmsGateway.ProxyPort"
description: "Get or set the port number that the proxy server uses for communication with a custom SMS gateway."
keywords:
  - ISmsGateway.ProxyPort
  - SMS gateway proxy port
  - custom SMS gateway
  - Imanami.PublicInterfaces
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
the port number that the proxy server uses.

**See Also**

- [Implement and Deploy a Custom SMS Gateway in GroupID](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
