---
title: "Decryption keys"
description: "Add the private key PingCastle Pro uses to decrypt reports that PingCastle.exe encrypts before upload."
sidebar_position: 40
sidebar_label: Decryption keys
---

# Decryption keys for PingCastle Pro

PingCastle.exe agents can encrypt reports with `--encrypt` before sending them, using an RSA key pair, so reports aren't exposed in plain text in transit or in email. See [Report encryption](/docs/pingcastlecommunity/4_1/configuration/report-encryption) for how to generate that key pair and configure an agent to encrypt with it.

PingCastle Pro needs the matching private key to decrypt those reports when it receives them. Manage this key at **Configuration** > **Decryption**.

:::warning
PingCastle Pro doesn't ship with a functional default encryption key. The configuration includes a placeholder entry named `default`, but its key value is empty, so no usable key exists until you add one. Don't rely on any default key from another PingCastle version. Generate your own key pair.
:::

To set up decryption:

1. Generate an RSA key pair on an agent using `PingCastle.exe --generate-key`. See [Report encryption](/docs/pingcastlecommunity/4_1/configuration/report-encryption) for the full command output and JSON structure.
2. In PingCastle Pro, go to **Configuration** > **Decryption** and add the private key.
3. Add the matching public key to the `appsettings.console.json` file of every agent that should encrypt reports with this key.

Reports uploaded without encryption import normally, because decryption applies only to reports encrypted with `--encrypt`. If an agent encrypts a report with a key PingCastle Pro doesn't have, decryption fails and the import fails.
