---
title: "Unique Characters"
description: "Configure the Unique Characters rule to reject passwords that don't contain a minimum number of unique characters."
sidebar_position: 120
---

# Unique Characters rule

The Unique Characters rule rejects passwords that don't contain a minimum number of unique characters. For example, the password aaaaaaaa only contains one unique character (a), whereas mypassword contains nine unique characters (mypasword). Increasing the number of unique characters in a password reduces repetition. This increases password entropy and makes the password harder to guess or crack.

Select the **Unique characters** checkbox to enable the Unique Characters rule.

Select the minimum number of unique characters from the **Must contain** dropdown. Password Policy Enforcer rejects the password if it doesn't contain at least this many unique characters. This rule is case sensitive, so LoOpHole contains seven unique characters (LoOpHle).
