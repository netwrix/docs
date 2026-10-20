---
title: "Event Type Tab"
description: "Event Type Tab"
sidebar_position: 20
---

# Event Type Tab

The Event Type tab lets you define the objects and events that Threat Prevention
monitors or blocks.

![Template – Event Type Tab](/images/threatprevention/8.0/admin/templates/eventtypetab.webp)

Each event type represents what the policy monitors or blocks. Use event filters to narrow or
broaden the scope of monitoring or blocking. Click **Add** (+) to open the Event
Selection window. Your licensed modules determine what event types are available. Event types that
aren't available or licensed appear grayed out in the Event Selection window. See the
[License Manager Window](/docs/threatprevention/8.0/admin/navigation/licensemanager.md) topic for information.

## Event Selection Window

![Event Type tab - Event Selection window](/images/threatprevention/8.0/admin/policies/eventtype/eventselection.webp)

Check the box for the event type you want and click **OK**. The corresponding event filters show at
the bottom of the Event Type tab. You can assign multiple event types to a policy.

:::info
Create different policies for different event types for reporting purposes.
Otherwise, one report will have a mix of different types of data. There are a few exceptions to this
feature.
:::


After you select the event type to monitor, use the filters to scope the policy.

Each filter tab acts like an "AND" statement for the filter. Any empty filter tab functions
like an "ALL" for that filter set.

Save all changes made to a policy or a template before leaving the configuration interface.

See the following topics for additional details:

- [Active Directory Changes Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/activedirectorychanges.md)
- [Active Directory Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/activedirectorylockdown.md)
- [Active Directory Read Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/activedirectoryreadmonitoring.md)
- [AD Replication Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/adreplicationmonitoring.md)
- [AD Replication Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/adreplicationlockdown.md)
- [Authentication Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/authenticationmonitoring.md)
- [Authentication Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/authenticationlockdown.md)
- [Effective Group Membership Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/effectivegroupmembership.md)
- [Exchange Changes Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/exchangechanges.md)
- [Exchange Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/exchangelockdown.md)
- [File System Changes Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/filesystemchanges/filesystemchanges.md)
- [File System Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/filesystemlockdown.md)
- [File System Enterprise Auditor Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/filesystemaccessanalyzer.md)
- [FSMO Role Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/fsmorolemonitoring.md)
- [GPO Setting Changes Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/gposettingchanges.md)
- [GPO Setting Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/gposettinglockdown.md)
- [Process Guardian – Monitor Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/lsassguardianmonitor.md)
- [Process Guardian – Protect Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/lsassguardianprotect.md)
- [Password Enforcement Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md)
- [LDAP Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/ldapmonitoring/ldapmonitoring.md)
- [LDAP Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/ldaplockdown.md)
- [LDAP Bind Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/ldapbindmonitoring.md)
- [ADCS Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/adcsmonitoring.md)
- [ADCS Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/adcslockdown.md)

## Event Filters Overview

Policies are scoped using Event Filters tabs that correspond to the event
type you select in the Event Selection window.

The filters appear on the Event Type tab when an event type is selected.

Several filters let you set both an Include and Exclude list. The Exclude list
takes precedence over the Include list. When an event contains an item from both lists, the system excludes it.

When using a Lockdown Event Type, choose Block or Allow for the filter.

- Block – Blocks all items in the list, or if the list is empty, blocks all items for
  that filter category
- Allow – Allows only items in the list and blocks all others. If the list is empty, allows
  all items for that filter category.
