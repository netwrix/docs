---
title: "Is Least Privilege Manager compatible alongside an existing installation of Microsoft Applocker?"
description: "Is Least Privilege Manager compatible alongside an existing installation of Microsoft Applocker?"
sidebar_position: 40
---

# Is Least Privilege Manager compatible alongside an existing installation of Microsoft Applocker?

In short, yes. AppLocker will generally take effect in double-click scenarios and be the mechanism
that performs blocking the application. This has implications and workarounds if you want to add
Netwrix PolicyPak Least Privilege Manager to an existing
Microsoft Applocker deployment.

## Least Privilege Manager Direct Rules

Here is a PolicyPak Least Privilege Manager direct rule which would take effect when a
user double-clicks an application, like Procmon, which would normally throw a UAC prompt.

![947_1_image-20230714222620-1_950x537](/images/policypak/integration/947_1_image-20230714222620-1_950x537.webp)

The result is that a double-click of the application is still blocked by Applocker as shown here.

![947_2_image-20230714222621-2_950x527](/images/policypak/integration/947_2_image-20230714222621-2_950x527.webp)

However, the user may be taught to right-click and **Run with PolicyPak** which will then perform
the direct rule operation and elevate the application. An example of the steps can be seen here.

![947_3_image-20230714222621-3_950x565](/images/policypak/integration/947_3_image-20230714222621-3_950x565.webp)

:::note
The **Apply on demand** checkbox for direct rules will have no effect while Applocker is
running.
:::


![947_4_image-20230714222621-4_950x548](/images/policypak/integration/947_4_image-20230714222621-4_950x548.webp)

## PolicyPak Admin Approval and AppLocker

When PolicyPak Admin Approval is on, once again, double-click is blocked by Applocker.

However, right-clicking **Run with PolicyPak** provides the Admin Approval prompt. Both Short codes
and Long codes work as expected.

![947_5_image-20230714222621-5_950x498](/images/policypak/integration/947_5_image-20230714222621-5_950x498.webp)

## PolicyPak and Self Elevate

![947_6_image-20230714222621-6_950x693](/images/policypak/integration/947_6_image-20230714222621-6_950x693.webp)

## PolicyPak SecureRun and Microsoft AppLocker

PolicyPak SecureRun is different from AppLocker because it can key off the file
ownership / SecureRun member.

![947_7_image-20230714222621-7_950x550](/images/policypak/integration/947_7_image-20230714222621-7_950x550.webp)

When SecureRun™ run alongside Applocker, there is no difference to the statements above, except
that you also get all the added benefits of SecureRun. This is not a recommended configuration but
it should work. Please consider retiring Applocker and using PolicyPak SecureRun. For
more in formation on why this is the recommended practice, see
[AppLocker Pros, Cons, and Alternatives](https://blog.netwrix.com/2021/12/02/applocker-pros-cons-and-alternatives/).


