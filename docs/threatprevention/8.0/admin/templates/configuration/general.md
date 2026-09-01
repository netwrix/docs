---
title: "General Tab"
description: "General Tab"
sidebar_position: 10
---

# General Tab

The General tab is for editing the basic attributes of the template.

![Template – General Tab](/images/threatprevention/8.0/admin/templates/generaltab.webp)

**Name**

The name should be unique and descriptive. The system displays it for templates in the list on the
[Templates Interface](/docs/threatprevention/8.0/admin/templates/overview.md).

**Description**

The description is optional but recommended. Because you can scope each policy narrowly or broadly,
the name combined with the description should clearly explain what objects and
events it monitors or blocks, where in the network it looks, and when it activates. The system displays
the description for templates in the list on the [Templates Interface](/docs/threatprevention/8.0/admin/templates/overview.md).

All changes made to a template must be saved before leaving the configuration interface.

## Tags

Tags are enabled as an organizational tool for templates only. Many preconfigured templates have
tags that let you quickly find the template you want through various groupings. Tags don't
create a duplicate template, but rather display the template in different folders under the TAGS
node. Multiple tags can be identified for a template with a comma-separated list. New tags can be
created, which create a new folder under the TAGS node. Use the right-click Refresh option on the
TAGS node in the Navigation pane to display new tags and/or display template-tag modifications. See
the [Tags Node](/docs/threatprevention/8.0/admin/tags.md) topic for additional information.

## History

The system automatically populates history details in the center of the General tab when you create or
modify a template.

![Policy - General tab > History section](/images/threatprevention/8.0/admin/policies/history.webp)

It shows who created the template (Added by), when the template was created (Added on), who made the latest modification (Modified by), and when that modification occurred (Modified on).

## Schedule

Use the schedule to set the time period for an enabled policy to monitor or block events.

| Icon      | Label       | Represents   |
| -------------------- | ----------------------- | --------------- |
| ![alwaysactivebutton](/images/threatprevention/8.0/admin/policies/alwaysactivebutton.webp)   | Always Active             | Indicates the policy will be active at all times when enabled. This is the default setting     |
| ![specifictimesbutton](/images/threatprevention/8.0/admin/policies/specifictimesbutton.webp) | Active at Specified Times | Indicates the policy will be active only at the specified times when enabled. There are two options for setting the specified times: <ul><li>Local Server Time – Schedule is set according to the local server’s time</li><li>UTC Time – Schedule is set according to the Universal Time (UTC)</li></ul> |

Any new policy you create from a template automatically applies the template’s setting, which you can then
modify. The system displays schedule details for templates in the list on the
[Templates Interface](/docs/threatprevention/8.0/admin/templates/overview.md). A clock icon represents Active at Specified Times, and
Always Active shows no icon.

**Weekly Calendar**

The weekly calendar at the bottom of the schedule section is where the schedule is set.

![Schedule section in a policy set to Always Active](/images/threatprevention/8.0/admin/policies/schedule.webp)

When you set the schedule to Always Active, the weekly calendar appears grayed out.

![Schedule section in a policy set to Active at Specific Times](/images/threatprevention/8.0/admin/policies/schedulespecifictimes.webp)

When you set the schedule to Active at Specified Times, the weekly calendar becomes active. Each block of
time on the calendar represents a 30-minute period.

- Blue blocks – Active times for the enabled policy
- White blocks– Inactive times for the enabled policy

The schedule can be set or modified in one of the following ways:

- Click an individual time-block to toggle between active and inactive for a single 30-minute
  period.
- Click a time-block in the All row to toggle between active and inactive for an entire column (for
  all days of the week).
- Click the name of a day to toggle between active and inactive for an entire row (for a full day).
