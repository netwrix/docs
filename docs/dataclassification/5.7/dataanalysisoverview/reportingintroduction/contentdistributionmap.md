---
title: "Content Distribution Map"
description: "Content Distribution Map"
sidebar_position: 50
---

# Content Distribution Map

The Content Distribution treemap allows you to interrogate your data in two different ways:

- Taxonomy Grouping—When grouped by taxonomy, the treemap will highlight the sources with the
  largest numbers of documents tagged to the selected taxonomies / terms. An example use case is
  when detecting sensitive documents—in this case the treemap will show the highest risk sources.
  Clicking on an area will drill into the term / taxonomy to provide a clear view of the affected
  sources. Optionally "safe" sources, such as quarantine locations, can be excluded.
- Source Grouping—When grouped by source, the treemap will show the level of content either untagged
  or tagged within the taxonomy. The treemap will display the top level terms for the selected
  taxonomy with the counts including any document that is tagged to either the top level term or one
  of its descendants. Documents can be tagged to one or more terms so the number associated with
  each top level term may exceed the number of documents in the source.

It is possible to filter and refine this display, either selecting specific sources / source-groups
or excluding specific sources / source-groups.

![contentdistribution_thumb_0_0](/images/dataclassification/5.7/admin/reporting/contentdistribution_thumb_0_0.webp)

You can zoom in to a particular area of the chart by left-clicking in that area; left clicking on
the title will allow exporting of that specific node. Right-clicking will zoom back out again.
