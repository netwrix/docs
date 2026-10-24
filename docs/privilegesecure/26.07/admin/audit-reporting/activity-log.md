---
title: "Activity log"
description: "Review the sessions that ran in a date range, who ran them, and for how long, and export the results as a CSV file."
sidebar_position: 30
---

# Activity log

The **Activity Log** page lists the sessions that ran in a date range. Use it to see which users ran sessions, on which resources, under which access policies, and for how long.

To open it, select **Auditing & Reporting** > **Activity Log** in the Privilege Secure Console.

{/* TODO screenshot: Activity Log page showing the summary, top 5 users, and sessions tables with the Export as CSV button */}

## Filter the log

The toolbar has these controls:

| Control | Description |
|---|---|
| **Search** | Filters the tables to rows that match the text you enter. |
| **Change type** | Limits the tables to selected users. The default value is `<all users>`. The label doesn't match what the filter does. |
| **Date range** | Sets the start and end dates. The default range is the last 30 days. |
| **Refresh** | Reloads the data. |

{/* TODO verify: the on-screen label of the user filter (the lab showed "Change type") and the values it offers. The 26.03 docs list All Users, Top 5 Users, and Top 10 Users, but the lab showed only the default <all users> */}

Matching on a user name is exact. A leading or trailing space in the name returns no match.

{/* TODO verify: whether the exact-match behavior applies to Search or to the user filter (PSAM-1409) */}

When a table has no rows for the range, it shows **None**. Widen the date range if you expect results.

## Summary for the date range

The **Summary for the date range** table combines all sessions in the range.

| Column | Description |
|---|---|
| **SESSIONS** | Total number of sessions. |
| **TOTAL DURATION** | Combined duration of all sessions. |
| **AVERAGE** | Average session duration. |
| **MINIMUM** | Shortest session duration. |
| **MAXIMUM** | Longest session duration. |

## Top 5 users for the date range

The **Top 5 users for the date range** table lists the users with the most sessions. It has the **USER**, **SESSIONS**, **TOTAL DURATION**, **AVERAGE**, **MINIMUM**, and **MAXIMUM** columns, calculated per user. Click a user to open the user's details. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).

## Sessions by all users

The sessions table is titled with the number of sessions, for example "12 sessions by all users". It has these columns:

| Column | Description |
|---|---|
| **SESSION USER** | The user who ran the session. |
| **HOST** | The resource the session used. |
| **LOGIN ACCOUNT** | The account the user signed in with on the resource. |
| **POLICY** | The access policy that granted the session. See [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md). |
| **ACTIVITY** | The activity the session ran. See [Activities](/docs/privilegesecure/26.07/configuration/activities/activities.md). |
| **START** | When the session started. |
| **DURATION** | How long the session ran. |
| **END** | When the session ended. |
| **NOTES** | Notes entered when the session was requested. |
| **TICKET NUMBER** | Ticket number entered when the session was requested. |

You can resize and sort the columns.

## Export the log as a CSV file

Click **Export as CSV** above the sessions table to save the log as a CSV file.

To export the log with a script instead, see [Exporting the Activity Log as a CSV](/docs/kb/privilegesecure/workflows-and-automation/exporting-the-activity-log-as-a-csv).

{/* TODO verify: whether Export as CSV exports the filtered rows or the whole range, and the file name and columns */}
