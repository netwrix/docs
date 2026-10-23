---
title: "Administration"
description: "Administration"
sidebar_position: 40
---

# Administration

Identity Recovery enables administrators to manage Active Directory in the following ways:

- Perform Object-level Rollback and Recovery

    - Add Domains – Add an Active Directory domain and configure a backup schedule for it
    - Rollback Objects – Quickly revert entire AD objects or just a single attribute to a known good
      state from a backup
    - Recover Objects – Restore tombstone objects to active state using the backup data. Recover
      object attributes, group membership, DNS entries, Group Policy objects (GPOs) and more, thus
      overcoming key limitations of the Recycle Bin.

- Perform Forest Backup and Recovery

    - Add Forests – Add a forest and then configure a backup schedule for each of the domain
      controllers in it
    - Recover a Forest – If there is a disaster scenario (ransomware, complete hardware failure,
      etc.), use the backups with the automation capabilities in the product to restore the
      forest back to its fully functional state before the disaster

- View Audit Log – Track the actions performed by users in Identity Recovery
- Integrate with Netwrix products – Fetch specific data from other Netwrix products, such as Threat
  Prevention, to display in Identity Recovery

## DNS Records

DNS records must be stored in Active Directory to backup, restore, and view DNS objects in
Identity Recovery. See the Microsoft
[Change the Zone Type](https://technet.microsoft.com/en-us/library/cc771150(v=ws.11).aspx) article
for additional information.
