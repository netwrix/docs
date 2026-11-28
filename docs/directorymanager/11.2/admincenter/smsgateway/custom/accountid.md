---
title: "ISmsGateway.AccountId Property"
description: "Get or set the account ID that a custom SMS gateway uses to connect to the gateway provider."
keywords:
  - ISmsGateway.AccountId
  - custom SMS gateway
  - Imanami.PublicInterfaces
  - SMS gateway account ID
sidebar_position: 10
---

# ISmsGateway.AccountId Property

Gets or sets the account ID for connecting with the SMS gateway.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string AccountId { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The value of the account ID.

**Remarks**

Not every SMS gateway requires an account ID. If yours does, use this property to get or set its value. The property can also hold any other identification number that a gateway needs to authenticate a connection.
