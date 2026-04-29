---
title: "About Wildcards"
description: "About Wildcards"
sidebar_position: 10
---

# About Wildcards

When specifying the source for SMB shares, you can use wildcards. We used these earlier with the
special two-asterisk (\*\*) syntax to signify the start of recursion.

The supported wildcards are:

- `*` - matches zero or more characters (except slashes and backslashes)

- `?` - matches exactly one character (except slashes and backslashes)
- `**` - matches zero or more characters (including slashes and backslashes)

Examples:

- `\\server\share\Folder1\*.txt`: This will accept all .txt files from Folder1.
- `\\server\share\Folder*\*.txt`: Note the star after the word "Folder" in addition to the one for
  the .txt. This will accept all .txt files from `\\server\share\Folder1` and
  `\\server\share\FolderTest` and every other folder with the word "Folder" in its name.
- `\\server\share\folder\??.pdf`: This will match every filename that has two characters and the
  extension .pdf.
- `\\server\share\Folder?\??.pdf`: This will match every folder with the word "Folder" plus one
  additional character (like Folder1, Folder4, Folder9) and then match every file that has two
  characters (like 11.pdf, 12.pdf, 22.pdf) from `\\server\share\Folder1`, `\\server\share\Folder2`,
  and so on.


