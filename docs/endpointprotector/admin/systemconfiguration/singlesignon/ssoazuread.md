---
title: "Single Sign On (SSO) Conﬁguration with Azure AD"
description: "Single Sign On (SSO) Conﬁguration with Azure AD"
sidebar_position: 10
---

# Single Sign On (SSO) Conﬁguration with Azure AD

Single Sign On (SSO) streamlines user authentication by enabling access to multiple applications
with a single set of credentials. This guide explains how to configure SSO with Azure Active
Directory (AD), enhancing security and improving user access across your organization’s
applications.

## Configuring SSO with Azure AD

Setting up Single Sign-On (SSO) with Azure AD integrates your server with Azure's authentication
services. By configuring system settings, activating SSO, and choosing a login user, you prepare
your server for seamless integration. This guide covers setting up a new enterprise application in
Azure, configuring SAML settings, and syncing data between your server and Azure AD. Follow the
steps below to activate Single Sign-On with Azure AD.

**Step 1 –** Navigate to **System Conﬁguration** > **System Settings** > **Single Sign On**.

**Step 2 –** Upon the activation, select a **Failover Login User** from the drop-down; root user
will be selected by default.

![Single Sign On Conﬁguration with Microsoft Entra ID ](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/ssomicrosoftentraid.webp)

After the above steps have been completed, a Single Sign On subsection is displayed in the System
Conﬁguration section.

:::note
The Failover Login User you selected cannot be deleted from Endpoint Protector Server
while it is selected. Single Sign On cannot be activated without a Failover Login User.
:::


**Step 3 –** Select the **Provider** to view Single Sign On subsections.

![Single Sign On Conﬁguration with Microsoft Entra ID](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/ssomicrosoftentraidtwo.webp)

**Step 4 –** Navigate to portal.azure.com and login.

**Step 5 –** Navigate to **Azure Active Directory**.

**Step 6 –** Create a **New Enterprise Application**:

![Microsoft Entra ID](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidenterpriseapplication.webp)

- Click **Create your own application** to add an new application.

![Create Your Own Application](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidcreateapplication.webp)

- Give the application a name.
- Select **Integrate any other application you don’t ﬁnd in the gallery**.
- Click **Create**.

![Integrate any other application you don’t ﬁnd in the gallery](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidintergrateapplication.webp)

**Step 7 –** From the left-hand menu Navigate to Single sign-on and then select the **SAML** method.

![Entra ID  Single Sign On](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidsso.webp)

**Step 8 –** To edit Basic SAML Conﬁguration, open the Single Sign On page from the Endpoint
Protector Server and copy/paste the data from the Single Sign On page on the **Basic SAML
Conﬁguration** page.

![Entra ID SAML](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidsaml.webp)

**Step 9 –** On the Basic SAML Conﬁguration page, delete the data that is by default completed for
Identiﬁer (Entity Edit).

![Basic SAML Conﬁguration page](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidbasicsamlconf.webp)

**Step 10 –** From the Single Sign On page on the Endpoint Protector Server:

- Copy the data from the Service Provider's Entity ID field and paste it into both the Identifier
  (Entity ID) and Reply URL (Assertion Consumer Service URL) fields on the Basic SAML Configuration
  page in Microsoft Azure. Finally, set it as Default.

![On the Endpoint Protector Server Copy the data from Endpoint Protector Service Provider](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidbasicsamlconftwo.webp)

- Copy the Login URL from the Single Sign-On and paste it into the Sign-On URL field on the Basic
  SAML Configuration page in Microsoft Azure.

![On the Endpoint Protector Server Copy the data from Endpoint Protector Service Provider](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidbasicsamlconfthree.webp)

- Copy the Logout URL from the Single Sign-On and paste it into the Logout URL field on the Basic
  SAML Configuration page in Microsoft Azure.

![On the Endpoint Protector Server Copy the data from Endpoint Protector Service Provider](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidbasicsamlconffour.webp)

**Step 11 –** Click **Save** to save the settings without testing Single Sign On yet.

**Step 12 –** Navigate to Step 3 on the SAML Signing Certificate page and click **Edit**.

![Edit SAML Signing Certiﬁcate](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/editsamlsigningcert.webp)

**Step 13 –** Change the Signing Algorithm to SHA-1 and click **Save**.

![Edit SAML Signing Certiﬁcate](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/editsamlsigningcerttwo.webp)

**Step 14 –** In Step 3 of the SAML Signing Certificate, download the **Certificate (Base64)**.

![Download Certiﬁcate (Base64).](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidownloadcert.webp)

**Step 15 –** Open the downloaded certiﬁcate with a text editor and copy the content inside it.

**Step 16 –** Paste the content into the **Security Certificate** field under the Single Sign-On
section in the System Configuration of the Endpoint Protector Server.

![Open the downloaded certiﬁcate with a text editor and copy the content inside it](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/pastesecuritycert.webp)

**Step 17 –** Return to the Azure **SAML-based Sign-On** page, proceed to Step 4 ("Set up your
application"), and copy the Azure AD Identifier.

**Step 18 –** Navigate to the Endpoint Protector Server **System Conﬁguration > Single Sign On >
Identity Provider, Azure AD Identiﬁer** and paste the data from the previous step.

![Microsoft Entra ID Identifier](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidindetifier.webp)

**Step 19 –** Return to Azure SAML-based Sign On page and reach Step 4, Set up “your application”
and copy Login URL.

**Step 20 –** Switch to the Endpoint Protector Server, **System Conﬁguration** > **Single Sign
On** > **Identity Provider** > Login URL and paste the data from the previous step.

![ Login URL](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidloginurl.webp)

![Logout URL](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidlogouturl.webp)

**Step 21 –** Generate the Failover Login URL from Endpoint Protector Server **System
Configuration** > **Single Sign-On** > **Failover Login URL** and **Save** it.

![Failover Login URL](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/failoverloginurl.webp)

**Step 22 –** **Save** the settings on the Single Sign On page from the Endpoint Protector Server.

**Step 23 –** Switch to Azure, Select **Users and groups** from the left menu.

![Users and groups](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidusergroups.webp)

**Step 24 –** Go to **Add user/group** > **none Selected**, search for the Azure User, then
**Select**, and **Assign**.

![Add user/group](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidaddusergroup.webp)

![Add user/group](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidusergroupstwo.webp)

![Add user/group](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidusergroupsthree.webp)

![Add user/group](/images/endpointprotector/2509/admin/systemconfiguration/singlesignon/entraidusergroupsfour.webp)

**Step 25 –** The user is assigned to the application, and logging into Endpoint Protector with
Azure is now possible.

**Step 26 –** Log out of the Endpoint Protector Server and log back in. The administrator should be
redirected to http://login.microsoftonline.com/ for the Azure login process.
