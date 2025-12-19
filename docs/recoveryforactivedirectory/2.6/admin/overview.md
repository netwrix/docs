---
title: "Administration"
description: "Administration"
sidebar_position: 40
---

# Administration

Netwrix Recovery for Active Directory enables administrators to manage Active Directory in the
following ways:

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
    - Recover a Forest – In the event of a disaster scenario (ransomware, complete hardware failure,
      etc.), leverage the backups with the automation capabilities in the product to restore the
      forest back to its fully functional state prior to the disaster

- View Audit Log – Track the actions performed by users in Recovery for Active Directory
- Integrate with Netwrix products – Fetch specific data from other Netwrix products, such as Threat
  Prevention, to display in Recovery for Active Directory

DNS Records

DNS records must be stored in Active Directory in order to backup, restore, and view DNS objects in
Recovery for Active Directory. See the Microsoft
[Change the Zone Type](https://technet.microsoft.com/en-us/library/cc771150(v=ws.11).aspx) article
for additional information.
