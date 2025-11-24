---
description: >-
  Learn how to add disk space to the Long-Term Archive used by Netwrix Auditor
  and how to decrease archive retention to free up space while preserving
  historical data when possible.
keywords:
  - long-term archive
  - archive retention
  - disk space
  - Netwrix Auditor
  - Investigations
  - system health
  - archive overflow
  - retention period
products:
  - auditor
sidebar_label: How to Add Additional Space to Long-Term Archive
tags: []
title: "How to Add Additional Space to Long-Term Archive"
knowledge_article_id: kA04u000001115iCAA
---

# How to Add Additional Space to Long-Term Archive

## Overview

In some cases, you may need to add space to the Long-Term Archive. Please follow the steps below to enhance your archive capacity.

## Instructions

**Long-Term Archive** is a file-based storage where Netwrix Auditor saves the collected activity records. By default, it is located on the system drive at `%PROGRAMDATA%\Netwrix Auditor\Data` and keeps data for `120 months (10 years)`. The product informs you if you are running out of space on a system disk where it is stored.

There is a **Long-Term Archive** widget that helps you monitor the Long-Term Archive capacity. The widget can be found by clicking the **Health Status** tile on the Netwrix Auditor home screen. It displays the current size and daily increase of the Long-Term Archive as well as the remaining free space on the target drive.

Once the free disk space starts approaching the minimum level, you will see events in the **Netwrix Auditor System Health** log. When the free disk space is less than `3 GB`, the Netwrix services responsible for audit data collection will be stopped, which means that data collection also stops.

Typically, Netwrix recommends adding space (`150-200 GB`) to the drive where the Long-Term Archive resides to resolve the issue. Follow the steps below to find where your Long-Term Archive data is stored.

1. In Netwrix Auditor, navigate to **Settings**.
2. Select the **Long-Term Archive** page and review where your audit data is written. You can modify the archive retention settings here; however, read the steps below for the correct procedure.

In this scenario, all historical data collected by the product will be preserved. If you do not have enough hardware resources for that, add some space (recommended `25-30 GB`) on the Auditor Server host to restore regular product functionality and then decrease the retention period of the archive.

> **IMPORTANT:** After changing the retention, for example to 1 year, all data older than 1 year will be removed (it might take up to several days) and that freed up even more disk space.

Follow the steps below to decrease the retention period for the archive:

1. Add some space (`25-30 GB`) on the Auditor Server.
2. Shortly after adding additional space, start all Netwrix services.
3. Immediately after that, decrease the Long-Term Archive retention. For that, navigate to the Auditor settings -> **Long-Term Archive** and click **Modify** under the Long-term Archive. Then provide a new retention value in months.

It is up to you to decide how long you want to keep historical data. If you know that no historical data will be needed past one year, decrease the retention to `12 months`. The historical data can be imported from the Archive back to your Audit Database when needed via the **Investigations** feature.

Learn more about Investigations in the following article: [Investigations](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/investigations)

Review additional recommendations for preventing Long-Term Archive overflow in the following article: [How to Prevent Long-Term Archive Overflow](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-prevent-long-term-archive-overflow)
