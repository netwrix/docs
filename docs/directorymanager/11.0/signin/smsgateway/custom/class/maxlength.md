---
title: "ShortMessage.MaxLength field"
description: "Find the maximum length of an SMS message for a custom SMS gateway in GroupID and learn what happens when a message exceeds it."
keywords:
  - ShortMessage.MaxLength
  - SMS message length
  - custom SMS gateway
  - GroupID SMS API
sidebar_position: 20
---

# ShortMessage.MaxLength field

Defines the maximum length of an SMS message.

**Namespace:** Imanami.GroupID.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.GroupID.DataTransferObjects.dll

**Syntax**

```
public int MaxLength = 160
```

**Return Value**

Type: [System.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32?view=net-8.0)

The maximum length.

**Remarks**

This property stores the maximum length of an SMS message. If you send a message longer than this
limit, the message is split into two or more pieces and the user is charged for each piece. Most
gateways, if not all, automatically split the message. You can increase this limit, but the gateway
might charge more.

**See Also**

- [ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md)
