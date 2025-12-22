---
title: "Install Netwrix Data Classification"
description: "Install Netwrix Data Classification"
sidebar_position: 50
---

# Install Netwrix Data Classification

1. Run Netwrix_Data_Classification.exe.
2. Review minimum system requirements and then read the License Agreement. Click Next.
3. Follow the instructions of the setup wizard. When prompted, accept the license agreement.
4. On the Product Settings step, specify path to install Netwrix Data Classification. For example,
   _D:\Data\NDC\Index._
5. On the Configuration step, specify the directory where Index files reside. For example,
   _C:\Program Files\NDC\Index_.
6. On the SQL Database step, provide SQL Server database connection details.

    Complete the following fields:

    | Option                | Description                                                                                                              |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
    | Server Name           | Provide the name of the SQL Server instance that hosts your NDC SQL database. For example, _"WORKSTATIONSQL\SQLSERVER"_. |
    | Authentication Method | Select Windows or SQL Server authentication method.                                                                      |
    | Username              | Specify the account name.                                                                                                |
    | Password              | Provide your password.                                                                                                   |
    | Database Name         | Enter the name of the SQL Server database. Netwrix recommends using NDC_database name.                                   |

    **NOTE:** The database is created automatically in basic configuration mode. For recommended
    configuration (required for crawling optimization in large and extra-large environments), refer
    to
    [Configure NDC SQL database](/docs/dataclassification/5.6.2/deployment/installation/ndc_database.md)
    section.

7. On the Licensing step, add license. You can add license as follows:

    - Click the Import button and browse for your license file

        _OR_

    - Open your license file with any text editor, e.g., Notepad and paste the license text to the
      License field.

8. On the Administration Web Application step, review default IIS configuration.
9. On the Services step, configure Netwrix Data Classification services:

    - Select all services to be installed.
    - File System Path—Use default path or provide a custom one to store Netwrix Data
      Classification's Services files. For example, _C:\Program Files\NDC Services._
    - Provide user name and password for the product services service account.

        **NOTE:** This account is granted the Logon as a service privilege automatically on the
        computer where Netwrix Data Classification is going to be installed.

    - Select additional service options, if necessary.

10. On the Pre-Installation Tasks and Checks step, review your configuration and select Install.
11. When the installation completes, open a web browser and navigate to the following URL:
    _http://localhost/conceptQS_ where localhost is the name or IP address of the computer where
    Netwrix Data Classification is installed. For example, _http://workstationndc/conceptQS_.
