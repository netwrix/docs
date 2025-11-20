---
title: "Items That Cannot Be Managed"
description: "Items That Cannot Be Managed"
sidebar_position: 40
---

# Items That Cannot Be Managed

Endpoint Policy Manager Application Settings Manager can control a lot of items; however, there are
some UI elements that it cannot manage. In the figure shown, the "Reset All Warnings" button in this
application, which might reset settings within the application, isn't something that Endpoint Policy
Manager Application Settings Manager can control. Inside Endpoint Policy Manager Application
Settings Manager, it will take up space but will not do anything. With elements like this, you have
three options:

- Delete the element since it has no function.
- Right-click the element and uncheck "Enabled" (shown In the figure shown), which will make the item gray
  and unclickable when it is used within the Group Policy editor.
- Leave the element as it is.

![crafting_the_user_interface_15_624x362](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/manualedits/crafting_the_user_interface_15_624x362.webp)

The figure shown. Dealing with elements that cannot be controlled with Application Settings Manager.

Leaving it as it is usually the best idea since you can still control its AppLock™ properties using
Group Policy. For this element, if you do nothing here in Endpoint Policy Manager DesignStudio, then
later, in the Group Policy Editor, you can still right-click over this button and hide or disable it
from a user. There will be no way to make it do precisely what you want (such as resetting all
warnings), but you will still be able to lock or remove the button so the user cannot use it inside
the application.



