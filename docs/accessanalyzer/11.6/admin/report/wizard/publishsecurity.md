---
title: "Publish Security Page"
description: "Publish Security Page"
sidebar_position: 30
---

# Publish Security Page

The Publish Security page of the Report Configuration wizard contains the account names of users
with inherited permissions to view the generated report.

:::note
This page is only enabled if Role Based Access is configured for the Enterprise Auditor
Console. See the
[Role Based Access](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/overview.md)
topic for additional information.
:::


![Publish Security page](/images/accessanalyzer/11.6/admin/report/wizard/publishsecurity.webp)

Roles assigned at the global level are inherited down to the report configuration. Additional report
viewer privileges can also be added at the job group or job levels.

De-select the Include Report Reviewers from this object's parent checkbox to remove all inherited
accounts with the Report Viewer role.

You can add additional users, groups, and service accounts with the Report Viewer role at the Report
level. This gives them the permission to view the specific report in the Web Console. Follow the
steps to add an account.

**Step 1 –** Click **Add**.

![Select User, Service Account, or Group window](/images/accessanalyzer/11.6/admin/report/wizard/addreportviewer.webp)

**Step 2 –** On the Select User, Service Account or Group window, select the desired account and
then click **OK**.

![Report Viewer user added in wizard](/images/accessanalyzer/11.6/admin/report/wizard/reportviewer.webp)

The selected account is added to the list with a Role of Report Viewer.

:::note
The permission for accounts that are not Inherited can also be removed using the wizard.
To remove an account, select it and then click **Remove**.

:::
