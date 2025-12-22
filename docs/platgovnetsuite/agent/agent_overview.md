---
title: "Agent Overview"
description: "Agent Overview"
sidebar_position: 130
---

# Agent Overview

Agent allows you to monitor and manage the creation, deletion, or change of key records and fields
associated with transactional and master data as well as system critical settings by:

- Filling in the gaps left by Segregation of Duties (SoD) by providing monitoring and documentation
  of situations such as:
    - Positional authority conflicts: having the power to override controls.
    - Admin / Full access user: having permissions to do just about anything in the system.
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
- Extending NetSuite capabilities with cross-match functionality to easily perform a double JOIN in
  your search.

Check out Netwrix University for helpful tutorials.
[Sign in to your Netwrix account](https://www.netwrix.com/my_training.html) to access the NS3-2
Agent Financial Controls series. Contact your Customer Success Manager if you do not have access to
Netwrix University.

## Agent Control Categories

| Category                     | Description                                                            |
| ---------------------------- | ---------------------------------------------------------------------- |
| Monitor                      | Using customized saved searches driven agent control tool.             |
| Authorizations and Approvals | Using change management                                                |
| Blocking Controls            | Using restrictions to protect critical data at field or record levels. |

## Control Incident Reports

Unresolved Control Incidents

Resolved Control Incidents

Pre-Approved Control Incidents

## Agent FAQ

##### Can you create multiple pre-approved Change Requests for a single Control?

Yes, Agent goes through the list of multiple Change Requests it is associated with until it finds a
match for the control incident result.

##### Can you use a single Change Request for multiple Controls?

Yes, the Change Request’s Customization field can accommodate multiple Control records. All of the
controls listed under the Customization field are associated with the Change Request.

##### How does Agent handle Pre-approvals when the control results are grouped? (i.e. Group Results In Alert checkbox is marked in the Control setting)

When the results are grouped, all results must match the Change Request Control filters for the
Change Log to be a pre-approved incident.
