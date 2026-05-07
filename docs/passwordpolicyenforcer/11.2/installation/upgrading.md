---
title: "Upgrading"
description: "Upgrade the Password Policy Enforcer server components and Password Policy Client to the latest version."
sidebar_position: 60
---

# Upgrading

Check the [Introduction](/docs/passwordpolicyenforcer/11.2/index.md) to ensure your system meets the minimum requirements before upgrading Password Policy Enforcer (PPE). Also check the [Release Notes and Bug Fix List](https://community.netwrix.com/c/products/password-policy-enforcer/news/) for any upgrade considerations.

You can upgrade Password Policy Enforcer by running the installer manually, with [Group Policy](/docs/passwordpolicyenforcer/11.2/installation/installationgpm.md) or another deployment tool, or by running msiexec. If you use Group Policy to automate the deployment, then copy the new .msi files to the distribution point and add them to the same Group Policy Object (GPO) you used to install the older version. Don't remove the older version from the GPO. Group Policy automatically detects that the new version is an upgrade for an existing package and upgrades it accordingly.

## Upgrade the server components

The Password Policy Enforcer server installer detects existing installations and upgrades them to version 11.2. Follow the [Install the Server Components](/docs/passwordpolicyenforcer/11.2/installation/installationserver.md) instructions to upgrade an existing installation. You don't need to uninstall the old version first.

:::warning
If the upgrade is major, for example, from 10.x to 11.x, then you should immediately open the PPE Configuration Console after upgrading the first domain controller in each domain. This automatically imports the configuration settings from the old version to the new one.

You should also click **Settings** in the Configuration Console, then **License** to check your license key. If the **License type** is _Evaluation_, then you must install a new license key before the **Valid to** date. You can download your license key from the [Netwrix Customer Portal](https://customer.netwrix.com/sign_in.html?rf=customer-portal.html). If you don't install a new key, then Password Policy Enforcer will stop checking passwords when the evaluation license expires.

Upgrade and restart all the Password Policy Servers in a domain before upgrading the Password Policy Clients. The Password Policy Server handles backwards compatibility for older clients, but newer clients may not communicate with an older server.

Don't run multiple versions of the Password Policy Server in a domain for an extended time. Maintain both versions only for a short time while you roll out the new version. Configuration changes you make in the Configuration Console apply only to that console's major version. If you have more than one major version of PPE running in a domain and need to make a configuration change, then make the same change for every major version. Failure to do so may lead to inconsistent enforcement of the password policy.
:::

## Upgrade the Password Policy Client

The Password Policy Client installer detects existing installations and upgrades them to version 11.2. Follow the [Install the Password Policy Client](/docs/passwordpolicyenforcer/11.2/installation/installationclient.md) instructions to upgrade an existing installation. You don't need to uninstall the old version first.

:::warning
Don't use any new features while running older Password Policy Enforcer components that may not fully support the new features. Netwrix develops and tests all PPE components together as a single version. You will have the best experience when using all the components from one version together.
:::
