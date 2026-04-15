---
title: "Are there any caveats about removing the PolicyPak CSE after it is deployed?"
description: "Are there any caveats about removing the PolicyPak CSE after it is deployed?"
sidebar_position: 10
---

# Are there any caveats about removing the PolicyPak CSE after it is deployed?

Here are the caveats about removing the Netwrix PolicyPak CSE.

Scenario 1: You manually remove the CSE while a user affected by PolicyPak directives
is installed. However, other users (on the same machine) also have existing PolicyPak
directives.

Result: Only the user which is currently logged will have his settings revert back. The rest of the
users will not have his settings reverted back.

Scenario 2: You automatically remove the CSE using some kind of software management system.

Result: It's possible that no users will have his settings revert back because there could be no one
logged in at the time of the revocation of the PolicyPak CSE.

Scenario 3: You are delivering settings to App-V, ThinApp, or other supported application
virtualization technology.

Result: In no cases are these settings reverted back when the PolicyPak CSE is
removed.

Note in all cases, after the CSE is removed the following will occur:

- PolicyPak will not accept any PolicyPak directives within GPOs or via
  files-based (MSI) delivery.
- PolicyPak will no longer provide UI lockdown. All graying and hiding and tab
  lockouts will become un-locked.
- PolicyPak will revert any ACL Lockdown. Users will be able to modify settings
  directly again inside the registry and files.
- PolicyPak will no longer re-apply any settings during login, Group Policy refresh,
  PPupdate
- PolicyPak will no longer re-apply any settings when the application is re-launched,
  in the background or when the computer is offline.


