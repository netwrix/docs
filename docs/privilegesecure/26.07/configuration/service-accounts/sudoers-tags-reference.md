---
title: "Sudoers tags reference"
description: "Look up the sudoers tags that change how sudo treats a command, and see which tags the Add Sudoers rule action accepts in its Commands field."
sidebar_position: 32
---

# Sudoers tags reference

A sudoers tag changes how `sudo` treats the commands that follow it on a rule. This page lists the tags that `sudo` supports and shows which ones the **Add Sudoers rule** action accepts.

Tags apply to everything after them on the same rule line until an opposite tag overrides them. Separate several tags with colons or commas, depending on where you write them. In a sudoers file, tags are joined with colons. In the **Commands** field of the action, use commas or colons. See [Sudoers tags in the Commands field](/docs/privilegesecure/26.07/configuration/activities/action-types.md#sudoers-tags-in-the-commands-field).

## Authentication

| Tag | Effect |
| --- | --- |
| `PASSWD` | Requires a password before the command runs. This is the default behavior. |
| `NOPASSWD` | Allows the command to run without a password prompt. |

## Command execution

| Tag | Effect |
| --- | --- |
| `EXEC` | Allows the tagged command to run other programs. This is the default behavior. |
| `NOEXEC` | Prevents the tagged command from running other programs, which blocks shell escapes. |

## Environment variables

| Tag | Effect |
| --- | --- |
| `SETENV` | Allows the user to set environment variables when running the command. |
| `NOSETENV` | Doesn't allow setting environment variables. This is the default unless overridden. |

## Logging and auditing

| Tag | Effect |
| --- | --- |
| `LOG_INPUT` | Logs the input that the user types during the session. |
| `NOLOG_INPUT` | Doesn't log session input. This is the default behavior. |
| `LOG_OUTPUT` | Logs the output that the command produces. |
| `NOLOG_OUTPUT` | Doesn't log command output. This is the default behavior. |

## Symbolic link following

| Tag | Effect |
| --- | --- |
| `FOLLOW` | Follows symbolic links when `sudo` checks command paths. Used with `sudoedit`. |
| `NOFOLLOW` | Doesn't follow symbolic links when `sudo` checks command paths. |

## Mail notification

| Tag | Effect |
| --- | --- |
| `MAIL` | Sends mail to the configured recipient when the command runs. |
| `NOMAIL` | Doesn't send mail when the command runs. This is the default behavior. |

## Example rules

These lines show tags in a sudoers file:

```text
username ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx
username ALL=(ALL) NOPASSWD:SETENV: /opt/scripts/deploy.sh
username ALL=(ALL) NOEXEC:NOPASSWD: /usr/bin/less
```

Tag support in your environment can vary by sudo version and platform. See the sudoers manual (`man sudoers`) for the tags that your version supports.

## Tags in the Add Sudoers rule action

From 26.07.3, the **Commands** field of the **Add Sudoers rule** action accepts sudoers tags. It accepts every tag in this reference except `PASSWD` and `NOPASSWD`. The **Prompt for password** field controls password behavior instead. If you enter `PASSWD` or `NOPASSWD` in **Commands**, Privilege Secure ignores it and writes a warning to the action log, and the other tags and the commands still apply.

For the accepted formats, the rules for combining tags, and the cases where the action fails, see [Add Sudoers rule](/docs/privilegesecure/26.07/configuration/activities/action-types.md#add-sudoers-rule).

## Related topics

- [Sudoers pattern reference](/docs/privilegesecure/26.07/configuration/service-accounts/sudoers-pattern-reference.md)
- [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md)
