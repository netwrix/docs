---
title: "How to save passwords"
description: "How to save passwords"
sidebar_position: 20
---

# How to save passwords

This chapter describes how to store passwords via add-on.

**CAUTION:** You can only save passwords in server mode!

## New access data

With the setup and login via server mode, the access data can now be added automatically. When
visiting a website whose credentials have not yet been stored in Netwrix Password Secure, you get
automatically asked whether they should be created.

![new password detected](/images/passwordsecure/9.2/configuration/browseradd-ons/how_to_save_passwords/addon-create-password-en.webp)

By confirming, you will be directly forwarded to the Web Application and registered there. If there
are less fields in the deposited or selected form than in the login mask, the missing fields are
automatically created as web form fields by default.

![WebClient prefilled](/images/passwordsecure/9.2/configuration/browseradd-ons/how_to_save_passwords/webclient-prefilled-form-en.webp)

Known access data

If you log in to a login screen with changed access data, you can update this automatically. To do
this, log on to the login screen of the changed page as usual. Thereupon a message appears that new
access data has been recognized. Now you can optionally decide to create a new dataset or update an
already known dataset.

![data was recognized](/images/passwordsecure/9.2/configuration/browseradd-ons/how_to_save_passwords/installation_with_parameters_151-en.webp)

- **Save password**: The password will be exchanged without opening the Web Application.
- **check changes**: The Web Application is opened and you are logged in. The previous password has
  been replaced by the new one. However, the storage must be carried out manually.

![data was recognized](/images/passwordsecure/9.2/configuration/browseradd-ons/how_to_save_passwords/installation_with_parameters_152-en.webp)

The following prerequisites apply so that a data record is considered to already exist:

- The URL must be identical.
- The user name must be identical.
- The entry must be made by the add-on and the change must only affect the password.
