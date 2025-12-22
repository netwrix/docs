---
title: "Create Search Requests"
description: "Create Search Requests"
sidebar_position: 30
---

# Create Search Requests

Search requests are generally batched and run as one (with the scheduled time set by the Super
User/s), as this will deliver maximum performance, minimize impact across the estate and prevent
delays caused by queuing. You can create as many search requests as needed.

To create a search request:

1. In administrative web console, navigate to Data Analysis → DSAR.
2. Locate the Searches tab.
3. Click Add on the right.
4. Complete the following fields:

    | Option             | Description                                                                                                                                                                                                                                                                                                                             |
    | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Case ID            | Enter Case ID. The Case ID is the unique ID given to the request, to allow tracking throughout the process. **NOTE:** If you choose an existing Case ID, you will be prompted to confirm that you want to run another search for the same ID. This will prevent multiple identical searches from being run for the same search request. |
    | Last Name\*        | Enter the last name to associate search results with a particular individual. **NOTE:** The last name alone will be passed as a clue – the first name/s alone will not. The field is not case sensitive.                                                                                                                                |
    | First Name\*       | Enter the first name to associate search results with a particular individual. **NOTE:** The field can be used only in conjunction with the last name.                                                                                                                                                                                  |
    | Email Address      | Enter email address. Email addresses are unique, so if they are identified within a file, it should be deemed relevant to the request. **NOTE:** The field is case-sensitive.                                                                                                                                                           |
    | Reference          | Specify additional references to identify an individual. You can add as many additional parameters as needed. For example: Customer reference, Account reference, Claim reference, Account number, etc.                                                                                                                                 |
    | Enable Date Search | Limit your search by specific date range.                                                                                                                                                                                                                                                                                               |

**\* - see Example**

**TIP:** After discussion with stakeholders and customers, it has become clear that many subject
access requests (SARs) are initiated as a means of finding specific information (e.g. former
employees looking for a particular email trail, etc.). In this scenario, the data is far easier to
find and collate if the only data retrieved pertains to a specified date range rather than ALL data.

## Example

This example describes the search mechanism for **First name** and **Last name** combination.

A search for First name(s) _John Richard_ with the Last name _Smith_ will be searched for as:

- John R Smith
- John Smith
- John Richard Smith
- J.R. Smith
- J. R. Smith
- Smith, J.
- Smith, J R
- Smith, JR
- Smith

See also:

- [View Search Query Results](/docs/dataclassification/5.7/dataanalysisoverview/dsar/viewsearchresults.md)
- [Manage Search Requests](/docs/dataclassification/5.7/dataanalysisoverview/dsar/searches.md)
