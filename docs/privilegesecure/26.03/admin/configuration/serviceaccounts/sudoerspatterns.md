---
title: "Sudoers pattern reference"
description: "Reference for wildcard and POSIX regular-expression patterns in sudoers rules on Linux and BSD, with test examples."
keywords:
  - sudoers
  - wildcard
  - regular expression
  - Cmnd_Alias
  - Linux
  - FreeBSD
  - OpenBSD
  - NetBSD
sidebar_position: 40
---

# Sudoers pattern reference

This page describes wildcard and POSIX regular-expression patterns in sudoers rules, with safe test
examples for Linux, FreeBSD, OpenBSD, and NetBSD. Use it when you narrow the commands in a
[least-privilege sudoers policy](/docs/privilegesecure/26.03/admin/configuration/serviceaccounts/linuxbsdsudoers.md).

## Scope and version requirements

The sudoers policy on Linux and BSD supports shell-style wildcard patterns. Starting with sudo
1.9.10, you can also match command paths and command-line arguments with POSIX extended regular
expressions.

Check the installed version before you rely on regular-expression support:

```bash
sudo --version
```

Regular expressions in sudoers:

- Must begin with `^` and end with `$`.
- Are POSIX extended regular expressions, not PCRE.
- Can match command paths and command arguments.
- Are limited to 1,024 characters.
- Require sudo 1.9.10 or later.

POSIX extended operators such as `+`, `{m,n}`, grouping, and alternation are available on supported
versions. PCRE-specific constructs such as `\d`, `\w`, lookahead, and lookbehind aren't portable
sudoers syntax.

## Wildcard definitions

| Pattern | Meaning |
| --- | --- |
| `*` | Matches zero or more characters. |
| `?` | Matches exactly one character. |
| `[abc]` | Matches one character from the listed set. |
| `[a-z]` | Matches one character in the specified range. |
| `[!abc]` | Matches one character not in the listed set. |
| `\x` | Treats `x` as a literal character where escaping is supported or required. |

### Slash behavior

Wildcard behavior depends on what sudo is matching:

- In a command path, wildcards don't match `/`. `/opt/myapp/*` matches `/opt/myapp/tool`, but not
  `/opt/myapp/subdir/tool`.
- In command arguments, `/` has no special meaning, and `*` or `?` can match it.

A command-path wildcard doesn't cross directory boundaries, despite a common claim that it does.

## Command-argument matching

When a command specification includes arguments, sudo joins the invoked arguments into one
space-separated string and matches that complete string. A wildcard can therefore span spaces and
match multiple arguments.

For example, this entry matches an argument string that begins with `status`:

```text
/usr/bin/systemctl status *
```

It doesn't mean "exactly one argument." The wildcard can match more than one argument after
`status`.

Other cases:

- A command specification with no argument pattern allows the command with any arguments.
- An argument string of `""` allows the command only when it's invoked with no command-line
  arguments.
- Avoid wildcards in arguments for security-sensitive rules when a precise POSIX regular expression
  or a purpose-built wrapper can do the job.

## Test entries

Use these entries on an isolated test system. Don't treat broad command wildcards such as
`/usr/bin/*` as safe production policy.

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

### Regular-expression examples

These examples require sudo 1.9.10 or later:

```text
# Command path ending in one or more ASCII digits
Cmnd_Alias TEST_REGEX_PATH = ^/usr/local/bin/tool[0-9]+$

# systemctl status followed by exactly one service-unit argument
Cmnd_Alias TEST_REGEX_ARGS = /usr/bin/systemctl ^status [A-Za-z0-9_.@-]+\.service$
```

The second example matches sudo's complete, space-separated argument string. It doesn't permit a
second argument after the service-unit name.

### Notes on the examples

- `TEST_SINGLECHAR` doesn't match `/usr/bin/ls`, because `?` requires one additional character.
- `TEST_ALPHA` constrains only the first character of the basename. The following `*` can match
  digits, periods, and hyphens, so names such as `mount.cifs` and `iptables-restore` match if they
  exist in the specified directory.
- `TEST_ONE_LEVEL` doesn't match `/opt/myapp/subdir/tool`, because a wildcard in a command path
  doesn't match `/`.
- `TEST_ARGS` can match multiple arguments after `status`, because sudo matches the combined
  argument string rather than each argument separately.
- `TEST_EXCLUDE` illustrates negation, but exclusions are fragile when other matching rules exist.
  A later applicable allow entry can permit the command again.

## Rule ordering and negation

When multiple sudoers entries match, sudo applies them in order and uses the last matching entry.
The most specific textual rule doesn't automatically win.

Negation isn't a reliable way to make a broad wildcard safe. An allowlist that contains a shell,
interpreter, editor, pager, or another program that can run commands can let a user perform an
excluded operation indirectly:

```bash
sudo /usr/bin/bash -c '/usr/sbin/shutdown -h now'
```

Sudo evaluates the command that the user requests directly. It doesn't generally infer every
operation that the permitted program can perform later.

## Path and system differences

Command locations differ among operating systems and distributions. For example, a command might be
installed as `/sbin/shutdown` or `/usr/sbin/shutdown`. On a system where `/usr` is merged with the
root directories, one path can be a symbolic link to the other. On another system, only one path
exists.

Confirm command paths on the target host:

```bash
command -v systemctl
command -v shutdown
ls -l "$(command -v shutdown)"
```

Don't assume that a rule tested on one distribution has the same effective command set on another.

## BSD examples

The wildcard and regular-expression rules on this page belong to the installed sudo version, not to
the operating-system kernel. They apply on BSD systems that use sudo, subject to the installed sudo
version.

BSD command locations and service-management tools differ from Linux and from one BSD family to
another. Verify every path with `command -v`, `type`, or the system manual pages before you install
a rule. Use `sudo -V` to inspect the local sudo build and configuration paths.

The following examples allow exact service operations instead of an unrestricted
service-management command.

### FreeBSD

FreeBSD commonly manages services through `/usr/sbin/service`. This example allows members of
`bsdops` to inspect and restart only the nginx service:

```text
Cmnd_Alias FREEBSD_NGINX = /usr/sbin/service nginx status, \
    /usr/sbin/service nginx restart

%bsdops ALL = (root) FREEBSD_NGINX
```

This wildcard test uses a typical FreeBSD local-software directory:

```text
# Test only: matches one path component beneath /usr/local/sbin
Cmnd_Alias FREEBSD_LOCAL_TEST = /usr/local/sbin/[A-Za-z]*
```

Don't deploy that broad test alias as an administrative allowlist.

### OpenBSD

OpenBSD includes `doas` in the base system and doesn't require sudo. If you install sudo
separately, its sudoers rules still use sudo syntax. This example permits two exact `rcctl`
operations for the base-system `httpd` service:

```text
Cmnd_Alias OPENBSD_HTTPD = /usr/sbin/rcctl check httpd, \
    /usr/sbin/rcctl restart httpd

%bsdops ALL = (root) OPENBSD_HTTPD
```

Don't copy these lines into `/etc/doas.conf`. The `doas.conf` file has a different grammar and
matching model. An approximately equivalent `doas.conf` policy uses separate exact rules:

```text
permit :bsdops as root cmd /usr/sbin/rcctl args check httpd
permit :bsdops as root cmd /usr/sbin/rcctl args restart httpd
```

Validate an OpenBSD `doas` policy, and optionally test a command match, with:

```bash
doas -C /etc/doas.conf
doas -C /etc/doas.conf /usr/sbin/rcctl check httpd
```

### NetBSD

NetBSD controls services through individual `/etc/rc.d` scripts. This example permits status and
restart operations for only `sshd`:

```text
Cmnd_Alias NETBSD_SSHD = /etc/rc.d/sshd status, \
    /etc/rc.d/sshd restart

%bsdops ALL = (root) NETBSD_SSHD
```

Software installed through pkgsrc commonly uses the `/usr/pkg` prefix. This wildcard test uses that
layout:

```text
# Test only: matches one path component beneath /usr/pkg/sbin
Cmnd_Alias NETBSD_PKG_TEST = /usr/pkg/sbin/[A-Za-z]*
```

The pkgsrc prefix is configurable, so confirm it on the target host.

### BSD validation notes

- The sudoers file and the `visudo` binary can be under a package prefix such as `/usr/local` or
  `/usr/pkg`. Use the paths that the installed package reports.
- Run the installed `visudo` against a temporary policy before you deploy it:

  ```bash
  visudo -c -f /path/to/testfile
  ```

- Keep Linux-only commands such as `systemctl` out of BSD-specific aliases.
- Confirm the local service name and whether it's enabled before you test a restart operation.
- Treat `/usr/local/*` and `/usr/pkg/*` wildcards as broad privileges, not as safe substitutes for
  an explicit command list.

## Safer policy design

Prefer the smallest explicit command and argument allowlist possible:

1. List exact executable paths instead of granting an entire directory.
1. Restrict arguments with an exact string or an anchored POSIX regular expression where supported.
1. Avoid granting shells, interpreters, editors, pagers, package managers, or general-purpose
   file-manipulation tools.
1. Use a root-owned wrapper with fixed behavior when sudoers can't express the required validation
   safely.
1. Consider a command digest when the policy should authorize specific file content as well as a
   path.

Example wrapper-only rule:

```text
%testgroup ALL = (root) /usr/local/sbin/admin-wrapper
```

Root should own the wrapper and every directory in its path, and the authorized user shouldn't be
able to write to them.

## Validation and testing

Always validate a policy file before you deploy it:

```bash
visudo -c -f /etc/sudoers.d/testfile
```

Check the effective permissions for a test user:

```bash
sudo -l -U testuser
```

Test both the commands that should be allowed and closely related commands that must be rejected.
Test in a disposable environment, or keep a separate privileged session open, so a broken rule
doesn't lock out administrators.
