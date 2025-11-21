---
description: >-
  Describes how to modify permissions on the Active Directory Deleted Objects
  container so non-administrator accounts (used by Netwrix Auditor) can view
  deleted objects on Windows 2000/Server 2003 domain controllers.
keywords:
  - Deleted Objects
  - DSACLS
  - ADAM
  - Active Directory
  - permissions
  - Netwrix Auditor
  - Deleted Objects container
  - ADAM Administration Tools
products:
  - auditor
visibility: public
sidebar_label: Object Deletion does not show up in alerts and rep
tags: []
title: "Object Deletion does not show up in alerts and reports when running Netwrix Auditor under non-admin account"
knowledge_article_id: kA00g000000H9YECA0
---

# Object Deletion does not show up in alerts and reports when running Netwrix Auditor under non-admin account

You are running Netwrix Auditor under a non-admin account in domain controllers running Windows 2000 and Windows Server 2003 and object deletion does not show up in reports and alerts.

## Background

When an Active Directory object is deleted, its image stays in the `Deleted Objects` container for a specified time. Due to this feature other domain controllers that are replicating changes become aware of the deletion. By default, only `System` account and members of `Administrators` group can view the contents of this container.

This article describes how to modify the permissions on the deleted objects container.

You may have to modify permissions on the Deleted Objects container if the following conditions are true:

- You have enterprise applications or services that bind to Active Directory with a non-System account or a non-Administrator account
- These enterprise applications or services poll directory for changes

## Resolution

To modify permissions on the Deleted Objects container so that non-administrators can view this container, use the `DSACLS.exe` program. The `DSACLS.exe` program is included in Active Directory Application Mode (ADAM) Administration Tools.

### Obtain and install the ADAM Administration Tools

To obtain and install the ADAM Administration Tools, perform the following steps:

1. Download the ADAM retail package. This file is available for download from the Microsoft Download Center, please follow this link : http://www.microsoft.com/downloads/details.aspx?FamilyId=9688F8B9-1034-4EF6-A3E5-2A2A57B5C8E4&amp;displaylang=en;

   **Note:** This version of the ADAM Administration Tools is an upgrade from the version in the Windows Server 2003 Support Tools. This version of the ADAM Administration Tools is supported by Microsoft Windows Server 2003, Standard Edition; Microsoft Windows Server 2003, Enterprise Edition; Microsoft Windows Server 2003, Datacenter Edition; and Microsoft Windows XP Professional. On Microsoft Windows Server 2008 this tool is already installed.

2. Double-click `Adamsetup.exe` program to start the Active Directory Application Mode Setup Wizard.
3. Select ADAM administration tools only, and then click Next.
4. Proceed with the wizard.

### Modify permissions on the Deleted Objects container

After you have installed the ADAM Administration Tools, you can modify the permissions on the deleted objects container. To do this, perform the following steps:

1. Log on with a user account that is a member of the **Domain Admins** group.
2. Click **Start -> All Programms -> ADAM** and then click **ADAM Tools Command Prompt.**
3. At the command prompt, type a command similar to the following example:

```bat
dsacls "CN=Deleted Objects,DC=Contoso,DC=com" /takeownership
```

   Note:

   - When you type this command, use the name of the deleted objects container for your domain.
   - Each domain in the forest will have its own deleted objects container.

   Output that is similar to the following example should be displayed:

```text
Owner: ContosoDomain Admins
                  Group: NT AUTHORITYSYSTEM
Access list:
{This object is protected from inheriting permissions from the parent}
Allow BUILTINAdministrators      SPECIAL ACCESS
                                LIST CONTENTS
                                READ PROPERTY
Allow NT AUTHORITYSYSTEM   SPECIAL ACCESS
                                DELETE
                                READ PERMISSONS
                                WRITE PERMISSIONS
                                CHANGE OWNERSHIP
                                CREATE CHILD
                                DELETE CHILD
                                LIST CONTENTS
                                WRITE SELF
                                WRITE PROPERTY
                                READ PROPERTY
The command completed successfully
```

4. To grant a security principal permission to view the objects in the deleted objects container, type a command that is similar to the following example:

```bat
dsacls "CN=Deleted Objects,DC=Contoso,DC=com" /g CONTOSOEricLang:LCRP
```

   Output that is similar to the following example should be displayed:

```text
Owner: CONTOSODomain Admins
Group: NT AUTHORITYSYSTEM

Access list:
{This object is protected from inheriting permissions from the parent}
Allow BUILTINAdministrators       SPECIAL ACCESS
                                 LIST CONTENTS
                                 READ PROPERTY
Allow NT AUTHORITYSYSTEM    SPECIAL ACCESS
                                 DELETE
                                 READ PERMISSONS
                                 WRITE PERMISSIONS
                                 CHANGE OWNERSHIP
                                 CREATE CHILD
                                 DELETE CHILD
                                 LIST CONTENTS
                                 WRITE SELF
                                 WRITE PROPERTY
                                 READ PROPERTY
Allow CONTOSOEricLang           SPECIAL ACCESS
                                 LIST CONTENTS
                                 READ PROPERTY

The command completed successfully
```

Explanation: In this example, the user "CONTOSOEricLang" has been granted List Contents and Read Property permissions on the deleted objects container in the "CONTOSO" domain. These permissions let this user view the contents of the deleted objects container, but do not let this user make any changes to objects in the container. These permissions are equivalent to the default permissions that are granted to the Administrators group. By default, only the System account has permission to modify objects in the deleted objects container.
