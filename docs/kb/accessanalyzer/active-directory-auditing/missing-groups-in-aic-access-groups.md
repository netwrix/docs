---
description: >-
  When you add a new share in Netwrix Access Analyzer (AIC) and see ObjectSID
  values instead of group names, the ADInventory scan is likely misconfigured or
  unable to target the correct domain controllers. This article describes
  symptoms, causes, troubleshooting steps, and resolution to restore group
  resolution in AIC.
keywords:
  - AIC
  - ADInventory
  - ObjectSID
  - SA_ADInventory_GroupsView
  - Resource Audit
  - host list
  - domain controllers
  - access groups
  - rescan
products:
  - access-analyzer
  - access_info_center
sidebar_label: Missing Groups in AIC Access Groups
tags:
  - active-directory-auditing
title: "Missing Groups in AIC Access Groups"
knowledge_article_id: kA0Qk0000000aOTKAY
---

# Missing Groups in AIC Access Groups

## Symptoms

- When you add a new share in Netwrix Access Analyzer (AIC), access groups show no groups listed.
- When you review the new share path in the **Resource Audit** interface, the group shows the ObjectSID value instead of the group name.

## Cause

The ADInventory scan is misconfigured. The scan is unable to target host lists.

## Troubleshooting

- Verify the group membership of the affected share via **Resource Audit**. The ObjectSID value instead of the group name indicates that the ADInventory scan is unable to resolve the group name. Refer to the following article for additional information: Resource Audit Interface · v11.6.
- Review the `SA_ADInventory_GroupsView` in `1-AD_Scan` results. If the affected group is missing from the view, the ADInventory scan is unable to resolve the group name.

## Resolution

Refer to the following steps to resolve the issue:

1. Verify the ADInventory scan is correctly set up to target appropriate domain controllers (DCs). Refer to the following article for additional information: Recommended Configurations for the .ADInvetory Solution · v11.6.
2. Verify the connection profile used has appropriate permissions. Refer to the following article for additional information: Active Directory Domain Target Requirements · v11.6.

> **IMPORTANT:** If the host list or connection profile is not correctly configured, it may result in the ADInventory scan failing to retrieve group information.

3. Update the ADInventory host list to target valid DCs. Ensure that the host list includes all relevant DCs where group information is stored. After updating the host list, trigger an ADInventory rescan to synchronize the group information. The rescan process will retrieve group information from the updated DCs and ensure that the group memberships are accurately reflected in AIC. Refer to the following article for additional information on updating the ADInventory host list: Recommended Configurations for the .AD Inventory Solution · v11.6.

## Related Articles

- Resource Audit Interface · v11.6
- Recommended Configurations for the .ADInvetory Solution · v11.6
- Active Directory Domain Target Requirements · v11.6
- Recommended Configurations for the .AD Inventory Solution · v11.6
