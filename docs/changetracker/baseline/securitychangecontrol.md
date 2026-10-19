---
title: "Security and Change Control Using Baseline Policies"
description: "Security and Change Control Using Baseline Policies"
sidebar_position: 30
---

# Security and Change Control Using Baseline Policies

Several security frameworks reference the need for change control, integrity monitoring, and an
established configuration standard or hardened build standard. All compliance frameworks require a
Gold Build Standard (for example, NIST 800-53 CM-2 and CM-3, CIS Control 5.2, PCI DSS Requirement
2, and especially NERC CIP 007-3 and 010-3) as a means of guaranteeing security. A consistent build
is essential for maximizing security.

The following diagram shows the NERC CIP 010 process. The Netwrix Baseline Configuration
management process lets you follow this cycle:

![nerc_cip_010_lifecycle](/images/changetracker/baseline/nerc_cip_010_lifecycle.webp)

Every configuration item included in the Baseline Policy must be essential and justified, since
every configuration decision potentially increases your attack surface.

Your auditor looks for a fully documented Baseline Policy and the reasoning behind it.

Equally, any time you extend or update the Baseline, you must have good reason, and thereafter all
systems in scope of this Baseline must show compliance.
