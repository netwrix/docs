---
title: "Recommended Configurations for the Windows Solution"
description: "Recommended Configurations for the Windows Solution"
sidebar_position: 10
---

# Recommended Configurations for the Windows Solution

**Dependencies**

The .Active Directory Inventory job group needs to be executed prior to running the Windows
Solution.

See individual sub-groups and jobs for the dependencies.

**Target Hosts**

See individual sub-groups and jobs for host list designations.

**Connection Profile**

The Connection Profile used for this job needs to have local administrator privileges. By default,
this job group's Connection Profile is set to **Use Default Profile (Inherit from the parent group,
if any, or the global Default setting)**. See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

**History Retention**

See individual sub-groups and jobs for history support. Use Default Settings unless instructed
otherwise.

**Additional Notes**

Some jobs in the Windows Job Group use custom SQL scripts to render views on collected data. SQL
views are used to populate report element tables and graphs. Changing or modifying the group, job,
or tables names will result in no data displayed within the reports.

See the Recommended Configurations topic for each job group for additional information on frequency
and job group settings.
