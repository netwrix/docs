---
title: "How can I keep the same or specify different parameters for Event Collection for child groups? How does a computer behave if a member of multiple groups?"
description: "How can I keep the same or specify different parameters for Event Collection for child groups? How does a computer behave if a member of multiple groups?"
sidebar_position: 10
---

# How can I keep the same or specify different parameters for Event Collection for child groups? How does a computer behave if a member of multiple groups?

The default behavior is that a child group automatically inherits the parent's existing Event
Collector configuration. This is called **Allow Child Merge** and is automatically put upon any new
child group, as seen below.

If you want a different behavior in a child group than its parent, then change **Event Collector |
Inheritance** to **Allow Child Override** then specify the event collection scheme you want, using
the provided fields.

:::note
If a single computer is a member of several groups with conflicting Event Collection
settings, then the following rules apply:
:::


- Event Submission Interval will be minimal of all group(s), meaning the lowest number in Event
  submission interval between all groups wins.
- Event Filters will be merged. For instance, if Computer1 in GROUP A has Events **101-105, 108**
  and same Computer1 in Group B has **102-106, 110** the final result of event IDs to be uploaded is
  **101-106, 108, 110**.
- If any group of which a computer is a member has the **Collect Events** filter set to **All**,
  then the previous rule doesn't apply. All always takes precedence.

![940_1_image002_950x536](/images/endpointpolicymanager/cloud/eventcollection/940_1_image002_950x536.webp)


