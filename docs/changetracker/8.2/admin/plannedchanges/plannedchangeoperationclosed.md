---
title: "Planned Change Operation – Closed-Loop Intelligent Planned Change Control"
description: "Planned Change Operation – Closed-Loop Intelligent Planned Change Control"
sidebar_position: 30
---

# Planned Change Operation – Closed-Loop Intelligent Planned Change Control

## Acknowledging Events

FIM changes are summarized in simple terms, for example, for File system Events, the Event
Description is prefixed with either ‘New File’, ‘Changed File’ or ‘Deleted File’.

For more details, just click on the **Event Description** for any Device Event to see the full
detail of the change.

Once the Event has been reviewed and approved as valid and desirable, the Event can be acknowledged
and assigned to a Planned Change.

Select the Event(s) to acknowledge then use the ‘**Actions**’ button to access the options
available.

The **Default** option is to use the ‘Acknowledge Events under Planned Change’ and assign the
event(s) to the ‘Manually Acknowledged Changes’ Planned Change.

The Event will now be categorized as a ‘Planned Change’ and therefore will be masked by the filter
control for ‘Unplanned’ Planned Change Status – edit the Filter to show Planned Changes only and the
Event will be visible again.

Hovering over the **Planned** link will display the name of the Planned Change and clicking on the
link will take you to the **Planned Changes** page where the events associated with the Planned
Change can be analyzed.

## Intelligent Change Control

Creating an Intelligent Planned Change is a straightforward ‘point and click’ operation. Select the
event or events to include in the Planned Change definition – a separate rule will be created for
each event.

As before, use the **Actions** button but this time, use **Create a new Planned Change** to capture
these events.

The default Planned Change format is to include the ‘event donor’ Device Group only, but other or
different groups can be selected. Similarly, the **Planned Change** window start time is taken from
the donor event time and left as an ‘ongoing’ open ended window, but these can also be edited.

Now delete the `FIM_Test `file created previously, then recreate the same file again.

Finally, create a further new file in /etc called `‘Unapproved_FIM_Test’` then refresh the
**Events** page.

Now events are being analyzed automatically, with the Intelligent Planned Change rules being applied
to each one as it is recorded.

According to the default ruleset created, `‘FIM_Test’` file operations are now approved so
deletions, additions and even changes will all be automatically acknowledged as a ‘known-good’
change.

However, other file change operations not matching the rule will still be flagged as Unplanned
changes.
