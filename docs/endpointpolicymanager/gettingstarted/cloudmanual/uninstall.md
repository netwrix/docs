---
title: "Endpoint Policy Manager Cloud Uninstallation"
description: "Endpoint Policy Manager Cloud Uninstallation"
sidebar_position: 80
---

# Endpoint Policy Manager Cloud Uninstallation

When the Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud client is manually uninstalled
(or the computer account is permanently deleted from within Endpoint Policy Manager Cloud), the
following happens:

- All acquired licenses from Endpoint Policy Manager Cloud are returned to the pool (if the computer
  can make contact with Endpoint Policy Manager Cloud).
- All XML data files that are in the Cloud folder are removed.
- Any Endpoint Policy Manager component will become unlicensed. Different licenses have different
  behaviors when they become unlicensed. Check the KB article here for more information:
  [What happens to each component when Endpoint Policy Manager gets unlicensed or the GPO or policy no longer applies?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/components_2.md).


