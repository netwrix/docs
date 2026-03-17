---
title: "What if I want to unlicense specific components via ADMX or PolicyPak Cloud?"
description: "What if I want to unlicense specific components via ADMX or PolicyPak Cloud?"
sidebar_position: 30
---

# What if I want to unlicense specific components via ADMX or PolicyPak Cloud?

There are three ways to unlicense an individual component.

## 1 — When using Group Policy Objects to license PolicyPak

See
[How to Un-License any PolicyPakComponent via ADMX or PolicyPak Cloud](/docs/policypak/licensing/videolearningcenter/troubleshooting/unlicense.md)
for additional information on this topic.

:::note
You need to first install the PolicyPak ADMX files as seen in
[Troubleshooting with ADMX files](/docs/policypak/gettingstarted/misc/videos/troubleshooting/admxfiles.md).
:::


The basic gist is that you'll be using Group Policy to deliver a setting which un-licenses a
specific component like this.

![188_1_zxcxvxvxv](/images/policypak/license/unlicense/188_1_zxcxvxvxv.webp)

## 2 — When using PolicyPak Cloud

You can deliver the same setting via PolicyPak Cloud as an Admin Template entry. Find
the PolicyPak Admin Templates, then find the setting.

![188_3_ertyetyur](/images/policypak/license/unlicense/188_3_ertyetyur.webp)

Once enabled, the component will be de-activated.

![188_5_zzsgdfhfghjk](/images/policypak/license/unlicense/188_5_zzsgdfhfghjk.webp)

When you unlicense via ADMX you can test your results with the `PPUPDATE` command. The expected
result should be similar to this example, where you can see the license is valid, but the component
(in this case Browser Router) is prevented from being licensed by a policy.

![188_7_img-2_950x649](/images/policypak/license/unlicense/188_7_img-2_950x649.webp)

