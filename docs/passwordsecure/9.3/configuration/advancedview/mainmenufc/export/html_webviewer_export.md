---
title: "HTML WebViewer export"
description: "HTML WebViewer export"
sidebar_position: 10
---

# HTML WebViewer export

## What is a HTML WebViewer export?

The **WebViewer** is an option inNetwrix Password Secure for exporting passwords in an encrypted
**HTML file**. The records are selected using the
[Filter](/docs/passwordsecure/9.3/configuration/advancedview/operationandsetup/filter/filter.md) function. The passwords for which the user
has the corresponding permissions are exported. They are displayed in a current browse that has
**JavaScript activated**.

## Data security

- Naturally, the HTML WebViewer file is **encrypted**
- The export of the file is protected using a corresponding
  [User rights](/docs/passwordsecure/9.3/configuration/advancedview/mainmenufc/userrights/user_rights.md)
- The user requires the **export right** for the passwords

## Required rights

The **export right for the WebViewer** is configured via the **user rights**:

User right

- Can export HTML WebViewer

The **export right** for the password is configured as normal via the ribbon:

![installation_with_parameters_65](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_65.webp)

## Exporting a HTML file

The **HTML file** is created on the user\*s client and started in the **Main menu** under **Export
WebViewer**.

![installation_with_parameters_66](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_66.webp)

The **HTML WebViewer Wizard** carries out the \* WebViewer export\*.

###### Create WebViewer

General information and notes about the export are displayed under **Create WebViewer**.

###### Settings

General information such as the **Name** and **Export path** for the **HTML file** can be entered
here.

**File name**: Freely selectable name

**Export path:** Storage location for the file on the client

**Time until logout**: Time in seconds for which the window remains open without any activity

**Standard value:** 60 seconds, user can define the time

Export **WebViewer** with **user password** or new freely **definable password**: You can decide
here whether to issue a new password for the export.

![installation_with_parameters_67](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_67.webp)

- WebViewer export with an Active Directory user

If an **Active Directory user** is carrying out the **WebViewer** export, a **password** needs to be
explicitly entered.

![installation_with_parameters_68](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_68.webp)

###### Export filter

The export filter works in the same way as the filters for the modules.

![installation_with_parameters_69](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_69.webp)

#### Finish

The information about the exported passwords is displayed in the **Finish** ribbon. Clicking on the
**Finish**

button will then create the **HTML** **file** in the export path and close the window.

![installation_with_parameters_70](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_70.webp)

A subsequent note provides you with information about the export process.

![installation_with_parameters_71](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_71.webp)

## Using the HTML WebViewer file

The **HTML file** is created in the export path and can be copied to a mobile data medium (USB
stick, external HDD, …). The **HTML file** can be opened in a standard browser and displays the
**Netwrix Password Secure – HTML WebViewer / Login** when started. The **database** and the **user
name** are predefined. The user \*password is used for the login.

**CAUTION:** The login mask is blocked for a period of time if the password is incorrectly entered!

1. Database: Predefined
2. User: Predefined
3. Password: Entered by the user

![Login HTML WebViewer](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_72-en.webp)

###### Overview

After logging in to Netwrix Password Secure, the overview page for the \*HTML- WebViewer \* with the
passwords is displayed.

NOTE: Use the password search function in the event of more than 20 passwords!

1. Displayoftherecords(max.20)
2. Detailedinformationontheselectedrecord
3. Search,logout,timeout
4. Copytoclipboard
5. Reveal

![Entry in HTML WebViewer](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_73-en.webp)

#### Closing the HTML WebViewer overview

You can log out by clicking on **Logout**. In the event of a longer period of inactivity, the user
will be **automatically logged out after a set period of time has expired (time until logout).**

NOTE: You have been logged out due to inactivity.

The browser will then show the **Netwrix Password Secure– HTML WebViewer / Login** again and also
the reason for being logged out. It is possible to log in again.
