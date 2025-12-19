---
title: "GMSA"
description: "Using Group Managed Service Account (gMSA)"
sidebar_position: 80
---

# Using Group Managed Service Account (gMSA)

Netwrix 1Secure supports using Group Managed Service Accounts (gMSA) for data collection and
storage. This can help you to simplify Netwrix 1Secure administration, providing the following
benefits:

- There is no password to manage this account: Windows handles the password management for it. User
  interaction for password update on a regular basis is not required.
- Using the gMSA also eliminates a need in service accounts with static passwords that are set upon
  creation and then never cycled.
- The gMSA also helps to ensure that service account is only used to run a service (gMSA accounts
  cannot be used to log on interactively to domain computers).

## Checking for KDS root key

To generate password for gMSA accounts, domain controllers require a Key Distribution Services (KDS)
root key. This key is created once, so if there are any gMSA accounts in your domain, this means the
root key already exists.

Follow the steps to check whether the root key exists in your domain.

**Step 1 –** Open the **Active Directory Sites and Services** Console, select **View** → **Show
Services Node**.

**Step 2 –** Browse to **Services** →**Group Key Distribution Services** →**Master Root Keys**.

**Step 3 –** Alternatively, you can run the `Get-KdsRootKey` cmdlet. If the key does not exist, it
will not return any output.

If the KDS key does not exist, then you can create is as described below, or contact your Active
Directory administrator.

To create a KDS key (on a domain controller running Windows Server 2012 or later)

1. On the domain controller, run Windows PowerShell.
2. In the command prompt of Windows PowerShell Active Directory module, run the following cmdlet:

    `Add-KdsRootKey -EffectiveImmediately`

3. A root key will be added to the target DC which will be used by the KDS service immediately.
   Note, however, that it requires a 10-hours wait, as other domain controllers will be able to use
   the root key only after a successful replication. See
   [this Microsoft article](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/create-the-key-distribution-services-kds-root-key)
   for more information.

Alternatively, you can use the following cmdlet:

`Add-KdsRootKey -EffectiveTime MM/DD/YYYY`

This cmdlet generates a KDS root key that will take effect on the specified date. Use the
_mm/dd/yyyy_ format, for example: `Add-KdsRootKey -EffectiveTime 02/27/21`

This approach, however, should be used with care.

## Creating a gMSA

When creating a new gMSA, you will need to specify:

- New account name and FQDN
- Computer account(s) that will be allowed to make use of that gMSA. Here it will be:

1. Your Netwrix Cloud Agent host
2. If you are going to collect data using the network traffic compression (see the following section
   for more information:
   [Network Traffic Compression](/docs/1secure/configuration/networktrafficcompression.md)), provide the
   following:

    - For Logon Activity — domain controllers of the monitored domain

For example, you can create a gMSA using the `New-ADServiceAccount` PowerShell cmdlet. If so, you
should specify your Netwrix Cloud Agent account in the `-PrincipalsAllowedToRetrieveManagedPassword`
attribute.

Make sure you specify a valid computer object in this attribute.

To create a new gMSA in the root domain using PowerShell:

- Run the command as follows:

    `New-ADServiceAccount -name ncagmsa -DNSHostName ncagmsa.mydomain.local -PrincipalsAllowedToRetrieveManagedPassword NCASrv$`

    here:

    - _name_ — new gMSA name, here **ncagmsa**. Make sure the name refers to a valid computer
      objects.
    - _DNSHostName_ — FQDN of the new gMSA account, here **ncagmsa.mydomain.local**
    - _PrincipalsAllowedToRetrieveManagedPassword_ — your Netwrix Cloud Agent host NETBIOS name
      ended with $, here __NCASrv$\_\_

To learn about the data collecting account, which collects data from the monitored items, go
to [Data Collecting Account](/docs/1secure/admin/datacollection/overview.md) article.
