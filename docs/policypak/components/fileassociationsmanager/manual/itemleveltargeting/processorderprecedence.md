---
title: "Understanding Processing Order and Precedence"
description: "Understanding Processing Order and Precedence"
sidebar_position: 10
---

# Understanding Processing Order and Precedence

Within a particular GPO (Computer or User side), the processing order is counted in numerical order.
So lower-numbered collections attempt to process first, and higher-numbered collections attempt to
process last. Then, within any collection, each policy is processed in numerical order from lowest
to highest.

![using_item_level_targeting_6](/images/policypak/fileassociations/itemleveltargeting/using_item_level_targeting_6.webp)

![using_item_level_targeting_7](/images/policypak/fileassociations/itemleveltargeting/using_item_level_targeting_7.webp)

## Merging and Conflicts

PolicyPak File Associations Manager will merge all GPOs (or non-Group Policy methods)
and collections, unless there is a conflict. This is especially important because, instead of having
one flat file that everyone must use and agree upon, you can distribute the directives across
PolicyPak collections or GPOs. Then, everything that doesn't conflict will merge
perfectly.

For example, let's consider that you have two GPOs (or collections) that look like the following:

- `GPO1/Collection1: "TXT -> Notepad.exe", "LOG -> Notepad.exe"`
- `GPO2/Collection2: "TXT -> Sublime.exe", "CFG -> Sublime.exe"`

Assuming GPO 2 or Collection 2 is processed last (based upon natural GP precedence), the result will
be the following association list:

- `TXT -> Sublime.exe` (because GPO2 "wins" in the conflict)
- `LOG -> Notepad.exe` (because there are no conflicts)
- `CFG -> Sublime.exe` (because there are no conflicts)

## Precedence

Policies can be delivered by Group Policy and non-Group Policy methods such as Microsoft Endpoint
Manager (SCCM and Intune) via PolicyPak Exporter or PolicyPak Cloud. As
such, the PolicyPak engine needs to make a final determination whether there is any
overlap of policies. Here is how the precedence works:

- Policies delivered through PolicyPak Cloud have the lowest precedence.
- Policies delivered through PolicyPak files have the next highest precedence.
- Policies delivered through PolicyPak Group Policy directives have the highest
  precedence.


