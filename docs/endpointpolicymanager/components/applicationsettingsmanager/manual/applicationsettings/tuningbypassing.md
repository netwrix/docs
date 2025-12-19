---
title: "Tuning and Bypassing Item-Level Targeting"
description: "Tuning and Bypassing Item-Level Targeting"
sidebar_position: 90
---

# Tuning and Bypassing Item-Level Targeting

Endpoint Policy Manager Application Settings Manager will process both internal Item-Level Targeting
(ILT; i.e., the filters already built into the Pak) as well as normal Item-Level Targeting (those on
the Pak entry you create in the MMC).

You can however, configure an individual client machine for the following three parameters. All the
following values live in `HKLM\Software\PolicyPak\Config\CSE\ILT `and are REG_DWORD values.

- `BypassAllILT`. When this value is set to 1, all` ILTs` (both preconfigured and Pak-entry ILTs)
  are bypassed and ignored (essentially evaluating each one as True).
- Timeout. Sometimes processing `ILT `operations can take longer than desired. If the
  `ILT `evaluation (as a batch) takes longer than the Timeout value then the operation is aborted.
  If the timeout occurs, and the value was never determined before, then the entire ILT operation is
  assumed to be True. If the value was previously determined, Endpoint Policy Manager Application
  Settings Manager will reuse the last known value, provided the Lifetime has not yet expired (see
  next entry).

  - When this value doesn't exist, ILT processing operations are capped at 500 ms for each
    evaluation. You can change the Timeout value by specifying it in milliseconds. The timeout may
    also be set universally at the CSE level within the ADMX configuraiton settings (see Appendix
    A for more details).

- Lifetime. Every time a Pak is applied (or you launch an application), the ILTs (both internal and
  Pak-entry) are reevaluated to make sure the conditions are still true. This is important for IP
  range and other conditions that could change during the user's session. Instead of reevaluating
  the ILT processing again and again, Endpoint Policy Manager Application Settings Manager uses the
  Lifetime value. The Lifetime value is how long the last ILT evaluation for a specific application
  stays valid. The Lifetime value is expressed in milliseconds. If absent, the default is 5000 ms (5
  seconds).

An example of using one of these entries—the `BypassAllILT `entry, which would turn off all ILT
processing—can be seen In the figure shown. Note that the ILT key will not exist by default and must be
created before the value is set within it.

![troubleshooting_policypak_6](/images/endpointpolicymanager/troubleshooting/applicationsettings/itemleveltargeting/troubleshooting_endpointpolicymanager_6.webp)

The figure shown. An example of a `BypassAllILT `entry.



