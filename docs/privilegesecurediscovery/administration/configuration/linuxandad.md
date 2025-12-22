---
title: "Using Privilege Secure with Lin"
description: "Using Privilege Secure with Lin"
sidebar_position: 130
---

# Using Privilege Secure with Lin

Using Privilege Secure with Lin

# Using Privilege Secure with Lin

**CAUTION:** Always back up the /etc/sudoers file prior to scanning or enabling Scan Mode on any
system in NPS-D. Scanning, regardless of Protect Mode setting, a Liunx system will result in a
flattening of the /etc/sudoers file. This will pull in all permissions from other sources (e.g:
files locate in /etc/sudoers.d) into the /etc/sudoers file, and disable sudo permissions being
acquired from those sources.ux and Active Directory

## Approach to Linux

Netwrix believes that Just-In-Time privileged access should be easy to deliver and work well with
modern IT practices.

We've designed our Linux privileged access solution to fit into common on-prem, hybrid and
cloud-hosting scenarios and common management approaches. Whether your Linux users sign in with
local accounts or AD Directory accounts, we have you covered.

- Non-disruptive
    - No: agents to install and update, AD dependencies, dzdo, pbrun
    - Minimal pre-reqs: Python, SSH, Sudo
- Adaptable
    - Use AD groups for role-based privileged access to Linux systems
    - Linux scenarios:
        - On-premise, cloud hosted, VM's, containers
        - OS variants: RHEL, Ubuntu, Centos, Oracle, AWS and others.
    - Seamless Devops and Automation
        - Full REST API
            - registering, configuring, decommissioning
            - provisioning privileged access
            - initiating and expiring privileged access
        - Set Sudo with Ansible, etc. then Privilege Secure converts access to JITA
        - Compatible with common directory-bridging/authentication solutions like Centrify,
          PowerBroker Open and SSSD.
- Lightweight & Powerful
    - Scans, parses and stores privileged access permissions centrally
    - Simple reporting on every account with privileged access
    - View the specific privileged access of a user of group simply - no need to understand Sudo
      syntax
        - Skilled Linux admins can use the full capability of Sudo without interference

## Managing Linux systems in Privilege Secure

- Privilege Secure manages Linux systems without using an agent, and this requires a registration
  step to establish a local service account with SSH access and Sudo permissions.
    - [Privilege Secure and Linux](/docs/privilegesecurediscovery/administration/configuration/linux.md)
    - AD-joined Linux systems (Using Centrify, PB Open, SSSD/RealmD) will be discovered in AD by
      Privilege Secure before "registration" occurs but can not be Scanned or protected until a
      Privilege Secure service account is established on the system.
- Privilege Secure scans, inventories and changes local and domain account's Sudo access to ensure
  authorized JITA or persistent Sudo access is enforced and reportable. Privilege Secure uses its
  service account to do this over SSH.
- When Linux systems use Privilege Secure Lightweight Directory-Bridging Privilege Secure controls
  Sudo authorizations and creates a local accounts corresponding to domain users. On systems that
  are not AD-joined, domain users cannot sign into the system. To enable domain users to have JITA
  access, Privilege Secure creates a local account with the same username and password as the domain
  user.  When JITA expires, the local account password is scrambled to block the user from signing
  until the next JITA session.
- When Linux systems use Centrify, PBOpen or SSSD directory-bridged authentication Privilege Secure
  controls Sudo authorizations, and does not create or modify any local accounts (except for our
  "Service" account).

## User authentication to Linux systems with Privilege Secure

### Authentication with Lightweight Directory Bridging

- Users sign in to a local account created by S1 which has the same username and password as their
  domain account
    - S1 collects the domain user credential in the web portal, and converts it to the secure hashed
      format used by Linux, placing it in (/etc/shadow)
    - the user signs into the system with their domain user name and password
    - when the JITA session end, resetting the password of the account stops the user from signing
      in again
        - Caveats
            - if sudo permissions are not restricted, users may create other local accounts which
              are not managed by Privilege Secure
            - if sudo permissions are not restricted users may authorize SSH keys to other users
            - Linux system configuration can be used to allow/deny login using access.conf

### Authentication with Active-Directory Bridged Authentication Providers (Centrify, PowerBroker, RHEL SSSD)

- User signs in with local or AD directory account, and the authentication provider is responsible
  for authenticating the user
- Linux system config and the authentication provider are responsible for allowing/denying login

## Viewing and Changing Sudo Access for a System in Privilege Secure

- The "Administrators" inventory for a system represents all local, domain and unknown users and
  groups that are assigned Sudo permissions for the system. It's a higher-level summary of accounts
  with sudo permissions. It parses permissions via all commonly used approaches.
    - directly by name
    - user aliases
    - user lists
- Privilege Secure stores the full content of the Sudoers file and any "includes" each time it scans
  a system, and this can be viewed in the UI.
- You can drill down into the raw sudoers file content for a system to view and change it.
- You can discard and changes and use the sudoers file last dscovered on the system.
- Access changes made in the inventory and in raw sudoers are synchronized
- When Privilege Secure "protects" a system, or initiates a JITA session for a user when protect is
  not enabled, it generates a new sudoers file based on the current authorized Sudo access in the
  inventory including ongoing JITA sessions.

## Getting Started Scenarios for Managing Sudo Access in Privilege Secure

- Starting Scenarios
    - Sudo is unmanaged
        - scan
        - evaluate and adjust permissions
            - UI, API/quickstart
            - test Sudo permissions
        - set permissions consistently across many systems
            - get Sudoers definition ID from raw sudo screen
            - set on many systems by quickstart or API
        - turn on protect
    - Sudo is managed centrally
        - Ansible
            - turn off ansible, begin managing in Privilege Secure as above.
            - use Ansible to update if needed
                - systems into scan mode
                - push from ansible
                - scan systems
                - configure accounts JITA/Pers. in S1 as needed
                - test access
                - Optional: set permissions consistently across many systems
                - systems back into protect mode
        - LDAP/AD/proprietary
            - Export permissions by accounts
            - Create an equivalent sudoers configuration
            - Place into sudoers for system in S1 - UI or API
            - Configure accounts JITA/Pers. in S1 as needed
            - test access
            - Optional: set permissions consistently across many systems
            - turn on protect

## Using Privilege Secure JITA with Linux

- Sign into S1 with your domain user account
- Find the system on the Grant Access screen
- Initiate JITA for an AD directory account
    - If S1 bridging, and SAML/SSO authentication in use, type in AD credentials
        - Because we have to set the PW on the local account we create
- SSH to the system as domain username
- Use Sudo as normal
- Sign out
- Expire JITA session

**NOTE:** The Privilege Secure API can be used to initiate Linux JITA for a user in some scenarios

### Addendum

Depending on the bridging configuration the systems might accept short names or fully qualified
names. We expect the fully qualified name to always work. A user could theoretically log in with
`domain\username` OR `username@domain`.
