---
title: "Add a Managed User Window"
description: "Add a Managed User Window"
sidebar_position: 10
---

# Add a Managed User Window

Manually managed user accounts may be added to the website resource. These accounts can be used for
activities on the resource by specifying the username value in the “Login Account Template” field of
the Activity. See the [Activities Page](/docs/privilegesecure/25.12/admin/interface/activities/activities.md) topic for additional information.

Follow the steps to add or edit a managed user account for the resource.

:::note
Only applicable to Website resources.
:::


**Step 1 –** Navigate to the **Resources** page.

**Step 2 –** Click the name of the desired resource to open the Resource Details page and select the
**Users** tab.

**Step 3 –** Do the following:

- To add a new managed user, click **Add**.
- To modify an existing managed user, select the User from the list and click **Edit**.

![addmanageduser](/images/privilegesecure/25.12/accessmanagement/admin/policy/window/resources/addmanageduser.webp)

**Step 4 –** Specify the username/password combination that will be used to log users onto the
website. Enter the following information:

- Display Name – The friendly name for the account
- Username – The account in the exact format specified in the “Login Account Template” field of the
  Activity, e.g. `domain\user` or `user@domain.com`. See the
  [Activities Page](/docs/privilegesecure/25.12/admin/interface/activities/activities.md) topic for additional information.
- Password – Contains the service account password. The Eye icon can be used to view the password.

**Step 5 –** Click **Okay** to accept changes.

The managed user is added to the resource and shown on the Users tab.
