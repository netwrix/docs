---
title: "GMSA"
description: "Using Group Managed Service Account (gMSA)"
sidebar_position: 80
---

# Using Group Managed Service Account (gMSA)

Netwrix 1Secure supports using Group Managed Service Accounts (gMSA) for data collection and
storage. Using a gMSA simplifies Netwrix 1Secure administration with the following benefits:

- There is no password to manage: Windows handles password management for the account. Regular
  manual password updates aren't required.
- The gMSA eliminates the need for service accounts with static passwords that are set upon
  creation and never rotated.
- The gMSA ensures the service account is only used to run a service (gMSA accounts
  can't be used to log on interactively to domain computers).

## Checking for KDS root key

To generate passwords for gMSA accounts, domain controllers require a Key Distribution Services (KDS)
root key. This key is created once. If gMSA accounts already exist in your domain, the root key
already exists.

**To check whether the root key exists in your domain:**

**Step 1 –** Open the **Active Directory Sites and Services** Console, select **View** → **Show
Services Node**.

**Step 2 –** Browse to **Services** →**Group Key Distribution Services** →**Master Root Keys**.

**Step 3 –** Alternatively, you can run the `Get-KdsRootKey` cmdlet. If the key doesn't exist, it
won't return any output.

If the KDS key doesn't exist, create it using the following procedure, or contact your Active Directory administrator.

To create a KDS key (on a domain controller running Windows Server 2012 or later)

1. On the domain controller, run Windows PowerShell.
2. In the command prompt of Windows PowerShell Active Directory module, run the following cmdlet:

    `Add-KdsRootKey -EffectiveImmediately`

3. A root key is added to the target DC and used by the KDS service immediately.
   Other domain controllers can use the root key only after a successful replication,
   which requires up to 10 hours. See the
   [Microsoft article on creating the KDS root key](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/create-the-key-distribution-services-kds-root-key)
   for details on replication timing.

Alternatively, you can use the following cmdlet:

`Add-KdsRootKey -EffectiveTime MM/DD/YYYY`

This cmdlet generates a KDS root key that takes effect on the specified date. Use the
_mm/dd/yyyy_ format, for example: `Add-KdsRootKey -EffectiveTime 02/27/21`

Use this approach with caution.

## Creating a gMSA

When creating a new gMSA, specify the following:

- New account name and FQDN
- Computer accounts that are allowed to use that gMSA:

1. Your Netwrix Cloud Agent host
2. If you collect data using network traffic compression (see
   [Network Traffic Compression](/docs/1secure/configuration/networktrafficcompression.md) for configuration steps), also include:

    - For Logon Activity — domain controllers of the monitored domain

For example, you can create a gMSA using the `New-ADServiceAccount` PowerShell cmdlet. Specify your Netwrix Cloud Agent account in the `-PrincipalsAllowedToRetrieveManagedPassword`
attribute.

Ensure you specify a valid computer object in this attribute.

To create a new gMSA in the root domain using PowerShell:

- Run the command as follows:

    `New-ADServiceAccount -name ncagmsa -DNSHostName ncagmsa.mydomain.local -PrincipalsAllowedToRetrieveManagedPassword NCASrv$`

    here:

    - _name_ — new gMSA name, here **ncagmsa**. Ensure the name refers to a valid computer
      objects.
    - _DNSHostName_ — FQDN of the new gMSA account, here **ncagmsa.mydomain.local**
    - _PrincipalsAllowedToRetrieveManagedPassword_ — your Netwrix Cloud Agent host NETBIOS name
      ended with $, here __NCASrv$\_\_

To learn about the data collecting account, which collects data from the monitored items, go
to [Data Collecting Account](/docs/1secure/admin/datacollection/overview.md) article.
