---
title: "Removing AppLock™ GUIDs"
description: "Removing AppLock™ GUIDs"
sidebar_position: 80
---

# Removing AppLock™ GUIDs

Some applications embrace the idea of Netwrix PolicyPak AppLock™
tab hiding, but won't honor PolicyPak AppLock™. For instance, Firefox has tabs, but
doesn't honor PolicyPak AppLock™ in practice. For this reason, in the GPO, this would
not be honored when affecting the client, as shown In the figure shown.

![removing_applock_guids](/images/policypak/applicationsettings/designstudio/removing_applock_guids.webp)

The figure shown. An example of an application that does not honor PolicyPak AppLock™.

Another application that does not honor PolicyPak AppLock™ is Acrobat Reader, as
shown In the figure shown, since it doesn't have tabs at all.

![removing_applock_guids_1](/images/policypak/applicationsettings/designstudio/removing_applock_guids_1.webp)

The figure shown. Example of an application without any tabs.

For this reason, trying to disable the tab in the GPO doesn't make much sense (See the figure here).

![removing_applock_guids_2](/images/policypak/applicationsettings/designstudio/removing_applock_guids_2.webp)

The figure shown. Disabling tabs does not work for applications that do not have tabs.

In these cases, you might want to remove the AppLock™ GUIDs from the project so that it is not
possible to right-click on a tab in the Group Policy MMC. To do that, follow the steps presented in
The figure shown.

![removing_applock_guids_3](/images/policypak/applicationsettings/designstudio/removing_applock_guids_3.webp)

The figure shown. Disabling AppLock™ GUIDs.

When you do this, each tab in the compiled project will no longer have the option to "Disable whole
tab in target application" or "Force display of whole tab in target application," as shown in
The figure shown.

![removing_applock_guids_4](/images/policypak/applicationsettings/designstudio/removing_applock_guids_4.webp)

The figure shown. AppLock™ GUIDs have been removed.



