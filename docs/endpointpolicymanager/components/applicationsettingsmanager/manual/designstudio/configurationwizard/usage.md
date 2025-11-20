---
title: "Using the Configuration Wizard"
description: "Using the Configuration Wizard"
sidebar_position: 30
---

# Using the Configuration Wizard

Netwrix Endpoint Policy Manager (formerly PolicyPak) DesignStudio Configuration Wizard is a lite
capture tool. When the Configuration Wizard runs, it takes a snapshot of all the items in your data
root, asks you to make some changes, and then captures what you've done. Then it sets your element's
settings. To perform these tasks, the Configuration Wizard may ask you some questions about the
current state of the application first. For instance, it may asked if a checkbox is currently
checked or unchecked, as shown In the figure shown.

![configuring_elements_using_7](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/configuring_elements_using_7.webp)

The figure shown. Selecting whether a checkbox is checked or unchecked.

This is to make sure nothing has changed from when the Capture Wizard captured the application's UI
settings. If you look at the actual application and the setting is checked, changed, or otherwise
altered, then change the Configuration Wizard, not the application.

Once the current state is verified (or changed within the Configuration Wizard), the Configuration
Wizard will ask you to perform a series of steps on the element, such as the following:

- For checkboxes, you will be asked to check the box, then click "OK" in the application. Next you
  will click "Next" in the wizard. Then, you'll be asked to uncheck the box, and click "OK" in the
  application. Then you will click "Next" in the wizard.
- For radio buttons, you will be asked to select each radio button and click "OK" in the
  application. Then you will click "Next."
- For sliders and spinboxes, you will be asked to select the minimum value, the next least value
  (step), and the maximum value. You will click "OK" in the application between each step.

Other item types will have similar procedures. You must click "Apply" or "OK" inside most
applications in order to write the value back to the computer. Occasionally, some applications'
values are only stored in memory and only get changed to the registry or disk when the application
is fully closed. This means you might have to open and close the application dozens of times.

If you click "Next" in the wizard but the wizard was unable to detect any changes, it will tell you
that no changes were detected, as shown In the figure shown.

![configuring_elements_using_8](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/configuring_elements_using_8.webp)

The figure shown. The message to indicate no changes were detected.

To resolve this, you can try doing the following:

- Click "No" in the dialog box to try again.
- Ensure you've clicked "Apply" or "OK" in the application and then continue onward with the wizard
  to see if it detects the change.
- Select "No," then try closing the target application altogether. Sometimes the application's items
  are stored in memory and only written to disk when the application is fully closed. After closing
  the application, click "Next" in the wizard to see if the change was detected.

If you've you continued to proceed onward, and there are still no detected changes, then the data is
not stored within the data root selected earlier. Even if 80% of an application's settings are
stored within the same place (such as` HKEY_Current_User\Software\<vendor>\<application>`), a
fraction of the settings may be stored in a different file or a different part of the registry. The
Capture Wizard cannot detect all changes on your hard drive; it has to be told where to look. So, if
you're still having problems, go back to the previous section of this guide entitled "Setting Up
Application Configuration Data," which uses Microsoft's Process Monitor to discover where settings
are being stored when you change data.

If the wizard discovers exactly one change, you can continue onward to the next step as this is a
sign of a successful discovery. The wizard will usually ask you to confirm the following:

- Each state (every radio button, checkbox, slider, etc.).
- Default value and what to do when you turn this setting on.
- Revert value and what to do when you turn this setting off.
- Linked label (for text boxes, numeric boxes, spinboxes, and some others). This helps with GPMC
  reporting. Because a text box or numeric box is a box, it has no text of its own to describe
  itself. Usually, however, there is something on the page that represents the item. The linked
  label is some other text on the page (a label) which describes what the setting does.

If the wizard discovers one change perfectly, you can easily go through the Configuration Wizard for
the element. If the wizard detects multiple changes during configuration, you are prompted for what
to do.



