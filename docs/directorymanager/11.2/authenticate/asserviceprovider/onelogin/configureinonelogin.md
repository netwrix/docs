---
title: "Configure Directory Manager in OneLogin"
description: "Create and configure a Directory Manager app in OneLogin, define users, and download the metadata file for SAML single sign-on."
keywords:
  - OneLogin SAML app
  - Directory Manager OneLogin app
  - OneLogin single sign-on
  - OneLogin metadata file
sidebar_position: 20
---

# Configure Directory Manager in OneLogin

Configuring Directory Manager in OneLogin involves the following steps:

- Create an app for the Directory Manager portal Wizard in OneLogin.
- Configure the app by specifying the consumer URL and audience URL.
- Specify an attribute for authenticating users who sign in to the Wizard portal with OneLogin single sign-on.
- Define the SSO settings.

You must also:

- Define users in OneLogin who can authenticate on the Wizard portal using OneLogin.
- Download the OneLogin metadata file. You use it to configure the OneLogin provider in Directory Manager.

## Create an app for Directory Manager in OneLogin

To create and configure the app:

1. Launch OneLogin.
2. On the Home page, click **New App** to add a new application in the OneLogin control panel.

   To continue with this example, add the Directory Manager portal Wizard.

3. The **Find Applications** page is displayed, with a list of already created applications. In the **Find Applications** box, enter 'SAML' to search for single sign-on applications.
4. In the search results, select the **SAML Test Connector (IdP)** option (without any attributes or any sign responses).
5. On the **Add SAML Test Connector (IdP)** page, specify a user-friendly name for the application in the **Display Name** box.
6. You can also upload an image for the Directory Manager app. It is displayed on the user dashboard in OneLogin.

   When a user signs in to OneLogin, they are redirected to the dashboard. The dashboard lists Directory Manager and other applications configured for single sign-on.

7. Click **Save**.

   A message confirms that the app is added, and a few links are displayed under the message. Use them to specify certain settings for the app.

**Provide consumer URL and audience URL:**

8. Click the **Configurations** link. The **Configurations** page for the new app is displayed.
9. In the **ACS (Consumer) URL Validator** and **ACS (Consumer) URL** boxes, provide the consumer URL that you generated for the Directory Manager client Wizard. See the [Generate Consumer and Audience URLs for OneLogin](/docs/directorymanager/11.2/authenticate/asserviceprovider/onelogin/generateurls.md) topic.
10. In the **Audience** box, provide the audience URL that you generated for the Directory Manager client Wizard.

**Specify attribute for user authentication:**

11. Click the **Parameters** link at the top.
12. On the **Parameters** page, Email is already set as the entity ID. It authenticates users who sign in to Directory Manager using the OneLogin single sign-on option. Leave all settings at their defaults.

**Configure SSO settings:**

13. Click the **SSO** link at the top.
14. In the **SAML Signature Algorithm** list on the **SSO** page, select SHA-256.
15. The page also displays the Issuer URL and the endpoint URLs for both the post and redirect methods. You must provide the Issuer URL and the SAML 2.0 Endpoint (HTTP) URL when you configure the OneLogin provider in Directory Manager. Copy and paste them into a file, preferably a text file, to save them.

**Define users:**

16. Click the **Access** link at the top. The **Policy** list displays any policies that you might have configured for users. You can select a policy to enforce it.
17. Click the **Users** link at the top. To define and manage users, see the [Define Users in OneLogin](#define-users-in-onelogin) topic.
18. Click **Save**.

### Download the OneLogin metadata file

You can download a metadata file from OneLogin and import it into Directory Manager. The import configures the OneLogin provider in Directory Manager.

**To download the file:**

1. On the OneLogin Home page, click **More Actions** in the top right corner and select **SAML Metadata**. This downloads the OneLogin metadata file to your machine.
2. For convenience, either copy the file to your desktop or save its location, so that you can locate it for import into Directory Manager.

   Importing the metadata file brings in all the configurations for the OneLogin identity provider in Directory Manager.

### Define users in OneLogin

You must define users in OneLogin. Only these users can authenticate on the Directory Manager portal Wizard using OneLogin. See the [Sign In to Directory Manager Using OneLogin](/docs/directorymanager/11.2/authenticate/asserviceprovider/onelogin/signin.md) topic.

**To define a user:**

1. In OneLogin, click **Users** in the ribbon at the top. The **All Users** page is displayed.
2. Click the **New User** button.
3. On the **New User** page, create a new user, for example, Leo Ferguson. Enter the required information for this user and click **Save User** to create the user.

   A message confirms that the user is created, and a few links are displayed under the message. Use them to specify certain settings for the user.

   Notice that a user name is specified but no password. You specify the password later.

4. Click the **Authentication** link.
5. On the **Authentication** page, ensure OneLogin is selected in the **Authenticated By** dropdown list.
6. In the **User Security Policy** dropdown list, select Default policy.
7. Click the **Applications** link.
8. On the **Applications** page, click the plus sign to specify the application that the user (Leo Ferguson in this example) can sign in to.
9. On the **Assign New Login** dialog box, use the **Select Application** dropdown list to select the app that you created for Directory Manager in OneLogin. Then click **Continue**.
10. Another dialog box opens to display the user's email. You provided this email while creating the user. Click **Save**.
11. Back on the **Applications** page, click **Save User**.
12. Update the user's password in OneLogin. Click the **User Info** link. Then click **More Actions** and select Change Password.
13. On the **Change Password** dialog box, specify a new password for the user and click **Update**.
14. Click **Save User**.
