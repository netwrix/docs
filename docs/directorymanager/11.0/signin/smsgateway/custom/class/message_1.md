---
title: "SendSmsMessageResult.Message property"
description: "Get the ShortMessage object that the SendShortMessage method of a custom SMS gateway processed in GroupID."
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

**Namespace:** Imanami.GroupID.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.GroupID.DataTransferObjects.dll

**Syntax**

```
public ShortMessage Message;
```

**Return Value**

Type: Imanami.GroupID.DataTransferObjects.DataContracts.SMS.ShortMessage

Object containing elements of the text message.

**See Also**

- [SendSmsMessageResult class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class_1.md)
- [ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md)
- [Implement and Deploy a Custom SMS Gateway in GroupID](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
