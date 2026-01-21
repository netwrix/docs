---
description: >-
  After upgrading Netwrix Threat Prevention to 7.3.5, agents may appear in an
  unknown state. This article explains the root cause and provides step-by-step
  remediation to restore agent status.
keywords:
  - threat-prevention
  - agents
  - unknown state
  - root.dat
  - SIEnterpriseManager
  - SIWindowsAgent
  - upgrade
  - port 3739
products:
  - threat-prevention
sidebar_label: Threat Prevention Agents in "Unknown" State Follow
tags: []
title: Threat Prevention Agents in "Unknown" State Following Upgrade
knowledge_article_id: kA04u0000000HwFCAU
---

# Netwrix Threat Prevention Agents in "Unknown" State Following Upgrade

## Symptom

After upgrading Netwrix Threat Prevention 7.3.5 all agents are in an unknown state.

If you try to disable hardening or anything similar in this state you may also get an error along the lines of `Failed to stop service 'SIWindowsAgent'. Error: Provider failure`.

## Problem

When installing the newer version of Netwrix Threat Prevention, the installer did not automatically detect the previous version's `root.dat` file. This is most commonly the result of installing the new version to a different path than that of the previous version.

## Solution

1. Copy the `root.dat` from the old installation location to the `SIEnterpriseManager/CertsInfo` folder.
2. Enable the Pre-7.3.5 port for the port used previously (default of `3739`) in the `SIEnterpriseManager.exe.config`.

Further information on mixed version mode and the different configuration options can be found [here](https://support.stealthbits.com/hc/en-us/articles/4408149584020).
