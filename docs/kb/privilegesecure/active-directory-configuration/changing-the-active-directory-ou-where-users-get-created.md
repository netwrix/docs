---
description: >-
  Shows how to change the Active Directory OU where Netwrix Privilege Secure
  creates users by editing the appsettings.json file in the ProgramData
  directory.
keywords:
  - Active Directory
  - OU
  - appsettings.json
  - ProgramData
  - Netwrix Privilege Secure
  - ManagedOUs
  - PAM
  - Login Account Template
  - Postgres
products:
  - privilege-secure-access-management
sidebar_label: Changing the Active Directory OU Where Users Get C
tags: []
title: "Changing the Active Directory OU Where Users Get Created"
knowledge_article_id: kA04u0000000HQsCAM
---

# Changing the Active Directory OU Where Users Get Created

## Summary

The Active Directory OU where Netwrix Privilege Secure users get created can be customized by modifying the `appsettings.json` file in the product's ProgramData directory.

## Instructions

1. Open the following file in Notepad. (The drive letter may differ depending on your installation.)

   ```
   C:\ProgramData\Stealthbits\PAM\WebService\appsettings.json
   ```

2. Locate and change the following value. If a `ManagedOUs` setting does not exist, add it prior to the final closing brace and append a comma to the preceding line:

   ```json
   "ManagedOUs": {
       "Users": "SbPAM Users"
   }
   ```

3. Example: if the desired OU's Distinguished Name (DN) is “OU=Prod,OU=PAM,OU=SbPAM Users,DC=lab,DC=local”, change `"SbPAM Users"` in the example above to `"Prod,OU=PAM,OU=SbPAM Users"`.

   NOTE: The leading `OU=` and trailing `DC=` segments are dropped.

   After the change, the setting will look like this:

   ```json
   "ManagedOUs": {
       "Users": "Prod,OU=PAM,OU=SbPAM Users"
   }
   ```

4. Save the `appsettings.json` file.

After this change, users created or managed by Netwrix Privilege Secure will be created or managed in the newly specified Active Directory OU.

NOTE: Activities that are run with Managed login accounts, and were run before this configuration change was made, may still create user account objects in the SbPAM Users OU. To circumvent this behavior, change the **Login Account Template** on the activity. This will prevent the activity from referencing any historical Postgres data referring to the SbPAM Users OU.
