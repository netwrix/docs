---
title: "Quick Start - Using SecureRun™ to Block Threats and Unknown Software"
description: "Quick Start - Using SecureRun™ to Block Threats and Unknown Software"
sidebar_position: 20
---

# Quick Start - Using SecureRun™ to Block Threats and Unknown Software

:::note
For an overview of how to block threats and unknown software like malware and similar
applicates, see the
[Using Least Privilege Manager's SecureRun Feature](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/basicsandgettingstarted/feature.md)
video.
:::


In the previous section, we established that users with Standard rights and admin rights can end up
downloading both safe portable applications or unsafe malware applications. In addition, both Admins
and Standard Users can download MSI applications, even if they wish to install them later. To avoid
having unsafe applications being downloaded and used, Endpoint Policy Manager can ensure that
applications that were not properly installed by the admin, or in-house software deployment tool
will not run without the admin's approval. In this Quick Start example, all unknown applications and
MSI applications will be blocked, while one specific application will be allowed to run (with
standard, not elevated, rights).

## Understanding SecureRun

Endpoint Policy ManagerLeast Privilege Manager can block all items that are not properly installed
by the admin with the Endpoint Policy Manager SecureRun™ policy. To see how this works, let's first
create a new SecureRun™ policy in the GPO.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun.webp)

This will result in a new SecureRun™ policy editor, as displayed here. To turn on SecureRun click
**Enable** and then, if desired, , change the messaging from Default to Customized (or Silently.)

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_1.webp)

In the SecureRun™ Members list, you can review who and what has been added, including the defaults
members:

- Local computer administrator
- NT SERVICE\TrustedInstaller
- NT AUTHORITY\SYSTEM
- BUILTIN\Administrators

The members on this list are the people and system processes that usually install software. For that
reason, no regular users or groups are listed here because they do not normally install software.

:::note
Add system processes or accounts to the SecureRun Members list that properly install
software, such as Microsoft Endpoint Manager (SCCM and Intune), etc., to enable the software to
deliver applications without being prevented.
:::


When SecureRun™ is on, Endpoint Policy ManagerLeast Privilege Manager checks to see who owns the
file executable, MSI file, script, or Java JAR file. When users download files off the Internet or
copy them from a USB flash drive, they own the file, and since they aren't on the SecureRun™
Members list, Endpoint Policy Manager Least Privilege Manager will block all applications that they
have installed.

In the SecureRun™ policy editor, click **Ok**. You can then see that the SecureRun™ policy is
enabled and is checking for file ownership (aka “Trusted”), as shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_2.webp)

At the endpoint, run GPupdate or log on as a user who will receive the policy. The result is that
all unknown applications are blocked (like previously downloaded Notepad2), and all properly
installed applications are allowed.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_3.webp)

Additionally, MSI files that attempt to launch are also subjected to Endpoint Policy Manager
SecureRun™. If an application already has an Allow rule in place (similar to what we saw earlier
when we enabled SkypeSetup.MSI to run via a Hash rule), then it will continue to launch. But MSI
installers that don't have an Allow rule in place will be prevented from running, as show here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_4.webp)

This works because Endpoint Policy Manager Least Privilege Manager is enforcing the SecureRun™
Members list. If we look at who owns the file for the properly installed application, we can see the
owner is SYSTEM. If we look at who owns the file for the unknown application downloaded from the
Internet, we can see the owner is EastSalesUser1.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_5.webp)

If you review the list of users allowed to run applications, you will notice that EastSalesUser1 is
not on the list and, therefore, is not permitted to run Untrusted applications.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_6.webp)

If you decide you want to enable an application, such as Notepad2, to run, create a new Executable
rule (Path, Hash, Signature, or File) as shown in the previous section. This time, select **Allow
and log**. This will run the application with Standard User rights.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_7.webp)

The result can be seen in the MMC list view.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_8.webp)

As a test, run GPupdate on the endpoint, and then run Notepad2, which will run with Standard User
rights and bypass SecureRun™ as seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/quick_start_using_securerun_9.webp)

To recap, Endpoint Policy ManagerLeast Privilege Manager SecureRun™ operates under the following
criteria:

- The Endpoint Policy Manager Least Privilege Manager SecureRun™ policy checks every executable and
  MSI that the user attempts to run.
- If the user isn’t on the SecureRun™ Members list, they are not permitted to run it.
- Only executable applications, scripts, Java JAR files, and MSI files that have file owners on the
  SecureRun™ Members list are allowed to run.
- If an application (or other type) has an **Allow and Log** rule enabling its use, it is permitted.

The result is that Endpoint Policy Manager SecureRun™ blocks any executable or MSI that the user
downloads and tries to run but continues to let properly installed applications run.

:::note
An additional way to use Endpoint Policy Manager SecureRum™ is to also trap for anything
that is unsigned. See the
[Least Privilege Manager: Block All Unsigned with SecureRun](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/howtoandtechsupport/preventunsigned.md)
video for a demonstration.
:::


:::note
Remember, all Endpoint Policy Manager Least Privilege Manager rules, including SecureRun,
may be used with an MDM service, or your own management system like PDQ deploy For more information
on this topic, please see the
[Blocking Malware with Endpoint Policy Manager and PDQ Deploy](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/methods/pdqdeployblockmalware.md)
video demonstration.

:::



