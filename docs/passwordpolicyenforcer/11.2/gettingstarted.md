---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 2
---

# Getting Started

Review the [Domain and Local Policies](/docs/passwordpolicyenforcer/11.2/installation/domain_and_local_policies.md) topic.

## Install Products

Install Password Policy Enforcer (PPE Server) on every domain controller to enforce the
password policy for domain user accounts, or on individual servers and workstations to enforce the
password policy for local user accounts. See the
[Install Password Policy Enforcer on a Server](/docs/passwordpolicyenforcer/11.2/installation/installationserver.md) or
[Install with Group Policy Management](/docs/passwordpolicyenforcer/11.2/installation/installationgpm.md) topics for additional
information.

You can install the Configuration Console on whatever servers are convenient for you to access. It
is a selectable feature in the server installation **msi** package. See the
[Install Password Policy Enforcer on a Server](/docs/passwordpolicyenforcer/11.2/installation/installationserver.md) topic for additional
information.

Install the Mailer Service on a single server in each domain. See the
[Install Password Policy Enforcer on a Server](/docs/passwordpolicyenforcer/11.2/installation/installationserver.md) topic for additional
information.

Password Policy Enforcer client is optional, but recommended. Users receive immediate feedback when
setting up their passwords. This saves your users time and frustration when picking compliant
passwords. See the [Install Password Policy Enforcer Client](/docs/passwordpolicyenforcer/11.2/installation/installationclient.md) or
[Install with Group Policy Management](/docs/passwordpolicyenforcer/11.2/installation/installationgpm.md) topics for additional
information.

Password Policy Enforcer Web is a separate product enabling users to change their Windows domain
password from a web browser. See the [Password Policy Enforcer Web](/docs/passwordpolicyenforcer/11.2/web-overview/web_overview.md) topic for
additional information.

Create the **Compromised Passwords Base** before enabling the Compromised Password Check. See the
[HIBP Updater](/docs/passwordpolicyenforcer/11.2/installation/hibpupdater.md) topic for additional information.

## Exclude PPE Files from AntiVirus Checks

**Domain Controller**

**PPE.DLL** if this file doesn't load, PPE can't enforce the password policy.

**Clients**

**PPEClt.DLL** if this file doesn't load, the client doesn't run.

## Next Steps

You can work through the [Evaluate Password Policy Enforcer](/docs/passwordpolicyenforcer/11.2/evaluation/evaluation_overview.md).
