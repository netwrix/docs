---
title: "Length"
description: "Configure the Length rule to reject passwords that contain too few or too many characters."
sidebar_position: 80
---

# Length rule

The Length rule rejects passwords that contain too few or too many characters. Longer passwords are generally stronger, so only specify a maximum password length if you must maintain password compatibility with a system that can't accept long passwords.

![Length rule](/images/passwordpolicyenforcer/11.2/administration/length.webp)

Select the **Length** checkbox to enable the Length rule.

Select the **At least** option if you want Password Policy Enforcer (PPE) to enforce a minimum password length. Select the minimum number of characters from the dropdown.

Select the **No more than** option if you want PPE to enforce a maximum password length. Select the maximum number of characters from the dropdown.

Select the **Between** option if you want PPE to enforce a minimum and maximum password length. Select the minimum number of characters from the first dropdown and the maximum from the second dropdown.
