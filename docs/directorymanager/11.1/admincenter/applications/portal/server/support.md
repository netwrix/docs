---
title: "Configure Portal Support Email and Help URL"
description: "Change the Contact email address and Help URL of a Directory Manager portal, and find the client ID assigned to it."
keywords:
  - portal support email
  - portal help URL
  - Contact link
  - client ID
  - Admin Center portal settings
sidebar_position: 60
---

# Configure Portal Support Email and Help URL

Portals include a **Contact** link and a **Help** icon on their web interface. The **Contact** link
opens an email application to send an email to a user (such as an administrator) or a group (such as
a helpdesk) for inquiries or feedback. The **Help** icon opens the online help for the portal in a
new browser window. You can change the email address and the web address that these two items
target.

## Update the support email address

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal card displays its info. Each portal type has its own
   logo, so you can tell a standard Directory Manager portal from an SSPR portal.

2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Server Settings**, click **Directory Manager Support**. The **Directory Manager Support**
   page appears.
4. In the **Support/Directory Manager Administrator's Email** box, update the email address of the
   group or user who responds to requests and inquiries from portal users.

   This email address is mapped to the **Contact** link in the portal.

5. Click **Save**.

## Change the Help URL for a portal

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal card displays its info. Each portal type has its own
   logo, so you can tell a standard Directory Manager portal from an SSPR portal.

2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Server Settings**, click **Directory Manager Support**. The **Directory Manager Support**
   page appears.
4. In the **Help URL** box, update the URL of the portal help pages, where portal users can find
   support content or report their problems. This URL is mapped to the **Help** icon in the portal.
5. Enable the **Netwrix Help** toggle button if the help URL points to the portal help published by
   Netwrix. For Directory Manager, this URL is:

   https://helpcenter.netwrix.com/category/directorymanager

   Disable the **Netwrix Help** toggle button if the help URL points to other help pages, such as
   your company's internal help pages.

6. Click **Save**.

## View the client ID assigned to a portal

Every Directory Manager client, such as Management Shell or a Directory Manager portal, is
registered in the database with a unique ID known as the client ID. You need this client ID when you
integrate a third-party single sign-on solution that supports the SAML standard into Directory
Manager through any of its clients.

**To view the client ID for a portal:**

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal card displays its info. Each portal type has its own
   logo, so you can tell a standard Directory Manager portal from an SSPR portal.

2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Server Settings**, click **Directory Manager Support**. The **Directory Manager Support**
   page appears.

   The **Client ID** box displays the client ID assigned to the portal. It is read-only and can be
   copied for use.
