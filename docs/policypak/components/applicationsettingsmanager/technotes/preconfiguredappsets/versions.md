---
title: "AppSets: Why do some AppSets have pre-defined Item Level Targeting for an EXACT version number, and others say \"Version 7 to 99\" (or similar)?"
description: "AppSets: Why do some AppSets have pre-defined Item Level Targeting for an EXACT version number, and others say \"Version 7 to 99\" (or similar)?"
sidebar_position: 510
---

# AppSets: Why do some AppSets have pre-defined Item Level Targeting for an EXACT version number, and others say "Version 7 to 99" (or similar)?

We create a test AppSet for a specific product version. But we want the latest version we release to
work for whatever comes next from the manufacturer.

Let's use Techsmith Snagit as an example. As of this writing, there are two AppSets for Snagit: 10
and 11.

The AppSet for Snag it 10 has its Internal ILT set so it only delivers settings WHEN specifically
version 10 of SnagIt is on the machine. The Internal ILT is set as follows:

When %ProgramFiles%TechSmithSnagit 10SnagitEditor.exe FILE VERSION is between 10.0.0.0 and 11.0.0.0.
OR the file %ProgramFiles(x86)%TechSmithSnagit 10SnagitEditor.exe FILE VERSION is between 10.0.0.0
and 11.0.0.0.

But the Snag it 11 AppSet has its Internal ILT set so it delivers when version 11 and up to 99 is on
the machine. Its internal ILT is set as follows:

When `%ProgramFiles%TechSmithSnagit 11SnagitEditor.exe` FILE VERSION is between 11.0.0.0 and
99.0.0.0 OR the file` %ProgramFiles(x86)%TechSmithSnagit 11SnagitEditor.exe` FILE VERSION is between
11.0.0.0 and 99.0.0.0.

Let's assume Techsmith Snagit 12 comes out, and users install it, or it otherwise appears on
machines. It's VERY LIKELY that the AppSet we already created for SnagIt 11 will mostly work for the
next version, version 12.

Then, when version 12 comes out, we test our Version 11 AppSet with Version 12 of the application
and we do one of two things:

1. If there are NO updates at all to the AppSet, we do nothing but make a note in the readme file.
   We note that the AppSet continues to work as expected.
2. If a AppSet DOES require updates:  
        a) We then CHANGE version 11's Internal Filter to work SPECIFICALLY for Version 11.  
        b) We produce the AppSet for version 12. And make its Internal Filter work for Version 12
   to 99.

Now when SnagIt 13, 14, etc comes out, the version 12 AppSet will most likely keep working with it.

This same idea extends, say to Firefox which gets updated quite often in the VERSION number, but
usually, no new checkboxes or features appear in the Firefox Options.

In this way, newer versions of Firefox will "just work" when using our latest Firefox AppSet.


