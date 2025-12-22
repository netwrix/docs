---
title: "Restore Fields"
description: "Restore Fields"
sidebar_position: 80
---

# Restore Fields

There is not a direct restore tool for fields, however you can get your archived fields back using
**Import Assistant** and the CSV file created for archiving.

## Import Assistant

1. Open **Setup** > **Import/Export** > **Import CSV Records**
2. Under **Import Type**, choose the category of data you plan on restoring. For example:
   Accounting.
3. Under **Record Type**, choose the record type of data you plan on restoring. For example: Chart
   of Accounts.
4. Click **Select**

    ![importassistant-2](/images/platgovnetsuite/clean_up/importassistant-2.webp)

5. Select your CSV archive file. and click **Open**
6. Click **Next**

    ![importoptions](/images/platgovnetsuite/clean_up/importoptions.webp)

7. Under **Data Handling**, choose **UPDATE**
8. Click **Next**
9. Under **Your Fields**, select **internalid**(Value).
10. Under **NetSuite Fields**, select **Internal ID**.
11. Under **Your Fields**, select the column from your CSV archive file that you want to restore and
    select the relevant NetSuite Field where you want them restored.

    ![fieldmapping](/images/platgovnetsuite/clean_up/fieldmapping.webp)

12. Click **Next**
13. Click **Run**

    ![savemapping](/images/platgovnetsuite/clean_up/savemapping.webp)

    A finished screen appears with a confirmation message and a link to the **Import Job Status**.

14. Click **Import Job Status**.

    ![jobstatus](/images/platgovnetsuite/clean_up/jobstatus.webp)

15. Click **Refresh** until the import process is completed.

    ![jobstatus-1](/images/platgovnetsuite/clean_up/jobstatus-1.webp)
