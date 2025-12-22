---
title: "Installation"
description: "Installation"
sidebar_position: 20
---

# Installation

You can install Password Policy Enforcer manually, or you can automate the installation with a
software distribution tool. Installing Password Policy Enforcer does not extend the Active Directory
schema.

:::note
Refer to the
[Administration](/docs/passwordpolicyenforcer/10.2/administration/administration_overview.md)
topic to learn how to install Password Policy Enforcer with Group Policy. You can also use other
software distribution tools like Microsoft's System Center Configuration Manager to install Password
Policy Enforcer.
:::


Follow the steps below to manually install Password Policy Enforcer.

**Step 1 –** Start the Password Policy Enforcer installer from the PPE10.exe file.

**Step 2 –** Read the license agreement, then click **Yes** to accept the license terms and
conditions.

**Step 3 –** Select **Express**, then **click** Next.

**Step 4 –** Select the **Password Policy Server** check box, if unchecked.

**Step 5 –** Click **Next** to install Password Policy Enforcer.

**Step 6 –** Click **Yes** when asked to restart the computer.

If you are evaluating Password Policy Enforcer on a domain with more than one domain controller,
repeat the steps above on every domain controller in the domain.

The Password Policy Client is an optional Password Policy Enforcer component that helps users to
choose a compliant password. You do not have to install the Password Policy Client to enforce a
Password Policy Enforcer password policy, but installing the Password Policy Client will make it
easier for users to choose a password. If you are testing Password Policy Enforcer on a domain that
contains client computers, then repeat the steps above on any Windows client computers if you would
like to evaluate the Password Policy Client. You do not need to select the **Password Policy
Server** check box to install the Password Policy Client on a client computer.

You may need to create a firewall port exception on the domain controllers if you are evaluating the
Password Policy Client on a domain with client computers. See the
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/password_policy_client.md)
topic for additional information.

:::note
The Password Policy Client does not replace or modify any Windows system files. You can
install it with Group Policy, or some other software distribution tool in your production network.

:::
