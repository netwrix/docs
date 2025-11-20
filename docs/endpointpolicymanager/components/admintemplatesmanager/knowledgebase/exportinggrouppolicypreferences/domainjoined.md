---
title: "Why do I see slowdowns on my machines when Endpoint Policy Manager Preferences is licensed and computers domain joined? Can this be worked around?"
description: "Why do I see slowdowns on my machines when Endpoint Policy Manager Preferences is licensed and computers domain joined? Can this be worked around?"
sidebar_position: 40
---

# Why do I see slowdowns on my machines when Endpoint Policy Manager Preferences is licensed and computers domain joined? Can this be worked around?

From time to time, a Microsoft Group Policy Preference item is not compatible with Netwrix Endpoint
Policy Manager (formerly PolicyPak) trying to process it with Endpoint Policy Manager Preferences
component.

We have worked around many of these items, but some still remain.

As such, we have recommended that all on-prem customers un-license Endpoint Policy Manager
Preferences component unless its absolutely necessary for a specific use case.

This problem only manifests itself when the computer is DOMAIN JOINED and then also getting
Microsoft Group Policy Preferences items while Endpoint Policy Manager Preferences component is
licensed.

To that end, here is the documentation to un-license a single component, like Endpoint Policy
Manager Preferences: If you're an on-Prem cloud or MDM customer.

[What if I want to unlicense specific components via ADMX or Endpoint Policy Manager Cloud?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/componentscloud.md)


