---
title: "Why does my LPM rule for Product Info not work when the MSI is on a NAS share?"
description: "Why does my LPM rule for Product Info not work when the MSI is on a NAS share?"
sidebar_position: 160
---

# Why does my LPM rule for Product Info not work when the MSI is on a NAS share?

Problem:

You've applied an LPM elevate rule to an MSI file. This file is on a NAS share, and end-users are
still facing issues inheriting the rule properly, resulting in persistent UAC prompts.

Cause:

If the Domain Computers account does not have read access to MSI files on NAS shares, then CSE
cannot read the MSI database to check Product info values. As a result, any rules that use Product
info will not work.

Workaround:

Add Domain Computers group to NAS share and grant Read access in NTFS permissions.

![1321_1_1545ecff8694864abf6ad7ee336339e2](/images/endpointpolicymanager/troubleshooting/leastprivilege/1321_1_1545ecff8694864abf6ad7ee336339e2.webp)

The screen shot below displays TrueNAS ACL permissions.

![1321_2_89259dc76f65a4f53536105a6aef5806](/images/endpointpolicymanager/troubleshooting/leastprivilege/1321_2_89259dc76f65a4f53536105a6aef5806.webp)

In Windows Explorer, if you check the NTFS permissions of the folder, it should appear as shown in
the screen shot below:

![1321_3_5273a796cdc192f102e32fc389f6bbfc](/images/endpointpolicymanager/troubleshooting/leastprivilege/1321_3_5273a796cdc192f102e32fc389f6bbfc.webp)


