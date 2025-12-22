---
title: "ShortMessage.Validate"
description: "ShortMessage.Validate"
sidebar_position: 60
---

# ShortMessage.Validate

The Validate method validates the following:

- Message length should not be zero.
- Message length should not be greater than what is specified in the MacLength property.
- PhoneNumbers must be provided.
- PhoneNumber should be valid.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public bool Validate(IValidationDictionary validationDictionary)
```

**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if all validation checks are passed.