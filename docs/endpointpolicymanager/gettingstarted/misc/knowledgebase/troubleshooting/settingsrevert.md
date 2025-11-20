---
title: "How do I ensure that settings will revert when the policy no longer applies (by Group Policy, File, or Endpoint Policy Manager Cloud)?"
description: "How do I ensure that settings will revert when the policy no longer applies (by Group Policy, File, or Endpoint Policy Manager Cloud)?"
sidebar_position: 80
---

# How do I ensure that settings will revert when the policy no longer applies (by Group Policy, File, or Endpoint Policy Manager Cloud)?

It's a little different for each component.

## Endpoint Policy Application Manager

All Endpoint Policy Manager Application Manager Applock (UI) lockout and ACL Lockdown will
automatically revert when the policy no longer applies.

In order to specify to have SETTINGS revert back, please see the screenshots below. There are two
choices:

1. Revert a specific element back when it no longer applies as seen here.

   ![417_1_image005](/images/endpointpolicymanager/troubleshooting/417_1_image005.webp)

2. Revert all elements back when they no longer apply as seen here.

   ![417_2_image007](/images/endpointpolicymanager/troubleshooting/417_2_image007.webp)

## Endpoint Policy Manager Admin Templates Manager

Endpoint Policy Manager Admin Templates Manager policies don't need any "revert" item set for normal
ADMX entries that ship in the box from Microsoft

Revert when no longer applies should just happen automatically.

## Endpoint Policy Manager Security Settings Manager

Policies don't need any "revert" flag set. Items that CAN revert will. Some security setting cannot
revert by their nature once they are set. You should test out revert on security settings before
major deployment when possible.

## Endpoint Policy Preferences Manager

When using Endpoint Policy Manager Preferences Manager to deploy Group Policy Preferences items,
settings DO need to be specified to revert, or they will not.

Here's an example of how to specify to "Remove the item when it is no longer applied."

This flag must be set or Endpoint Policy Manager cannot revert the item when the policy no longer
applies

![417_3_image008](/images/endpointpolicymanager/troubleshooting/417_3_image008.webp)

