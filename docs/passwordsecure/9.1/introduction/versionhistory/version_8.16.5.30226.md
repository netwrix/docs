---
title: "Version 8.16.5.30226"
description: "Version 8.16.5.30226"
sidebar_position: 100
---

# Version 8.16.5.30226

## New

#### FullClient

- The option "Change password at next login" is now activated by default.

#### Web Application

- The option "Change password at next login" is now activated by default.

#### Server

- Improved Entra ID role synchronization.

## Fixed

#### FullClient

- After restoring a user, the authorizations for roles are now correct again.
- Incorrect file extensions no longer cause the client to crash.
- An error when starting the client has been fixed.
- Changing the permissions of your own user is now possible again.

#### Web Application

- After restoring a user, the authorizations for roles are now correct again.
- The tag/image management window can be closed if no changes have been made.
- Adding a new organisational unit from within structure view works again.
- The website can be reloaded without any problems if you are logged in with an Entra ID user.

#### Server

- If a password cannot be shared, this now also applies to the password fields.
- In the emergency web viewer revealing passwords with umlauts now works correctly.

#### Server Manager

- The redirection rule for IIS web.config works again with LetsEncrypt certificates.

#### SSO Client

- The automatic input into the application with the mouse for left-handers works again.

#### LightClient in the Web View

- The website can be reloaded without any problems if you are logged in with an Entra ID user.
- A tag will be created when using predefined rights.
