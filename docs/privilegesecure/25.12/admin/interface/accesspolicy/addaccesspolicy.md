---
title: "Add Access Policy"
description: "Add Access Policy"
sidebar_position: 10
---

# Add Access Policy

Follow the steps to add access policies to the console.

:::tip
Remember, a connection profile is required to create an access policy. You can create one ahead of
time on the [Connection Profiles Page](/docs/privilegesecure/25.12/admin/interface/accesspolicy/connectionprofiles/connectionprofiles.md) page or use the arrow button
to create one during these steps.
:::


**Step 1 –** Navigate to the **Policy** > **Access Policies** page.

**Step 2 –** In the Access Policy list, click the **Plus** icon.

![Add Access Policy](/images/privilegesecure/25.12/accessmanagement/admin/configuration/add/addaccesspolicy.webp)

**Step 3 –** Enter the following information:

- Name – Displays the name of the policy
- Description – (Optional) Description of the policy
- Type – Classification of the access policy. The Type drop-down contains the following options:

    - Resource Based - enables users to access remote devices (computers, databases, network equipment)
    - Credential Based - enables users to access credentials and files stored in vaults.

- Connection Profile – Displays the name of the connection profile associated to the access policy

**Step 4 –** Click **Save** to create the new access policy.

The new access policy has been created. The next step is to associate Users, Activities, and
Resources/Credentials to the policy. See the following topics for additional information:

- Resource Based Policy

    - [Users Tab for Resource Based Access Policies](/docs/privilegesecure/25.12/admin/interface/accesspolicy/resourcebasedpolicyt/users.md)
    - [Activities Tab for Resource Based Access Policies](/docs/privilegesecure/25.12/admin/interface/accesspolicy/resourcebasedpolicyt/activities/activities.md)
    - [Resources Tab for Resource Based Access Policies](/docs/privilegesecure/25.12/admin/interface/accesspolicy/resourcebasedpolicyt/resources/resources.md)

- Credential Based Policy [CreCredential Based Access Policies](/docs/privilegesecure/25.12/admin/interface/accesspolicy/credentials.md)
