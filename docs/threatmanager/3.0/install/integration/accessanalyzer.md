# Netwrix Access Analyzer (formerly Enterprise Auditor) Integration

Access Analyzer can be configured to send Sensitive Data to Threat Manager. In Access Analyzer, the
FS_DEFEND_SDD Job exports sensitive data matches collected by the File System Solution Sensitive
Data Discovery Auditing jobs to Threat Manager. For Threat Manager integration with Access Analyzer,
the following job groups must be successfully run before running the FS_DEFEND_SDD Job:

- FileSystem > 0.Collection Job Group
- FileSystem > 7.Sensitive Data Job Group

See the File System Solution section of the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information.

:::note
The Access Analyzer Sensitive Data Discovery Add-On is required for sensitive data
collection.
:::


## Instantiate the FS_DEFEND_SDD Job in Access Analyzer

Follow the steps to configure the FS_DEFEND_SDD Job to send sensitive data to Threat Manager. See
the Instant Job Wizard section of the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
instructions to add this instant job to the **Jobs** tree.

In Access Analyzer, install the FS_DEFEND_SDD Job to the desired location. It is available through
the Instant Job Library under the File System library.

**Step 1 –** In the Threat Manager Console, generate the app token (endpoint token) to be copied and
pasted into the Connection Profile, and the host name (endpoint) to be used when creating the custom
host list.

In order for Access Analyzer to send data to Threat Manager, an app token must be created in Threat
Manager. If multiple Access Analyzer Consoles are sending data to Threat Manager, an app token may
be created for each Access Analyzer Console to grant individual access to Threat Manager from each
Console.

- Navigate to the Configuration > App Tokens page.
- Click the +Add button to create a new app token:
- Enter a name and a unique description for the app token.
- Click Submit.
- In the Token column, click the Key icon to open the token and copy it for use when configuring the
  Connection Profile in Access Analyzer.
- In the Host Name column, copy the port for use when creating the custom host list in Access
  Analyzer.

**Step 2 –** In Access Analyzer, create a custom Connection Profile for the FS_DEFEND_SDD Job to
authenticate to Threat Manager. See the Custom Connection Profile for FS_DEFEND_SDD Job topic for
additional information.

**Step 3 –** In Access Analyzer, create a custom host list.

- The target host is the Threat Manager Host Name generated on the Manage App Tokens page in the
  Threat Manager Console:
- Format – [HOST]:8080

**Step 4 –** Assign the custom host list at the FS_DEFEND_SDD > Configure > Hosts node.

See the FS_DEFEND_SDD Job section of the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information.

:::info
Schedule the FS_DEFEND_SDD Job to run as part of the FileSystem Job, after the
FileSystemOverview Job. The FS_DEFEND_SDD Job should be run after each subsequent sensitive data
collection.
:::


## Custom Connection Profile for FS_DEFEND_SDD Job

The FS_DEFEND_SDD Job requires a custom Connection Profile to authenticate to Threat Manager. The
credential for the Connection Profile must be created with the Web Services (JWT) account type.

:::tip
Remember, , the Threat Manager App Token is generated within Threat Manager.
:::


Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Web Services (JWT)
- Domain – `{not a field for this type of credential, defaults to <WSJWT>}`
- User name – This field should be left blank
- Password Storage: Application – Uses Access Analyzer’s configured Profile Security setting as
  selected at the Settings > Other Settings node
- Access Token – Copy and paste the Threat Manager App Token

The FS_DEFEND_SDD Job must be configured to use this custom Connection Profile.
