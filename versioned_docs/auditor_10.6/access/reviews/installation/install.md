# Install

Once the prerequisites have been met, follow the steps to install the Access Reviews application.

**Step 1 –** Run the `AccessReviews.exe` executable, and the Netwrix Auditor Access Reviews Setup
wizard opens.

![Netwrix Auditor Access Reviews Setup wizard Welcome page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installwelcome.png)

**Step 2 –** On the Welcome page, click the Next button to begin the installation process.

![Netwrix Auditor Access Reviews Setup wizard End-User License Agreement page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installeula.png)

**Step 3 –** On the End-User License Agreement page, check the **I accept the terms in the License
Agreement** box and click **Next**.

![Netwrix Auditor Access Reviews Setup wizard Destination Folder page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installdestinationfolder.png)

**Step 4 –** On the Destination Folder page, you can choose between the default destination folder
and a custom folder. Click Change to browse for a different location. When the destination is set as
desired, click **Next**.

**NOTE:** The default location is `C:\Program Files\Netwrix\Access Access Reviews\`. There are no
specific requirements for changing the path.

![Netwrix Auditor Access Reviews Setup wizard SQL Server Connection page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installsql.png)

**Step 5 –** On the SQL Server Connection page, provide the required database information. Click
Next to test the connection to the SQL Server.

- Server — Enter the database server hostname (NetBIOS name, FQDN, or IP Address) with the instance
  name or non-standard port, if applicable, in one of the following formats:

    - No named instance, use [SQLHostName], e.g. NT-SQL02
    - Named instance, use [SQLHostName]\[SQLInstanceName], e.g. NT-SQL02\Netwrix
    - No named instance with non-standard port, use [SQLHostName],[PortNumber], e.g. NT-SQL02,72
    - Named instance with non-standard port, use [SQLHostName]\[SQLInstanceName],[PortNumber], e.g.
      NT-SQL02\Netwrix,72

- Database — Enter the name of the database. By default, this is set to NetwrixAR.

- Authentication — Select the Database service account type from the drop-down menu. Then enter the
  account information in the **User Name** and **Password** fields.
    - For Windows Authentication — **User Name** format must be [DOMAIN]\[username] , e.g.
      NWXTECH\ad.bruce

**NOTE:** See the
[Database Page](/versioned_docs/auditor_10.6/access/reviews/admin/configuration/database.md) topic
for additional information.

![Database does not exist Confirmation Window](/img/versioned_docs/auditor_10.6/access/reviews/installation/installsqldatabase.png)

**Step 6 –** If there are no errors, you will be asked to confirm creation of the new database.
Click **Yes**.

![Netwrix Auditor Access Reviews Setup wizard Configure Web Server page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installconfigurewebserver.png)

**Step 7 –** On the Configure Web Server page, you can choose between the default port and a custom
port on which the application will be accessible. To change the port, enter a new port number in the
field. When the port is set as desired, click **Next**.

**NOTE:** The default port is 81.

![Netwrix Auditor Access Reviews Setup wizard Ready to Install page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installready.png)

**Step 8 –** On the Ready to install page, click Install to begin the process.

![Netwrix Auditor Access Reviews Setup wizard Completed page](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/install/installcompleted.png)

**Step 9 –** Once the installation has successfully completed, click Finish to exit the wizard.

The installation wizard placed a Netwrix Auditor Access Reviews icon on the desktop. Now proceed to
the [First Launch](/versioned_docs/auditor_10.6/access/reviews/admin/firstlaunch.md) topic for next
steps.
