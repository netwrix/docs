---
title: "Precedence"
description: "Precedence"
sidebar_position: 10
---

# Precedence

Endpoint Policy Manager Application Settings Manager can receive settings from a variety of sources
such as:

- Group Policy
- File-based XML data files (see Appendix A for more details)
- Endpoint Policy Manager Cloud

However, settings from all these sources can merge, unless there's a conflict between two
directives. In that case, Endpoint Policy Manager Application Settings Manager applies data in the
following order of predence:

1. Endpoint Policy Manager Cloud data
2. XML data files:

   - First for "Group"
   - Second for "User"
   - Last for "Computer"

3. Group Policy:

   - First for User side
   - Second for Computer (Switched) side
   - Last for Computer (not Switched) side (rare case)

For example, if you delivered a setting using Endpoint Policy Manager Cloud for Java and undelivered
that same setting using an XML data file, then use Group Policy to redeliver that same setting; that
way, Group Policy always takes precedence.



