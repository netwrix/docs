---
title: "Browse"
description: "Browse"
sidebar_position: 50
---

# Browse

To view the documents classified for each term, click on the Browse tab. This will display a list of
documents achieving the minimum score set for classification in the term.
[See Classification Rules (Clues) for more information.](/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/clues.md)

:::note
This list will include the current classification status of each document. Any changes
made to the classification clues since the last time each document was classified are not taken into account.

To see how the classification of each document would change based on the current configuration 
of the class, tick the Show Movements checkbox. When selected, the results will display any change 
in document scoring between the current stored document score and how the document would be scored 
against the current classification clues for each document.
:::


The document text will be highlighted based upon the clues configured for the term. Highlighting
will include regular expression matches when configured (Config→Query Server→Enable Regex Browse
Highlighting (Advanced)).

:::note
If a new class is selected in the treeview menu, the view will remain in "Browse" mode and
will show the documents for the selected class.
:::


You can use the Browse function to:

- Identify documents that are receiving a score, but are "missing" being classified because they do
  not quite reach the terms threshold. For example, changing the mode to "Near Misses `<20%`" for a
  term with a threshold of 50, will find any documents that scored 40 or more, but did not reach the
  threshold.
- Identify low scoring documents that are only just reaching the classification threshold. For
  example, changing the mode to "Low Scoring Documents `<20%`" for a term with a threshold of 50
  will find any documents that scored between 50 and 60.

![browsetab_thumb_0_0](/images/dataclassification/5.7/admin/reporting/browsetab_thumb_0_0.webp)

:::note
By default, results from sources that have not been, or are not, indexed are not included in the Browse results. 
This includes certain sources that are not indexed by default, such as Exchange.
To include these results, select the Show Unindexed Documents checkbox.
:::


To restrict the browsing scope, you can either add a URL filter, or add a custom filter, as well as
select to show document movements. These options are configured in the same way as for
[Search Documents by Clue](/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/search.md).
