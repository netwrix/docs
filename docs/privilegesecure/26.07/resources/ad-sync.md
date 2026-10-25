---
title: "How Active Directory synchronization works"
description: "Learn what Active Directory synchronization reads, how often it runs, how it finds group members, and how delta sync shortens later runs."
sidebar_position: 60
---

# How Active Directory synchronization works

Synchronization copies users, groups, group memberships, and computers from an Active Directory domain into Netwrix Privilege Secure for Access Management (Privilege Secure). Privilege Secure uses the copied data to find who can sign in, which groups grant roles, and which computers you can onboard as resources.

You add a domain and set its synchronization schedule on the domain's details page. See [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md).

## What synchronization reads

Each run reads these objects from the domain:

- Users
- Groups
- Group memberships
- Computers

Privilege Secure doesn't write to your directory during synchronization.

## Full and delta synchronization

The first synchronization for a domain is a full synchronization. It reads every object.

Later synchronizations are delta synchronizations. They read only the objects that changed since the last successful run, so they finish faster on large domains.

- Delta synchronization is part of release 26.07.3. Earlier 26.07 releases, including 26.07.1, read every object on each run.
- A run that finishes with errors doesn't move the starting point forward. The next run starts again from the last successful point, so no change is skipped.

The **Sync** button on the domain's details page runs a normal synchronization. The button's menu holds **Full Sync**. **Full Sync** clears the stored starting point for the domain, so the run reads every object again instead of only the changes.

## Which domain controller Privilege Secure reads from

Synchronization reads from the primary domain controller (PDC) emulator for the domain. If Privilege Secure can't identify the PDC emulator, it reads from the domain controller it connected to.

Reading from one domain controller keeps results consistent, because replication delay between domain controllers can't hide a recent change.

## How group members are found

Privilege Secure doesn't copy the membership of every group in the domain. It starts from a set of seed groups and follows nested groups from there. The seed groups are:

- Domain Admins
- Enterprise Admins
- Groups that hold a role in Privilege Secure

Members of a group that you add to Privilege Secure with **Add to NPS User Role** are found on the next synchronization, so the roles you assign to the group apply to its members.

Membership lookups for these groups read the group's current members, not only recent changes.

:::note
A large group with deep nesting can make the "Processing group members" step take a long time. If a run seems stuck at that step, check the **History** tab on the domain for progress entries such as `Synchronized <n> group member relationships`.
:::

## Groups with the same name in different domains

Privilege Secure supports groups that share a pre-Windows 2000 name (sAMAccountName) in different domains.

## Schedule and run synchronization

| Task | Where |
| --- | --- |
| Set how often a domain synchronizes | **Frequency** on the domain's details page: **Never**, **Hourly**, **Daily**, or **Weekly** |
| Run a synchronization now | **Sync** on the domain's details page |
| See the results of each run | The domain's **History** tab |
| See errors from a run | The domain's **Sync Errors** tab |
| See the scheduled task | **Configuration** > **Scheduled Tasks**. See [Scheduled tasks](/docs/privilegesecure/26.07/admin/service-nodes/scheduled-tasks.md). |

If a synchronization is slow or fails, see [Active Directory sync and scan problems](/docs/privilegesecure/26.07/troubleshooting/ad-sync-and-scans.md).

For example, to synchronize a domain every night, set **Frequency** to **Daily** and **At** to 2:00 AM, and then select **Save**.
