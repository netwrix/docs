---
description: >-
  This article provides step-by-step instructions on how to customize the notification template in Netwrix Directory Manager v11.1.1 to remove the default footer from notifications.
keywords:
  - notification template
  - Directory Manager
  - customize footer
sidebar_label: Remove Footer from Notification Template
tags:
  - portal-customization-and-ux
title: "Customizing Notification Template to Remove Footer in Directory Manager V11.1.1"
knowledge_article_id: kA0Qk0000002WAHKA2
products:
  - directory-manager
---

# Customizing Notification Template to Remove Footer in Directory Manager V11.1.1

## Overview

This article provides step-by-step instructions on how to customize the notification template in Netwrix Directory Manager (formerly GroupID) v11.1.1 to remove the default footer from notifications.

## Instructions

1. Open the **Directory Manager Admin Center**.
2. Navigate to the **Notification Editor** and search for the notification template you want to customize.
3. Click on the **Edit** button to access the **Source Code** for the template.
4. In the **Source Code** tab, locate the following code. For ease, you can search for `<table align="center" width="600" style="border-collapse: collapse;">`. This code is typically located towards the end of the source code:

   ```html
   <table align="center" width="600" style="border-collapse: collapse;">
       <tr>
           <td style="padding: 40px 0px 20px 40px; color: #777777; font-size: 16px; font-family: Calibri, Myriad Pro, Verdana, sans-serif;">Please do not reply to this email.</td>
           <td style="text-align: right; padding: 15px 40px 0px 0px;"><img src="%FOOTER_IMAGE%" width="150px"></td>
       </tr>
       <tr>
           <td style="padding: 0px 0px 0px 40px; color: #777777; font-size: 16px; font-family: Calibri, Myriad Pro, Verdana, sans-serif;">Thank you.</td>
           <td style="font-size: 12px; font-family:Calibri, Myriad Pro, Verdana, sans-serif; color:#777777; font-style: italic; text-align: right; padding-right: 40px;">Powerful Group Management<br>Tools for Active Directory.</td>
       </tr>
       <tr>
           <td style="padding: 20px 0px 40px 40px;font-family:Calibri, Myriad Pro, Verdana, sans-serif; font-size: 16px; font-style: italic; color:#777777; font-weight: 600;">The Messaging Team.</td>
       </tr>
   </table>
   ```

5. Comment out the above code by adding `<!--` to the first line and `-->` to the last line. Alternatively, replace the code with the following commented-out version:

   ```html
   <!--
   <table align="center" width="600" style="border-collapse: collapse;">
       <tr>
           <td style="padding: 40px 0px 20px 40px; color: #777777; font-size: 16px; font-family: Calibri, Myriad Pro, Verdana, sans-serif;">Please do not reply to this email.</td>
           <td style="text-align: right; padding: 15px 40px 0px 0px;"><img src="%FOOTER_IMAGE%" width="150px"></td>
       </tr>
       <tr>
           <td style="padding: 0px 0px 0px 40px; color: #777777; font-size: 16px; font-family: Calibri, Myriad Pro, Verdana, sans-serif;">Thank you.</td>
           <td style="font-size: 12px; font-family:Calibri, Myriad Pro, Verdana, sans-serif; color:#777777; font-style: italic; text-align: right; padding-right: 40px;">Powerful Group Management<br>Tools for Active Directory.</td>
       </tr>
       <tr>
           <td style="padding: 20px 0px 40px 40px;font-family:Calibri, Myriad Pro, Verdana, sans-serif; font-size: 16px; font-style: italic; color:#777777; font-weight: 600;">The Messaging Team.</td>
       </tr>
   </table>
   -->
   ```

6. Save the changes and exit the **Notification Editor**.
7. Test the notification to ensure the footer has been successfully removed.

> **NOTE:** It is recommended to take a backup of the original source code before making any changes.