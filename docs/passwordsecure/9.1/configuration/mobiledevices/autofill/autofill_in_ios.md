---
title: "Autofill in iOS"
description: "Autofill in iOS"
sidebar_position: 10
---

# Autofill in iOS

The most important comfort feature of the Netwrix Password Secure app is probably the autofill. With
autofill, the credentials from the Netwrix Password Secure app are transferred directly to the login
screens. This works both with websites in the browser and with other apps.

#### Requirements

In order to ensure automatic registration, a few prerequisites must be met. First of all, the
automatic registration must be set up in the settings. If the **iOS keychain** is not needed, it
should be deactivated. This makes handling a bit easier. Finally, a database connection must exist
and access to passwords must be possible.

#### Autofill

**Autofill** always occurs when a login mask is found. No matter whether this is in an app or on a
website. For some login masks, the auto-enrollment process starts automatically. For other masks,
you have to type once into the first field. The autofill itself can be divided into three different
scenarios.

**Dialog**

Depending on the configuration and scenario, the dialog for entry can have different
characteristics:

- First, one or more passwords are displayed that match the current page or app. These can be
  selected and entered with a click.
- It is also possible to open the dialog for selecting a password. If no password is found, this
  dialog is displayed directly.
- Finally, the iOS keychain can also be opened. If this function is not needed, it can be
  deactivated. The corresponding option will then no longer be offered.

**No password found**

If no password is found that matches the app or the website, the desired password must first be
selected.

**Exact password found**

If there is a data record that contains exactly the URL that is called up, the corresponding
password can be suggested. A simple click on the password is then sufficient to pass the data to the
website or app.

**Several passwords found**

If several matching passwords are found in the database, the desired one must be selected.

NOTE: Depending on the current state, it may be necessary to authenticate to the app before
selecting or confirming of the password to be entered. The database then has to be unlocked via the
password, Touch ID or Face ID.
