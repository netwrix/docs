---
title: "AD_SIDHistory Job"
description: "AD_SIDHistory Job"
sidebar_position: 70
---

# AD_SIDHistory Job

The AD_SIDHistory Job enumerates historical SIDs in the audited environment and highlights
exceptions involving the SIDHistory attribute on AD user objects. Specific conditions include when a
user has a historical SID from their current domain, or when a non-admin user has a historical SID
with administrative rights, both of which may be indicators of compromise.

## Analysis Tasks for the AD_SIDHistory Job

Navigate to the **Active Directory** > **2.Users** > **AD_SIDHistory** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_SIDHistory Job](/images/accessanalyzer/12.0/solutions/activedirectory/users/sidhistoryanalysis.webp)

The default analysis tasks are:

- Determine SIDHistory details – Creates the SA_AD_SIDHistory_Details table accessible under the
  job’s Results node
- Summarize SIDHistory details – Creates the SA_AD_SIDHistory_Summary table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_PasswordStatus Job
produces the following pre-configured report:

| Report      | Description                                                                                                                                                                                                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SID History | This report lists historical SIDs in the audited environment. Additionally, it highlights exceptions involving the SIDHistory attribute on AD user objects. Considered in particular are when a user has a historical SID from their current domain, or when a non-admin user has a historical SID with administrative rights. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays historical SIDs by domain</li><li>Table – Provides details on SID history</li><li>Table – Provides details on historical SIDs by domain</li></ul> |
