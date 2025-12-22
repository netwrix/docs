---
title: "Term Settings"
description: "Term Settings"
sidebar_position: 30
---

# Term Settings

When a child node is selected in the tree view, you will be redirected to the Term Management panel.
The Settings tab will display settings for the selected term:

![termsettings](/images/dataclassification/5.7/admin/taxonomies/termsettings.webp)

| Option                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Available for Tagging | Use to prevent any documents getting classified against a class. This would normally only be set to “No” when a class is being used to boost another class – see [Types of Clues](/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/cluestypes.md) topic for information on terms that use the “Term Boost” type clues.                                                                                                                                                                                 |
| Synchronise Term      | Enables / Disables automatic synchronization through the TermStoreManager tool for the term and its children.                                                                                                                                                                                                                                                                                                                                         |
| Relevance Threshold   | The threshold for each Class defaults to 50 – but can be raised (to reduce the number of documents that get classified) or lowered (to increase the number of documents that get classified).                                                                                                                                                                                                                                                         |
| Boosts                | The Weighting Boosts can also be adjusted for each Class. Based on the values above you would expect a 10% score boost if one of its child terms was classified. It is possible to set the _“Child”_ boost to 100%, doing so will in effect enable the parent to always be tagged if the child is tagged. An example for this would be a taxonomy containing regions, if a document was tagged as _“England”_ it should also be tagged as _“Europe”_. |
