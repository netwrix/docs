---
title: "Monitoring Scope"
description: "Monitoring Scope"
sidebar_position: 40
---

# Monitoring Scope

Review a full list of object types and activities monitored on Pure Storage FlashArray with the
add-on.

| Object       | Action                                                                 | Property                                                                                                    |
| ------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| File, Folder | Added                                                                   | Who, What (path), Where (server), When, Workstation (client IP), Protocol (SMB/NFS)                          |
| File, Folder | Removed                                                                 | Who, What, Where, When, Workstation, Protocol                                                                |
| File, Folder | Modified                                                                | Who, What, Where, When, Workstation, Protocol                                                                |
| File, Folder | Modified (owner/attribute change)                                      | Who, What, Where, When, Workstation, Protocol, Owner (SMB only; not available for NFS or if ACL enrichment is disabled) |
| File, Folder | Modified (permissions/DACL change)                                     | Who, What, Where, When, Workstation, Protocol, Permissions (SMB only; not available for NFS or if ACL enrichment is disabled) |
| File, Folder | Renamed                                                                 | Who, What, Where, When, Workstation, Protocol, Name (before/after)                                            |
| File, Folder | Moved                                                                   | Who, What, Where, When, Workstation, Protocol, Path (before/after)                                            |
| File, Folder | Add (Failed Attempt), Remove (Failed Attempt), Modify (Failed Attempt), Rename (Failed Attempt), Move (Failed Attempt) | Same properties as the corresponding successful action, for access-denied attempts |

Notes:

- **What** is reported as a `\\server\share\...` UNC-style path for SMB events. For NFS events, the
  path is reported exactly as FlashArray reports it — a native Unix path — since there is no
  Windows-style UNC equivalent to convert it to.
- **Owner** and **Permissions** "after" values require SMB and ACL enrichment enabled in the add-on
  configuration; they are never available for NFS events.
- If a Monitoring Plan is configured in the wizard, its name is also included as a detail on every
  activity record.
