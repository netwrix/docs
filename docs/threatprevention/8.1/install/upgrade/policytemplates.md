---
title: "Upgrade Policy Templates"
description: "Upgrade Policy Templates"
sidebar_position: 10
---

# Upgrade Policy Templates

When new or updated policy templates are available with a Threat Prevention upgrade, the
installation of the latest version doesn't import them automatically. Use the Import feature to update
templates and import new templates.

:::tip
Remember, use these steps when you selected **No** in the Templates Update window during
the [Upgrade Procedure](/docs/threatprevention/8.1/install/upgrade/overview.md) process.
:::


To upgrade policy templates and import new templates:

**Step 1 –** Click **Tools** > **Import** on the menu to open the Import window.

**Step 2 –** In the Select Import File field, use the ellipsis (…) to browse to:

**…\Netwrix\Netwrix Threat Prevention\SIWinConsole**

**Step 3 –** To import all new templates, select the **SI_Template_All** XML file. Click **Open**.

**Step 4 –** The Import window displays information for the templates. Click **Import**.

**Step 5 –** An Import Decision window opens when the import finds a duplicate collection or template.
Choose between:

- Replace Existing
- Create New
- Add to (for Collections only)
- Skip

**Step 6 –** Check the Apply to All box option to apply the selection to all duplicates found.

:::note
To only import new templates, check the **Apply to All** box and select **Skip**.
:::


**Step 7 –** When the Operation Completed message displays, click **OK**.

You can now access these new policy templates from under the Templates node in the Navigation pane.
