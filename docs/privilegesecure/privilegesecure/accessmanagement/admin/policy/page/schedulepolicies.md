# Schedule Policies Page

The Schedule Policies page is accessible from the Navigation pane under Policies > Platforms. It
shows configured schedule policies.

Schedules can be applied:

- Platforms — Configure schedules used by resources on a given platform type. See the
  [Platforms Page](platforms/overview.md) topic for additional information.
- Protection Policy — See the [Protection Policies Page](protectionpolicies.md) topic for additional
  information.
- Change Policy (credential rotation) — How often the password of a managed account is changed. See
  the [Credentials Dashboard](../../dashboard/credentials.md) topic for additional information on
  managed accounts.
- Host scan — Scan a host resources for local users, groups, windows services and scheduled tasks
- Verification — Check that the passwords for managed accounts match the credentials set by
  Privilege Secure

![Schedule Policies Page](../../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The pane on the left side of the page displays a list of the configured schedule policies. This pane
has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Green + button — Create a new schedule policy. See the
  [Add Schedule Policy](../add/schedulepolicy.md) topic for additional information.
- Trashcan icon — Deletes the schedule policy. Icon appears when profile is hovered over. A
  confirmation window will display.

**NOTE:** The default password policy cannot be deleted.

The selected schedule policy details display in the main pane:

- Name — Displays the schedule recurrence information
- Edit icon — Click the icon to edit the selected schedule policy. See the
  [Edit Schedule Policy](../edit/schedulepolicy.md) topic for additional information.
