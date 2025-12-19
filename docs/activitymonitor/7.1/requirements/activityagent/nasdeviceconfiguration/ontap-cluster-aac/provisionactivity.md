---
title: "Provision ONTAP Account"
description: "Provision ONTAP Account"
sidebar_position: 10
---

# Provision ONTAP Account

This topic describes the steps needed to create a user account with the privileges required to
connect the Activity Monitor Agent to ONTAP API and to execute the API calls required for activity
monitoring and configuration.

Provisioning this account is a two part process:

- Part 1: Create Security Role
- Part 2: Create Security Login

## Part 1: Create Security Role

This section provides instructions for creating an access-control role. An access-control role
consists of a role name and a set of commands or API endpoints to which the role has access. It also
includes an access level (none, read-only, or all) and a query that applies to the specified command
or API endpoint.

The permissions needed depends on the functionality level:

- Least Privileged: ONLY Collect Events – This is the minimal functionality level. A user manually
  configures FPolicy and ensures that it stays enabled and connected. The product only collects
  events. This functionality level is not recommended as it requires an additional solution that
  tracks the state of FPolicy and fixes the problem should ONTAP disconnect or should the policy
  become disabled.
- **_RECOMMENDED:_** Less Privileged: Enable/Connect Policy & Collect Events – With this level, the
  user still performs the initial FPolicy configuration manually. The product tracks the state of
  FPolicy with periodic checks to ensure it stays enabled and connected all the time.
- **_RECOMMENDED:_** Automatically Configure the FPolicy – With this full-blown level, no manual
  configuration is needed. The product performs the initial FPolicy configuration; updates FPolicy
  to reflect configuration changes; ensures that FPolicy stays enabled and connected all the time.

No matter which set of permissions you provision, validate the configuration before continuing to
Part 2. See the
[Validate Part 1: Security Role Configuration](#validate-part-1-security-role-configuration) topic
for additional information.

If the FPolicy is to be used for both the Activity Monitor and Enterprise Auditor, the account also
needs to be provisioned with an additional permission. See the
[Enterprise Auditor Integration](#enterprise-auditor-integration) topic for additional information.

The commands to create a role and names of permissions depend on the ONTAP API used. The product
supports both the classic ONTAPI/ZAPI and the new REST API. For ONTAPI/ZAPI you need to use
`security login role create` command to create a RBAC access control role. The required commands are
listed in the `cmddirname` parameter. For REST API, use `security login rest-role create` command to
create a REST access control role. The required API endpoint is specified in the `api` parameter.
The following sections provide instructions for both API modes.

### Least Privileged: ONLY Collect Events

If the desire is for a least privileged model, the Activity Monitor requires the following
permissions to collect events.

#### ONTAPI/ZAPI

- `version` – Readonly access
- `volume` – Readonly access
- `vserver` – Readonly access

Use the following commands to provision read-only access to all required commands:

```
security login role create -role [ROLE_NAME] -cmddirname "version" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "volume" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver" -access readonly -query "" -vserver [SVM_NAME]    
```

Example:

```
security login role create -role enterpriseauditor -cmddirname "version" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditor -cmddirname "volume" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditor -cmddirname "vserver" -access readonly -query "" -vserver testserver
```

#### REST API

- `/api/cluster` – Readonly access
- `/api/protocols/cifs/services` – Readonly access
- `/api/storage/volumes` – Readonly access
- `/api/svm/svms` – Readonly access

Use the following commands to provision read-only access to all required API endpoints:

```
security login rest-role create -role [ROLE_NAME] -api "/api/cluster" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/cifs/services" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/storage/volumes" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/svm/svms" -access readonly -vserver [SVM_NAME]
```

Example:

```
security login rest-role create -role enterpriseauditorrest -api "/api/cluster" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/cifs/services" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/storage/volumes" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/svm/svms" -access readonly -vserver testserver
```

:::note
If the FPolicy account is configured with these permissions, it is necessary to manually
configure the FPolicy. See the
[Configure FPolicy](/docs/activitymonitor/7.1/requirements/activityagent/nasdeviceconfiguration/ontap-cluster-aac/configurefpolicy.md)
topic for additional information.
:::


### Less Privileged: Enable/Connect FPolicy & Collect Events

If the desire is for a less privileged model, the Activity Monitor requires the following
permissions to collect events:

#### ONTAPI/ZAPI

- `version` – Readonly access
- `volume` – Readonly access
- `vserver` – Readonly access

    `network interface` – Readonly access

- `vserver fpolicy disable` – All access
- `vserver fpolicy enable` – All access

    :::tip
        Remember, this permission permits the Activity Monitor to enable the FPolicy. If the “Enable
    and connect FPolicy” option is employed but the permission is not provided, the agent will
    encounter “Failed to enable policy” errors, but it will still be able to connect to the FPolicy.
    Since this permission model requires a manual configuration of the FPolicy, then the need to
    manually enable the FPolicy will be met.
    :::


- `vserver fpolicy engine-connect` – All access

Use the following command to provision access to all required commands:

```
security login role create -role [ROLE_NAME] -cmddirname "version" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "volume" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "network interface" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver fpolicy disable" -access all -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver fpolicy enable" -access all -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver fpolicy engine-connect" -access all -query "" -vserver [SVM_NAME]
```

Example:

```
security login role create -role enterpriseauditorrest -cmddirname "version" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "volume" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "network interface" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver fpolicy disable" -access all -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver fpolicy enable" -access all -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver fpolicy engine-connect" -access all -query "" -vserver testserver
```

#### REST API

- `/api/cluster` – Readonly access
- `/api/protocols/cifs/services` – Readonly access
- `/api/storage/volumes` – Readonly access
- `/api/svm/svms` – Readonly access
- `/api/network/ip/interfaces` – Readonly access
- `/api/protocols/fpolicy` – All access

Use the following commands to provision read-only access to all required API endpoints:

```
security login rest-role create -role [ROLE_NAME] -api "/api/cluster" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/cifs/services" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/storage/volumes" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/svm/svms" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/network/ip/interfaces" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/fpolicy" -access all -vserver [SVM_NAME]
```

Example:

```
security login rest-role create -role enterpriseauditorrest -api "/api/cluster" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/cifs/services" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/storage/volumes" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/svm/svms" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/network/ip/interfaces" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/fpolicy" -access all -vserver testserver
```

:::note
If the FPolicy account is configured with these permissions, it is necessary to manually
configure the FPolicy. See the
[Configure FPolicy](/docs/activitymonitor/7.1/requirements/activityagent/nasdeviceconfiguration/ontap-cluster-aac/configurefpolicy.md)
topic for additional information.
:::


### Automatically Configure the FPolicy

If the desire is for the Activity Monitor to automatically configure the FPolicy, the security role
requires the following permissions:

#### ONTAPI/ZAPI

- `version` – Readonly access
- `volume` – Readonly access
- `vserver` – Readonly access

    `network interface` – Readonly access

- `vserver fpolicy` – All access
- `security certificate install` – All access

    :::tip
        Remember, this permission is only needed for FPolicy TLS connections.
    :::


Use the following command to provision access to all required commands:

```
security login role create -role [ROLE_NAME] -cmddirname "version" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "volume" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "network interface" -access readonly -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "vserver fpolicy" -access all -query "" -vserver [SVM_NAME]
security login role create -role [ROLE_NAME] -cmddirname "security certificate install" -access all -query "" -vserver [SVM_NAME]
```

Example:

```
security login role create -role enterpriseauditorrest -cmddirname "version" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "volume" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "network interface" -access readonly -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "vserver fpolicy" -access all -query "" -vserver testserver
security login role create -role enterpriseauditorrest -cmddirname "security certificate install" -access all -query "" -vserver testserver
```

#### REST API

- `/api/cluster` – Readonly access
- `/api/protocols/cifs/services` – Readonly access
- `/api/storage/volumes` – Readonly access
- `/api/svm/svms` – Readonly access
- `/api/network/ip/interfaces` – Readonly access
- `/api/protocols/fpolicy` – All access
- `/api/security/certificates` – All access

    Remember, this permission is only needed for FPolicy TLS connections.

Use the following commands to provision access to all required API endpoints:

```
security login rest-role create -role [ROLE_NAME] -api "/api/cluster" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/cifs/services" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/storage/volumes" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/svm/svms" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/network/ip/interfaces" -access readonly -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/protocols/fpolicy" -access all -vserver [SVM_NAME]
security login rest-role create -role [ROLE_NAME] -api "/api/security/certificates" -access all -vserver [SVM_NAME]
```

Example:

```
security login rest-role create -role enterpriseauditorrest -api "/api/cluster" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/cifs/services" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/storage/volumes" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/svm/svms" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/network/ip/interfaces" -access readonly -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/protocols/fpolicy" -access all -vserver testserver
security login rest-role create -role enterpriseauditorrest -api "/api/security/certificates" -access all -vserver testserver
```

:::note
If the FPolicy account is configured with these permissions, the Activity Monitor can
automatically configure the FPolicy. See the
[Configure FPolicy](/docs/activitymonitor/7.1/requirements/activityagent/nasdeviceconfiguration/ontap-cluster-aac/configurefpolicy.md)
topic for additional information.
:::


### Enterprise Auditor Integration

If the desire is for FPolicy to be used with both the Activity Monitor and Enterprise Auditor, then
the following permission is also required:

- `security login role show-ontapi` – Readonly access

Use the following command to provision read-only access to security login role show-ontapi commands:

```
security login role create -role [ROLE_NAME] -cmddirname "security login role show-ontapi" -access readonly -query "" -vserver [SVM_NAME]
```

Example:

```
security login role create -role enterpriseauditor -cmddirname "security login role show-ontapi" -access readonly -query "" -vserver testserver
```

### Validate Part 1: Security Role Configuration

For ONTAPI, run the following command to validate the RBAC security role configuration:

```
security login role show [ROLE_NAME]
```

Example:

```
security login role show enterpriseauditor
```

Relevant NetApp Documentation: For more information about creating RBAC access control roles, read
the
[security login role create](https://docs.netapp.com/us-en/ontap-cli-9141//security-login-role-create.html)
article.

For REST API, run the following command to validate the REST security role configuration:

```
security login rest-role show [ROLE_NAME]
```

Example:

```
security login rest-role show enterpriseauditorrest
```

For more information about creating REST access control roles, read the
[security login rest-role create](https://docs.netapp.com/us-en/ontap-cli-9141/security-login-rest-role-create.html)
article.

## Part 2: Create Security Login

Once the access control role has been created, apply it to a domain account. Ensure the following
requirements are met:

- The SVM used in the following command must be the same SVM used when creating the access control
  role in Part 1.
- All parameters are case sensitive.
- It is recommended to use lowercase for both domain and username. The case of domain and username
  created during the account provisioning process must match exactly to the credentials provided to
  the Activity Monitor activity agent for authentication to work.

Use the following command to create the security login for the security role created in Part 1:

```
security login create -user-or-group-name [DOMAIN\DOMAINUSER] -application ontapi -authentication-method [DOMAIN_OR_PASSWORD_AUTH] -role [ROLE_NAME] -vserver [SVM_NAME]
```

Example:

```
security login create -user-or-group-name example\user1 -application ontapi -authentication-method domain -role enterpriseauditor -vserver testserver
```

Validate this security login was created.

### Validate Part 2: Security Login Creation

Run the following command to validate security login:

```
security login show [DOMAIN\DOMAINUSER]
```

Example:

```
security login show example\user1
```

Verify that the output is displayed as follows:

![validatesecuritylogincreation](/images/activitymonitor/7.1/config/netappcmode/validatesecuritylogincreation.webp)

For more information about creating security logins, read the
[security login create](https://docs.netapp.com/us-en/ontap-cli-9141/security-login-create.html)
article.
