---
title: "Add a Managed User Window"
description: "Add or edit a manually managed user account that activities use to log on to a website resource."
sidebar_position: 10
---

# Add a Managed User Window

You can add manually managed user accounts to the website resource. These accounts are useful for
activities on the resource by specifying the username value in the “Login Account Template” field of
the Activity. See the [Activities Page](/docs/privilegesecure/25.12/admin/interface/activities/activities.md) topic for additional information.

To add or edit a managed user account for the resource.

:::note
Only applicable to Website resources.
:::

1. Navigate to the **Resources** page.
2. Click the name of the resource you want to open the Resource Details page and select the
   **Users** tab.
3. Do the following:

   - To add a new managed user, click **Add**.
   - To modify an existing managed user, select the User from the list and click **Edit**.

   ![Add a Managed User window with display name, username, and password fields](/images/privilegesecure/25.12/accessmanagement/admin/policy/window/resources/addmanageduser.webp)

4. Specify the username/password combination that log users onto the
   website. Enter the following information:

   - **Display Name** — The friendly name for the account
   - **Username** — The account in the exact format specified in the “Login Account Template” field of the
     Activity, e.g. `domain\user` or `user@domain.com`. See the
     [Activities Page](/docs/privilegesecure/25.12/admin/interface/activities/activities.md) topic for additional information.
   - **Password** — Contains the service account password. The Eye icon lets you view the password.

5. Click **Okay** to accept changes.

The managed user is added to the resource and shown on the Users tab.
