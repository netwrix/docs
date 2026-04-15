---
title: "Does Least Privilege Manager block Macro attacks?"
description: "Does Least Privilege Manager block Macro attacks?"
sidebar_position: 20
---

# Does Least Privilege Manager block Macro attacks?

Partially, yes, but this is by design.

First, Microsoft already has protections in to properly block Macro attacks themselves. For more
information on this, please see the Microsoft article,
[New feature in Office 2016 can block macros and help prevent infection](https://www.microsoft.com/en-us/security/blog/2016/03/22/new-feature-in-office-2016-can-block-macros-and-help-prevent-infection/?source=mmpc).

But besides that, or if you had noprotection in place, when Netwrix PolicyPak SecureRun™ is in place, we will automatically block the Macro from running
supported PolicyPak Least Privilege Manager types including scripts, EXEs, MSIs, JARs
and more, since the downloadable payload would be owned by the User and not Administrator, Trusted
Installer, or anyone one the SecureRun list.


