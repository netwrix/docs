---
title: "Admin Console (Item Level Targeting): Why would I want to bypass Internal (pre-defined) Item Level Targeting?"
description: "Admin Console (Item Level Targeting): Why would I want to bypass Internal (pre-defined) Item Level Targeting?"
sidebar_position: 10
---

# Admin Console (Item Level Targeting): Why would I want to bypass Internal (pre-defined) Item Level Targeting?

Starting in build 603, you have the ability to bypass
Internal [Item Level Targeting](https://www.policypak.com/pp-blog/item-level-targeting).

You might want to do this for several reasons:

- Our AppSet's Internal Filters are "too restrictive" for a version of an application. For instance,
  the earliest AppSet we have for Techsmith Snagit is Version 10, and the internal filters will only
  apply when Snagit 10 is on the machine. If you're using version 9, the settings simply won't
  apply… unless you bypass the Internal filters.
- The location you've installed the application and is different than the default install location.
  So if you've installed Snag It 11 to c:\SnagIt11 instead of  %ProgramFiles%\TechSmithSnagit 11
  (for 32-bit) or %ProgramFiles(x86)%\TechSmithSnagit 11 (for 64-bit) the Internal ILT filters will
  evaluate to "false" and therefore not apply as expected.
- If you're using virtualized applications (like App-V 4 or 5, ThinApp 4 or 5) then Internal ILT
  filters are asking the real machine "Is this application really installed on the real machine?"
  Since the application is virtualized, Netwrix Endpoint Policy Manager (formerly PolicyPak) cannot
  evaluate Internal Item Level targeting inside of the virtualized application, and will therefore
  evaluate to false and not apply as expected.
- Sometimes our Item Level Targeting is set to only apply when the application is installed AND
  running on a particular operating system. (Again, check the readme file for the AppSet.) If you
  want to try to make it work anyway, you could bypass Internal Item Level Targeting.

For a video expressing how to bypass Internal ILT, see:

[Bypassing Internal Item Level Targeting Filters](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/itemleveltargetingbypass.md)


