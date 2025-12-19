---
title: "Administration"
description: "Administration"
sidebar_position: 60
---

# Administration

## Sessions

Via the menu item **Sessions**, all users connected to the database can be displayed. This page is
purely informative in character and thus no configurations can be made here.

![installation_with_parameters_120](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/administration/installation_with_parameters_120.webp)

The session view starts in the currently active module in a separate tab.

#### Locked users

All currently locked users can also be retrieved. There are two scenarios here:

1. User name correct, password incorrect: The user name is displayed
2. User name incorrect: The client is displayed

In addition, the number of attempted logins and the length of time that the user was locked in each
case can be seen.

![installation_with_parameters_121](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/administration/installation_with_parameters_121.webp)

#### Default password rules

Password rules can be defined for both user passwords and also for WebViewer exports that then need
to be fulfilled. In the following example, a user password must correspond to the “default password”
rule in order to be valid

![Standard password rule](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/administration/installation_with_parameters_122-en_677x129.webp)

#### Relevant right

There is a separate option for defining the password rules for named passwords.

**User right**

- Can configure standard password rules
