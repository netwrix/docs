# ISmsGateway.SendShortMessage

Sends text messages to the target mobile phone numbers.

__Namespace:__ Imanami.PublicInterfaces

__Assembly:__ Imanami.PublicInterfaces.dll

__Syntax__

```
SendSmsMessageResult SendShortMessage(ShortMessage shortMessage);
```

Parameters

__ShortMessage__

Type: Imanami.GroupID.DataTransferObjects.DataContracts.SMS.ShortMessage

The object defining the message elements including the target mobile phone numbers.

__Return Value__

Type: Imanami.GroupID.DataTransferObjects.DataContracts.SMS.SendSmsMessageResult

The object containing the message delivery status and exception details.

See Also

- [ShortMessage class](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/shortmessage/class.md)
- [SendSmsMessageResult class](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/sendsmsmessageresult/class.md)
- [Implement and Deploy a Custom SMS Gateway](/docs/product_docs/groupid/groupid/admincenter/smsgateway/implementcustom.md)
