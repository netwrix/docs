---
title: "Excel Data File Format for Linked Combos"
description: "Review the worksheet, identity column, name column, and foreign key rules your Excel workbook must follow to populate a linked combo display type."
keywords:
  - Excel data file format
  - linked combo workbook
  - worksheet naming
  - foreign key column
  - Directory Manager Portal
sidebar_position: 30
---

# Excel Data File Format for Linked Combos

The Microsoft Excel workbook you use for the linked combo display type must follow these rules.

1. Worksheet names: Name each worksheet in the format **Number-Name**.

   - Number is the serial number of the worksheet, based on its order. It starts from zero. The first worksheet is 0, the second is 1, the third is 2, and so on.
   - Name identifies the data the worksheet contains. It can be anything you want.

   ![Excel worksheet tabs named 0-Company, 1-Country, and 2-City](/images/directorymanager/11.1/admincenter/portal/linkedcombo/image.webp)

2. Identity column: Add an identity (ID) column to each worksheet. It contains a unique value for every record in the worksheet.

   ![Worksheet with an ID column and a Name column](/images/directorymanager/11.1/admincenter/portal/linkedcombo/image1.webp)

3. Name column: Add a Name column to each worksheet. It contains the values the linked combo displays. For example, the Name column in the 0-Company worksheet contains the company name for every record in the worksheet.

4. Foreign key column: Add a foreign key (FK) column to each worksheet that contains data related to the previous worksheet. This column contains the ID of the record in the immediately previous worksheet that the current record relates to.

   ![Worksheet with FK, ID, Name, and State columns](/images/directorymanager/11.1/admincenter/portal/linkedcombo/image2.webp)
