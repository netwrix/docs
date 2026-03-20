---
title: "Custom Classification"
description: "Creating custom classification rules"
sidebar_position: 40
---

# Custom Classification

In addition to built-in patterns, administrators can create custom classification rules to detect organization-specific sensitive data types. Custom rules use regular expressions and integrate with the existing pattern and taxonomy group framework.

## Creating a Custom Pattern

To create a custom pattern:

1. Navigate to **Sensitive Data** > **Pattern Groups**.
2. Select an existing group or click **Create Group** to define a new pattern group.
3. Click **Add Pattern**.
4. Complete the following fields:

| Field | Description |
|---|---|
| **Name** | A descriptive label (e.g., "Internal Employee ID") |
| **Regex** | The regular expression to match against file content |
| **Confidence** | Expected accuracy level: **High**, **Medium**, or **Low** |
| **Description** | Optional notes about what the pattern detects |

5. Click **Save**.

## Creating a Custom Pattern Group

Custom pattern groups organize related custom patterns under a shared label. To create a group:

1. Click **Create Group** from the Pattern Groups page.
2. Enter a **Name** and optional **Description**.
3. Add one or more patterns to the group.
4. Click **Save**.

## Mapping Custom Patterns to Taxonomy Groups

To include custom patterns in compliance reporting, associate the custom pattern group with one or more taxonomy groups. Edit the taxonomy group and add the custom pattern group to its list of associated patterns.

:::warning
Test custom regex patterns thoroughly before enabling them in production scans. Overly broad patterns can generate excessive false positives and impact scan performance.
:::
