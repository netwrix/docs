---
description: >-
  Explains why integer division in T-SQL can produce 0 or 100 and shows how to
  calculate percentages correctly using decimal casting and ROUND.
keywords:
  - SQL
  - T-SQL
  - percentages
  - integer division
  - CAST
  - ROUND
  - decimal
  - SQL Server
products:
  - general
sidebar_label: calculate percentages in SQL properly
tags:
  - database-and-diagnostics
title: "calculate percentages in SQL properly"
knowledge_article_id: kA04u0000000IQqCAM
---

# calculate percentages in SQL properly

## Summary
When working with TSQL percentages you see unexpected results where a percent will either be 0 or 100.

## Issue
Number values tend to be `INTEGER (int)` type; when working with percentages SQL expects decimal. You can fix this by explicitly converting values to a decimal type or using decimal literals. The examples below show two options.

## Instructions
In the following example, both data types are `int`, so the result of the operation is also an `int` instead of a decimal, which would be required to show the percentage value you are trying to generate. For example, the following calculation returns 0:

```sql
SELECT 3/4 * 100
GO
```

You actually expect the answer to be 75. But SQL Server sees you dividing the integer 3 by the integer 4.

The examples below show how to get the expected result:

```sql
SELECT 3.0/4.0 * 100
GO
```

or

```sql
SELECT cast(3 as decimal)/ cast(4 as decimal) * 100
GO
```

These examples return the value you're looking for because you explicitly cast the integer values as decimals. The first example forces the integer to become a decimal by referencing the integer 3 as the decimal number `3.0`. The second example uses the `CAST()` function to do the same.

Optionally, you can also produce a result with decimal precision. For example, to see 75.1% you can use the `ROUND()` function, which rounds a number to a specified number of decimal places.

Parameter:
`ROUND(number, decimals, operation)`

Example:

```sql
SELECT cast(Round(((3*100.0)/4)) as decimal(5,1))
```

## Legacy Article ID
2300
