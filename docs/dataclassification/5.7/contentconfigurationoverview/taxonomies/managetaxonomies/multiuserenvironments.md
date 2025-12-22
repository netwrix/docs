---
title: "Multi-User Environments"
description: "Multi-User Environments"
sidebar_position: 10
---

# Multi-User Environments

When several users are maintaining the taxonomy structure simultaneously there is a need to prevent
concurrent access to individual classes so that one user’s work is not overwritten by another user
working in the same area of the taxonomy.

In order to allow multiple users to work simultaneously we provide a locking facility that allows
each user to reserve one or more classes for private editing. When they have finished a batch of
work then they can unlock the classes to release.

In order to enable this facility the administrator should “Enable User Locking” under Config → Core
→ Query Server.

The administrator should also ensure that Anonymous Access is disabled for the administration web
application in IIS so that individual Windows identities are available within Taxonomy Manager for
locking purposes.

When this facility has been enabled then you will see a Lock Class button in the treeview context
menu for all classes:

![lockterm](/images/dataclassification/5.7/admin/taxonomies/lockterm.webp)

You can also optionally lock all of its children in a single operation. Once a term is locked the
context menu items will change to allow unlocking the selected term, and its children.

![unlockterm](/images/dataclassification/5.7/admin/taxonomies/unlockterm.webp)

Other users will see a closed padlock symbol to indicate the status of the term.

Other users are unable to alter or unlock a term that has been locked by another user. However
super-users are also able to Unlock a term.
