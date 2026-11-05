---
title: "Add the Protect Mode account to Windows endpoints with a GPO"
description: "Create a Group Policy Preferences GPO that adds the Protect Mode account to the local Administrators group on Windows endpoints."
sidebar_position: 60
---

Use a Group Policy object (GPO) to add the Protect Mode account to the local Administrators group on Windows endpoints. The GPO uses Group Policy Preferences (GPP).

:::warning
Never apply this GPO to domain controllers.
:::

## Prerequisites

- Permission to create and link GPOs in the domain.
- The name of the Protect Mode account that you entered in the domain configuration. This page uses `<protect-account>` as a placeholder. See [Add a domain](./add-a-domain.md).

## Create the GPO

The following steps create a GPO named `AddLocalAdmin`. You can instead add the setting to an existing GPO that already applies to the target endpoints.

1. Open **Group Policy Management**.
2. Go to **Forest: `<domain>`** > **Domains** > **`<domain>`** > **Group Policy Objects**. `<domain>` is your domain name.
3. Right-click **Group Policy Objects**, select **New**, enter the GPO name, and then select **OK**.
4. Right-click the GPO and select **Edit**.
5. Go to **Computer Configuration** > **Preferences** > **Control Panel Settings** > **Local Users and Groups**.
6. Right-click **Local Users and Groups**, and then select **New** > **Local Group**.
7. Set **Action** to **Update**, and select **Administrators (built-in)** in the **Group name** list.
8. Select **Add**, and then add the Protect Mode account, `<protect-account>`.
9. ensure that the **Delete all member users** and **Delete all member groups** options aren't selected, and then select **OK**.
10. Close the Group Policy Management Editor.

## Link the GPO

1. Link the GPO to the organizational units (OUs) that contain the target endpoints. Drag the GPO onto the OU, or right-click the OU and select **Link an Existing GPO**.
2. ensure that the OUs don't contain domain controllers.

## Test the GPO

1. Link the GPO to an OU that contains test systems.
2. Sign in to a test system.
3. Update Group Policy from a command line:

   ```text
   gpupdate /force
   ```

4. Confirm that the Protect Mode account is a member of the local Administrators group:

   ```text
   net localgroup Administrators
   ```

## Related topics

- [Avoid conflicts between GPOs and the product](./group-policy-objects.md)
- [Domain controllers in Privilege Secure for Discovery](./domain-controllers-overview.md)
