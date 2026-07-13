---
description: >-
  Troubleshoot failed logins to the Netwrix Change Tracker web console when
  users cannot authenticate with Active Directory credentials. This article
  explains how to read hubservice-log.txt entries, interpret
  AcceptSecurityContext error codes, and resolve common issues.
keywords:
  - failed login
  - Active Directory
  - AD Login
  - AcceptSecurityContext
  - hubservice-log.txt
  - Netwrix Change Tracker
  - LDAP
  - Err.exe
  - authentication
products:
  - changetracker
knowledge_article_id: ka04u000000QmlOAAS
sidebar_label: Failed Login Using AD Credentials
tags: [kb, troubleshooting-and-errors]
title: Failed Login Using AD Credentials
---

# Failed Login Using AD Credentials

## Symptom

The following circumstances are present in your environemnt: 
- A user configured with an `AD Login` on the Netwrix Change Tracker web console cannot log in using their Active Directory domain credentials. 
- The Netwrix Change Tracker `hubservice-log.txt` file contains an `AcceptSecurityContext` error entry recorded when the login attempt reached the AD server.

## Cause

Active Directory rejected the authentication request. Common reasons include incorrect credentials, a disabled or locked account, logon-hour or workstation restrictions on the account, or an expired password. The specific reason is indicated by the `AcceptSecurityContext` data code in the `hubservice-log.txt` entry.

## Resolution

### Locate and Review the Hub Service Log

If a user cannot log in to the Netwrix Change Tracker server using their domain login credentials, Netwrix Change Tracker logs the response from the AD server. These logs help you identify where the issue lies. The log that contains this information is the Netwrix Change Tracker `hubservice-log.txt` file. You can find this log in the following locations:

- Windows Installation: `C:\inetpub\wwwroot\Change Tracker Generation 7 Hub\log`
- Linux Installation: `/opt/nnt/hubservice/log`

After an unsuccessful login, review the contents of the log. You may see entries that look like the following example:

```text
2018-01-01 00:00:00,000 [35] ERROR NNT.Hub.Service.Authentication.CustomCredentialsAuthProvider - AD Login failure for: administrator
Message: The username or password is incorrect.
Extended Message: 8009030C
LdapErr: DSID-0C090579
Comment: AcceptSecurityContext error - data 531 - v3839
System.DirectoryServices.DirectoryServicesCOMException (0x8007052E): The user name or password is incorrect.

at System.DirectoryServices.DirectoryEntry.Bind(Boolean throwIfFail)
at System.DirectoryServices.DirectoryEntry.Bind()
at System.DirectoryServices.DirectoryEntry.get_NativeObject()
at NNT.Hub.Service.Authentication.CustomCredentialsAuthProvider.LoginActiveDirectoryInternal(String ldapPath, String user, String password) in C:\TeamCity\buildAgent\work\5e46fbf5785c9042\Agent\NNT.Hub.Service\Authentication\CustomCredentialsAuthProvider.cs:line 279
```

### Identify the Error Code

To help identify why the user cannot log in, review the line that states the `AcceptSecurityContext` error, in particular the number that follows. From the preceding example log, the error and number received in this scenario was:

```text
Comment: AcceptSecurityContext error - data 531 - v3839
```

Using the information listed in the following table, you can see what each error code means and what steps you can take to resolve the issue:

| Code | Description | Resolution |
|---|---|---|
| `Data 525` | The user could not be found | Ensure the correct username has been specified for the bind account |
| `Data 52e` | The credentials (username and password) are invalid | Ensure the credentials are correct, and that you are using the correct server |
| `Data 530` | The user is not permitted to logon at this time | Remove any Log on Hours from the user's "Account" tab in Active Directory |
| `Data 531` | The user is not permitted to logon at this workstation | Allow the application server as a permitted log on workstation from the user's "Account" tab in Active Directory |
| `Data 532` | The user's password has expired | Reset the user's password. If necessary, update your application(s) with the new password |
| `Data 533` | The user's account has been disabled | Enable the user account in Active Directory |
| `Data 701` | The user's account has expired | Ensure that "Never" is set as the account expiration option in Active Directory |
| `Data 773` | The user account must have its password reset | Reset the user's password. If necessary, update your application(s) with the new password |
| `Data 775` | The user account is locked | Unlock the user account from the user's "Account" tab in Active Directory |

### Look Up an Error Code Not Listed

If you find that the error code you receive is not included in the preceding list, you can download the [Microsoft Error Code Look-up application ⸱ Microsoft 🡥](https://www.microsoft.com/en-us/download/details.aspx?id=100432) to troubleshoot further.

After the application has been downloaded, run it, extract the files as instructed, and then follow these steps:

1. Open a **Command Prompt** (ensure that you run this as an administrator).
2. Browse to the folder where the files were extracted. Example: `cd C:\Err`
3. Run the `Err.exe` along with the data error code you receive. Example: `Err.exe 528`
4. Review the output to obtain an error message description.

<!-- Image removed: screenshot of Err.exe output showing the AD error code description -->
