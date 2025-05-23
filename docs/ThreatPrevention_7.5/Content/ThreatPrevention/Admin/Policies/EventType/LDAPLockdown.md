---
sidebar_position: 6828
title: LDAP Lockdown Event Type
---

# LDAP Lockdown Event Type

The LDAP Lockdown event type can prevent execution of LDAP queries that meet policy filters/rules. Be careful as overly broad rules can ‘break’ the environment. An event is generated with details for each blocked LDAP query.

The event filters for the LDAP Monitoring event type are:

* LDAP
* Domains/Servers
* AD Perpetrator – For LDAP Search operations only
* LDAP Query
* Hosts (from)
* Rule Preview

![Policy window - LDAP Lockdown Event Type](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/LDAPLockdown.png "Policy window - LDAP Lockdown Event Type")

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

**CAUTION:** Lockdown/blocking policies with blank filters result in everything being locked down or blocked.

This event type can only be used in a policy by itself or with another LDAP event type. This means that:

* If you select this event type, all other event types will be grayed out except the LDAP event types
* If you select an event type other than LDAP, this event type will be grayed out

## LDAP Filter

Use the LDAP filter to set the scope of the policy to include one or more communication security types.

![New Policy - LDAP filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/LDAP.png "New Policy - LDAP filter")

The operation selected affects what options are available on this filter and what other filters are available for the event type:

* LDAP Search – Use the LDAP Search operation to search for and identify activity that does not conform to your security configurations

  * This option displays additional filters for Secure configurations and Search scopes. See the [LDAP Search Operations Use Case](UseCase/LDAPSearch "LDAP Search Operations Use Case") topic for additional information.
* LDAP Ping – LDAP Ping is a Microsoft Active Directory specific Lightweight Directory Access Protocol (LDAP) or Connection-less Lightweight Directory Access Protocol (CLDAP) search that returns information about whether services are live on a domain controller

  * See the [LDAP Ping Operations Use Case](UseCase/LDAPPing "LDAP Ping Operations Use Case") topic for additional information.

  When LDAP Ping is selected, the Secure Configurations and Search scopes sections are not displayed.

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/DomainsServersMonitoring.png "Event Type - Domains/Servers Monitoring filter")

Use the buttons in the Include and Exclude areas to edit the lists.

* The Add (+) buttons open the [Select Domains and Servers Window](Window/SelectDomainsServers "Navigates to the Select Domains and Servers selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

## AD Perpetrator Filter

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific security principals committing changes or to exclude specific security principals committing changes from being locked down.

![AD Perpetrator Protect filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADPerpetratorProtect.png "AD Perpetrator Protect filter")

Select the **Block** or **Allow** option button and then edit the list.

**NOTE:** For the [Password Enforcement Event Type](PasswordEnforcement "Password Enforcement Event Type"), selecting **Allow** means that this policy will not validate the new passwords for the accounts listed here. Selecting **Block** means that this policy will validate the new passwords for the accounts listed here.

Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

* Perpetrators area – The Add (+) button opens the [Select Active Directory Perpetrators Window](Window/SelectActiveDirectory/Perpetrators "Navigates to the Select Active Directory Perpetrators selection window. ").
* Collections of Perpetrators area - The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

## LDAP Query Filter

Use the LDAP Query filter for lockdown to set the scope of the policy to lockdown specific LDAP queries or to exclude specific queries from being locked down.

![Policy window - LDAP Query filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/LDAPQueryLockdown.png "Policy window - LDAP Query filter")

Select the **Block** or **Allow** option button and then edit the list.

* Allow – From the list of strings you specify in the LDAP Queries area, if at least one is found as substring in a candidate LDAP query, then the query will be executed
* Block – From the list of strings you specify in the LDAP Queries area, if at least one is found as substring in a candidate LDAP query, then thequery will be blocked

**CAUTION:** Users should fully understand the blocking rule summary displayed in the Rule Preview filter in order to understand the scope of what will be blocked. Blocking more than the intended queries will adversely impact the LDAP environment.

Enter a query in the LDAP Queries box. You can type a string in the textbox. Alternatively, use the buttons in the respective sections.

* The Add (+) buttons open the [Select Active Directory Objects Window](Window/SelectActiveDirectory/Objects "Navigates to the Select Active Directory Objects selection window. ").
* The Remove (x) button deletes the selected item(s) from that box.

## Hosts (from) Filter

Use the Hosts (from) filter for lockdown to set the scope of the policy to only lockdown specific hosts as originators of an event.

![Policy window - Hosts (from) filter](../../../../Resources/Images/ThreatPrevention/Policies/Filters/HostsFromLockdown.png "Policy window - Hosts (from) filter")

Select the **Block** or **Allow** option button and then edit the list.

* For the [Password Enforcement Event Type](PasswordEnforcement "Password Enforcement Event Type"), selecting **Allow** means that this policy will not validate the new passwords for the accounts listed here. Selecting **Block** means that this policy will validate the new passwords for the accounts listed here.
* For the [Authentication Lockdown Event Type](AuthenticationLockdown "Authentication Lockdown Event Type"), this filter blocks or only allows authentication from the identified host(s).

Use the buttons in the Include Hosts area to edit the list.

* The Hosts Add (+) button opens the [Select Computer Window](Window/SelectComputers "Navigates to the Select Computer Window section").
* The Remove (x) button deletes the selected item(s) from that box.

## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used for troubleshooting.

![Event Type - Rule Preview filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/RulePreview.png "Event Type - Rule Preview filter")

The text displayed represents the rules created based on the policy’s selected filters. Each row is a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple rows so that all of it is visible.