---
title: "Learning the applications"
description: "Learning the applications"
sidebar_position: 10
---

# Learning the applications

## Which applications need to be learned?

As already indicated in the previous section, RDP and SSH applications are completely embedded in
Netwrix Password Secure. These applications thus do not need to be specially learned. All other
applications in Windows need to be learned once.

## What does learning mean?

The record contains the user name and password. Learning involves defining the steps required. The
result is equivalent to a script that defines where precisely the login data should be entered. In
Netwrix Password Secure, the completed instructions themselves are also known as an "application".

## Relevant rights

The following options are required.

### User right

- Can add new RDP applications
- Can add new SSH applications
- Can add new SSO applications
- Can add new web applications

## Configuration

First, a new SSO application is created via the ribbon.

![new sso application](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/learning_the_applications/learning_the_applications_1-en.webp)

Various properties for the application can now be defined in the tab that opens. The fields **Window
title**, **Application** and **Application path** are not manually filled. This is done via the
**Create application** button in the ribbon:

![new sso application](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/learning_the_applications/learning_the_applications_2-en.webp)

A crosshair cursor now appears. It enables the actual "mapping" or assignment of the target fields.
You can see the field assignment for the user name below using a login to an SQL server as an
example. All of the other fields that should be automatically entered are assigned in the same way.
The process is always the same. You select the field that needs to be automatically filled and then
decide which information should be used to fill it.

![mapping fields](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/learning_the_applications/learning_the_applications_3-en.webp)

In parallel to the previous step, all of the already assigned fields will be displayed on the right
edge of the screen. In this example, the VMware vSphere Client has a total of 4 assigned fields: IP,
user name, password and clicking the button to subsequently confirm the login.

![connected fields](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/learning_the_applications/learning_the_applications_4-en.webp)

NOTE: "Graphical recognition:" The graphical recognition function provides additional protection. It
can be used to define other factors for the SSO. An area is defined that then serves as the output
for the comparison (e.g. for login masks with an image). In order to activate the graphical
recognition function, click on the eye at the top right after assigning the fields! The area that
will serve as the output point is then marked.

Once you have assigned all of the fields, you can exit the application process using the enter
button. The fields "Window title", "Application" and "Application path" mentioned at the beginning
are now automatically filled.

![filled fields](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/learning_the_applications/learning_the_applications_5-en.webp)

As you can see, the .exe file is directly referenced. If the application is saved to the same
storage location for all users, it can then also be accessed by all other users.

## Linking records with applications

In the
[Passwords](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/passwords/passwords.md),
the newly created application can now be directly linked. To do this, mark the record to be linked
and open the "Connect application" menu in the "Start" tab via the ribbon. This will open a list of
all the available applications. It is now possible here to link to the previously created
application "VMware".

![connect application with record](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/learning_the_applications/learning_the_applications_6-en.webp)

When the link has been established, this application can then be directly started via the ribbon in
future. Pressing the button directly opens the linked application.

![start application](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/applications/learning_the_applications/learning_the_applications_7-en.webp)

:::warning
With respect to permissions, applications are subject to the same rules as for
passwords, roles or documents. It is possible to separately define which group of users is permitted
to use each application.

:::
