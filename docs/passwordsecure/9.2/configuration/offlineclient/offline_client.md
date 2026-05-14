---
Title: "Offline Add-on"
Description: "Offline Add-on"
Sidebar_position: 90
---

# Offline Add-on

## Offline Add-on overview

The Offline Add-on lets you work without an active connection to the Netwrix Password Secure
Server. If the corresponding setting has been configured
([Setup and sync](/docs/passwordsecure/9.2/configuration/offlineclient/setup_and_sync.md)), the local copy of the server database will be
Automatically synchronized according to freely definable cycles. This ensures that you can always
Use a (relatively) up-to-date version of the database offline.

Facts

- “Microsoft SqlServer Compact 4.0.8876.1” is used for creating offline databases
- The database is encrypted using AES-128 or SHA-256. A so-called “platform default” is used for
  This purpose
- In addition, RSA encryption processes are used
- For more details, see the [Microsoft SQL Server Compact documentation](https://technet.microsoft.com/en-us/library/gg592949(v=sql.110).aspx)

#### Installation

The Offline Add-on is automatically installed together with the main client. No database profiles
Need to be created – this task is performed by the client during the initial synchronization,
Together with the creation of the offline database.

#### Operation

Operation of the Offline Add-on is generally based on the
[Operation and setup](/docs/passwordsecure/9.2/configuration/servermanager/operation_and_setup_admin_client.md).
Since the Offline Add-on only has a limited range of functions, the following must be taken into
Account with regards to its operation:

- There is no dashboard
- Only the password module is available
- The filter isn't available. Records are found using the
  [Search](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/search.md)
- The automatic login data entry can be performed via the
  [Autofill Add-on](/docs/passwordsecure/9.2/configuration/autofilladdon/autofill_add-on.md), independently of the Offline Add-on

![Offline Client](/images/passwordsecure/9.2/configuration/offlineclient/installation_with_parameters_264-en.webp)

#### Synchronised data

[Seals](/docs/passwordsecure/9.2/configuration/advancedview/permissionconceptandprotective/protectivemechanisms/seals/seals.md)
Enhance the security concept in Netwrix Password Secure to include a double-check principle that can
Be defined in fine detail. This means that releases for protected information are linked to the
Positive authentication of one or more users. It isn't possible to issue these releases
When the server isn't connected. For this reason, sealed records aren't synchronized and thus do
Not form part of offline databases.

Otherwise, all records for which the user has the **export right** are synchronised.

Records with **password masking** are adopted into the offline database and can be used as normal.
