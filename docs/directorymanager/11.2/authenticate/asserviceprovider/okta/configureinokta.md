---
title: "Configure Directory Manager in Okta for SSO"
description: "Create the Directory Manager SAML app in Okta, download the Okta metadata file, and set up the users who can sign in."
keywords:
  - Directory Manager Okta app
  - Okta SAML 2.0 app
  - Okta metadata file
  - Okta single sign-on
  - Okta user assignment
sidebar_position: 20
---

# Configure Directory Manager in Okta for SSO

To configure Directory Manager in Okta:

1. Create an app for Directory Manager in Okta.
2. Download the Okta metadata file.
3. Configure users in Okta.

## Create the Directory Manager app in Okta

1. Launch Okta and sign in. The Okta dashboard appears.
2. Click **Applications** in the ribbon at the top.
3. On the **Applications** page, click **Add Application**.
4. On the **Add Application** page, which shows some preconfigured options, click **Create New App**.
5. In the **Create a New Application Integration** dialog box, select the **SAML 2.0** option button and click **Create**.
6. On the **General Settings** tab of the **Create SAML Integration** page, enter a user-friendly name for the app in the **App name** box. For example, Directory Manager Okta Sign-On.
7. Use the **App Logo** option to upload a logo for the Directory Manager app. The logo appears on the Okta dashboard. When a user signs in to Okta, they're redirected to the dashboard that lists Directory Manager and other applications for single sign-on.
8. Click **Next**.
9. On the **Configure SAML** tab of the **Create SAML Integration** page, enter the consumer URL and audience URL that you generated for the Directory Manager client in the **Single sign on
    URL** and **Audience URI (SP Entity ID)** boxes respectively. See the [Generate Consumer and Audience URLs for Okta](/docs/directorymanager/11.2/authenticate/asserviceprovider/okta/generateurls.md) topic.
10. Leave the **Default Relay State** field blank to not specify any default relay state.
11. Leave the **Name ID format** field set to **Unspecified**.
12. In the **Application username** list, ensure **Okta username** is selected. Then only users defined in Okta can authenticate on the Directory Manager portal Wizard using the Okta single sign-on option. See the [Configure users in Okta](#configure-users-in-okta) section.
13. Click **Show Advanced Settings**.
14. Skip the **Attribute Statements** area and leave the default selections. This area specifies an attribute that identifies users who sign in to Directory Manager using Okta. The Okta provider authenticates users on the basis of the username.
15. Click **Next**.
16. On the **Feedback** tab of the **Create SAML Integration** page, select **This is a
    software vendor app. Integrate this app with Okta** and click **Finish**.

Okta adds the Directory Manager Okta SSO app and displays the **Sign-On** page.

## Download the Okta metadata file

You can download a metadata file from Okta and import it into Directory Manager to configure the Okta provider in Directory Manager.

**To download the file:**

1. On the **Sign-On** page, go to the **Sign On** tab. In the **Sign On Methods** area, click the **Identity Provider metadata** link.
2. In the **Opening metadata** dialog box, ensure the **Save File** option is selected and click **OK**. The file downloads and the **Library** dialog box opens, showing the downloaded file.
3. Right-click the metadata file and select **Open Containing Folder** on the shortcut menu.
4. In the next dialog box, which displays the file at its download location, copy the file to your desktop for simplicity, or save its location. You need the file to import it into Directory Manager.

## Configure users in Okta

You must define users in Okta. Only these users can authenticate on the Directory Manager portal Wizard using Okta. See the [Sign In to Directory Manager Using Okta](/docs/directorymanager/11.2/authenticate/asserviceprovider/okta/signin.md) topic.

You can define users in Okta in several ways, such as:

- Add users manually.
- Use a CSV file to import users.
- Use the Active Directory tool provided by Okta, which syncs Active Directory users to Okta.

With all of these, if Okta finds an existing user in its own database, it links the Directory Manager application to the existing account. If not, it creates a new Okta account for the user. For new users, Okta generates a password and sends it to them by email.

**To configure users:**

1. Click the **People** tab on the **Sign-On** page.
2. Define the users in Okta. Use the Okta page that matches your method:
   - To create users manually, see the [Add users manually](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-add-users.htm) page.
   - To import users into Okta, see the [Import users](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-import-users-main.htm) page.
   - To use an Active Directory tool for adding users, see the [Import Active Directory users on demand](https://help.okta.com/en-us/content/topics/directory/ad-agent-import-users-on-demand.htm) page.
3. After defining users, you must manually add these users. On the **People** tab, click **Assign to People**.
4. In the **Assign Okta Sign-On to People** dialog box, click **Assign** for a user so that they can authenticate on the Directory Manager portal Wizard using Okta.
5. On the next page of the dialog box, the **User Name** field shows the user name. Remove the domain after the user name, which is the part starting with "@". The user signs in to the Wizard portal through Okta with the remaining user name. Click **Save and Go Back**.
6. Repeat steps 4 and 5 for all the required users. Then click **Done** on the **Assign Okta
   Sign-On to People** dialog box. The users are displayed on the **People** page.
7. Activate the user accounts. Click the **Directory** link in the ribbon at the top.
8. On the **Directory** page, click the **Activate** link for the required user.
9. In the **Activate Person** dialog box, click **Activate User**.

You have configured users within the Okta provider.
