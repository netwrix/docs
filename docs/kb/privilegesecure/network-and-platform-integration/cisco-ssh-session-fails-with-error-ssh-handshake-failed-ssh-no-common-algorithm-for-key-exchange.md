---
description: >-
  Fix a Cisco SSH session that fails with a key exchange algorithm mismatch by
  adding older key exchanges and ciphers to the proxy's sbpam_ssh.json.
keywords:
  - SSH
  - Cisco
  - key exchange
  - ciphers
  - sbpam_ssh.json
  - sbpam-proxy.exe
  - Netwrix Privilege Secure
  - handshake error
  - SbPAM
  - diffie-hellman-group1-sha1
products:
  - privilegesecure
sidebar_label: 'Cisco SSH Session Fails with Error "ssh: handshake failed: ssh: no common algorithm for key exchange"'
tags:
  - kb
  - network-and-platform-integration
title: 'Cisco SSH Session Fails with Error "ssh: handshake failed: ssh: no common algorithm for key exchange"'
knowledge_article_id: kA04u0000000HQxCAM
---

# Cisco SSH Session Fails with Error "ssh: handshake failed: ssh: no common algorithm for key exchange"

## Symptom

When launching a Cisco SSH activity through Netwrix Privilege Secure for Access Management, the session fails with:

```text
ssh: handshake failed: ssh: no common algorithm for key exchange; client offered: [curve25519-sha256@libssh.org ecdh-sha2-nistp256 ecdh-sha2-nistp384 ecdh -sha2-nistp521 diffie-hellman-group14-sha1], server offered: [diffie-hellman-group1-sha1]
```

## Cause

The SSH Key Exchange and Ciphers supported by the switch are older than the defaults used by the proxy, so Privilege Secure cannot connect with default settings.

## Resolution

Modify the Privilege Secure proxy server's `sbpam_ssh.json` file to include the required Key Exchange algorithms and ciphers.

1. Log in to Windows on the Privilege Secure proxy server.

2. Open an administrative PowerShell and run the following commands (where `C:\` is the drive Privilege Secure is installed to):

   ```powershell
   cd "C:\Program Files\Stealthbits\PAM\ProxyService"
   ./sbpam-proxy.exe cfg -c sbpam_ssh
   ```

3. Open File Explorer and browse to:

   ```text
   C:\ProgramData\Stealthbits\PAM\ProxyService
   ```

4. Open `sbpam_ssh.json` in a text editor, and replace its contents with the following JSON (this overwrites any previous configurations in this file, if present):

   ```json
   {
       "listenaddress": "0.0.0.0:4422",
       "ClientSettings": {
           "Algorithms": {
               "KeyExchanges": [
                   "curve25519-sha256@libssh.org",
                   "ecdh-sha2-nistp256",
                   "ecdh-sha2-nistp384",
                   "ecdh-sha2-nistp521",
                   "diffie-hellman-group14-sha1",
                   "diffie-hellman-group1-sha1"
               ],
               "Ciphers": [
                   "aes128-gcm@openssh.com",
                   "chacha20-poly1305@openssh.com",
                   "aes128-ctr",
                   "aes192-ctr",
                   "aes256-ctr",
                   "aes128-cbc",
                   "3des-cbc",
                   "aes192-cbc",
                   "aes256-cbc"
               ]
           }
       }
   }
   ```

5. Save `sbpam_ssh.json` and close the editor. Provision the SSH session again in Privilege Secure and verify that the SSH session can successfully log in to the Cisco device.
