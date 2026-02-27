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
    | Server Name           | Provide the name of the SQL Server instance that hosts or will host your NDC SQL database. For example, _"WORKSTATIONSQL\SQLSERVER"_. |
    | Authentication Method | Select Windows or SQL Server authentication method.                                                                      |
    | Username              | Specify the account name.                                                                                                |
    | Password              | Provide the account password.                                                                                                   |
    | Database Name         | Enter the name of the NDC database. Netwrix recommends using NDC as the database name.                                   |

  If the database does not yet exist, you'll need to click Create SQL Database before moving to the next step - this will automatically create the NDC database with the given name and default configuration.

    :::note
    The database is created automatically in basic configuration mode. For recommended
    configuration (required for crawling optimization in large and extra-large environments), refer
    to [Configure NDC SQL database](/docs/dataclassification/5.7/introduction/install/ndcsqldatabase.md) section.
    :::

7. If you are installing a secondary NDC instance to an [NDC Distributed Query Server](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md),
you will be shown the DQS registration step. Complete the following steps:
  a. Confirm that the Primary NDC Server URL displayed matches the QS Path of the primary NDC instance (the first entry in the DQS table in the administrative web console) and click Connect to connect the installer to the primary instance.
  b. When the connection succeeds, an Authentication code will be generated and displayed in the Authentication Code textbox. Click Register - this will copy the Authentication code to the clipboard and open the administration console DQS configuration page in a browser window.
  c. Click Register/Resync. The authentication code should automatically be inserted into the input box, paste the code if it hasn't been then click Submit.
  d. Copy the verification code displayed and input it into the Verification code input box in the installer, then click Join.
  e. Once the NDC instance has been successfully joined to the DQS configuration, you can click Next to move to the next installation step.


8. On the Licensing step, add your license. You can add the license as follows:

    - Click the Import button and browse for your license file

        _OR_

    - Open your license file with any text editor, e.g. Notepad, and paste the license text into the
      License field.

9. On the Administration Web Application step, review the default IIS configuration. If you select to run the Administration Web Application as a local or domain user, you will need to input the credentials for that user.
10. On the Services step, configure Netwrix Data Classification services:

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
