---
title: "Microsoft Entra ID Details Page"
description: "Microsoft Entra ID Details Page"
sidebar_position: 40
---

# Microsoft Entra ID Details Page

The Microsoft Entra ID (formerly Azure AD) Details page shows additional information for the
selected Microsoft Entra ID Tenant resource. This page is opened from any linked resource within the
various interfaces.

![Azure AD Details page](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/azureaddetailspage.webp)

The details page shows the following information:

- Name — Displays the name of the resource
- Trashcan icon — Removes the selected resource from being managed by the application. A
  confirmation window will display.
- Platform — Displays the type of platform, which defines the resource
- Tenant ID — Displays the globally unique identifier for the targeted tenant implementation as
  found in Entra ID
- Logon URL — Displays the primary logon page
- Email Domain — Displays the domain part of the user principal name used by the Tenant as found in
  Entra ID on the Users page, under “Identity Issuer”
- Associated Domain — For hybrid Entra ID environments, assign the on-premises Active Directory
  domain that is synchronized with the tenant, otherwise leave set to **None**
- Process Group Memberships — Select this checkbox to enable Netwrix Privilege Secure to collect
  group membership information. This is unchecked by default.
- Synchronize Now button — Scans the domain for users, groups, members, and computers. The Cancel
  button, which is only visible when scanning can be used to stop the resource scan. This scan can
  also be scheduled from the [Platforms Page](/docs/privilegesecure/4.2/admin/interface/platforms/overview.md).
- Service Account — Displays the service account associated with the resource

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [URLs Tab for Microsoft Entra ID](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/entraid/urlsentraid.md)
- [Users Tab for Microsoft Entra ID](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/entraid/usersentraid.md)
- [Groups Tab for Microsoft Entra ID](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/entraid/groupsentraid.md)
- [Sessions Tab for Microsoft Entra ID](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/entraid/sessionsentraid.md)
- [Access Policies Tab for Microsoft Entra ID](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/entraid/accesspoliciesentraid.md)
- [History Tab for Microsoft Entra ID](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/entraid/historyentraid.md)
- [Applications Tab for Microsoft Entra ID](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/entraid/applicationsentraid.md)
