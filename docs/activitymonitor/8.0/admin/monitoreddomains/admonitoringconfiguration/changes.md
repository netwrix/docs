---
title: "Changes Tab"
description: "Changes Tab"
sidebar_position: 20
---

# Changes Tab

The Changes tab for AD Monitoring Configuration window provides additional options to monitor
changes made to the domain.

![Operations Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/operationtab.webp)

After checking the Enable AD Changes box, the following event filters can be modified on the
sub-tabs:

- Attributes
- Classes
- Context
- Host (From)
- IP Addresses (From)
- Objects
- Operations
- Servers
- Users

## Attributes

The Attributes Tab is where monitoring can be scoped to include events with specific attributes
within Active Directory. Further scoping of attributes can enable monitoring to only capture events
based on the new value.

![Attributes Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/attributestab.webp)

Double-click the text box beneath Name to enter the desired attribute to include or exclude.
Double-click the text box beneath Value to enter the desired attribute value to reference. Choose
the Operation to relate the Name and Value with. Press the **Enter** or **Tab** key to add another
textbox.

:::note
Name field must contain Active Directory attribute name.
:::


Scoping the filter captures events when the new value matches with the supplied value. To scope the
filter based on the new value of the attribute, use the Operation drop-down menu.

- AnyValue – No scoping applied for this attribute
- EmptyValue – Blank attribute values
- Equal – Attribute values that are identical to the Value field
- NotEqual – Attribute values that do not match the Value field
- LessThan – Attribute values below the supplied numeric value or before alphabetically
- GreaterThan – Attribute values above the supplied numeric value or after alphabetically
- Contains – Attribute values includes the user supplied string (numbers are treated as strings)
- NotContain – Attribute values do not include the user supplied string (numbers are treated as
  strings)
- Startswith – Attribute values start with the user supplied string

## Classes

The Classes Tab is where the policy can be scoped to only monitor specific classes within Active
Directory or to exclude specific classes from being monitored.

![Classes Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/classestab.webp)

Double-click the text box beneath Name to enter the desired classes to include or exclude. Press the
**Enter** or **Tab** key to add another text box.

:::note
Class must be specified in the form of `objectClass` attribute syntax but must contain
only last value of this multi-valued attribute. For example, for
`top; person; organizationalPerson; user` it must have 'user' value.
:::


## Context

The Context Tab is where the policy can be scoped to only monitor specific contexts (e.g. Containers
and Organizational Units) within Active Directory or to exclude specific contexts from being
monitored.

![Context Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/contexttab.webp)

Underneath each section, there are additional Context details:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Distinguished Name – Field must be specified in the form of `distinguishedName` attribute syntax,
  e.g. `CN=Users,DC=Domain,DC=com`

Double-click the text box beneath Distinguished Name to enter the desired context to include or
exclude. Press the **Enter** or **Tab** key to add another text box. Check the box under Subtree to
include or exclude child contexts.

## Host (From)

The Hosts (from) Tab is where the policy can be scoped to only monitor specific hosts as originators
of an authentication event or to exclude specific hosts from being monitored for authentication
events.

![Host (From) Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/hostfrom.webp)

Underneath each section, there are additional Host details.

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. ex01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. ex01

Double-click the text boxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the originating host
from change event collection.

## IP Addresses (From)

The IP Addresses (from) Tab is where the policy can be scoped to only monitor specific IP Addresses
as originators of an authentication event or to exclude specific IP Addresses from being monitored
for authentication events.

![IP Addresses (From) Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/ipaddressesfrom.webp)

Underneath each section, there is an additional Address detail.

- Value – Must be provided in IP address format

Double-click the text box beneath **Value** to enter the desired IP addresses to include or exclude.
Press **Enter** or **Tab** key to add another text box.

## Objects

The Objects Tab is where the policy can be scoped to only monitor specific objects within Active
Directory or to exclude specific objects from being monitored.

![Objects Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/objectstab.webp)

Underneath each section, there is an additional Object detail.

- Distinguished Name – Field must be specified in the form of `distinguishedName` attribute syntax,
  e.g. `CN=Users,DC=Domain,DC=com`

Double-click the text box beneath Distinguished Name to enter the desired objects to include or
exclude. Press the **Enter** or **Tab** key to add another text box.

## Operations

The Operations Tab provides additional configuration filters for AD event collection.

![Operations Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/operationtab.webp)

Monitor These Attempts – Filter for successful events, failed events, or both can be selected.

- Success – Monitors successful events
- Failure – Monitors failed events

Operations – Filter for Active Directory events to be monitored.

- Object Added – Monitors for objects being added to Active Directory
- Object Deleted – Monitors for objects being deleted from Active Directory
- Object Modified – Monitors for objects being modified within Active Directory
- Object Moved or Renamed – Monitors for objects being moved or renamed within Active Directory

## Servers

The Servers Tab targets servers to be included or excluded when filtering for changes.

![Servers Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/serverstab.webp)

In both sections, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS
Domain name and SERVER is NetBIOS server name.

Double-click the text box beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another text box.

## Users

The Users Tab is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored.

![Users Tab in the Changes Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The following details appear beneath both sections.

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

    - user –  Indicates that selected object is user
    - group – Indicates that selected object is group
    - context – Indicates that selected object is container
    - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of `distinguishedName` attribute syntax,
  e.g. `CN=Users,DC=Domain,DC=com`. However, for objects with `sidType` type, it must be in the form
  of WellKnownSidType Enum, e.g. `AnonymousSid` or `LocalSid`.

Double-click the text box beneath **Distinguished Name** to enter the desired group types to include
or exclude. Double-click the text box beneath Type to enter the desired AD object to include or
exclude. Press the **Enter** or **Tab** key to add another text box. Check the box under Subtree to
include or exclude child contexts.
