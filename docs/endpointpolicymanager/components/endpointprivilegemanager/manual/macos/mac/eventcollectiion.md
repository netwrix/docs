---
title: "Setting Up Endpoint Policy Manager Cloud Groups for Event Collection"
description: "Setting Up Endpoint Policy Manager Cloud Groups for Event Collection"
sidebar_position: 30
---

# Setting Up Endpoint Policy Manager Cloud Groups for Event Collection

Having these logs locally is all well and good, put the power is in our ability to centrally store
these logs and present the data in a more readable format.

Our Event Collector in the cloud can take these events, upload them to your Endpoint Policy Manager
cloud instance and allow you to pull reports based on this data.

Please note that the Endpoint Policy Manager Cloud event collector it is a paid extra service that
is not enabled by default.

Event collection is part of the Group configuration. There are two types of groups that your
endpoints can be a part of – BUILT-IN and COMPANY.

Built-in

Without going into too many details here, there are KB articles that do that, the main Built-in
Group is the ALL group. Every endpoint that has an account will automatically be a member of Windows
or, in this case, MacOS All group. If this group is configured with Event Collection, all endpoints
will send their cloud.log data up to the cloud.

Computer

Computer groups are created and configured by you, the Endpoint Policy Manager cloud instance
administrator. You specify what computer accounts are members here and thereby only those endpoints
will upload load the data you specify in that group Event Collection configuration.

There are a few ways to add a computer to a group, but the most common way is directly through the
group.

- Highlight the group you want to add the computer(s) to. Click on Add/Remove Computer from Group
  (under Actions).

  ![setting_up_policypak_cloud](/images/endpointpolicymanager/leastprivilege/mac/1329_5_cd439679970dd94379dc97da3de13756.webp)

- Click “Available Computers”.

  ![setting_up_policypak_cloud_1](/images/endpointpolicymanager/leastprivilege/mac/1329_6_89a9d67a0c348b5ab03d304ea9392884.webp)

- Check the ones to add and click “Add”.

Event Collection Configuration

To configure Event Collection, highlight the group and click “Edit Group” under Actions. On the
resulting pop-up window, click on the “Event Collector” tab.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/mac/1329_7_44a2bef19cdb90973520bb3702397eb4.webp)

The “Event submission interval” dictates how often the logs get uploaded to the cloud. This is
separate and distinct from the “Refresh interval for computers” on the previous tab that dictates
how often the endpoint synchronizes the policies with the cloud.

You can also choose which events are collected and stored in the cloud. On large networks, this will
save you from a lot of ‘noise’ when looking for specific things. We generally recommend starting
will All events until you figure out what it is you want to see, and then just select the ones you
want.

When “Selected” is selected, clicking on the Info icon will bring up a list of Event IDs that can be
selected. In the image below I’ve highlighted the two Event types that I highlighted in the
cloud.log example above.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/mac/1329_8_464e110a1254c22ecac8a612b13ffc76.webp)

Notes on Collection Configuration:

- When the ALL group is configured, all endpoints will receive the configuration.
- When a Parent group is configured, all child groups will, by default, inherit the configuration as
  well. This behavior, however, can be altered to block inheritance.
- If a computer is a member of multiple groups, the behavior is essentially accumulative. That is
  all selected IDs will be included and uploaded at the shortest interval set.

:::note
See the
[How can I keep the same or specify different parameters for Event Collection for child groups? How does a computer behave if a member of multiple groups?](/docs/endpointpolicymanager/deliverymethods/cloud/knowledgebase/eventcollection/childgroups.md)
topic for more information.
:::


Forcing Event Submission

If you’re testing, or just want to upload the data immediately, you can force the upload of the
cloud.log file with the following command:

```
Policypak cloud-push-logs
```

![setting_up_policypak_cloud_4](/images/endpointpolicymanager/leastprivilege/mac/1329_9_e5dddf2ba28a115aa5782c49a21fbac6.webp)

:::note
This command can be run by a standard user. It does not require elevated or administrative
rights to perform.

:::
