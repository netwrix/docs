---
title: "Add Support for a Portal"
description: "Add Support for a Portal"
sidebar_position: 60
---

# Add Support for a Portal

Portals include a **Contact** link and a **Help** icon on their web interface. The **Contact** link
launches an email application to send an email to a user (such as administrator) or group (such as
helpdesk) for inquiries or feedback. The **Help** icon launches the online help for the portal in a
new browser window. Both links are customizable, and their target email address or web address can
be changed.

## Update the Support Email Address

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **GroupID Support** under **Server Settings**; the **GroupID Support** page is displayed.
4. In the **Support/GroupID Administrator's Email** box, update the email address of the group or
   user responsible for responding to requests and inquiries from portal users.  
   This email address is mapped to the **Contact** link in the portal.
5. Click **Save**.

## Change the Help URL for a Portal

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **GroupID Support** under **Server Settings**; the **GroupID Support** page is displayed.
4. In the **Help URL** box, update the URL of the portal help pages, where portal users can find
   support content or report their problems. This URL is mapped to the **Help** icon in the portal.
5. Enable the **Netwrix Help** toggle button if the help URL points to the portal help published by
   Netwrix. For Directory Manager, this URL is as:  
   https://helpcenter.netwrix.com/category/directorymanager

    Disable the **Netwrix Help** toggle button if the help URL points to help pages other than
    Netwrix help, such as when it points to your company’s internal help pages.

6. Click **Save**.

## View the Client ID Assigned to a Portal

Every Directory Manager client (such as Management Shell and a Directory Manager portal) is
registered with a unique ID in the database, known as client ID. This client ID is required while
integrating a third-party single sign-on solution that support the SAML standard, into Directory
Manager via any of its clients.

**To view the client ID for a portal:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **GroupID Support** under **Server Settings**; the **GroupID Support** page is displayed.  
   The **Client ID** box displays the client ID assigned to the portal. It is read-only and can be
   copied for use.
