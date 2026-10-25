---
title: "Activity token complexity"
description: "Set the length, characters, and format rules for the temporary accounts that activity tokens create, and apply a policy to a connection profile."
sidebar_position: 70
---

# Activity token complexity

An activity token complexity policy controls the format of the temporary account that an activity creates for a session. You apply a policy to a connection profile. A connection profile that doesn't select a policy uses the built-in `<default>` policy.

The policy applies to the account name, not to a password. **Length** is the number of characters in the generated name. **Max Consecutive Chars** is the most times the same character can repeat in a row.

## Default values

A new policy form starts with these values.

| Field | Default |
|---|---|
| **Must Start With** | **Lowercase** |
| **Must End With** | **None** |
| **Length** | 19 |
| **Max Consecutive Chars** | 2 |
| **Include Characters** | **Lowercase** and **Numbers** selected; **Uppercase** cleared |

The form accepts a **Length** from 5 to 19 characters. The maximum account name length is 19 characters.

## Create an activity token complexity policy

1. Select **Access Policy** > **Activity Token Complexity**.
1. Click the plus (**+**) button above the list.
1. In **Name**, enter a unique name.
1. (Optional) In **Description**, enter the purpose of the policy.
1. Set **Must Start With** and **Must End With** to **None**, **Lowercase**, **Uppercase**, or **Numeric**.
1. Set **Length** and **Max Consecutive Chars**.
1. (Optional) In **Characters to Exclude**, enter other characters to leave out of the name.
1. Under **Include Characters**, select the kinds of characters to include.
1. Click **Save**.

{/* TODO screenshot: the Activity Token Complexity form with default values */}

### Example

A policy named `short-names` uses these values:

| Field | Value |
|---|---|
| **Must Start With** | **Lowercase** |
| **Must End With** | **None** |
| **Length** | 12 |
| **Max Consecutive Chars** | 1 |
| **Characters to Exclude** | `0O1lI` |
| **Include Characters** | **Lowercase** and **Numbers** |

When the name includes no text from the user's name, each generated name has 12 characters and starts with a lowercase letter, and no character appears twice in a row. Otherwise, the start rule and the repeat rule apply only to the generated characters. The characters `0`, `O`, `1`, `l`, and `I` never appear, in addition to the characters that the console always excludes.

## Fields

| Field | Description |
|---|---|
| **Name** | The name of the policy. |
| **Description** | The purpose of the policy. |
| **Must Start With** | The kind of character the name starts with: **None**, **Lowercase**, **Uppercase**, or **Numeric**. |
| **Must End With** | The kind of character the name ends with: **None**, **Lowercase**, **Uppercase**, or **Numeric**. |
| **Length** | The number of characters in the generated account name. The value must be from 5 to 19. When the name includes text taken from the user's name, Privilege Secure keeps at most **Length** minus 5 characters of that text and fills the rest with generated characters. |
| **Max Consecutive Chars** | The most times the same character can appear in a row. |
| **Characters to Exclude** | Characters you want to leave out. The console excludes these in addition to the characters shown under **Additional characters excluded**. |
| **Additional characters excluded** | A read-only list of the characters that the console always excludes. |
| **Include Characters** | The kinds of characters the console can use: **Lowercase**, **Uppercase**, and **Numbers**. |

The characters that the console always excludes are `/`, `\`, `"`, `[`, `]`, `:`, `;`, `|`, `=`, `,`, `+`, `*`, `?`, `<`, `>`, `%`, and the space character.

## Apply a policy to a connection profile

1. Select **Access Policy** > **Connection Profiles**.
1. Select the connection profile.
1. In the **Session Control** section, select the policy in **Activity Token Complexity Policy**.
1. Click **Save**.

See [Connection profiles](connection-profiles.md).

## Delete a policy

Point to a policy in the list, click the trash icon, and confirm.

## Related topics

- [Connection profiles](connection-profiles.md)
- [Activities](../activities/activities.md)
