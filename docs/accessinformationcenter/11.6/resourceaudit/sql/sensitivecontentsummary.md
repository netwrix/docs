---
title: "Sensitive Content Summary Report"
description: "Sensitive Content Summary Report"
sidebar_position: 20
---

# Sensitive Content Summary Report

The Sensitive Content report at the **SQL Server** node provides a count of tables where criteria
matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content report](/images/accessinformationcenter/11.6/resourceaudit/sql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – SQL server name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of tables with criteria matches

There is one table at the bottom displaying Details on the tables where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity
