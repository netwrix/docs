# Uninstall Proxy Service Process

The process to properly uninstall the File System Proxy Service is completed through the
uninstalling of the Enterprise Auditor File System Scanning Proxy program.

**Step 1 –** Open Control Panel and select **Programs** > **Uninstall a program**.

![Programs and Features](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/sensitivedatadiscovery/uninstall.webp)

**Step 2 –** Select Netwrix Enterprise Auditor File System Scanning Proxy and click **Uninstall**.

**NOTE:** If the installation was configured to use the LocalSystem account to run the RPC service
the two SPN values are removed for that machine in Active Directory. If the service is running with
a supplied account, the SPN values would need to be manually removed for that machine in Active
Directory (unless the uninstall was completed as part of the
[Upgrade Proxy Service Procedure](/docs/accessanalyzer/11.6/install/filesystemproxy/upgrade.md)).

When the uninstall process is complete, this program is removed from the list.
