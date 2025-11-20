---
title: "Password generator"
description: "Password generator"
sidebar_position: 20
---

# Password generator

## What is the password generator?

The complexity of passwords is generally determined by their randomness. In order to be able to rely
100% on the fact that the passwords are randomly generated, an algorithm for generating passwords is
indispensable. The password generator performs this function and is completely integrated into the
software.

![installation_with_parameters_82](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/extras/password_generator/installation_with_parameters_82.webp)

## Opening the password generator

The password generator can be opened in different ways:

- **Main menu/Extras/Password generator:** Here, the password generator is accessed directly.
  Passwords generated in the password generator can be copied to the clipboard.

![Password generator](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/extras/password_generator/installation_with_parameters_83-en.webp)

- **When creating new records:** Once the password field has been selected in the reading pane, the
  password generator can then be directly opened in the “Form field” tab via the ribbon. Passwords
  generated here can be directly entered into the password field for the new record using the
  “Adopt” button. Alternatively: The password generator can also be accessed on the right in the
  password field in the reading pane.

## Functionality

The Character section is used to define the character groups that should form part of the password.
This section can also be used to exclude (special) characters. Once the password length has been
defined, a preview of a password that corresponds to the configured criteria is displayed on the
bottom edge of the password generator. The “shuffle function” can be activated via the icon on the
right next to the password preview. This will generate a new password in accordance with the defined
criteria.

#### Phonetic passwords

This type of password can be recognised by the fact that it is relatively easy to remember (they are
“readable”) but do not have any association to terms found in dictionaries. Only the number of
syllables

and the total length are defined in this case. Options that can be set are how the syllables are
separated and whether to use LeetSpeak.

![installation_with_parameters_84](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/extras/password_generator/installation_with_parameters_84.webp)

Password rule

Already defined[Password rules](/docs/passwordsecure/9.3/configuration/advancedview/mainmenufc/extras/password_rules.md) can be utilised for the
automatic generation of new passwords

## Multigenerator

The multigenerator makes it possible to automatically generate up to 200 passwords. The convention
used for generating these passwords is always the previously defined default. This could be:

- User defined
- Phonetic passwords
- Password rules

The generated passwords are saved in a text file in the local user directory and can be opened
immediately if desired.
