---
title: "Getting Started with Agent"
description: "Getting Started with Agent"
sidebar_position: 10
---

# Getting Started with Agent

Before you set up your Agent controls, determine the roles you require and decide what types of
controls / searches you need.

## Role Examples

|   Role               | Description                                                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Control Owner    | Defaults to the person that creates the control, but can be changed.<br />Receives alerts when a violation occurs.<br />May be a Change Request Approver to Pre-approve / Authorize related changes.        |
| Control Assignee | Manages the process risk.<br />Receives alerts when a violation occurs.<br />Approves Change Requests to Pre-approve / Authorize related changes.                                                           |
| Process Owner    | Owns the Process and associated material risk.<br />Receives alerts when a violation occurs.<br />Receives periodic control reports.<br />Approves Change Requests to Pre-approve / Authorize related changes. |

## Control/Search Examples

|  Control/Search            | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Record Control             | Tracks all changes to the record (Customer, Vendor, Employee, Item)<br />Any changes trigger a violation record / alert.                                                                                                                                                                                                                                                                                  |
| Record Field Control       | Tracks changes to specified fields in a record.<br />Changes on the specified fields trigger a violation record / alert.                                                                                                                                                                                                                                                                                  |
| Transactional Data Control | Tracks changes to transaction records and events<br />Search types may be Journal entries, Checks, Bills, etc.<br />This data type can be monitored as a whole (i.e. any changes<br />additions, modifications, deletions), or specified (e.g. only Journal entries that have been modified after being approved, or journal entries entered and approved by the same user, or list of ad-hoc checks only etc). |
