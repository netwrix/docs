---
description: >-
  Explains which SQL wildcards you can use in Netwrix Auditor reports and
  provides examples of matched results for each wildcard.
keywords:
  - wildcards
  - SQL
  - SSRS
  - Netwrix Auditor
  - pattern matching
  - LIKE operator
  - percent wildcard
  - underscore wildcard
products:
  - auditor
sidebar_label: How to Use Wildcards in Netwrix Auditor Reports
tags: []
title: "How to Use Wildcards in Netwrix Auditor Reports"
knowledge_article_id: kA00g000000H9VUCA0
---

# How to Use Wildcards in Netwrix Auditor Reports

## Question

How to use wildcards in Netwrix Auditor reports? What are the wildcards?

## Answer

Netwrix Auditor reports are based on SQL Server Reporting Services — the same wildcards apply as the wildcards used in SQL queries.

### Wildcards

#### `%`
- Function: The `%` wildcard matches all characters beginning at that position and/or bounded by the next character. See results for the `A%E` query.
- Matched results:
  - `AE`
  - `ABE`
  - `ACE`
  - `ABCDE`

#### `_`
- Function: The `_` underscore wildcard replaces any single character at that position. See results for the `A_E` query.
- Matched results:
  - `A1E`
  - `ABE`
  - `AAE`
  - `AOE`

#### `[***]`
- Function: The `[***]` square brackets wildcard will match a single stated character at the position in the string. See results for the `A[ABC]E` query.
- Matched results:
  - `ABE`
  - `ACE`
  - `AAE`
  - Not `ADE`, `AEE`, etc.

#### `[*-*]`
- Function: The `[*-*]` square brackets wildcard will match a range of characters at that position in the string. See results for the `A[A-D]E` query.
- Matched results:
  - `ABE`
  - `ACE`
  - `AAE`
  - `ADE`
  - Not `AEE`, `AOE`, etc.

#### `[^*-*]`
- Function: The `[^*-*]` square brackets wildcard will match any character outside of the specified range. See results for the `A[^A-D]E` query.
- Matched results:
  - `ARE`
  - `AGE`
  - `AOE`
  - Not `ABE`, `ACE`, `AAE`, `ADE`.

![Wildcards image]./../0-images/ka04u00000117UP_0EM4u000008M7Sw.png)

