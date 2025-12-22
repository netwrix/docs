---
title: "ISmsGateway.ProxyHostName"
description: "ISmsGateway.ProxyHostName"
sidebar_position: 50
---

# ISmsGateway.ProxyHostName

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

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
