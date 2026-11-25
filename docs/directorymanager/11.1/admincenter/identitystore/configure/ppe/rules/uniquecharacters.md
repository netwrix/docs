---
title: "Unique Characters Rule for Password Policy Enforcer"
description: "Require a minimum number of unique characters in passwords by configuring the Unique Characters rule in a Password Policy Enforcer policy."
keywords:
  - Password Policy Enforcer
  - Unique Characters rule
  - password strength
  - unique characters
  - password policy
sidebar_position: 120
---

# Unique Characters Rule for Password Policy Enforcer

The Unique Characters rule rejects passwords that don't contain a minimum number of unique
characters. For example, the password "aaaaaaaa" only contains one unique character (a), whereas
"mypassword" contains nine unique characters (mypasword). Increasing the number of unique characters
in a password increases password strength by avoiding repetitive sequences that are easily guessed.
The Unique Characters rule is case sensitive, so "LoOpHole" contains seven unique characters
(LoOpHole).

- Enable the **Unique characters** button to enable the Unique Characters rule.
- Must contain `<_number_>` or more unique characters – Select the minimum number of unique
  characters in the number dropdown list the passwords must contain.
