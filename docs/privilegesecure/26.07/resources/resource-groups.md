---
title: "Resource groups"
description: "Group resources, map an Active Directory OU to a group, auto-onboard its computers, and prefer specific service nodes for a group."
sidebar_position: 120
---

# Resource groups

A resource group collects resources so that you can manage their common settings together. A group can also map to an Active Directory organizational unit (OU) or container (CN), so that the computers in it join the group automatically. Groups also assign preferred Host Scan and Action services to their resources.

## Default resource groups

Netwrix Privilege Secure for Access Management (Privilege Secure) includes default groups for several platforms, and a resource joins the default group of its platform. You set the platform when you onboard the resource, and you can change it later on the resource.

Default groups include **Cisco**, **Linux**, **Website**, and **Windows**.

{/* TODO verify: the complete list of default groups on a fresh 26.07.3 install. The code seeds Unspecified, Active Directory, Website, Cisco, Linux, and Windows platform groups. The lab list mixes default and user-created groups. */}

## Create a resource group

1. Select **Resources** > **Resource Groups** in the left navigation.
1. Select the plus (**+**) button above the group list.
1. Enter a **Name**.
1. (Optional) Enter **Notification Emails (comma-delimited list)**. Privilege Secure sends events for the group's resources to these addresses.
1. Select an option in **Manage Local Administrator Accounts**. This field is required.
   - **Off (do not manage accounts)** is the default. Privilege Secure manages no local Administrator accounts on the group's resources.
   - **On (manage all accounts)** manages the local Administrator accounts on all resources in the group.
   - **Per individual resource** lets you set the option on each resource.
1. Select **Save**.

The managed account corresponds to the **Built-in Account** field on the resource's platform. See [Platforms](/docs/privilegesecure/26_07/resources/platforms).

For example, enter the name `Branch servers`, enter `ops@example.com` as the notification email, and leave **Manage Local Administrator Accounts** set to **Off (do not manage accounts)**.

{/* TODO verify: the default of Manage Local Administrator Accounts for the default groups and for groups created before 26.07. */}

{/* TODO screenshot: the New Resource Group form with Map to OU or CN selected. */}

## Map a group to an OU or CN

Mapping adds the computers in an Active Directory OU or CN to the group.

### Prerequisites

- An Active Directory domain resource. See [Active Directory domains](/docs/privilegesecure/26_07/resources/domains).
- (For auto-onboarding) A least-privilege Active Directory service account that can scan the computers. See [Service accounts](/docs/privilegesecure/26_07/configuration/service-accounts).

### Steps

1. Open the group or create a new one.
1. Select **Map to OU or CN**. This turns on **Sync Now**, **Distinguished Name**, **Include Child OUs**, and **Auto-Onboard**.
1. Enter the **Distinguished Name** of the OU or CN. The format is `OU=Name,DC=domain,DC=com` or `CN=Name,DC=domain,DC=com`.
1. (Optional) Select **Include Child OUs** to include the OUs below the one you entered.
1. (Optional) Select **Auto-Onboard** to have Privilege Secure manage the computers it finds. See the next section.
1. Select **Save**.
1. Select **Sync Now** to map the OU to the group immediately.

For example, enter `OU=Servers,DC=example,DC=com` as the **Distinguished Name** and select **Include Child OUs**.

{/* TODO verify: how often the OU mapping runs after the first Sync Now, and where an administrator sets that schedule. The code has an OU mapping schedule, but the UI showed none in the lab. */}

{/* TODO verify: the lab had no group mapped to an OU, so the mapped-group form with a Distinguished Name wasn't observed. Confirm the field behavior and whether Sync Now asks for confirmation. */}

### Auto-onboard computers

When you select **Auto-Onboard**, two more fields appear.

1. Select a **Default Platform**. The default is **(Auto-detect)**, which detects the platform of each computer.
1. Select a **Default Service Account**. The default is **(None)**. Choose a least-privilege Active Directory service account so that Privilege Secure can scan the computers it onboards.
1. Select **Save**.

{/* TODO verify: what Auto-Onboard does when Default Service Account is (None), and which platforms Auto-detect can identify. */}

## Prefer service nodes for a group

By default, Host Scan and Action services take the next available job. A resource group can name preferred services. This is called affinity. A common use is a group per site, with the closest service nodes assigned to it.

1. Open the resource group.
1. Select the **Host Scan Services** or **Action Services** tab.
1. Select **Add**.
1. Select the service nodes to prefer, and confirm.

When you add more than one service, all of them are preferred on a next-available basis. If the preferred services are busy, Privilege Secure uses the next available service.

{/* TODO verify: fallback behavior. BE 7.5 says affinity jobs run only on the assigned nodes; 26.03 and the Community say they fall back. */}

For example, add the Host Scan service on the `<east-service-node>` node to the `East region` group. Scans of the group's resources go to that node first.

Both tabs have **Add** and **Remove** buttons. Their columns are **Service Name**, **Status**, **Description**, **Version**, and **Added**. See [Service nodes](/docs/privilegesecure/26_07/admin/service-nodes).

{/* TODO verify: the dialogs behind Add on the Host Scan Services and Action Services tabs weren't opened in the lab. Confirm the dialog title and selection steps. */}

{/* TODO screenshot: the Host Scan Services tab of a resource group. */}

## Resource group tabs

A saved group has these tabs.

| Tab | Shows |
|---|---|
| **Resources** | The resources in the group. |
| **Access Policies** | The access policies that include the group. |
| **Connection Profiles** | The connection profiles that include the group. The default profile appears here. |
| **Host Scan Services** | The Host Scan services preferred for the group. |
| **Action Services** | The Action services preferred for the group. |

### Resources tab

The toolbar has **Manage**, **Unmanage**, **Add**, **Remove**, **Change Platform**, **Change Service Account**, and **Rotate**. A search box filters the table.

- **Add** adds resources to the group.
- **Remove** takes the selected resources out of the group. It doesn't remove them from Privilege Secure.
- **Manage** and **Unmanage** set whether Privilege Secure manages the local Administrator account on the selected resources (the **Managed** column). They apply when **Manage Local Administrator Accounts** is **Per individual resource**.
- **Change Platform** and **Change Service Account** update the selected hosts.

{/* TODO verify: that Manage and Unmanage apply only when Manage Local Administrator Accounts is Per individual resource. */}

The table has these columns: **Managed**, **Local Admin**, **Resource**, **Operating System**, **Platform**, **DNS Host Name**, **IP Address**, **Service Account**, and **Last Scanned**.

## Copy or delete a group

Point to a group in the list to show the copy and delete icons. The copy icon duplicates the group. The trash icon deletes it after you confirm.

{/* TODO verify: what happens to a deleted group's resources, whether an Entra ID group is a default group, and whether the default groups can be deleted. */}
