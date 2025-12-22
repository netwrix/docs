---
title: "UsersGroups: Security Category"
description: "UsersGroups: Security Category"
sidebar_position: 30
---

# UsersGroups: Security Category

This Security policy is used to audit security policies.

![Users and Groups Browser wizard Results page Security category](/images/accessanalyzer/11.6/admin/datacollector/usersgroups/category/security.webp)

Select from the following options for what data will be returned:

- Security Policy (User Rights Assignment) – Identifies user rights assignment for each individual
  policy part that grants or removes rights

    - Resolve Nested Group Membership – Returns nested group membership
    - Find all users and groups who have the following right – Select the checkboxes next to the
      rights desired for the query

- Password Policy – Returns a password policy audit for the target
- Audit Policy – Returns an audit policy audit for the target
- Account Lockout Policy – Returns an account lockout policy audit for the target

:::warning
The number of offline hosts with policies can significantly increase the time for a
scan.
:::


:::info
For large networks, configure the length of time for a scan when hosts with
policies are offline.
:::


- Retry Attempts [number]
- Retry Interval [number] seconds
