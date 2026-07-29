---
title: "AccessCertificationItemReviewer"
description: ""
sidebar_position: 3
---

Junction table associating certification items with their reviewers when a campaign uses multi-reviewer mode.

## Properties

|Property|Details|
|---|---|
| Campaign required | **Type:** Int64 **Description:** Identifier of the campaign the item belongs to. Denormalized for query performance. |
| Item required | **Type:** Int64 **Description:** Identifier of the certification item being reviewed. |
| Reviewer required | **Type:** Int64 **Description:** Identifier of the resource acting as reviewer for this item. |
