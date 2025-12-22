---
title: "Linked Combo Type - Schema"
description: "Linked Combo Type - Schema"
sidebar_position: 20
---

# Linked Combo Type - Schema

On the **Schema** page of the **Linked Combo Display Type** wizard, define the parent-child
relationship between fields. Every linked field must have a parent field except the primary parent
field. Each linked field also requires a data binding expression that defines its mapping with the
underlying XML data. Directory Manager provides a list of all possible data binding expressions
(extracted from the XML source file) to select from.

Do the following:

1. Map the **Type binding expression** list to the first worksheet (0-`<worksheet name>`) of the
   source Excel workbook. The portal fields use the binding expression to obtain reference to the
   worksheet in the source file to retrieve and display data from.
   Expressions in the **Type binding expression** list are auto generated with respect to the number
   of sheets in the source Excel workbook and the number of columns in a sheet. It is as:

    ![binding_expressions_examples](/images/directorymanager/11.1/admincenter/portal/linkedcombo/binding_expressions_examples.webp)

    In an expression, worksheet names are enclosed in brackets while the names of the data columns
    in the worksheets are without brackets. The expressions in the figure above indicate that the
    Excel workbook has three worksheets: _Company_, _Country_, and _City_.

    - The _Company_ worksheet has one data column: _Name_.
    - The _Country_ worksheet has two data columns: _Name_ and _State_.
    - The _City_ worksheet has four data columns: _Name_, _Address_, _Address2_, and _ZipCode_.

2. Use the grid on the **Schema** page to link and relate the data from the Excel workbook sheets to
   the portal fields.

    1. Click **Add** to add a row.

        ![child_fields](/images/directorymanager/11.1/admincenter/portal/linkedcombo/child_fields.webp)

    2. In the **Linked Field** drop-down list, select a field (for example, Country). This field
       will be linked to the data column represented by the binding expression you select in the
       **Binding Expression** drop-down list.
       The **Linked Field** list contains predefined, hard coded fields, where each field is already
       mapped to a schema attribute. When you map a field to an expression, the values in the
       worksheet’s data column will be available for the field in the portal. When a portal user
       selects a value, it is set as the attribute’s value for the field.
    3. The **Parent Field** list does not apply to the first row. For all other rows, use it to
       select the name of the parent field for the selected linked field. For example, when _State_
       is selected in the _Linked Field_ list, select Country as the parent field.
    4. In the **Binding Expression** drop-down list, select an expression that represents the data
       column you want to link to the field selected in the **Linked Field** list.
       Expressions are auto generated with respect to the number of sheets in the source Excel
       workbook and the number of columns in a sheet, as shown in the figure above.

    The following example shows the relationship for an Excel workbook with three worksheets:
    0-Company, 1-Country, and 2-City. (You can also create two linked combos to manage the
    relationship between these three fields.)

    ![schema](/images/directorymanager/11.1/admincenter/portal/linkedcombo/schema.webp)

    The relationship formed between fields can be explained as:

    - The Company field, containing all records from the Name column on the Company worksheet, will
      be the primary linked combo field in the portal.
    - The Country field in the portal will contain all records from the Name column on the Country
      worksheet.
    - The State field in the portal will contain all records from the State column on the Country
      worksheet. The Country field will be the parent field for the State field, which means that
      when a user selects a country, the State field will show the states in that country.
    - The City field in the portal will contain all records from the Name column on the City
      worksheet. The State field will be the parent field for the City field, which means that when
      a user selects a state, the City field will show the cities in the selected state.

    The complete structure for the data in the Excel workbook is explained in the following table.

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
