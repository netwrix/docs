---
title: "Netwrix Password Policy Enforcer Supportability Statement"
description: >-
  Defines support levels for Password Policy Enforcer versions, including which
  versions receive bug fixes, security patches, and configuration assistance.
keywords:
  - PPE supportability
  - Password Policy Enforcer support policy
  - supported versions
  - bug fix policy
  - security patch policy
  - version support lifecycle
products:
  - password-policy-enforcer
sidebar_label: Supportability Statement
sidebar_position: 0
tags: []
---

# Netwrix Password Policy Enforcer Supportability Statement

Netwrix is committed to helping customers get the most out of Password Policy Enforcer (PPE). This document defines what level of support you can expect based on the version of PPE you are running, and sets clear expectations for how bug fixes, security patches, and configuration assistance are provided.

Only the latest available version of PPE receives active bug-fix support. The previous major version (N−1) receives configuration guidance and security vulnerability fixes. Versions older than N−1 are out of support entirely.

---

## Currently Supported Versions

The latest version of PPE is always the definitive reference — check the [Netwrix Customer Portal](https://www.netwrix.com/support.html) for the current release.

| Version Track | Example | Support Level | Bug Fixes | Security Fixes | Config Advice |
|---|---|---|---|---|---|
| Latest (N) | 11.x (current) | Active Support | Yes | Yes | Yes |
| Previous Major (N−1) | 10.x | Limited Support | No | Yes | Yes |
| All Earlier Versions | 9.x and below | Discontinued | No | No | No |


---

## Operating System Support

The Password Policy Enforcer documentation includes a list of supported Windows versions. Support is only available for the compatible Windows versions.

---

## Support Level Definitions

### Active Support (Latest Version)

The latest version of PPE — always available in the Netwrix Customer Portal — is the only version in Active Support. A version in Active Support:

- Receives bug fixes and defect resolutions
- Receives security vulnerability patches
- Is eligible for full technical support assistance from Netwrix
- Is eligible for professional services assistance
- Is the only version against which Netwrix engineers will test and verify reported issues

:::note
All PPE components — the PPE Server, Client, Configuration Console, and PPE Web — ship together as a single release. To be on the latest version, all components must be upgraded together. A mixed-version deployment (for example, latest Server with an older Console) is not a supported configuration.
:::

### Limited Support (N−1: Previous Major Version)

The previous major version of PPE receives Limited Support. This means:

- No new bug fixes will be developed or shipped for this version
- Security vulnerabilities discovered in this version will be patched
- Netwrix support engineers will provide configuration guidance to help you get the best results from your existing installation
- Bug reports on N−1 will only be investigated if the issue can first be reproduced and confirmed on the latest version — if confirmed, a fix will target the latest version only
- Professional services assistance is available for existing configurations, but not for new customizations

Netwrix will work with you on your existing installation and help you configure your environment as effectively as possible. Upgrading to the latest version is strongly recommended, and the support team will recommend this on every interaction. Upgrades take time, and Netwrix will not leave you without guidance in the interim.

### Discontinued Support (N−2 and Earlier)

Any version of PPE that is two or more major versions behind the current release is fully out of support. This means:

- No bug fixes, security patches, or updates of any kind
- Not eligible for technical support assistance
- Not eligible for professional services assistance
- Not available for download in the Netwrix Customer Portal

Customers on discontinued versions must upgrade to a supported version to receive any assistance. The Netwrix support team can provide guidance on the upgrade path.

---

## PPE Components and Version Alignment

Password Policy Enforcer is composed of the following components, which are released and versioned together:

| Component | Description |
|---|---|
| PPE Server | Core enforcement engine, installed on domain controllers |
| PPE Client | End-user-facing component providing password feedback at the workstation |
| Configuration Console | Administrative UI for managing password policies |
| PPE Web | Web-based interface for self-service password changes and resets |

All four components ship as a single versioned release. For a deployment to be considered fully on the latest version — and therefore eligible for Active Support and bug fixes — all components must be upgraded to the same current release. Running mismatched component versions is not a supported configuration and may result in unpredictable behavior.

---

## How to Get the Best Support Experience

### For Customers on the Latest Version

If you are running the latest version of PPE with all components upgraded:

- You are fully supported and eligible for bug fixes, security patches, and full technical assistance
- When reporting an issue, be prepared to describe your environment, the components involved, and steps to reproduce
- Netwrix engineers will test against your configuration and, if confirmed, file and fix the defect

### For Customers on N−1 (Previous Major Version)

If you are on the previous major version of PPE:

- The support team will provide configuration guidance to help you work within your current version
- If you report a bug that is known to be fixed in a later version, then we will ask you to upgrade to the latest version. If the bug is new, we will try to reproduce it on the latest version. If we cannot reproduce it, we may ask you to upgrade to the latest version to confirm whether the problem still exists. Bug fixes will only be applied to the current version, unless they are also security fixes, in which case they will be applied to older versions according to the table above.
- If the issue is confirmed in the latest version, a fix will be developed for the latest version only — it will not be backported to N−1
- Security vulnerabilities will be patched for N−1
- Upgrading to the latest version will be recommended at every opportunity

:::tip
Maintaining a small test lab with the latest PPE version allows you to verify reported issues and take advantage of the latest fixes without disrupting your production environment.
:::

### For Customers on N−2 or Earlier

Customers on any version older than N−1 are not eligible for support. Netwrix strongly recommends upgrading to the latest version. The support team is available to help you plan and execute the upgrade path.

---

## Upgrade Guidance and Best Practices

Staying current with PPE is the best way to ensure your password policy enforcement is secure, effective, and fully supported. Netwrix recommends:

PPE's components (Server, Client, Configuration Console, Mailer and PPE/Web) are developed and tested as a single package. You will have the best experience using all the components from a single version. Refer to the upgrade instructions in the documentation for the correct upgrade procedure. During an upgrade, you will temporarily run components from two versions simultaneously. Do not enable any new features in the new version during this time, or run mixed versions for an extended time. If you encounter a problem that we believe is caused by mismatching versions, then we may ask you to finish the upgrade before we continue troubleshooting the issue.

- Review the release notes before upgrading to understand what has changed
- Test upgrades in a non-production environment before rolling out to your full domain
- Plan upgrades proactively rather than reactively — waiting until you hit an issue on an unsupported version limits your options
- Contact the Netwrix support team if you need assistance planning your upgrade

Always download the latest version of PPE from the [Netwrix Customer Portal](https://www.netwrix.com/support.html). The Portal is the authoritative source for the current release and its release notes.
