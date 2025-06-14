# Active Directory Account for User Credentials

If the account type selected on the User Credentials window is **Active Directory Account**, the
following information is required for the credential:

![User Credentials Window - Active Directory](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/connection/profile/activedirectoryaccount.png)

- Domain – Drop-down menu with available trusted domains will appear. Either type the short domain
  name in the textbox or select a domain from the menu.
- User name – Type the user name
- Password Storage – Choose the option for credential password storage:

    - Application – Uses the configured Profile Security setting as selected at the **Settings** >
      **Application** node. See the
      [Application](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/application/overview.md)
      topic for additional information.
    - CyberArk – Uses the CyberArk Enterprise Password Vault. See the
      [CyberArk Integration](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/connection/cyberarkintegration.md)
      topic for additional information. The password fields do not apply for CyberArk password
      storage.
    - Managed Service Account – Use previously configured MSA and gMSAs for authentication. The
      password fields are not applicable when this option is selected. See the
      [Group Managed Service Accounts (gMSA) Configuration](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/connection/gmsa.md)
      topic for additional information.

- Password – Type the password
- Confirm – Re-type the password
