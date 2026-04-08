---
title: "Standing Privilege Reduction Metric Script"
description: "Standing Privilege Reduction Metric Script"
sidebar_position: 70
---

# Standing Privilege Reduction Metric Script

Standing Privilege Reduction Metric Script

# Standing Privilege Reduction Metric Script

As machines are enrolled into protect mode standing privilege is reduced. The attached script is
able to show the reduction in standing privilege for a group of systems that are included in a given
rollout wave.

There is a script file and wave_specs parameter file attached.  The wave_spec file is also detailed
below.  Both should be copied to Privilege Secure primary node directory:
`/discovery/data/db/queries/`.

**wave_spec.csv file**

Replace or delete the wave and system examples given.

Waves:  You can specify one or multiple rollout waves.  Change the wave start and end date to match
the rollout being tracked.

Systems:  Add one or more systems to gather metrics on and assign the rollout wave to be used for
each.

```
## This wave_specs.csv file is a specification file to be used with the analytics_admin_changes_per_wave.js script.# The name must be wave_specs.csv and it must exist in the /discovery/data/db/queries directory.## 1: cd to directory where you would like report to be output to (e.g:  cd /tmp)# 2: Run with:#       s1 db --file /data/db/queries/analytics_admin_changes_per_wave.js | awk 'NR > 8 `{ print }`' > ./analytics_admin_changes_per_wave.txt## Only rows starting with "wave" or "system" are used, everything else is ignored.#type,wave_name,start_date,end_date#Example:  wave,rollout_wave1,20200514,2020062wave,rollout_wave1,20200401,20200425wave,rollout_wave2,20200601,20200601wave,rollout_wave3,20200301,20200825#type,wave,cn,domain#Example:  system,rollout_wave1,comp1,testdomainsystem,rollout_wave1,WINCOMP1,CSTESTsystem,rollout_wave2,WINCOMP2,CSTESTsystem,rollout_wave3,WINCOMP1,CSTESTsystem,rollout_wave3,WINCOMP2,CSTEST
```

Run the script with the following command:

```
s1 db --file /data/db/queries/analytics_admin_changes_per_wave.js | awk 'NR > 8 { print }' > ./analytics_admin_changes_per_wave.txt
```
