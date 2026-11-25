---
title: "SendSmsMessageResult.Message property"
description: "Get the ShortMessage object that the SendShortMessage method of a custom SMS gateway processed in Directory Manager."
keywords:
  - SendSmsMessageResult.Message
  - ShortMessage object
  - ISmsGateway.SendShortMessage
  - custom SMS gateway
sidebar_position: 20
---

# SendSmsMessageResult.Message property

Returns the
[ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md)
object processed by the
[ISmsGateway.SendShortMessage](/docs/directorymanager/11.0/signin/smsgateway/custom/sendshortmessage.md)
method.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public ShortMessage Message;
```

**Return Value**

Type: Imanami.directorymanager.DataTransferObjects.DataContracts.SMS.ShortMessage

Object containing elements of the text message.

**See Also**

- [SendSmsMessageResult class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class_1.md)
- [ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md)
- [Implement and Deploy a Custom SMS Gateway in Directory Manager](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
