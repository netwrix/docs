---
title: "Configure a Response Action for Alert"
description: "Configure a Response Action for Alert"
sidebar_position: 40
---

# Configure a Response Action for Alert

When an alert triggers, you can instruct Auditor to perform actions such as running a command,
script, or other executable file to perform a remediation action, or opening a ticket with the
organization's help desk.

![passwordreset_thumb_0_0](/images/auditor/10.9/admin/alertsettings/passwordreset_thumb_0_0.webp)

Response Action settings contain the following configuration options:

- Take action when alert occurs - Toggle this setting to **On** to enable alert responses
- Run – Indicates the location of the script file you want to run as your response action
- With parameters – If your script contains parameters, specify them here
- Working directory – If you need to specify a working directory for your script to perform the
  operation, insert the path here
- Write data to CSV file – If you select this checkbox, Netwrix Auditor saves activity records
  in a CSV file. You can use it to pass information into your response action to receive a more
  targeted response.
- Limit row count in a file to – Select the number of rows you want for the file
- Use custom credentials – Enter the username and password if you want the script to be run as an
  account different from LocalSystem
- Command line preview – Shows a preview of the command line script. Click the **Test run** button
  to test its performance.

To configure the required settings in the Response Action tab of the alert properties:

**Step 1 –** Turn the switch to On if you want a response action to be taken when the alert occurs.

**Step 2 –** In the Run field, specify the path to the executable file (_.exe_, ._cmd_, _.bat_; for
_.ps1_ files, see step 3). The executable file must reside on the machine where the Netwrix Auditor
server runs.

**Step 3 –** In the With parameters field, enter the parameters for the executable file to use. Use
a space character as a separator.

**Step 4 –** To run _.exe_, _.cmd_ and _.bat_ files, you can enter the path to your command-line or
batch file directly in the Run field, for example:

![command_thumb_0_0](/images/auditor/10.9/admin/alertsettings/command_thumb_0_0.webp)

To run _.ps1_ files, enter the path to _powershell.exe_ and the path to your script. For example:

- In the Run field, enter _C:\Windows\system32\WindowsPowerShell\v1.0\powershell.exe_
- In the With parameters field, enter `–File <path_to_your_ps_script>`

![powershell_thumb_0_0](/images/auditor/10.9/admin/alertsettings/powershell_thumb_0_0.webp)

Unless you select Write data to CSV file, Auditor also passes the following parameters to the
command line:

- _AlertID_ — alert ID
- _RecordID_ — ID of the activity record that triggered the alert

Selecting Write data to CSV file changes this behavior, as described in the Write Data to a CSV
File section of this topic.

**Step 5 –** In the Working directory field, specify path to the working directory of the executable
file on NAuditor server.

If you leave this field empty, the path to the file specified in the Run field becomes the working
directory. As shown in the example with the _.ps_ file, this may be the system directory. So, to
avoid cluttering the system directory, don't leave the Working directory field empty. Specify the
directory that contains your executable file, or a dedicated directory for that purpose. In the
latter case, ensure the directory exists on the Auditor server.

**Step 6 –** Write data to CSV file — select this option if you want Auditor to locate the activity
records associated with the alert, and write the record fields and their values in a structured way
to a ._csv_ file. For each new alert you create, Auditor selects this option by default, as it does
for the predefined alerts installed with Auditor.

The upgrade clears this option for all alerts that have a previously configured response action.

**Step 7 –** Limit row count in a file to `<N>` — limit the number of rows (activity records) that
Auditor writes to a single ._csv_ file. Enter a value from _1_ to _1000_.

For more information about how these options work, see the Write Data to a CSV File section of this
topic.

By default, Auditor launches the executable file under the _LocalSystem_ account. If you want to use
another account, select the Use custom credentials checkbox and specify a user name and password.
Ensure this account has the **Log on as batch job** privilege.

The resulting command line, including the executable file name and execution parameters, appears in
the Command line preview.

If you select **Write data to CSV file**, the command line includes `{CsvFile}` (the file path).
Otherwise, the command line includes `{AlertID}` and `{RecordID}` (the related IDs).

**Step 9 –** Test run — if you click this button, the executable file runs with the specified
parameters on the Netwrix Auditor server. This can be helpful, for example, if you want to ensure
the script works correctly before the alert triggers.

Because no alert actually triggers in this case, Auditor passes a sample alert ID and sample
activity record ID to the executable file. If you selected Write data to CSV file, Auditor creates
and populates a sample file with these sample IDs.

To perform the test run, the current user account (logged on to the Auditor client) must have local
Administrator privileges on the Auditor server that hosts the executable file.

After the test run, you get a notification message with the exit code. Typical values are as
follows:

- **0** — the response action completed successfully
- Any other value — the response action failed

**_RECOMMENDED:_** Apply similar logic if you plan to use custom exit codes in your response action
script.

Regular runs of the response action return the same exit codes.

If the action fails (the exit code isn't 0), the program tries to perform the response action again
(up to 200 times) at increasing intervals.

## Write Data to a CSV File

To pass certain activity record fields to the executable file, you can instruct the program to write
the fields and their values in a structured way to a CSV file.

Here is an example of a CSV file structure:

![csvfile_thumb_0_48](/images/auditor/10.7/admin/alertsettings/csvfile_thumb_0_48.webp)

You limit the number of activity records retrieved per response action launch using the Limit row
count in a file to setting (see step 8). If the number of records associated with the alert exceeds
this limit, the program creates multiple CSV files, storing data in chunks.

For example, if there are 50 records associated with the alert (for example, the Scanning threat is
detected on network device alert) and the number of records for one CSV file is set to 10, the
program creates 5 CSV files, with 10 records in each chunk. The program also launches the response
action once for each chunk (5 times in this example) and retrieves multiple activity records per
launch, up to the specified limit (10 records in this example).

Auditor names a CSV file using the timestamp and GUID and stores it in a subfolder of the Netwrix
Auditor working folder (by default, _%ProgramData%\Netwrix
Auditor\AuditCore\AuditArchive\AlertsToolLauncher\Csv_).

:::note
A CSV file exists only while the executable file is running. After the run completes, Auditor
deletes the CSV file.
:::

If you plan to use data from that file for further processing, copy it to a permanent location
before Auditor deletes it, for example using a script.
