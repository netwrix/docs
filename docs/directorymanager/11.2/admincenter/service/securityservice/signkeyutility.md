---
title: "Directory Manager Signing Key Utility"
description: "Use the Signing Key Utility to generate, update, export, and import a customer-specific signing key for Directory Manager and its schedules."
sidebar_position: 30
keywords:
  - Signing Key Utility
  - ADV-2025-004
  - SigningKeyUtility.exe
  - customer-specific signing key
  - update schedules
---

# Directory Manager Signing Key Utility

Netwrix created this utility to remediate the vulnerability described in Netwrix security advisory [ADV-2025-004](https://security.netwrix.com/Advisories/ADV-2025-004). The utility generates a new customer-specific signing key for the application to use. For more information, see the [Generate a signing key](#generate-a-signing-key) section.

After you generate the customer-specific signing key, your existing schedules stop working because their authentication mechanism is no longer valid. You must also update the authentication mechanism for schedules. For more information, see the [Update schedules](#update-schedules) section.

If you run multiple instances of Directory Manager for load balancing and high availability, you can export the newly generated signing key and import it to other Directory Manager instances. For more information, see the following sections:

- [Export a signing key](#export-a-signing-key)
- [Import a signing key](#import-a-signing-key)

## Download the utility

You can download the Netwrix Directory Manager (formerly GroupID) Signing Key Utility from the following URLs:

- Pre v11.1 (2.1, 2.2, 2.3, 2.4)

  [Signing Key Utility 11.0.0 download](https://releases.netwrix.com/products/groupid/11.0/groupid-Signing-Key-Utility-11.0.0.zip)

- For v11.1

  [Signing Key Utility 11.1.0 download](https://releases.netwrix.com/products/groupid/11.1/groupid-Signing-Key-Utility-11.1.0.zip)

Your browser downloads the file into a folder based on its download settings. Unzip the file into a folder.

## Generate a signing key

Use the Netwrix Directory Manager (formerly GroupID) Signing Key Utility to generate a new signing key.

:::info
Generate the new signing key on your Directory Manager server.
:::

To generate a new signing key:

1. At the Windows Command prompt, go to the folder that contains the utility.
2. Enter the following command at the prompt:

   ```
   SigningKeyUtility.exe GenerateSigningKey -u “<DB username>” -s “<SQLServer name>” -d “<DB name>” -i
   ```

3. Provide the SQL Server password for authentication.

The command takes these parameters:

- `-u`: The username of the SQL Server where your database exists.
- `-s`: The name of the SQL Server.
- `-d`: The name of the database you use with Directory Manager.
- `-i`: Use this parameter if you are using SQL authentication. If you are using Windows authentication, ignore this argument.

## Update schedules

This command updates the signing key information in all the existing schedules for each identity store, except the Microsoft Entra ID store.

```
SigningKeyUtility.exe UpdateSchedulers -u “<DB username>” -s “<SQLServer name>” -d “<DB name>” -i
```

**Parameters**

Use the same parameters given in the [Generate a signing key](#generate-a-signing-key) section.

## Export a signing key

If you use multiple instances of Directory Manager, export the newly generated signing key to the other instances. Enter the following command at the Windows Command prompt to export the signing key in .pfx encrypted format with a password:

```
SigningKeyUtility.exe ExportSigningKey -o “<Folder location for signingkey export>”
```

**Parameters**

- `-o`: The folder location where the utility exports the signing key.

This command generates a password for the encrypted signing key. Copy it and store it securely for later use. The utility saves the encrypted signing key in the specified folder.

## Import a signing key

Copy the newly generated signing key to the required Directory Manager instance. Enter the following command at the Windows Command prompt to import the encrypted .pfx signing key:

```
SigningKeyUtility.exe ImportSigningKey -n “<Folder location of encryption key>” -p “<Password of encryption key>” -u “<DB username>” -s “<SQLServer name>” -d “<DB name>” -i
```

Provide the password for SQL Server authentication.

**Parameters**

- `-n`: The folder location to import the encrypted signing key from.
- `-p`: The password to decrypt the signing key.
- Use the same parameters given in the [Generate a signing key](#generate-a-signing-key) section.
