---
description: >-
  When you use the Migration action for Workflows, migrated files may lose
  original attributes such as creation and modification dates. This occurs when
  the account used for migration lacks Full Control permissions on the
  destination folder.
keywords:
  - migration
  - workflows
  - original attributes
  - creation date
  - modification date
  - Full Control
  - permissions
  - destination folder
  - migrated documents
  - data classification
products:
  - data-classification
sidebar_label: Original Documents Attributes Updated During Migra
tags:
  - troubleshooting-and-errors
title: "Original Documents Attributes Updated During Migration"
knowledge_article_id: kA04u00000111AnCAI
---

# Original Documents Attributes Updated During Migration

## Symptom

The **Migration** action for Workflows does not work as expected. Instead of keeping original attributes of migrated files (like original creation and modification dates), it updates ones for all migrated documents.

## Cause

The account does not have the **Full Control** permissions to the destination folder (the folder where migrated files should be moved).

## Resolution

Grant the account used for migration the **Full Control** permissions to the migration destination folder.
