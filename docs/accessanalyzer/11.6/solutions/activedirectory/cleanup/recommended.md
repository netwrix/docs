---
title: "Recommended Configurations for AD Cleanup Job Group"
description: "Recommended Configurations for AD Cleanup Job Group"
sidebar_position: 10
---

# Recommended Configurations for AD Cleanup Job Group

The recommended configurations for the Cleanup Job Group are:

**Dependencies**

The Cleanup job group has the following prerequisites:

- The Active Directory Actions license feature is required
- The Active Directory Actions Module must be installed
- The .Active Directory Inventory Job Group needs to be successfully run prior to running this job
  group
- The following job groups from the Activity Directory job group need to be successfully run prior
  to running this job group:

    - 1.Groups
    - 2.Users
    - 3.Computers

Individual jobs and job groups within the Cleanup Job Group may have their own prerequisites and
dependencies. See the relevant job or job group topic for additional information.

**Target Hosts**

None

**Schedule Frequency**

Most of the jobs in this job group can be scheduled to run as desired. The AD_Cleanup Progress Job
should be scheduled to run every day.

**History Retention**

Not supported

**Multi-console Support**

Not supported
