---
title: "Predefined functions"
description: "Predefined functions"
sidebar_position: 20
---

# Predefined functions

Usercube provides a set of predefined functions that simplify the configuration of entity property
expressions and scalar rules. See the
[EntityType](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
and
[Resource Type](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md)
topics for additional information.

Unlike C# expressions, Usercube's predefined functions do not need any prefix. They can be used as
such. See the
[C# utility functions](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/csharp-utility-functions/index.md)
topic for additional information.

### Examples

The following example shows two predefined functions. The first function normalizes the HR_Person
FirstName. The other one converts the end date into a UTC date and adds 1440 minutes.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

    <ScalarRule Property="CFirstName" Binding="HR_Person:FirstName" Expression="Simplify" Policy="Default" />
    <ScalarRule Property="CEndDate" Binding="HR_Person:EndDate" Expression="ParseLocalDateThenAddMinutes:Romance Standard Time|dd/MM/yyyy|1440" Policy="Default" />

```

The following table summarizes existing predefined functions:

| Name                             | Description                                                                                                                                                                                               | Parameters           | Return type          |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- | -------------- | -------- |
| ToUpper                          | Returns the input string converted to uppercase, using the current culture.                                                                                                                               | None                 | String               |
| ToLower                          | Returns the input string converted to lowercase, using the current culture.                                                                                                                               | None                 | String               |
| Simplify                         | Returns the input string converted to uppercase, removing all whitespace and special characters, and replacing diacritics.                                                                                | None                 | String               |
| RemoveDiacritics                 | Replaces all the éèçàù by eecau, ä by ae, Ä by AE, ö by oe, Ö by OE, ü by ue, Ü by UE, č by c, Č by C, ø by o, Ø by O, ł by l, Ł by L, ß by ss, æ by ae, Æ by AE, œ by oe, Œ by OE, š by sh, and Š by SH. | None                 | String               |
| ToDoubleMetaphone                | An implementation of Double Metaphone phonetic algorithm.                                                                                                                                                 | None                 | String               |
| ToSoundex                        | An implementation of Soundex phonetic algorithm.                                                                                                                                                          | None                 | String               |
| ToFirstName                      | Normalizes a first name (first character of each word in uppercase) separated with ‘-’ and the right accents.                                                                                             | None                 | String               |
| ToTitle                          | Puts the first character in uppercase.                                                                                                                                                                    | None                 | String               |
| ToFormatedDN                     | Returns the input string converted to Distinguished Name format.                                                                                                                                          | None                 | String               |
| ParseLocalDate                   | Converts the specified string representation of a date and time to its DateTime equivalent using the specified parameters.                                                                                | Time zone identifier | Input string format. | DateTime       |
| ParseLocalDateThenAddMinutes     | Converts the input string into a DateTime and adds minutes value.                                                                                                                                         | Time zone identifier | Input string format  | Added minutes. | DateTime |
| ParseUniversalDate               | Converts the specified string representation of a date and time to its Coordinated Universal Time (UTC).                                                                                                  | Input string format. | DateTime             |
| ParseUniversalDateThenAddMinutes | Converts the input string into an UTC DateTime and adds minutes value.                                                                                                                                    | Time zone identifier | Input string format  | Added minutes. | DateTime |
| FormatLocalDate                  | Converts the specified string into a local DateTime.                                                                                                                                                      | Time zone identifier | Input string format. | DateTime       |
