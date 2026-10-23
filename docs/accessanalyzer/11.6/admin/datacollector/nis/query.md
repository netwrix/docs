---
title: "NIS: NIS Query"
description: "NIS: NIS Query"
sidebar_position: 60
---

# NIS: NIS Query

Use the NIS Query page to configure and test NIS query regular expressions. It is a
wizard page for the category of:

- Custom NIS Scan

![NIS Data Collector Wizard NIS Query page](/images/accessanalyzer/11.6/admin/datacollector/nis/query.webp)

The Data Source configuration options are:

- NIS Map – Specify the name of the NIS map to query
- Load Data – Fetches the first 50 rows of data of the specified NIS map from the test host
- Paste Data – Uses text from the clipboard as the test data source
- Open File – Allows using a text file as test data. The preview box shows the test data.

The Query Expressions configuration options are:

- Per-Row Query – A regular expression that is evaluated once per source row, and the
  sub-expressions returned make up the first columns of the result rows
- Per-Value Query – This value is evaluated multiple times per source row, generating one result row
  for each evaluation
- Use map key as first column of results – When selected, this option sets the map key as the first
  column in the data table
- Insert row when there is no per-value match – When selected, this option generates a blank row for
  evaluations that return no per-value match
