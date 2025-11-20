---
title: "Applications"
description: "Applications"
sidebar_position: 80
---

# Applications

## What are applications?

Applications can be used to configure automated logins to various systems. Especially when combined
with various protective mechanisms, the company benefits in terms of security because complex
passwords are automated and entered in the login masks in concealed form. Various types are
available, such as Remote Desktop (**RDP**), Secure Shell (**SSH**), general applications (**SSO**)
and web applications. The Single Sign On Engine offers countless configuration options to enable
automatic logon to almost any kind of software.

![applications module](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_1-en.webp)

- Automatic logins to websites are covered by the
  [Autofill Add-on](/docs/passwordsecure/9.3/configuration/autofilladdon/autofill_add-on.md).

## The four types of applications

Netwrix Password Secure varies between four different types of applications: RDP, SSH, SSO and web
applications.

![new application](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_2-en.webp)

In terms of how they are handled, **RDP and SSH** applications can be covered together. Both types
of application can be (optionally) "embedded" in Netwrix Password Secure. The relevant session then
opens in its own tab in the [Reading pane](/docs/passwordsecure/9.3/configuration/advancedview/operationandsetup/reading_pane.md).
All other forms of automatic logins are summarized in the **SSO applications** and **web
applications** categories. How exactly these logins are created and used is covered in the next
section and in the web applications chapter. They include all forms of Windows login masks and also
applications for websites. In contrast to RDP and SSH applications, they cannot be started embedded
in Netwrix Password Secure but are instead opened as usual in their own window. These SSO
applications need to be defined in advance. In Netwrix Password Secure, this is also described as
[Learning the applications](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/applications/learningtheapplications/learning_the_applications.md). In contrast,
RDP and SSH can be both completely defined and also started within Netwrix Password Secure.

## RDP and SSH

A new RDP/SSH application can be created via the ribbon or also the context menu that is accessed
using the right mouse button. A corresponding form opens in each case where the variables for a
connection can be defined.

![new application](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_3-en.webp)

These variables also correspond precisely to those (using the example of RDP here) that can be
configured when creating an RDP connection via “mstsc”. Whether the connections should be started in
a tab, full screen mode or in a window can be defined in the field **"window mode"**.

## Working with RDP and SSH applications

If you have created e.g. an RDP connection, this can now also be directly started via the ribbon.
The connection to the desired session can be established via the icon **Establish RDP connection**.

![estabish RDP](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_4-en.webp)

Netwrix Password Secure now attempts to log in to the target system with the information available.
Data that are not saved in the form will be directly requested when opening the session. It is thus
also possible to only enter the IP address and/or the password after starting the Netwrix Password
Secure application. If all data has been retrieved, the RDP session will open in a tab – if so
defined (Window mode field in the application):

![RDP session](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_5-en.webp)

## Logging in via SSH certificates

It is also possible to complete the authentication process using SSH certificates. For this purpose,
the certificate is saved as a document in .ppk format. (It may be necessary to firstly approve this
file ending in the settings). The document is then linked to the record via the footer. The record
does not need to have a password. However, it is necessary for the record to be linked to a SSH
application.

## Linking records and applications

The application defines the requirements for the desired connection and also optionally for the
target system. By linking records with applications, the complete login process can be automated. If
the record now also supplies the user name and password, all of the information required for the
login is available. Applications and records are linked via the "Start" tab in the ribbon. If this
link to a record is established, a 1-click login to the target system is possible.

![linking RDP](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_6-en.webp)

The following example illustrates this process using an RDP connection:

![RDP Connection](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_7-en.webp)

A record can also be linked to multiple target systems in this manner. The user name and record are
supplied by the record, while all other information necessary for the login is supplied by the
different applications. In the following example, a record (user name and password) is linked to
multiple access points.

![multiple access points](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_8-en.webp)

This is generally a very common scenario. Nevertheless, it should be noted that accessing multiple
servers with one single password is questionable from a security standpoint. It is generally
recommended that a unique password is issued for every server/access point.

NOTE: It is possible to leave the **IP address** field empty in the application. If an **IP
address** field exists in the linked record then this address will be used. If there is also no IP
address in the record, a popup window will appear in which the desired IP address can be entered
manually.

Alternatively, it is possible to connect several records with one RDP connection. In this way, you
can combine different users with an RDP connection and register them straightforward.

![connect RDP sessions](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/applications_9-en.webp)
