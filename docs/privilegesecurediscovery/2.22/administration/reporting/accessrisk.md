---
title: "Access Risk"
description: "Access Risk"
sidebar_position: 30
---

# Access Risk

Access Risk

# Access Risk

The purpose of this document is to outline the relevant features of the Access Risk screen. This
will provide key insights and reporting as it relates to standing privilege and assessing attack
surface. This feature was added to Privilege Secure in 2.12.0.

The access risk capability is not enabled by default. It is designed to capture data from the last
90 days giving a number of key value items:

- Concise summary of the standing privileged access attack surface across Windows, Mac and Linux
  systems.
- Maximize protection by pinpointing and removing the standing privileged access attackers rely on
  most for lateral movement .

    - Accounts with unsegregated (servers, workstations, domain) privileged access
    - Accounts with privileged access on many systems

- Observe trends in privileged access over time to identify impactful changes and stay on track
- Filter data to a single domain of interest
- Export data to support review and cleanup activities

## Enabling Privileged Access Risk Screens

The Privileged Access Risk capability of Privilege Secure can be enabled in the Configure/Server
settings.

Data is only captured once enabled, and this will be captured nightly. The "Calculate Now" button
will force a recalculation of the current day's data. This allows a user to see recently updated
changes within the domain.

The Privileged Access Risk screens are run by the analytics engine service.

## Available Reports

Privileged Users

The Privileged Users screen shows the instances of standing privilege access from groups and direct
access. Each of these combine to add to the attack surface across the organization. The more that
this is reduced the smaller the attack surface area becomes.

Segregation

The Segregation screen shows information on users that have access to more than one tier of the
domain (domain access, server access and workstation access). This is important information as shows
how a compromised system can lead to greater impact due to lateral movement. Again reducing these
numbers will substantially reduce the organizations attack surface and restrict lateral movement.

Clicking on a specific date yields data on the make up of the unsegregated access.

Cumulative

The Cumulative screen shows the total amount of standing privilege access that exists within the
domain. It shows how much of that comes from groups or direct access to servers.

Additional information is supplied to show how this access breaks down to domain access, server
access and workstation access.

Again clicking a specific date will yield details for that specific day and the make up of that
standing privilege.

## What is Domain Access?

[https://docs.microsoft.com/en-us/security/compass/privileged-access-security-levels](https://docs.microsoft.com/en-us/security/compass/privileged-access-security-levels)

## Appendix

This feature requires at least version 2.12.0.
