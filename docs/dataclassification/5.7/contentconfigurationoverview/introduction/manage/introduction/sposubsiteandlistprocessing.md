---
title: "Configuring subsite and list processing"
description: "Configuring subsite and list processing"
sidebar_position: 30
---

# Configuring subsite and list processing

The **Entity Configuration** tab displays configuration for the site collection. You can navigate to
the subsites/lists to configure their settings.

![sharepointadvancedentities_thumb_0_0](/images/dataclassification/5.7/configuration/configinfrastructure/sharepointadvancedentities_thumb_0_0.webp)

- The Include column for each entity contains an indicator (tick or cross) showing whether the
  container is configured for crawling.
- The **Has Config?** column contains an indicator showing whether custom metadata mappings have
  been defined for the entity.
- Use the **Exclude** link in the last column to exclude the selected list / subsite from
  crawling. For excluded entities, this column contains the **Include** link.

:::note
Excluding the entity will not automatically remove content from the index. If content has
already been crawled, manually delete it via the QS, or re-collect the content source data.
:::


When new content is defined for crawling (i.e. included), perform a re-index operation.

- Use the **Edit** link to modify settings for the selected list or subsite. See below for
  details.

**List Configuration**

1. To modify list/library settings, select it and click Edit.
2. In the properties window, configure **Content Fields** and **Special Field Mappings** as needed.
   You can use the dropdown lists/selectors to search for and assign SharePoint fields to the
   appropriate mappings.

Consider the following:

- In the absence of a list level configuration the collector will automatically use the subsite
  level mapping (on a field by field basis).
- In the absence of a list level configuration the appropriate source defaults will automatically be
  used.

**Subsite Configuration**

1. To modify subsite settings, select the subsite and click Edit.
2. In the properties window, configure **Content Fields** and **Special Field Mappings** as needed.
   You can use the dropdown lists/selectors to search for and assign SharePoint fields to the
   appropriate mappings.

Consider the following:

- In the absence of a subsite level configuration the collector will automatically use the source
  level mappings (on a field by field basis).
- Content fields can't be configured at the subsite level.
