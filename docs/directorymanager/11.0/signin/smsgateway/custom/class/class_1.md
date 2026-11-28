---
title: "SendSmsMessageResult class"
description: "Check the SendSmsMessageResult class, which returns the delivery status and any exception from sending an SMS message in GroupID."
keywords:
  - SendSmsMessageResult class
  - SMS delivery status
  - custom SMS gateway
  - SMS exception message
sidebar_position: 160
---

# SendSmsMessageResult class

Returns the message delivery status (success or failure) and exceptions, if any, that occur while
sending the text message to the target mobile phone numbers.

The following list shows its members:

- [SendSmsMessageResult.ExceptionMessage](/docs/directorymanager/11.0/signin/smsgateway/custom/class/exceptionmessage.md)
- [SendSmsMessageResult.Message property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/message_1.md)
- [SendSmsMessageResult.Success property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/success.md)

| Member                    | Description                                                                                                                                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ExceptionMessage property | Gets the exception message if one occurs while sending the text message.                                                                                                                                                                                                          |
| Message property          | Returns the [ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md) object processed by the [ISmsGateway.SendShortMessage](/docs/directorymanager/11.0/signin/smsgateway/custom/sendshortmessage.md) method. |
| Success property          | Returns a Boolean value that indicates whether the text message is sent successfully to the target mobile phone numbers.                                                                                                                                                              |

**See Also**

- [ISMSGateway Members for Custom SMS Gateways](/docs/directorymanager/11.0/signin/smsgateway/custom/overview.md)
