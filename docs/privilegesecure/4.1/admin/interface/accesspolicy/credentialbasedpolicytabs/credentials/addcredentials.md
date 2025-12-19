---
title: "Add Credentials Window"
description: "Add Credentials Window"
sidebar_position: 20
---

# Add Credentials Window

The Add Credentials window provides a list of Credentials that have been onboarded. Credentials are
onboarded in the
[Credentials Page](/docs/privilegesecure/4.1/admin/interface/credentials/credentials.md).

![Add credentials window](/images/privilegesecure/4.1/accessmanagement/admin/policy/window/accesspolicy/addcredentials.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: All, Credential or
  Credential Group
- Available Credentials and Groups — Shows all available credentials and credential groups
- Credentials And Groups to Add — Shows selected credentials and credential groups
- Add — Adds modifications and closes window
- Cancel — Discards modifications and closes the window

Both tables have the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the credential
- Type — Icon indicates the type of object
- Resource — Displays the name of the resource
- Operating System — Displays the operating system of the resource
- Active Session Count — Displays the number of active sessions

## Add Credentials to an Access Policy

Follow the steps to add credentials to the selected access policy.

**Step 1 –** Navigate to the Policy > Access Policies page.

**Step 2 –** In the Access Policy list, select the name of the access policy and select the
Credentials tab.

**Step 3 –** Click Add to open the Add Credentials window.

The Add Credentials window has the following features:

- Search – Searches the Name and Operating System columns to match the search string. When matches
  are found, both tables are filtered to the matching results.
- Available Credentials and Groups– Shows all Credentials and Groups that have been added to the
  console
- Credentials and Groups to Add – Shows the Credentials and Groups to be added to the protection
  policy
- Column headers can be sorted in ascending or descending order

    - Name – The name of the credential
    - Type – The type of credential, individual or group
    - Resource – Name of the domain
    - Operating System – Operating System of resource
    - Active Session Count – Number of active sessions

**Step 4 –** _(Optional)_Toggle between Credentials or Credential Groups.

**Step 5 –** To add a credential to the access policy, click a row in the Available Credentials
table and it is immediately moved to the Credentials to Add table.

**Step 6 –** Click Add to add the credential(s) to the access policy.

The new credential(s) are added to the access policy and are shown in the
[Credentials Tab for Credential Based Access Policies](/docs/privilegesecure/4.1/admin/interface/accesspolicy/credentialbasedpolicytabs/credentials/credentials.md).
