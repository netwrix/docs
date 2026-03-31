---
title: "Why do I see slowdowns on my machines when PolicyPak Preferences is licensed and computers domain joined? Can this be worked around?"
description: "Why do I see slowdowns on my machines when PolicyPak Preferences is licensed and computers domain joined? Can this be worked around?"
sidebar_position: 40
---

# Why do I see slowdowns on my machines when PolicyPak Preferences is licensed and computers domain joined? Can this be worked around?

From time to time, a Microsoft Group Policy Preference item is not compatible with Netwrix PolicyPak trying to process it with PolicyPak Preferences
component.

We have worked around many of these items, but some still remain.

As such, we have recommended that all on-prem customers un-license PolicyPak
Preferences component unless its absolutely necessary for a specific use case.

This problem only manifests itself when the computer is DOMAIN JOINED and then also getting
Microsoft Group Policy Preferences items while PolicyPak Preferences component is
licensed.

To that end, here is the documentation to un-license a single component, like PolicyPak Preferences: If you're an on-Prem cloud or MDM customer.

[What if I want to unlicense specific components via ADMX or PolicyPak Cloud?](/docs/policypak/licensing/knowledgebase/activedirectorygposccm/componentscloud.md)


