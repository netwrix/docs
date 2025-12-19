---
title: "UX_PasswordSettings Job"
description: "UX_PasswordSettings Job"
sidebar_position: 70
---

# UX_PasswordSettings Job

The UX_PasswordSettings job provides visibility into user passwords and system password
configurations within audited Unix and Linux environments.

## Analysis Tasks for the UX_PasswordSettings Job

Navigate to the **Unix** > **1.Users and Groups** > **UX_PasswordSettings** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_PasswordSettings Job](/images/accessanalyzer/12.0/solutions/unix/usersgroups/passwordsettingsanalysis.webp)

The default analysis tasks are:

- Gives information about local user passwords – Creates SA_UX_PasswordSettings_UserDetails table
  accessible under the job’s Results node
- Gives information about system password settings – Creates SA_UX_PasswordSettings_SystemDetails
  table accessible under the job’s Results node

In addition to the table and views created by the analysis tasks, the UX_PasswordSettings job
produces the following pre-configured reports:

| Report                    | Description                                                                | Default Tags | Report Elements                                                                                               |
| ------------------------- | -------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| Local User Passwords      | This report outlines password information for each local user on each host | None         | This report is comprised of one element: <ul><li>Table – Provides details on User Password Settings</li></ul> |
| Password Security Setting | This report lists password security settings for each audited host         | None         | This report is comprised of one element: <ul><li>Table – Provides details on Password Settings</li></ul>      |
