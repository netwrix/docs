---
title: "Measure standing privilege reduction"
description: "Measure how standing privilege decreases for the systems in each rollout wave as you move them into Protect mode."
sidebar_position: 60
---

As systems move into Protect mode, standing privilege decreases. You can measure the reduction by comparing Quickstart reports over time.

## Compare Quickstart reports over time

The **Admin List** sheet of a Quickstart report shows which accounts are members of the local administrators group of each system. Export a report before a rollout wave and another one after the product scans the systems in Protect mode.

1. Export a report for the systems in the wave. See [Report and update systems](./report-and-update-systems.md). Use a different file name for each export, for example `wave1_before.xlsx` and `wave1_after.xlsx`.
2. On the **Admin List** sheet, filter `onHost` to `TRUE` and `persistent` to `FALSE`. Each remaining row is an account that has standing administrator access that you haven't marked as persistent.
3. Compare the number of rows in the two files.

In Protect mode with **New Accounts: JITA**, the product removes accounts that aren't persistent from the local administrators group at the next scan, so the count drops.
