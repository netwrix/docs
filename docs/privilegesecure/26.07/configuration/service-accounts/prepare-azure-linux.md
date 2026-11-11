---
title: "Prepare an Azure Linux resource"
description: "Install gawk, suppress systemd escape sequences, and turn off PAM session handling for the service account so Privilege Secure can manage Azure Linux 4.0."
sidebar_position: 40
---

# Prepare an Azure Linux resource

Azure Linux is a Microsoft-maintained, RPM-based Linux distribution for cloud and container workloads on Azure. Version 4.0 derives from Fedora and ships systemd 258. Netwrix Privilege Secure for Access Management (Privilege Secure) 26.07.3 and later supports Azure Linux 4.0 as a Linux resource, after you complete the steps on this page.

## Azure Linux preparation

Two components that systemd provides write extra terminal escape sequences, known as OSC 3008 sequences, on Azure Linux:

- **Bash profile script** (`/etc/profile.d/80-systemd-osc-context.sh`): writes a shell sequence at every prompt and a command sequence for every command.
- **`pam_systemd.so`**: writes a session sequence each time a new PAM session opens, which happens on every `sudo` command. The module is compiled into the binary, so a shell setting can't remove it.

Privilege Secure reads the prompt in each SSH session to know when a command has finished. These sequences interfere with that prompt detection, so you suppress them before you add the resource.

## Prepare the resource

Complete these steps on each Azure Linux resource.

1. Install the `gawk` package, which provides the `awk` command that Privilege Secure uses on Linux resources.

   ```bash
   sudo dnf install gawk
   ```

2. Remove the systemd Bash hook. Add the following fragment at the end of `/etc/skel/.bashrc`. It removes only the systemd hook and keeps any other `PROMPT_COMMAND` entries, such as a terminal title.

   ```bash
   # Remove only the systemd OSC 3008 hook (breaks Privilege Secure scan-tool prompt detection); keep other PROMPT_COMMAND entries (e.g. xterm title) intact
   for __i in "${!PROMPT_COMMAND[@]}"; do
     if [[ "${PROMPT_COMMAND[$__i]}" == "__systemd_osc_context_precmdline" ]]; then
       unset 'PROMPT_COMMAND[$__i]'
     fi
   done
   unset __i
   PS0=""
   unset -f __systemd_osc_context_precmdline __systemd_osc_context_ps0 2>/dev/null
   ```

   Add the same fragment at the end of the service account's own `~/.bashrc`.

   - `/etc/skel/.bashrc` applies to accounts that Privilege Secure creates for sessions after you edit it.
   - `~/.bashrc` applies to the service account, which already exists. Changes to `/etc/skel/.bashrc` don't reach an existing account.

3. Turn off PAM session handling for the service account. This stops `pam_systemd.so` from writing the session sequence on `sudo`. Open the service account's sudoers configuration with `visudo` and add this line:

   ```text
   Defaults:<service_account_name> !pam_session
   ```

   For a service account named `my_srvc_acct`, the configuration looks like this:

   ```text
   my_srvc_acct ALL=(ALL) NOPASSWD:ALL
   Defaults:my_srvc_acct !pam_session
   ```

:::warning
The `NOPASSWD:ALL` grant in this example is for illustration only. It lets the account run any command as root. For a privileged access product, use a least-privilege command list instead.
:::

### Add the line to a least-privilege policy

With a least-privilege policy, put the `Defaults` line with the policy's other `Defaults` line. For the command lists and the full policy, see [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md).

```text
svc_sbpam ALL = NOPASSWD: SVC_ACT_CHKSUM, SVC_ACT_SUDOERS, SVC_SB_PASS, SVC_SB_CMNDS, SVC_SB_SHELL
Defaults:svc_sbpam !requiretty
Defaults:svc_sbpam !pam_session
```

## Missing preparation steps

If you skip a step, Privilege Secure can't create the temporary users that sessions need. In the session log you see:

- `Enable-SbPAMCustomUser` reports that the user wasn't created.
- A later error says that removal of the user wasn't confirmed. The error text includes fragments of escape sequences.

The extra escape sequences interfere with prompt detection, so Privilege Secure can't read the result of the command. To fix it, complete the steps in [Prepare the resource](#prepare-the-resource) and run the session again.
