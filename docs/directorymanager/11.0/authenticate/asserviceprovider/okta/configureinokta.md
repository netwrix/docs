---
title: "Configure GroupID in Okta for SSO"
description: "Create the GroupID SAML app in Okta, download the Okta metadata file, and set up the users who can sign in."
keywords:
  - GroupID Okta app
  - Okta SAML 2.0 app
  - Okta metadata file
  - Okta single sign-on
  - Okta user assignment
sidebar_position: 20
---

# Configure GroupID in Okta for SSO

To configure GroupID in Okta, follow these steps:

- Create an app for GroupID in Okta
- Download the Okta metadata file
- Configure users in Okta

## Create the GroupID App in Okta

1. Launch Okta and sign in.
2. After you sign in, the Okta dashboard is displayed.
3. To configure the GroupID application in Okta, click **Applications** in the ribbon at
   the top.
4. On the **Applications** page, click the **Add Application** button.
5. The **Add Application** page displays some preconfigured options. Click the **Create New App**
   button.
6. On the **Create a New Application Integration** dialog box, select the **SAML 2.0** option button
   and click **Create**.
7. On the **General Settings** tab of the **Create SAML Integration** page, provide a user-friendly
   name for the app (for example, GroupID Okta Sign-On) in the **App name** box.
8. Use the **App Logo** option to upload a logo for the GroupID app. This logo is
   displayed on the Okta dashboard. When a user signs in to Okta, they're redirected to the
   dashboard that has GroupID and other applications listed for single sign-on.
9. Click **Next**.
10. On the **Configure SAML** tab of the **Create SAML Integration** page, provide the consumer URL
    and audience URL that you generated for the GroupID client in the **Single sign on
    URL** and **Audience URI (SP Entity ID)** boxes respectively. See the
    [Generate Consumer and Audience URLs for Okta](/docs/directorymanager/11.0/authenticate/asserviceprovider/okta/generateurls.md)
    topic.
11. Leave the **Default Relay State** field blank to not specify any default relay state.
12. Leave the **Name ID format** field set to _Unspecified_.
13. In the **Application username** list, ensure _Okta username_ is selected. This means that only
    users defined in Okta can authenticate on the GroupID portal _Wizard_ using the Okta
    single sign-on option. See the [Configure Users in Okta](#configure-users-in-okta) section.
14. Click **Show Advanced Settings**.
15. The **Attribute Statements** area is for specifying an attribute that is used to authenticate
    users who sign in to GroupID using Okta. This attribute is meant for user
    identification.  
    Skip this section and leave the default selections. The Okta provider authenticates users on
    the basis of the username.
16. Click **Next**.
<!-- vale Netwrix.FirstPerson = NO -->
17. On the **Feedback** tab of the **Create SAML Integration** page, select the option, **I’m a
    software vendor. I’d like to integrate my app with Okta** and click **Finish**.
<!-- vale Netwrix.FirstPerson = YES -->

The GroupID Okta SSO app is now added in Okta, and the **Sign-On** page is displayed.

## Download the Okta Metadata File

You can download a metadata file from Okta and import it into GroupID to configure the
Okta provider in GroupID.

**To download the file:**

1. On the **Sign-On** page, go to the **Sign On** tab. In the **Sign On Methods** area, click the
   **Identity Provider metadata** link.
2. On the **Opening metadata** dialog box, ensure the **Save File** option is selected and click
   **OK**. The file downloads and the **Library** dialog box opens, showing the downloaded file.
3. Right-click the metadata file and select the **Open Containing Folder** option on the shortcut
   menu.
4. The next dialog box displays the file at its download location. Either copy the file to your
   desktop for simplicity or save its location, so that you can locate it for import into
   GroupID.

## Configure Users in Okta

You must define users in Okta. Only these users can authenticate on the GroupID portal
_Wizard_ using Okta. See the
[Sign In to GroupID Using Okta](/docs/directorymanager/11.0/authenticate/asserviceprovider/okta/signin.md)
topic.

There are multiple ways to define users in Okta, such as:

- Add users manually
- Use a CSV file to import users
- Use the Active Directory tool provided by Okta (that syncs Active Directory users to Okta)

For all of these, if Okta finds an existing user in its own database, it links the GroupID
application to the existing account. If not, it creates a new Okta account for the user. For new
users, Okta generates a password and sends it to them by email.

**To configure users:**

1. Click the **People** tab on the **Sign-On** page.
2. To create users manually, visit the
   [Add users manually](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-add-users.htm)
   page.  
   To import users into Okta, visit the
   [Import users](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-import-users-main.htm)
   page.  
   To use an Active Directory tool for adding users, see the
   [Import Active Directory users on demand](https://help.okta.com/en-us/content/topics/directory/ad-agent-import-users-on-demand.htm)
   page.
3. After defining users, you must manually add these users. On the **People** tab, click the
   **Assign to People** button.
4. On the **Assign Okta Sign-On to People** dialog box, click **Assign** for a user so that they can
   authenticate on the GroupID portal _Wizard_ using Okta.
5. The next page on the dialog box displays the **User Name** field populated with the user name.
   Remove the domain after the user name, which is the part starting with "@". The user signs in to
   the _Wizard_ portal through Okta with the remaining user name.  
   Click **Save and Go Back**.
6. Repeat steps 4 and 5 for all the required users and then click **Done** on the **Assign Okta
   Sign-On to People** dialog box. The users are displayed on the **People** page.
7. The next step is to activate the user accounts. Click the **Directory** link in the ribbon at the
   top.
8. On the **Directory** page, click the **Activate** link for the required user.
9. On the **Activate Person** dialog box, click **Activate User**.  
   You have successfully configured users within the Okta provider.
