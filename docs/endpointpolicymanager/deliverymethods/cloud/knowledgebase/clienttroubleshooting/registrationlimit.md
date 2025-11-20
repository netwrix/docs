---
title: "Understanding and working within Endpoint Policy Manager Clouds Computer registration limit."
description: "Understanding and working within Endpoint Policy Manager Clouds Computer registration limit."
sidebar_position: 210
---

# Understanding and working within Endpoint Policy Manager Clouds Computer registration limit.

The maximum number of computers you can register per hour with Netwrix Endpoint Policy Manager
(formerly PolicyPak) Cloud service is 200 by default. Any attempt to register more than that will be
denied during installation of the Endpoint Policy Manager Cloud Client.  You can view your status in
the portal on the Company Details page.

![963_1_image-20230425212744-1_950x534](/images/endpointpolicymanager/troubleshooting/cloud/963_1_image-20230425212744-1_950x534.webp)

If you have reached the limit, the Installer will give a Prompt that you are not allowed to register
more than X computers per hour. X is the number of computers you're allowed to register /hr. in your
Tenant.

You'll find similar reason in the Installer logs if you're using a software deployment tool.

![963_2_image-20230425212744-2](/images/endpointpolicymanager/troubleshooting/cloud/963_2_image-20230425212744-2.webp)

The recommended option is to Exit Installation and try again 1 hour later.  Note as shown earlier,
you can check your limit status in the portal.

Currently, if you choose to continue, the client may uninstall itself during the next scheduled
background sync with the cloud – if the limit is still in effect.  Thus, you will need to install
the client again.

Conclusion:

Always plan your deployment matching the registration limit, either you're doing it manually or with
software deployment tool to avoid unnecessary delays.


