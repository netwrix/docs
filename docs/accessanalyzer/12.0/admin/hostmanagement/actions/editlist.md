---
title: "Edit List"
description: "Edit List"
sidebar_position: 50
---

# Edit List

Use the **Edit List** option to edit properties for the selected host list. This option is available
only from an individual host list node.

![Edit List option on Activities pane](/images/accessanalyzer/12.0/admin/hostmanagement/actions/editlist.webp)

Select the host list to edit and click **Edit List**. The Host List Wizard opens for the selected
host list. If the selected host list is a custom static host list, the wizard opens on the Manual
Host Entry page where you can add and remove hosts from the list. Other host lists open directly to
the Specify Host List Properties page where you can modify the following:

- Host List Name

    :::warning
    Changing the name of a host list that has been assigned to a job can cause the job
    to fail.
    :::


- Refresh inventory setting
- Credentials used for host inventory

See the [Add Hosts](/docs/accessanalyzer/12.0/admin/hostmanagement/actions/add.md) topic for information on modifying these settings.
