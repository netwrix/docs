---
title: "Advanced settings"
description: "Advanced settings"
sidebar_position: 40
---

# Advanced settings

## What are advanced settings?

Global standard default values are specified in the advanced settings.

![advanced settings](/images/passwordsecure/9.1/configuration/server_manager/main_menu/installation_with_parameters_263-en.webp)

#### Database server

The database server stored here is used as a default value when rebuilding databases. There are 2
modes:

**Simple mode**

In simple mode, the path to the database server including the user and the associated password can
be specified. You may use the service user for this purpose.

**Extended mode**

In extended mode, the connection string can be specified, which contains both the server, the user
and the password

**SMTP server**

By configuring the SMTP server you define all settings for emails, which the server should send, eg
via the notification system. At the final save, the connection is directly tested for functionality.
The “Save SMTP settings” button becomes active only after a change has been made.

**Log forwarding configuration**

Here you can define the settings which logs will be forwarded via mail
