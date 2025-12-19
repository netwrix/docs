---
title: "Authentication Tab"
description: "Authentication Tab"
sidebar_position: 30
---

# Authentication Tab

The Authentication tab on a domain’s Configuration window allows users to configure communication
with servers.

![AD Monitoring Configuration - Authentication Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/operationstab.webp)

After checking the Enable Authentication box, the following event filters can be modified on the
sub-tabs:

- Forged PAC Analytic
- Host (From)
- Host (To)
- IP Addresses (From)
- IP Addresses (To)
- Operations
- Servers
- Users

## Forged PAC Analytic

The Forged Privilege Account Certificate (PAC) analytic type identifies Kerberos tickets with a
modified PAC. By manipulating the PAC, a field in the Kerberos ticket that contains a user’s
authorization data (in Active Directory this is group membership), an attacker is able to grant
themselves additional elevated privileges.

![AD Monitoring Configuration - Authentication Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/forgedpac.webp)

Double-click text box to enter specific **RIDs**. Click OK. The AD agent then compares against the
PAC and user’s access token for a mismatch to trigger the incident.

:::note
The Forged PAC analytic is monitoring for when the user is not a member of a group that is
listed in the PAC section of the user’s Kerberos ticket. This analytic can be scoped to monitor
specific groups. To reduce the number of false positives, the AD agent only checks for a mismatch of
sensitive groups as selected in the policy Settings tab.
:::


## Host (From)

The Hosts (from) option is where the policy can be scoped to only monitor specific hosts as
originators of an authentication event or to exclude specific hosts from being monitored for
authentication events.

![Host (From) Tab in the Authentication Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/hostfrom.webp)

Underneath each section, there are additional Host details:

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. dc01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. dc01

Double-click the text boxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the originating host
from authentication event collection.

## Host (To)

The Hosts (to) option is where the policy can be scoped to only monitor specific hosts as target
hosts of an authentication event or to exclude specific hosts from being monitored as targets of
authentication events.

![Host (To) Tab in the Authentication Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/hostto.webp)

Underneath each section, there are additional Host details:

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. dc01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. dc01

Double-click the text boxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the target host from
authentication event collection.

## IP Addresses (From)

The IP Addresses (from) option is where the policy can be scoped to only monitor specific IP
Addresses as originators of an authentication event or to exclude specific IP Addresses from being
monitored for authentication events.

![IP Addresses (From) Tab in the Authenticatoin Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/ipaddressesfrom.webp)

Underneath each section, there is an additional Address detail:

- Value – Must be provided in IP address format

Double-click the text box beneath **Value** to enter the desired IP Addresses to include or exclude.
Press the Enter or Tab key to add another text box.

## IP Addresses (To)

The IP Addresses (to) option is where the policy can be scoped to only monitor specific IP Addresses
as target hosts of an authentication event or to exclude specific IP Addresses from being monitored
as targets of authentication events.

![IP Addresses (To) Tab in the Authentication Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/ipaddressesto.webp)

Underneath each section, there is an additional Address detail:

Value – Must be provided in IP address format

Double-click the text box beneath **Value** to enter the desired IP Addresses to include or exclude.
Press the Enter or Tab key to add another text box.

## Operations

The Operations option filters for successful events, failed events, or both.

![Operations Tab in the Authentication Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/operationstab.webp)

The **Monitor These Attempts** section is where monitoring is set to filter for successful events,
failed events, or both:

- Success – Monitors successful events
- Failure – Monitors failed events

The **Monitor These Protocols** section is where authentication protocols to be monitored are
selected for the policy. Check the box to select the authentication protocol(s) to be monitored:

- All
- Kerberos
- NTLM

:::warning
If Login Type is enabled, authentication events will be received from Domain
Controllers only.
:::


The Login Type options apply only to Domain Controllers. These options provide the choice to monitor
Local Interactive and/or Remote Interactive logins to the Domain Controllers:

- All - Report all authentication activity approved by the Domain Controller which includes any
  local or RDP direct connections to the DC.

    - Local - Report only local login to the Domain Controller - ignore all else
    - Remote - Report only remote/RDP access to the Domain Controller - ignore all else

- Exclude failed authentications with previously valid (N-2) password – If enabled, allows to ignore
  failed authentications that failed due to use of a previously valid, but now expired, password
- Exclude failed authentications with expired password – If enabled, allows to ignore failed
  authentications that failed due to use of still valid, but now expired, password

## Servers

The Servers option targets servers to be included or excluded when filtering for authentication.

![Servers Tab in the Authentication Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/serverstab.webp)

In both sections, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS
Domain name and SERVER is NetBIOS server name.

Double-click the text box beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another text box.

## Users

The Users filter is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored.

![Users Tab in the Authentication Tab](/images/activitymonitor/8.0/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

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
exclude. Double-click the text box beneath **Type** to enter the desired AD object to include or
exclude. Press the Enter or Tab key to add another text box. Check the box under **Subtree** to
include or exclude child contexts.
