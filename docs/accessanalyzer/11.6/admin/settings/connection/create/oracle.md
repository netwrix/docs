---
title: "Oracle for User Credentials"
description: "Oracle for User Credentials"
sidebar_position: 90
---

# Oracle for User Credentials

The information in this section applies to Select Account Type > Oracle in the User Credentials
window.

![User Credentials - Oracle](/images/accessanalyzer/11.6/admin/settings/connection/profile/oracle.webp)

The required credentials for Oracle are:

- Domain – Field options are dependent upon the additional account type option selected:
    - Oracle Account – Domain is not a field for this type of credential
    - Windows account that Enterprise Auditor is run with – (Domain is not a field for this type of
      credential)
    - Active Directory – Drop-down menu with available trusted domains displays. Either type the
      short domain name in the textbox or select a domain from the menu.
- User name – Type the user name
    - This is not a field for the additional account type of Windows account that Enterprise Auditor
      is run with is selected
- Password Storage: Application – Uses the configured Profile Security setting as selected at the
  **Settings >** **Application** node
- Password – Type the password
    - This is not a field for the additional account type of Windows account that Enterprise Auditor
      is run with
- Confirm – Re-type the password
    - This is not a field for the additional account type of Windows account that Enterprise Auditor
      is run with
- Role – Specify an Oracle role, if desired. The drop-down menu provides a list of roles. Either
  type the role name in the textbox or select a role from the menu.
    - **NOTE:** When using a least privileged model for Oracle, **SYSDBA** must be selected for the
      Role.
- Additional Account type – Select radio button of the secondary account type from the list at the
  bottom of the window:
    - Oracle Account – Use an Oracle account for target host authentication
    - Windows account that Enterprise Auditor is run with – Use the account that launched the
      Enterprise Auditor application through the run-as security context
    - Active Directory – Use an Active Directory account for target host authentication

Selecting default from the list is the same as leaving the field blank.
