---
title: "Java: How to disable Java prompt \"Do you want to run this application?\""
description: "Java: How to disable Java prompt \"Do you want to run this application?\""
sidebar_position: 420
---

# Java: How to disable Java prompt "Do you want to run this application?"

Visiting a site with Java enabled content you may see this prompt, confirming if you want to run the
JRE code located on that location.

![2_1_image005](/images/endpointpolicymanager/applicationsettings/preconfigured/java/2_1_image005.webp)

## Solution:

Setting up these couple of settings will get away this prompt. First add the location in the trusted
sites in exception list. Then set the "Enable – hide warning and run with protection" under "Sandbox
vs. Trusted Security verification".

Java 7 Pak technique:

![2_2_image006](/images/endpointpolicymanager/applicationsettings/preconfigured/java/2_2_image006.webp)

![2_3_image007](/images/endpointpolicymanager/applicationsettings/preconfigured/java/2_3_image007.webp)

Java 8 Pak technique:

![2_4_16a-8](/images/endpointpolicymanager/applicationsettings/preconfigured/java/2_4_16a-8.webp)

![2_5_16b-8](/images/endpointpolicymanager/applicationsettings/preconfigured/java/2_5_16b-8.webp)


