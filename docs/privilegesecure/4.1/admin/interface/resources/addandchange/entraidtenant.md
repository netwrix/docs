---
title: "Add New Microsoft Entra ID Tenant"
description: "Add New Microsoft Entra ID Tenant"
sidebar_position: 40
---

# Add New Microsoft Entra ID Tenant

Follow the steps to add Microsoft Entra ID (formerly Azure AD) resource to the Privilege Secure
Console.

**Step 1 –** Navigate to the **Resources** page.

**Step 2 –** Click **Add** > **New Microsoft Enter ID (formerly Azure AD) Tenant**

![Add Azure AD Tenant](/images/privilegesecure/4.1/accessmanagement/admin/policy/add/addazureadtenant.webp)

**Step 3 –** Enter the following information:

- Microsoft Entra ID Name — Displays the name of the resource
- Platform — Displays the type of platform, which defines the resource
- Tenant ID — Displays the globally unique identifier for the targeted tenant implementation as
  found in Azure AD
- Logon URL — Displays the primary logon page
- Email Domain — Displays the domain part of the user principal name used by the Tenant as found in
  Azure AD on the Users page, under “Identity Issuer”
- Associated Domain — For hybrid Azure AD environments, assign the on-premises Active Directory
  domain that is synchronized with the tenant
- Process Group Memberships — Select this checkbox to enable Netwrix Privilege Secure to collect
  group membership information
- Synchronize Now button — Scans the domain for users, groups, members, and computers. The Cancel
  button, which is only visible when scanning can be used to stop the resource scan. This scan can
  also be scheduled from the
  [Platforms Page](/docs/privilegesecure/4.1/admin/interface/platforms/overview.md).
- Service Account — Displays the service account associated with the resource
-   - Visit icon — Go to the Service Account page to view details of the selected service account.
    - Add New Service Account icon — Open the Add New Service Account window. The fields are
      identical to those on the Service Accounts page.

**Step 4 –** Click **Save** to add the Microsoft Entra ID Tenant to the console.

The new Microsoft Entra ID tenant has been on-boarded. See the
[Microsoft Entra ID Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/entraid/entraid.md)
topic for additional information.
