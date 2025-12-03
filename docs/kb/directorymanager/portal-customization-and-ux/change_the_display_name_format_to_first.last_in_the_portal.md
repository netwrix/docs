---
description: >-
  This article explains how to change the display name format in the Netwrix Directory Manager portal from Last, First to First.Last by modifying the portal's JavaScript file.
keywords:
  - display name format
  - Netwrix Directory Manager
  - JavaScript customization
sidebar_label: Change Display Name Format
tags:
  - portal-customization-and-ux
title: "Change the Display Name Format to First.Last in the Portal"
knowledge_article_id: kA0Qk0000002QKzKAM
products:
  - directory-manager
---

# Change the Display Name Format to First.Last in the Portal

## Applies To

Directory Manager 11

## Overview

By default, Netwrix Directory Manager (formerly GroupID) formats a user's display name as **Last, First** during user creation in the portal. Some organizations may require the **First.Last** format instead. You can change this by modifying the portal’s JavaScript file. This article explains how to make this customization.

![Default display name format in Directory Manager portal](./../0-images/servlet_image_0945c0342a68.png)

## Instructions

> **NOTE:** Test this change in a non-production environment first. Always back up original files before making any modifications.

### Modify the Display Name Format in the Portal

1. Navigate to the following directory on your Directory Manager server:  
   `C:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\<PortalName>\Web\wwwroot\Scripts`
   
2. Locate the following files:
   - `CreateWizard.js`
   - `CreateWizard.min.js`

3. Rename `CreateWizard.min.js` to `CreateWizard.min.backup.js`.

4. Open `CreateWizard.js` in **Notepad++** or another text editor.

5. Search for the function named `getFullName`, or go directly to **line 392** in Notepad++.

6. Replace the existing function:
   ```javascript
   function getFullName(firstNameText, lastNameText) {
       var comma = ",";
       if (firstNameText === "" || lastNameText === "") {
           comma = "";
       }
       return lastNameText + comma + firstNameText
   }
   ```
   with the following version:
   ```javascript
   function getFullName(firstNameText, lastNameText) {
       var comma = ".";
       if (firstNameText === "" || lastNameText === "") {
           comma = "";
       }
       return firstNameText + comma + lastNameText
   }
   ```

   ![Editing getFullName function in CreateWizard.js](./../0-images/servlet_image_5a9e2c271111.png)

7. Save the file.

8. Rename `CreateWizard.js` to `CreateWizard.min.js`.

9. Open **Command Prompt** as Administrator and run the following command:
   ```plaintext
   iisreset
   ```

10. After the IIS reset is complete, log in to the portal and create a new user. The **Display Name** will now appear in the **First.Last** format.

![Display Name in First.Last format in Directory Manager portal](./../0-images/servlet_image_f33ddc126856.png)