---
title: "Install Netwrix Data Classification"
description: "Install Netwrix Data Classification"
sidebar_position: 40
---

# Install Netwrix Data Classification

1. Run Netwrix_Data_Classification.exe.
2. Review the minimum system requirements, then read the License Agreement. Click Next.
3. Follow the instructions of the setup wizard. When prompted, accept the license agreement.
4. On the Product Settings step, specify the folder to install Netwrix Data Classification to. For example,
   _D:\Data\NDC\Index._
5. On the Configuration step, specify the directory in which the Index files will be stored. For example,
   _C:\Program Files\NDC\Index_.
6. On the SQL Database step, provide the SQL Server database connection details.

    Complete the following fields:

    | Option                | Description                                                                                                              |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
    | Server Name           | Provide the name of the SQL Server instance that will host the NDC SQL database. For example, _"WORKSTATIONSQL\SQLSERVER"_. |
    | Authentication Method | Select Windows or SQL Server authentication method.                                                                      |
    | Username              | Specify the account name.                                                                                                |
    | Password              | Provide the account password.                                                                                                   |
    | Database Name         | Enter the name of the NDC database. Netwrix recommends using NDC as the database name.                                   |

  If the database does not yet exist, you will need to click Create SQL Database before moving to the next step - this will automatically create the NDC database with the given name and default configuration.

    :::note
    The database is created automatically in basic configuration mode. For recommended
    configuration (required for crawling optimization in large and extra-large environments), refer
    to [Configure NDC SQL database](/docs/dataclassification/5.7/introduction/install/ndcsqldatabase.md) section.
    :::

    :::note
    When installing a secondary instance as part of a DQS environment, you may see an extra step here for synchronising the new instance with the primary instance. 
    The instructions for adding instances to a DQS environment can be found in [NDC Distributed Query Server](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md).
    :::

7. On the Licensing step, add your license. You can add the license as follows:

    - Click the Import button and browse for your license file

        _OR_

    - Open your license file with any text editor, e.g. Notepad, and paste the license text into the
      License field.

8. On the Administration Web Application step, review the default IIS configuration. If you select to run the Administration Web Application as a local or domain user, you will need to input the credentials for that user.
9. On the Services step, configure Netwrix Data Classification services:

    - Select all services to be installed.
    - File System Path—Use the default path or provide a custom one to store Netwrix Data
      Classification's Services files. For example, _C:\Program Files\NDC Services._
    - Provide credentials for the product services service account.

        :::note
        This account is granted the Logon as a service privilege automatically on the
        computer where Netwrix Data Classification is going to be installed.
        :::


    - Select additional service options, if necessary.

11. On the Pre-Installation Tasks and Checks step, review your configuration and select Install.
12. Once the installation completes, open a web browser and navigate to the following URL:
    _http://SITENAME/NDC_ where SITENAME is the name or IP address of the computer where
    Netwrix Data Classification is installed. For example, _http://workstationndc/NDC_.
