---
title: "Define Linked Combo Field Relationships in Directory Manager"
description: "Map linked fields to binding expressions and set parent-child relationships on the Schema page of the Linked Combo Display Type wizard."
keywords:
  - linked combo schema
  - binding expression
  - parent-child field relationship
  - linked combo display type
  - Directory Manager Portal
sidebar_position: 20
---

# Define Linked Combo Field Relationships in Directory Manager

On the **Schema** page of the **Linked Combo Display Type** wizard, define the parent-child relationship between fields. Every linked field must have a parent field, except the primary parent field. Each linked field also requires a data binding expression that defines its mapping with the underlying XML data. Directory Manager lists all possible data binding expressions, extracted from the XML source file, for you to select from.

To define the relationships:

1. Map the **Type binding expression** list to the first worksheet (0-`<worksheet name>`) of the source Excel workbook. The portal fields use the binding expression to reference the worksheet in the source file that they retrieve and display data from.

   Directory Manager generates the expressions in the **Type binding expression** list from the number of worksheets in the source Excel workbook and the number of columns in each worksheet.

   ![Type binding expression dropdown list showing expressions for the Company, Country, and City worksheets](/images/directorymanager/11.2/admincenter/portal/linkedcombo/binding_expressions_examples.webp)

   In an expression, worksheet names are enclosed in brackets, and the names of the data columns in the worksheets are without brackets. The expressions in the preceding figure indicate that the Excel workbook has three worksheets: Company, Country, and City.

   - The Company worksheet has one data column: Name.
   - The Country worksheet has two data columns: Name and State.
   - The City worksheet has four data columns: Name, Address, Address2, and ZipCode.

2. Use the grid on the **Schema** page to link and relate the data from the Excel workbook worksheets to the portal fields.

   1. Click **Add** to add a row.

      ![Child Fields area with Linked Field, Parent Field, and Binding Expression columns](/images/directorymanager/11.2/admincenter/portal/linkedcombo/child_fields.webp)

   2. In the **Linked Field** dropdown list, select a field, for example, Country. This field is linked to the data column that the binding expression you select in the **Binding Expression** dropdown list represents.

      The **Linked Field** list contains predefined, hard-coded fields. Each field is already mapped to a schema attribute. When you map a field to an expression, the values in the worksheet's data column become available for the field in the portal. When a portal user selects a value, it's set as the attribute's value for the field.

   3. For all rows except the first, use the **Parent Field** list to select the name of the parent field for the selected linked field. The **Parent Field** list doesn't apply to the first row. For example, when you select State in the **Linked Field** list, select Country as the parent field.
   4. In the **Binding Expression** dropdown list, select an expression that represents the data column you want to link to the field selected in the **Linked Field** list.

      Directory Manager generates the expressions from the number of worksheets in the source Excel workbook and the number of columns in each worksheet, as shown in the preceding figure.

   The following example shows the relationship for an Excel workbook with three worksheets: 0-Company, 1-Country, and 2-City. You can also create two linked combos to manage the relationship between these three fields.

   ![Schema grid linking Country, State, City, Office, and Zip fields to binding expressions](/images/directorymanager/11.2/admincenter/portal/linkedcombo/schema.webp)

   The relationship between the fields is as follows:

   - The Company field, which contains all records from the Name column on the Company worksheet, is the primary linked combo field in the portal.
   - The Country field in the portal contains all records from the Name column on the Country worksheet.
   - The State field in the portal contains all records from the State column on the Country worksheet. The Country field is the parent field for the State field. When a user selects a country, the State field shows the states in that country.
   - The City field in the portal contains all records from the Name column on the City worksheet. The State field is the parent field for the City field. When a user selects a state, the City field shows the cities in the selected state.

   The following table describes the complete structure of the data in the Excel workbook.

   | Worksheet | Column                       | Description                                       | Example   |
   | --------- | ---------------------------- | ------------------------------------------------- | --------- |
   | 0-Company | ID                           | Company identifier                                | 1000 2000 |
   | Name      | Company name                 | Netwrix Consulting Netwrix Software               |           |
   | 1-Country | FK                           | Company identifier with which to link this record | 1000 2000 |
   | ID        | Country identifier           | 1010 2010                                         |           |
   | Name      | Country name                 | United States Pakistan                            |           |
   | State     | State abbreviation           | CA PU                                             |           |
   | 2-City    | FK                           | Country identifier with which to link this record | 1010 2010 |
   | ID        | City identifier              | 1011 2011                                         |           |
   | Name      | City name                    | Livermore Lahore                                  |           |
   | Address   | Office address 1             | 5099 Preston Ave T8-A, Gulberg                    |           |
   | Address2  | Office address 2             |                                                   |           |
   | Zip Code  | Postal zip code or area code | 94551 54600                                       |           |
