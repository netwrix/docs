---
title: "Rules"
description: "Use Password Policy Enforcer rules to accept or reject passwords."
sidebar_position: 10
---

# Rules

Password Policy Enforcer (PPE) uses rules to accept or reject passwords. Each [policy](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/manage_policies.md) has rules that are configured independently of the rules in other policies. To configure the rules for a policy:
1. Open the PPE configuration console.
2. Click the name of a policy in the policy list. The **Rules** tab opens by default.

The left pane of the policy editor lists the available rules. A check mark appears beside enabled rules. Click a rule to configure its settings in the right pane. The first setting is always a checkbox with the same name as the rule. Select the checkbox to enable the rule.

Click **Save** in the upper-right corner of the policy editor to apply your changes. The toggle switch in the upper-left corner of the policy editor enables and disables the entire policy.

![Enabled rules are checked](/images/passwordpolicyenforcer/11.2/administration/enabledrules.webp)

Several PPE rules have **Detect character substitution** and **Tolerance** settings. Understanding how these settings work helps you fine-tune your policies.

## Detecting Character Substitution

Character substitution is a technique used by some users to improve password quality. They replace some alphabetic characters with non-alphabetic characters that have a similar appearance. For example, "sold" becomes "$old". Many of these substitutions are well known and do little to improve password strength.

Some rules have a **Detect character substitution** checkbox. PPE tests passwords with and without character substitution when you select this checkbox. This stops users from circumventing the rule by substituting some characters. PPE detects these common substitutions:

<table>
    <thead>
        <tr>
            <th>Original</th>
            <th>Substituted</th>
        </tr>
    </thead>
    <tbody>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>A&nbsp;&nbsp;&nbsp;a</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>&#94;&nbsp;&nbsp;&nbsp;&#64;</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>B&nbsp;&nbsp;&nbsp;b</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>8</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>C&nbsp;&nbsp;&nbsp;c</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>&#40;&nbsp;&nbsp;&nbsp;&#123;&nbsp;&nbsp;&nbsp;&lt;&nbsp;&nbsp;&nbsp;&#91;</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>D&nbsp;&nbsp;&nbsp;d</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>&#41;&nbsp;&nbsp;&nbsp;&#125;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;&#93;</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>E&nbsp;&nbsp;&nbsp;e</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>3</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>G&nbsp;&nbsp;&nbsp;g</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>6&nbsp;&nbsp;&nbsp;9</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>I&nbsp;&nbsp;&nbsp;i</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>&#33;&nbsp;&nbsp;&nbsp;&#124;&nbsp;&nbsp;&nbsp;1</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>O&nbsp;&nbsp;&nbsp;o</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>0&nbsp;(zero)</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>S&nbsp;&nbsp;&nbsp;s</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>&#36;&nbsp;&nbsp;&nbsp;5</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>T&nbsp;&nbsp;&nbsp;t</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>&#43;&nbsp;&nbsp;&nbsp;7</span></td></tr>
        <tr><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>Z&nbsp;&nbsp;&nbsp;z</span></td><td><span style={{fontFamily: "monospace", fontSize: "1.1em"}}>2</span></td></tr>
    </tbody>
</table>

## Tolerance

Some rules have a **Tolerance** dropdown. The tolerance controls how strictly PPE enforces the rule.

Tolerance typically refers to the maximum allowable number of consecutive matching characters in the password and some other parameter. Password Policy Enforcer rejects a password if it exceeds the specified tolerance. For example, the logon name "mary**jones**", and the password "**Jones**town" contain five consecutive matching characters (shown in bold). Password Policy Enforcer rejects this password if the tolerance for the User Logon Name rule is four or lower, and accepts it if the tolerance is five or higher.

Some rules have an Auto tolerance option. Setting the tolerance to Auto tells Password Policy Enforcer to reject only passwords that contain the entire comparison parameter. This is useful when the length of the comparison parameter is unknown. For example, if you want PPE to reject passwords that contain the user's entire logon name, then you can't specify a fixed tolerance unless all logon names are the same length. Setting the tolerance to Auto lets Password Policy Enforcer calculate an appropriate tolerance during the password change.

Password Policy Enforcer sets the tolerance to the length of the comparison parameter minus one. The following table shows some parameter values and the calculated tolerance. PPE rejects a password if it contains all the text in the Value column (or a derivative of it if you enable **Detect character substitution** or **Detect words typed backwards**).

| Rule              | Parameter         | Value      | Tolerance |
| ----------------- | ----------------- | ---------- | --------- |
| User Logon Name   | Logon name        | maryjones  | 8         |
| User Display Name | Display name      | Mary Jones | 9         |
| Similarity        | Current password  | oldpass    | 6         |
| Character Pattern | Character pattern | abcdefgh   | 7         |

:::note
Password Policy Enforcer's Auto tolerance calculation has a minimum limit that stops PPE from rejecting passwords when the comparison parameter is short. The limit defaults to two characters, so PPE accepts passwords containing the parameter value if the comparison parameter only has one or two characters. Contact [Netwrix Support](https://www.netwrix.com/support.html) if you need to change the minimum limit.
:::
