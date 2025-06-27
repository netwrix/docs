# Add Schedule Policy

Follow the steps to add a schedule policy to the console.

**Step 1 –** Navigate to the Policy > **Platforms** > **Schedule Policies** page.

**Step 2 –** In the Schedule Polices list, click the **Plus** icon.

![Schedule Policy Editor Window](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/edit/schedulepolicyeditor.webp)

**Step 3 –** Enter the following information:

**NOTE:** The fields will change depending on the selected frequency.

- Select the desired frequency:

  - Every X Hours – Enter the number of hours between executions
  - Every X Days – Enter the number of days between executions and the time of day
  - Weekly – Select the day of the week from the drop-down menu and enter the time of day
  - Monthly – Enter a number representing the day of the month and the time of day

**Step 4 –** Click **Save** to create the new schedule.

The new schedule is added to the Schedule Policy list.

# Edit Schedule Policy

Follow the steps to edit the scheduled tasks.

**Step 1 –** Navigate to the Policy > **Platforms** > **Schedule Policies** page.

**Step 2 –** Click the Edit icon to open the Schedule Policy Editor window.

![schedulepolicyeditor](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/edit/schedulepolicyeditor.webp)

**Step 3 –** From the Frequency radio buttons, set the frequency of how often the scheduled task is
run:

**NOTE:** The fields will change depending on the selected frequency.

- Every X Hours — Enter the number of hours between executions
- Every X Days— Enter the time of day
- Weekly — Select the day of the week from the drop-down menu and enter the time of day
- Monthly — Enter a number representing the day of the month and then enter the time of day

**Step 4 –** Click Save to accept the changes.

The task will run at the new scheduled frequency.

# Schedule Policies Page

The Schedule Policies page is accessible from the Navigation pane under Policies > Platforms. It
shows configured schedule policies.

Schedules can be applied:

- Platforms — Configure schedules used by resources on a given platform type. See the
  [Platforms Page](/docs/privilegesecure/4.1/administration/resources/platforms/index.md)
  topic for additional information.
- Protection Policy — See the
  [Protection Policies Page](/docs/privilegesecure/4.1/administration/access-policies/protection-policies.md)
  topic for additional information.
- Change Policy (credential rotation) — How often the password of a managed account is changed. See
  the
  [Credentials Dashboard](/docs/privilegesecure/4.1/administration/dashboard/credentials.md)
  topic for additional information on managed accounts.
- Host scan — Scan a host resources for local users, groups, windows services and scheduled tasks
- Verification — Check that the passwords for managed accounts match the credentials set by
  Privilege Secure

![Schedule Policies Page](/img/versioned_docs/threatprevention_7.4/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The pane on the left side of the page displays a list of the configured schedule policies. This pane
has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Green + button — Create a new schedule policy. See the
  [Add Schedule Policy](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
  topic for additional information.
- Trashcan icon — Deletes the schedule policy. Icon appears when profile is hovered over. A
  confirmation window will display.

**NOTE:** The default password policy cannot be deleted.

The selected schedule policy details display in the main pane:

- Name — Displays the schedule recurrence information
- Edit icon — Click the icon to edit the selected schedule policy. See the
  [Edit Schedule Policy](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
  topic for additional information.

# Schedule Tab for Protection Policies

The Schedule tab shows the schedule tasks for the resources in the selected protection policy. The
protection policy schedule is run based on the platform type configuration on the
[Platforms Page](/docs/privilegesecure/4.1/administration/resources/platforms/index.md).

![schedule](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/settings/schedule.webp)

The Schedule tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- View Logs — View the log for the selected task
- Refresh — Reload the information displayed

The table has the following columns:

- Task Name — Displays the name of the scheduled task. See the
  [Schedule Policies Page](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
  topic for additional information.
- Last Run Time — Date timestamp of the previous scheduled task
- Next Run Time — Date timestamp of the next scheduled task
- Recurrence — Indicates the scheduled recurrence
- Last Status — Shows the previous status information for the task
- Status — Shows status information for the task

The table columns can be resized and sorted in ascending or descending order.
