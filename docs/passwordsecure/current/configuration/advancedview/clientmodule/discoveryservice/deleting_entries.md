---
title: "Deleting entries"
description: "Deleting entries"
sidebar_position: 60
---

# Deleting entries

After creating an automatic **Password Reset** via the **Conversion Wizard**, the data is no longer
required and can be deleted. The discovered entries have a **link** to the relevant **Discovery
Service Task** that was executed and can be found and displayed using the filter function.

## Deletion process

The discovered data in the **Discovery Service** cannot simply be deleted and removed from the
**Discovery Service entries**. As the entries have a **link to the Discovery Service Task**, it is
necessary to delete the discovered entries via the **Discovery Service Task** that was created. If
entries were discovered using a joint **Discovery Service Task**, it is not possible to simply
delete them. This is the case if two different users have carried out a scan on the same area. If
you delete one of the two **Discovery Service Task**, only the entries that had a single link to
this **Discovery Service Task** will be deleted. The entries for the other **Discovery Service
Task** will be retained and must be deleted via the associated **Discovery Service Task**. You can
find out which **Discovery Service Task** found a particular entry by selecting the entry via the
**Conversion Wizard**.

![Conversion Wizard.](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/deleting_entries/deleting_entries_1-en.webp)

## Deleting entries by changing the settings in the System Task

If the IP range for an existing **Discovery Service Task** is changed and the **Discovery Service
Task** is then executed for this new IP range, the previously discovered entries from the previous
executed **Discovery Service Task** will be deleted from the **Discovery Service**. If you want to
carry out a **Discovery Service Task** for a different IP range, you should create a new **Discovery
Service Task**. This will prevent any already discovered entries from being deleted. However, if the
existing entries are no longer required, you can delete them by using the same **Discovery Service
Task** with a different IP range.

1. Task B only scans the IP address: 192.168.150.1
2. Only the entries for the IP address 192.168.150.1 are discovered
3. Task A is changed and now scans the IP address:192.168.150.2
4. Result:
5. Only the entries from the IP address 192.168.150.2 are discovered
6. Entries for IP address 192.168.150.1 are deleted
7. Exception:
8. Task B scans the IP address: 192.168.150.1
9. The same entries for IP address 192.168.150.1 are discovered as for 1.
10. A new scan using Task A with a different IP address 192.168.150.2 will not delete the data from
    Task B

NOTE: The **Password Resets** and **passwords** created using the **Conversion Wizard** are not
deleted when the **Discovery Service Tasks** are deleted.
