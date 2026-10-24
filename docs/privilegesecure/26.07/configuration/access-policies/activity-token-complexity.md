---
title: "Activity token complexity"
description: "Set the length, characters, and format rules for the temporary accounts that activity tokens create, and apply a policy to a connection profile."
sidebar_position: 70
---

# Activity token complexity

An activity token complexity policy controls the format of the temporary account that an activity creates for a session. You apply a policy to a connection profile. A connection profile that doesn't select a policy uses the built-in `<default>` policy.

{/* TODO verify: the exact meaning of Max Consecutive Chars (identical characters in a row, or any characters of the same kind) and whether Length applies to the account name, the password, or both. */}

## Default values

A new policy form starts with these values.

| Field | Default |
|---|---|
| **Must Start With** | **Lowercase** |
| **Must End With** | **None** |
| **Length** | 19 |
| **Max Consecutive Chars** | 2 |
| **Include Characters** | **Lowercase** and **Numbers** selected; **Uppercase** cleared |

The maximum account name length is 19 characters.

{/* TODO verify: whether Length accepts a value above 19. The 26.03 page says the maximum account name length is 19; the lab didn't test a higher value. */}

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

{/* TODO: add an example of a custom policy with values for Length, Max Consecutive Chars, and Characters to Exclude */}

## Fields

| Field | Description |
|---|---|
| **Name** | The name of the policy. |
| **Description** | The purpose of the policy. |
| **Must Start With** | The kind of character the name starts with: **None**, **Lowercase**, **Uppercase**, or **Numeric**. |
| **Must End With** | The kind of character the name ends with: **None**, **Lowercase**, **Uppercase**, or **Numeric**. |
| **Length** | The maximum number of characters that the policy allows. |
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
