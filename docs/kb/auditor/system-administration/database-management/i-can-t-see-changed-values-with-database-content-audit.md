---
description: >-
  When you enable Database Content Audit in Netwrix Auditor, a report may show
  only the count of modified rows without the before/after values. This article
  explains the two possible causes and how to resolve them.
keywords:
  - database content audit
  - database audit
  - primary key
  - triggers
  - Netwrix Auditor
  - monitoring rules
  - detailed monitoring
  - ALTER TABLE
  - modified rows
products:
  - auditor
sidebar_label: I can't see changed values with Database Content A
tags: []
title: I can't see changed values with Database Content A
knowledge_article_id: kA00g000000H9SbCAK
---

# I can't see changed values with Database Content A

You have enabled Database Content Audit in Netwrix Auditor and received a report which contains only the number of modified rows without values. There are two possible reasons:

1. You enabled the triggerless (**Do not use triggers**) mode. This option does not show `before` and `after` values.  
2. You enabled the **Use triggers for detailed monitoring** mode, but the table that you specified in the **Monitoring rules** does not contain a primary key. To add a primary key to the table, please run the following SQL command:

```sql
ALTER TABLE table_name ADD PRIMARY KEY (primary_key_column_name)
```

Please note that If you use the ALTER TABLE statement to add a primary key, the primary key column must already have been declared to not contain NULL values (when the table was first created).
