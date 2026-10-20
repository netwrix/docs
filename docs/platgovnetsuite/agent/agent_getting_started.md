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
| Control Owner    | Defaults to the person who creates the control, but can be changed.<br />Receives alerts when a violation occurs.<br />Can be a Change Request Approver to pre-approve or authorize related changes.        |
| Control Assignee | Manages the process risk.<br />Receives alerts when a violation occurs.<br />Approves Change Requests to Pre-approve / Authorize related changes.                                                           |
| Process Owner    | Owns the Process and associated material risk.<br />Receives alerts when a violation occurs.<br />Receives periodic control reports.<br />Approves Change Requests to Pre-approve / Authorize related changes. |

## Control/Search Examples

|  Control/Search            | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Record Control             | Tracks all changes to the record (Customer, Vendor, Employee, Item)<br />Any changes trigger a violation record / alert.                                                                                                                                                                                                                                                                                  |
| Record Field Control       | Tracks changes to specified fields in a record.<br />Changes on the specified fields trigger a violation record / alert.                                                                                                                                                                                                                                                                                  |
| Transactional Data Control | Tracks changes to transaction records and events.<br />Search types include Journal entries, Checks, Bills, and so on.<br />This data type can be monitored as a whole (any changes, additions, modifications, deletions), or narrowed to specific events (for example, Journal entries modified after approval, journal entries entered and approved by the same user, or ad-hoc checks only). |
