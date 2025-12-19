---
title: "Replication Tab"
description: "Replication Tab"
sidebar_position: 40
---

# Replication Tab

The Replication tab on a domain’s Configuration window monitors domain controller syncing and
replication.

![Servers Tab in the Replication Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/serverstab.webp)

After checking the Enable Replication box, the following event filters can be modified on the
sub-tabs:

- Host (From)
- Servers
- Users

Each filter tab acts like an “AND” statement for the filter. Any filter tab left blank is treated
like an ALL for that filter set.

Windows cannot detect if a sync request is coming from a legitimate domain controller. This option
is designed to monitor requests from computers that are not ‘excluded’ by the policy. Therefore,
legitimate domain controllers should be identified in the event filters.

## Host (From) Filter

The Hosts (From) option is where the policy can be scoped to only monitor specific hosts as
originators of an authentication event or to exclude specific hosts from being monitored for
authentication events.

![Host (From) Tab in the Replication Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/hostfrom.webp)

Underneath each section, there are additional Host details:

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. dc01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. dc01

Double-click the textboxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the originating host
from replication event collection.

The Threat Manager DC Sync threat is sourced by the Activity Monitor's Replication AD monitoring
configuration. It is necessary for it to be configured to exclude domain controllers on the Host
(From) filter.

## Servers Filter

The Servers option targets servers to be included or excluded when filtering for replication.

![Servers Tab in the Replication Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/serverstab.webp)

In both cases, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS Domain
name and SERVER is NetBIOS server name.

Double-click the text box beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another text box.

## Users Filter

The Users option is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored

![Users Tab in the Replication Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The following details appear beneath both sections:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

    - user – Indicates that selected object is user
    - group – Indicates that selected object is group
    - context – Indicates that selected object is container
    - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of 'distinguishedName' attribute syntax,
  e.g. 'CN=Users,DC=Domain,DC=com'. However, for objects with 'sidType' type, it must be in the form
  of WellKnownSidType Enum, e.g. 'AnonymousSid' or 'LocalSid'.

Double-click the text box beneath Distinguished Name to enter the desired group types to include or
exclude. Double-click the text box beneath Type to enter the desired AD object to include or
exclude. Press the Enter or Tab key to add another textbox. Check the box under Subtree to include
or exclude child contexts.
