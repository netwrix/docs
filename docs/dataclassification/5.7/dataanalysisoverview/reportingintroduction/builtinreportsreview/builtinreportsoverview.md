---
title: "Built-in Reports"
description: "Built-in Reports"
sidebar_position: 10
---

# Built-in Reports

There are a number of reports provided that can be run in browser, as well as exported to excel,
these are described below:

- Classification Coverage – Provides a list of documents that have been tagged with X or fewer
  classifications. Assists in locating documents that have a low number of auto classifications and
  highlights the nearest missed classification. Supports filtering by URL and source group.
- Classification Misses – Reports on documents that almost reached the threshold for classification,
  but ‘missed’ being classified by 20% or less. Supports filtering by URL and source group.
- Clue Counts – Provides a report of the number of clues per term, also includes a count of regular
  expression clues.
- Clue Coverage – Provides a report on the usage of clues within classification tagging. Assists in
  highlighting clues that are not aiding the classification process, or clues that are too vague.
  Supports filtering by URL and source group.
- Document Tagging – Provides a report on the manual and automatically assigned document
  classifications. Supports filtering by URL and source group.
- Duplicate Detection – Provides a list of documents that are considered “duplicates” within the
  index, using checksum matching. Supports filtering by URL and source group.
- Failed Write Classifications – Provides a list of documents in the core index that failed to have
  their classifications written to the source system (such as SharePoint Managed Metadata Columns).
  Supports filtering by URL and source group.
- Files Skipped – Provides a list of documents that have been excluded from processing because they
  were not explicitly included, or were specifically excluded. See Files Included and Files Excluded
  for more information on file inclusion/exclusion. Supports filtering by URL.
- iFilters Detected – Provides a list of detected iFilters per server. iFilters are the Microsoft
  standard for implementing text extraction from binary files. They are used by many search engines
  (including Microsoft Search) to obtain the plain text required to build a search index. Supports
  filtering by server.
- Index Analysis – Provides the ability to manually queue items for background index analysis,
  initially scoped to assist in identifying fuzzy matched duplicate documents.
- Manual Tagging – Provides a report on the manual and automatically assigned document
  classifications – filtered specifically to manually classified documents. Supports filtering by
  URL and source group.
- Near Duplicate Detection – Details near duplicate documents across the index. Near duplicates are
  detected as a background process, to enable the background processing simply enable the option
  ‘Near Duplicate Detection’ within the NDC Indexer Settings and rebuild the necessary sources. See
  Core Configuration for the configuration details. Supports filtering by URL, source group and
  excluding content types (comma delimited list of content types such as: “css,pdf”).
- Page Statuses – Provides a list of documents at a given status within the index. Supports
  filtering by URL and source group.
- Term Cloud – Displays the top 50 key terms/phrases across the index, selecting a term expands the
  cloud into the related terms.
- Term History – Displays a history of changes made to a taxonomy (clues added/deleted etc).
  Supports filtering by term name.
- Text Extraction Failures – Provides a list of documents in the core index that failed text
  extraction (granular iFilter error codes). Supports filtering by URL, title and source group.
- Term Links – Provides a list of links to a specified term (Metadata clues, Term Boosts and
  Required Term links) – useful when retiring taxonomy nodes to avoid invalid links to the term you
  wish to remove.
