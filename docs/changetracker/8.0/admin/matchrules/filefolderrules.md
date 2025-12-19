---
title: "File and Folder Match Filters for Inclusion and Exclusion Rules"
description: "File and Folder Match Filters for Inclusion and Exclusion Rules"
sidebar_position: 10
---

# File and Folder Match Filters for Inclusion and Exclusion Rules

There are a range of prebuilt Match Filters provided with Netwrix Change Tracker. Enterprise which
enable precision monitoring of only the attributes required (including prebuilt exclusion filters
for popular AV packages that update often and create lots of 'change noise'). Often due to paths
containing a mixture of files that are to be monitored, alongside files for which changes can be
ignored, it is desirable to define multidimensional rules for includes and excludes.

For example, if I wish to monitor all files within a specified path and all sub-paths, I can use the
built-in 'All files (recursive)' match filter.

However, it may be desirable to reduce 'noise' from the route path by applying an exclusion for any
changes relating to temporary files, for example, swp, swx or ~ file variants. There is actually a
built-in Pathmatch Definition for this provided 'Linux temp files in folder'.

However, by way of example, the example **Custom Pathmatch Definition** below provides this policy:

![CustomPathmatchDefinition](/images/changetracker/8.0/admin/matchrules/custompathmatchdefinition.webp)

**Step 1 –** **FolderMatchType** - (missing or bad snippet)

- All|Exact
- Wildcards
- Regex

**Step 2 –** **FolderMatchExpression** - (missing or bad snippet)

- If using 'All', then use ""
- If using 'Exact', then specify an exact "foldername"
- If using 'Wildcards', then specify a separated wildcards list eg "backup\*|old\*"
- If using 'Regex', then specify a regular expression e.g., "^backup"

**Step 3 –** **FileMatchType** – options the same as for the 'foldermatchtype' (All, Exact,
Wildcards, Regex);

**Step 4 –** **FileMatchExpression** – (missing or bad snippet)

- If using 'All', then use ""
- If using 'Exact', then specify an exact "filename"
- If using 'Wildcards', then specify a separated wildcards list eg "\*.exe|\*.dll"
- If using 'Regex', then specify a regular expression eg "^audit[0-9]\*\.(log|txt)$".

**Step 5 –** **SubfolderRecursion** – (missing or bad snippet)

- Unlimited
- None (operate on specified folder only)
- 'n' — recurse through 1, 2 or 3 subfolders.
