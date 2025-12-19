---
title: "Web Request: Destination"
description: "Web Request: Destination"
sidebar_position: 10
---

# Web Request: Destination

Use the Destination page to specify all settings for the destination of the web request.

![Web Request Action Module Wizard Destination page](/images/accessanalyzer/11.6/admin/action/webrequest/destination.webp)

Use the following categories to establish the location of the web request:

- Insert field – Select a field using the drop-down menu

    :::note
    The fields available varies based on the source table columns.
    :::


**Destination Information**

- Method – Use the dropdown to select a method from the following:

    - GET
    - POST
    - PUT
    - DELETE
    - HEAD
    - OPTIONS
    - PATCH
    - MERGE
    - COPY

- Follow Redirects – Enables the web request to follow redirects
- Combine SQL rows into single request – Enables bulk insertion of the number of rows specified into
  a single web request

    - Rows – Select the number of rows to combine. The default is 50.

- Resource – URL destination to send the data via the web request

    - Select a field using the drop-down menu, place the cursor in the Resource textbox, and click
      the blue down-arrow to add it to the Resource box
    - Manually enter a resource in the textbox

    :::note
    A red circle with an x indicates that the Resource field cannot be empty.
    :::


- Authentication – Select an authentication method from the following:

    - None – No authentication
    - Basic – Basic authentication
    - JWT – JSON Web Token, a URL-safe authentication method

    Basic and JWT authentications are pulled from the credential profile set in the job. It inserts
    that data into the authentication header of the web request with the proper format expected (for
    example, Basic [Base64 encoded credentials] or Bearer [JWT token] for Basic and JWT
    authentication respectively).

**Test Connection**

- Drop-down menu – Select a method to test. Currently locked to GET.
- URI textbox – Input the resource to receive the test message

    - Select a field using the drop-down menu, place the cursor in text area, and click the blue
      down-arrow to add it to the URI textbox
    - Manually enter a resource in the field

        :::note
        Red circle with x indicates
        `Invalid URI: The format of the URI could not be determined`.
        :::


- Test – Tests the connection for the request using the first row of the source table
- Text box – Shows log messages from the connection test
