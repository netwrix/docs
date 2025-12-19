---
title: "Document Reports"
description: "Document Reports"
sidebar_position: 50
---

# Document Reports

Review the list of the built-in document reports:

- Document Tagging—Provides a report on the manual and automatically assigned document
  classifications. Supports filtering by URL and source group.
- Duplicate Detection—Provides a list of documents that are considered “duplicates” within the
  index, using checksum matching. Supports filtering by URL and source group.

    - The following options are available from the drop-down list of the report:

        - Document Content - the text extracted from the document.
        - Document Content (Including Title) - includes the title text in the comparison.
        - Document Content (Including Title+Security) - compares the permissions to avoid showing
          two documents with different permissions as duplicates.
        - File (Exact Raw File Match) - shows duplicates if the files are identical at the binary
          level.

- Manual Tagging—Provides a report on the manual and automatically assigned document
  classifications—filtered specifically to manually classified documents. Supports filtering by URL
  and source group.
- Near Duplicate Detection—Details near duplicate documents across the index. Near duplicates are
  detected as a background process, to enable the background processing simply enable the option
  ‘Near Duplicate Detection’ within the NDC Indexer Settings and rebuild the necessary sources. See
  the [Core Configuration](/docs/dataclassification/5.7/systemconfigurationoverview/configuration/coreconfiguration/coreconfiguration.md) topic for configuration
  information. Supports filtering by URL, source group and excluding content types (comma delimited
  list of content types such as: “css,pdf”).
- Page Statuses—Provides a list of documents at a given status within the index. Supports filtering
  by URL and source group.
