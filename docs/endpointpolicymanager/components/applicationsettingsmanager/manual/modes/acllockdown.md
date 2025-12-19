---
title: "ACL Lockdown™ Mode"
description: "ACL Lockdown™ Mode"
sidebar_position: 50
---

# ACL Lockdown™ Mode

:::note
For a demonstration of the ACL Lockdown™ Mode feature, please see this video:
[ACL Lockdown for Registry Based Applications](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/acllockdown.md).
:::


ACL Lockdown mode can be seen when you right-click a setting within an AppSet (See the figure here).

![policypak_application_settings_1_13](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_13.webp)

The figure shown. Selecting the ACL Lockdown setting.

This is a very powerful Endpoint Policy Manager Application Settings Manager feature; it increases
your application's security. When it is selected, two things occur:

- This mode prevents any changes to the application—even while the application is running. Note that
  this is true for most (but not all) applications. Exceptions and problems are usually noted in the
  AppSet's readme file.
- While the application is not running, clever "power users" cannot work around your settings by
  manually changing them in the Registry or files.

When ACL Lockdown™ mode is selected on a Endpoint Policy Manager Application Settings Manager
element, Endpoint Policy Manager Application Settings Manager will take ownership of the portion of
the user's Registry or files involved in the application.

This literally prevents users (or other applications) from modifying your setting. It gives your
application a steady state where users are not permitted to work around your settings (whether
they're online or offline, or the machine is running or not running).

When you select "Perform ACL Lockdown" using Endpoint Policy Manager Application Settings Manager,
Endpoint Policy Manager Application Settings Manager will automatically figure out which additional
elements within the ApSet share the same file or Registry container.

For instance, in WinZip, if you right-click "Minimum password length" and select "Perform ACL
Lockdown," Endpoint Policy Manager will automatically select it for all other items in the AppSet
that share the same location in the Registry (See the figure here). If you right-click any of the
checkboxes in the Passwords tab, you can see that "Perform ACL Lockdown" will be already checked,
because all the elements on this page are within the same portion of the Registry.

![policypak_application_settings_1_14](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_14.webp)

The figure shown. With "Perform ACL Lockdown" selected, all password options are automatically checked.

However, clicking on another tab—such as Cameras—and right-clicking a setting will show that
"Perform ACL Lockdown" is not set (See the figure here).

![policypak_application_settings_1_15](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_15.webp)

The figure shown. If other tabs are selected, "Perform ACL Lockdown" will not be set.

This is because the items within the Cameras tab are located in a different place in the Registry
than the items in the Passwords tab.

To reiterate, if an application's data is stored in a file, then usually ALL items within the AppSet
will be locked when "Perform ACL Lockdown" is selected. In the example shown In the figure shown, "Perform
ACL Lockdown" is selected for one Firefox setting.

![policypak_application_settings_1_16](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_16.webp)

The figure shown. "Perform ACL Lockdown" is selected for one Firefox setting.

However, because all the settings within Firefox are stored in the same file, they will be
uneditable by the end user.

When the GPO no longer applies, the ACL Lockdown settings that were originally on the Registry or on
the files are returned to the state they were in before Endpoint Policy Manager took ownership.



