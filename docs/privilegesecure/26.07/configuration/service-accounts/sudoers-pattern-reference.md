---
title: "Sudoers pattern reference"
description: "Match commands and arguments in a Privilege Secure sudoers rule with wildcards and POSIX regular expressions on Linux and BSD, and test a rule safely."
sidebar_position: 31
---

# Sudoers pattern reference

A sudoers rule matches a command by its path and, optionally, by its arguments. This page explains the wildcard and regular expression patterns that `sudo` supports on Linux and BSD, with examples you can test. Use it when you narrow the entries in the policy from [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md).

## Version requirements

The `sudoers` policy on Linux and BSD supports shell-style wildcard patterns. Starting with sudo 1.9.10, you can also match command paths and command-line arguments with POSIX extended regular expressions (ERE).

Check the installed version before you rely on regular expressions:

```bash
sudo --version
```

Regular expressions in `sudoers`:

- Must begin with `^` and end with `$`.
- Are POSIX extended regular expressions, not Perl-compatible regular expressions (PCRE).
- Can match command paths and command arguments.
- Are limited to 1,024 characters.
- Require sudo 1.9.10 or later.

POSIX ERE operators such as `+`, `{m,n}`, grouping, and alternation are available on supported versions. PCRE constructs such as `\d`, `\w`, lookahead, and lookbehind aren't portable `sudoers` syntax.

## Wildcards

| Pattern | Meaning |
| --- | --- |
| `*` | Matches zero or more characters. |
| `?` | Matches exactly one character. |
| `[abc]` | Matches one character from the listed set. |
| `[a-z]` | Matches one character in the specified range. |
| `[!abc]` | Matches one character not in the listed set. |
| `\x` | Treats `x` as a literal character where escaping is supported or required. |

### Slash behavior

Wildcard behavior depends on what the pattern matches:

- In a command path, wildcards don't match `/`. The path `/opt/myapp/*` matches `/opt/myapp/tool` but not `/opt/myapp/subdir/tool`.
- In command arguments, `/` has no special meaning, and `*` or `?` can match it.

A common misunderstanding is that a command-path wildcard crosses directory boundaries. It doesn't.

## Command arguments

When a command specification includes arguments, `sudo` joins the arguments of the invoked command into one space-separated string and matches that complete string. A wildcard can therefore span spaces and match more than one argument.

For example:

```text
/usr/bin/systemctl status *
```

This entry matches an argument string that begins with `status` and can match more than one argument after `status`. It doesn't mean "exactly one argument."

Other cases:

- A command specification with no argument pattern allows the command with any arguments.
- An argument string of `""` allows the command only when you invoke it with no command-line arguments.
- Avoid wildcards in arguments for security-sensitive rules when a precise POSIX regular expression or a purpose-built wrapper can do the job.

## Test entries

:::warning
The following entries are for an isolated test system only. Don't use broad command wildcards such as `/usr/bin/*` as production policy.
:::

```text
# Any directly nested command path under /usr/bin
Cmnd_Alias TEST_USRBIN = /usr/bin/*

# Command basename must start with an ASCII letter
Cmnd_Alias TEST_ALPHA = /usr/sbin/[A-Za-z]*

# Command basename must start with a character other than an ASCII digit
Cmnd_Alias TEST_NODIGIT = /usr/local/bin/[!0-9]*

# Exactly "ls" followed by one character, such as lsX
Cmnd_Alias TEST_SINGLECHAR = /usr/bin/ls?

# Command basename must start with a lowercase letter from a through m
Cmnd_Alias TEST_RANGE = /usr/bin/[a-m]*

# Explicit command list
Cmnd_Alias TEST_EXPLICIT = /usr/bin/whoami, /usr/bin/id, /usr/bin/uptime

# Directly nested command names beginning with "git"
Cmnd_Alias TEST_PREFIX = /usr/bin/git*

# Directly nested command paths under /opt/myapp; does not cross another slash
Cmnd_Alias TEST_ONE_LEVEL = /opt/myapp/*

# The complete argument string must begin with "status "
Cmnd_Alias TEST_ARGS = /usr/bin/systemctl status *

# Broad match followed by two exclusions
Cmnd_Alias TEST_EXCLUDE = /usr/bin/[A-Za-z]*, !/usr/bin/passwd, !/usr/bin/su

# Grant the test aliases to members of testgroup as root
%testgroup ALL = (root) TEST_USRBIN, TEST_ALPHA, TEST_NODIGIT, \
TEST_SINGLECHAR, TEST_RANGE, TEST_EXPLICIT, TEST_PREFIX, \
TEST_ONE_LEVEL, TEST_ARGS, TEST_EXCLUDE
```

## Regular expression examples

These examples require sudo 1.9.10 or later:

```text
# Command path ending in one or more ASCII digits
Cmnd_Alias TEST_REGEX_PATH = ^/usr/local/bin/tool[0-9]+$

# systemctl status followed by exactly one service-unit argument
Cmnd_Alias TEST_REGEX_ARGS = /usr/bin/systemctl ^status [A-Za-z0-9_.@-]+\.service$
```

The second example matches the complete, space-separated argument string. It doesn't permit a second argument after the service-unit name.

## Notes on the examples

- `TEST_SINGLECHAR` doesn't match `/usr/bin/ls`, because `?` requires one more character.
- `TEST_ALPHA` constrains only the first character of the basename. The `*` that follows can match digits, periods, and hyphens, so names such as `mount.cifs` and `iptables-restore` match if they exist in that directory.
- `TEST_ONE_LEVEL` doesn't match `/opt/myapp/subdir/tool`, because a wildcard in a command path doesn't match `/`.
- `TEST_ARGS` can match several arguments after `status`, because `sudo` matches the combined argument string rather than each argument separately.
- `TEST_EXCLUDE` shows negation, but exclusions are fragile when other matching rules exist. A later applicable allow entry can permit the command again.

## Rule ordering and negation

When more than one `sudoers` entry matches, `sudo` applies them in order and uses the last matching entry. The most specific rule doesn't win automatically.

Negation isn't a reliable way to make a broad wildcard safe. If an allowlist includes a shell, interpreter, editor, pager, or another program that can run commands, a user can perform an excluded operation indirectly:

```bash
sudo /usr/bin/bash -c '/usr/sbin/shutdown -h now'
```

Sudo evaluates the command that the user requests directly through `sudo`. It doesn't generally infer every operation that the permitted program can perform later.

## Path and system differences

Command locations differ among operating systems and distributions. For example, a command can be installed as `/sbin/shutdown` or `/usr/sbin/shutdown`. On a system where `/usr` is merged with `/bin` and `/sbin`, one path can be a symbolic link to the other. On another system, only one path exists.

Confirm command paths on the target host:

```bash
command -v systemctl
command -v shutdown
ls -l "$(command -v shutdown)"
```

A rule that you tested on one distribution doesn't necessarily have the same effective command set on another.

## BSD examples

The wildcard and regular expression rules on this page belong to the installed sudo version, not to the operating system kernel. They apply on BSD systems that use sudo, subject to the installed sudo version.

BSD command locations and service-management tools differ from Linux and from one BSD family to another. Verify every path with `command -v`, `type`, or the system manual pages before you install a rule. Use `sudo -V` to inspect the local sudo build and configuration paths.

The following examples allow exact service operations instead of an unrestricted service-management command.

### FreeBSD

FreeBSD commonly manages services through `/usr/sbin/service`. This example lets members of `bsdops` check and restart only the `nginx` service:

```text
Cmnd_Alias FREEBSD_NGINX = /usr/sbin/service nginx status, \
/usr/sbin/service nginx restart

%bsdops ALL = (root) FREEBSD_NGINX
```

A wildcard test that uses a typical FreeBSD local-software directory looks like this:

```text
# Test only: matches one path component beneath /usr/local/sbin
Cmnd_Alias FREEBSD_LOCAL_TEST = /usr/local/sbin/[A-Za-z]*
```

Don't deploy that broad test alias as an administrative allowlist.

### OpenBSD

OpenBSD includes `doas` in the base system and doesn't require sudo. If you install sudo separately, its `sudoers` rules still use sudo syntax. This example permits two exact `rcctl` operations for the base-system `httpd` service:

```text
Cmnd_Alias OPENBSD_HTTPD = /usr/sbin/rcctl check httpd, \
/usr/sbin/rcctl restart httpd

%bsdops ALL = (root) OPENBSD_HTTPD
```

Don't copy these lines into `/etc/doas.conf`. The `doas.conf` file has a different grammar and matching model. An approximately equivalent `doas.conf` policy uses separate exact rules:

```text
permit :bsdops as root cmd /usr/sbin/rcctl args check httpd
permit :bsdops as root cmd /usr/sbin/rcctl args restart httpd
```

Validate an OpenBSD `doas` policy, and optionally test whether a command matches, with:

```bash
doas -C /etc/doas.conf
doas -C /etc/doas.conf /usr/sbin/rcctl check httpd
```

### NetBSD

NetBSD can control services through individual `/etc/rc.d` scripts. This example permits status and restart operations for only `sshd`:

```text
Cmnd_Alias NETBSD_SSHD = /etc/rc.d/sshd status, \
/etc/rc.d/sshd restart

%bsdops ALL = (root) NETBSD_SSHD
```

Software that you install through pkgsrc commonly uses the `/usr/pkg` prefix. A wildcard test for that layout looks like this:

```text
# Test only: matches one path component beneath /usr/pkg/sbin
Cmnd_Alias NETBSD_PKG_TEST = /usr/pkg/sbin/[A-Za-z]*
```

The pkgsrc prefix is configurable, so confirm it on the target host.

### BSD validation notes

- The `sudoers` file and the `visudo` binary can be under a package prefix such as `/usr/local` or `/usr/pkg`. Use the paths that the installed package reports.
- Run the installed `visudo` against a temporary policy before deployment:

  ```bash
  visudo -c -f /path/to/testfile
  ```

- Keep Linux-only commands such as `systemctl` out of BSD-specific aliases.
- Confirm the local service name, and whether it's enabled, before you test a restart operation.
- Treat `/usr/local/*` and `/usr/pkg/*` wildcards as broad privileges, not as safe substitutes for an explicit command list.

## Safer policy design

Prefer the smallest explicit command and argument allowlist possible:

1. List exact executable paths instead of granting an entire directory.
1. Restrict arguments with an exact string or an anchored POSIX regular expression where supported.
1. Avoid granting shells, interpreters, editors, pagers, package managers, or general-purpose file-manipulation tools.
1. Use a root-owned wrapper with fixed behavior when `sudoers` can't express the required validation safely.
1. Consider a command digest when the policy should authorize specific file content as well as a path.

Example wrapper-only rule:

```text
%testgroup ALL = (root) /usr/local/sbin/admin-wrapper
```

Root should own the wrapper and every directory in its path, and the authorized user shouldn't be able to write to them.

## Validate and test a policy

Validate a policy file before you deploy it:

```bash
visudo -c -f /etc/sudoers.d/testfile
```

Check the effective permissions for a test user:

```bash
sudo -l -U testuser
```

Test both the commands that the policy should allow and closely related commands that it must refuse. Test in a disposable environment, or keep a separate privileged session open, so a broken rule doesn't lock out administrators.

## Related topics

- [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md)
- [Sudoers tags reference](/docs/privilegesecure/26.07/configuration/service-accounts/sudoers-tags-reference.md)
- The [sudoers manual](https://www.sudo.ws/docs/man/sudoers.man/) on the sudo project site, the FreeBSD sudoers manual, and the OpenBSD `doas` and `doas.conf` manuals
