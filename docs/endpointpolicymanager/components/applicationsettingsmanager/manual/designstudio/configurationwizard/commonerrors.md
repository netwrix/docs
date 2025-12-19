---
title: "Common Errors When Using the Wizard"
description: "Common Errors When Using the Wizard"
sidebar_position: 40
---

# Common Errors When Using the Wizard

Here are three common errors that can occur when using the Configuration Wizard. Let's explore those
now.

## Two Items Selected

If you inadvertently checked two checkboxes when making changes, as shown in the top window of
Figure 116, the Configuration Wizard detects both changes and asks you which one you intended to
make. If you know which one you wanted to select, you can check the corresponding box in the wizard.
In the example below, we want to choose "passwordreqlower," as shown In the figure shown.

![configuring_elements_using_9](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/configuring_elements_using_9.webp)

The figure shown. Selecting which of the two boxes was intended to be checked.

You can also cancel the Configuration Wizard, and start over again if you see lots of unfamiliar
settings and are unsure of which to choose.

## Unexpected Changes

Sometimes setting one element (checkbox, dropdown, etc.) will add a lot of unexpected values to the
application. For instance, clicking this one checkbox In the figure shown below added what appears to be
five changes.

![configuring_elements_using_10](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/configuring_elements_using_10.webp)

The figure shown. Unexpected changes after selecting an element.

Usually, this happens when the first item in an application is written. The application will make a
bunch of assumptions and write those items as a baseline. When this happens, you can either choose
the correct setting (based on the choices that are shown) or cancel the Configuration Wizard and
start again. To start again, put the checkbox (or dropdown, etc.) back to the original location,
click "Apply" or "OK" in the application to re-write the original setting, then restart the
Configuration Wizard. Doing so will isolate the one change that the checkbox (dropdown, etc.) is
really changing. A successful attempt is shown In the figure shown. Instead of five changed values, there
is only one.

![configuring_elements_using_11](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/configuring_elements_using_11.webp)

The figure shown. A successful attempt at making changes after the Configuration Wizard has been
restarted.

This scenario is very common. So, if you see activity that doesn't make sense, close the
Configuration Wizard, reset the item inside the application, and try to isolate the change down to
one changed value.

## Multiple Values Controlling One Element

Sometimes one element (checkbox, dropdown, etc.) will actually control multiple values at the same
time. In the example In the figure shown, "Default page layout" has four possible settings. When one of
those settings, "Facing," is selected, the wizard detects two changes as shown.

![configuring_elements_using_12](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/configuring_elements_using_12.webp)

The figure shown. Two changes being detected for one element.

The wizard may suggest that both changed values are valid. In this case, "Showmode" and "HasFacing"
are indeed being set by the change of this element, so ensuring both checkmarks are checked and
continuing onward makes sense. In the figure shown, we can see the results of changing these two items
simultaneously. If only one checkmark was checked in the previous step, the dropdown would not have
been configured correctly.

![configuring_elements_using_13](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/configuring_elements_using_13.webp)

The figure shown. Successfully changing two items simultaneously.

If the wizard detects that both values (ShowMode and HasFacing) are being changed each time, it will
proceed onward recording all the changed values and not prompt for input.



