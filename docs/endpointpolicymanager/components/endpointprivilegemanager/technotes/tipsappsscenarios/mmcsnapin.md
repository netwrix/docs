---
title: "How do I elevate MMC snap ins without granting administrative rights?"
description: "How do I elevate MMC snap ins without granting administrative rights?"
sidebar_position: 30
---

# How do I elevate MMC snap ins without granting administrative rights?

A standard user may not be able to run an MMC console without elevated rights. For instance, a
standard user does not have the ability to start, stop, or change the configuration within any
service. This article takes you through the process to create a policy to allow this and other items
similar to this.

**Step 1 –** Create a new GPO or edit an existing one.

**Step 2 –** Expand the Endpoint Policy Manager node and select **Least Privilege Manager**.

:::note
User or Computer policies may be used, but general recommendation is to target to users.
:::


**Step 3 –** Create a new **New Executable Policy**.

![203_1_image-20200229095829-1](/images/endpointpolicymanager/leastprivilege/elevate/203_1_image-20200229095829-1.webp)

**Step 4 –** Select **Use combo rule (advanced)** and click **NEXT**.

![203_3_image-20200229095829-2](/images/endpointpolicymanager/leastprivilege/elevate/203_3_image-20200229095829-2.webp)

**Step 5 –** Select **Apply command-line arguments**, leaving everything else as-is and click
**NEXT**.

![203_5_image-20200229095829-3](/images/endpointpolicymanager/leastprivilege/elevate/203_5_image-20200229095829-3.webp)

**Step 6 –** Under **Path Condition**, click **Add** > **Add file** **...**

![203_7_image-20200229095829-4](/images/endpointpolicymanager/leastprivilege/elevate/203_7_image-20200229095829-4.webp)

**Step 7 –** In the Path field, type in `*\mmc.exe"` and click **OK**.

![203_9_image-20200229095829-5](/images/endpointpolicymanager/leastprivilege/elevate/203_9_image-20200229095829-5.webp)

**Step 8 –** Click on **Command-line Arguments**, select **Strict equality**, and under
**Arguments** type in the exact path to `services.msc` ("`C:\Windows\system32\services.msc`") and
click **NEXT**.

![203_11_image-20210521112229-2](/images/endpointpolicymanager/leastprivilege/elevate/203_11_image-20210521112229-2.webp)

**Step 9 –** Ensure "**Run with elevated privileges**" is selected and click **NEXT**.

![203_12_image-20200229095829-7](/images/endpointpolicymanager/leastprivilege/elevate/203_12_image-20200229095829-7.webp)

**Step 10 –** Name it according to your conventions (e.g. "`Elevate Services.msc`") and click
**FINISH**.

:::note
Users will not acquire this new GPO until Group Policy is refreshed on the user's computer
either through automatic or manual means.
:::


## TESTING

To test this out, you can use the RUN command.Be sure to type in the exact command you've specified
in step 8. Only then will elevation occur.

![203_14_image001_950x730](/images/endpointpolicymanager/leastprivilege/elevate/203_14_image001_950x730.webp)

Additionally, you can test with a command prompt. Again, the command has to match exactly.

![203_15_image002_950x541](/images/endpointpolicymanager/leastprivilege/elevate/203_15_image002_950x541.webp)

:::note
If you attempt other avenues, like from the Start menu or alternate command lines, they
will not work. In the example below it does not work because it is notthe exact same command line.
:::


![203_16_image003_950x496](/images/endpointpolicymanager/leastprivilege/elevate/203_16_image003_950x496.webp)

In order to make this work, you need to specify a second policy with alternate approved command
lines. For instance, you could do this, which removes the requirement for
`c:\windows\system32\services.msc`

![203_17_image004_950x475](/images/endpointpolicymanager/leastprivilege/elevate/203_17_image004_950x475.webp)

The result would be that the shorter command line:` mmc services.msc` is accepted and runs elevated.

![203_18_image005_950x579](/images/endpointpolicymanager/leastprivilege/elevate/203_18_image005_950x579.webp)

However, at no time would the shortest expression, of only "`services.msc`" work. The required MMC
must appear before the command line.

![203_19_image006_950x612](/images/endpointpolicymanager/leastprivilege/elevate/203_19_image006_950x612.webp)


