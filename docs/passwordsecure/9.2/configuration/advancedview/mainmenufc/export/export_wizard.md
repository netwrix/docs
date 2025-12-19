---
title: "Export wizard"
description: "Export wizard"
sidebar_position: 20
---

# Export wizard

## What export wizards are there?

There are a total of four different export wizards.

![installation_with_parameters_74_548x283](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_74_548x283.webp)

The functionality of these wizards only differs based on the data to be exported. A distinction is
made between passwords, organisational structures, forms and applications. **As all four wizards are
handled in the same way, the following section will only describe the password export wizard.** The
remaining three wizards function in the same way.

## What is the password export wizard?

This wizard allows records to be exported in standard.csv format. In contrast to the
[HTML WebViewer export](/docs/passwordsecure/9.2/configuration/advancedview/mainmenufc/export/html_webviewer_export.md), the resulting file is
not protected by a password. It goes without saying that this feature must be used carefully.

## Starting the password export wizard

The export wizard can be accessed in a variety of different ways:

- **Starting via Main menu/Extras:** If the wizard is opened, the export will include all passwords
  for which the registered user has the required permissions. If the user is an administrator with
  permissions for all records, the export will include all passwords in the database.
- **Starting via the ribbon:** The export can also be started via the
  [Ribbon](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/ribbon.md) in the
  [Passwords](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/passwords/passwords.md) module.

![Export ribbon](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_75-en.webp)

The password export wizard can be started via the ribbon in two ways. **Selected passwords** exports
only those passwords marked in list view, whereby **Passwords based on the filter** uses the
currently defined filter settings as the criteria.

The wizard

A diverse range of variables for the export and the storage location can be defined in the wizard. A
corresponding preview is also provided.

![installation_with_parameters_76](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_76.webp)

Once the wizard has been completed, the desired export is created and saved to the defined storage
location.

**CAUTION:** It is important to once again point out the sensitive nature of this export function
that could have critical consequences from a security perspective. As the required permissions for
this export are generally only granted to users/roles with higher positions in the hierarchy, this
subject is even more relevant from a security perspective: It is possible to export all passwords
for which a user has the required permissions. Administrators could thus (intentionally or
unintentionally) cause more damage per se.
