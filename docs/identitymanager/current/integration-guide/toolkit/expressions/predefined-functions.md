---
title: "Predefined functions"
description: "Predefined functions"
sidebar_position: 20
---

# Predefined functions

Identity Manager provides a set of predefined functions that simplify the configuration of entity property expressions and scalar rules. See the [Entity Type](../../../integration-guide/toolkit/xml-configuration/metadata/entitytype.md) and[Resource Type](../../../integration-guide/toolkit/xml-configuration/provisioning/resourcetype.md) topics for additional information.

Unlike C# expressions, Identity Manager's predefined functions do not need any prefix. They can be used as such. See the [C# utility functions](../../../integration-guide/toolkit/expressions/csharp-utility-functions.md) topic for additional information.

### Examples

The following example shows two predefined functions. The first function normalizes the HR_Person FirstName. The other one converts the end date into a UTC date and adds 1440 minutes.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
        <ScalarRule Property="CFirstName" Binding="HR_Person:FirstName" Expression="Simplify" Policy="Default" />
        <ScalarRule Property="CEndDate" Binding="HR_Person:EndDate" Expression="ParseLocalDateThenAddMinutes:Romance Standard Time|dd/MM/yyyy|1440" Policy="Default" />
```

The following table summarizes existing predefined functions:

 | Name | Description | Parameters | Return type | 
 | --- | --- | --- | --- | 
 | ToUpper | Returns the input string converted to uppercase, using the current culture. | None | String | 
 | ToLower | Returns the input string converted to lowercase, using the current culture. | None | String | 
 | Simplify | Returns the input string converted to uppercase, removing all whitespace and special characters, and replacing diacritics. | None | String | 
 | Trim | Removes all leading and trailing white-space characters from the current string. | None | String | 
 | TrimStart | Removes all leading white-space characters from the current string. | None | String | 
 | TrimEnd | Removes all trailing white-space characters from the current string. | None | String | 
| RemoveDiacritics | Replaces accented characters with ASCII equivalents: é/è/ê → e, ç → c, à → a, ù → u, ä → ae, Ä → AE, ö → oe, Ö → OE, ü → ue, Ü → UE, č → c, Č → C, ø → o, Ø → O, ł → l, Ł → L, ß → ss, æ → ae, Æ → AE, œ → oe, Œ → OE, š → sh, Š → SH. | None | String |
 | ToDoubleMetaphone | An implementation of Double Metaphone phonetic algorithm. | None | String | 
 | ToSoundex | An implementation of Soundex phonetic algorithm. | None | String | 
 | ToFirstName | Normalizes a first name (first character of each word in uppercase) separated with space, hyphen, or apostrophe and the right accents. | None | String | 
 | ToTitle | Puts the first character in uppercase. | None | String | 
 | ToFormatedDN | Returns the input string converted to Distinguished Name format. | None | String | 
 | ParseLocalDate | Converts the specified string representation of a date and time to its DateTime equivalent using the specified parameters. | Time zone identifier | Input string format. | DateTime | 
 | ParseLocalDateThenAddMinutes | Converts the input string into a DateTime and adds minutes value. | Time zone identifier | Input string format | Added minutes. | DateTime | 
 | ParseUniversalDate | Converts the specified string representation of a date and time to its Coordinated Universal Time (UTC). | Input string format. | DateTime | 
 | ParseUniversalDateThenAddMinutes | Converts the input string into an UTC DateTime and adds minutes value. | Time zone identifier | Input string format | Added minutes. | DateTime | 
 | FormatLocalDate | Converts the specified string into a local DateTime. | Time zone identifier | Input string format. | DateTime | 

