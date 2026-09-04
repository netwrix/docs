---
title: "Exchange Lockdown Considerations"
description: "Exchange Lockdown Considerations"
sidebar_position: 40
---

# Exchange Lockdown Considerations

When you first enable an Exchange Lockdown policy, existing connections may prevent it from blocking
operations it should lock down. Ensure the users log off before you test the blocking behavior of
the policy. The following is the safest way to resolve existing connections and confirm that the
policy blocks the events you intend:

- For Outlook – Restart the MSExchangeRPC service
- For w3wp clients (e.g. OWA, PowerShell, EWS, ECP, ActiveSync) – Restart IIS

## Delegations through Outlook

In Microsoft Outlook 2010, delegation through Outlook performs three operations:

![Delegates window](/images/threatprevention/8.1/troubleshooting/delegates.webp)

- The delegate acquires **Send on Behalf of** permission for the user’s mailbox
- Outlook updates the ACLs for individual mailbox folders with the permissions you set for the
  delegate on the Delegates tab
- Outlook creates a hidden rule in the user’s inbox to forward incoming meeting and task requests
  and responses to the delegate

The first option doesn't use an Exchange API. Therefore, an
[Exchange Lockdown Event Type](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/exchangelockdown.md) policy can't block
this action. However, you can achieve the blocking effect you want by creating a corresponding
[Active Directory Lockdown Event Type](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/activedirectorylockdown.md)
policy to block any **Send on Behalf of** permission changes.

Netwrix recommends using the following event filters on the respective Active Directory Lockdown
policy:

- On the AD Event Filter tab:

  - Operations – All (Object Add, Object Deleted, Object Modified, and Object Moved or Renamed)

- On the AD Classes and Attributes Filter tab:

  - Block Attributes – publicDelegates

**Impact of Lockdown Policies**

When you enable both the Exchange Lockdown policy and the Active Directory Lockdown policy,
delegation or folder permission changes produce warnings.

![warning](/images/threatprevention/8.1/troubleshooting/warning.webp)

The Active Directory Lockdown policy will block the Send on Behalf of permission changes.

![Inbox Properties window](/images/threatprevention/8.1/troubleshooting/inboxproperties.webp)

A message appears as follows:

![permissionnotsaved](/images/threatprevention/8.1/troubleshooting/permissionnotsaved.webp)

The Exchange Lockdown policy blocks the folder permission changes.

With both lockdown policies working together, you can block changes to existing
connections.
