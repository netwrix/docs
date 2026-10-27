---
title: "ISmsGateway.SendShortMessage"
description: "ISmsGateway.SendShortMessage"
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

Type: Imanami.directorymanager.DataTransferObjects.DataContracts.SMS.ShortMessage

The object defining the message elements including the target mobile phone numbers.

**Return Value**

Type: Imanami.directorymanager.DataTransferObjects.DataContracts.SMS.SendSmsMessageResult

The object containing the message delivery status and exception details.