---
title: "How can I allow \"Inline commands\" blocked by SecureRun when a random path or filename is created each time?"
description: "How can I allow \"Inline commands\" blocked by SecureRun when a random path or filename is created each time?"
sidebar_position: 10
---

# How can I allow "Inline commands" blocked by SecureRun when a random path or filename is created each time?

On occasion, applications will pass inline commands that contain a randomly generated path or batch
filename. As an example, for demonstration purposes, this command will open a prompt to start
camplay.exe in a ‘random' location

cmd /c C:\temp\Random014\camplay.exe

With Secure run enabled, the following message is displayed:

![804_1_image-20210819150136-1](/images/endpointpolicymanager/leastprivilege/securerun/804_1_image-20210819150136-1.webp)

To allow this process to work and CamPlay to run, it's not camplay.exe that must be allowed in this
example, it's cmd.exe.

To that end, there are two options that you could take:

- Create an Allow and Log rule to allow cmd.exe and everything that is called to run through
  it (possibly dangerous and not recommended)
- Create an Allow and Log rule with conditions to limit the scope (recommended)

Focusing on #2, below is a common example of how to set up a policy to allow the inline command to
run with a random path.

**Step 1 –** Add a **New Executable Policy**

![804_2_image-20210819150136-2](/images/endpointpolicymanager/leastprivilege/securerun/804_2_image-20210819150136-2.webp)

**Step 2 –** Select **Combo Rule**

![804_3_image-20210819150136-3](/images/endpointpolicymanager/leastprivilege/securerun/804_3_image-20210819150136-3.webp)

**Step 3 –** Select **Path**, **Command line**, and at least one other Condition to guard against a
fraudulent parent process (cmd.exe in this case).

![804_4_image-20210819150136-4](/images/endpointpolicymanager/leastprivilege/securerun/804_4_image-20210819150136-4.webp)

:::note
Either **Hash** or **File Info** may be used in addition to, or instead of,
**Signature**, but it is recommended at least one or more conditions be used in addition
to the command-line arguments.
:::


:::note
**Apply to child processes** may or may not be required, but removing this checkbox limits
the scope further. For this example, however, it was required.
:::


**Step 4 –** Set up your **Path Condition**: be as specific as possible

![804_5_image-20210819150136-5](/images/endpointpolicymanager/leastprivilege/securerun/804_5_image-20210819150136-5.webp)

**Step 5 –** Set your secondary conditions: **Signature**, in this example

![804_6_image-20210819150136-6](/images/endpointpolicymanager/leastprivilege/securerun/804_6_image-20210819150136-6.webp)

**Step 6 –** Set your **Command-line Condition**: Use **Strict equality** and set the
Arguments using the wildcard character "\*" to replace any randomized, or user-specific sections of
the path or filename. Be as specific as possible while still allowing for any variation that may
come up in the path. In this example, \Random014\ was replaced by \Random\*\

![804_7_image-20210819150136-7](/images/endpointpolicymanager/leastprivilege/securerun/804_7_image-20210819150136-7.webp)

:::note
"\*" is the only supported wildcard character.
:::


:::note
**Ignore arguments case** should be checked by
default![804_8_image-20210819150136-8](/images/endpointpolicymanager/leastprivilege/securerun/804_8_image-20210819150136-8.webp)
:::


**Step 7 –** Set action as needed: generally, either **Allow and Log** (this example) or **Run with
elevated Privileges** (if needed)

![804_9_image-20210819150136-9](/images/endpointpolicymanager/leastprivilege/securerun/804_9_image-20210819150136-9.webp)

:::note
For security and compatibility reasons, only elevate if necessary to do so.

:::


