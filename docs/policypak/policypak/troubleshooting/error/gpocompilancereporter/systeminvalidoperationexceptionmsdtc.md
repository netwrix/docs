# When using a remote SQL Server, GPCR Snapshot fails with error "System.InvalidOperationException" and "MSDTC has been disabled" in Debug log

When using a remote SQL as the database for Netwrix Endpoint Policy Manager (formerly PolicyPak) Group Policy Compliance Reporter, the snapshot operation may fail with the following error.

![669_1_image-20200327172830-2](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_1_image-20200327172830-2.jpeg)

The Server Log will contain the following error as well:

System.Transactions.TransactionManagerCommunicationException: Network access for Distributed Transaction Manager (MSDTC) has been disabled. Please enable DTC for network access in the security configuration for MSDTC using the Component Services Administrative tool.``` ---> System.Runtime.InteropServices.COMException```: The transaction manager has disabled its support for remote/network transactions. (Exception from HRESULT: 0x8004D024)

To enable diagnostic logging, follow the directions in the article [How do I turn on enhanced logging for Endpoint Policy Manager Group Policy Compliance Reporter if asked to do so?](/docs/product_docs/policypak/policypak/troubleshooting/grouppolicycompliancereporter/logenhanced.md)

The resulting GPCR Server log can be found in: ```C:\ProgramData\PolicyPak\PolicyPak Group Policy Compliance Reporter Server\Diagnostics```

## Resolution

To resolve the error and allow snapshots to complete successfully, you must enable Network DTC Access and ensure the firewall allows the traffic through.

## Enable DTC

The following is run on both the Endpoint Policy Manager GPCR Client computer (Where the Admin Console is installed) and the remote SQL Server

__Step 1 –__ Open Component Services

1. Open the "run" box (Win-R), type ```"dcomcnfg"``` and click OK

   ![669_3_image-20200327172830-3](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_3_image-20200327172830-3.png)

__Step 2 –__ Expand Console Root -> Component Services -> Computers -> My Computer -> Distributed Transaction Coordinator, Right-Click on Local DTC and click Properties

![669_5_image-20200327172830-4](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_5_image-20200327172830-4.png)

__Step 3 –__ On the Security tab -> Security Settings and Configure as follows:

1. Check "Network DTC Access"
2. Check "Allow Inbound" and "Allow Outbound"
3. Select "No Authentication Required"
4. Check "Enable SNA LU 6.2 Transactions"
5. Click OK

   ![669_7_image-20200327172830-5](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_7_image-20200327172830-5.png)

__Step 4 –__ The MSDTC service will need to be restarted for the changes to take affect – Click YES to restart now or NO to restart manually later.

## Enable Firewall Rules

Enable DTC through the firewall on both Endpoint Policy Manager GPCR Server and the remote SQL Server

__Step 1 –__ Open the Windows Defender Firewall

__Step 2 –__ Click on "Allow an app or feature through Windows Defender Firewall"

![669_9_image-20200327172830-6](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_9_image-20200327172830-6.png)

__Step 3 –__ Find "Distributed Transaction Coordinator", check and check the appropriate Network profile (e.g. Domain).

![669_11_image-20200327172830-7](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_11_image-20200327172830-7.png)

__Step 4 –__ Click OK to save and close
