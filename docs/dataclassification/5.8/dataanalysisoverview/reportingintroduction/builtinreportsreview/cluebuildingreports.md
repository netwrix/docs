---
title: "Clue Building Reports"
description: "Clue Building Reports"
sidebar_position: 40
---

# Clue Building Reports

Review the list of the built-in clue building reports:

- **Auto Classification Review**— Provides a list of documents tagged with a given set of
  classifications. For full debugging detail, enable the trace mode "Classification Calculations"
  before auto-classification.
- Classification Misses—Reports on documents that almost reached the threshold for classification,
  but ‘missed’ being classified by 20% or less. Supports filtering by URL and source group.
- Clue Coverage—Provides a report on the usage of clues within classification tagging. Assists in
  highlighting clues that aren't aiding the classification process, or clues that are too vague.
  Supports filtering by URL and source group.
- **RegEx Performance** - Provides a report on the usage of regular expressions and its performance
  during the search (call count, matches, max (ms), etc.). To activate the report, enable the
  **RegEx Performance** feature in the **Configuration** → **Core** → **System**.
