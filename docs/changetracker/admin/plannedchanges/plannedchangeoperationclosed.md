---
title: "Planned Change Operation – Closed-Loop Intelligent Planned Change Control"
description: "Planned Change Operation – Closed-Loop Intelligent Planned Change Control"
sidebar_position: 30
---

# Planned Change Operation – Closed-Loop Intelligent Planned Change Control

## Acknowledging Events

Change Tracker summarizes File Integrity Monitoring (FIM) changes in simple terms. For example, for
File system Events, the Event Description begins with ‘New File’, ‘Changed File’, or ‘Deleted
File’.

For more details, click **Event Description** for any Device Event to view the full details of the
change.

After you review and approve the Event as valid and desirable, you can acknowledge it and assign it
to a Planned Change.

Select one or more Events to acknowledge, then use the ‘**Actions**’ button to access the available
options.

The **Default** option uses ‘Acknowledge Events under Planned Change’ and assigns the events to the
‘Manually Acknowledged Changes’ Planned Change.

Change Tracker now categorizes the Event as a ‘Planned Change’, so the filter control for
‘Unplanned’ Planned Change Status masks it. Edit the filter to show Planned Changes only, and the
Event becomes visible again.

Hover over the **Planned** link to display the name of the Planned Change. Click the link to go to
the **Planned Changes** page, where you can analyze the events associated with the Planned Change.

## Intelligent Change Control

Creating an Intelligent Planned Change is a point-and-click operation. Select the event or events to
include in the Planned Change definition. Change Tracker creates a separate rule for each event.

As before, use the **Actions** button but this time, use **Create a new Planned Change** to capture
these events.

By default, the Planned Change format includes only the ‘event donor’ Device Group, but you can
select other or different groups. Similarly, the **Planned Change** window start time defaults to
the donor event time and remains an ‘ongoing’ open-ended window, but you can edit these settings
too.

Now delete the `FIM_Test` file created previously, then recreate the same file.

Finally, create a new file in /etc called `Unapproved_FIM_Test`, then refresh the **Events** page.

Now Change Tracker automatically analyzes each event and applies the Intelligent Planned Change
rules to it in real time.

Based on the default ruleset, `FIM_Test` file operations are now approved, so Change Tracker
automatically acknowledges deletions, additions, and even changes as a ‘known-good’ change.

However, Change Tracker still flags other file change operations that don't match the rule as
Unplanned changes.
