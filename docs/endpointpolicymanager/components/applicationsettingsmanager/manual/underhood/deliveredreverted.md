---
title: "How AppSets and Settings are Delivered and Reverted"
description: "How AppSets and Settings are Delivered and Reverted"
sidebar_position: 30
---

# How AppSets and Settings are Delivered and Reverted

Endpoint Policy Manager Application Settings Manager evaluates AppSets and settings on the User side
when

- the user logs on,
- the Group Policy background refresh occurs (between 90 and 120 minutes),
- Microsoft GPupdate is run,
- The command `PPUpdate.exe `is run, and
- an application under Endpoint Policy Manager Application Settings Manager control is launched.

Endpoint Policy Manager Application Settings Manager evaluates AppSets and settings on the Computer
side when

- the computer starts up,
- the Group Policy background refresh occurs for the computer (between 90 and 120 minutes),
- Microsoft GPupdate is run,

Endpoint Policy Manager Application Settings Manager` PPupdate` is run, and

an application is launched that is under Endpoint Policy Manager Application Settings Manager
control.

During the evaluation, the Endpoint Policy Manager client-side extension (CSE) checks the following
conditions, as well as other conditions:

- Is the GPO deleted?
- Is the AppSet entry deleted?
- Is the AppSet valid, and is Endpoint Policy Manager Application Settings Manager licensed?
- Is the application set to "Always re-apply settings when application runs" or is "Do not re-apply
  settings with Reinforcement Timer" unchecked? (These items are checked only when the CSE is
  running in one of these modes.)
- Is Item-Level Targeting set on the AppSet?
- Was the AppSet never applied?
- Was the AppSet already deleted?

After these checks, the Endpoint Policy Manager Application Settings Manager engine returns one of
three verdicts:

```
Pak item is DELETED.
```

```
Pak item is APPLIED.
```

```
Pak item is SKIPPED.
```

Then, at processing time, AppSets are processed in the following order: deleting, applying, and
skipping.

## Deletion Phase

The deletion phase is managed in the following order:

**Step 1 –** Deleted AppSets are processed.

**Step 2 –** Deleted or unlinked GPO AppSets are removed (in reverse order).

**Step 3 –** Any GPOs that apply (but have deleted AppSet items within them) are processed.

**Step 4 –** Deleted AppSets in changed GPOs are set in reverse order.(AppSets deleted in MMC go
here.)

## Application Phase

The application phase proceeds in the following order:

**Step 1 –** Paks are applied within GPOs that are not updated or changed.

**Step 2 –** Paks are applied in precedence order within GPOs that are changed.

## Skipping Phase

Any GPOs that are unchanged and any Paks within GPOs that are unchanged are simply skipped.



