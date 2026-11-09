---
title: "Using Agent Cross Match"
description: "Using Agent Cross Match"
sidebar_position: 35
---

# Using Agent Cross Match

_Agent Cross Match_ extends the filter capabilities of the Control Saved Search.  The results of a Cross Match Control search is used to join the results of the Control Saved Search.  This is done using the intersecting field which is defined in the Cross Match Field.

The Agent Cross Match is accessed from the Customization record for the control.

1. Open **Strongpoint** > **Financial Controls** > **Controls**.
2. **Edit** the control to run.
3. Open the **Controls** tab.
4. Set **Control Type** to **Large Control**.
5. Set **Cross Match Control** to the Cross Match control search, this will be the secondary search used for join.
6. Set **Cross Match Operator**.  This defines the operation used to match the Cross Match Field with the results of the Cross Match Control search.
6. Set the **Cross Match Field**.  This is the Control Search Field to match with the results of the Cross Match Control search.
8. Click **Save**.

### Cross Match Operation


|  Operation            | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In List             | Matches the Cross Match Field with any of the result records of the Cross Match Control search.                                                                                                                                                                                                                                                                                  |
| Not In List       | Matches the Cross Match Field with none of the result records of the Cross Match Control search.                                                                                                                                                                                                                                                                                  |
| Greater Than | Matches the Control Search result record (Internal ID) and Cross Match Field with the Cross Match Control search result (Internal ID) and first result column.  The match is flagged true when the Control Search result value is greater than the Cross Match Control result.  |
| Lesser Than | Matches the Control Search result record (Internal ID) and Cross Match Field with the Cross Match Control search result (Internal ID) and first result column.  The match is flagged true when the Control Search result value is lesser than the Cross Match Control result. |
| Equal To | Matches the Control Search result record (Internal ID) and Cross Match Field with the Cross Match Control search result (Internal ID) and first result column.  The match is flagged true when the Control Search result value is equal to the Cross Match Control result. |
| Multiple Columns | Cross Matching 2 cross match fields with the Cross Match Control search. |

### Multiple Columns Operation

Multiple Columns Cross Match allows the user to fine tune the Cross Match Operation by using two (2) Cross Match Fields.
Cross Match comparison for each of the two columns can be as Text, Numeric, or Date data type.


![Multiple Columns Cross Match.](/images/platgovnetsuite/financial_controls/agent_multicolumncross.webp)


|  Data Type            |   Operation            |Description                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text             | Is             | The Main Control Search column is compared as text against the Cross Match Search column. |
| Date       | Before, On or Before, On, After, On or After  | The Main Control Search column must contain a date, and a row matches when that date falls before, on or before, on, after, or on or after the date in the Cross Match Search column. |
| Number | Lesser Than, Lesser Than or Equal To, Equal To, Greater Than, Greater Than or Equal To | The Main Control Search column must contain a numeric value, and a row matches when that number is lesser than, lesser than or equal to, equal to, greater than, or greater than or equal to the number in the Cross Match Search column. |