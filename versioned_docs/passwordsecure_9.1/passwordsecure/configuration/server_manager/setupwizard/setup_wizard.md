# Setup wizard

## What is the setup wizard?

The setup wizard contains all relevant settings for setting up Netwrix Password Secure. The
individual points can also be changed later on. Separate sections are available for each.

#### Defining the administrator password

The first step is to define the authentication password for the Server Manager. The initial password
is “admin”. A new password needs to be entered during startup – this new password should be securely
and properly documented. It can be subsequently changed in the
[General settings](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/main_menu/general_settings.md).

![setup-wizard-ac-en](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/setupwizard/setup-wizard-ac-en.png)

NOTE: The initial password is “admin”.

#### License settings

The second step is to complete the configuration for successively connecting to the licence server.
This step can also be carried out later “in the
[License settings](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/main_menu/license_settings.md)

![setup-wizard-ac-2-en](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/setupwizard/setup-wizard-ac-2-en.png)

“license.passwordsafe.de” should be entered in the field “Licence server”. The other access data
(user name and password for the licence server will be sent to you by email).

If necessary, access data for a possible proxy can also be issued – otherwise the proxy in the
operating system will be used. You can then select and activate the required license by clicking on
the corresponding button.

#### Database server

The configuration of the database server is also part of the
[Advanced settings](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/main_menu/advanced_settings.md)
and can also be edited there later on.

![setup-wizard-ac-3-en](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/setupwizard/setup-wizard-ac-3-en.png)

The database server must be specified along with the associated SQL instance. For simplicity, you
can copy the server name from the login window of the SQL server.

The user that will be used to create the database on the SQL Server is also specified. The user
therefore needs **dbCreator** rights. Alternatively, you can use the service user for this purpose.
The “Advanced” button allows you to specify a **Connection String.**

#### SMTP server

The last step is to configure the SMTP server via which all emails are sent. This is also part of
the
[Advanced settings](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/main_menu/advanced_settings.md)
should it be necessary to make changes later on.

![setup-wizard-ac-4-en](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/setupwizard/setup-wizard-ac-4-en.png)

Once the data has been entered and successfully tested, the wizard can be completed by clicking on
“Finish”.

Security notes

As soon as the setup wizard has been completed, two security notes will be displayed in the
**Status**

module that need to be confirmed.

**CAUTION:** It is recommended that you only confirm the security notes when the corresponding point
has actually been carried out. It is absolutely essential to ensure that regular
[Backup management](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/main_menu/backup_settings/backup_management/backup_management.md)
are created and the
[Certificates](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/certificates.md)
are backed up.
