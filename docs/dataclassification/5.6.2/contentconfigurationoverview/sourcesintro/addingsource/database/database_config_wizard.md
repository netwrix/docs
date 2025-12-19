---
title: "Database Configuration Wizard"
description: "Database Configuration Wizard"
sidebar_position: 10
---

# Database Configuration Wizard

For the database sources, you can enable security-based crawling, that is, finding sensitive data
(which logically will either be stored in text or binary-based columns). It is possible to create an
intelligent content mapping, crawling certain fields as unstructured index text, and other fields —
as mapped metadata.

This section explains how to use the Database Configuration Wizard for configuring the crawling
process. You can run this wizard when adding the data source, or you can later open the **Source**
tab, select your database source and click Launch Wizard.

**IMPORTANT!** If you want to crawl a target database in your MS SQL replication model, you must
backup your database before running the configuration wizard.

See next:

- [Introduction](#introduction)
- [Tables](#tables)
- [Exceptions](#exceptions)
- [Summary](#summary)

## Introduction

On this step, provide matching rules to search in the database for data that match exactly or are
similar to a specific pattern. You can indicate both: exact or partial matches over the database
strings.

## Tables

On this step, review the grid of the tables in the database that are not currently enabled for
crawling (if already enabled then don't show in this grid) and have at least one text/binary column.
Configure your crawling scope considering the following:

| Column           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Table            | Contains the list of all tables in the database, followed by alphabetically.                                                                                                                                                                                                                                                                                                                                                                           |
| Text Columns     | Contains the number of text/binary columns for each table. Click the number link to review the full list.                                                                                                                                                                                                                                                                                                                                              |
| Metadata Columns | Contains the number of non-text/binary columns for each table. Click the number link to review the full list.                                                                                                                                                                                                                                                                                                                                          |
| Primary Key      | Contains the primary key for each table. Review the following Microsoft article for more information on SQL Server primary keys: [Primary Keys Constraints](https://docs.microsoft.com/en-us/sql/relational-databases/tables/primary-and-foreign-key-constraints?view=sql-server-ver15#primary-keys-constraints).                                                                                                                                      |
| Modified Filter  | To improve performance the product performs automatic re-indexing against a field in each table that indicates the last modified date of the row. Where possible, the product will automatically map this based upon the exact match or inclusion of one of the below values within the field name. Additional values can be added below in order to support other naming conventions for modified fields (different language or internal convention). |
| Include?         | Select if you want to disable crawling for this table. **NOTE:** You can disable crawling for all listed tables using the Include none option in the upper right corner of the wizard or enable crawling accordingly with the Include all.                                                                                                                                                                                                             |
| View Sample      | Shows a table of the top 15 rows allowing to view if the table is one to exclude.                                                                                                                                                                                                                                                                                                                                                                      |

## Exceptions

On this step, review tables with missing primary keys and/or missing modified filters.

- Missing primary keys – only shows if users have tables that are missing primary keys where the
  user can select the primary key from a dropdown of all the columns. This step does not show if
  there are no missing primary keys.
- Missing modified filters – only shows if there are tables missing modified filters. Here tables
  are shown that are missing a modified and that have a datetime (or equivalent) typed column to
  select. If there are none this stage is skipped.

## Summary

At this step, review your database configuration.

- Overview – review a high-level overview of the number of configured tables and excluded tables
  with their details.
- Configured Tables – double-check the configuration of tables to be crawled.
- Excluded Tables – review the full list of the tables to be excluded from classification scope with
  exclusion reason.

When the database configuration has been completed you will be redirected to the Advanced Source
Configuration, this allows you to define how the database will be crawled. It is possible to crawl
either specific tables, or crawl custom queries (defined select statements, which may use JOIN
statements across multiple tables).
[See Database for more information.](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sourcesmanage/manage_database.md)
