# PowerShell Action: Execution Options

Specify the execution options for the PowerShell script using the Execution Options page.

![PowerShell Action Module Wizard Execution Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/commandlineutility/executionoptions.webp)

The options on the Execution Options page are:

- Execute script locally on the Enterprise Auditor server – Enable this to execute the PowerShell
  script on the Enterprise Auditor server

    - Use the same PowerShell session for each row – Select to enable using the same PowerShell
      session to run multiple rows

- Execute script remotely on a target server – Enable this to execute the PowerShell script on a
  remote target server

    - Use the **Remote host** dropdown to select the database column that will be used as the target
      server name or type in a network host name
    - Select the **Fall back to the local Enterprise Auditor server if the remote execution fails**
      option to use the Enterprise Auditor server if remote execution fails

- Use impersonation within server executable – Select this option to use impersonation when
  executing the PowerShell script
