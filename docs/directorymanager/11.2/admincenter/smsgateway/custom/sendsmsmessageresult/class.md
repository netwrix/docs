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

- [ShortMessage.AccessCode property](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/accsscode.md)
- [ShortMessage.MaxLength field](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/maxlength.md)
- [ShortMessage.Message property](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/message.md)
- [ShortMessage.PhoneNumbers Property (SMS Gateway API)](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/phonenumbers.md)
- [ShortMessage.ReferenceId Property (SMS Gateway API)](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/referenceid.md)
- [ShortMessage.Validate Method (SMS Gateway API)](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/validate.md)

| Member                                                | Description                                                                                                                   |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [ShortMessage.AccessCode property](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/accsscode.md)     | Gets or sets the confirmation code that is sent to registered mobile phone users.                                            |
| [ShortMessage.MaxLength field](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/maxlength.md)       | Defines the maximum length of an SMS message.                                                                                 |
| [ShortMessage.Message property](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/message.md)           | Gets or sets the supporting message text that is sent to registered mobile phone users along with the confirmation code. |
| [ShortMessage.PhoneNumbers Property (SMS Gateway API)](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/phonenumbers.md) | Gets or sets the list of phone numbers to send the message to.                                                                |
| [ShortMessage.ReferenceId Property (SMS Gateway API)](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/referenceid.md)   | Gets or sets the reference ID for the text message.                                                                           |
| [ShortMessage.Validate Method (SMS Gateway API)](/docs/directorymanager/11.2/admincenter/smsgateway/custom/shortmessage/validate.md) method           | Validates various elements in an SMS message, such as message length and phone number.                                        |