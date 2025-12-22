---
title: "Activity Templates"
description: "Activity Templates"
sidebar_position: 10
---

# Activity Templates

This section describes the activities that constitute and model a
[workflow](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/workflows/workflow/index.md).
Each activity is assigned a template, made of states and transitions.

## Overview

Going through an activity means going through [states](#states) and [transitions](#transitions).

![Activity Template - Example](/images/identitymanager/6.1/integration-guide/workflows/activity-templates/activitytemplates_example.webp)

By default, Usercube's workflow engine implements the following activity templates:

- [`Action`](#action)
- [`ActionWithRefine`](#actionwithrefine)
- [`Review`](#review)
- [`ReviewWithFeedback`](#reviewwithfeedback)
- `ContinueWith`
- [`Persist`](#persist)
- [`PersistOnlyResources`](#persistonlyresources)

## Activity Templates

### Action

Awaits user modifications without another user's intervention.

![Activity Template - Action](/images/identitymanager/6.1/integration-guide/workflows/activity-templates/activitytemplates_action.webp)

### ActionWithRefine

Awaits user modifications with the possibility to delegate the action to another user.

![Activity Template - ActionWithRefine](/images/identitymanager/6.1/integration-guide/workflows/activity-templates/activitytemplates_actionwithrefine.webp)

The `ActionWithRefine` activity can be translated into the following form:

![ActionWithRefine in the UI](/images/identitymanager/6.1/integration-guide/workflows/activity-templates/activity_actionwithrefine_v602.webp)

### Review

Awaits user approval without another user's intervention.

![Activity Template - Review](/images/identitymanager/6.1/integration-guide/workflows/activity-templates/activitytemplates_review.webp)

### ReviewWithFeedback

Awaits user approval with the possiblity of getting feedback from another user before taking the
action.

![Activity Template - ReviewWithFeedback](/images/identitymanager/6.1/integration-guide/workflows/activity-templates/activitytemplates_reviewwithfeedback.webp)

The `ReviewWithFeedback` activity can be translated into the following form:

![ReviewWithFeedback in the UI](/images/identitymanager/6.1/integration-guide/workflows/activity-templates/activity_reviewwithfeedback_v602.webp)

### Persist

Saves the workflow's collected data to the repository and triggers dependent processes (i.e.
computation of the role model and provisioning). This activity has only the transition
`Persist-Invoked-Invoke` and the state `Persist-Invoked`. It has no user interaction, and hence no
need for permissions.

### PersistOnlyResources

Saves the workflow's collected data to the repository without triggering the dependent processes
(i.e. computation of the role model and provisioning). This activity has only the transition
`PersistOnlyResources-Invoked-Invoke` and the state `PersistOnlyResources-Invoked`. It has no user
interaction, and hence no need for permissions.

> For example, `PersistOnlyResources` can be used in a workflow to add a new user, as we first
> create a user sheet but without any account, etc.

## States

By default, Usercube's workflow engine implements the following state templates:

- `Action-ActionPending`
- `Action-Executed`
- `Action-Aborted`
- `Action-Purged`
- `ActionWithRefine-ActionPending`
- `ActionWithRefine-Executed`
- `ActionWithRefine-RefinePending`
- `ActionWithRefine-Aborted`
- `ActionWithRefine-Purged`
- `Review-ReviewPending`
- `Review-Declined`
- `Review-Approved`
- `Review-Aborted`
- `Review-Purged`
- `ReviewWithFeedback-ReviewPending`
- `ReviewWithFeedback-Approved`
- `ReviewWithFeedback-Declined`
- `ReviewWithFeedback-RefinePending`
- `ReviewWithFeedback-Aborted`
- `ReviewWithFeedback-Purged`
- `ContinueWith-Invoked`
- `Persist-Invoked`
- `PersistOnlyResources-Invoked`

## Transitions

By default, Usercube's workflow engine implements the following transition templates:

- `Action-ActionPending-Save`
- `Action-ActionPending-Execute`
- `Action-ActionPending-Abort`
- `Action-Aborted-Purge`
- `ActionWithRefine-ActionPending-Save`
- `ActionWithRefine-ActionPending-Execute`
- `ActionWithRefine-ActionPending-Delegate`
- `ActionWithRefine-ActionPending-Abort`
- `ActionWithRefine-RefinePending-Save`
- `ActionWithRefine-RefinePending-Delegate`
- `ActionWithRefine-RefinePending-Execute`
- `ActionWithRefine-RefinePending-Abort`
- `ActionWithRefine-Aborted-Purge`
- `Review-ReviewPending-Save`
- `Review-ReviewPending-Approve`
- `Review-ReviewPending-Decline`
- `Review-ReviewPending-Abort`
- `Review-Aborted-Purge`
- `ReviewWithFeedback-ReviewPending-Save`
- `ReviewWithFeedback-ReviewPending-Approve`
- `ReviewWithFeedback-ReviewPending-Decline`
- `ReviewWithFeedback-ReviewPending-Refine`
- `ReviewWithFeedback-ReviewPending-Abort`
- `ReviewWithFeedback-Aborted-Purge`
- `ReviewWithFeedback-RefinePending-Save`
- `ReviewWithFeedback-RefinePending-Delegate`
- `ReviewWithFeedback-RefinePending-Execute`
- `ContinueWith-Invoked-Invoke`
- `Persist-Invoked-Invoke`
- `PersistOnlyResources-Invoked-Invoke`
