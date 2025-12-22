---
title: "Active Directory Search Results"
description: "Active Directory Search Results"
sidebar_position: 10
---

# Active Directory Search Results

When a search has been started, the Search Status table at the bottom displays the percentage
complete according to the size and quantity of the activity log files being searched per AD agent.
You can
[Filter](/docs/activitymonitor/7.1/admin/search/overview.md#filter) and
[Sort](/docs/activitymonitor/7.1/admin/search/overview.md#sort) the
results using the column headers. Below the Search button is the
[Export](/docs/activitymonitor/7.1/admin/search/overview.md#export)
option.

![Active Directory Search Results](/images/activitymonitor/7.1/admin/search/results/activedirectorysearchresults.webp)

The results data grid columns display the following information for each event:

- Event Time – Date timestamp of the event
- Agent – Server where the Agent is deployed
- Host – Target host where the event was recorded
- Host Name – Name of the target host
- Host IP – IP address of the target host
- Host MAC – Network adapter identifier
- User – Security principal of the account that triggered the event
- User SID – Security Identifier of the account used in the event
- User Name –  Name for the security principal that triggered the event
- User Class – Active Directory class of the affected object
- Blocked – Indicates the Agent blocked the event from occurring
- Success – Indicates the event completed successfully
- Event Source – Location of Monitored host where event occurred
- Event Type – Indicates the type of event
- Affected Object – Active Directory distinguished name for the affected object
- Affected Object SID – Security Identifier of the object/account affected by the event
- Affected Object Name – Name of the Affected Object
- Protocol – Protocol(s) used for the monitored operation
- Query Filter – LDAP filter used in the operation
- Secured Query – Indicates if LDAP connection is secured or not
- Query Objects – Number of returned objects produced by the LDAP request
- Process Name – Contains process name that is monitored. Currently this is only lsass.exe.
- PID – Process Identifier generated for each active process
- Old Name – Value prior to the monitored change
- New Name – Value after the monitored change
- Authentication Type – Indicates type of authentication event. Possible values: Kerberos, NTLM.
- Target Host – Name of the originating host
- Target IP – IP address of the originating host
- Authentication Protocol – Indicates authentication protocol. Possible values: Unknown, Kerberos,
  KerberosTgs, KerberosAs, NTLM, NTLMv1, NTLMMixed, NTLMv2.
- NTLM Logon Type – Indicates type of protocol used to authenticate a connection between client and
  server
- Ticket Encryption – Indicates encryption type used in request part of the Kerberos ticket
- PAC – RID for the group that does not have access
- SPN – Detects attempts to obtain a list of Service Principal Name values
- User Exists –  Indicates if user exists
- N2 Password – Indicates if an invalid password matches the user’s password history

At the bottom of the search interface, additional information is displayed for selected events in
the data grid. The Attribute Name, Operation, Old Value, and New Value for the logged event (as
applicable to the event) are displayed.
