---
description: >-
  Registers the sbpam-url SSH protocol handler and shows how to use it to
  automatically launch external SSH clients for NPS-proxied connections.
  Includes command examples, available replacement strings, registry keys
  modified, and alternatives.
keywords:
  - sbpam-url
  - SSH
  - protocol handler
  - NPS
  - Putty
  - WinSCP
  - registry
  - URL handler
  - ssh handler
products:
  - privilege-secure-access-management
sidebar_label: Registering and Using the sbpam-url SSH Protocol H
tags: []
title: "Registering and Using the sbpam-url SSH Protocol Handler"
knowledge_article_id: kA0Qk0000002VvlKAE
---

# Registering and Using the sbpam-url SSH Protocol Handler

## Overview

The `sbpam-url` utility, located in the **Extras** folder of the download package, registers an SSH URL handler. This utility helps you automatically connect to an NPS-proxied SSH session.

For additional information, refer to the following article: [Invoking Desktop SSH Client Automatically](/docs/kb/privilegesecure/client-tools-and-integrations/invoking-desktop-ssh-client-automatically.md)

At the time this article was written, the referenced KB article instructed users to download the utility from a static link, which may provide an outdated version. Use the utility bundled in the **Extras** folder to ensure you have the latest version.

## Instructions

### Where to Install or Run the Utility

The URL handler must be registered on the machine where NPS users run their browser. Ensure you run the utility on the appropriate client system.

### Example Commands for External SSH Clients

Use the following PowerShell commands and arguments for various external SSH clients:

```powershell
# Register Putty
& .\sbpam-url handle -p ssh -- "C:\Program Files\PuTTY\putty.exe" -ssh -P '{{port}}' '{{user}}@{{hostname}}'

# Register Windows 10 (OpenSSH)
& .\sbpam-url handle -p ssh -- C:\Windows\System32\OpenSSH\ssh.exe '\{\{URL\}\}'

# Register RoyalTS
& .\sbpam-url handle -p ssh -- "C:\Program Files (x86)\Royal TS V5\RoyalTS.exe" '/username:{{user}}' /password:a /protocol:terminal /using:adhoc '/uri:ssh://{{host}}'

# Register MobaXTerm
& .\sbpam-url handle -p ssh -- "C:\Apps\MobaXterm_Professional_9.4\MobaXterm_Professional_9.4.exe" -newtab 'ssh -o PasswordAuthentication=no -l {{user_esc}} -p {{port}} {{hostname}}'
```

> **NOTE:** Each time you run the `handle` command, it replaces the previous handler with the new one.

### Remove the SSH Handler

```powershell
& .\sbpam-url handle -U -p ssh
```

### General Command-Line Form

Use the following syntax to register a handler:

`sbpam-url handle -p <protocol> -- <Command to run using replacement strings>`

### Available Commands

| Command | Description |
|---|---|
| `completion` | Generate the autocompletion script for the specified shell. |
| `handle` | Register a URL handler. |
| `help` | Display help about any command. |

### Command Flags

| Flag | Description |
|---|---|
| `-h, --help` | Display help for sbpam-url. |
| `-d, --debug` | Display debug messages. |
| `-Q, --quiet` | Do not display messages. |
| `-u, --url string` | URL to handle. |
| `-v, --version` | Display version information. |
| `handle -p <protocol>` | Handle the specified protocol. |
| `handle -u` | Unregister all protocols. |
| `handle -u -p <protocol>` | Unregister a specific protocol. |

### Available Replacement Strings

| Replacement String | Description |
|---|---|
| `{{scheme}}` | Protocol, for example, SSH. |
| `{{user}}` | User portion of the URL (direct connect string). |
| `{{user_esc}}` | Escaped user portion of the URL. |
| `{{host}}` | The host and port in the format `host:port`. |
| `{{hostname}}` | Just the hostname. |
| `{{port}}` | Just the port. |
| `{{path}}` | The URL path. |
| `{{query}}` | The URL query. |
| `{{fragment}}` | The URL fragment. |
| `{{password}}` | The password portion of the URL. |

### Alternatives to sbpam-url

You can use WinSCP to install an SSH handler as an alternative to `sbpam-url`. Note that WinSCP requires Putty to be installed first.

- [Download Putty ⸱ PuTTY 🐍](https://www.putty.org/)
- [Download WinSCP ⸱ WinSCP 🐘](https://winscp.net/eng/download.php)

### Registry Keys Modified by sbpam-url

The `sbpam-url` utility updates the following registry keys to register the protocol handler:

```text
[HKEY_CLASSES_ROOT\ssh]
@="URL: ssh Protocol"
"URL Protocol"=""
"EditFlags"=dword:00000002
"BrowserFlags"=dword:00000008

[HKEY_CLASSES_ROOT\ssh\DefaultIcon]

[HKEY_CLASSES_ROOT\ssh\shell]

[HKEY_CLASSES_ROOT\ssh\shell\open]

[HKEY_CLASSES_ROOT\ssh\shell\open\command]

[HKEY_CURRENT_USER\Software\Classes\SbPAM.URL]
@="SbPAM URL Handler"
"URL Protocol"=""
"EditFlags"=dword:00000002
"BrowserFlags"=dword:00000008
"DefaultIcon"=""

[HKEY_CURRENT_USER\Software\Classes\SbPAM.URL\shell]
[HKEY_CURRENT_USER\Software\Classes\SbPAM.URL\shell\open]
[HKEY_CURRENT_USER\Software\Classes\SbPAM.URL\shell\open\command]
@=""" --url "%1""

[HKEY_CURRENT_USER\Software\Classes\Applications\sbpam-url.exe]
"FriendlyAppName"="SbPAM URL Handler"

[HKEY_CURRENT_USER\Software\RegisteredApplications]
"SbPAM"="Software\Stealthbits\SbPAM\SbPAM.URL\Capabilities"

[HKEY_CURRENT_USER\Software\Stealthbits\SbPAM\SbPAM.URL\Capabilities]
"ApplicationDescription"="SbPAM handler application for URLs"
"ApplicationName"="SbPAM URL Handler"

[HKEY_CURRENT_USER\Software\Stealthbits\SbPAM\SbPAM.URL\Capabilities\UrlAssociations]
[HKEY_CURRENT_USER\Software\Stealthbits\SbPAM\SbPAM.URL\URLHandlers]
"ssh"=""

[HKEY_CURRENT_USER\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\ssh\UserChoice]
"Progid"="SbPAM.URL"
```

## Related Links

- [Invoking Desktop SSH Client Automatically](/docs/kb/privilegesecure/client-tools-and-integrations/invoking-desktop-ssh-client-automatically.md)
- [Download Putty ⸱ PuTTY 🐍](https://www.putty.org/)
- [Download WinSCP ⸱ WinSCP 🐘](https://winscp.net/eng/download.php)
