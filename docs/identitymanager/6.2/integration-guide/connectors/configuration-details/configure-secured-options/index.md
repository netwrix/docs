---
title: "Configure Secured Options"
description: "Configure Secured Options"
sidebar_position: 30
---

# Configure Secured Options

This guide shows how to configure secured options to ensure data security in a connection's
parameters.

## Overview

A connection's parameters fall into two categories: regular or secured options.

The particularity of secured options is that, once set, they will never again be shown to users.
Hence, extra care should be taken while specifying them.

There are several types of secured options: a simple field or multiple key-value fields.

## Configure a Secured Option

Configure a secured option by proceeding as follows:

1. Among a connection's parameters, identify the secured option:

    - for a simple field:

        ![AD creation](/images/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_adlogin_v603.webp)

    - for multiple key-value fields:

        ![SQL connection string](/images/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_keyvalue_v603.webp)

        Contrary to simple fields, multiple-key-value secured options are not restricted to a given
        property. They are arbitrary and can be set to anything.

2. Fill the field(s) and, if needed, click on the eye icon to make the content visible.

    ![Eye Icon](/images/identitymanager/user-guide/set-up/synchronization/iconeye_v600.svg)

    > For example, for a simple field in an AD connection, the **Login** and **Password** are by
    > default hidden with ??????:
    >
    > ![Login Secured Options Hidden](/images/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_adexample_v603.webp)
    >
    > ![Login Secured Options Revealed](/images/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_adexamplevisible_v603.webp)

    > For example, for multiple key-value fields in an SQL connection, some elements of the
    > connection string might be sensitive and need to be hidden:
    >
    > ![SQL connection string](/images/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_sqlexample1_v603.webp)
    >
    > In this example, the database name and the minimal pool size are secured options:
    >
    > ![SQL Secured option filled](/images/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_sqlexample2_v603.webp)

    > Another example of multiple key-value fields in a Powershell connection:
    >
    > ![Powershell Secured option hidden](/images/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_powershellexample_v603.webp)

3. Once saved, any secured option's value can no longer be seen. However, it can still be modified
   by deleting the value and re-specifying it.
