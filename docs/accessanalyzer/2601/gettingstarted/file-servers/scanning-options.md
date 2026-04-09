---
title: "Available Scanning Options"
description: "Available scan types and configuration options for file server source groups"
sidebar_position: 2
---

# Available Scanning Options

| Scan Option | Description | Available Configurations |
| --- | --- | --- |
| **Access** | Scans file server permissions and access controls to identify who has access to what. | Share selection (all shares or custom), file-level permissions, concurrent workers (1–20) |
| **Sensitive Data** | Scans file contents for sensitive data patterns such as PII, credentials, PHI, and financial records. The first scan runs in full; subsequent scans run differentially, collecting only changes since the last run. | Share selection (all shares or custom), sensitive data types, OCR, differential scan |

## Scan Configuration

**Access**

- **Include Shares** — Select **All shares** to scan every share on the server, or **Custom selection** to specify which shares to include.
- **Exclude Shares** — Enter share paths to skip. Wildcards are supported (for example, `\\fileserver\*\temp*`).
- **Hidden shares** — Select **Automatically enumerate hidden shares** to include hidden shares. Use **Exclude Hidden Shares** to skip specific ones (for example, `ADMIN$, C$, IPC$`).
- **File-level permissions** — Select **Include file-level permission data** to collect permissions at the individual file level in addition to folder level. This increases scan time.
- **Workers** — Sets the number of concurrent enumeration threads. Default is `3`; valid range is `1–20`. Increase to improve scan speed; decrease to reduce load on the file server.

**Sensitive Data**

- **Include/Exclude Shares** — Same share selection options as the Access scan.
- **Sensitive data types** — Select **Inherit from Global Settings** to use the system-wide classification configuration, or disable this option to configure types for this source group. Enable each type you want to detect and assign a classification label.
- **OCR** — Select **Run OCR** to scan images, screenshots, and scanned documents for sensitive text. This increases processing time.
