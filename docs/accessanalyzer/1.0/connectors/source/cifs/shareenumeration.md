---
title: "Share Enumeration and Filtering"
description: "Discovering and filtering network shares"
sidebar_position: 20
---

# Share Enumeration and Filtering

When scanning a CIFS/SMB source, the connector discovers all available shares on the target file server. You can include or exclude specific shares, and optionally enumerate hidden shares.

## How Share Discovery Works

The connector enumerates all SMB shares exposed by the file server. Each share is listed with its name and path.

## Share Filtering

Share filtering is configured in Step 3 (scan setup) of the Connect Source wizard when the **Access** scan option is enabled. Two filtering controls are available:

### Include Shares

Control which shares are scanned:

| Mode | Behavior |
| --- | --- |
| **All shares** (default) | Scan every discovered share on the file server |
| **Custom selection** | Only scan shares you explicitly specify |

When **Custom selection** is chosen, a text field appears where you enter share names separated by commas (for example, `share1, share2, share3`).

### Exclude Shares

Optionally specify shares to skip during scanning. Enter share names separated by commas in the exclude field (for example, `admin$, ipc$`). Excluded shares are never scanned, even if they match the include filter.

## Hidden Shares

Windows hidden shares (shares whose names end with `$`) are not enumerated by default. You can enable automatic discovery of hidden shares:

1. In the scan setup step, check **Automatically enumerate and scan hidden shares**
2. When enabled, the connector discovers and scans hidden shares alongside regular shares
3. A predefined list of default exclusions is applied automatically

### Excluding Hidden Shares

When hidden share collection is enabled, an additional **Exclude Hidden Shares** field appears. Enter hidden share names to exclude from auto-enumeration (for example, `ADMIN$, C$, IPC$`).

:::info
Filtering shares reduces scan duration and focuses results on the most relevant data repositories. Exclude administrative shares (like `ADMIN$` and `IPC$`) unless you specifically need to audit their permissions.
:::

## Related Topics

- [Connection Configuration](/docs/accessanalyzer/1_0/connectors/source/cifs/connectionconfig) — Setting up file server connections
- [Scan Depth and Worker Configuration](/docs/accessanalyzer/1_0/connectors/source/cifs/scandepthworkers) — Controlling scan thoroughness
