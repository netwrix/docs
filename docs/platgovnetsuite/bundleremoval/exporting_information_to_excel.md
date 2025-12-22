---
title: "Exporting Information to Excel"
description: "Exporting Information to Excel"
sidebar_position: 60
---

# Exporting Information to Excel

You can export the information from the removal scenarios to Excel and then search for the
customizations affected by the bundle removal. Here is an example of using the removal scenarios 5
and 6 to find affected customizations.

- Scenario 5: **Outside bundle referencing inside**. All customizations built in the account that
  make use of the bundle components.
- Scenario 6: **In bundle referenced by outside**. Opposite of Scenario 5

## Export the Results

To export the results to Excel:

1. Select **View** on **Removal Scenarios 5 and 6**.
2. Click on the **Excel** icon.
3. Export **Removal Scenario 5** and **Scenario 6** to Excel.
4. Choose the record you want to investigate. (for example, **custom open task default**)
5. Each record shows all its relationships (both inside and outside bundle).

## Find Relationships that Only Exist Within the Bundle

To find the relationships that only exist within the bundle:

1. Copy the name of a record.
2. Go to the opposite scenario and do a search with the pasted name.
3. This shows you the bundle components that are being used so you are aware of what will be removed
   when the bundle is gone. These are the records that need to be replicated.

**Next Step:** [Final Tasks](/docs/platgovnetsuite/bundleremoval/final_tasks.md)
