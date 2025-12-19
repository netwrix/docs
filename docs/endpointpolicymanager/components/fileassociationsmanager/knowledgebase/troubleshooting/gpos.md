---
title: "How does PP File Associations Manager merge between GPOs and/or Collections?"
description: "How does PP File Associations Manager merge between GPOs and/or Collections?"
sidebar_position: 20
---

# How does PP File Associations Manager merge between GPOs and/or Collections?

Netwrix Endpoint Policy Manager (formerly PolicyPak) File Associations Manager works particularly
well, because instead of having one flat file which everyone must use and agree upon, it allows the
use to distribute the directives across Endpoint Policy Manager Collections or GPOs.

For example, if you have 2 GPOs (or Collections):

**Step 1 –** GPO1 / Collection1: .`txt -> Notepad.exe`, .`log -> Notepad.exe`

**Step 2 –** GPO2 / Colleciton2: .`txt -> Sublime.exe`, .`cfg -> Sublime.exe`

and assuming GPO 2 is processed last based upon natural GP precedence, then you get the following
resulting association list:

- .`txt -> Sublime.exe`, (Because GPO2 wins in the conflict.)
- .`log-> Notepad.exe`, (Because there are no conflicts.)
- `.cfg -> Sublime.exe` (Because there are no conflicts.)


