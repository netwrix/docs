---
title: "Initial configuration"
description: "Set up encryption, import existing reports, and review agents after you install PingCastle Pro."
sidebar_position: 10
---

# Initial configuration

:::note
PingCastle Pro 4.0 isn't yet released. This documentation describes the planned 4.0 behavior and can change before release. For the current release, see the 3.5 version of this documentation.
:::

For more details see the user documentation.

## Encryption

PingCastle Pro doesn't ship with a functional default encryption key. The configuration includes a placeholder entry named `default`, but its key value is empty, so no usable encryption key exists until you add one.

To add a custom ciphering key, go to **Advanced** > **Decryption**.

## Bulk Import of existing reports

You can import existing report using the bulk import functionality. It
is a feature of the command line client. You need to create an API key
(Agents page) and use the application URL to use this feature.

## Agents

You can configure PingCastle program to send their report to the
program.

You need to set up an API key for an agent using the Advanced -\> Agent
feature.

Then use the command switches `--api-endpoint <endpoint>` and
`--api-key <key>` in the health check mode.

You can upload existing reports stored in the current directory with the
command:

```bash
pingcastle.exe --upload-all-reports --api-endpoint https://endpoint.com --api-key abdsnhvdsklLksf
```
