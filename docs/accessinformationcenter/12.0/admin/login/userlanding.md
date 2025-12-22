---
title: "User Landing Page"
description: "User Landing Page"
sidebar_position: 10
---

# User Landing Page

Role based access controls what interfaces users can see and where each user is directed upon login.

:::info
Send an email to your users. Let them know why you are implementing use of the
application, provide the URL, and explain how to login with their domain credentials and the
username format. See the [Enable Console Users](/docs/accessinformationcenter/12.0/admin/gettingstarted.md#enable-console-users) topic for
additional information.
:::


## Administrator Role

Users granted the Administrator role are directed to the Home page upon login with access to all
interfaces based on your organizations licensed features.

![Administrator user home page](/images/accessinformationcenter/12.0/admin/homeadmin.webp)

Administrators are the only ones with access to the Configuration interface through the **Configure
Console** link. The Manage Your Resources link is available if the logged in user is also assigned
ownership of a resource. The Manage Your Access link is available if the Self-Service Access
Requests workflow has been enabled.

### Security Team Role

Users granted the Security Team role are directed to the Home page upon login.

![Home page for Security Team role](/images/accessinformationcenter/12.0/admin/homesecurityteam.webp)

Available buttons are limited by the organization’s license. Security Team members only lack access
to the Configuration interface, which is only available to Administrators. The Manage Your Resources
link is available if the logged in user is also assigned ownership of a resource. The Manage Your
Access link is available if the Self-Service Access Requests workflow has been enabled.

## Reader Role

Users granted the Reader role are directed to the Home page upon login.

![Home page for Reader role](/images/accessinformationcenter/12.0/admin/homereader.webp)

These users only have access to the Resource Audit interfaces and Search feature. The Manage Your
Resources link is available if the logged in user is also assigned ownership of a resource. The
Manage Your Access link is available if the Self-Service Access Requests workflow has been enabled.

## Data Privacy Role

Users granted the Data Privacy role are directed to the Home page upon login.

![Home page for Data Privacy role](/images/accessinformationcenter/12.0/admin/homedataprivacy.webp)

These users only have access to the Search feature. The Manage Your Resources link is available if
the logged in user is also assigned ownership of a resource. The Manage Your Access link is
available if the Self-Service Access Requests workflow has been enabled.

## User Access Administrator Role

Users granted the User Access Administrator role are directed to the Console Access page in the
Configuration interface upon login.

![Home page for User Access Administrator role](/images/accessinformationcenter/12.0/admin/homeuseraccessadmin.webp)

These users only have access to the Console Access page.

## Owner Portal

Users assigned ownership of a resource but not granted a user role are directed to the Owner portal
upon login.

![Home page for Resource Owner with no assigned role](/images/accessinformationcenter/12.0/admin/homeresourceowner.webp)

Features available to owners is dependent upon the features enabled by the Owner Administrators.

## Your Access Portal

Users not granted a user role and not assigned resource ownership are directed to the Your Access
portal upon login if the Self-Service Access Requests workflow has been enabled for your
organization.

![Home page for user with no User Role or Resource Ownership](/images/accessinformationcenter/12.0/admin/homeyouraccess.webp)

Users can view current access, request access, and view request history.
