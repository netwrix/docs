---
title: "Updating to the Latest Version"
description: >-
  How to verify your current version of Netwrix Access Analyzer 2601 and update to the latest release. Applies to both auto-update and targeted version installations.
sidebar_label: "Updating to the Latest Version"
keywords:
  - access analyzer 2601
  - upgrade access analyzer
  - dspmctl version
  - dspmctl set-revision
  - dspmctl sync
  - update access analyzer
  - target revision
  - auto update
  - argocd sync
  - check version
products:
  - accessanalyzer
tags:
  - kb
knowledge_article_id: kA0Qk000000XXXXKAA
---

# Updating to the Latest Version

## Overview

ArgoCD deploys Netwrix Access Analyzer 2601, and you update it using the `dspmctl` command-line tool over an SSH connection to the host server. How you update Access Analyzer depends on how it was originally installed:

- **Auto-update installation** — ArgoCD automatically applies new releases as they become available. You do not need to perform any manual update steps; you only need to verify that ArgoCD applied the update.
- **Targeted version installation** — The original installation pinned a specific version. You must manually set the new target version and trigger a sync.

If you are not sure which installation type applies to your environment, run `sudo dspmctl version` and compare the output to the latest announced release. If they match, the application is already current. For system requirements, see [System Requirements](/docs/accessanalyzer/2601/install/system/requirements).

## Instructions

### Auto-Update Installations

1. Connect to the Access Analyzer host server over SSH.
2. Run the following command to check the currently installed version:

   ```bash
   sudo dspmctl version
   ```

3. Compare the output to the latest announced release version. If the versions match, no further action is required.

### Targeted Version Installations

1. Connect to the Access Analyzer host server over SSH.
2. Run the following command to check the currently installed version:

   ```bash
   sudo dspmctl version
   ```

3. Run the following command to set the new target version, replacing `<version>` with the latest release number (for example, `1.0.15`):

   ```bash
   sudo dspmctl set-revision netwrix <version>
   ```

4. Run the following command to force all pods to sync immediately:

   ```bash
   sudo dspmctl sync netwrix
   ```

5. Wait one to five minutes for the pods to restart and stabilize.
6. Run the version command again to confirm the update was applied:

   ```bash
   sudo dspmctl version
   ```

   The output should match the version you set in step 3.

> **NOTE:** If the version does not update after five minutes, wait an additional two to three minutes and run `sudo dspmctl version` again. Pod restarts can take longer depending on system load.
