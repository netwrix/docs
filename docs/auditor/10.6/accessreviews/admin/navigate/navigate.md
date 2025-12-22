---
title: "Navigation"
description: "Navigation"
sidebar_position: 20
---

# Navigation

The Access Reviews Console has four interfaces. Upon login, users granted console access are brought
to the Resource Owners interface.

![Access Information Center landing page, Resource Owners interface, with all 4 tabs available to an Administrator who is also an assigned owner](/images/auditor/10.6/access/reviews/admin/interface.webp)

The signed in user is displayed in the upper-right corner, along with the **Sign out** link. The
available interfaces change according to the role assigned to the user.

For Administrator Only

The Configuration tab opens the Configuration interface. Configure console access, Active Directory
service account, notification settings, database access, and diagnostic logging level.

This interface is available only to users with the Administrator role. See the
[Configuration Interface Overview](/docs/auditor/10.6/accessreviews/admin/configuration/overview.md)
topic for additional information.

For Security Team & Administrator

The Resource Owners tab opens the Resource Owners interface. Manage resource ownership by assigning
owners to resources and requesting ownership confirmation. Resources to be included in the Access
Reviews workflow must first be assigned at least one owner within the Resource Owners interface.
Assigned owners can log in to complete reviews.

This interface is available only to users with either the Security Team or Administrator role. See
the
[Resource Owners Interface](/docs/auditor/10.6/accessreviews/resourceowners/interface/interface.md)
topic for additional information.

The Entitlement Reviews tab opens the Entitlement Reviews interface. Create and manage reviews.
There are two types of reviews for resources being managed within the Access Reviews application:
resource Access reviews and group Membership reviews. This does require the Access Reviews
application to be configured to send notifications.

This interface is available only to users with either the Security Team or Administrator role. See
the
[Entitlement Reviews Interface](/docs/auditor/10.6/accessreviews/entitlementreviews/interface/interface.md)
topic for additional information.

For Assigned Owner

The My Reviews tab opens the My Reviews interface. It is only visible if the logged in user is also
an assigned owner of at least one resource. Assigned owners without a user role are directed to the
My Reviews interface at login.

The My Reviews interface is available to any domain user who has been assigned ownership of a
resource. See the
[Owners & Access Reviews](/docs/auditor/10.6/accessreviews/owneroverview/owneroverview.md)
topic for additional information.

## Interface Quick Reference

The table below is a quick reference aligning each interface with its purpose, how to access it, and
who has access to it:

| Interface           | Purpose                                                                                                                           | Opened By                                                      | Accessible To                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------- |
| Configuration       | Configure console access, Active Directory service account, notification settings, database access, and diagnostic logging level. | **Configuration** tab                                          | Administrator role                    |
| Resource Owners     | Manage resource ownership by assigning owners to resources and requesting ownership confirmation.                                 | **Resource Owners** tab                                        | Administrator role Security Team role |
| Entitlement Reviews | Create and manage reviews.                                                                                                        | **Entitlement Reviews** tab                                    | Administrator role Security Team role |
| My Reviews          | View and process pending reviews. Also view historical reviews.                                                                   | **My Reviews** tab Direct from login for owners without a role | Assigned Resource Owners              |
