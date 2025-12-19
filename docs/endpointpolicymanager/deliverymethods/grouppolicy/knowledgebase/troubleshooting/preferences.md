---
title: "How do I turn on Item Level Targeting (ILT) logging if asked by Endpoint Policy Manager Tech Support (when using Preferences ILT engine)?"
description: "How do I turn on Item Level Targeting (ILT) logging if asked by Endpoint Policy Manager Tech Support (when using Preferences ILT engine)?"
sidebar_position: 40
---

# How do I turn on Item Level Targeting (ILT) logging if asked by Endpoint Policy Manager Tech Support (when using Preferences ILT engine)?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Item Level Targeting is a function of Group
Policy Preferences which is also incorporated into Endpoint Policy Manager. There are two pieces to
ILT: The editor and the evaluation within the Client Side Extension.

The ILT editor in Group Policy Preferences can be seen in every Group Policy Preferences item, like
what's seen here.

![196_1_img-01](/images/endpointpolicymanager/troubleshooting/log/itemleveltargeting/196_1_img-01.webp)

The ILT editor in Endpoint Policy Manager can be seen in nearly all Endpoint Policy Manager items,
like what's seen here.

![196_3_img-02](/images/endpointpolicymanager/troubleshooting/log/itemleveltargeting/196_3_img-02.webp)

If you think your Item Level Targeting isn't working, we ask that you first "backtrack" to a quick
Group Policy Preferences test and try it there first.

Indeed, we ask you take two steps:

**Step 1 –** Create a Group Policy Preferences Shortcut with NO Item Level Targeting. We'll call
this www.1.com . In this experiment, this will be the "Control" group. (No ILT, just to see it
working.)

**Step 2 –** Create a Group Policy Preferences Shortcut WITH your Item Level Targeting. We'll call
this www.2.com. In this experiment, this will get your "ILT Medicine" and see if ILT is working or
not.

## Part 1:

So, again, use Group Policy Preferences and create a new Group Policy Preferences shortcut to
www.1.com , on the DESKTOP, with TARGET URL being www.1.com and pick any icon you want.

![196_5_img-03](/images/endpointpolicymanager/troubleshooting/log/itemleveltargeting/196_5_img-03.webp)

## Part 2:

Use Group Policy Preferences to create a Group Policy Preferences shortcut to www.2.com, on the
DESKTOP, with TARGET URL being www.2.com and pick any icon you want.. then click in the COMMON tab
and select Item Level Targeting, and put in your proposed ILT.

![196_7_img-04](/images/endpointpolicymanager/troubleshooting/log/itemleveltargeting/196_7_img-04.webp)

![196_9_img-05](/images/endpointpolicymanager/troubleshooting/log/itemleveltargeting/196_9_img-05.webp)

Before you test, let's make sure we fully understand the experiment…

![196_11_img-06](/images/endpointpolicymanager/troubleshooting/log/itemleveltargeting/196_11_img-06.webp)

Then on the endpoint run GPupdate… Here is the result you should get:

![196_13_img-07](/images/endpointpolicymanager/troubleshooting/log/itemleveltargeting/196_13_img-07.webp)

So:

**Step 1 –** If you only see www.1.com and not www.2.com, then something is wrong with your ILT
evaluation and it is evaluating to FALSE. This evaluation will also evaluate to FALSE in any
Endpoint Policy Manager item.

**Step 2 –** If you BOTH www.1.com and www.2.com, then your ILT evaluation is evaluating to TRUE and
should also work in any Endpoint Policy Manager item.

Now… how does Endpoint Policy Manager fit into this?

If you take the WORKING ILT evaluation and use it in a Endpoint Policy Manager item… and it STILL
doesn't work. Then we can attempt to investigate it.

That being said if you're really sure an ILT evaluation functions correctly in Group Policy
Preferences (see above) but not in Endpoint Policy Manager … you can continue to troubleshoot by
turning on ILT logging for Endpoint Policy Manager items using this
KB:[How do I turn on Item Level Targeting (ILT) logging if asked by Endpoint Policy Manager Tech Support?](/docs/endpointpolicymanager/deliverymethods/grouppolicy/knowledgebase/troubleshooting/itemleveltargeting.md)

All log files require a support case to analyze.


