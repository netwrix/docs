---
title: "Character (Granular) Rules"
description: "Character (Granular) Rules"
sidebar_position: 30
---

# Character (Granular) Rules

Password Policy Enforcer has seven Character rules that reject passwords if they contain, or do not
contain certain characters. These rules can increase password strength or ensure password
compatibility with other systems.

All the Character rules work identically, but each has their own default character set. A character
set is the collection of characters that each rule searches for when checking a password. You can
use the Character rules with their default character sets, or define your own. By default, the
Password Policy Enforcer selects the Password Policy Enforcer character on the Set Priorities page.

- Enable the **Characters (Granular)** button to enable the Characters rule.
- Character First – Select character rule(s) for the first character of password

    - Select the **Begin** option if this rule should ensure that first character of password should
      start with the certain characters of the selected rule(s).
    - Select **Not Begin** option if this rule should ensure that the first character of password
      should not start with the certain characters of the selected rule(s).

- Character Last – Select character rule(s) for the last character password

    - Select the **End** option if this rule should ensure that the last character of password
      should end with the certain characters of the selected rule(s).
    - Select the **Not End** option if this rule should ensure that the last chracter of password
      should not end the certain character of the selected rule(s).

- Characters (Alpha Lower), Characters (Alpha Upper), Character (Alpha), Character (Custom),
  Characters (High), Characters (Numeric), character (Special)

    For each selected character rule, select whether they **Contain** or **Not contain** the
    specified number of characters.

    - Select the **contain** option if this rule should ensure that new passwords contain certain
      characters. Only one character is required by default, but you can specify a different value
      by choosing the required number of characters from the drop-down list beside the **contain**
      option.
    - Select the **not contain any...** option if this rule should ensure that new passwords do not
      contain certain characters.

    You can further restrict the rule by defining positions or embedding characters. Click the +
    sign by the character set.

    - Select **In position**

        If you want to restrict this rule to certain character positions, choose the starting
        position from the first entry box and the ending position from the second entry box. For
        example, you may want to enforce a rule that requires a numeric character in the second
        character position to maintain compatibility with some other system.

    - Select **Embedded**

        Select the **Embedded** check box if users are required to embed these characters within
        their passwords. For example, the passwords "12hello", "1hello", and "hello$987" do not
        contain any embedded numeric characters, but these passwords do contain embedded numeric
        characters (shown in bold type): "he**7**llo", "4he**3**llo", "23hello**7**$45". Embedded
        numeric and special characters can help to protect passwords from cracking attacks.

### Enforcing Complex Character Requirements

Character rules can be combined to enforce complex password requirements. For example, you may need
to enforce a policy such as "passwords must contain a numeric character, but not in the first two
positions" to ensure compatibility with some other system.

This is done by using two of the Character rules:

Set **Characters (Complexity)** to require 1 Numeric character.

Set **Characters (Granular)** to not contain numeric values in the first two positions.
