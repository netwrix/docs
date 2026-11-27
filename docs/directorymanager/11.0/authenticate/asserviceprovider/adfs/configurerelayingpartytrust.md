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

In AD FS, configure the Directory Manager client with which you want to set up AD FS. You must also
specify the claim rules for authentication.

## Add the Relying Party Trust and Claim Rules

1. Launch the AD FS console. In the left pane, select **AD FS > Trust Relationships**. Right-click
   **Relying Party Trusts** and click **Add Relying Party Trust** on the shortcut menu.  
   The **Add Relying Party Trust** wizard opens to the **Welcome** page.
2. Read the welcome message and click **Start**.
3. Use the options on the **Select Data Source** page to either import relying party trust data from
   a file, such as a metadata file, or enter the information manually.  
   To enter information manually, select the **Enter data about the relying party manually** option
   and click **Next**.
4. On the **Specify Display Name** page, specify a friendly display name for this configuration in
   the **Display name** box. Then enter any additional notes in the **Notes** box and click
   **Next**.
5. To use the SAML 2.0 protocol as the profile, select the **AD FS profile** option button on the
   **Choose Profile** page and click **Next**.
6. On the **Configure Certificate** page, click **Next**.
7. On the **Configure URL** page, select the **Enable support for the SAML 2.0 Web SSO protocol**
   option button. Then in the **Relying party SAML 2.0 SSL service URL** box, provide the consumer
   URL you generated for the Directory Manager client. See the
   [Generate the Consumer URL for a GroupID Client](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/generateurls.md#generate-the-consumer-url-for-a-directory-manager-client)
   topic.  
   AD FS uses the consumer URL, which is the relying party trust URL, to authenticate users. Click
   **Next**.
8. On the **Configure Identifiers** page, use the **Relying party trust identifier** box to provide
   the audience URL you generated for the Directory Manager client. Click **Add** next to this box and then
   click **Next**.  
   See the
   [Generate Entity ID/Audience URL](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/generateurls.md#generate-entity-idaudience-url)
   topic.
   <!-- vale off -->
9. Use the **Configure Multi-factor Authentication Now?** page to configure multi-factor
   authentication. For this example, skip this step by selecting the 
   **I do not want to configure multi-factor authentications settings for this relying party trust at this time** option button
   and click **Next**.
   <!-- vale on -->
10. Use the **Choose Issuance Authorization Rules** page to permit all users to authenticate on
    the relying party trust using AD FS. Active Directory validates user credentials.  
    Select the **Permit all users to access this relying party** option button and click **Next**.
11. Use the tabs on the **Ready to Add Trust** page to review some preconfigured settings. Then
    click **Next**.
12. Click **Close** on the **Finish** page to complete the wizard. The wizard closes and the **Edit
    Claim Rules** dialog box is displayed, where you must specify claim rules for authentication.

To specify claim rules for authentication:

13. On the **Edit Claim Rules** dialog box, the **Issuance Transform Rules** option corresponds to
    authenticating using an Active Directory attribute. Click **Add Rule**.
14. To add a rule, select _Transform an Incoming Claim_ from the **Claim rule template** dropdown
    list on the **Select Rule Template** page and click **Next**.
15. On the **Configure Rule** page, specify a rule name in the **Claim rule name** box.
16. In the **Incoming claim type** and **Outgoing claim type** boxes, select an Active Directory
    attribute for authentication, such as the UPN attribute. The incoming and outgoing claim types
    should be the same because you specify no different text or data for the sign-in
    process. AD FS uses the exact user principal name for authentication.
17. Ensure that the **Pass through all claim values** option is selected; then click **Finish**.
    The new rule is configured and displayed on the **Issuance Transform Rules** tab.
18. Click the **Issuance Authorization Rules** tab. The issuance authorization rule is already
    complete.
19. Click the **Delegation Authorization Rules** tab. No delegation is needed, so click **Apply**
    and then **OK**. The AD FS console is displayed with the new relying party trust added.  
    The next step is to configure the AD FS provider in Directory Manager. See the
    [Configure the AD FS Provider In GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md)
    topic.
