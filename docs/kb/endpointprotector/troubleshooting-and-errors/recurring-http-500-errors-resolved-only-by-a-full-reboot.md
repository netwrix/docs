---
description: >-
  Explains why the Netwrix Endpoint Protector Server can return recurring HTTP
  500 errors that clear only after a full reboot, and how to resolve the
  underlying sizing issue rather than repeatedly rebooting.
keywords:
  - Endpoint Protector
  - HTTP 500 error
  - server reboot
  - troubleshooting
  - server sizing
  - PHP configuration
  - performance
  - server requirements
products:
  - endpointprotector
sidebar_label: Recurring HTTP 500 Errors Resolved Only by Reboot
tags:
  - troubleshooting-and-errors
  - kb
title: "Recurring HTTP 500 Errors Resolved Only by a Full Reboot"
knowledge_article_id: kA0Qk0000000000AAB
---

# Recurring HTTP 500 Errors Resolved Only by a Full Reboot

## Symptom

The Netwrix Endpoint Protector Server periodically returns HTTP 500 errors across the console. A full server reboot temporarily clears the errors, but they recur every few days.

## Cause

This pattern typically indicates the server is undersized for its current load — database size, log volume, or number of managed endpoints — rather than a one-time import or configuration failure. A reboot only clears the symptom by resetting exhausted resources or hung processes; it does not resolve the underlying sizing issue, which is why the errors return.

In rare cases, this behavior can occur after a [server migration](/docs/endpointprotector/install/migrationprocedure/migrationguide) to the current image-based platform, if load increases without a matching resource review. It can also occur on a longstanding server whose load has grown beyond its original sizing.

## Resolution

1. Verify the CPU, RAM, and disk allocated to the server against the current [Server Requirements](/docs/endpointprotector/requirements/server). An undersized appliance is the most common root cause of both general UI slowness and recurring server errors.
2. If resources are below the recommended minimums, increase them before continuing.
3. If resources already meet or exceed the minimums and the errors persist, raise a Netwrix Support ticket to request a review and adjustment of the server's PHP configuration.

:::tip
If you are troubleshooting general console slowness rather than specific HTTP 500 errors, see [User Interface Performance Issues](/docs/kb/endpointprotector/troubleshooting-and-errors/user_interface_performance_issues) for the full set of possible causes.
:::

## Related Links

- [Server Requirements](/docs/endpointprotector/requirements/server)
- [User Interface Performance Issues](/docs/kb/endpointprotector/troubleshooting-and-errors/user_interface_performance_issues)
- [EPP Server Migration & Upgrade Guide](/docs/endpointprotector/install/migrationprocedure/migrationguide)
