---
title: "What happens to Application Settings Manager settings when the Endpoint Policy Manager license expires / if my company chooses not to renew?"
description: "What happens to Application Settings Manager settings when the Endpoint Policy Manager license expires / if my company chooses not to renew?"
sidebar_position: 20
---

# What happens to Application Settings Manager settings when the Endpoint Policy Manager license expires / if my company chooses not to renew?

When a Netwrix Endpoint Policy Manager (formerly PolicyPak) license expires, all computers which are
licensed will stop being licensed.

If the administrator chose to set any settings within the Pak inside the GPO to "Revert this
settings when they no longer apply" then when the license expires, those settings will, indeed,
revert back.

All other settings' values will remain on the machine as they last were set.

However, the following Endpoint Policy Manager protections will stop working:

- Endpoint Policy Manager will no longer provide UI lockdown. All graying and hiding and tab
  lockouts will become un-locked.
- Endpoint Policy Manager will revert any ACL Lockdown. Users will be able to modify settings
  directly again inside the registry and files.
- Endpoint Policy Manager will no longer re-apply any settings during login, Group Policy refresh,
  PPupdate
- Endpoint Policy Manager will no longer re-apply any settings when the application is re-launched,
  in the background or when the computer is offline.


