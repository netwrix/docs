---
title: "ShortMessage.MaxLength"
description: "ShortMessage.MaxLength"
sidebar_position: 20
---

# ShortMessage.MaxLength

Defines the maximum length of an SMS message.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public int MaxLength = 160
```

**Return Value**

Type: [System.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32?view=net-8.0)

The maximum length.

**Remarks**

This property stores the maximum length of an SMS message. If you send a message more than this
length, the message is split in two or more pieces and the user is charged for each piece. Most, if
not all, gateways will automatically split the message. You can increase this limit but it may cost
more from the gateway.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md)
