---
title: "Configure SSH algorithms"
description: "Allow or restrict the SSH host key, key exchange, cipher, and MAC algorithms that Privilege Secure offers to managed devices and to users' SSH clients."
sidebar_position: 50
---

# Configure SSH algorithms

SSH negotiates encryption algorithms for host keys, key exchange, ciphers, and message authentication codes (MACs). Some organizations remove algorithms that are obsolete. Others keep them so that older devices, such as legacy Cisco network devices, still connect. Privilege Secure keeps its algorithm lists in two configuration files, and each component reads its own file. You edit the lists to match your devices.

Change both files together. If the lists differ, a device can accept sessions or actions through one component and fail through the other.

## Which file controls which connection

| File | Component | What it controls |
|---|---|---|
| `sbpam_sshclient.json` | SSH client that the Action Service and Host Scan Service run | Connections that Privilege Secure opens to managed devices to run actions, such as discovery and password rotation. |
| `sbpam_ssh.json` | Proxy Service | SSH sessions that users start through the proxy. `ClientSettings` applies from the proxy to the managed device. `ServerSettings` applies from the user's SSH client to the proxy. |

The default file locations are:

| File | Default location |
|---|---|
| `sbpam_sshclient.json` (Action Service and Host Scan Service) | `C:\Program Files\Stealthbits\PAM\ActionServiceWorker\sbpam_sshclient.json` |
| `sbpam_ssh.json` | `C:\ProgramData\Stealthbits\PAM\ProxyService\sbpam_ssh.json` |

Host scans run the shared `ActionServiceWorker`, so they read the same file as the Action Service. Editing a copy in the `HostScanService` folder has no effect.

Edit the file at its default location on every server that runs the component. That includes remote servers that run an Action Service, a Host Scan Service, or a Proxy Service. See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md) and [Install a proxy service on another server](/docs/privilegesecure/26.07/install/remote-proxy.md).

From 26.07.3, the PowerShell SSH actions use the native Privilege Secure SSH client, so they also read `sbpam_sshclient.json`.

The proxy requires TLS 1.2 or later and prefers TLS 1.3. `sbpam_ssh.json` doesn't set the TLS versions.

## Default algorithms

The following defaults come from the 26.07.3 files. The settings for connections to managed devices are the same in `SSHClientConfig` of `sbpam_sshclient.json` and in `ClientSettings` of `sbpam_ssh.json`. Algorithms are listed in the order that Privilege Secure offers them.

| Setting | Default algorithms |
|---|---|
| `HostKeyAlgorithms` | `ssh-ed25519`, `ecdsa-sha2-nistp521`, `ecdsa-sha2-nistp384`, `ecdsa-sha2-nistp256`, `rsa-sha2-512`, `rsa-sha2-256`, `ssh-rsa`, `ssh-dss` |
| `KeyExchanges` | `mlkem768x25519-sha256`, `sntrup761x25519-sha512@openssh.com`, `curve25519-sha256`, `curve25519-sha256@libssh.org`, `ecdh-sha2-nistp521`, `ecdh-sha2-nistp384`, `ecdh-sha2-nistp256`, `diffie-hellman-group18-sha512`, `diffie-hellman-group16-sha512`, `diffie-hellman-group14-sha256`, `diffie-hellman-group-exchange-sha256`, `diffie-hellman-group14-sha1`, `diffie-hellman-group-exchange-sha1`, `diffie-hellman-group1-sha1` |
| `Ciphers` | `chacha20-poly1305@openssh.com`, `aes256-gcm@openssh.com`, `aes128-gcm@openssh.com`, `aes256-ctr`, `aes192-ctr`, `aes128-ctr`, `aes128-cbc`, `3des-cbc` |
| `MACs` | `hmac-sha2-256-etm@openssh.com`, `hmac-sha2-512-etm@openssh.com`, `hmac-sha2-256`, `hmac-sha2-512`, `hmac-sha1`, `hmac-sha1-96` |

For connections from users' SSH clients to the proxy, `ServerSettings` in `sbpam_ssh.json` sets `MACs` to the same list as above. Its `KeyExchanges` and `Ciphers` lists are empty by default.

An empty list makes the proxy use the default set of the SSH library that it is built with, so users' SSH clients can negotiate any algorithm in that set. To limit what users' clients can use, enter an explicit list.

The defaults include algorithms that are obsolete, such as `ssh-dss`, `3des-cbc`, `hmac-sha1`, and the SHA-1 Diffie-Hellman groups. They remain enabled because older devices need them. Remove the ones that your devices don't need.

:::note
An upgrade doesn't replace an existing `sbpam_ssh.json`. A server upgraded from an earlier release keeps the algorithm lists that were in its file before the upgrade, and these can differ from the defaults above. Compare the file on the server with the defaults before you edit it.

An upgrade replaces `sbpam_sshclient.json`. Keep a copy of your edits and compare the file after each upgrade. If you edit only one of the two files, the connections that use the other file keep the old lists.
:::

## Change the algorithms

1. Sign in to the server that runs the component as an administrator.
1. Back up the file that you will edit.
1. Open `sbpam_sshclient.json` in a text editor that doesn't change the file encoding.
1. In the `SSHClientConfig` section, edit the `HostKeyAlgorithms`, `KeyExchanges`, `Ciphers`, or `MACs` list. Keep the JSON syntax valid.
1. Save the file.
1. Open `sbpam_ssh.json`. In `ClientSettings`, edit `HostKeyAlgorithms` directly. Put `KeyExchanges`, `Ciphers`, and `MACs` inside an `Algorithms` object, as the example shows. To change what users' SSH clients can negotiate with the proxy, edit `ServerSettings` the same way.
1. Save the file.
1. Test a connection to a device that uses the changed algorithms.

:::warning
The `sbpam_ssh.json` file that the installer creates lists `KeyExchanges`, `Ciphers`, and `MACs` directly under `ClientSettings` and `ServerSettings`. The proxy doesn't read the lists in that position and uses its built-in defaults instead. A change to those lists has no effect. Move the lists into an `Algorithms` object, as the example shows. `HostKeyAlgorithms` takes effect where the installer puts it.
:::

If `sbpam_sshclient.json` is missing or can't be read, the SSH client uses its built-in defaults. Check the file syntax if your changes have no effect.

The Action Service and Host Scan Service start a new SSH client process for each command plan, and each process reads `sbpam_sshclient.json` when it starts, so a change to that file needs no service restart. The Proxy Service reloads `sbpam_ssh.json` when the file changes. New sessions use the saved algorithms without a service restart. Sessions that are already open keep the algorithms they negotiated.

### Example: remove the legacy ciphers

This `SSHClientConfig` section of `sbpam_sshclient.json` offers only the GCM and CTR ciphers. Devices that support only CBC or 3DES ciphers can no longer connect.

```json
"Ciphers": [
  "chacha20-poly1305@openssh.com",
  "aes256-gcm@openssh.com",
  "aes128-gcm@openssh.com",
  "aes256-ctr",
  "aes192-ctr",
  "aes128-ctr"
]
```

In `sbpam_ssh.json`, the same list goes inside an `Algorithms` object under `ClientSettings`. Add `KeyExchanges` and `MACs` to the object as well, with the default lists from the table if you don't change them. The example shows only `Ciphers` to keep it short.

```json
"ClientSettings": {
  "Algorithms": {
    "Ciphers": [
      "chacha20-poly1305@openssh.com",
      "aes256-gcm@openssh.com",
      "aes128-gcm@openssh.com",
      "aes256-ctr",
      "aes192-ctr",
      "aes128-ctr"
    ]
  }
}
```

## Connect to older devices

If a session or action fails with the error "no common algorithm for key exchange", the device offers only algorithms that are missing from the lists. Add the algorithm that the device requires to the matching list in both files. See these Knowledge Base articles for a Cisco example:

- [Resolving the "no common algorithm for key exchange" SSH error for Cisco resources](/docs/kb/privilegesecure/network-and-platform-integration/resolving-no-common-algorithm-for-key-exchange-ssh-error-for-cisco-resources)
- [Cisco SSH session fails with error "ssh: handshake failed: ssh: no common algorithm for key exchange"](/docs/kb/privilegesecure/network-and-platform-integration/cisco-ssh-session-fails-with-error-ssh-handshake-failed-ssh-no-common-algorithm-for-key-exchange)

## Related topics

- [Security hardening checklist](/docs/privilegesecure/26.07/configuration/security-hardening.md)
- [Invoke a desktop SSH client automatically](/docs/kb/privilegesecure/client-tools-and-integrations/invoking-desktop-ssh-client-automatically)
