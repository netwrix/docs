---
title: "Agent Overview"
description: "Agent Overview"
sidebar_position: 130
---

# Agent Overview

Use Agent to monitor and manage the creation, deletion, or change of key records and fields
associated with transactional and master data as well as system critical settings by:

- Filling gaps left by Segregation of Duties (SoD) by monitoring and documenting situations such as:
    - Positional authority conflicts: having the power to override controls.
    - Admin / Full access user: having permissions to perform any action in the system.
- Turning basic saved searches into powerful monitoring controls by automatically checking on them
  on an hourly, daily, weekly, monthly, or quarterly basis.
- Capturing the results of saved searches into an immutable Change Log.
- Automatically sending an email alert in real-time to control owners, process owners, assignees,
  and/or change managers.
- Checking and logging authorizations and pre-approvals using change management.
- Creating restrictions with blocking controls to protect critical data at a field or record level.
- Mitigating high level risks through blocking controls to protect critical data at a field or
  record level.
- Creating tasks and issues automatically and assigning to specific employees when a control
  violation takes place.
- Extending NetSuite capabilities with cross-match functionality to perform a double JOIN in your search.

Netwrix University offers tutorials for Agent Financial Controls.
[Sign in to your Netwrix account](https://www.netwrix.com/my_training.html) to access the NS3-2 Agent Financial Controls series. Contact your Customer Success Manager if you don't have access to Netwrix University.

## Agent Control Categories

| Category                     | Description                                                            |
| ---------------------------- | ---------------------------------------------------------------------- |
| Monitor                      | Uses customized saved searches as the agent control tool.             |
| Authorizations and Approvals | Using change management                                                |
| Blocking Controls            | Using restrictions to protect critical data at field or record levels. |

## Control Incident Reports

Unresolved Control Incidents

Resolved Control Incidents

Pre-Approved Control Incidents

## Agent FAQ

##### Creating multiple pre-approved Change Requests for a single Control

Yes, Agent goes through the list of multiple Change Requests it is associated with until it finds a
match for the control incident result.

##### Using a single Change Request for multiple Controls

Yes, the Change Request’s Customization field can accommodate multiple Control records. All of the
controls listed under the Customization field are associated with the Change Request.

##### How Agent handles Pre-approvals when the control results are grouped (the Group Results In Alert checkbox is marked in the Control setting)

When the results are grouped, all results must match the Change Request Control filters for the
Change Log to be a pre-approved incident.
