---
title: "Non-Standard Captures"
description: "Non-Standard Captures"
sidebar_position: 10
---

# Non-Standard Captures

Some applications have a non-standard interface. The interface can still be captured, but the
results may not be quite what you expect. In the figure shown, the left side of the screen shows the actual
application, Adobe Reader, and the right side of the screen shows the first captured tab.

![crafting_the_user_interface_3](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/manualedits/crafting_the_user_interface_3.webp)

The figure shown. Some applications may not be captured as expected.

Adobe Reader, unlike most applications, does not use tabs for its interface. It uses a long, bar
with categories in it, which gets captured along with the other elements on the page. Since this
categories bar isn't something you can use inside Endpoint Policy Manager DesignStudio, you might
want to clean up this capture after you've captured all the settings you want. We'll discuss how to
do this in a bit.

To continue to capture more settings, click on the "Capture another tab" button. When you capture
another tab, Endpoint Policy Manager DesignStudio realizes that this application doesn't really use
tabs, so you are prompted to manually enter the name of each of this application's categories, as
shown In the figure shown and The figure shown.

![crafting_the_user_interface_4_624x410](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/manualedits/crafting_the_user_interface_4_624x410.webp)

The figure shown. The prompt to manually enter the name of the categories.

![crafting_the_user_interface_5_624x185](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/manualedits/crafting_the_user_interface_5_624x185.webp)

The figure shown. Manually adding the categories.

You can see In the figure shown that Endpoint Policy Manager Capture Wizard also captures the categories
bar even though it is not an element we want on the page.

![crafting_the_user_interface_6](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/manualedits/crafting_the_user_interface_6.webp)

The figure shown. The captured categories bar.

You can delete the errant settings by right-clicking on them and selecting "Delete," or by
highlighting them and pressing the Delete key on the keyboard. You can choose to delete all items
within the frame, or promote the items in the frame directly to the tab. In this case, you'll likely
want to delete all the elements in the frame. You can then reposition the other frames on the page
and manually align them. You can also use the Hierarchy tab's "Realign controls to fit the page"
button to auto-place and center the items on the form, as shown In the figure shown.

![crafting_the_user_interface_7](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/manualedits/crafting_the_user_interface_7.webp)

The figure shown. Centering the items on the form.

The result is shown In the figure shown. However, there is a problem with the name of the category. It
should be called General instead of Preferences.

![crafting_the_user_interface_8](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/manualedits/crafting_the_user_interface_8.webp)

The figure shown. An incorrect tab name.

To rename a tab (or any element), click on it (select the Properties tab) and then, in the Name box,
type in the correct name. In this example, you would replace the name "Preferences" with "General,"
as shown In the figure shown.

![crafting_the_user_interface_9](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/manualedits/crafting_the_user_interface_9.webp)

The figure shown. Changing the tab name.



