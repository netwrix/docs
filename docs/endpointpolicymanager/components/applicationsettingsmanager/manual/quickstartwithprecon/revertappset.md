---
title: "Reverting the AppSet"
description: "Reverting the AppSet"
sidebar_position: 60
---

## Reverting the AppSet

Let's simulate what would happen if the user changes job roles or the GPO is no longer applied.

**Step 1 –** Find the account you're using within the OU. Use Active Directory Users and Computers
to move the account to another OU. Find the account, right-click on it, and select "Move," as seen
In the figure shown.

![policypak_application_settings_16](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_16.webp)

The figure shown. Moving user accounts to a different OU.

**Step 2 –** Move the user account to an OU that will not be affected by the GPO. Then, as the user
on the target computer, log off and then log back in. Since the GPO no longer affects the location
that this user has access to, the GPO's settings should revert when applicable. The results should
be as follows:

- The AppLock is gone (indicating that all checkboxes and Cameras are clickable).
- The "Minimum password length" spinbox is unlocked and is now changeable.
- The first checkbox has reverted to original value (unchecked).
- Other checkboxes are left as they are (not reverted).
- Users can manage all settings now that Endpoint Policy Manager Application Settings Manager ACL
  Lockdown™ has been removed.

Results are shown In the figure shown.

![policypak_application_settings_17](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_17.webp)

The figure shown. The settings have been reverted to their original values.

Congratulations! This completes your initial Quickstart of Endpoint Policy Manager Application
Settings Manager with Endpoint Policy Manager DesignStudio. Continue onward to learn about
additional Endpoint Policy Manager Application Settings Manager features.

Jump to the section, "Endpoint Policy Manager Application Settings Manager: DesignStudio
Quickstart," in Appendix B: Endpoint Policy Manager Application Manager DesignStudio Guide if you'd
like to take the Quickstart tour of how to create your own AppSets for your own applications.



