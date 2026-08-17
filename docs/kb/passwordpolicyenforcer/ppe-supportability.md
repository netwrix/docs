---
title: "Understanding PPE Supportability"
description: >-
  Defines support levels for Password Policy Enforcer versions, including which
  versions receive bug fixes, security patches, and configuration assistance.
sidebar_label: PPE Supportability
sidebar_position: 0
keywords:
  - PPE supportability
  - Password Policy Enforcer support policy
  - supported versions
  - bug fix policy
  - security patch policy
  - version support lifecycle
  - active support
  - limited support
  - discontinued support
  - upgrade
  - PPE
products:
  - password_policy_enforcer
tags:
  - kb
---

# Understanding PPE Supportability

## Overview

Netwrix Password Policy Enforcer (PPE) helps customers enforce consistent password policies. This article defines what level of support you can expect based on the version of PPE you are running, and sets clear expectations for how bug fixes, security patches, and configuration assistance are provided.

Only the latest available version of PPE receives active bug-fix support. The previous major version (N−1) receives configuration guidance and security vulnerability fixes. Versions older than N−1 are out of support entirely.

---

### Currently Supported Versions

The latest version of PPE is always the definitive reference — check the [Netwrix Customer Portal](https://www.netwrix.com/support.html) for the current release.

| Version Track | Example | Support Level | Bug Fixes | Security Fixes | Config Advice |
|---|---|---|---|---|---|
| Latest (N) | 11.x (current) | Active Support | Yes | Yes | Yes |
| Previous Major (N−1) | 10.x | Limited Support | No | Yes | Yes |
| All Earlier Versions | 9.x and below | Discontinued | No | No | No |

---

### Operating System Support

The Password Policy Enforcer documentation includes a list of supported Windows versions. Support is only available for the compatible Windows versions.

---

### Support Level Definitions

#### Active Support (Latest Version)

The latest version of PPE — always available in the Netwrix Customer Portal — is the only version in Active Support. A version in Active Support:

- Receives bug fixes and defect resolutions
- Receives security vulnerability patches
- Is eligible for full technical support assistance from Netwrix
- Is eligible for professional services assistance
- Is the only version against which Netwrix engineers will test and verify reported issues

> **NOTE:** All PPE components — the PPE Server, Client, Configuration Console, and PPE Web — ship together as a single release. To be on the latest version, all components must be upgraded together. A mixed-version deployment (for example, latest Server with an older Console) is not a supported configuration.

#### Limited Support (N−1: Previous Major Version)

The previous major version of PPE receives Limited Support. This means:

- Netwrix will not develop or ship new bug fixes for this version.
- Netwrix will patch security vulnerabilities discovered in this version.
- Netwrix support engineers will provide configuration guidance to help you get the best results from your existing installation.
- Netwrix will only investigate bug reports on N−1 if you can first reproduce and confirm the issue on the latest version — if confirmed, a fix will target the latest version only.
- Professional services assistance is available for existing configurations, but not for new customizations.

Netwrix will work with you on your existing installation and help you configure your environment effectively. Netwrix strongly recommends upgrading to the latest version and will raise this recommendation on every interaction. Upgrades take time, and Netwrix will continue to provide guidance during this period.

#### Discontinued Support (N−2 and Earlier)

Any version of PPE that is two or more major versions behind the current release is fully out of support. This means:

- No bug fixes, security patches, or updates of any kind
- Not eligible for technical support assistance
- Not eligible for professional services assistance
- Not available for download in the Netwrix Customer Portal

Customers on discontinued versions must upgrade to a supported version to receive any assistance. The Netwrix support team can provide guidance on the upgrade path.

---

### PPE Components and Version Alignment

PPE is composed of the following components, which are released and versioned together:

| Component | Description |
|---|---|
| PPE Server | Core enforcement engine, installed on domain controllers |
| PPE Client | End-user-facing component providing password feedback at the workstation |
| Configuration Console | Administrative UI for managing password policies |
| PPE Web | Web-based interface for self-service password changes and resets |

All four components ship as a single versioned release. For a deployment to be considered fully on the latest version — and therefore eligible for Active Support and bug fixes — all components must be upgraded to the same current release. Netwrix does not support running mismatched component versions, which may result in unpredictable behavior.

---

## Instructions

### For Customers on the Latest Version

If you are running the latest version of PPE with all components upgraded:

- You are fully supported and eligible for bug fixes, security patches, and full technical assistance.
- When reporting an issue, be prepared to describe your environment, the components involved, and steps to reproduce.
- Netwrix engineers will test against your configuration and, if confirmed, file and fix the defect.

### For Customers on N−1 (Previous Major Version)

If you are on the previous major version of PPE:

- The support team will provide configuration guidance to help you work within your current version.
- If you report a bug that is known to be fixed in a later version, the support team will ask you to upgrade to the latest version. If the bug is new, the support team will attempt to reproduce it on the latest version. If the support team cannot reproduce it, you may be asked to upgrade to the latest version to confirm whether the problem still exists. Bug fixes will only be applied to the current version, unless they are also security fixes, in which case they will be applied to older versions according to the table above.
- If the issue is confirmed in the latest version, Netwrix will develop a fix for the latest version only and will not backport it to N−1.
- Netwrix will patch security vulnerabilities for N−1.
- Netwrix will recommend upgrading to the latest version at every opportunity.

> **NOTE:** Maintaining a small test lab with the latest PPE version allows you to verify reported issues and use the latest fixes without disrupting your production environment.

### For Customers on N−2 or Earlier

Customers on any version older than N−1 are not eligible for support. Netwrix strongly recommends upgrading to the latest version. The support team is available to help you plan and execute the upgrade path.

---

### Upgrade Guidance and Best Practices

Staying current with PPE is the best way to ensure your password policy enforcement is secure, effective, and fully supported. Netwrix recommends:

Netwrix develops and tests PPE's components (Server, Client, Configuration Console, Mailer, and PPE/Web) as a single package. Use all components from the same version for the best results. Refer to the upgrade instructions in the documentation for the correct upgrade procedure. During an upgrade, you will temporarily run components from two versions simultaneously. Do not enable any new features in the new version during this time, or run mixed versions for an extended time. If you encounter a problem that the support team believes is caused by mismatching versions, you may be asked to finish the upgrade before troubleshooting continues.

- Review the release notes before upgrading to understand what has changed.
- Test upgrades in a non-production environment before rolling out to your full domain.
- Plan upgrades proactively rather than reactively — waiting until you encounter an issue on an unsupported version limits your options.
- Contact the Netwrix support team if you need assistance planning your upgrade.

Always download the latest version of PPE from the [Netwrix Customer Portal](https://www.netwrix.com/support.html). The Portal is the authoritative source for the current release and its release notes.
