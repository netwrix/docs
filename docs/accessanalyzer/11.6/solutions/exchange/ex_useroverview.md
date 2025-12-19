---
title: "EX_UserOverview Job"
description: "EX_UserOverview Job"
sidebar_position: 100
---

# EX_UserOverview Job

The EX_UserOverview job provides correlation from multiple data collection points to show
information for each user about their mailbox size, mailbox access rights, mail flow metrics and
remote connectivity to the Exchange environment. These reports provide user impact analysis on the
environment.

![EX_UserOverview Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/exchange/mailflowuseroverviewjobstree.webp)

**Dependencies**

The following job groups need to be successfully run prior to this job:

- **.Active Directory Inventory** Job Group
- **.Entra ID Inventory** Job Group
- **Exchange** > **1. HUB Metrics** Job Group
- **Exchange** > **2. CAS Metrics** Job Group
- **Exchange** > **4. Mailboxes** > **Permissions** Job Group
- **Exchange** > **4.Mailboxes** > **Sizing** Job Group
- **Exchange** > **5. Public Folders** Job Group

**Schedule Frequency**

It is recommended to run this job daily after running its dependencies, but it can be scheduled to
run as desired.

## Analysis Tasks for the EX_Mailflow_UserOverview Job

View the analysis task by navigating to the **Exchange** > **EX_UserOverview** > **Configure** node
and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_Mailflow_UserOverview Job](/images/accessanalyzer/11.6/solutions/exchange/mailflowuseroverviewanalysis.webp)

The following analysis tasks are selected by default:

-   **1. User Overview** – Creates the SA_EX_UserOverview_Permissions table, accessible under the job’s
       Results node
-   **2. Add delegate Information to Overview** – Adds Delegates to the SA_EX_UserOverview_Permissions
       table
-   **3. Mailbox Access** – Adds Mailbox Rights to the SA_EX_UserOverview_Permissions table
-   **4. Send As** – Adds Send As Rights to the SA_EX_UserOverview_Permissions table
-   **5. Public Folders** – Adds Public Folder Permissions to the SA_EX_UserOverview_Permissions table
-   **6. DL Membership** – Adds DL Membership to the SA_EX_UserOverview_Permissions table
-   **7. Mailbox Size** – Adds Mailbox Size to the SA_EX_UserOverview_Permissions table
-   **8. Permission Listing** – Creates a listing of each user and their access rights in the
       environment
-   **9. Rank by Total Permissions** – Adds Ranks to the SA_EX_UserOverview_Permissions table
-   **10. Summarize User Message Traffic** – Creates the SA_EX_UserOverview_MessageTraffic table,
        accessible under the job’s Results node
-   **11. Active Sync Devices** – Updates table with User ActiveSync Devices
-   **12. Message Traffic Date Ranges** – Creates the SA_EX_MessageTraffic_DateRange table, accessible
        under the job’s Results node
-   **13. Summarize User Message Volume** – Creates the SA_EX_UserOverview_DataVolume table, accessible
        under the job’s Results node
-   **14. RPC Volume** – Updates SA_EX_UserOverview_Datavolume table with RPC volume
-   **15. OWA Volume** – Updates SA_EX_UserOverview_Datavolume table with OWA volume
-   **16. ActiveSync Volume** – Updates SA_EX_UserOverview_Datavolume table with ActiveSync volume
-   **17. Data Volume Date Ranges** – Creates the SA_EX_TrafficOverview_DateRange table, accessible
        under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX_UserOverview job produces
the following pre-configured reports:

| Report                                          | Description                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Top Users by Message Traffic                    | This report shows the top users of Exchange based on the past 30 days of message count.                                  | None         | This report is comprised of two elements: <ul><li>Bar Chart– Displays top users by 30 day message traffic</li><li>Table – Provides details on top users by 30 day message traffic</li></ul>                                                       |
| Top Users by Message Volume                     | This report shows the top users of Exchange based on the past 30 days of message volume. All statistics are in megabytes | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top users by message volume</li><li>Table – Provides details on top users by message volume</li></ul>                                                                      |
| Top Users by Permissions (Exchange User Access) | This report identifies users with a broad range of access across the exchange environment.                               | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top users by permission count</li><li>Table – Provides details on top users by permission count</li><li>Table – Provides details on permission listing by user</li></ul> |
