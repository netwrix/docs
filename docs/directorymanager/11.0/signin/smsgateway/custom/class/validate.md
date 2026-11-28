---
title: "ShortMessage.Validate Method (SMS Gateway API)"
description: "Check that a GroupID text message has a valid length and valid recipient phone numbers before a custom SMS gateway sends it."
keywords:
  - ShortMessage.Validate
  - SMS message validation
  - custom SMS gateway
  - GroupID SMS API
sidebar_position: 60
---

# ShortMessage.Validate Method (SMS Gateway API)

The Validate method checks that:

- The message length isn't zero.
- The message length isn't greater than the value of the MaxLength property.
- Phone numbers are provided in the PhoneNumbers property.
- Each phone number is valid.

**Namespace:** Imanami.GroupID.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.GroupID.DataTransferObjects.dll

**Syntax**

```
public bool Validate(IValidationDictionary validationDictionary)
```

**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if all validation checks are passed.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md)
