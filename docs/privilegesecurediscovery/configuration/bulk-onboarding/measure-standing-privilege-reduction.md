---
title: "Measure standing privilege reduction"
description: "Measure how standing privilege decreases for the systems in each rollout wave as you move them into Protect mode."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: The script analytics_admin_changes_per_wave.js and the wave_specs.csv file that this page uses aren't in any repository at the release refs. Supply both files with a documented download location, or remove this page. Evidence: git grep for analytics_admin_changes_per_wave in main, deployment, and infrastructure found only the old documentation reference.

TODO: Verify that the script runs on the current database shell (MongoDB 8.0 with mongosh) and that s1 db --file still accepts it. Confirm how many banner lines to skip: the old command skipped 8 lines for the legacy shell. Evidence: docker/s1tool/src/s1.py (s1 db --file) in the pre-move report r04; script not available.

TODO: Confirm the install directory for the queries folder. The page uses /secureone/data/db/queries/. Evidence: secureone.sh line 12 and s1.py line 112 (pre-move report r04).
:::

As systems move into Protect mode, standing privilege decreases. A script can report this reduction for the systems in each rollout wave. The script runs on the primary node by using the `s1 db` command.

## Prepare the files

1. Copy the script `analytics_admin_changes_per_wave.js` and the `wave_specs.csv` parameter file to the following directory on the primary node:

   ```text
   /secureone/data/db/queries/
   ```

2. Edit `wave_specs.csv`. Replace or delete the example waves and systems.

The file name must be `wave_specs.csv`. The script reads only the rows that start with `wave` or `system`, and it ignores every other row.

### wave_specs.csv layout

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

## Run the script

1. Change to the directory where you want the report file, for example `/tmp`.
2. Run the script. The `awk` command removes the banner lines that the database shell prints at the start of the output:

   ```bash
   s1 db --file /data/db/queries/analytics_admin_changes_per_wave.js | awk 'NR > 8 { print }' > ./analytics_admin_changes_per_wave.txt
   ```

The report is saved in `analytics_admin_changes_per_wave.txt`.
