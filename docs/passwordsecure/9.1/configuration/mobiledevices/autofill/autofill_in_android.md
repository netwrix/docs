---
title: "Autofill in Android"
description: "Autofill in Android"
sidebar_position: 20
---

# Autofill in Android

With autofill, the credentials are transferred from the Netwrix Password Secure app directly to the
login screens. This works for websites in the browser as well as for other apps.

#### Requirements

For automatic registration, the service must be enabled in the User Help¹ and Show via other apps¹
Netwrix Password Secure App must be enabled.

#### Autofill

The login data is entered as soon as the app finds a corresponding mask on a web page or in an app.
In some masks the process starts automatically, in others it is necessary to type in the first
field.

There are two possible scenarios.

- The **Netwrix Password Secure app** displays all matching passwords. The user selects the desired
  password and the app enters it.
- Selection of a password in the Netwrix Password Secure App. This dialog opens automatically if no
  password is found.

**No password found**

If no password is found that matches the app or the website called up, the desired password must
first be selected.

**Exactly one password found**

If there is a data set that contains exactly the URL that is called up, the corresponding password
can be suggested. A simple click on the password is then sufficient to pass the data to the website
or app.

**Multiple passwords found**

If several matching passwords are found in the database, the desired one must be selected.

NOTE: Depending on the current state, it may be necessary to authenticate on the app before
selecting or confirming the password to be entered. The database then has to be unlocked via the
password or Touch ID first.
