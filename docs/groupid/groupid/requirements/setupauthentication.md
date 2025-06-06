# Authentication Modes

While setting up Directory Manager, you must select an authentication mode for connecting to SQL Server (that hosts the Directory Manager database). There are two possible modes:

- [SQL Server Authentication](#SQL-Server-Authentication)
- [Windows Authentication](#Windows-Authentication)

## SQL Server Authentication

It is recommended that you create a new SQL Server account for Directory Manager. You must add the account to the _db\_creator_ server role so that it can create and maintain the Directory Manager database.

The account must also be part of the _db\_owner_ database role, so that it can execute DDL (Data Definition Language) and DML (Data Manipulation Language) commands. However, unlike Windows Authentication mode setup, you do not need to add the account to the _db\_owner_ role because SQL Server _db\_creator_ is mapped to the _db\_owner_ database role by default.

NOTE: Note: For SQL Server 2016, 2017, 2019 and 2022 families, every SQL Server account is assigned the _public_ role. Therefore, the Directory Manager SQL account belongs to two server roles: _db\_creator_ and _public_.

To add the Directory Manager SQL account to the db\_creator role:

Step 1 – Launch SQL Server Management Console.

Step 2 – Create a new account for Directory Manager 11, if needed.

Step 3 – Connect to the server using your new Directory Manager SQL account.

Step 4 – Right-click the database server node and click __Properties__.

Step 5 – On the Properties dialog box, select the __Permissions__ page.

Step 6 – Scroll down on the Explicit tab to the Connect SQL permission and select the __Grant__ check box for it.

Step 7 – Click the __Effective__ tab. You should have the following permissions listed here:

- Connect SQL
- Create any database
- View any database

Step 8 – Click __OK__.

## Windows Authentication

Directory Manager works with SQL Server (which hosts the Directory Manager database) using the Windows Authentication mode in context of the account configured in GroupIDAppPool11 (when SQL Server is available locally or remotely). Directory Manager detects this account and authenticates with it on SQL Server via Windows authentication.

You can configure a domain account in GroupIDAppPool11 and use it to connect Directory Manager to SQL Server, provided that it has the following permissions on SQL Server.

- The user account type on SQL Server must be a Windows account with db\_owner permissions on the Directory Manager database.
- For creating a new database, the user account must have the db\_creator role and db\_owner permissions on the master database.

Use a domain account when SQL Server is available remotely or locally. A local Windows account will work only when Directory Manager and SQL Server are running on the same machine).

The domain account used to connect Directory Manager with SQL Server must:

- Be a member of the IIS\_IUSR and Backup Operators groups.
- Have read/write permissions on the Directory Manager 11 installation folder: [Directory Manager installation drive]:\Program Files\Imanami\GroupID 11.0.
