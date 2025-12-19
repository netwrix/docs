---
title: "What Not to Do (Some Examples)"
description: "What Not to Do (Some Examples)"
sidebar_position: 10
---

# What Not to Do (Some Examples)

Let's say you want to allow users to install Google Earth on their machines. To make it easy, you
could select the application's **Signature** as the rule condition and then check **Apply to child
processes** (which is the default.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/what_not_to_do_some_examples.webp)

While these settings would ensure that the install would run uninhibited without UAC prompt
interruptions, you would also be allowing all applications that have that signature to install as
well as allowing additional child processes. The rule as stated would also allow Chrome to install
with admin rights, which could make it an attack vector for bad actors..

As such, Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager editor will give you a
warning and a recommendation against attempting this.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/what_not_to_do_some_examples_1.webp)

Saying **Yes** generates an additional rule match for File info condition enabling you to get more
specific than just **Signature** alone. This is the Endpoint Policy Manager (formerly PolicyPak)
Least Privilege Manager Best Practice: **Signature Condition** and **File Info condition**. Endpoint
Policy Manager (formerly PolicyPak) Least Privilege Manager UI is requesting you create a Combo Rule
(more details later.)

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/what_not_to_do_some_examples_2.webp)

Therefore, it is important not to take shortcuts. Size your privilege levels accordingly, allocating
the least amount of privilege possible in order to get the job done.

Additionally, and similarly, don’t create rules which automatically elevate “Everything by Microsoft
by certificate.” Most applications, including most of Windows and Office, are not designed to be
running elevated all the time. As such you are breaking applications and opening up to attack
vectors.

Equally bad is elevating entire programs and/or folders which might not need elevating. For
instance, a developer package, Cygwin has hundreds of little utilities in it like.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/what_not_to_do_some_examples_3.webp)

But very few require elevation. A common mistake is to elevate all files in the folder making it
easy for the admin and for the user.

![A screenshot of a computer

Description automatically
generated](/images/endpointpolicymanager/leastprivilege/bestpractices/what_not_to_do_some_examples_4.webp)

However, giving full admin rights on all these utilities, without understanding the ramifications,
could open the door to attacks.

In summary, use Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager as its name
suggest: for the Least Amount of Privileges required.

:::warning
Avoid taking shortcuts by elevating everything by signature or whole folder- even if it
takes a little more work to make the exact rules you need for the least amount of privilege required
for users to do their jobs.

:::



