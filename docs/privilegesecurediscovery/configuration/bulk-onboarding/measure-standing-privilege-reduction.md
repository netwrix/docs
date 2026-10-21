---
title: "Measure standing privilege reduction"
description: "Measure how standing privilege decreases for the systems in each rollout wave as you move them into Protect mode."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: The script analytics_admin_changes_per_wave.js and the wave_specs.csv file that this page uses aren't in the 26.09.1 source, the Quickstart tools archive, or the deployment repository. Supply both files with a documented download location, or remove the script procedure and keep the Quickstart report section. Evidence: grep for analytics_admin_changes_per_wave and wave_specs across the 26.09.1 tree and the deployment repository found nothing.

TODO: Confirm that the script runs on MongoDB 8.0 with mongosh, and that redirecting the output of s1 db (which runs docker exec -it) to a file doesn't capture terminal control characters. Evidence: s1.py:1092-1103 (the --file option runs the files with the database shell). On the test stack, mongosh prints no startup banner, so the old awk command that skipped 8 lines would drop real output; the awk is removed from this page.
:::

As systems move into Protect mode, standing privilege decreases. You can measure the reduction in two ways: compare Quickstart reports over time, or run a script for each rollout wave on the primary node.

## Compare Quickstart reports over time

The **Admin List** sheet of a Quickstart report shows which accounts are members of the local administrators group of each system. Export a report before a rollout wave and another one after the product scans the systems in Protect mode.

1. Export a report for the systems in the wave. See [Report and update systems](./report-and-update-systems.md). Use a different file name for each export, for example `wave1_before.xlsx` and `wave1_after.xlsx`.
2. On the **Admin List** sheet, filter `onHost` to `TRUE` and `persistent` to `FALSE`. Each remaining row is an account that has standing administrator access that you haven't marked as persistent.
3. Compare the number of rows in the two files.

In Protect mode with **New Accounts: JITA**, the product removes accounts that aren't persistent from the local administrators group at the next scan, so the count drops.

## Run the wave script

The script reports the reduction for the systems in each rollout wave. It runs on the primary node by using the `s1 db` command.

### Prepare the files

1. Copy the script `analytics_admin_changes_per_wave.js` and the `wave_specs.csv` parameter file to the following directory on the primary node. The database container sees this directory as `/data/db/queries/`.

   ```text
   /secureone/data/db/queries/
   ```

2. Edit `wave_specs.csv`. Replace or delete the example waves and systems.

The file name must be `wave_specs.csv`. The script reads only the rows that start with `wave` or `system`, and it ignores every other row.

#### wave_specs.csv layout

- Waves. Specify one or more rollout waves. Set the start and end dates to match the rollout that you track. Use the format `wave,<wave-name>,<start-date>,<end-date>` with dates as `YYYYMMDD`.
- Systems. Add the systems to measure, and assign each system to a rollout wave. Use the format `system,<wave-name>,<computer-name>,<domain>`.

Example:

```text
# wave_specs.csv: specification file for analytics_admin_changes_per_wave.js
# The file name must be wave_specs.csv and it must be in /secureone/data/db/queries.
# Only rows that start with "wave" or "system" are used. Everything else is ignored.
#
# type,wave_name,start_date,end_date
wave,rollout_wave1,20260401,20260425
wave,rollout_wave2,20260601,20260630
wave,rollout_wave3,20260701,20260825
#
# type,wave_name,cn,domain
system,rollout_wave1,SERVER01,EXAMPLE
system,rollout_wave2,SERVER02,EXAMPLE
system,rollout_wave3,SERVER01,EXAMPLE
system,rollout_wave3,SERVER02,EXAMPLE
```

### Run the script

1. Change to the directory where you want the report file, for example `/tmp`.
2. Run the script and save the output:

   ```bash
   s1 db --file /data/db/queries/analytics_admin_changes_per_wave.js > ./analytics_admin_changes_per_wave.txt
   ```

The command writes the report to `analytics_admin_changes_per_wave.txt`.
