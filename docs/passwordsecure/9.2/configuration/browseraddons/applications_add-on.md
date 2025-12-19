---
title: "Applications"
description: "Applications"
sidebar_position: 10
---

# Applications

## What are applications?

Data can be entered on many websites without further configuration. The website is scanned in order
to find data entry fields in which the user name and password can then be entered. No further steps
are thus necessary. For websites where data cannot be entered directly, it is necessary to create an
application manually. These applications correspond to working guidelines that precisely define
which information should be entered into which target field. The full script that describes the
assignment is called an “**application**”.

![registration with and without application](/images/passwordsecure/9.2/configuration/browseradd-ons/applications/installation_with_parameters_142-en.webp)

The diagram starts with the user navigating to a website. The application server is then checked to
see whether a record has been saved for this website for which the currently registered user also
has the required permissions. If this is the case, the information required for the login is sent to
the Browser Extension in encrypted form. The password is only decrypted in the add- on shortly
before it is entered. There are two ways in which the information is entered: **Data entry without
application** and **Data entry with application**.

Data entry without application

The data entry without application process is sufficient for most websites because the fields can be
directly assigned (mapping). The system checks in the background whether a login mask has been found
for any websites visited. The URL is now used to check if there are any records in the linked
websites that would fit the page. It is only necessary for the hostname including the domain suffix,
such as .de or .com, to match. The data are then entered. In this case, the user name is transmitted
to the first user name field that can be found on the page. The password is also entered into the
first password field found on the page. If automatic login has been activated in the settings, this
is also carried out by clicking the login button.

#### Data entry with application

It is not possible to automatically recognise the fields that must be filled on some websites. An
application needs to be created in these cases. If more than two fields need to be transferred, it
is also necessary to create an application. In this context, “application” means instructions that
are used to enter information into the fields. It thus assigns fields in the record to the
associated fields on the website. This mapping process only needs to be configured once. The
applications is responsible for entering data in the fields on the website from then on. In the
following example, the data entry process is carried out from the client. Naturally, this is also
possible via [Browser Add-ons](/docs/passwordsecure/9.2/configuration/browseraddons/browser_add-ons.md). The procedure remains the same.

![installation_with_parameters_143](/images/passwordsecure/9.2/configuration/browseradd-ons/applications/installation_with_parameters_143.webp)

The URL is checked to see whether the record matches the web page. It is only necessary for the
hostname including the domain suffix (“.de” or “.com”) to match.

## Creating applications

**CAUTION:** The user right Can add new web applications is required in order to create applications

If the login mask on a website cannot be automatically completed, it is necessary to manually create
an application. To create an application, the desired website is first called up. The add-on is then
started via the relevant icon. The menu item “Create application\* can be found here

![create application](/images/passwordsecure/9.2/configuration/browseradd-ons/applications/installation_with_parameters_144-en.webp)

A modal window now opens. The actual application is now created here.

![modal application window](/images/passwordsecure/9.2/configuration/browseradd-ons/applications/installation_with_parameters_145-en.webp)

The following options are available:

- **Advanced options** allows you to define a delay separately for each field when entering the
  data. This is sensible when the process of entering the data would otherwise not run smoothly on
  sluggish websites.
- The **Move** setting can be used to change the position of the modal window if it covers the login
  window

To capture, click on the first field to be filled on the website. It will be directly added to the
list in the modal window. For better identification, fields that belong together are marked in
colour.

![choosed application field](/images/passwordsecure/9.2/configuration/browseradd-ons/applications/installation_with_parameters_146-en.webp)

The field type (e.g. INPUT) and the field label are displayed in the field itself. In addition, an
action is proposed which fits the field type, such as e.g. entering the user name. The action can
naturally be adjusted if required. Once all fields have been captured, the system checks whether the
actions are correct. Finally, the application can be saved.

![example for a application](/images/passwordsecure/9.2/configuration/browseradd-ons/applications/installation_with_parameters_147-en.webp)

The saved application is now available for the user and can be used via the add-on.
