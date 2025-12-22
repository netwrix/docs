---
title: "Unique Characters Rule"
description: "Unique Characters Rule"
sidebar_position: 170
---

# Unique Characters Rule

The Unique Characters rule rejects passwords that do not contain a minimum number of unique
characters. For example, the password "aaaaaaaa" only contains one unique character (a), whereas
"mypassword" contains nine unique characters (mypasword). Increasing the number of unique characters
in a password can increase password strength by avoiding repetitive sequences that are easily
guessed. The Unique Characters rule is case sensitive, so "LoOpHole" contains seven unique
characters (LoOpHle).

![ppe_rules_22](/images/passwordpolicyenforcer/10.2/administration/ppe_rules_22.webp)

- Select the **Enabled** check box to enable the Unique Characters rule.
- Choose the minimum number of unique characters that passwords must contain from the **unique
  characters** drop-down list.
- Click the **Messages** tab to customize the Password Policy Client rule inserts.
