---
title: "Provision FPolicy Account"
description: "Provision FPolicy Account"
sidebar_position: 10
---

# Provision FPolicy Account

This topic describes the steps needed to create a user account with the privileges required to
connect the Activity Monitor Activity Agent to the FPolicy engine and to execute the NetApp API
calls required for activity monitoring and configuration.

Provisioning this account is a three part process:

- Part 1: Create Role with API/CLI Access
- Part 2: Create a Group & Assign Role
- Part 3: Add User to Group

Relevant NetApp Documentation: To learn more about node access controls, please visit the NetApp
website and read the
[na_useradmin – Administers node access controls](https://library.netapp.com/ecmdocs/ECMP1511537/html/man1/na_useradmin.1.html)
article.

## Part 1: Create Role with API/CLI Access

This section provides instructions for creating a role with access to the following commands:

```
login-http-admin
api-system-api-list
api-system-get-version
api-cifs-share-list-iter-*
api-volume-list-info-iter-*
api-fpolicy*
cli-fpolicy*
```

:::note
The `api-fpolicy*` command is required for automatic configuration of FPolicy. The
`cli-fpolicy*` command is required to use the “Enable and connect FPolicy” option for a Monitored
Host configuration.
:::


The following command needs to be run to create the role.

Run the following command when provisioning an account for manual configuration of FPolicy; it
includes the "Enable and connect FPolicy" option requirement:

```
useradmin role ‑add [ROLE_NAME] ‑c "[ROLE_DESCRIPTION]" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*,cli‑fpolicy*
```

Example:

```
useradmin role ‑add enterpriseauditor ‑c "Role for Enterprise Auditor" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*,cli‑fpolicy*
```

Run the following command when provisioning an account for automatic configuration of FPolicy; it
includes the "Enable and connect FPolicy" option requirement:

```
useradmin role ‑add [ROLE_NAME] ‑c "[ROLE_DESCRIPTION]" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*,api‑fpolicy*,cli‑fpolicy*
```

Example:

```
useradmin role ‑add enterpriseauditor ‑c "Role for Enterprise Auditor" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*,api‑fpolicy*,cli‑fpolicy*
```

After the role is created, complete Part 2: Create a Group & Assign Role.

## Part 2: Create a Group & Assign Role

Once the role has been created, it must be attached to a group. The following command needs to be
run to create a group and assign the role to it.

```
useradmin group ‑add [GROUP_NAME] ‑r [ROLE_NAME]
```

Example:

```
useradmin group ‑add nwxgroup ‑r enterpriseauditor
```

After the group is created and the role is assigned, complete Part 3: Add User to Group.

## Part 3: Add User to Group

The final step is to add the domain user to the new group, Backup Operators group, and Power Users
group. The following command needs to be run to add the user to all three groups.

```
useradmin domainuser ‑add [DOMAIN\USER] ‑g [GROUP_NAME, WITHIN " MARKS IF MULTIPLE WORDS],"Backup Operators","Power Users"
```

Example:

```
useradmin domainuser ‑add example\user1 ‑g nwxgroup,"Backup Operators","Power Users"
```
