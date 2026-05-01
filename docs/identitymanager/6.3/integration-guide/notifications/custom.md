---
title: "Custom Notifications"
description: "Custom Notifications"
sidebar_position: 20
---

# Custom Notifications

Custom notifications can be configured for specific needs, to be triggered by a workflow, or periodically via a task.

## Workflow-Triggered Notifications

A notification can be configured to be sent to one or several users right after the execution of a given activity in [Workflows](../../integration-guide/workflows).

> For example, when a user is created in Identity Manager through a workflow, a notification can be
> sent to the user's manager. A notification can also be sent when someone must process an action
> for a workflow to continue.

The configuration is made through the XML tag [Notification Aspect](../../integration-guide/toolkit/xml-configuration/workflows/aspects/notificationaspect).

## Periodic Notifications

A notification can be configured to be sent to a given user on a regular basis at specified times, through the [Send Notifications Task](../../integration-guide/toolkit/xml-configuration/jobs/tasks/server/sendnotificationstask) as part of a job.

> For example, a notification can be sent automatically to remind a manager that someone arrives in
> their team a month before the arrival, and again a week before.

The configuration is made through the XML tag [Notification](../../integration-guide/toolkit/xml-configuration/notifications/notification).

