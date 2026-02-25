---
title: "Usercube-PasswordGenerator"
description: "Usercube-PasswordGenerator"
sidebar_position: 280
---

# Usercube-PasswordGenerator

## Example

### Manually generate a password

Consider an external system that is fulfilled manually and requires a new password.

To avoid writing the password in any file while still choosing a cryptographically secure password, we generate it just before using it.

`--auto-generate true --digit-chars 2 --lower-case-chars 6 --symbol-chars 2 --upper-case-chars 2`

## Arguments

 | Argument Name | Details | 
 | --- | --- | 
 | --default-password required if auto-generate is false | **Type** String **Description** Specifies the default password used when `--auto-generate` is false. **Example** Set default password to password: `--default-password password`. | 
 | --auto-generate default value: false | **Type** No Value **Description** Specifies if the password should be the default password or generated automatically. **Example** Use default password: `--auto-generate false`. | 
 | --digit-chars default value: 0 | **Type** Integer **Description** Specifies the number of digits in the generated password. If the value is strictly positive, additional digits may be generated if `--generated-length` is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`. **Example** Generate a password with 2 digits: `--digit-chars 2`. | 
 | --generated-length default value: 0 | **Type** Integer **Description** Specifies the length of the generated password. If it is lower than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`, the length of the generated password is equal to the sum. If it is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`, extra characters of any type will be generated. **Example** Set a password length of 12: `--generated-length 12`. | 
 | --lower-case-chars default value: 0 | **Type** Integer **Description** Specifies the number of lower case characters in the generated password. If the value is strictly positive, additional lower case characters may be generated if `--generated-length` is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`. If the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars` is 0, only lower case characters will be generated. **Example** Generate a password with 6 lower case characters: `--lower-case-chars 6`. | 
 | --strength-check default value: "^.\*" | **Type** String **Description** The regular expression to check the password strength. By default, any password passes the strength check. **Example** Accept any password: `--strength-check ^.*`. | 
 | --symbol-chars default value: 0 | **Type** Integer **Description** Specifies the number of symbols in the generated password. If the value is strictly positive, additional symbols may be generated if `--generated-length` is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`. **Example** Generate a password with 2 symbols: `--symbol-chars 2`. | 
 | --upper-case-chars default value: 0 | **Type** Integer **Description** Specifies the number of upper case characters in the generated password. If the value is strictly positive, additional upper case characters may be generated if `--generated-length` is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`. **Example** Generate a password with 2 upper case characters: `--upper-case-chars 2`. | 
