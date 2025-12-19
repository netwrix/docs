---
title: "Why do I sometimes see Endpoint Policy Manager Cloud security settings and sometimes see on-prem GPO security settings?"
description: "Why do I sometimes see Endpoint Policy Manager Cloud security settings and sometimes see on-prem GPO security settings?"
sidebar_position: 30
---

# Why do I sometimes see Endpoint Policy Manager Cloud security settings and sometimes see on-prem GPO security settings?

Microsoft stores all Security Settings in a single INF file
`("Microsoft\Windows NT\SecEdit\GptTmpl.inf")`, there can only be one instance of these settings in
use at a time. What happens when there are multiple versions of the file being used is that ALL of
the settings in each version of the INF file overwrite each other when the individual policies are
applied.

Therefore, the quick reason you might see policy settings "vaporize" is a flip-flop between two
delivery methods: Group Policy and Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud, for
instance.

To illustrate this point let's assume you have a Domain-Joined computer that also receives a
Security Settings policy via Endpoint Policy Manager Cloud (PPC). Then from the domain-based GPO you
have a Password Policy applied at the domain level, and from the PP Cloud side you have a Rename
Administrator account policy being applied to the computer group the computer is in.

You might expect these two settings to MERGE within the Security Settings policy. But that's not
what happens.

When Group Policy processes (ie: gpupdate) occurs on the Domain-Joined computer, the computer will
receive the Domain version of the Password policy, this will overwrite ALL existing Security
Settings policies currently on the machine coming from PPC. Likewise, when the PPC Security Settings
policy applies it will overwrite ALL Security Settings that were coming from the domain.

When the Domain policy applies (gpupdate etc.) the computer will get these settings below, note that
the "Rename administrator account" policy is set to "Not Defined" for the Domain policy.

![698_1_image-20200511225437-1](/images/endpointpolicymanager/troubleshooting/gpoexport/698_1_image-20200511225437-1.webp)

When Endpoint Policy Manager Cloud settings are applied (PPCloud /sync, ppupdate etc.) the computer
will receive these settings below, note that there is nothing defined for "Enforce password history"
within the PPC policy.

![698_3_image-20200511225437-2](/images/endpointpolicymanager/troubleshooting/gpoexport/698_3_image-20200511225437-2.webp)

Video example below shows the result of having Security Settings Policy set in both PPC and in
On-Premises Group Policy, the policies will continuously replace each other every time they apply.

We recommend you choose only one method, and set Security Settings policies in either PPC or
On-Premises Group Policy, not in both.


