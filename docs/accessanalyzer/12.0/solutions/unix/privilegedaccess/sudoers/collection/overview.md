---
title: "0.Collection Job Group"
description: "0.Collection Job Group"
sidebar_position: 10
---

# 0.Collection Job Group

The 0.Collection job group collects details on all rights granted via sudoers within audited Unix
and Linux Environments.

![0.Collection Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/unix/privilegedaccess/sudoers/collection/collectionjobstree.webp)

The jobs in the 0.Collection job group are:

- [UX_MakeDirectory Job](/docs/accessanalyzer/12.0/solutions/unix/privilegedaccess/sudoers/collection/ux_makedirectory.md) – This job creates a temporary Access Analyzer
  directory on target Unix and Linux environments to be used by the UX_ParseSudoers job
- [UX_ParseSudeors Job](/docs/accessanalyzer/12.0/solutions/unix/privilegedaccess/sudoers/collection/ux_parsesudeors.md) – This job parses all rights granted via sudoers in the
  audited environment
