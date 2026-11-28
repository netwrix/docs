---
title: "SendSmsMessageResult class for custom SMS gateways"
description: "Review the members of the SendSmsMessageResult class, which returns message delivery status and exceptions for a custom SMS gateway in Directory Manager."
keywords:
  - SendSmsMessageResult class
  - custom SMS gateway
  - SMS delivery status
  - Directory Manager SMS API
sidebar_position: 160
---

# SendSmsMessageResult class for custom SMS gateways

The class returns the message delivery status (success or failure) and any exceptions that occur while Directory Manager sends the text message to the target mobile phone numbers.

The class has the following members:

- [SendSmsMessageResult.ExceptionMessage](/docs/directorymanager/11.2/admincenter/smsgateway/custom/sendsmsmessageresult/exceptionmessage.md)
- [SendSmsMessageResult.Message property](/docs/directorymanager/11.2/admincenter/smsgateway/custom/sendsmsmessageresult/message.md)
- [SendSmsMessageResult.Success property](/docs/directorymanager/11.2/admincenter/smsgateway/custom/sendsmsmessageresult/success.md)

| Member                    | Description                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ExceptionMessage property | Gets the exception message if one occurs while sending the text message.                                                                          |
| Message property          | Returns the [ShortMessage class](/docs/directorymanager/11.2/admincenter/smsgateway/custom/sendsmsmessageresult/class.md) object processed by the [ISmsGateway.SendShortMessage](/docs/directorymanager/11.2/admincenter/smsgateway/custom/sendshortmessage.md) method. |
| Success property          | Returns a Boolean value indicating whether the text message was sent successfully to the target mobile phone numbers.                              |