# Connection Tab

The Connection tab is for configuring the Connection Profile. Choose to use the default settings
(the global configuration or configuration set via broken inheritance at a job group level), to use
the system default (the account being used to run Enterprise Auditor), or to select another
Connection Profile.

**NOTE:** It is a best practice to set the Connection Profile at the same level where the job’s host
list is set. For example, if the host list is set under the job group’s **Settings** node, then that
is where the Connection Profile should be configured. If the host list is set under the **[Job]** >
**Configure** node, then this is where the Connection Profile should be configured.

![Connection tab of the Jop Properties](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/job/properties/viewxml.webp)

Select the desired option to identify the required Connection Profile for the job. See the
[Connection Node](/docs/accessanalyzer/11.6/accessanalyzer/admin/jobs/group/connection.md)
topic for additional information for the three connection options.

Click **OK** to save configuration changes and close the Job Properties window. Click **Cancel** if
no changes were made.
