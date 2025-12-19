---
title: "Why do I see duplicate computer entries in Endpoint Policy Manager Cloud (Or, what is Loose, Strict and Advanced Registration)?"
description: "Why do I see duplicate computer entries in Endpoint Policy Manager Cloud (Or, what is Loose, Strict and Advanced Registration)?"
sidebar_position: 180
---

# Why do I see duplicate computer entries in Endpoint Policy Manager Cloud (Or, what is Loose, Strict and Advanced Registration)?

If Netwrix Endpoint Policy Manager (formerly PolicyPak) is uninstalled while the endpoint is
connected to the internet and thereby has a connection to the Endpoint Policy Manager Cloud server,
the existing computer account will be deleted, removing it from all group membership and
relinquishing its license.

However, if the endpoint cannot connect to the Endpoint Policy Manager cloud server, or has crashed
and been rebuild, the computer registration model configured in your cloud portal will determine how
the computer accounts and memberships are handled.

## Mode Definitions

![709_1_image-20210319185612-1](/images/endpointpolicymanager/troubleshooting/cloud/709_1_image-20210319185612-1.webp)

Strict: Strict will always create a new secure certificate connection and treat the computer as if
it has never been seen before. The computer will lose any group memberships that may exist, leaving
it the built-in defaults of "all" and "unassigned".

Loose (allow computers to recovery access by UUID): If a computer account already exists (and
matches by hardware UUID only) then it will use the existing account. If a computer is already a
member of company groups, all membership is maintained.

Loose (allow computers to recovery access by UUID or MAC Address): If a computer account already
exists (and matches by hardware UUID or MAC address) then it will use the existing account. If a
computer is already a member of company groups, all membership is maintained.

Advanced (always register a new computer and keep existing records): If a computer account already
exists (and matches by hardware UUID or MAC address) then create a new computer account is created,
just as you would do in strict mode. The difference is that the record for the previous computer is
not deleted. Thus, multiple computers with the same hardware can be registered; each with their own
unique record in Endpoint Policy Manager Cloud. This is useful for VDI environments where the
machines are identical, but each must be registered independently.

## Sample Scenario

This example shows what would happen to the computer accounts and their group memberships for each
registration mode in the following scenario.

In this scenario, a sample endpoint has the Endpoint Policy Manager Cloud software installed and the
computer account is a member of a custom "Company Group". For each registration mode, the computer
is disconnected from the internet, thereby unable to communicate with the Endpoint Policy Manager
Cloud server, and will have the Endpoint Policy Manager Cloud software removed. Communication is
then re-established and Endpoint Policy Manager Cloud software reinstalled.

| Registration Mode   | Computer Account                                                          | Group Membership                                                                                           |
| ------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Strict              | Old account removed and new one created                                   | Reverted back to built-in default group memberships                                                        |
| Loose (UUID)        | Re-established connection to existing account                             | All group memberships maintained                                                                           |
| Loose (UUID or MAC) | Re-established connection to existing account                             | All group memberships maintained                                                                           |
| Advanced            | Old computer account remained AND new account created (Duplicate Entries) | Old account maintained existing group memberships and new account reverted to built-in default memberships |


