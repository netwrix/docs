---
title: "Using the Grays Wizard"
description: "Using the Grays Wizard"
sidebar_position: 140
---

# Using the Grays Wizard

Many applications have configuration options, which will gray out or reveal items depending on
whether the checkboxes are checked or unchecked. For instance, in this application, when the
checkbox "Use fixed resolution for snapshots" is checked, the spinbox "Resolution:" is available for
editing, as shown In the figure shown.

![using_the_grays_wizard](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard.webp)

The figure shown. When the checkbox "Use fixed resolution for snapshots" is checked, the spinbox
"Resolution:" is available for editing.

In the figure shown, when the checkbox is unchecked, the "Resolution:" element is uneditable.

![using_the_grays_wizard_1_624x213](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_1_624x213.webp)

The figure shown. When the checkbox is unchecked, the "Resolution:" element is uneditable.

You are able to perform the same function within your AppSet. To do this, right-click over the
checkbox and select "Grays Wizard," as shown In the figure shown.

![using_the_grays_wizard_2_499x293](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_2_499x293.webp)

The figure shown. Opening the Grays Wizard.

:::note
The Grays Wizard is only available for checkboxes and radio buttons. Additionally, the
checkbox or radio button group needs to be configured with the Configuration Wizard before the Grays
Wizard is run.
:::


When you run the Grays Wizard, you do not need to use the "OK" or "Apply" buttons in your
application. You are only learning what happens inside your application when you click a checkbox or
radio button and what is grayed out when those items are selected. In the figure shown, we can see that
when the checkbox is checked, the "Resolution:" spinbox can be edited. Therefore, on the first
screen of the Grays Wizard, you would do nothing because when the checkmark is checked,
"Resolution:" is editable.

![using_the_grays_wizard_3](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_3.webp)

The figure shown. Using the Grays Wizard.

However, on the next page of the Grays Wizard, you are asked what happens when the checkbox is
unchecked. We learned that the "Resolution:" item is grayed out. So, in this screen, click the
"Resolution:" item to make it grayed out, as shown In the figure shown.

![using_the_grays_wizard_4](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_4.webp)

The figure shown. Graying out the element.

As shown In the figure shown, select the item or items that should be grayed out when the checkbox is
unchecked. You'll see the Grays Wizard gray it out for demonstration purposes.

![using_the_grays_wizard_5](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_5.webp)

The figure shown. Selecting the item to gray out.

Let's go through another, somewhat more complex example. In this application, a checkbox and radio
button set control a series of items that will be grayed out when checked and unselected. For
instance, In the figure shown, we can see all the items are available when the "Replace Document Colors"
checkbox is checked and the "Custom Color:" radio button is checked.

![using_the_grays_wizard_6](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_6.webp)

The figure shown. All the items are available when the "Replace Document Colors" checkbox is checked and
the "Custom Color:" radio button is checked.

However, if we select the "Use Windows Colors Scheme" radio button, we can see that the "Custom
Colors" radio button is grayed out (See the figure here). If we uncheck the "Replace Document Colors"
checkbox, then all areas ("Use Windows Colors Scheme," "Custom Color," and "Change only the color of
black / white content") are all grayed out, as shown In the figure shown.

![using_the_grays_wizard_7](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_7.webp)

The figure shown. Selecting the "Use Windows Colors Scheme" radio button makes the "Custom Colors" radio
button grayed out.

![using_the_grays_wizard_8](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_8.webp)

The figure shown. All areas are grayed out when the "Replace Document Colors" checkbox is unchecked.

To set up the correct behavior inside this application, you must first at least configure the
"Replace Document Colors" checkbox with the Configuration Wizard. Then, select the whole "Document
Colors Options" frame. Right-click and select "Grays Wizard," as shown In the figure shown.

![using_the_grays_wizard_9](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_9.webp)

The figure shown. Selecting the Grays Wizard.

By selecting the whole frame, the Grays Wizard will ask you about each element in the frame. The
first page requires you to express what happens when the "Replace Document Colors" is selected
(checked). In the figure shown, there are no changes, and everything is available.

![using_the_grays_wizard_10](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_10.webp)

The figure shown. The first page of the wizard does not require any changes.

On the next page, you are asked what happens when the "Replace Document Colors" is unchecked. In
that case, all items are grayed out. Select all items as grayed out if the Grays Wizard does not do
this already for you (See the figure here).

![using_the_grays_wizard_11](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_11.webp)

The figure shown. Selecting all items to be grayed out.

The next screen asks what happens when the "Use Windows Color Scheme" is selected. In this case, the
"Custom Color" block is grayed out, but the "Change only the color of black / white content" is
available. Click on the elements in the Grays Wizard, and click "Next," as shown In the figure shown.

![using_the_grays_wizard_12](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_12.webp)

The figure shown. Choosing which elements are grayed out and which are editable.

Next you will be asked about "Custom Color." Be sure to clear out any gray items that will operate
when "Custom color" is selected, as shown In the figure shown.

![using_the_grays_wizard_13](/images/endpointpolicymanager/applicationsettings/designstudio/using_the_grays_wizard_13.webp)

The figure shown. Choosing which elements are grayed out and which are editable.

Finally, you are asked about the last element "Change only the color of black / white content."
There is no change when this is checked or unchecked.



