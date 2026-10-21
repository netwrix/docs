---
sidebar_position: 3
sidebar_label: Antivirus detections
description: Understand why antivirus products flag PingCastle and how to reduce false positives.
---
# PingCastle AntiVirus Detections

Attackers have used PingCastle as a reconnaissance tool in some high-profile attacks, leading some AntiVirus and EDR products to flag it as malicious.

**Recommended Action**: Whitelist PingCastle.exe on the specific systems and users your organization authorizes for security assessments. Normal end users shouldn't be running PingCastle.

## Changes Made to Reduce False Positives

Netwrix is actively working to reduce false positive detections:

**Packaging Changes**:
- Removed `changelog.txt` from .zip packages, which some AV engines misinterpret
- Netwrix now documents release notes on GitHub, with detailed changelogs at [community.netwrix.com](https://community.netwrix.com)

**Auto-Updater Improvements**:
- Previously made two network calls on first run (GitHub API and `release-assets.githubusercontent.com`), which triggered AV detections
- Now uses only the GitHub API to check versions and downloads updates only when necessary

**Executable Changes**:
- Migrated from Fody Costura (v3.4 and earlier) to ASP.NET 8 native packaging (v3.5+)

## Netwrix Statement on PingCastle and the AntiVirus detections

:::note Security Statement
> **About Antivirus Detections and PingCastle**
>
>  PingCastle is a trusted security assessment tool designed to help organizations evaluate the health and security posture of their Active Directory environments. 
>
> Some antivirus or endpoint protection solutions may flag PingCastle as "hacktool" or a "potentially unwanted program (PUP)". The flag reflects PingCastle's dual-use potential rather than malicious behavior: the same in-depth techniques it uses to audit and test security can also be misused by attackers. PingCastle doesn't itself attack AD, but attackers could use it during reconnaissance to enumerate risks they could exploit. Security vendors often classify such advanced administrative and diagnostic tools conservatively to avoid underestimating risk. 
>
> The following applies: 
>
> * PingCastle is safe to use when obtained from the official source.
> * It doesn't exploit or attack Active Directory.
> * No malicious payloads or hidden behavior are present in the software.
> * The detections occur only because its ability to enumerate security risks and misconfigurations could provide information an attacker might misuse.
>
> In short, PingCastle belongs in the same category as other professional penetration-testing or red-team tools: safe and valuable when used by administrators and security professionals, but flagged by antivirus products due to its capabilities.
:::
