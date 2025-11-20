---
title: "How do I setup SecureRun when there are so many variables and still ensure my rules work no matter what version of the software I have I installed?"
description: "How do I setup SecureRun when there are so many variables and still ensure my rules work no matter what version of the software I have I installed?"
sidebar_position: 20
---

# How do I setup SecureRun when there are so many variables and still ensure my rules work no matter what version of the software I have I installed?

### Using Secure Run – Best Practices

#### Getting Started

Watch this quick video for tips on setting up Secure Run:
[Stop Ransomware and other unknown zero day attacks with Endpoint Policy Manager SecureRun(TM)](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/howtoandtechsupport/stopransomware.md).

In addition we have a tool called Auto Rules Generator for generating rules from a machine that has
all your apps. It is in the Extras folder of the main Netwrix Endpoint Policy Manager (formerly
PolicyPak) download. For more information on this issue, please see
[Auto Rules Generator Tool (with SecureRun)](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/basicsandgettingstarted/autorulesgeneratortool.md).

#### How do we setup SecureRun when each version of the software references more than one .exe to start the program?

- There is the option to **Apply to Child Processes**. In most cases this will elevate any other
  processes needed.
- If you do not use this option, you have to create rules for each process. But you can use the Auto
  Rules Generator to find all those .exe's and generate rules for all quickly.

![315_1_lpm-faq-03-img-01](/images/endpointpolicymanager/leastprivilege/securerun/315_1_lpm-faq-03-img-01.webp)

#### How do we setup SecureRun when there are so many variables and make them work no matter what version of the software was installed?

- Start with the AutoRules Generator to try to mass generate the rules you need.
- In You can do a Single rule or a Combo

![315_2_lpm-faq-03-img-02](/images/endpointpolicymanager/leastprivilege/securerun/315_2_lpm-faq-03-img-02.webp)

- For a Single many customers will use Hashto ensure only that specific file is elevated. However
  this doesn't allow for future versions to be allowed.
- For future proof situations, a Combo of a **Signature**, along with **File Info**, is often used.
  That way you ensure that it is always that Vendor with the Signature, and with File Info you can
  specify to allow Higher or Equals, thereby allowing future versions to be elevated.

![315_3_lpm-faq-03-img-03](/images/endpointpolicymanager/leastprivilege/securerun/315_3_lpm-faq-03-img-03.webp)

![315_4_lpm-faq-03-img-04](/images/endpointpolicymanager/leastprivilege/securerun/315_4_lpm-faq-03-img-04.webp)

### Summary

There are various ways to slice and dice to create the rules you want, but most common is to use
**Signature** with **File Info** set to Higher or Equals and, optionally Path with just filename
entered (though if the app changes names often you might omit using the Path).

The more rule types you use the more secure it becomes, but keeping it usable is always the goal.
Generally only use Hash by itself because its pretty secure, and then some combination of the others
as noted above.


