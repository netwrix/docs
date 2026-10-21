---
title: "Register Linux systems with a domain service account"
description: "Set one Linux service account on a domain so Privilege Secure for Discovery manages Linux systems that it finds in Active Directory without per-system credentials."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: What is the supported way to move a Linux system that has its own stored credentials to the domain Linux service account? Evidence: remediant/db_data/linux/system_info.py `service_acct` returns the system's own `auth` first, then the domain account, then the global account; svc_worker.py (registerHostCreds) saves `auth` at registration only when no domain or global account exists, and nothing in 26.09.1 clears an existing `auth`. Registering the system again creates the domain account on the endpoint (scan_strategy.py `register_service_account`, where the domain account overrides the registration account), but later scans still read the stored `auth`.
:::

You can set one Linux service account for a domain. Netwrix Privilege Secure for Discovery then uses that account for every Linux system in the domain that you register without credentials, so you don't enter a user name and password for each system.

## Prerequisites

- The Linux systems are in the domain and the product has found them in Active Directory (AD).
- The account meets the requirements in [Linux registration prerequisites](./linux-registration-prerequisites.md).
- You can sign in to the product as an administrator.

## Choose the account type

The format of the user name decides who creates the account:

| Format | Meaning |
| --- | --- |
| `DOMAIN\Username` | A domain account that already exists. The product doesn't create it. Systems must resolve and authenticate it, for example through SSSD. The account can use a password only, not an SSH key. |
| `Username` | A local account. At registration, the product creates it on each system with the password that you enter, or uses it if it exists. |

## Set the domain Linux service account

1. Go to **Configure** > **Server**.
2. In **Domain Configuration**, select the arrow next to the domain to expand it.
3. In the **Linux Service Account** section, enter the user name in **Username (Domain or Local)**, for example `CORP\svc-netwrix`.
4. Enter the password in **Password**.

   ![The Linux Service Account section of a domain, with Username and Password fields](/images/privilegesecurediscovery/endpoint-preparation/linux-domain-service-account.webp)

5. Click **Save**.

Fill in both fields or leave both empty. If you fill in only one, the product shows `Linux Service Account must be filled or left blank entirely.`

## Register systems with the account

Register a Linux system and leave out the registration user name and password. Only administrators can do this. If the domain has no Linux service account, registration fails and asks for credentials. For the methods, see [Register Linux systems by using the API](../bulk-onboarding/register-linux-systems.md).

A system keeps its own credentials if it already has them. Systems that you registered with credentials before you set the domain account continue to use those credentials.

## Set the directory bridging solution

Set the solution that the system uses, such as SSSD, with one of these methods:

- On the **Grant Access** screen, use the **Directory Bridging** setting of the system.
- In the Quickstart tool, set **Set Directory Bridging Strategy** and **Set Directory Bridging Domain** in the report. See [Report and update systems](../bulk-onboarding/report-and-update-systems.md).
- Call the API.

For the available solutions, see [Linux systems and Active Directory](./linux-with-active-directory.md).
