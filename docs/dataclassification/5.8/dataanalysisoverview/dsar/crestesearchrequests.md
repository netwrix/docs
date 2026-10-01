---
title: "Create Search Requests"
description: "Create Search Requests"
sidebar_position: 30
---

# Create Search Requests

The product generally batches search requests and runs them as one (with the scheduled time set by
the Super User/s), as this delivers maximum performance, minimizes impact across the estate, and
prevents delays caused by queuing. You can create as many search requests as needed.

To create a search request:

1. In administrative web console, navigate to Data Analysis → DSAR.
2. Locate the Searches tab.
3. Click Add on the right.
4. Complete the following fields:

    | Option             | Description                                                                                                                                                                                                                                                                                                                             |
    | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Case ID            | Enter Case ID. The Case ID is the unique ID given to the request, to allow tracking throughout the process. **NOTE:** If you choose an existing Case ID, the system prompts you to confirm that you want to run another search for the same ID. This prevents multiple identical searches for the same search request. |
    | Last Name\*        | Enter the last name to associate search results with a particular individual. **NOTE:** The system passes the last name alone as a clue – it doesn't pass the first name/s alone. The field isn't case sensitive.                                                                                                                                |
    | First Name\*       | Enter the first name to associate search results with a particular individual. **NOTE:** You can use the field only in conjunction with the last name.                                                                                                                                                                                  |
    | Email Address      | Enter email address. Email addresses are unique, so if the system identifies one within a file, consider the file relevant to the request. **NOTE:** The field is case-sensitive.                                                                                                                                                           |
    | Reference          | Specify additional references to identify an individual. You can add as many additional parameters as needed. For example: Customer reference, Account reference, Claim reference, Account number, etc.                                                                                                                                 |
    | Enable Date Search | Limit your search by specific date range.                                                                                                                                                                                                                                                                                               |

**\* - see Example**

**TIP:** Many subject access requests (SARs) aim to find specific information (e.g. former
employees looking for a particular email trail, etc.). In this scenario, restricting data retrieval to a specified date range rather than ALL data makes the data more manageable to find and collate.

## Example

This example describes the search mechanism for **First name** and **Last name** combination.

A search for first names _John Richard_ with the last name _Smith_ matches the following:

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

- [View Search Query Results](/docs/dataclassification/5.8/dataanalysisoverview/dsar/viewsearchresults.md)
- [Manage Search Requests](/docs/dataclassification/5.8/dataanalysisoverview/dsar/searches.md)
