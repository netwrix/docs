---
title: "How do I license Autopilot pre-provisioning foouser and autopilot user for my Intune MDM service?"
description: "How do I license Autopilot pre-provisioning foouser and autopilot user for my Intune MDM service?"
sidebar_position: 90
---

# How do I license Autopilot pre-provisioning foouser and autopilot user for my Intune MDM service?

If you use pre-provisioning with Intune Autopilot, Microsoft may use one or more fake pre-provision
accounts which may need to be licensed for your Intune if you use UPN licensing. This user is
typically foouser@your-mail-domain and may not be the same as the UPN you are trying to get licensed
for.

You can see this string by investigating
`hklm\system\currentcontrolset\control\clouddomainjoin\joininfo\<some alphanumeric key>`.

An example, taken from
[FooUser@ meets the Cosmic Autopilot@ user](https://call4cloud.nl/foouser-autopilot-preprovisoning-fake-user/),
can be seen here.

![1336_1_f6195331f68904f96c183fe8a7dfdd29](/images/endpointpolicymanager/license/mdm/1336_1_f6195331f68904f96c183fe8a7dfdd29.webp)

