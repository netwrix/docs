---
title: "When to Use \"Don't Elevate Open/Save Dialog\""
description: "When to Use \"Don't Elevate Open/Save Dialog\""
sidebar_position: 50
---

# When to Use "Don't Elevate Open/Save Dialog"

:::note
For more information see the
[Increase security by reducing rights on Open/Save dialogs](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/opensavedialogs.md)
video on this topic.
:::


The default on all rules is **Don't Elevate the Open/Save dialog**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/bestpractices/when_to_use_don_t_elevate.webp)

In general it should be left as is, unless there is a reason to change it.

When an application is being elevated but the **"Don't Elevate the Open/Save dialog"** is checked,
then Open/Save dialogs launched from the elevated process will be run as a standard user. This is
preferable because when an Open/Save dialog is run elevated, the user can right click inside the
Open/Save dialog and possibly bypass security to run programs. In the screenshot example, the user
can right click inside the Open/Save dialog and select **Open PowerShell window here**. This would
launch PowerShell elevated.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/bestpractices/when_to_use_don_t_elevate.webp)

Don't elevate Open/Save dialogs to bypass security

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/bestpractices/when_to_use_don_t_elevate.webp)

Note that Wordpad.exe was launched elevated from an LPM rule. But the Open dialog was not elevated
because **"Don't Elevate the Open/Save dialog"** is selected. This makes it impossible for users to
right click inside the Open/Save dialog and gain elevated privilege to launch other applications.

If, however, you need the Open/Save dialog to be elevated, you can uncheck the option, and the
Open/Save dialog will be elevated as well. This is sometimes required if applications require access
to files or directories that the standard user doesn't have access to.



