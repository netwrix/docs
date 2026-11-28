---
title: "ISmsGateway.SendShortMessage"
description: "Send a text message to target mobile phone numbers through a custom SMS gateway and get back the delivery status."
keywords:
  - ISmsGateway.SendShortMessage
  - send SMS message
  - custom SMS gateway
  - SendSmsMessageResult
  - ShortMessage
sidebar_position: 90
---

# ISmsGateway.SendShortMessage

Sends text messages to the target mobile phone numbers.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
SendSmsMessageResult SendShortMessage(ShortMessage shortMessage);
```

**Parameters**

**ShortMessage**

Type: Imanami.GroupID.DataTransferObjects.DataContracts.SMS.ShortMessage

The object defining the message elements including the target mobile phone numbers.

**Return Value**

Type: Imanami.GroupID.DataTransferObjects.DataContracts.SMS.SendSmsMessageResult

The object containing the message delivery status and exception details.

**See Also**

- [ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md)
- [SendSmsMessageResult class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class_1.md)
- [Implement and Deploy a Custom SMS Gateway in GroupID](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
