---
title: "ISmsGateway.AccountId"
description: "ISmsGateway.AccountId"
sidebar_position: 10
---

# ISmsGateway.AccountId

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

The account ID may not be required for every SMS gateway. If required, use this property to get or
set its respective value. This property can also contain any other identification number that a
gateway needs for authenticating a connection.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
