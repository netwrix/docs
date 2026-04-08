---
title: "DLL Hijack Protection"
description: "How DLL Hijack Protection detects and blocks DLL hijacking attacks in Endpoint Privilege Manager."
sidebar_position: 10
---

# DLL Hijack Protection

## Overview

DLL Hijack Protection helps prevent attackers from exploiting how Windows loads dynamic link libraries (DLLs).
Some applications load DLLs by name instead of full path. Windows then searches multiple locations — starting with the application's own folder. If that folder is writable by a standard user, a malicious DLL can be dropped in and executed by the application.
This feature detects and blocks those scenarios.

---

## What the Feature Actually Enforces

DLL Hijack Protection makes a decision based on three things:

1. **Does the policy apply to this process?**
2. **Is the DLL load considered risky?**
3. **Is there an exclusion that overrides the behavior?**

Only when all conditions line up does blocking occur.

---

## When the Policy Applies

This depends on the selected mode:

### Safe Elevated Mode

Applies **only to elevated processes** (running as admin/system).

### Anti-Hijack Mode

Applies to:

- **Elevated processes**
- **Standard processes running from trusted locations** (e.g., Program Files)

---

## What Is Considered "Risky"

A DLL load is considered unsafe when the DLL can be modified by a user who is not trusted (that is, a user not listed in the Approved Members list).

In practice, this means the DLL is located in a user-writable location. If this condition is met, the load is treated as suspicious and can be blocked.

---

## Approved Members

The **Approved Members** list defines who is trusted to modify application files.

> If a DLL can be modified by a user, and that user is NOT in the Approved Members list, the DLL load is blocked.

### Why this exists

Some identities are expected to modify files as part of normal operations:

- Administrators
- SYSTEM
- Trusted Installer

In real environments, you may also have:

- Software deployment tools
- Packaging accounts
- IT groups

The Approved Members list lets you explicitly trust those identities.

### What happens without tuning

| DLL writable by | Result |
|---|---|
| Only trusted/approved identities | Allowed |
| Any non-approved user | Blocked |

This setting directly controls what the system considers "safe write access."

---

## Exclusions

If a matching exclusion exists, the action is allowed — even if it would otherwise be blocked.

Exclusions can be based on:

- File path
- File hash
- Digital signature

### Use cases

- Legacy apps doing non-standard DLL loading
- Known safe behavior that doesn't conform to standard patterns
- Temporary exceptions during rollout

---

## Actions

### Deny Execution

Blocks the DLL load. Options:

- Default message (recommended)
- Custom message
- Silent (no user notification)

### Allow and Log

Allows the behavior and logs the event. Primarily used during testing or phased rollout.

---

## Logging Options

| Option | Description |
|---|---|
| Blocked & Allowed | Full visibility (recommended) |
| Do not generate events | No logging |

---

## How It Works

When a DLL is about to load:

1. Check if the **policy applies** (based on mode and process type).
2. Check if the DLL is **modifiable by a non-approved user**.
3. Check for any **matching exclusion**.
4. Final decision:
   - If risky and no exclusion → **Blocked**
   - Otherwise → **Allowed** (and optionally logged)

---

## Practical Examples

### Example 1: Elevated app, unsafe DLL

- App runs elevated.
- DLL is in a user-writable folder.
- Folder is writable by standard users (not in Approved Members).

Result: **Blocked**

### Example 2: Elevated app, IT-controlled folder

- DLL folder is writable only by the IT deployment group.
- Group is in Approved Members.

Result: **Allowed**

### Example 3: Standard app from Program Files (Anti-Hijack Mode)

- App is launched from a trusted location.
- DLL is user-writable by non-approved users.

Result: **Blocked**

### Example 4: Exclusion in place

- Same conditions as Example 3, but the DLL or EXE matches an exclusion.

Result: **Allowed**

---

## Best Practices

- Start with **Audit Mode**.
- Move to **Safe Elevated Mode** first (low risk, high value).
- Then enable **Anti-Hijack Mode** for broader protection.
- Carefully define **Approved Members**.
- Use exclusions sparingly — don't rely on them as a long-term fix.
- Keep logging enabled during rollout.

---

## Known Considerations

- Behavior depends heavily on file permissions. Unexpected ACLs can cause blocks.
- Some legacy apps may require exclusions.
- Interaction timing with elevation policies can occasionally affect process classification.

---

## Summary

DLL Hijack Protection blocks DLLs that can be tampered with by unauthorized users — not just obviously malicious ones. Defining your Approved Members list carefully is the most important configuration step.
