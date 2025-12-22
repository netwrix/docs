---
title: "SendSmsMessageResult class"
description: "SendSmsMessageResult class"
sidebar_position: 160
---

# SendSmsMessageResult class

Returns the message delivery status (success or failure) and exceptions (if any) that occur while
sending the text message to the target mobile phone numbers.

Following is a list of its members with description:

- [SendSmsMessageResult.ExceptionMessage](/docs/directorymanager/11.0/signin/smsgateway/custom/class/exceptionmessage.md)
- [SendSmsMessageResult.Message](/docs/directorymanager/11.0/signin/smsgateway/custom/class/message_1.md)
- [SendSmsMessageResult.Success](/docs/directorymanager/11.0/signin/smsgateway/custom/class/success.md)

| Member                    | Description                                                                                                                                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ExceptionMessage property | Gets the exception message if one occurs while sending the text message.                                                                                                                                                                                                          |
| Message property          | Returns the [ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md) object processed by the [ISmsGateway.SendShortMessage](/docs/directorymanager/11.0/signin/smsgateway/custom/sendshortmessage.md) method. |
| Success property          | Returns a boolean value indicating whether the text message is successfully sent to the target mobile phone numbers.                                                                                                                                                              |

**See Also**

- [ISMSGateway Members](/docs/directorymanager/11.0/signin/smsgateway/custom/overview.md)
