---
title: "Dashboard reference"
description: "Learn what each number on the Netwrix Privilege Secure for Discovery dashboard means and how it is calculated."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Define **Scan Performance | Scan Completion** (the tile isn't described on this page); the previous page gave no definition. Evidence: none.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/admin/reporting/360058765294_blobid0.webp shows user names and large system counts. Redact or replace with a capture that uses demo data.
:::

The dashboard in Netwrix Privilege Secure for Discovery summarizes scan results, access requests, and privileged access across your domains. Use this reference to understand what each tile counts and where the number comes from.

![The dashboard showing summary tiles for systems scanned, scan performance, inactive systems, overdue requests, failed hosts, highest privileged accounts, and high risk systems](/images/privilegesecure/4.2/discovery/admin/reporting/360058765294_blobid0.webp)

## Summary tiles

- **Summary | Total Systems Scanned**: The number before the slash is the count of systems that the product attempted to scan in the most recent run. The number after the slash is the total count of computer objects imported from your directory. Compare the total with **Summary | Scan Mode Enabled**, which is the number of systems that the product attempts to scan.

- **Summary | Scan Mode Enabled**: The number of systems with the scan policy enabled.

- **Summary | Protect Mode Enabled**: The number of systems with Protect Mode enabled.

- **Summary | Active Sessions**: The number of just-in-time administration (JITA) sessions that are active and counting down to expiration.

- **Summary | Inactive Systems**: Computer objects with a last logon timestamp older than 90 days.

## Scan performance

- **Scan Performance | Successful Systems**: The number of systems that the product reached and scanned.

- **Scan Performance | Offline Systems**: The number of systems that were offline at the time of the scan.

- **Scan Performance | Encountered Error**: The number of systems that had a connection error or another unhandled exception.

Systems for which the product couldn't verify that it reached the correct host (a host verification error) don't appear to be counted in these tiles.

## Requests and failures

- **Overdue Requests**: Access requests that are more than 2 minutes past their expiration time.

- **Failed Hosts**: Systems whose most recent scan attempt was unsuccessful. This count includes systems that previously failed to scan and are no longer set to be scanned. It doesn't include systems that haven't been scanned yet, such as systems that were newly imported from the directory.

## Privilege and risk

- **Highest Privileged Accounts**: The users who can reach the most systems to gain administrator access, in descending order.

- **High Risk Systems**: The systems with the largest number of users who could request administrator access, in descending order.

- **LDAP Domains**: The names of all configured LDAP connections.
