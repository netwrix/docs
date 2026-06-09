---
title: "Troubleshooting Item Level Targeting (ILT) Evaluations when using the PolicyPak ILT Engine"
description: "Troubleshooting Item Level Targeting (ILT) Evaluations when using the PolicyPak ILT Engine"
sidebar_position: 160
---

# Troubleshooting Item Level Targeting (ILT) Evaluations when using the PolicyPak ILT Engine

Starting with CSE 3068, Netwrix PolicyPak replaces the in-box
Microsoft Item Level Targeting Evaluation engine with its own PolicyPak ILT Engine.

When the PP ILT engine is used, new logging occurs should you need extra troubleshooting.

- User side logs: `%LocalAppData%\endpointpolicymanager\component_name\ppTargetingFilters_v2.log`
- Computer side logs: `%ProgramData% endpointpolicymanager\component_name\ppTargetingFilters_v2.log`

An example of this can be seen here, when ILT is used with PolicyPak Admin Templates
Manager on the USER side:

![880_1_image-20220204232914-1_950x158](/images/policypak/troubleshooting/itemleveltargeting/880_1_image-20220204232914-1_950x158.webp)

## How the PolicyPak ILT Engine Works / Error Handling

With this new ILT engine every single condition is evaluated separately and asynchronously, and the
results are logged as they become available. The `ppTargetingFilters_v2.log` will contain the
details of every individual condition being assessed, including interim results (i.e., paths with
resolved variable names, etc.). If there is an error, the error gets logged as well.

When an individual condition cannot be evaluated because of an error, the PP ILT engine will try to
use a previously cached result for that single condition (not the entire filter).

For example, a typical error you could encounter is where an LDAP condition cannot be evaluated
because the DC is not available, (i.e., the user is logged into a remote PC but has not established
a VPN connection to the company network as yet).

In this case the PP ILT engine will try to use the previously CACHED or manually defined "DEFAULT"
result if available, but will still attempt to re-evaluate any other conditions in the same filter.

## Disabling PolicyPak Item Level Targeting and using in-Box Preferences Targeting

If you encounter a serious issue which requires that you stop using the PolicyPak ILT
engine and must instead revert back to the Microsoft ILT engine you can use a PolicyPak ADMX setting to do it.

:::note
Learn how to implement the PolicyPak ADMX settings from this KB.
:::


ADMX Computer Configuration | Policies | Administrative Templates | PolicyPak ADMX Settings |
Client-Side Extensions | Use Item Level Targeting filters evaluation engine (Preferences vs.
PolicyPak ).

![880_2_image-20220204232914-2_950x529](/images/policypak/troubleshooting/itemleveltargeting/880_2_image-20220204232914-2_950x529.webp)

Additionally, when the PP ILT engine is enabled the registry key below will be present and set to
"1" for Enabled.

Registry Hive HKEY_LOCAL_MACHINE

Registry Path ` SOFTWARE\Policies\PolicyPak\Criteria Engine`

Value Name Enabled

Value Type REG_DWORD

Enabled Value 1 (when opted in BEFORE build 3068) or ABSENT when used as default in build 3068 and
later.

Disabled Value 0

![880_3_image-20220204232914-3](/images/policypak/troubleshooting/itemleveltargeting/880_3_image-20220204232914-3.webp)

