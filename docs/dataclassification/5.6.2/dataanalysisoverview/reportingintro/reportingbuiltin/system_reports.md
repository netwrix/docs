---
title: "System Reports"
description: "System Reports"
sidebar_position: 50
---

# System Reports

Review the list of the built-in system reports:

- Failed Write Classifications—Provides a list of documents in the core index that failed to have
  their classifications written to the source system (such as SharePoint Managed Metadata Columns).
  Supports filtering by URL and source group.
- Files Skipped—Provides a list of documents that have been excluded from processing because they
  were not explicitly included, or were specifically excluded. See the related sections for the
  content sources for more information on file inclusion / exclusion. Filtering by URL is supported.
- iFilters Detected—Provides a list of detected iFilters per server. iFilters are the Microsoft
  standard for implementing text extraction from binary files. They are used by many search engines
  (including Microsoft Search) to obtain the plain text required to build a search index. Supports
  filtering by server.
- Invalid Term Links – Report that helps identify term boosts or required term clues referencing
  missing/deleted terms.
- **Source Statistics**—Provides high level source statistics (average document size, etc).
- **Taxonomy Log**—Provides a report on changes made to a taxonomy, or specific class.
- Term History—Displays a history of changes made to a taxonomy (clues added/deleted etc). Supports
  filtering by term name.
- Term Links—Provides a list of links to a specified term (Metadata clues, Term Boosts and Required
  Term links)—useful when retiring taxonomy nodes to avoid invalid links to the term you wish to
  remove.
- Text Extraction Failures—Provides a list of documents in the core index that failed text
  extraction (granular iFilter error codes). Supports filtering by URL, title and source group.
