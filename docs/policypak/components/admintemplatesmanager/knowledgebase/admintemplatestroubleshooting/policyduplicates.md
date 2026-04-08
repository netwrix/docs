---
title: "I get a \"Policy Duplicates\" error when adding new policies using PolicyPak Admin Templates Manager. What should I do?"
description: "I get a \"Policy Duplicates\" error when adding new policies using PolicyPak Admin Templates Manager. What should I do?"
sidebar_position: 40
---

# I get a "Policy Duplicates" error when adding new policies using PolicyPak Admin Templates Manager. What should I do?

When you try to use Netwrix PolicyPak Admin Templates Manager to
"ADD NEW POLICY" under the computer or user PolicyPak Administrative

Templates manager, you might an error expressing "policy duplicates."

Like what is seen here. This can happen when Microsoft's own ADMX definitions conflict, and two (or
more) ADMX files share the same overlapping value.

Option 1 is to ignore the message and move on; it should work just find.

Option 2 is to clean up the underlying issue in your Central (or Local) store. Here's a Microsoft
article on
that: [https://support.microsoft.com/en-us/help/3077013/-microsoft-policies-sensors-windowslocationprovider-is-already-defined](https://support.microsoft.com/en-us/help/3077013/-microsoft-policies-sensors-windowslocationprovider-is-already-defined)

![733_1_gfhjghj](/images/policypak/troubleshooting/error/admintemplates/733_1_gfhjghj.webp)


