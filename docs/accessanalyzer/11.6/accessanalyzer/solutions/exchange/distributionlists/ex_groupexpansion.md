# Effective Membership > EX_GroupExpansion Job

The EX_GroupExpansion job expands the direct membership of distribution groups in the environment.

![Effective Membership > EX_GroupExpansion Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/effectivemembershipjobstree.webp)

The EX_GroupExpansion job is located in the Effective Membership job group.

## Analysis Tasks for the EX_GroupExpansion Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Effective
Membership** > **EX_GroupExpansion** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_GroupExpansion Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/groupexpansionanalysis.webp)

The following analysis tasks are selected by default:

- Drop Tables – Drops all previously-created tables and creates the group expansion function
- 1a. Expand Distribution Groups – Expands the distribution group’s direct members
-   2. Create Group Membership View – Creates an interim processing table in the database for use by
       downstream analysis and report generation
