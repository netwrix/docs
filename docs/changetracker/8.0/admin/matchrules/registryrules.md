---
title: "Registry Inclusion/Exclusion Match Rules"
description: "Registry Inclusion/Exclusion Match Rules"
sidebar_position: 20
---

# Registry Inclusion/Exclusion Match Rules

Similar to **Folder/File Match Rules**, **Registry Key/Value Match Rules** can be defined and used
to precisely track only keys and values of interest.

**For example**, tracking the ‘**WinLogon**’ registry key and values is important because there are
a number of session management security controls defined in this key. However, in certain
environments, the ‘DCacheUpdate’ values may change causing spurious alerts that are not significant
from a security perspective (DCacheUpdate stores domain names in binary form for internal Winlogon
programming code to use). Therefore the ability to easily track all keys and values below the
Winlogon key, but exclude DCacheUpdate changes may be desirable.

The ‘**All Registry Values**’ Match Rule is available by default but to define the ‘Isolate
DCacheUpdate Value Changes’ exclusion, the following Custom PathMatch Definition would be added:

![RegistryInclusion](/images/changetracker/8.0/admin/matchrules/registryinclusion.webp)

**Step 1 –** **KeyMatchType** - (missing or bad snippet)

- All;
- Exact;
- Wildcards;
- Regex.

**Step 2 –** **KeyMatchExpression**. (missing or bad snippet)

- If using ‘**All**’, then use “”;
- If using ‘**Exact**’, then specify an exact “keyname”;
- If using ‘**Wildcards**’, then specify a separated wildcards list eg “key_abc\*|key_def\*”;
- If using ‘**Regex**’, then specify a regular expression eg
  “^S-1-5-21-[0-9]+-[0-9]+-[0-9]+-[0-9]\{4,\}\\Software\\Policies\\Microsoft\\Windows\\Control
  Panel\\Desktop”.

**Step 3 –** ValueMatchType. o(missing or bad snippet)ptions the same as for the ‘foldermatchtype’
(All|Exact|Wildcards|Regex).

**Step 4 –** **ValueMatchExpression** – (missing or bad snippet)

- If using ‘**All**’, then use “”;
- If using ‘**Exact**’, then specify an exact “filename”;
- If using ‘**Wildcards**’, then specify a separated wildcards list eg “\*.exe|\*.dll”;
- If using ‘**Regex**’, then specify a regular expression eg “^audit[0-9]\*\.(log|txt)$”.

**Step 5 –** **SkipRootKey** – (missing or bad snippet) **true** or **false**

**Step 6 –** **Subkey Recursion**. (missing or bad snippet)

- Unlimited;
- None (operate on specified folder only);
- “n” = recurse through 1, 2 or 3 subfolders.
