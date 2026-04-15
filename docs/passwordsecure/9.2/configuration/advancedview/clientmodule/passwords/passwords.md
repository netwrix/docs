---
title: "Passwords"
description: "Passwords"
sidebar_position: 10
---

# Passwords

## Passwords overview

In Netwrix Password Secure v8, the data record with the passwords represents the central data
object. The Passwords module provides administrators and users with central access to the passwords
to handling this sensitive data that requires protection. Search filters in
combination with color-highlighted tags enable very focussed work. Various approaches help apply the desired permissions to objects. Furthermore, the ergonomic structure of the module
helps all users to use Netwrix Password Secure in an efficient and targeted manner.

![Password modul](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/passwords/passwords_1-en.webp)

## Prerequisite

The following user right is required for adding new passwords:

- **Can add new passwords**

## Module-specific ribbon functions

The ribbon offers access to all possible actions relevant to the situation at all times. Especially
within the "Passwords" module, the ribbon plays a key role due to the numerous module-specific
functions. General information on the subject of the ribbon is available in the relevant section.
The following sections explain the module-specific ribbon functions.

![ribbon functions](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/passwords/passwords_2-en.webp)

### New

- **New password**: New passwords can be added via this icon in the ribbon, via the context menu
  that is accessed using the right mouse button and via the shortcut (Ctrl + N). The next step is to
  select a suitable form.
- **Open**: Opens the object marked in list view and provides further information about the record
  in the reading pane.
- **Delete**: Deletes the object marked in list view. A log file entry is created (see logbook).
- **Reveal**: The function **Reveal** applies to all records that have a password field. The
  passwords in the reading pane will be revealed. In the example, the passwords have been revealed
  and can be hidden again with the **Hide** button.

![hide password](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/passwords/passwords_3-en.webp)

### Actions

- **Notifications**: Defining notifications enables a constant flow of information about any type of
  interaction. Notifications are configured in the module designed for this purpose.
- **Duplicate**: Duplicating creates an exact copy of the record in a new tab.
- **Move**: Moves the record marked in list view to another organisational structure.
- **Toggle** **Favorite**: The selected record is marked as a favorite. you can switch
  between all records and favorites at any time.
- **Quick view**: A modal window opens for the selected record for 15 seconds and displays all
  available information **including the value of the password**.
- Notifications: A list of all configured notifications

### Permissions

- **Permissions**: Use the dropdown menu to set both password permissions and also form
  field permissions. This method only allows the manual setting of permissions for data (see

    authorization concept)

- **Password masking**: Masking passwords that need to be protected from unauthorized users is an
  important feature of the security concept in Netwrix Password Secure.
- **Seal**: The multi-eye principle in Netwrix Password Secure is covered in its own section. Seals.

### Clipboard

The clipboard is a key element in the ribbon. This only exists in the "Passwords" module. **Clicking
on the desired form field for a record in the ribbon** will copy it to the clipboard.

![Clipboard](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/passwords/passwords_4-en.webp)

The message in the style of the "Balloon Tips" in Windows shows that the password has now been saved
in the clipboard for 300 seconds. (Note: the time until the clipboard is cleared is 60 seconds by
default. In the present case, this has been adjusted via the user settings.)

### Start

Conveniently working with passwords is only possible via the efficient usage of automated accesses
via RDP, SSH, general Windows applications or websites. This makes it possible to dispense with
(unsecure) entries via "copy & paste".

- **Open web page**: If a URL is saved in the record, use this menu option to directly open
  it.
- **Applications**: If applications have been linked to records, they can be directly opened via the
  "start menu".

### Extras

- **Create external link**: This option creates an external link for the record marked in list view.
  A number of different options can be selected:

![external link](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/passwords/passwords_5-en.webp)

:::warning
If several sessions are opened on a client, an external link is always called in the
first session.
:::

- **History**: This icon opens the history for those records selected in list view in a new tab. Due
  to the comprehensive recording of historical versions of passwords, it is now possible to compare
  several versions with one another.
- **Print**: Use this option to open the print function.
- **Export**: you can export all the selected records and also the data defined by the
  filter to a .csv file.
- **Change form**: you can change the form used for individual records. "Mapping" of the
  previous form fields can be directly completed in the process.
- **Settings**: The password settings are described in a separate section.

:::note
The password module is based on the module of the same name in the Web Application. Both
modules have a different scope and design. However, they are almost identical to use.
:::
