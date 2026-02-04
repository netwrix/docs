---
title: "Configure a Response Action for Alert"
description: "Configure a Response Action for Alert"
sidebar_position: 40
---

# Configure a Response Action for Alert

Upon the alert triggering, you can instruct Auditor to perform several actions such as run a
command, a script or other executable file that will perform a remediation action, open a ticket
with the organization help desk, etc.

![passwordreset_thumb_0_0](/images/auditor/10.9/admin/alertsettings/passwordreset_thumb_0_0.webp)

Response Action settings contain the following configuration options:

- Take action when alert occurs - Toggle this setting to **On** to enable alert responses
- Run – Indicates the location of the script file you want to run as your response action
- With parameters – If your script contains parameters, specify them here
- Working directory – If you need to specify a working directory for your script to perform the
  operation, insert the path here
- Write data to CSV file – If this checkbox is selected, Netwrix Auditor will save activity records
  in a CSV file. You can use it to pass information into your response action to receive a more
  targeted response.
- Limit row count in a file to – Select the desired number of rows you want for the file
- Use custom credentials – Enter the username and password if you want the script to be run as an
  account different from LocalSystem
- Command line preview – Showing a preview of the command line script. Click **Test run** button to
  test its performance.

Follow the steps to configure the required settings in the Response Action tab of the alert
properties.

**Step 1 –** Turn the switch to On if you want a response action to be taken when the alert occurs.

**Step 2 –** In the Run field, specify the path to the executable file (_.exe_, ._cmd_, _.bat_; for
_.ps1_ files see step 3 below). The file must be located on the machine where Netwrix Auditor server
runs.

**Step 3 –** In the With parameters field, enter the parameters to be used by the executable file.
Use space character as a separator.

**Step 4 –** To run _.exe_, _.cmd_ and _.bat_ files, you can enter the path to your command-line or
batch file directly in the Run field, for example:

![command_thumb_0_0](/images/auditor/10.9/admin/alertsettings/command_thumb_0_0.webp)

To run the ._ps1_ files, you will need to enter the path to _powershell.exe_ and path to your
script. For example:

- In the Run field, enter _C:\Windows\system32\WindowsPowerShell\v1.0\powershell.exe_
- In the With parameters field, enter `–File <path_to_your_ps_script>`

![powershell_thumb_0_0](/images/auditor/10.9/admin/alertsettings/powershell_thumb_0_0.webp)

Unless you select to Write data to CSV file, Auditor will also pass the following parameters to the
command line:

- _AlertID_ — alert ID
- _RecordID_ — ID of the activity record that triggered the alert

Selecting Write data to CSV file will change this behavior, as described in the Configure a Response
Action for Alert section below.

**Step 5 –** In the Working directory field, specify path to the working directory of the executable
file on NAuditor server.

**Step 6 –** In the Working directory field, specify path to the working directory of the executable
file on NAuditor server.

If you leave this field empty, then the path to the file specified in the Run field will be used as
a working directory. As shown in the example with the _.ps_ file, this may be the system directory.
So, to avoid system directory cluttering, it is recommended not to leave the Working directory field
empty but to explicitly specify the directory where your executable file is located, or a dedicated
directory for that purpose. In the latter case, make sure the directory exists on Auditor server.

**Step 7 –** Write data to CSV file — select this option if you want Auditor to locate the activity
records associated with the alert, and write the record fields and their values in a structured way
to a ._csv_ file. For each new alert being created, this option is selected by default, as well as
for the predefined alerts installed with Auditor.

After the upgrade, all alerts with previously configured response action will have this option
cleared.

**Step 8 –** Limit row count in a file to `<N>` — limit the number of rows (activity records) to be
written to a single ._csv_ file. Enter a value from _1_ to _1000_.

Learn more about how these options work in the Configure a Response Action for Alert section.

By default, the executable file will be launched under the _LocalSystem_ account. If you want to use
another account, select the Use custom credentials checkbox and specify user name and password. Make
sure this account has **Log on as batch job** privilege.

The resulting command line including executable file name and execution parameters will appear in
the Command line preview.

If you selected to **Write data to CSV file**, the command line will include
_`{CsvFile_}`_, i.e. the file path. Alternatively, the command line will include _`{AlertID}`_ and _`{RecordID}`\_,
i.e. related IDs

**Step 9 –** Test run — if you click this button, the executable file will be run with the specified
parameters on Netwrix Auditor server. This can be helpful, for example, if you want to ensure script
operability before the related alert is triggered.

As there is no actual alert triggering in this case, sample alert ID and sample activity record ID
will be passed to the executable file. If you selected to write data to CSV file, a sample file will
be created and populated with these sample IDs.

To be able to perform the test run, current user account (logged on to Auditor client) must have
local Administrator privileges on Auditor server where the executable file is located.

After the test run, you will get a notification message with the exit code. Typical values are as
follows:

- **0** — the response action completed successfully
- Any other value — the response action was not a success

**_RECOMMENDED:_** Apply similar logic if you plan to use custom exit codes in your response action
script.

Same exit codes will be returned by response action regular runs.

If the action is not a success (exit code is not 0), the program will try to perform response action
again (up to 200 times) with increasing time interval.

## Write Data to a CSV File

To pass certain activity record fields to the executable file, you can instruct the program to write
the fields and their values in a structured way to a CSV file.

Here is an example of a CSV file structure:

![csvfile_thumb_0_48](/images/auditor/10.7/admin/alertsettings/csvfile_thumb_0_48.webp)

The number of activity records retrieved per every response action launch will be only limited by
user (see below for details). If the number of records associated with the alert exceeds this limit,
the program will create multiple CSV files, storing data in chunks.

For example, if there are 50 records associated with the alert (e.g., “_Scanning threat is detected
on network device_” alert), and the number of records for one CSV is set to 10, the program will
create 5 CSV files, with 10 records in each chunk. Also notice that the response action will be
launched once for every such chunk (5 times in this example), and will retrieve multiple activity
records per launch (not more than the specified limit, i.e. 10 records in this example).

A CSV file is named using the timestamp and GUID and stored in the subfolder of Netwrix Auditor
working folder (by default, _%ProgramData%\Netwrix
Auditor\AuditCore\AuditArchive\AlertsToolLauncher\Csv_). Note that a CSV file will exist only while
the executable file is running – after the execution is completed, the CSV file will be deleted. So
if you plan, for example, to obtain some data from that file for further processing, you may need to
copy it to a permanent location in a timely manner, e.g., using a script.



