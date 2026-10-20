---
title: "Amazon Web Services"
description: "Amazon Web Services"
sidebar_position: 20
---

# Amazon Web Services

Amazon Web Services (AWS) provides a wide range of cloud-based services, including solutions and
management tools for virtualization, data storage and hosting, private networking, relational, and
NoSQL databases, and many more. AWS CloudTrail is an internal tracking service that records AWS API
calls. Companies use this information to analyze user activity patterns and detect
potential threats. Unfortunately, you can't use collected audit data for future reference: AWS
CloudTrail stores events for 7 days allowing administrators and security analysts to review data for
only short time periods.

Netwrix Auditor helps you gain complete visibility into Amazon Web Services user and service
activity. The Add-on for Amazon Web Services extends native AWS CloudTrail auditing and reporting
possibilities. Aggregating data into a single audit trail simplifies activity analysis and helps you
monitor your hybrid cloud IT infrastructure. With Netwrix Auditor, you keep AWS audit data for
much longer periods of time and can always review it in an easy-to-use search interface.

Implemented as a PowerShell script, this add-on automates the acquisition of Amazon Web Services
CloudTrail logs and their transition to Netwrix Auditor. Provide connection
details and schedule the script for execution.

On a high level, the add-on works as follows:

- The add-on makes an AWS API call and collects activity events from AWS CloudTrail.
- The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each
  Activity Record contains the user account, action, time, and other details.

 Netwrix Auditor processes details for the following AWS events (it can import other events
    without details):

    |                |                     |                    |                 |
    | -------------- | ------------------- | ------------------ | --------------- |
    | CreateGroup    | CreateUser          | CreateLoginProfile | CreateAccessKey |
    | DeleteGroup    | DeleteUser          | DeleteLoginProfile | DeleteAccessKey |
    | AddUserToGroup | RemoveUserFromGroup | UpdateLoginProfile | UpdateAccessKey |

- Using the Integration API, the add-on sends the activity events to the Auditor Server, which
  writes them to the **Long-Term Archive** and the **Audit Database**.

See the [Integration API](/docs/auditor/10.9/api/overview.md) topic for additional information.

## Compatibility Notice

Ensure to check your product version, and then review and update your add-ons and scripts
that use the Integration API. Download the latest add-on version in the Add-on Store.

See the [Integration API](/docs/auditor/10.9/api/overview.md) topic for additional information about schema
updates.
