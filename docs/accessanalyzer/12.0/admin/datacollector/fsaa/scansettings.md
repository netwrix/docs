---
title: "FSAA: Scan Settings"
description: "FSAA: Scan Settings"
sidebar_position: 60
---

# FSAA: Scan Settings

The Scan Settings page is where additional scan protocols and settings are configured. It is a
wizard page for the categories of:

- System Access/Permission Auditing Scan
- Sensitive Data

![FSAA Data Collector Wizard Scan Settings page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/scansettings_1.webp)

In the Scan Protocols section, select the desired checkboxes for including certain types of shared
folders:

- Scan Windows (SMB/CIFS) shares – Includes types of Windows and NAS shares
- Scan NFS exports (shares) – Includes this type of UNIX and NAS shares

In the middle section, select the desired checkboxes for additional settings:

- Enable file system scan streaming – Sends the streamed data directly to the Access Analyzer
  database. A bulk import query is not required when this option is selected
- Enable scanning of files protected by Azure Information Protection – Adds additional options to
  this wizard to scan for protection labels and encrypted files for sensitive data

    - See the
      [Azure Information Protection Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/azureinformationprotection.md)
      for additional information.

- Use SQL query to manually specify shares – For advanced SQL users. This option provides a least
  privileged model for enumerating shares. It bypasses share permission requirements and eliminates
  the need for the Connection Profile credentials to have local Administrator or Power User
  permissions. Click **Configure Query** to open the Manual Shares Query window. See the
  [Enable the Use SQL Query to Manually Specify Shares](#enable-the-use-sql-query-to-manually-specify-shares)
  topic for additional information.
- NetApp communication security – This option provides the ability to choose levels of encryption
  and authentication applied during Access Auditing scans of NetApp devices

    ![NetApp communication security options](/images/accessanalyzer/12.0/admin/datacollector/fsaa/scansettingsnetapp.webp)

    - HTTPS – Encrypts communication and verifies the targeted server’s SSL certificate
    - HTTPS, Ignore Certificate Errors – Encrypts communication but ignores certificate errors

        - This option is primarily used for troubleshooting
        - Alternative use for this option would be for access scans within a trusted and secured
          network

    - HTTP – Applies no encryption or authentication of communication

    The HTTPS options require Access Analyzer to have access to the targeted server’s SSL
    certificate. Access Analyzer ships with a file containing trusted certificates from a trusted
    Certification Authority (`cacert.pem`). If the organization uses a self-signed certificate, see
    the
    [HTTPS Encryption Certificate for FSAA & NetApp Communication](#https-encryption-certificate-for-fsaa--netapp-communication)
    topic for information on adding the organization’s certificate.

The bottom section is only available for the File System Access/Permission Auditing Scan and
Sensitive Data Scan categories and contains the following options:

- Restart incomplete scans after (0 always restarts) [number] days – Determines when the saved
  progress should be discarded and the scan restarted
- Rescan unimported hosts after (0 always rescans) [number] days – Controls when the host is
  rescanned even if its data has not been imported yet

    - When this option is enabled, set to a value higher than zero, and results in a host not being
      scanned, a warning message is logged
    - The Messages table records the
      `No need to scan, Tier 2 DB USN > Tier 1 DB USN, needs to bulk import` warning

## Enable the Use SQL Query to Manually Specify Shares

If desired, enable this feature and click **Configure Query** to open the Manual Share Query window.

![Maual Shares Query window](/images/accessanalyzer/12.0/admin/datacollector/fsaa/maualsharesquery.webp)

The SQL query provided by a user should return a list of all shares in the target environment. The
target tables must reside within the Access Analyzer database and contain at least the following
columns for all shares in the target environment:

- Host – Name of host where the share resides matching the Host Master table Name field value

    :::info
    Use this column but it is not required.
    :::


- Share – Name of the share
- Folder – Landing folder path of the share on the host
- ShareType – Integer representing the protocol for the type of share:

    - 0 = CIFS share
    - 1 = NFS share

For example, if the share has a path of `\\cec-fs01\Documentation`, then the columns are populated
in this way:

- Host – `cec-fs01`
- Share – `Documentation`
- Folder – `C:\Documentation`
- ShareType – `0`

:::warning
If the FSAA Data Collector has identified a share in a previous scan, but that share is
not in a table targeted by this query, then it is marked as a deleted share.
:::


Enter the SQL query by replacing the sample text in the textbox. The SQL query must target tables
that have the required columns populated with the list of all shares in the target environment.

_(Optional)_ Enter a host in the Host parameter value (@host) textbox to test the query to retrieve
the data for that host.

Select **Test Query** to open a preview of the results in the Query Results window. Ensure that the
data being retrieved by the query is expected.

When this option is selected, the data collector runs against the target table to enumerate shares
in the environment.

:::tip
Remember, if a share is not in the target table, the data collector assumes that the share does
not exist and marks it as deleted.
:::


## HTTPS Encryption Certificate for FSAA & NetApp Communication

The HTTPS encryption options for the NetApp communication security setting of the global Remote Data
Collection Configuration page in the File System Access Auditor Data Collector Wizard requires a
certificate. If the organization uses a self-signed certificate, it is necessary to add this
certificate to enable HTTPS encryption of Access Analyzer communications.

The certificate (`cacert.pem`) which is shipped with Access Analyzer is in the DC folder of the
installation directory. The default location is:

**…\STEALTHbits\StealthAUDIT\DC**

If employing remote applet mode or proxy servers, then the certificate (`cacert.pem`) must exist in
the FSAA folder where the `FSAAAppletServer.exe` process is running (applet/proxy host). Therefore,
it is necessary to also copy it to the FSAA folder on the target hosts andr proxy servers. This is
done at runtime when using remote applet mode, but any updates or custom certificates must be copied
manually. The default location is:

**…\STEALTHbits\StealthAUDIT\FSAA**

:::info
Do not overwrite this certificate. It is fully trusted by Netwrix. Instead, add
an underscore (\_) character to the start of the file name. Then copy the organization’s self-signed
certificate to this location with the name `cacert.pem`.
:::


There is another `cacert.perm` file within the Access Analyzer installation directory used by the
Notification SSL encryption options. While these files have the same name, they serve different
purposes and are stored in different locations.
