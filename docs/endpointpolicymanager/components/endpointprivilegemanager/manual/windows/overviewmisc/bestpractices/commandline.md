---
title: "Creating and Using Command Line Rules"
description: "Creating and Using Command Line Rules"
sidebar_position: 40
---

# Creating and Using Command Line Rules

From time to time, you may encounter a situation in which an application only runs from the command
line, or there is an application that you want to run with specific command-line arguments. This
could occur in day-to-day use or with items that must run from a logon script and perform the task
with elevated rights.

:::note
See the
[Prevent Users Running some commands with command lines](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/howtoandtechsupport/preventusercommands.md)
video for an overview of using Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager
and command-line arguments.
:::


A good example would be enabling standard users to start and stop services with a command line, or
to run the Performance Monitor’s Resource Monitor. Both must be executed from the command line.

A Combo rule addresses this issue, by using Path and Command-line argument rules.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_command.webp)

The first step, as shown here, is to specify the Path Condition, such as
`%SYSTEMROOT%\System32\sc.exe`.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_command_1.webp)

For the command-line arguments in this example, the argument **stop wsearch**, which stops the
Windows Search Service, is specified.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_command_2.webp)

For **Check Mode**, there are four choices:

- Strict empty - Command must have no arguments.
- Strict equality - This means the Command and Rule will be elevated (or otherwise run) when the
  arguments are exactly as you specify in the same order, with no variance.
- Ignore arguments order - This means the Command and Rule will be elevated (or otherwise run) when
  all the arguments are in place, regardless of the order.
- Any argument from the list - This means that any argument in the Arguments box (separated by
  spaces) is allowed in the command.

:::note
Ignore arguments order and **Any argument from the list** only work when the command has
slash-based switches. If the command line doesn’t have slashes, then use the **Strict equality**
method.
:::


On the next screen, for **Action**, select **Run with elevated privileges**.

The net result is that **standard users** can now stop the `wsearch` service without needing
elevated rights.

![A computer screen with a black and white text Description automatically generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_command_3.webp)

Another example would be to enable Standard Users to perform their own Registry merge. To do this,
make a Combo rule, which starts with the Path Condition running `%SYSTEMROOT%\System32\reg.exe` (not
shown).

For the Command-line Arguments, select **Strict equality**, and then specify the location of the
.REG file, perhaps on a secure file server, as demonstrated here.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/rules/creating_and_using_command_4.webp)

Since the arguments are being specified, a user cannot add their own .REG files; they can only add
those specified by the admin (e.g., on a server where they could only read and not modify it).



