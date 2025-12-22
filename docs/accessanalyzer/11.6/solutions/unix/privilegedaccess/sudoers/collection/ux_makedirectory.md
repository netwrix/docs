---
title: "UX_MakeDirectory Job"
description: "UX_MakeDirectory Job"
sidebar_position: 10
---

# UX_MakeDirectory Job

The UX_MakeDirectory job creates a temporary Enterprise Auditor directory on the target host to be
used by the UX_ParseSudoers job.

## Queries for the UX_MakeDirectory Job

The UX_MakeDirectory job uses the Unix Data Collector for the following query:

:::warning
The query is preconfigured for this job. Never modify the query.
:::


![Queries for the UX_MakeDirectory Job](/images/accessanalyzer/11.6/solutions/unix/privilegedaccess/sudoers/collection/makedirectoryquery.webp)

- MakeDirectory – Makes a directory for the sudoers.pl file on the target host
