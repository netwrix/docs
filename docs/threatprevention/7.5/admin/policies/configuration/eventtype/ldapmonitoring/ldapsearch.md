---
title: "LDAP Search Operations Use Case"
description: "LDAP Search Operations Use Case"
sidebar_position: 10
---

# LDAP Search Operations Use Case

Use the LDAP Search operation to search for and identify activity that does not conform to your
security configurations.

When you create a policy with the [LDAP Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/ldapmonitoring/ldapmonitoring.md) or the
[LDAP Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/ldaplockdown.md), the LDAP filter allows you to enable the LDAP Search
option.

The Secure configurations and Search scope options filter the search based on a match to the
selected configurations and scope of the LDAP query.

![LDAP filter for the LDAP Monitoring and LDAP Lockdown event types](/images/threatprevention/7.5/admin/policies/eventtype/usecase/ldapsearchscopes.webp)

**Secure configurations**

This setting determines if events should be captured for an LDAP operation based on the security
protocol used by that operation.

Select **All** to capture LDAP events that used any protocol.

You can also limit Threat Prevention to capture LDAP events only when one of the selected
protocol(s) are used.

- SSL
- StartTLS
- Signed
- Signed and Sealed
- None – To capture events for an LDAP operation that did not use any of the secure protocols

**Search scopes**

Select the All checkbox to search all scopes, or select specific scoping levels:

- Base
- One level
- Subtree

Only LDAP queries using the selected security options and search scope levels will have events
reported by the Agent.
