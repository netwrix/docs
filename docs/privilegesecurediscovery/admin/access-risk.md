---
title: "Access Risk reports"
description: "Enable the Access Risk screens and use them to measure standing privileged access and reduce your attack surface."
sidebar_position: 20
---

The **Access Risk** screens report on standing privileged access in your environment. Use them to assess your attack surface and to track how it changes as you remove standing privilege.

Access Risk is disabled by default. When enabled, it captures data from the last 90 days and provides:

- A summary of the standing privileged access attack surface across Windows, Mac, and Linux systems.
- The standing privileged access that attackers rely on most for lateral movement, so you can remove it:
    - Accounts with unsegregated privileged access (servers, workstations, and domain)
    - Accounts with privileged access on many systems
- Trends in privileged access over time, so you can identify impactful changes.
- Filtering by a single domain.
- Export of the data to support review and cleanup.

## Enable Access Risk

1. Open the **Configure** > **Server** settings.
1. Enable the Privileged Access Risk capability.

The analytics engine service runs the Access Risk screens. Data is captured nightly and only after you enable the capability. Select **Calculate Now** to recalculate the current day's data and see recent changes in the domain.

## Review the reports

### Privileged Users

The **Privileged Users** screen shows instances of standing privileged access from group membership and from direct access. Together they make up the attack surface across the organization. The more you reduce them, the smaller the attack surface.

### Segregation

The **Segregation** screen shows users who have access to more than one tier of the domain: domain access, server access, and workstation access. A compromised system can have a greater impact when an account spans tiers because of lateral movement. Reducing these numbers reduces the attack surface and restricts lateral movement.

Select a date to see the make-up of the unsegregated access on that day.

### Cumulative

The **Cumulative** screen shows the total amount of standing privileged access in the domain, and how much of it comes from groups or from direct access to servers. It also breaks the access down into domain access, server access, and workstation access.

Select a date to see the details and the make-up of the standing privilege on that day.

## Related information

For the definition of domain-level privileged access, see [Privileged access security levels](https://docs.microsoft.com/en-us/security/compass/privileged-access-security-levels) in the Microsoft documentation.
