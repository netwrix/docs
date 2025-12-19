---
title: "Keyword Criteria"
description: "Keyword Criteria"
sidebar_position: 30
---

# Keyword Criteria

Keyword criteria consists of a list of comma-separated words. If any word in the list is found in
the file, it is considered a hit.

![Keywords window](/images/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/criteriatype/keywordswindow.webp)

The options on the Keywords window are:

- Name – Name of the keyword sub-criteria as it appears in the Configuration window
- Add Keyword – Add a keyword to the Value list
- Remove Keyword – Remove a selected keyword from the Value list
- Import Keyword File – Import keywords from a file
- Export Keyword File – Export keywords as a file
- Match Type – Choose whether keyword matches for the Keyword criteria **Must match** or **Must not
  match**
- Case Sensitive Keywords – If enabled, checks letter case when matching keywords
- Count only distinct occurrences – Select the checkbox to enable only distinct occurrences to be
  counted during scan jobs
- Apply these keywords to these file components – Select which file components the keywords apply
  to:

    - Name
    - Contents
    - Metadata

- Look for at least this many occurrences – Adjust the slider to configure how many occurrences are
  required for keyword criteria to match

    - The minimum value is 1
    - The maximum value is 10
