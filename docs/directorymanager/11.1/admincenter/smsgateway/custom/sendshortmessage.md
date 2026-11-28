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

The object that defines the message elements, including the target mobile phone numbers.

**Return Value**

Type: Imanami.GroupID.DataTransferObjects.DataContracts.SMS.SendSmsMessageResult

The object that contains the message delivery status and exception details.