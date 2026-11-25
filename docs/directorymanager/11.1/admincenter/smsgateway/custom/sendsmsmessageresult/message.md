---
title: "SendSmsMessageResult.Message property"
description: "Get the ShortMessage object that the SendShortMessage method processed when you implement a custom SMS gateway in Directory Manager."
keywords:
  - SendSmsMessageResult.Message
  - custom SMS gateway
  - ShortMessage object
  - Directory Manager SMS API
sidebar_position: 20
---

# SendSmsMessageResult.Message property

Returns the [ShortMessage class](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendsmsmessageresult/class.md) object processed by the
[ISmsGateway.SendShortMessage](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendshortmessage.md) method.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public ShortMessage Message;
```

**Return Value**

Type: Imanami.directorymanager.DataTransferObjects.DataContracts.SMS.ShortMessage

Object containing elements of the text message.