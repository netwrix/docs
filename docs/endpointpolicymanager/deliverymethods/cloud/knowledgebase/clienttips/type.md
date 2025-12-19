---
title: "Are Endpoint Policy Manager Cloud policies processed on User or Computer side (and why do I only sometimes see User or Computer side ILT?)"
description: "Are Endpoint Policy Manager Cloud policies processed on User or Computer side (and why do I only sometimes see User or Computer side ILT?)"
sidebar_position: 140
---

# Are Endpoint Policy Manager Cloud policies processed on User or Computer side (and why do I only sometimes see User or Computer side ILT?)

There are really two levels of Policy type in Netwrix Endpoint Policy Manager (formerly PolicyPak)
Cloud:

- Top level policies, which are created in-cloud and linked over to a Company Group. The Top level
  policies are always a specific type, say, Endpoint Policy Manager Admin Templates Manager,
  Endpoint Policy Manager Least Privilege Manager or Endpoint Policy Manager Browser Router, etc.
- Internal policies which are created as you add new items inside a top level policy.

The distinction can be seen below. Items in redare Top-Level Policies and Items in purpleare
Internal Policies to the specific Top-Level policy type.

![913_1_image001_950x505](/images/endpointpolicymanager/cloud/policy/913_1_image001_950x505.webp)

The processing of all Top Level Policies is always done on the Computer side, which means all users
on the computer will be affected by all policies (initially.).

This is because all Cloud policies are downloaded to` \programdata\policypak\Xmldata\cloud` folder,
like what's seen here.

![913_2_image002_950x906](/images/endpointpolicymanager/cloud/policy/913_2_image002_950x906.webp)

Then in the case for some policies, you can perform some settings user side only, others computer
side only, and others you can switch.

Endpoint Policy Manager Admin Templates Manager is a good example. After you look at the entries,
you will get the following example settings.

![913_3_image003_950x419](/images/endpointpolicymanager/cloud/policy/913_3_image003_950x419.webp)

The result of the downloaded XML looks like this. Here, the Top-Level policy will always come in on
the Computer (Machine) side.The Internal policy is what is set in the configuratio,n or what the CSE
might be hardcoded to.

![913_4_image004_950x387](/images/endpointpolicymanager/cloud/policy/913_4_image004_950x387.webp)

Therefore, to see and understand what ILT types will be available, it comes down to how the CSE
operates. Some CSEs will operate in either USER or COMPUTER modes.

In general for those which operate in either(Endpoint Policy Manager Admin Templates Manager,
Endpoint Policy Manager Least Privilege Manager, etc.) the Internal policies will have ILT which is
geared toward a USER.

This way you can deliver the main policy to the computer, then filter by which user(s) or which
group(s) you want to limit the policy to affect.

![913_5_image005_950x610](/images/endpointpolicymanager/cloud/policy/913_5_image005_950x610.webp)

![913_6_image006_950x569](/images/endpointpolicymanager/cloud/policy/913_6_image006_950x569.webp)

There is one exception to the rules above. Note the small difference between a policy which is
created onlytusing Endpoint Policy Manager Cloud editor. The Top-Level policy will show Machine like
what's seen here:

![913_7_image007_950x316](/images/endpointpolicymanager/cloud/policy/913_7_image007_950x316.webp)

But if a policy is uploaded from on-prem MMC, specifically the USER side, the XML will look like
this:

![913_8_image008_950x443](/images/endpointpolicymanager/cloud/policy/913_8_image008_950x443.webp)

This does not affect the operation of the policy in any way. The policy is still downloaded by
Endpoint Policy Manager Cloud to `\programdata\policypak\Xmldata\cloud`, and processed by a licensed
CSE. The policy affects all users (by default), and then any ILT on the user-side (if any) will then
be processed, thus limiting the scope of where the policy is affected.


