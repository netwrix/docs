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

{/* TODO verify: whether OU auto-onboarding on a resource group adds a removed computer again at the next sync. */}

## Remove resources from the Resources list

1. Select **Resources** in the left navigation.
1. Select the checkbox of each resource to remove. **Remove** stays disabled until you select a checkbox.
1. Select **Remove**.
1. Confirm the removal in the window that opens.

{/* TODO verify: the label of the confirmation button in the Remove Resource window. The 26.03 docs say Remove. The window wasn't opened in the 26.07.3 lab. */}

For example, to remove two retired servers, select the checkboxes for `app05.example.com` and `app06.example.com`, select **Remove**, and confirm.

## Remove a resource from its details page

Some resource types have a delete control on their details page:

- **Domains:** select the red **Delete** button.
- **Websites, databases, and secret vaults:** select the trash icon next to the name.

A confirmation window opens. Confirm to remove the resource.

{/* TODO verify: the host details page showed no delete control in the 26.07.3 lab. Use the Resources list to remove a host. Also confirm the delete control and confirmation on an Entra ID tenant and a secret vault, which had no data in the lab. */}

## Remove a resource from a resource group

Removing a resource from a resource group doesn't remove it from Privilege Secure. See [Resource groups](/docs/privilegesecure/26.07/resources/resource-groups.md).

## Related topics

- [Resources](/docs/privilegesecure/26.07/resources/overview.md)
- [Add servers](/docs/privilegesecure/26.07/resources/add-resources.md)
