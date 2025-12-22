---
title: "Creating and Using Executable Combo Rules"
description: "Creating and Using Executable Combo Rules"
sidebar_position: 30
---

# Creating and Using Executable Combo Rules

In previous examples, we reviewed Simple rules and started to dip our toes into Combo Rules.

Simple rules are often all you need to get the job done. However, sometimes you need a bit more
tuning. In previous examples, Endpoint Policy Manager Least Privilege Manager UI prompted you to
create Combo rules, because it was detecting a non-Best Practice.

A Simple rule can be any one of these items:

- Path (name or location)
- Hash (fingerprint of the file)
- Signature (digital signature of the file)
- File info (file attributes)

This can be limiting if, for instance, you want to elevate an application by its name and ensure the
file is digitally signed by a publisher. Combo rules exist for this reason.

However, you can start off on the right foot by making your own Combo rules.

:::note
See the
[More security with Combo Rules](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/howtoandtechsupport/securitycomborules.md) video for an
overview of using Endpoint Policy Manager Least Privilege Manager and Combo rules.
:::


![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_executable.webp)

With Combo rules turned on, you can match more than one condition.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_executable_1.webp)

Combo rules are useful in a variety of situations. The most common situation occurs when you want to
elevate an application to allow it to run or install. You can do this based on its digital signature
and inner product info. You could use all four conditions if you want to make the tightest match
possible.

To do this, simply create a Combo rule and select the two (or more) types of characteristics. Again,
the most secure method is **Signature** and **File Info**.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_executable_2.webp)

The Combo rule wizard is different from the Simple rule wizard. For this combo rule we will need to
complete two steps. As you can see, a specific file as a reference file for Signature Condition.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_executable_3.webp)

In the next step of the wizard for File Info, select the same file. You could also select a
different file, but this isn’t normally done.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_executable_4.webp)

Then choose the same actions as before, such as **Run with elevated privileges**. When the wizard is
complete, the MMC list will demonstrate the multiple conditions in the **Condition** column with
**Signature, File Info**.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_executable_5.webp)



