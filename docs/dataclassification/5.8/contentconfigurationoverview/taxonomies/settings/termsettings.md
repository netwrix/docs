---
title: "Term Settings"
description: "Term Settings"
sidebar_position: 30
---

# Term Settings

When you select a child node in the tree view, you go to the Term Management panel.
The Settings tab displays settings for the selected term:

![termsettings](/images/dataclassification/5.8/admin/taxonomies/termsettings.webp)

| Option                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Available for Tagging | Set this to “No” only when you use this class to boost another class — see [Types of Clues](/docs/dataclassification/5.8/contentconfigurationoverview/taxonomies/clues/cluestypes.md) for information on terms that use the “Term Boost” type clues.                                                                                                                                                                                 |
| Synchronise Term      | Enables / Disables automatic synchronization through the TermStoreManager tool for the term and its children.                                                                                                                                                                                                                                                                                                                                         |
| Relevance Threshold   | The threshold for each Class defaults to 50. You can raise it to reduce how many documents the system classifies, or lower it to increase the number.                                                                                                                                                                                                                                                         |
| Boosts                | You can also adjust the Weighting Boosts for each Class. Based on the preceding values you would expect a 10% score boost if the product classified one of its child terms. You can set the _”Child”_ boost to 100%, which in effect ensures the product always tags the parent if it tags the child. An example for this would be a taxonomy containing regions: if the product tagged a document as _”England”_, it should also tag it as _”Europe”_. |
