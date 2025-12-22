---
description: >-
  Explains whether it is safe to delete the Backups folder at
  C:\ProgramData\Netwrix Auditor\Backups after upgrades and provides guidance on
  retaining backups for supported versions.
keywords:
  - Backups
  - Netwrix Auditor
  - 'C:\ProgramData\Netwrix Auditor\Backups'
  - supported versions
  - upgrade
  - cleanup
  - disk space
  - backup retention
products:
  - auditor
sidebar_label: Backups Folder in Netwrix Auditor
tags: []
title: "Backups Folder in Netwrix Auditor"
knowledge_article_id: kA04u000001116vCAA
---

# Backups Folder in Netwrix Auditor

## Question

The **Backups** folder located in `C:\ProgramData\Netwrix Auditor\Backups` occupies some space after multiple upgrades done previously. Is it safe to delete it?

## Answer

It is strongly recommended to keep the backups for supported versions. Once a version is not supported, it is safe to delete the corresponding backups. As of August 2023, there are 3 supported versions (10, 10.5, and 10.6). Refer to the following link for additional information on supported versions of Netwrix Auditor: https://www.netwrix.com/supported_versions.html#na.

> **NOTE:** The **Backups** folder contains backups for prior versions of Netwrix Auditor in case some files are corrupted during an upgrade. It may contain backups for all versions previously used in your environment.
