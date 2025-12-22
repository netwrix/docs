---
title: "Upgrade Policy Templates"
description: "Upgrade Policy Templates"
sidebar_position: 10
---

# Upgrade Policy Templates

When new or updated policy templates are available with a Threat Prevention upgrade, they are not
automatically imported when you install the latest version. The Import feature can be used to update
templates and import new templates.

:::tip
Remember, use these steps when the Templates Update window option was selected as **No** during
the
[Upgrade Procedure](/docs/threatprevention/7.4/install/upgrade/overview.md)
process.
:::


Follow the steps to upgrade policy templates and import new templates.

**Step 1 –** Click **Tools** > **Import** on the menu to open the Import window.

**Step 2 –** In the Select Import File field, use the ellipsis (…) to browse to:

**…\Netwrix\Netwrix Threat Prevention\SIWinConsole**

**Step 3 –** To import all new templates, select the **SI_Template_All** XML file. Click **Open**.

**Step 4 –** The Import window displays information for the template(s). Click **Import**.

**Step 5 –** An Import Decision window opens when a duplicate collection or template is found.
Choose between:

- Replace Existing
- Create New
- Add to (for Collections only)
- Skip

**Step 6 –** Check the Apply to All box option to apply the selection to all duplicates found.

:::note
To only import new templates, check the **Apply to All** box and select **Skip**.
:::


**Step 7 –** When the Operation Completed message us displayed, click **OK**.

These new policy templates can now be accessed from under the Templates node in the Navigation pane.
