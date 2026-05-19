---
title: "PolicyPak ARM Support Supportability Statement"
description: "PolicyPak ARM Support Supportability Statement"
sidebar_position: 60
---

# PolicyPak ARM Support Supportability Statement

As of build 23.11, Netwrix PolicyPak generally the ARM family of
processors when used alongside Windows 11 Home or Pro editions. This support includes the PolicyPak CSE, the PolicyPak MMC console, Licensing Tool, and all Extras tools
(except for PolicyPak DesignStudio).

:::note
ARM support will generally ship 4 times per year, and lag somewhat behind normal builds.
The latest ARM build will always be in the download so you'll never need to guess which one is
latest. Note that there are a variety of ARM processors.
:::


ARM processors are capable of running the following application types:

- ARM64 Applications
- ARM32 Applications
- X64 Applications via emulation
- X32 Applications via emulation

:::note
ARM processors emulate X64 and X32 applications via Emulation. ARM32 applications may or
may not be able to be run based upon the processor you are using. For instance, in this example, a
Surface Pro X can run `c:\windows\SysArm32\Calc.exe`, but a Mac M1 cannot run that same problem
(both examples are below).
:::


![992_1_image-20231203190233-1_950x681](/images/policypak/requirements/support/992_1_image-20231203190233-1_950x681.webp)

![992_2_image-20231203190233-2_950x744](/images/policypak/requirements/support/992_2_image-20231203190233-2_950x744.webp)

:::note
When PolicyPak CSE is installed we will not install some components which
don't apply when the processor is determined to be unable to run ARM32 applications.

:::

