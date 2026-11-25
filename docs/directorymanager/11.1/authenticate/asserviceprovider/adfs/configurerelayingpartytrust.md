---
title: "Configure an AD FS Relying Party Trust for Directory Manager"
description: "Add a relying party trust and claim rules in AD FS so users can sign in to a Directory Manager client with AD FS single sign-on."
keywords:
  - AD FS relying party trust
  - AD FS claim rules
  - Directory Manager consumer URL
  - Issuance Transform Rules
  - SAML 2.0 Web SSO
sidebar_position: 20
---

# Configure an AD FS Relying Party Trust for Directory Manager

In Active Directory Federation Services (AD FS), configure the Directory Manager client with which you want to set up AD FS. You must also specify the claim rules for authentication.

## Add the relying party trust and claim rules

To configure a relying party trust in AD FS:

1. Launch the AD FS console. In the left pane, select **AD FS > Trust Relationships**.
   Right-click **Relying Party Trusts** and click **Add Relying Party Trust** on the shortcut menu.
   The Add Relying Party Trust wizard opens to the Welcome page.

2. Read the welcome message and click **Start**.

3. On the Select Data Source page, import the relying party trust data from a file, such as a metadata file, or enter it manually.
   To enter it manually, select the **Enter data about the relying party manually** option and click **Next**.

4. On the Specify Display Name page, enter a friendly display name for this configuration in the Display name box.
   Then enter any additional notes in the Notes box and click **Next**.

5. To use the SAML 2.0 protocol as the profile, select the **AD FS profile** option button on the Choose Profile page and click **Next**.

6. On the Configure Certificate page, click **Next**.

7. On the Configure URL page, select the **Enable support for the SAML 2.0 Web SSO protocol** option button.
   Then, in the Relying party SAML 2.0 SSL service URL box, enter the consumer URL you generated for the Directory Manager client.
   See the
   [Generate the Consumer URL for a Directory Manager Client](generateurls.md#generate-the-consumer-url-for-a-directory-manager-client)
   topic.
   AD FS uses the consumer URL, which is the relying party trust URL, to authenticate users. Click **Next**.

8. On the Configure Identifiers page, enter the audience URL you generated for the Directory Manager client in the Relying party trust identifier box.
   Click **Add** next to this box and then click **Next**.
   See the [Generate Entity ID/Audience URL](generateurls.md#generate-entity-idaudience-url) topic.

9. On the Configure Multi-factor Authentication Now? page, you can configure multi-factor authentication.
   For this example, skip this step by selecting the option **Don't want to configure
   multi-factor authentications settings for this relying party trust at this time** and
   click **Next**.

10. On the Choose Issuance Authorization Rules page, permit all users to authenticate on the relying party trust using AD FS.
    Active Directory validates user credentials.
    Select the **Permit all users to access this relying party** option button and click **Next**.

11. On the Ready to Add Trust page, use the tabs to review some preconfigured settings. Then click **Next**.

12. Click **Close** on the Finish page to complete the wizard.
    The wizard closes and the Edit Claim Rules dialog box appears, where you must specify claim rules for authentication.

13. In the Edit Claim Rules dialog box, the Issuance Transform Rules option corresponds to authenticating using an Active Directory attribute.
    Click **Add Rule**.

14. To add a rule, select **Transform an Incoming Claim** from the Claim rule template dropdown list on the Select Rule Template page and click **Next**.

15. On the Configure Rule page, enter a rule name in the Claim rule name box.

16. In the Incoming claim type and Outgoing claim type boxes, select an Active Directory attribute for authentication, such as the user principal name (UPN) attribute.
    The incoming and outgoing claim types should be the same because you specify no different text or data for the sign-in process.
    AD FS uses the exact user principal name for authentication.

17. Ensure that the **Pass through all claim values** option is selected. Then click **Finish**.
    The new rule is configured and appears on the Issuance Transform Rules tab.

18. Click the **Issuance Authorization Rules** tab. The issuance authorization rule is already complete.

19. Click the **Delegation Authorization Rules** tab.
    No delegation is needed, so click **Apply** and then **OK**.
    The AD FS console appears with the new relying party trust added.

## Next step

Configure the AD FS provider in Directory Manager. See the
[Configure the AD FS Provider in Directory Manager](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md) topic.
