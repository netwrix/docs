---
title: "Remove a System from Privilege Secure"
description: "Remove a System from Privilege Secure"
sidebar_position: 140
---

# Remove a System from Privilege Secure

Remove a System from Privilege Secure

# Remove a System from Privilege Secure

This article covers the proper sequence to remove Privilege Secure OAM and protection from a system.

## Windows Systems

**Step 1 –** Log into Netwrix Privilege Secure for Discovery UI.

**Step 2 –** Find system using the 'Grant Access' page.

**Step 3 –** Persist any accounts you want to remain in local Administrators group.

**Step 4 –** If OAM enabled:

- Set OAM to Unmanaged (if applicable).
- Rescan.
- Copy the last know password for the built-in Administrator account.

**Step 5 –** Set Protect Mode and Scan Mode to disabled (no need to rescan).

**Step 6 –** RDP or locally log into system .

**Step 7 –** Remove the Privilege Secure service account from local Administrators group.

Privilege Secure now has no access to change local Administrators group.

**NOTE:** If you just remove the Privilege Secure service account from the system, one or more of
the following can result:

- OAM alternate administrator account remains in the system
- The built-in Administrator will remain disabled
- No accounts will be added back into the local Administrators group

## Linux Systems

**Step 1 –** Log into the Netwrix Privilege Secure for Discovery UI.

**Step 2 –** Find system using the 'Grant Access' page.

**Step 3 –** Persist any accounts you want to retain sudo privileges.

**Step 4 –** Rescan.

**Step 5 –** Set Protect Mode and Scan Mode to disabled (no need to rescan).

**Step 6 –** SSH or locally log into system.

**Step 7 –** Remove sudo privileges for the Privilege Secure service account.

**Step 8 –** Remove Privilege Secure

Privilege Secure now has no access to this system.
