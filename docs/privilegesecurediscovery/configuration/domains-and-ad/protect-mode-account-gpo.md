---
title: "Add the Protect Mode Account to Windows Endpoints with a GPO"
description: "Create a Group Policy Preferences GPO that adds the Protect Mode account to the local Administrators group on Windows endpoints."
sidebar_position: 60
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: Images /images/privilegesecure/4.2/discovery/1500011376402_mceclip2.webp, _mceclip4.webp, _mceclip6.webp, _mceclip10.webp, _mceclip12.webp, and _mceclip13.webp show a lab test domain, a lab account name, and lab OU names. Re-capture with example.com names and replace.
:::

Use a Group Policy object (GPO) to add the Protect Mode account to the local Administrators group on Windows endpoints. The GPO uses Group Policy Preferences (GPP).

:::warning
Never apply this GPO to domain controllers.
:::

## Prerequisites

- Permission to create and link GPOs in the domain.
- The name of the Protect Mode account that you entered in the domain configuration. This page uses `<protect-account>` as a placeholder. See [Add a domain](./add-a-domain.md).

## Create the GPO

The following steps create a GPO named `AddLocalAdmin` and link it to a test organizational unit (OU). In production, link the GPO to the OUs that contain the target endpoints. You can instead add the account to an existing GPO that already applies to those endpoints.

1. Open **Group Policy Management**.
2. Go to **Forest: `<domain>`** > **Domains** > **`<domain>`** > **Group Policy Objects**. `<domain>` is your domain name.
3. Right-click **Group Policy Objects**, select **New**, enter the GPO name, and then select **OK**.

   ![Group Policy Management with the Group Policy Objects node of a domain selected](/images/privilegesecure/4.2/discovery/1500011376402_mceclip2.webp)

4. Right-click the GPO and select **Edit**.
5. Go to **Computer Configuration** > **Preferences** > **Control Panel Settings** > **Local Users and Groups**.
6. Right-click **Local Users and Groups**, and then select **New** > **Local Group**.

   ![The New Local Group option in the Local Users and Groups context menu](/images/privilegesecure/4.2/discovery/1500011376402_mceclip0.webp)

7. Set **Action** to **Update**, and select **Administrators (built-in)** in the **Group name** list.

   ![The Local Group properties with Action set to Update and Administrators (built-in) selected](/images/privilegesecure/4.2/discovery/1500011376402_mceclip1.webp)

8. Select **Add**, and then add the Protect Mode account, `<protect-account>`.

   ![The Add button in the Local Group properties](/images/privilegesecure/4.2/discovery/1500011376402_mceclip4.webp)

   ![The Protect Mode account listed as a member of the local Administrators group](/images/privilegesecure/4.2/discovery/1500011376402_mceclip6.webp)

9. ensure that the **Delete** options aren't selected, and then select **OK**.

   ![The Local Group properties with the Delete options cleared](/images/privilegesecure/4.2/discovery/1500011376402_mceclip7.webp)

10. Close the Group Policy Management Editor.

## Link the GPO

1. Link the GPO to the OUs that contain the target endpoints. Drag the GPO onto the OU, or right-click the GPO, copy it, and paste it under the OU.

   ![The GPO linked to an organizational unit](/images/privilegesecure/4.2/discovery/1500011376402_mceclip10.webp)

   ![The linked GPO shown under the organizational unit](/images/privilegesecure/4.2/discovery/1500011376402_mceclip12.webp)

2. ensure that the OUs don't contain domain controllers.

## Test the GPO

1. Link the GPO to an OU that contains test systems.
2. Sign in to a test system.
3. Update Group Policy from a command line:

   ```text
   gpupdate /force
   ```

   ![A command prompt running gpupdate /force](/images/privilegesecure/4.2/discovery/1500011376402_mceclip13.webp)

4. Confirm that the Protect Mode account is a member of the local Administrators group.

## Related topics

- [Avoid conflicts between GPOs and the product](./group-policy-objects.md)
- [Domain controllers in Privilege Secure for Discovery](./domain-controllers-overview.md)
