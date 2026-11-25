---
title: "ShortMessage class"
description: "Review the ShortMessage DTO class, which defines the elements of an SMS text message, and its properties and methods."
keywords:
  - ShortMessage class
  - SMS message DTO
  - custom SMS gateway
  - Data Transfer Object
sidebar_position: 150
---

# ShortMessage class

This DTO (Data Transfer Object) class defines the elements of the text message.

The following list shows its members:

- [ShortMessage.AccessCode Property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/accesscode.md)
- [ShortMessage.MaxLength field](/docs/directorymanager/11.0/signin/smsgateway/custom/class/maxlength.md)
- [ShortMessage.Message property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/message.md)
- [ShortMessage.PhoneNumbers Property (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/phonenumbers.md)
- [ShortMessage.ReferenceId Property (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/referenceid.md)
- [ShortMessage.Validate Method (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/validate.md)

| Member                                                                                                                                | Description                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [ShortMessage.AccessCode Property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/accesscode.md) property     | Gets or sets the confirmation code that is sent to registered mobile phone users.                                        |
| [ShortMessage.MaxLength field](/docs/directorymanager/11.0/signin/smsgateway/custom/class/maxlength.md) property       | Defines the maximum length of an SMS message.                                                                                 |
| [ShortMessage.Message property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/message.md)         | Gets or sets the supporting message text that is sent to registered mobile phone users along with the confirmation code. |
| [ShortMessage.PhoneNumbers Property (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/phonenumbers.md) property | Gets or sets the list of phone numbers to send the message to.                                                                |
| [ShortMessage.ReferenceId Property (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/referenceid.md) property   | Gets or sets the reference ID for the text message.                                                                           |
| [ShortMessage.Validate Method (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/validate.md) method           | Validates various elements in an SMS message, such as message length and phone number.                                        |

**See Also**

- [ISMSGateway Members for Custom SMS Gateways](/docs/directorymanager/11.0/signin/smsgateway/custom/overview.md)
