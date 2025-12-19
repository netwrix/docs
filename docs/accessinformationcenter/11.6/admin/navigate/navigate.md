---
title: "Navigation"
description: "Navigation"
sidebar_position: 30
---

# Navigation

The Access Information Center has several interfaces for viewing reports and using the available
workflows. Upon login, users granted console access are brought to the Home page.

![Administrator user home page](/images/accessinformationcenter/11.6/admin/homeadmin.webp)

The signed in user is displayed in the upper-right corner, along with the **Sign out** link. The
options enabled on the Home page change according to what components are licensed as well as the
role assigned to the user.

**For Administrator Only**

The **Configure Console** link opens the Configuration interface. Configure console access, Active
Directory service account, notification settings, database access, and diagnostic logging level.
Additionally you can view license details and upload a new license.

This interface is available only to users with the Administrator role. See the
[Configuration Interface Overview](/docs/accessinformationcenter/11.6/admin/configuration/overview.md)
topic for additional information.

:::note
Users with the User Access Administrator role have access only to the Console Access page
of the Configuration interface.
:::


**For Security Team & Administrator**

The **Resource Owners** button opens the Resource Owners interface. Manage resource ownership by
assigning owners to resources and requesting ownership confirmation. Assigned owners can manage
their resources through the Owner portal, viewing reports, making ad hoc changes to access,
completing resource reviews, and approving access requests according to the configuration for each
resource within the Resource Owners interface. Resources to be included in either the Resource
Review or the Self-Service Access Requests workflows must first be assigned at least one owner
within the Resource Owners interface. In order for Owners to make ad hoc changes to access, the
Access Information Center must be configured to commit changes in Active Directory. The **Resource
Owners** button is associated to the Access Requests and Entitlement Reviews license features.

:::info
Enable notifications when managing resources through the Access Information
Center.
:::


This interface is available only to users with either the Security Team or Administrator role. See
the
[Resource Owners Interface](/docs/accessinformationcenter/11.6/resourceowners/interface/interface.md)
topic for additional information.

The **Resource Reviews** button opens the Manage Reviews interface. Create and manage reviews. There
are four types of reviews for resources being managed within the Access Information Center: access,
membership, permissions, and sensitive data. This requires the Access Information Center to be
configured to send notifications. The **Resource Reviews** button is associated to the Entitlement
Reviews license feature.

:::info
While not required, enabling the Access Information Center to commit changes in
Active Directory is an optional component of the Resource Reviews workflow.
:::


This interface is available only to users with either the Security Team or Administrator role. See
the
[Resource Reviews Interface](/docs/accessinformationcenter/11.6/resourcereviews/interface/interface.md)
topic for additional information.

The **Access Requests** button opens the Access Requests interface. View pending and historical
access requests and send reminders to owners. This does require the Access Information Center to be
configured to send notifications and commit changes in Active Directory. Additionally the
Self-Service Access Requests workflow requires that role-based access groups be preconfigured within
the target environment for the resources being managed by the Access Information Center. The
**Access Requests** button is associated to the Access Requests license feature.

This interface is available only to users with either the Security Team or Administrator role. See
the
[Access Requests Interface](/docs/accessinformationcenter/11.6/accessrequests/interface/interface.md)
topic for additional information.

**For Reader, Data Privacy, Security Team, & Administrator**

The **Resource Audit** button opens the Resource Audit interface. View reports for resources, users,
groups, computers, and sensitive content. Reports are available for resources scanned by Netwrix
Enterprise Auditor. It is available to all console users with the minimum of Reader role. Assigned
owners without a user role can access this interface through the Owner portal, but it is scoped to
only the owned resource. See the
[Access Requests Interface](/docs/accessinformationcenter/11.6/accessrequests/interface/interface.md)
topic for additional information.

The Search Features include a **Search** bar and a **Recent Searches** box on the Home page. These
features will direct you to the reports for the selected object: resource, user, group, computer, or
sensitive content. These features are available to all users with an assigned user role. See the
[Search Features](/docs/accessinformationcenter/11.6/resourceaudit/navigate/search.md)
topic for additional information.

**For Assigned Owner**

The **Manage Your Resources** link opens the Owner portal. It is only visible on the Home page if
the logged in user is also an assigned owner of at least one resource. Assigned owners without a
user role are directed to the Owner portal at login. View a list of scanned resources that the
logged-in domain user is the assigned owner, access resource reports, access pending and historical
access requests, and access resource review information. When enabled for a resource, the owner can
make ad hoc access changes. The Owner portal is associated to the Access Requests and Entitlement
Reviews license features, as it is part of both the Resource Reviews and the Self-Service Access
Requests workflows.

The Owner portal is available to any domain user who has been assigned ownership of a resource or
group within the Access Information Center. See the
[Owner Portal Overview](/docs/accessinformationcenter/11.6/owneroverview/ownerportal/overview.md)
topic for additional information.

**For All Domain Users**

The **Manage Your Access** link opens the Your Access portal. Domain users without a user role who
have not been assigned ownership are directed to the Your Access portal at login. Users can request
access to resources managed through the Access Information Center, view their own entitlements to
resources, and view access request history. It is part of the Self-Service Access Requests workflow.

The Your Access portal is available to any domain user in the target environment. See the
[Your Access Portal Overview](/docs/accessinformationcenter/11.6/youraccessportal/overview.md)
topic for additional information.

## Interface Quick Reference

The table below is a quick reference aligning each interface with its purpose, how to access it, who
has access to it, and the require license:

| Interface                  | Purpose                                                                                                                                                                                                                                                                                                                                      | Opened By                                                                                                                                                                                                | Accessible To                                                                                                                                        | License                                         |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Configuration Interface    | Configure console access, Active Directory service account, notification settings, database access, and diagnostic logging level. Additionally you can view license details and upload a new license.                                                                                                                                        | **Configure Console** link on the Home page                                                                                                                                                              | Administrator role                                                                                                                                   | Any license feature                             |
| Resource Audit Interfaces  | View reports for resources, users, groups, computers, and sensitive content.                                                                                                                                                                                                                                                                 | **Resource Audit** button on the Home page <br /><br />Search bar on the Home page <br /><br />Recent Searched box on the Home page <br /><br />Owner Portal (access only to owned resources or groups)                    | All roles: <ul><li>Administrator</li><li>Security Team</li><li>Readers</li><li>Data Privacy</li></ul> <br />Assigned resource Owners with no role assigned | Active Directory <br />File System <br />SharePoint <br />Windows |
| Resource Owners Interface  | Manage resource ownership by assigning owners to resources and requesting ownership confirmation. Optionally enable resources for owner ad hoc changes and/or the Self-Service Access Requests workflow.                                                                                                                                     | **Resource Owners** button on the Home page                                                                                                                                                              | Administrator role Security Team role                                                                                                                | Entitlement Reviews <br />Access Requests             |
| Resource Reviews Interface | Create and manage reviews.                                                                                                                                                                                                                                                                                                                   | **Resource Reviews** button on the Home page                                                                                                                                                             | Administrator role Security Team role                                                                                                                | Entitlement Reviews                             |
| Access Requests Interface  | View pending and historical access requests and send reminders to owners.                                                                                                                                                                                                                                                                    | **Access Requests** button on the Home page                                                                                                                                                              | Administrator role Security Team role                                                                                                                | Access Requests                                 |
| Owner Portal               | View a list of scanned resources that the logged-in domain user is the assigned owner, access resource reports, access pending and historical access requests, and access resource review information. When enabled for a resource, the owner can make ad hoc access changes. The Owner portal also grants access to the Your Access portal. | **Manage Your Resources** link on the Home page <br /><br />Direct from login for owners without a role                                                                                                              | Assigned Resource Owners                                                                                                                             | Entitlement Reviews <br />Access Requests             |
| Your Access Portal         | Users can request access to resources managed through the Access Information Center, view their own entitlements to resources, and view access request history.                                                                                                                                                                              | **Manage Your Access** link on the Home page <br /><br />**Access** and **History** links in the My Access section of the Owner Portal <br /><br />Direct from login for domain users without a role and are not assigned owners | Domain User                                                                                                                                          | Access Requests                                 |
