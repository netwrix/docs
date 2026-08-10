---
sidebar_label: Decryption keys
---
# Decryption Keys for PingCastle Enterprise

PingCastle.exe agents can encrypt reports with `--encrypt` before sending them, using an RSA key pair, so reports aren't exposed in plain text in transit or in email. See [Report Encryption](index.md#report-encryption) for how to generate that key pair and configure an agent to encrypt with it.

PingCastle Enterprise needs the matching private key to decrypt those reports when it receives them. Manage this key at **Configuration** > **Decryption**.

:::warning
The default PingCastle decryption key is insecure and is no longer provided with newer versions of PingCastle. Generate your own key pair and configure it in both PingCastle Enterprise and the agent's `appsettings.console.json` file.
:::

To set up decryption:

1. Generate an RSA key pair on an agent using `PingCastle.exe --generate-key`. See [Report Encryption](index.md#report-encryption) for the full command output and JSON structure.
2. In PingCastle Enterprise, go to **Configuration** > **Decryption** and add the private key.
3. Add the matching public key to the `appsettings.console.json` file of every agent that should encrypt reports with this key.

Reports uploaded without encryption, or encrypted with a key PingCastle Enterprise doesn't have, aren't affected — only encrypted reports go through decryption on import.
