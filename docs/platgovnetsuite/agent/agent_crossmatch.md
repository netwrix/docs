---
title: "Using Agent Cross Match"
description: "Using Agent Cross Match"
sidebar_position: 35
---

# Using Agent Cross Match

_Agent Cross Match_ extends the filter capabilities of a control by using two saved searches: the _main search_ (the control's saved search) and the _Cross Match search_ (a second saved search). The results of the Cross Match search are used to join the results of the main search. The join uses the intersecting field that's defined in the **Cross Match Field**.

For example, use Cross Match to remove false positives from a search for transactions touched by an administrator. The main search returns all transactions by an administrator, the Cross Match search returns employees with the administrator role, and Cross Match returns only the transactions where both match.

The Agent Cross Match is accessed from the Customization record for the control.

Before you begin, create the saved search to use as the Cross Match search. For the Greater Than, Lesser Than, and Equal To operators, the first result column of this search must contain the value to compare.

1. Open **Strongpoint** > **Financial Controls** > **Controls**.
2. **Edit** the control to run.
3. Open the **Controls** tab.
4. Set **Control Type** to **Large Control**. Cross Match runs only on Large Controls.
5. Set **Cross Match Control** to the Cross Match search. This is the secondary search used for the join.
6. Set the **Cross Match Field**. This is the main search field to match with the results of the Cross Match search. Skip this step if you use the Multiple Columns operator.
7. Set **Cross Match Operator**. For the available operators, see [Cross Match operators](#cross-match-operators).
8. Click **Save**.

## Cross Match operators


|  Operator            | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In List             | Matches the Cross Match Field with any of the result records of the Cross Match search.                                                                                                                                                                                                                                                                                  |
| Not In List       | Matches the Cross Match Field with none of the result records of the Cross Match search.                                                                                                                                                                                                                                                                                  |
| Greater Than | Pairs each main search result with the Cross Match search result that has the same Internal ID. The row matches when the Cross Match Field value is greater than the value in the first result column of the Cross Match search. |
| Lesser Than | Pairs each main search result with the Cross Match search result that has the same Internal ID. The row matches when the Cross Match Field value is lesser than the value in the first result column of the Cross Match search. |
| Equal To | Pairs each main search result with the Cross Match search result that has the same Internal ID. The row matches when the Cross Match Field value is equal to the value in the first result column of the Cross Match search. |
| Multiple Columns | Compares two fields from the main search with two columns from the Cross Match search. For more information, see [Multiple Columns operator](#multiple-columns-operator). |

## Multiple Columns operator

The Multiple Columns operator lets you fine tune the Cross Match by comparing two columns from the main search with two columns from the Cross Match search.
Each of the two comparisons can use the Text, Numeric, or Date data type.

To set up a Multiple Columns Cross Match:

1. Set **Cross Match Operator** to **Multiple Columns**. Leave **Cross Match Field** empty. The column table replaces it.
2. In each of the two rows of the column table, set the following:
   - **Data Type**: the data type to compare as.
   - **Main Control Search Columns**: the main search column to compare.
   - **Operator**: the comparison to use. For the available operations, see the following table.
   - **Cross Match Search Columns**: the Cross Match search column to compare against.
3. Click **Save**.

![Multiple Columns Cross Match.](/images/platgovnetsuite/financial_controls/agent_multicolumncross.webp)


|  Data Type            |   Operation            |Description                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text             | Is             | A row matches when the main search column contains exactly the same text as the Cross Match search column. The match is case-sensitive. |
| Date       | Before, On or Before, On, After, On or After  | The main search column must contain a date, and a row matches when that date falls before, on or before, on, after, or on or after the date in the Cross Match search column. |
| Number | Lesser Than, Lesser Than or Equal To, Equal To, Greater Than, Greater Than or Equal To | The main search column must contain a numeric value, and a row matches when that number is lesser than, lesser than or equal to, equal to, greater than, or greater than or equal to the number in the Cross Match search column. |
