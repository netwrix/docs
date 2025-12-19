---
title: "Denying UWP Applications"
description: "Denying UWP Applications"
sidebar_position: 20
---

# Denying UWP Applications

:::note
For an overview of how to manage UWP applications, see the
[Manage, block and allow Windows Universal (UWP) applications](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/howtoandtechsupport/windowsuniversalapplications.md)
video.
:::


Endpoint Policy Manager can be used to manage Universal Windows Platform (UWP) applications,
allowing you to block one or more applications. To do this, select **Add** > **New UWP Policy**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_uwp_applications.webp)

There are several options for managing UWP apps:

- You can create a policy for all UWP apps.
- You can create a policy for just Microsoft Store UWP apps.
- You can create a policy for sideloaded or Enterprise apps.

Here we have chosen the option for **All UWP apps**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_uwp_applications_1.webp)

Next, you can deny execution for all of the apps at one time, or allow and log them, as shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_uwp_applications_2.webp)

If you choose to deny the apps, you must select your desired deny action. In this example, the
default Windows block message will pop up when a user attempts to open any UWP application.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_uwp_applications_3.webp)

Using the other options for managing apps, you can block all Microsoft Store apps, or all Enterprise
UWP apps at one time in a similar fashion. You can also allow or block specific UWP apps as well.
You might want to create one policy that blocks all UWP apps and then supplement it with other rules
that allow specific UWP apps. You also might want to create rules that only block designated apps.
To choose to block only designated apps, select the **Specific UWP apps** option.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_uwp_applications_4.webp)

Next, you will need to provide some information about the app, such as the Package Name and
Publisher. You can retrieve this information by either pointing to it using the **Select an
installed app** button, or by running the Get-AppxPackage command in an elevated PowerShell session.
This command will list all of the installed UWP apps on a given machine. Then you can populate the
required information to manage the Microsoft Xbox app has been entered.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_uwp_applications_5.webp)

Next, finish creating the policy by selecting the block/allow action and further targeting the
policy.

In general, most people will want to use this option to block all UWP applications while letting
some applications continue to work. This can be done with two stacked rules. In this example, all
UWP applications are denied, but then applications with "Calc" or "Store" in the name, or "Adobe" as
the publisher are allowed to run as shown below.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_uwp_applications_6.webp)



