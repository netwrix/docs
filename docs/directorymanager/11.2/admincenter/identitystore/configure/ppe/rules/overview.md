---
title: "Set Up Password Policy Rules in Directory Manager"
description: "Review the Password Policy Enforcer rules available for a policy, and learn how character substitution detection and tolerance work."
keywords:
  - Password Policy Enforcer rules
  - character substitution
  - tolerance
  - password policy
  - Auto tolerance
sidebar_position: 10
---

# Set Up Password Policy Rules in Directory Manager

Netwrix Password Policy Enforcer uses rules to decide whether to accept or reject a password. Each policy has rules that are configured independently of the rules in other policies.

Before you set up the rules for a policy, review the Detecting character substitution and Tolerance sections on this page.

To set up the rules for a policy:

1. Open the Rules tab. It opens by default and lists the following rules in the left pane.

    - [Configure the Age (Max) Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/maximum_age_rule.md)
    - [Configure the Age (Min) Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/minimum_age_rule.md)
    - [Configure the Characters (Complexity) Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/complexityrule.md)
    - [Configure Character (Granular) Rules in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/characterrules.md)
    - [Configure the Compromised Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/compromisedrule.md)
    - [Configure the Dictionary Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/dictionaryrule.md)
    - [Configure the History Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/historyrule.md)
    - [Configure the Length Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/lengthrule.md)
    - [Configure the Patterns Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/patternsrule.md)
    - [Repetition Rule for Password Policy Enforcer](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/repetitionrule.md)
    - [Similarity Rule for Password Policy Enforcer](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/similarityrule.md)
    - [Unique Characters Rule for Password Policy Enforcer](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/uniquecharacters.md)


    A button beside a rule indicates whether the rule is enabled (enforced).

2. Click a rule to set its properties, and save it.

## Detecting character substitution

Character substitution is a technique used by some users to improve password quality. They replace
some alphabetic characters with non-alphabetic characters that have a similar appearance. For
example, "sold" becomes "$old". Many of these substitutions are well known and do little to improve
password strength.

Some Password Policy Enforcer rules have a Detect Character Substitution checkbox. When you select this
checkbox, Password Policy Enforcer tests passwords with and without character substitution.
This stops users from circumventing the rule by substituting some characters. Password Policy
Enforcer detects these common character substitutions:

<!-- vale Netwrix.FirstPerson = NO -->
 <table>
            <thead>
                <tr>
                    <th colspan="2">
                       Original
                    </th>
                    <th>
                        Substituted
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    A
                    </td>
                    <td>
                        a
                    </td>
                    <td>
                        ^ @
                    </td>
                </tr>
                <tr>
                    <td>
                        B
                    </td>
                    <td>
                        b
                    </td>
                    <td>
                        8
                    </td>
                </tr>
                <tr>
                    <td>
                        C
                    </td>
                    <td>
                        c
                    </td>
                    <td>
                        <table>
                           <tbody>
                                <tr>
                                    <td>
                                      ( or &lbrace;
                                    </td>
                                    <td>&lt;</td>
                                    <td>[</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        D
                    </td>
                    <td>
                        d
                    </td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        ) or }
                                    </td>
                                    <td>&gt;</td>
                                    <td>]</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        E
                    </td>
                    <td>
                        e
                    </td>
                    <td>
                        3
                    </td>
                </tr>
                <tr>
                    <td>
                        G
                    </td>
                    <td>
                        g
                    </td>
                    <td>
                        6 or 9
                    </td>
                </tr>
                <tr>
                    <td>
                        I
                    </td>
                    <td>
                        i
                    </td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        ! or |
                                    </td>
                                    <td>&#160; 1</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        O
                    </td>
                    <td>
                        o
                    </td>
                    <td>
                        0 (zero)
                    </td>
                </tr>
                <tr>
                    <td>
                        S
                    </td>
                    <td>
                        s
                    </td>
                    <td>
                        <p>$ or 5</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        T
                    </td>
                    <td>
                        t
                    </td>
                    <td>
                        + or 7
                    </td>
                </tr>
                <tr>
                    <td>
                        Z
                    </td>
                    <td>
                        z
                    </td>
                    <td>
                        2
                    </td>
                </tr>
            </tbody>
        </table>
<!-- vale Netwrix.FirstPerson = YES -->

## Tolerance

Some Password Policy Enforcer rules have a Tolerance dropdown list to control how
strictly the rule is enforced. Tolerance is normally expressed as the maximum allowable number of
consecutive matching characters in the password and some other parameter. Password Policy Enforcer
rejects a password if the specified tolerance is exceeded. For example, the logon name
"mary**jones**", and the password "**Jones**town" contain five consecutive matching characters
(shown in bold type). Password Policy Enforcer rejects this password if the tolerance for the
User Logon Name rule is four (or lower), and accepts it if the tolerance is five (or higher).

The User Logon Name, User Display Name, Similarity, and Character Pattern rules have an Auto
tolerance option. Setting the tolerance to Auto instructs Password Policy Enforcer to only reject
passwords that contain the entire parameter being compared. This is very useful when the length of
the comparison parameter is unknown. For example, if you want Password Policy Enforcer to reject
passwords that contain the user's entire logon name, then you can't specify a fixed tolerance
unless all logon names have the same length. Setting the tolerance to Auto allows Password Policy
Enforcer to calculate an appropriate tolerance during every password change.

Password Policy Enforcer sets the tolerance to the length of the comparison parameter minus one. The
following table shows some parameter values and the calculated tolerance. Password Policy Enforcer
rejects a password if it contains all the text in the Value column (or a derivative of it if
character substitution detection or bi-directional analysis is enabled).

| Rule              | Parameter         | Value      | Tolerance |
| ----------------- | ----------------- | ---------- | --------- |
| User Logon Name   | Logon name        | maryjones  | 8         |
| User Display Name | Display name      | Mary Jones | 9         |
| Similarity        | Current password  | oldpass    | 6         |
| Character Pattern | Character pattern | abcdefgh   | 7         |

The Auto tolerance calculation in Password Policy Enforcer has a minimum limit to stop passwords from
being rejected when the comparison parameter is very short. The limit is set to two characters by
default, so Password Policy Enforcer accepts passwords that contain the parameter value if the
comparison parameter only contains one or two characters. Contact Netwrix support if you need to
change the minimum limit.
