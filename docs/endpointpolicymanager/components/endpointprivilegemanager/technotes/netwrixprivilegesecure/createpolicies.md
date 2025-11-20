---
title: "How can I create Endpoint Policy ManagerLeast Privilege Manager policies with Netwrix Privilege Secure (even when the Endpoint Policy Manager Client Side Extension is unlicensed?)"
description: "How can I create Endpoint Policy ManagerLeast Privilege Manager policies with Netwrix Privilege Secure (even when the Endpoint Policy Manager Client Side Extension is unlicensed?)"
sidebar_position: 30
---

# How can I create Endpoint Policy ManagerLeast Privilege Manager policies with Netwrix Privilege Secure (even when the Endpoint Policy Manager Client Side Extension is unlicensed?)

Starting with builds later than July 2023, the Netwrix Endpoint Policy Manager (formerly PolicyPak)
Client side extension does not need to be expressly licensed when used in conjunction with Netwrix
Privilege Secure.

In other words when you evaluate or purchase Netwrix Privilege Secure, some major endpoint
management and elevation functions are automatically available to you without needing to install any
specific endpoint license.

First, you need to configure the Endpoint Policy Manager CSE using Global Netwrix Privilege Secure
Configuration Policy and have it affect endpoints. This is the switch which turns on Privilege
Secure on the Endpoints when the Endpoint Policy Manager CSE is installed.

![965_1_image-20230627091218-5_950x515](/images/endpointpolicymanager/integration/965_1_image-20230627091218-5_950x515.webp)

When that is done you can create policies which affect endpoints such as Executable, Windows
Installer, etc. and have them work unlicensed. Rememberthat this only works when used in conjunction
with Netwrix Privilege Secure. For example, an Executable policy may be started like this:

![965_2_image-20230627091218-6_950x566](/images/endpointpolicymanager/integration/965_2_image-20230627091218-6_950x566.webp)

But one of the first screens you will encounter is this. Here you must select **Use with Netwrix
Privilege Secure**as shown below.

![965_3_image-20230627091218-7_950x672](/images/endpointpolicymanager/integration/965_3_image-20230627091218-7_950x672.webp)

The remaining screens will work unlicensed, because the policy is conjoined with Netwrix Privilege
Secure.

![965_4_image-20230627091218-8_950x910](/images/endpointpolicymanager/integration/965_4_image-20230627091218-8_950x910.webp)

However, if you attempt to create Endpoint Policy Manager Least Privilege Manager policies without
conjoining them with Netwrix Privilege Secure, the policy will be saved and delivered. But the
Endpoint Policy Manager CSE will not process it without a Endpoint Policy Manager Least Privilege
Manager license.

Another way to know what policies will work unlicensed vs. licensed is to simply look at the view of
all the policies. Those which state Netwrix Privilege Secure will run fine when the Endpoint Policy
Manager CSE is unlicensed. Those which do not have this listed means that the policy will be honored
when the Endpoint Policy Manager CSE is licensed for Endpoint Policy Manager Least Privilege
Manager.

![965_5_image-20230627091218-9_950x211](/images/endpointpolicymanager/integration/965_5_image-20230627091218-9_950x211.webp)


