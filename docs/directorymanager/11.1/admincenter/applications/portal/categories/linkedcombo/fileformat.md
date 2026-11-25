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

The following table explains the rules for the Microsoft Excel workbook to use for the linked combo
display type:

|     | Rule for           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Worksheet names    | The worksheet names should follow the format: **Number-Name** Where: <ul><li>_Number_ is the serial number based on the order of the worksheet and it should start from zero. This means that the number for the first worksheet should be 0, the second should be 1, the third should be 2, and so on.</li><li>_Name_ is the name of the worksheet that identifies the data it contains. It can be anything you want. ![Excel worksheet tabs named 0-Company, 1-Country, and 2-City](/images/directorymanager/11.1/admincenter/portal/linkedcombo/image.webp)</li></ul> |
| 2.  | Identity column    | Each worksheet should have an identity _(ID)_ column that contains a unique value for every record entered in the sheet. ![Worksheet with an ID column and a Name column](/images/directorymanager/11.1/admincenter/portal/linkedcombo/image1.webp)                                                                                                                                                                                                                                                                                                       |
| 3.  | Name column        | Each worksheet should have a _Name_ column. This column contains the values to be displayed in the linked combo. For example, the _Name_ column in the 0-Company worksheet contains the company name for every record in the sheet.                                                                                                                                                                                                                                                                                          |
| 4.  | Foreign Key column | Each worksheet that contains data related to that on the previous sheet, should have a foreign key identity column (_FK_). This column contains the ID of the record (from the immediately previous sheet) that the current record relates to. ![Worksheet with FK, ID, Name, and State columns](/images/directorymanager/11.1/admincenter/portal/linkedcombo/image2.webp)                                                                                                                                                                                 |
