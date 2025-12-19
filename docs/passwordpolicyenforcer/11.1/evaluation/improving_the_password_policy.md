---
title: "Improve the Password Policy"
description: "Improve the Password Policy"
sidebar_position: 60
---

# Improve the Password Policy

Password Policy Enforcer rules have properties that control how rules are enforced. You can improve
the effectiveness of the Users policy by enabling character substitution detection and
bi-directional analysis (words typed backwards) for the **Similarity** and **Dictionary** rules.

When character substitution detection is enabled, Password Policy Enforcer searches passwords for
common character substitutions. For example, an S replaced with a $. If a password only complies
with the policy because of the substitution ( the substitution is needed to make the password
compliant), then Password Policy Enforcer rejects the password.

Bi-directional analysis tests passwords with their characters reversed to stop users from
circumventing a rule by entering a non-compliant password backwards. For example, "drowssapym"
instead of "mypassword".

Click on your policy name on the Configuration Console dashboard if needed.

**Step 1 –** Open the **Dictionary** rule.

![Open the Dictionary rule](/images/passwordpolicyenforcer/11.1/evaluation/evaldict.webp)

**Step 2 –** Select the **Detect character substitution** and **Detect words typed backwards** check
boxes.

**Step 3 –** Open the **Similarity** rule.

**Step 4 –** For **User logon name** select **Yes** for **Character substitution** and **Words typed
backwards**.

**Step 5 –** Click **Save**.

Test the improved policy with passwords that were accepted under the previous policy. Password
Policy Enforcer should reject all of them.

| Password | Result   | Reason                             |
| -------- | -------- | ---------------------------------- |
| tseTEPP  | Rejected | Similar to user logon name         |
| kravdraA | Rejected | Similar to word in dictionary file |
| Aardv@rk | Rejected | Similar to word in dictionary file |
