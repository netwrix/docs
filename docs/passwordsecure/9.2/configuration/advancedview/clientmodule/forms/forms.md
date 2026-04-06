---
Title: "Forms"
Description: "Forms"
Sidebar_position: 60
---

# Forms

## Forms overview

When creating a new data record, it is always indispensable to query all relevant data for the
Intended application. In this context, **Forms** represent templates for the information which have
To be stored. The manageability of existing forms primarily ensures the completeness of the data
Which have to be stored. Nevertheless, their use as an effective filter criterion isn't to be
Ignored. Forms have a lasting impact on working withNetwrix Password Secure v8 and must be managed
And maintained with the necessary care by the administration.

![form module](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_1-en.webp)

## Relevant rights

The following options are required to add new forms.

### User right

- Can add new forms
- Display form module

## Standard forms

Netwrix Password Secure is supplied with a series of standard forms – these should generally cover
All standard requirements. It is still possible to adapt the standard forms to your
Individual requirements.

![forms](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_2-em.webp)

The associated preview for the form selected in
[List view](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/list_view.md) appears in the
[Reading pane](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/reading_pane.md). Both the field name and also
The field type are visible.

## Creating new forms

The wizard for creating new forms can be started via the ribbon, the keyboard shortcut "Ctrl + N" or
Also the context menu that is accessed using the right mouse button. The same mechanisms can now be
Used to create new form fields within the wizard. Depending on the selected field type, other
Options are available in the **field settings** section. The following example explains this using
The example of the field type "Password". The sequence in which form fields are requested when
Creating new records corresponds to the sequence within the form. This can be adapted using the
Relevant buttons in the ribbon.

![Creating new forms](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_3-en.webp)

The following field settings thus appear for the field type "Password": "Mandatory field, reveal
Only with reason, check only generated passwords and password policy". These can now be defined as
Desired. (**Note**: you can select
[Password rules](/docs/passwordsecure/9.2/configuration/advancedview/mainmenufc/extras/password_rules.md) within the field settings;
They are defined as part of the options in the main menu)

:::warning
If a form has been created, it can then be selected for use when creating new records.
The prerequisite is that the logged-in user has at least read rights to the form.
:::

## Permissions for forms

In the same way as for other objects (records, roles, documents,…), permissions can also be granted
For forms. On the one hand, this ensures that not everyone can edit existing forms, while on the
Other hand, it lets you make forms available to selective groups. This ensures that clarity is
Maintained and that users aren't confronted with information that is irrelevant to them. The form
"Credit cards" may be relevant within the accounting department but administrators don't generally
Need to use it.

## Configuring the info field

Every record displays other information underneath the obligatory name of the record in list view.
In the following example, the user name is also displayed in addition to the name of the password.
The name of the form is displayed in between in a blue font.

![Configuring the info field](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_4-en.webp)

The name of the record (192.168.150.236) and the form (password) can't be adjusted – these are
Always displayed. The user (Administrator) that is still saved for the record is 
Displayed. This can be configured in the info field for the form. It is thus possible to separately
Define for each form what information for a record can be directly seen in list view. In the form
Module, the info field is configured by opening the form which has to be edited in editing mode by
Double clicking on it and then pressing the \*Configure info field” button in the ribbon.

![Configuring the info field](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_5-en.webp)

This will open a separate tab that lets you design the info section via drag & drop. The
Fields that are available on the right can be "dragged" onto the configuration window on the left.
In the following example, "Start RDP session2 will be made visible in the info section, whereby only
The word "RDP" is assigned a function – namely to start the RDP manager. A preview is shown in the
Top section.

![preview form](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_6-en.webp)

The info field for the form is now updated. It is now possible to start the RDP session directly in
The RDP session.

![updated form](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_7-en.webp)

:::note
The **forms module** is based on the
[Web Application](/docs/passwordsecure/9.2/configuration/webapplication/web_application.md) module of the same name. Both modules
Have a different scope and design but are almost identical to use.
:::

## Standard form

There are two possible ways to define a standard form.

### Via the “standard form” user setting

![settings form](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_8-en.webp)

### Via the form selection

![default form](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/forms/forms_9-en.webp)
