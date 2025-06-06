# Create and Configure Oracle Wallet

Oracle Wallet is a file that stores database authentication and signing credentials. It allows users to securely access databases without providing credentials to third-party software (for example, Netwrix Auditor), and easily connect to Oracle products, including located in the clouds (e.g. Autonomous Data Warehouse).

A configured Wallet consists of two files, ```cwallet.sso``` and ```ewallet.p12``` stored in a secure Wallet directory

## Create Oracle Wallet

There are multiple methods to create Oracle Wallet files. For example:

- Using Oracle Wallet Manager. Refer to the following Oracle help article for more information: [Creating a New Oracle Wallet](https://docs.oracle.com/database/121/DBIMI/walet.htm#Creating-a-New-Oracle-Wallet).
- Using a console. As an example, refer to the following Oracle help article for WebLogic JDBC: [Creating and Managing Oracle Wallet](https://docs.oracle.com/middleware/1213/wls/JDBCA/oraclewallet.htm#Creating-and-Managing-Oracle-Wallet).
- Using other Oracle products. For example, Autonomous Data Warehouse. Refer to the following Oracle help article for more information: [Download Client Credentials (Wallets)](https://docs.oracle.com/en/cloud/paas/autonomous-data-warehouse-cloud/user/connect-download-wallet.html#Download-Client-Credentials-Wallets).

## Install Oracle Instant Client

To perform clear install of Oracle Instant Client, follow the instructions below. If you have Oracle Client installed, see the [Update Existing Oracle Client Installation](#Update-Existing-Oracle-Client-Installation) topic for additional information.

Follow the steps to install Oracle Instant Client

__Step 1 –__ Download the appropriate package from Oracle website: [Instant Client Packages](https://www.oracle.com/database/technologies/instant-client/downloads.html). Netwrix recommends installing the latest available version but the product is compatible with version 12 and above.

__Step 2 –__ Download client credentials and store the file in a secure location. See [Download Client Credentials (Wallets)](https://docs.oracle.com/en/cloud/paas/atp-cloud/atpug/connect-download-wallet.html#Download-Client-Credentials-Wallets) for more information.

__Step 3 –__ Unzip your credentials file into a secure location.

__Step 4 –__ Navigate to a folder where you unzipped your credentials and locate the sqlnet.ora file.

__Step 5 –__ Replace the ```"?/network/admin"``` parameter with the name of the folder containing client credentials. For example:

Windows-based platforms:

WALLET\_LOCATION = (SOURCE = (METHOD = file) (METHOD\_DATA = (DIRECTORY="D:\\myapp\\atp\_credentials")))

SSL\_SERVER\_DN\_MATCH=yes

__Step 6 –__ Create the ```TNS_ADMIN``` environment variable and set it to the location of the credentials file.

This variable is used to change the directory path of Oracle Net Services configuration files from the default location of ```ORACLE_HOME\network\admin``` to the location of the secure folder containing the credentials file you saved in Step 2. Set the ```TNS_ADMIN``` environment variable to the directory where the unzipped credentials files are, not to the credentials file itself.

__Step 7 –__ Navigate to a folder where you unzipped your credentials and locate the tnsnames.ora file. The file is used to map connection information for each Oracle service to a logical alias.

__Step 8 –__ Review sample tnsnames.ora file where ```myOracle``` – is a logical alias for the wallet:

myOracle =

(description=

(address=((ADDRESS = (PROTOCOL = TCP)(HOST = server1)(PORT = 1521))

(CONNECT\_DATA =

)

)

Keep in mind that the wallet alias in the configuration file must equal to Netwrix Auditor item name.

## Configure Oracle Instant Client for HTTP Proxy Connections

If the client is behind a firewall and your network configuration requires an HTTP proxy to connect to the internet, perform the following steps to update the ```sqlnet.ora``` and ```tnsnames.ora``` files.

HTTP proxy connections are available starting with Oracle Instant Client 12.2.0.1 or later.

1. Add the following line to the ```sqlnet.ora``` file to enable connections through an HTTP proxy:

   SQLNET.USE\_HTTPS\_PROXY=on
2. Open the ```tnsnames.ora.``` file and add the following HTTP proxy connection definitions:

   - ```https_proxy``` — specify the proxy server hostname. For example, ```proxyhostname```.
   - ```https_proxy_port ```— specify port used for HTTP proxy connection. For example, ```80```.

   Review configuration example:

   ATPC\_high =

   (description=

   (address=

   (https\_proxy=proxyhostname)(https\_proxy\_port=80)(protocol=tcps)(port=1522)(host=atpc.example.oraclecloud.com)

   )

   (connect\_data=(service\_name=atpc1\_high.atpc.oraclecloud.com)

   )

   (security=(ssl\_server\_cert\_dn="atpc.example.oraclecloud.com,OU=Oracle BMCS US,O=Oracle Corporation,L=Redwood City,ST=California,C=US")

   )

   )

Configuring ```sqlnet.ora``` and``` tnsnames.ora``` for the HTTP proxy may not be enough depending on your organization's network configuration and security policies. For example, some networks require a username and password for the HTTP proxy. In such cases, contact your network administrator to open outbound connections to hosts in the oraclecloud.com domain using port ```1522 ```without going through an HTTP proxy.

## Update Existing Oracle Client Installation

Netwrix assumes that you have ```sqlnet.ora``` and ```tnsnames.ora``` files and the ```TNS_ADMIN ```environment variable.

Do the following:

1. Update your sqlnet.ora file. Example:

   WALLET\_LOCATION = (SOURCE = (METHOD = file) (METHOD\_DATA = (DIRECTORY="/home/atpc\_credentials")))
2. Copy the entries in the ```tnsnames.ora``` file provided in the Autonomous Transaction Processing wallet to your existing ```tnsnames.ora``` file.

See also:

- [Oracle Wallet](/docs/product_docs/auditor/plans/items/items_oracle_wallet.md)
