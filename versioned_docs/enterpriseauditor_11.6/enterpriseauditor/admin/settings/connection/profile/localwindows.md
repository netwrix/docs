# Local Windows Account for User Credentials

The information in this topic applies to **Select Account Type** > **Local Windows Account** in the
User Credentials window.

![User Credentials - Local Windows Account](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/connection/profile/localwindowsaccount.png)

The required credentials for the Local Windows Account are:

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

        **NOTE:** If using the CyberArk option, then the associated Connection Profile can only have
        one user credential in it. Multiple user credentials are not supported with the CyberArk
        integration when using local Windows accounts.

- Password – Type the password
- Confirm – Re-type the password
