---
title: "Work with Collected Data"
description: "Work with Collected Data"
sidebar_position: 20
---

# Work with Collected Data

Review the examples below for the possible scenarios on how to work with collected data.

## Example 1: Search by Index

1. Navigate to the Search page of the add-on or Search & Reporting Splunk app

2. Enter the search command:

   ```
   index=`<your_netwrix_index>`
   ```

   For example:

   ```
   index=netwrix
   ```

3. Press the Last 24 hours button and choose the All time range.

4. Press the search button; you should see list of the events indexed in Splunk.

5. Click the arrow button next to any of the returned event to expand the list of parsed fields and confirm that fields are populated properly.

If you don't see any fields, ensure that you are running the search in Smart or Verbose mode.

### Get all user account creation events from Microsoft Entra ID

1. Navigate to the **Search** page of the add-on or **Search & Reporting** Splunk app

2. Enter the search command:

   ```
   index=netwrix Action=”Added” ObjectType=”user”
   | table Who Action ObjectType What Where
   ```

3. Press the Last 24 hours button and choose the All time range.

## Example 2: Use Netwrix Auditor Fields in Index Search

1. Navigate to the **Search** page of the add-on or **Search & Reporting** Splunk app

2. Enter the search command:

   ```
   | datamodel `<data_model_name>` search
   | search sourcetype=netwrix
   ```

   For example:

   ```
   | datamodel Authentication search
   | search sourcetype=netwrix
   ```

3. Press the Last 24 hours button and choose the All time range.

4. Press the search button; you should see list of the events indexed in Splunk and mapped to the selected data model.

5. Click the arrow button next to any of the returned event to expand the list of parsed fields and confirm that fields are populated properly.

## Example 3: Use CIM Data Model Search and Data Model Fields

### Get all events for account deletion

1. Navigate to the Search page of the add-on or Search & Reporting Splunk app

2. Enter the search command:

   ```
   | datamodel Change search
   | search sourcetype=netwrix All_Changes.action=”deleted”
   | table All_Changes.vendor_product All_Changes.action All_Changes.src All_Changes.dest All_Changes.user All_Changes.object All_Changes.object_attrs
   ```

3. Press the Last 24 hours button and choose the All time range.
