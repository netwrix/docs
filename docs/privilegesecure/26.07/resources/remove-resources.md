---
title: "Remove resources"
description: "Remove one or more resources from Privilege Secure so that it stops managing them."
sidebar_position: 110
---

# Remove resources

Removing a resource stops Netwrix Privilege Secure for Access Management (Privilege Secure) from managing it. The removal deletes all records of the resource from the Privilege Secure database.

:::warning
Removal doesn't prevent the resource from being synced or added again. A later domain sync, import, or manual add can bring the resource back.
:::

If a resource group maps to an organizational unit (OU) with **Auto-Onboard** selected, Privilege Secure adds a removed computer again after the next Active Directory sync. Removing a resource keeps the computer's directory record, so the OU mapping that runs at the end of each sync manages it again. To keep a computer from coming back, move it out of the mapped OU or clear **Auto-Onboard** on the group. See [Resource groups](/docs/privilegesecure/26.07/resources/resource-groups.md).

## Remove resources from the Resources list

1. Select **Resources** in the left navigation.
1. Select the checkbox of each resource to remove. **Remove** stays disabled until you select a checkbox.
1. Select **Remove**.
1. In the **Remove Resource** window, select **Remove** to confirm. When you select more than one resource, the window is titled **Remove Resources**.

The **Remove** button on the Resources list removes hosts only. If your selection includes a domain, website, database, secret vault, or Entra ID tenant, Privilege Secure shows an error and names that resource. Remove it from its details page instead.

For example, to remove two retired servers, select the checkboxes for `app05.example.com` and `app06.example.com`, select **Remove**, and confirm.

## Remove a resource from its details page

Some resource types have a delete control on their details page:

- **Domains:** select the red **Delete** button.
- **Websites, databases, secret vaults, and Entra ID tenants:** select the trash icon next to the name.

In the confirmation window, select **Delete**.

The details page of a host has no delete control. To remove a host, use the Resources list.

## Remove a resource from a resource group

Removing a resource from a resource group doesn't remove it from Privilege Secure. See [Resource groups](/docs/privilegesecure/26.07/resources/resource-groups.md).

## Related topics

- [Resources](/docs/privilegesecure/26.07/resources/overview.md)
- [Add servers](/docs/privilegesecure/26.07/resources/add-resources.md)
