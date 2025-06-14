# Event Type Tab

The Event Type tab enables you to define the objects and events that Threat Prevention
monitors/blocks.

![Policy - Event Type tab](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/eventtypetab.webp)

Each event type represents what is monitored or blocked. Event filters are used to either narrow or
broaden the scope of the monitoring/blocking as desired. Click **Add** (+) to open the Event
Selection window. Your licensed modules determine what event types are available. Event types that
are not available or not licensed are grayed-out but visible in the Event Selection window. See the
[License Manager Window](../../navigation/licensemanager.md) topic for additional information.

## Event Selection Window

![Event Type tab - Event Selection window](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/eventselection.webp)

Check the box for the desired event type and click **OK**. The corresponding event filters show at
the bottom of the Event Type tab. Multiple event types can be assigned to a policy.

**_RECOMMENDED:_** Create different policies for different event types for reporting purposes.
Otherwise, one report will have a mix of different types of data. There are a few exceptions to this
feature.

Once the event type to be monitored by the policy is selected, use the filters to scope the policy.

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

Save all changes made to a policy or a template before leaving the configuration interface.

See the following topics for additional details:

- [Active Directory Changes Event Type](activedirectorychanges.md)
- [Active Directory Lockdown Event Type](activedirectorylockdown.md)
- [Active Directory Read Monitoring Event Type](activedirectoryreadmonitoring.md)
- [AD Replication Monitoring Event Type](adreplicationmonitoring.md)
- [AD Replication Lockdown Event Type](adreplicationlockdown.md)
- [Authentication Monitoring Event Type](authenticationmonitoring.md)
- [Authentication Lockdown Event Type](authenticationlockdown.md)
- [Effective Group Membership Event Type](effectivegroupmembership.md)
- [Exchange Changes Event Type](exchangechanges.md)
- [Exchange Lockdown Event Type](exchangelockdown.md)
- [File System Changes Event Type](filesystemchanges.md)
- [File System Lockdown Event Type](filesystemlockdown.md)
- [File System Enterprise Auditor Event Type](filesystementerpriseauditor.md)
- [FSMO Role Monitoring Event Type](fsmorolemonitoring.md)
- [GPO Setting Changes Event Type](gposettingchanges.md)
- [GPO Setting Lockdown Event Type](gposettinglockdown.md)
- [LSASS Guardian – Monitor Event Type](lsassguardianmonitor.md)
- [LSASS Guardian – Protect Event Type](lsassguardianprotect.md)
- [Password Enforcement Event Type](passwordenforcement.md)
- [LDAP Monitoring Event Type](ldapmonitoring.md)
- [LDAP Lockdown Event Type](ldaplockdown.md)
- [LDAP Bind Monitoring Event Type](ldapbindmonitoring.md)

## Event Filters Overview

Policies are scoped using the Event Filters tabs ascribed to the policy on the basis of the event
type selected on the Event Selection Window.

The filters appear on the Event Type tab when an event type is selected.

Several filters allow for both an Include and an Exclude list to be set together. The Exclude list
takes precedence over the Include list. If an item is part of both lists, then when an event comes
through with that item, it is excluded.

When using a Lockdown Event Type, it is necessary to decide between Block or Allow for the filter.

- Block – Blocks all items added to the list, or if the list is left blank, it blocks all items for
  that filter category
- Allow – Only allows items added to the list and blocks all others. If the list is left blank, it
  allows all items for that filter category.
