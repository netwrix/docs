---
title: "Single Sign On (SSO) Conﬁguration with Okta"
description: "Single Sign On (SSO) Conﬁguration with Okta"
sidebar_position: 20
---

# Single Sign On (SSO) Conﬁguration with Okta

Single Sign On (SSO) is a powerful authentication process that enhances security and improves user
experience by allowing users to access multiple applications with a single set of login credentials.
In this guide, we focus on configuring SSO using Okta, a leading identity management service, to
streamline user access and secure your system effectively.

## Configuring SSO with Okta

Configuring Single Sign-On with Okta involves several key steps that integrate your server with
Okta’s authentication framework. Begin by activating SSO within your system’s configuration
settings, selecting a failover user, and preparing for provider selection. This section will guide
you through the precise steps required to establish a secure and efficient SSO connection, including
application integration in Okta, SAML settings configuration, and the necessary data synchronization
between your server and Okta. Follow the steps below to ensure a successful setup.

**Step 1 –** To activate Single Sign-On, navigate to **System Configuration** > **System
Settings** > **Single Sign-On**. Once activated, select a Failover Login User from the drop-down
menu. The Root user is selected by default.

![Single Sign On Conﬁguration with OKTA](ssookta.webp)

After completing the above steps, a Single Sign-On subsection will appear in the System
Configuration section.

**Step 2 –** Select the **Provider** in order for Single Sign On subsection to be displayed.

![ssoprovider](ssoprovider.webp)

**Step 3 –** Go to yourcompany.okta.com, select **Applications**, and then click **Create App
Integration**.

![Create App Integration.](oktaapplications.webp)

**Step 4 –** On the next screen, select **SAML 2.0** and click **Next**.

![Create App Integration](oktanewappintergration.webp)

**Step 5 –** Set a **Name** for the Application and click **Next**.

![Create SAML Intergration](oktacreatesamlintergration.webp)

**Step 6 –** Open the **Conﬁgure SAML** tab.

**Step 7 –** Go to your Endpoint Protector **Server**, **System Conﬁguration**, Single Sign On.

![Endpoint Protector Server Single Sign On coffiguration ](ssoconfiguration.webp)

**Step 8 –** Copy the information from:

- Audience URI (SP Entity ID) and paste it on the ﬁeld with the same name from OKTA, Conﬁgure SAML.
- Login URL OKTA and paste it on the ﬁeld Single sign on URL from OKTA page, Conﬁgure SAML.

![Copy Audience URI (SP Entity ID) and paste it on the ﬁeld with the same name from OKTA, Conﬁgure SAML](audienceuriokta.webp)

**Step 9 –** On the OKTA page, click **Show Advanced Settings**.

![Show Advanced Setting](oktaadvancedsetting.webp)

**Step 10 –** Edit the following ﬁelds:

- Signature Algorithm, select **RSA-SHA256**
- Digest Algorithm, select **SHA256**

![Edit Signature Algorithm](oktaeditsignaturealgorithmnew.png)

**Step 11 –** Hide Advanced Settings and click **Next**.

**Step 12 –** At step 3, select an answer for each question and click **Finish**.

![Select an answer for each question](oktacreatesamlintergrationtwo.webp)

**Step 13 –** Navigate to **Applications**, select the Endpoint Protector application, go to
Assignments, and assign people to the application.

![Assign Application to People](oktaassignapplication.webp)

**Step 14 –** After assigning the accounts, click **Done**.

![Assign Application to People](oktaassignapplicationtwo.webp)

**Step 15 –** Navigate to Applications, open the created app and click **Sign On**, **View Setup
Instructions**.

![View Setup Instructions](oktaviewsetupinstructions.webp)

**Step 16 –** From the new opened section, copy the needed information and paste it on your Endpoint
Protector Server:

- Identity Provider Single Sign-On URL to Endpoint Protector Server, System conﬁguration, Single
  Sign On, Identity Provider Single Sign-on URL
- Identity Provider Issuer to Endpoint Protector Server, System conﬁguration, Single Sign On,
  Identity Provider Issuer
- X.509 Certiﬁcate to Endpoint Protector Server, System conﬁguration, Single Sign On, X.509
  Certiﬁcate

![Copy the needed information and paste it on your Endpoint Protector Server](ssoconfigurationtwo.webp)

**Step 17 –** **Save** the settings on your Endpoint Protector Server and click **Test** to conﬁrm
conﬁguration settings are correct.
