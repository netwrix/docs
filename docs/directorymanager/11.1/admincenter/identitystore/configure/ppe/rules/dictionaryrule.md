---
title: "Configure the Dictionary Rule in Directory Manager"
description: "Reject guessable passwords by configuring the Password Policy Enforcer Dictionary rule, including dictionary files, substitution, and wildcard analysis."
keywords:
  - Dictionary rule
  - Password Policy Enforcer
  - wildcard analysis
  - dictionary file
  - password tolerance
sidebar_position: 60
---

# Configure the Dictionary Rule in Directory Manager

The Dictionary rule rejects passwords that are vulnerable to guessing, hybrid, and precomputed attacks. These attacks can crack weak passwords in seconds, and they are very effective against passwords based on common words.

Each password policy has two Dictionary rules. You can use the second rule with a different dictionary file. You can also use it to enforce a more tolerant policy for passphrases by disabling the primary rule for long passwords.

To configure the Dictionary rule:

1. Enable the **Dictionary** button to turn on the Dictionary rule.

   The Dictionary file box displays the name **Dict.txt** of a sample file. It is installed in the **\Program Files\Password Policy Enforcer** folder. This file is sorted and ready to use. It contains approximately 257,000 words, names, and acronyms.

2. To add a secondary dictionary, click **+ Add Dictionary**.

3. **Enter** the path of the secondary dictionary file in the Secondary dictionary box.

4. Set the following options for both dictionaries:

   - Select the **Detect inclusion of non-alpha characters** checkbox if Password Policy Enforcer should remove all non-alphabetic characters during analysis. This lets Password Policy Enforcer reject passwords such as "myp8asswor8d."
   - Select the **Detect character substitution** checkbox if Password Policy Enforcer should reject passwords that rely on character substitution to comply with this rule.
   - Select the **Bi-directional analysis** checkbox if Password Policy Enforcer should also test passwords with their characters reversed. Bi-directional analysis stops users from circumventing this rule by reversing the order of characters in their password. For example, a user might enter "drowssapym" instead of "mypassword".
   - Select the **Wildcard analysis** checkbox if Password Policy Enforcer should search for wildcard templates in the dictionary file. Wildcard templates are specially formatted dictionary words that Password Policy Enforcer uses to reject a range of passwords. The Dictionary rule supports two wildcard template formats:

     | Format | Example | Description |
     | ------ | ------- | ----------- |
     | Prefix | `!!BAN*!!` | Rejects passwords that start with BAN. For example: band, banish, ban, bank, and so on. |
     | Prefix | `!!2*!!` | Rejects passwords that start with the numeric character 2. For example: 2ABC, 2123, and so on. |
     | Suffix | `!!*ING!!` | Rejects passwords that end with ING. For example: pushing, howling, trying, and so on. |

     Partial matching is performed even if Wildcard analysis is disabled. For example, the dictionary word "password" rejects the passwords "My**Password**$", "**Password**100", and "12**password**34" even if Wildcard analysis is disabled.

     Use Wildcard analysis only to limit matching to the characters at the start or end of a password.

     Wildcard analysis slightly increases search times, so enable this option only if the dictionary file contains wildcard templates. The sample dictionary file included with Password Policy Enforcer doesn't contain any wildcard templates.

   - Choose a value from the Tolerance dropdown list to set the maximum number of consecutive matching characters that Password Policy Enforcer tolerates before rejecting a password. For example, the dictionary word "**sword**" and the password "4my**sword**%" contain five consecutive matching characters (shown in bold type). Password Policy Enforcer rejects this password if the tolerance is four (or lower). It accepts the password if the tolerance is five (or higher).
