---
title: "Rules"
description: "Rules"
sidebar_position: 10
---

# Rules

Netwrix Password Policy Enforcer uses rules to decide if it should accept or reject a password. Each
policy has rules that are configured independently of the rules in other policies. To display the
rules for a policy:

**Step 1 –** Open the Configuration Console:

Click **Start** > **Netwrix Password Policy Enforcer** > **PPE Configuration**
or
Double click the **PPE Configuration** desktop shortcut.

**Step 2 –** Click on a policy name to open the policy configuration page.

The **Rules** tab opens by default. A check mark beside a rule indicates that the rule is enabled
(being enforced). Click a rule to set the rule's properties.

![Enabled rules are checked](/images/passwordpolicyenforcer/11.0/administration/enabledrules.webp)

Review the sections on **Detecting Character Substitution** and **Tolerance** prior to setting up
the rules for your policy.

You can **Save** each rule and use **Test Policy** as you are setting your rules. Turn on **Verbose
logging** on the **Test Policy** window to see which rules you have tested.

Rules:

- [Age (Max) Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/maximum_age_rule.md)
- [Age (Min) Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/minimum_age_rule.md)
- [Characters (Complexity) Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/complexity_rule.md)
- [Character (Granular) Rules](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/character_rules.md)
- [Compromised Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/compromised_rule.md)
- [Dictionary Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/dictionary_rule.md)
- [History Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/history_rule.md)
- [Length Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/length_rule.md)
- [Patterns Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/patterns.md)
- [Repetition Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/repetition.md)
- [Similarity Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/similarity_rule.md)
- [Unique Characters Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/unique_characters.md)

## Detecting Character Substitution

Character substitution is a technique used by some users to improve password quality. They replace
some alphabetic characters with non-alphabetic characters that have a similar appearance. For
example, "sold" becomes "$old". Many of these substitutions are well known and do little to improve
password strength.

Some Password Policy Enforcer rules have a Detect Character Substitution check box. When this check
box is selected, Password Policy Enforcer tests passwords with, and without character substitution.
This stops users from circumventing the rule by substituting some characters. Password Policy
Enforcer detects these common character substitutions:

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
                        0 or (zero)
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


## Tolerance

Some Password Policy Enforcer rules have a Tolerance drop-down list that allows you to control how
strictly the rule is enforced. Tolerance is normally expressed as the maximum allowable number of
consecutive matching characters in the password and some other parameter. Password Policy Enforcer
rejects a password if the specified tolerance is exceeded. For example, the logon name
"mary**jones**", and the password "**Jones**town" contain five consecutive matching characters
(shown in bold type). Password Policy Enforcer will reject this password if the tolerance for the
User Logon Name rule is four (or lower), and accept it if the tolerance is five (or higher).

The User Logon Name, User Display Name, Similarity, and Character Patter rules have an Auto
tolerance option. Setting the tolerance to Auto instructs Password Policy Enforcer to only reject
passwords that contain the entire parameter being compared. This is very useful when the length of
the comparison parameter is unknown. For example, if you want Password Policy Enforcer to reject
passwords that contain the user's entire logon name, then you cannot specify a fixed tolerance
unless all logon names have the same length. Setting the tolerance to Auto allows Password Policy
Enforcer to calculate an appropriate tolerance during every password change.

Password Policy Enforcer sets the tolerance to the length of the comparison parameter minus one. The
table below shows some parameter values and the calculated tolerance. Password Policy Enforcer
rejects a password if it contains all the text in the Value column (or a derivative of it if
character substitution detection or bi-directional analysis is enabled).

| Rule              | Parameter         | Value      | Tolerance |
| ----------------- | ----------------- | ---------- | --------- |
| User Logon Name   | Logon name        | maryjones  | 8         |
| User Display Name | Display name      | Mary Jones | 9         |
| Similarity        | Current password  | oldpass    | 6         |
| Character Pattern | Character pattern | abcdefgh   | 7         |

Password Policy Enforcer's Auto tolerance calculation has a minimum limit to stop passwords from
being rejected when the comparison parameter is very short. The limit is set to two characters by
default, so Password Policy Enforcer accepts passwords that contain the parameter value if the
comparison parameter only contains one or two characters. Contact Netwrix support if you need to
change the minimum limit.
