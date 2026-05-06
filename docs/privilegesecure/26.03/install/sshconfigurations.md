---
title: "SSH Configurations"
description: "SSH Configurations"
sidebar_position: 35
---

## SSH Session Launch
When lauching an SSH session from the browser, a hook must be incorporated on the local machine to start the SSH client. To do that, see [Invoking Desktop SSH Client Automatically](/docs/kb/privilegesecure/client-tools-and-integrations/invoking-desktop-ssh-client-automatically) Knowledge Base Article for additional information.


# SSH Encryption Algorithms
SSH supports many encryption algorithms for key types, key exchange, and ciphers. As they become obsolete, some users demand that they be removed, but others need to keep them for backward compatiblity reasons.  Since Newrix can't know what every user wants to support, we made this configurable starting in version 26.03.0

There are two places that have to be updated. The session client and proxy.

1. Session client
Located on the NPS server at C:\Program Files\Stealthbits\PAM\ActionServiceWorker\sbpam_sshclient.json 
Modify or update this file as required to match the needs of the servers/devices NPS is connecting to.

Here is a sample sbpam_sshclient.json

```
{
  "DefaultConfig": {
    "HungTimerSecs": 180,
    "StalledTimerSecs": 30,
    "CommandTimerSecs": 2,
    "CommitTimerSecs": 90,
    "MaxRetry": 3,
    "GlobalTimeoutSecs": 180,
    "PromptList": [
      "(?m)^.+@[^:]+:[^$#>]*[#$>]\\s*$",
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
      "aes256-cbc",
      "aes192-cbc",
      "aes128-cbc"
    ]
  }
}
```

2. The proxy for scanning.
Located in ine NPS server at C:\ProgramData\Stealthbits\PAM\ProxyService\sbpam_ssh.json
Add, Modify or update this file as required to match the needs of the servers/devices NPS is connecting to.

```
{
  "listenaddress": "0.0.0.0:4422",
  "ClientSettings": {
			"HostKeyAlgorithms": [
				"curve25519-sha256",
				"curve25519-sha256@libssh.org",
				"ecdh-sha2-nistp256",
				"ecdh-sha2-nistp384",
				"ecdh-sha2-nistp521",
				"diffie-hellman-group-exchange-sha256",
				"diffie-hellman-group18-sha512",
				"diffie-hellman-group14-sha256",
				"diffie-hellman-group-exchange-sha1",
				"diffie-hellman-group14-sha1",
				"diffie-hellman-group1-sha1",
				"diffie-hellman-group16-sha512",
				"ssh-ed25519",
				"ecdsa-sha2-nistp256",
				"ecdsa-sha2-nistp384",
				"ecdsa-sha2-nistp521",
				"ssh-rsa",
				"ssh-dsa"
      ],
			"Algorithms": {
				"KeyExchanges": [
					"curve25519-sha256",
					"curve25519-sha256@libssh.org",
					"ecdh-sha2-nistp256",
					"ecdh-sha2-nistp384",
					"ecdh-sha2-nistp521",
					"diffie-hellman-group-exchange-sha256",
					"diffie-hellman-group16-sha512",
					"diffie-hellman-group18-sha512",
					"diffie-hellman-group14-sha256",
					"diffie-hellman-group-exchange-sha1",
					"diffie-hellman-group14-sha1",
					"diffie-hellman-group1-sha1"
        ],
				"Ciphers": [
					"chacha20-1305@openssh.com",
					"aes128-ctr",
					"aes192-ctr",
					"aes256-ctr",
					"aes128-gcm@openssh.com",
					"aes256-gcUm@openssh.com",
					"aes128-cbc",
					"aes192-cbc",
					"aes256-cbc",
					"chacha20-poly1305@openssh.com"
        ],
				"MACs": [
					"hmac-sha2-256-etm@openssh.com",
					"hmac-sha2-512-etm@openssh.com",
					"hmac-sha2-256",
					"hmac-sha2-512"
        ]
			}
		},
		"ServerSettings": {
			"MaxAuthTries": 3,
			"Algorithms": {
				"MACs": [
					"hmac-sha2-256-etm@openssh.com",
					"hmac-sha2-512-etm@openssh.com",
					"hmac-sha2-256",
					"hmac-sha2-512"
        ]
			}
		}
}
```