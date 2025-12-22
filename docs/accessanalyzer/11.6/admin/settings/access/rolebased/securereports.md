---
title: "Securing Published Reports Only"
description: "Securing Published Reports Only"
sidebar_position: 60
---

# Securing Published Reports Only

In order to secure published reports through the Web Console, it is necessary to enable Role Based
Access within the Enterprise Auditor Console. If that is the only reason the Role Based Access
feature is being enabled, ensure the following requirements are met:

- Administrator role assigned to all Enterprise Auditor Console users

    - Anyone not assigned an Administrator role are unable to access the Enterprise Auditor Console
      after Role Based Access is enabled

- Web Administrator role assigned to individuals who should have access to all reports, tags, and
  report permissions but not the Enterprise Auditor Console
- Report Viewer assigned to individuals who should have access to reports and tags but not report
  permissions or the Enterprise Auditor Console

    - Global Level Assignment – Access to all reports
    - Job Group Level Assignment – Access to reports published by jobs within the job group
    - Job Level Assignment – Access to reports published by the job
    - Report Configuration Level Assignment – Access to the specific report

Follow the steps to assign roles at the global level.

**Step 1 –** Navigate to the **Settings** > **Access** node.

![Add Access option on the Access page](/images/accessanalyzer/11.6/admin/settings/access/rolebased/addaccess.webp)

**Step 2 –** On the Access page, click **Add Access**. The Access Type wizard opens.

![Access Type page of the Access Role wizard](/images/accessanalyzer/11.6/admin/settings/access/rolebased/accesstypeuser.webp)

**Step 3 –** Select the **A user or group accessing this console** option. Click **Next**.

![Console Access page of the Access Role wizard](/images/accessanalyzer/11.6/admin/settings/access/rolebased/consoleaccess.webp)

**Step 4 –** On the Console Access page, specify a group or user in the **Name** field. Use the
ellipsis (**…**) to browse for accounts with the Select User or Group window.

![Console Access page with user added](/images/accessanalyzer/11.6/admin/settings/access/rolebased/consoleaccessfinish.webp)

**Step 5 –** Select a role for the group or user from the Role list. Click **Finish**. The group or
user and role is added to the Role Membership list in the Roles view.

:::warning
The first role or set of roles saved must include the Administrator role. Clicking Save
for the first role or set or roles without including the Administrator generates an error message in
the Enterprise Auditor Console.
:::


**Step 6 –** Repeat Steps 2-4 to assign the Administrator, Web Administrator, and Report Viewer
roles to other groups or users.

**Step 7 –** Click **Save** and then **OK** to confirm the changes. All applied roles are lost if
they are not saved.

Role Based Access is enabled when the first role has been assigned.

![Error message when Administrator role is not specified](/images/accessanalyzer/11.6/admin/settings/access/rolebased/noadminerror.webp)

The first role or set of roles saved must include the Administrator role. Clicking **Save** for the
first role or set or roles without including the Administrator generates an error message in the
Enterprise Auditor Console.

When Role Based Access is first enabled, restart the Enterprise Auditor application to ensure all
roles are properly active. The Report Viewer role can be assigned at the job group, job, and report
configuration levels. See the
[Reporting Node](/docs/accessanalyzer/11.6/admin/jobs/group/settings/reporting.md),
[Report Roles Tab](/docs/accessanalyzer/11.6/admin/jobs/job/properties/reportroles.md),
and
[Publish Security Page](/docs/accessanalyzer/11.6/admin/report/wizard/publishsecurity.md)
topics for additional information.
