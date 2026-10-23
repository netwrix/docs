---
title: "SSH Configurations"
description: "SSH Configurations"
sidebar_position: 35
---

# SSH Configurations

## SSH Session Launch

When lauching an SSH session from the browser, you must incorporate a hook on the local machine to start the SSH client. For details, see [Invoking Desktop SSH Client Automatically](/docs/kb/privilegesecure/client-tools-and-integrations/invoking-desktop-ssh-client-automatically) Knowledge Base Article.

## SSH Encryption Algorithms

SSH supports many encryption algorithms for key types, key exchange, and ciphers. As they become obsolete, some users demand that Netwrix remove them, but others need to keep them for backward compatiblity reasons. Since Netwrix can't know what every user wants to support, this became configurable starting in version 26.03.0

There are two places that have to be updated. The session client and proxy.

### Session client

Located on the Netwrix Privilege Secure (NPS) server at `C:\Program Files\Stealthbits\PAM\ActionServiceWorker\sbpam_sshclient.json`.
Modify or update this file as required to match the needs of the servers/devices NPS is connecting to.

Here is a sample `sbpam_sshclient.json`:

```json
{
  "DefaultConfig": {
    "HungTimerSecs": 180,
    "StalledTimerSecs": 30,
    "CommandTimerSecs": 2,
    "CommitTimerSecs": 90,
    "MaxRetry": 2,
    "TransientMaxRetry": 5,
    "GlobalTimeoutSecs": 300,
    "DialTimeoutSecs": 15,
    "KeepaliveIntervalSecs": 30,
    "PanosPollIntervalSecs": 20,
    "PanosPollMaxAttempts": 9,
    "PanosCommitPollIntervalSecs": 3,
    "PanosCommitPollMaxAttempts": 60,
    "SshLoginPollIntervalSecs": 5,
    "SshLoginPollMaxAttempts": 6,
    "PromptList": [
      "(?m)^.+@[^\\s:]+:[^$#>]*[#$>]\\s*$",
      "(?m)^\\[[^\\]]+@[^\\]\\s]+\\s+[^\\]]*\\][#$>]\\s*$",
      "(?m)^%\\s+\\S+@\\S+\\s+[^%\\n]*%\\s*$",
      "(?m)^\\$\\s*$",
      "(?m)^#\\s*$",
      "(?m)^>\\s*$"
    ]
  },
  "SSHClientConfig": {
    "SSHTrustedKey": "",
    "HostKeyAlgorithms": [
      "ssh-ed25519",
      "ecdsa-sha2-nistp521",
      "ecdsa-sha2-nistp384",
      "ecdsa-sha2-nistp256",
      "rsa-sha2-512",
      "rsa-sha2-256",
      "ssh-rsa",
      "ssh-dss"
    ],
    "KeyExchanges": [
      "mlkem768x25519-sha256",
      "sntrup761x25519-sha512@openssh.com",
      "curve25519-sha256",
      "curve25519-sha256@libssh.org",
      "ecdh-sha2-nistp521",
      "ecdh-sha2-nistp384",
      "ecdh-sha2-nistp256",
      "diffie-hellman-group18-sha512",
      "diffie-hellman-group16-sha512",
      "diffie-hellman-group14-sha256",
      "diffie-hellman-group-exchange-sha256",
      "diffie-hellman-group14-sha1",
      "diffie-hellman-group-exchange-sha1",
      "diffie-hellman-group1-sha1"
    ],
    "Ciphers": [
      "chacha20-poly1305@openssh.com",
      "aes256-gcm@openssh.com",
      "aes128-gcm@openssh.com",
      "aes256-ctr",
      "aes192-ctr",
      "aes128-ctr",
      "aes128-cbc",
      "3des-cbc"
    ],
    "MACs": [
      "hmac-sha2-256-etm@openssh.com",
      "hmac-sha2-512-etm@openssh.com",
      "hmac-sha2-256",
      "hmac-sha2-512",
      "hmac-sha1",
      "hmac-sha1-96"
    ]
  }
}
```

### Proxy for scanning

Located in ine NPS server at `C:\ProgramData\Stealthbits\PAM\ProxyService\sbpam_ssh.json`.
Add, Modify, or update this file as required to match the needs of the servers/devices NPS is connecting to.

Here is a sample `sbpam_ssh.json`:

```json
{
  "ListenAddress": "0.0.0.0:4422",
  "Banner": "\n __   _ ____  ____\n|  \\ | |  _ \\/  __|\n|   \\| | |_) \\__  \\\n| |\\   |  __/ __)  |\n|_| \\__|_|   |____/\n\n",
  "DisconnectSession": true,
  "StripDomainPrefix": false,
  "InsecureSkipVerify": false,
  "TwoFactorSeparator": ",",
  "ActivityParameters": false,
  "RecordExec": false,
  "RecordSFTP": false,
  "RecordLimit": 65536,
  "ConnectTimeout": "30s",
  "ExtendKey": "Ctrl+X",
  "ExtendCode": "\u0018",
  "ExtendNotification": "Your session will expire in {{.Remaining}} press {{.ExtendKey}} to extend your session",
  "EndNotification": "Your session will expire in {{.Remaining}}",
  "ExecExcludes": [],
  "OverridePort": [],
  "Multiplex": false,
  "MultiplexActivity": "",
  "Replay": {
    "RequestFilter": [
      "winadj@putty.projects.tartarus.org"
    ]
  },
  "ServerSettings": {
    "MaxAuthTries": 3,
    "KeyExchanges": [],
    "Ciphers": [],
    "MACs": [
      "hmac-sha2-256-etm@openssh.com",
      "hmac-sha2-512-etm@openssh.com",
      "hmac-sha2-256",
      "hmac-sha2-512",
      "hmac-sha1",
      "hmac-sha1-96"
    ]
  },
  "ClientSettings": {
    "HostKeyAlgorithms": [
      "ssh-ed25519",
      "ecdsa-sha2-nistp521",
      "ecdsa-sha2-nistp384",
      "ecdsa-sha2-nistp256",
      "rsa-sha2-512",
      "rsa-sha2-256",
      "ssh-rsa",
      "ssh-dss"
    ],
    "KeyExchanges": [
      "mlkem768x25519-sha256",
      "sntrup761x25519-sha512@openssh.com",
      "curve25519-sha256",
      "curve25519-sha256@libssh.org",
      "ecdh-sha2-nistp521",
      "ecdh-sha2-nistp384",
      "ecdh-sha2-nistp256",
      "diffie-hellman-group18-sha512",
      "diffie-hellman-group16-sha512",
      "diffie-hellman-group14-sha256",
      "diffie-hellman-group-exchange-sha256",
      "diffie-hellman-group14-sha1",
      "diffie-hellman-group-exchange-sha1",
      "diffie-hellman-group1-sha1"
    ],
    "Ciphers": [
      "chacha20-poly1305@openssh.com",
      "aes256-gcm@openssh.com",
      "aes128-gcm@openssh.com",
      "aes256-ctr",
      "aes192-ctr",
      "aes128-ctr",
      "aes128-cbc",
      "3des-cbc"
    ],
    "MACs": [
      "hmac-sha2-256-etm@openssh.com",
      "hmac-sha2-512-etm@openssh.com",
      "hmac-sha2-256",
      "hmac-sha2-512",
      "hmac-sha1",
      "hmac-sha1-96"
    ]
  }
}
```
