---
title: "Configure Directory Manager in PingOne"
description: "Create a SAML application in PingOne, map user attributes, and add users so they can sign in to Directory Manager with single sign-on."
keywords:
  - PingOne SAML application
  - PingOne attribute mapping
  - PingOne SSO attribute mapping
  - add users in PingOne
  - Directory Manager app in PingOne
sidebar_position: 20
---

# Configure Directory Manager in PingOne

To configure Directory Manager in PingOne, follow these steps:

- Create an app for Directory Manager in PingOne
- Download the PingOne metadata file
- Map attributes for user authentication
- Configure users in PingOne

## Create the Directory Manager Application in PingOne

1. Launch the PingOne Identity dashboard.
2. Click **Applications** in the ribbon at the top.
3. On the **My Applications** tab of the **Applications** page, click **Add Application** and select
   the **New SAML Application** option to configure the Directory Manager client _Wizard_ in
   PingOne.  
   The new application is added and displayed in the **My Applications** area. The **Application
   Details** section is also displayed.
4. In the **Application Name** box, provide a name for the application.
5. In the **Application Description** box, provide a description. For example, you can specify the
   Directory Manager client with which you want to set up PingOne for single sign-on.
6. Select an option from the **Category** dropdown list, for example, Information Technology.
7. You can choose to upload an image for the Directory Manager app. This image displays on
   the PingOne dashboard. When a user signs in to PingOne, the system redirects them to the
   dashboard that lists Directory Manager and other applications for single sign-on.
8. Click the **Continue to Next Step** button.
9. On the next page, ensure the **SAML configuration available** tile is selected.
10. Use the metadata file you generated for the _Wizard_ portal in Directory Manager to configure
    certain settings on this page. See the
    [Generate the Metadata File](generatemetadata.md#generate-the-metadata-file) topic.  
    Click the **Select File** button next to **Upload Metadata**. Select the metadata file
    to upload it, which brings in the required settings to configure the Directory
    Manager client _Wizard_ in PingOne. For example, the **Entity ID** box is populated with the
    required URL.
11. In the **Application URL** box, copy the same URL as displayed in the **Assertion Consumer
    Service (ACS)** box.
12. Select the _Post_ option button for **Single Logout Binding Type**.
13. In the **Signing Algorithm** dropdown list, select _RSA_SHA256_.
14. Click the **Download** link next to **SAML Metadata** to download the metadata file from the
    PingOne identity provider.  
    When you create the PingOne provider in Directory Manager, you can import this file to bring in
    all the configurations for PingOne.
15. No further configurations are required on this page. Scroll down and click the **Continue to
    Next Step** button. The **SSO Attribute Mapping** area is displayed.

### Attribute Mapping in PingOne

Next, specify an attribute to authenticate users who sign in to Directory Manager using the
PingOne single sign-on facility. This attribute identifies users.

1. In the **SSO Attribute Mapping** area, click the **Add new attribute** button. A new row is
   displayed.
2. Click the **Advanced** button in this row. The **Advanced Attribute Options** dialog box is
   displayed.
3. In the **NameFormat** dropdown list, select the first option, that is, the one ending with
   _unspecified_.
4. Select or enter the Active Directory attribute you want to use for authentication in the
   **IDP Attribute Name or Literal Value** box. For example, _E-mail_. This attribute facilitates user
   identification.  
   To define users in PingOne, see the Configure Users in PingOne topic.
5. In the **Function** list, you can select the conversion methodology. For example, you can convert
   the first name or last name to upper case or lower case, or even use regular expressions. You can
   skip this step.
6. Click **Save** on the **Advanced Attribute Options** dialog box.
7. The specified attribute is displayed in the **Identity Bridge Attribute or Literal Value** box in
   the **SSO Attribute Mapping** area. Provide a user-friendly name for the attribute in the
   **Application Attribute** box.
8. To ensure attribute mapping is accurate, the email listed should be correct
   because E-mail is selected as the unique identifier.  
   Click the **Advanced** button in the row. The **Advanced Attribute Options** dialog box is
   displayed.
9. When you click _E-mail_ in the **IDP Attribute Name or Literal Value** box, a dropdown is
   displayed. Select the _Email_ option. With this option, users are authenticated with their email
   address. Click **Save**.
10. Back in the **SSO Attribute Mapping** area, click the **Save & Publish** button.
11. The configurations made in PingOne are displayed. Click **Finish**.  
    The new Directory Manager application you created in PingOne is displayed under **My
    Applications**.

### Configure Users in PingOne

You must define users in PingOne. These users are authenticated in Directory Manager based on
an attribute, as discussed in the Attribute Mapping in PingOne topic.

Only the users you define here can authenticate on the Directory Manager portal _Wizard_ using
PingOne. See the [Sign In to Directory Manager Using PingOne](/docs/directorymanager/11.2/authenticate/asserviceprovider/pingone/signin.md) topic.

**To configure users:**

1. In PingOne, click **Users** in the ribbon at the top. The **Users** page is displayed.
2. Click the **Add Users** button and select the **Create New User** option to create a user.
3. On the **User** page, specify a password in the **New Password** and **Confirm New Password**
   boxes.
4. Specify a user name in the **Username** box.  
   The user uses this user name and password for single sign-on to Directory Manager through
   PingOne.
5. Enter other details of the user, such as first name, last name, and email address.
6. Click **Save** to create the user.
