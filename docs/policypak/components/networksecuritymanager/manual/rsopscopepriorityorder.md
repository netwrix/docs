---
title: "Configure RSoP Scope Priority Order"
description: "Use the Configure RSoP Scope Priority Order ADMX setting to control the evaluation order of Machine, Switched, and User policy scopes for Network Security Manager."
sidebar_position: 40
---

# Configure RSoP Scope Priority Order

## Overview

Network Security Manager evaluates policies across three scopes when calculating the Resultant
Set of Policy (RSoP) for an endpoint:

- **Machine** — policies applied at the computer level
- **Switched** — policies applied through loopback processing (switched scope)
- **User** — policies applied at the user level

By default, Network Security Manager evaluates these scopes in the following order:

**Machine → Switched → User**

When two scopes contain conflicting settings for the same policy, the scope evaluated later takes
precedence. The default order means User scope wins over Switched, which wins over Machine.

The **Configure RSoP Scope Priority Order** ADMX setting lets administrators change this
evaluation order to suit their environment without modifying individual policies.

## When to Use This Setting

You may need to change the RSoP scope evaluation order when:

- Your environment uses loopback processing (Switched scope) and you need it to take precedence
  over User scope policies.
- You want Machine-level policies to always win over user-specific or switched policies.
- You're troubleshooting unexpected policy application results caused by scope precedence.

## Setting Location

The setting is located in the PolicyPak ADMX at the following path:

```
Computer Configuration | Policies | Administrative Templates |
PolicyPak ADMX Settings | Network Security Manager |
Configure RSoP Scope Priority Order
```

:::note
You must install the PolicyPak ADMX files in your central store or local
`PolicyDefinitions` folder before this setting is available in the Group Policy editor. For
instructions, see
[Troubleshooting with ADMX files](/docs/policypak/misc/videos/troubleshooting/admxfiles.md).
:::

## Configuration

The setting supports three states:

| State | Behavior |
|---|---|
| **Not Configured** | Network Security Manager uses the default evaluation order: Machine → Switched → User. |
| **Disabled** | Network Security Manager uses the default evaluation order: Machine → Switched → User. |
| **Enabled** | The evaluation order dropdown becomes active. Select one of the six available permutations. |

When set to **Enabled**, select the evaluation order you want from the dropdown:

| Order | Evaluation sequence | Last scope wins |
|---|---|---|
| **Machine, Switched, User** *(default)* | Machine first, User last | User |
| **Machine, User, Switched** | Machine first, Switched last | Switched |
| **Switched, Machine, User** | Switched first, User last | User |
| **Switched, User, Machine** | Switched first, Machine last | Machine |
| **User, Machine, Switched** | User first, Switched last | Switched |
| **User, Switched, Machine** | User first, Machine last | Machine |

<!-- TODO: Add screenshot of the ADMX setting dialog showing the dropdown with all six permutations -->

## How Scope Precedence Works

Network Security Manager merges its active policy scopes and evaluates them in the configured
order. When the same setting is defined in more than one scope, the value from the scope
evaluated **last** takes effect on the endpoint. Scopes evaluated later overwrite scopes
evaluated earlier.

For example, with the order **Switched, User, Machine**:

- If a setting is defined in both User and Machine scope, the Machine value applies.
- If a setting is defined in both Switched and User scope, the User value applies.
- If a setting is defined only in Switched scope, that value applies with no conflict.

## Example: Making Switched Scope Win Over User Scope

In environments that rely heavily on loopback processing, it's common to want Switched scope
settings to override User scope settings. To achieve this, set the evaluation order to either:

- **Machine, User, Switched** — Switched evaluates last and wins over both Machine and User.
- **User, Machine, Switched** — Switched evaluates last and wins over both User and Machine.

Choose between these two based on whether you also need Machine or User scope to take
precedence over each other.

## Applying the Setting

1. Open the **Group Policy Management Console (GPMC)** and edit or create a GPO linked to the
   target computers.
2. Navigate to the setting path listed in the **Setting Location** section.
3. Set the policy to **Enabled** and select the scope order you want from the dropdown.
4. Click **OK**.
5. Run `gpupdate /force` on the target endpoints, or wait for the next Group Policy refresh.

:::note
This is a **Computer Configuration** setting. It applies to the machine regardless of which
user is logged on, and affects only Network Security Manager's RSoP evaluation on that machine.
:::
