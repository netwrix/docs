---
title: "Administration"
description: "Administration"
sidebar_position: 50
---

# Administration

Identity Recovery enables administrators to manage Active Directory in the following ways:

- Perform Object-level Rollback and Recovery

    - Add Domains – Add an Active Directory domain and configure a backup schedule for it
    - Rollback Objects – Revert entire Active Directory (AD) objects or a single attribute to a known good
      state from a backup
    - Recover Objects – Restore tombstone objects to active state using the backup data. Recover
      object attributes, group membership, DNS entries, Group Policy objects (GPOs), and more.

- Perform Forest Backup and Recovery

    - Add Forests – Add a forest and then configure a backup schedule for each of the domain
      controllers in it
    - Recover a Forest – After a disaster (ransomware, complete hardware failure,
      etc.), use the backups with the automation capabilities in the product to restore the
      forest to its fully functional state before the disaster

- View Audit Log – Track the actions performed by users in Identity Recovery
- Integrate with Netwrix products – Fetch specific data from other Netwrix products, such as Threat
  Prevention, to display in Identity Recovery

## DNS Records

To back up, restore, and view DNS objects in Identity Recovery, store DNS records in Active
Directory. See the Microsoft
[Change the Zone Type](https://technet.microsoft.com/en-us/library/cc771150(v=ws.11).aspx) article
for additional information.
