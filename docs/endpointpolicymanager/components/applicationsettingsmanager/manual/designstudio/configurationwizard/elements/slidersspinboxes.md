---
title: "Sliders and Spinboxes"
description: "Sliders and Spinboxes"
sidebar_position: 20
---

# Sliders and Spinboxes

Sliders (also known as trackbars) and spinboxes (also known as up/down boxes) are very similar in
how they need to be configured. To configure a slider or spinbox, we need to know three values:

- Minimum (left most or bottom most) value
- Step value, which is how much the slider changes when you increase by one step
- Maximum (right most or top most) value

Usually, the left most value is a number that is less than the right most value. For instance, a
slider labeled "Volume," as shown In the figure shown, would have a lower value when slid to the left, and
a higher value when slid to the right.

![configuring_elements_using_23_624x182](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/elements/configuring_elements_using_23_624x182.webp)

The figure shown. A typical slider.

Although this is usually true, in the next example, the minimum (left most) value was 900 and the
maximum (right most) value was 200 (See the figure here). DesignStudio discovers this during the wizard
process and suggests what is likely going on. In most cases, keeping the default will be the right
thing to do, which will establish this as a reverse slider and correctly establish the minimum and
maximum values.

![configuring_elements_using_24](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/elements/configuring_elements_using_24.webp)

The figure shown. Discovering a reverse slider with DesignStudio.

Note also that the Slider Configuration Wizard will capture the original value set in the slider
when the wizard was run, and suggest that value as the default value and the revert value. The
Slider Configuration Wizard might also detect a multiplier for some items. In the example in Figure
132, the slider itself goes from 0 to 100. But the recorded values are 0 to 254.

![configuring_elements_using_25](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/elements/configuring_elements_using_25.webp)

The figure shown. Detecting a slider multiplier.

In these cases, the Slider Configuration Wizard will detect this and suggest a way to rectify what
you see (0–100) versus what is set inside the application (0–254). If you select "Adjust range and
step," you can set the target application more precisely, but you may lose the exact look and feel
of the original application. If you select "Use multiplier and offset," the behavior of the original
application is maintained, but you might lose precision in the target application.

Some applications have sliders that set a bunch of values all at once, or make major changes to the
application or operating system behavior. These kinds of sliders are not supported for actions in
Endpoint Policy Manager Application Settings Manager. Two examples of these kinds of unsupported
sliders are items like Internet Explorer's security slider, shown In the figure shown (left side) and User
Account Control Settings, shown In the figure shown (right side).

![configuring_elements_using_26](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/elements/configuring_elements_using_26.webp)

The figure shown. Examples of unsupported sliders.

Sliders like these can be hidden or disabled, but Endpoint Policy Manager DesignStudio should not be
used to try to configure these kinds of sliders that set a multitude of settings based on
conditions.



