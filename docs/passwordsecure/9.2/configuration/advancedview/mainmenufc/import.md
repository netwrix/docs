---
title: "Import"
description: "Import"
sidebar_position: 70
---

# Import

## What is an import?

If another password management tool was used before Netwrix Password Secure, these data can be
imported into Netwrix Password Secure. The formats .csv and especially Keepass (.xml) are supported.
Both variants can be set up in the import wizard, which is started via the Main menu/Import.

![Import](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/import/installation_with_parameters_57-en.webp)

## Requirements

Whether the user is permitted to import data is controlled by the corresponding
[User rights](/docs/passwordsecure/9.2/configuration/advancedview/mainmenufc/userrights/user_rights.md).

![installation_with_parameters_58](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/import/installation_with_parameters_58.webp)

## The import wizard

The wizard supports the import of data into Netwrix Password Secure in four steps.

Select type

![installation_with_parameters_59](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/import/installation_with_parameters_59.webp)

The first step is to define the file that is to be used for the import. It is only possible to
proceed to the second step when the defined type corresponds to the stated file to be imported. The
second step is the settings.

Settings

![installation_with_parameters_60](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/import/installation_with_parameters_60.webp)

1. The settings are used to firstly define the level in the hierarchy for saving the imported
   structure. As can be seen in the example, the import will take place in the main organisational
   unit. One of the existing organisational units can also be defined as a parent instance via the
   drop-down menu.
2. The slider defines whether the imported structures should be imported as an organisational unit
   or as a tag. If the slider is fully moved to the left, only tags are created. If it s moved to
   the right, all objects are imported as an organisational structure. In addition, every object can
   be configured separately via the context menu that is accessed using the right mouse button. It
   is also possible to ignore folders.

NOTE: No folders exist in Netwrix Password Secure. For this reason, it is necessary to define
whether a folder is saved as an organisational structure or as a tag during the import. The same
process is also used for the migration.

Assignment of the form fields

![installation_with_parameters_61](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/import/installation_with_parameters_61.webp)

The third step is to assign the forms from the file to be imported to already existing forms. As
form fields may also have different names, the assignment process must be carried out manually via
drag & drop. Depending on which form was selected on the top line, form fields from the list on the
right can now be assigned to the form fields to be imported via drag & drop. It is also possible to
create new forms.

Finish

![installation_with_parameters_62](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/import/installation_with_parameters_62.webp)

In the final step, the configured settings are summarised as a list of the objects to be imported.
The button “Finish” closes the wizard and starts the import.
