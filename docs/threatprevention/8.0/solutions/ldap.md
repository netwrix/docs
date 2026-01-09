---
title: "LDAP"
description: "LDAP"
sidebar_position: 50
---

# LDAP

Threat Prevention for LDAP provides real-time monitoring of Active Directory LDAP queries without
any reliance on native logging. From individual objects to specific query requests or results,
Threat Prevention for LDAP produces a complete audit trail of specific queries executed against
Active Directory that could indicate potential security issues or operational inefficiencies.

In addition to LDAP query activity monitoring, you can also use the LDAP Bind event type to generate
an event whenever a security principal connects (binds) to LDAP, which is a required step before
generating queries. Bind events include information about the user, source machine, and type of
security used for the session.

## LDAP Event Types

The following event types are available for LDAP:

- [LDAP Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/ldaplockdown.md)
- [LDAP Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/ldapmonitoring/ldapmonitoring.md)
- [LDAP Bind Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/ldapbindmonitoring.md)
