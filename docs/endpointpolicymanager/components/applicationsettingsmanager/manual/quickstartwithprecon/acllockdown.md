---
title: "Locking Down the Use of Application Settings Manager ACL Lockdown™"
description: "Locking Down the Use of Application Settings Manager ACL Lockdown™"
sidebar_position: 50
---

# Locking Down the Use of Application Settings Manager ACL Lockdown™

In the example above, we changed some values, closed the application, and reopened it. We also saw
that PolicyPak Application Settings Manager automatically remediated the application's settings
again at relaunch.

In addition, Endpoint Policy Manager Application Settings Manager can perform ACL Lockdown™.

:::note
To see Endpoint Policy Manager Application Settings Manager ACL Lockdown™ in action,
watch this video:
[https://youtu.be/bSuxXH10vSAl](https://youtu.be/bSuxXH10vSA).
:::


ACL stands for Windows's Access Control List. ACLs are a built-in operating system function that
performs true lockout on sections of the Registry and files. With Endpoint Policy Manager
Application Settings Manager ACL Lockdown™ enabled, users literally cannot make or keep changes in
the effected pieces of the application.

**Step 1 –** To see ACL Lockdown in action, let's go back into the GPO and turn it on. To do this,
right-click "at least one lower case character (a-z)" and select "Perform ACL Lockdown," as seen in
The figure shown.

![policypak_application_settings_13](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_13.webp)

The figure shown. Selecting the "Perform ACL Lockdown" setting.

**Step 2 –** When you perform ACL Lockdown on one setting, the same portion of the Registry (or file
system) might contain more than one setting. For instance, all the items in the Passwords tab are
located in the same place in the Registry. Therefore, if you were to right-click any other setting
in the Passwords tab, you'll see that "Perform ACL Lockdown" is automatically checked for those
settings, as well.

On the client machine

- ensure WinZip is closed,
- run `GPupdate `(or log off and log back on) to get the new "signal" that you want to test ACL
  Lockdown™, and
- rerun WinZip.

**Step 3 –** ACL Lockdown is now working while the application is running. Now, go back to WinZip's
Options, select the Passwords tab, and uncheck the two checkboxes that are available, as shown in
The figure shown. Then click OK.

![policypak_application_settings_14](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_14.webp)

The figure shown. The Passwords tab in WinZip Options.

**Step 4 –** After that's done, immediately go back to Options and select the Passwords tab again.
Figure 16 shows that the user's desired changes did not take effect because Endpoint Policy Manager
Application Settings Manager has used ACL Lockdown™ to perform the lockout of the settings.

![policypak_application_settings_15](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_15.webp)

The figure shown. Using ACL Lockdown, the user's changes have not taken effect because the settings have
been locked.

For more information on ACL Lockdown™, see section, "ACL Lockdown™ Mode," in the next major
section in the manual.



