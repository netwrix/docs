---
title: "Work with Collected Data"
description: "Work with Collected Data"
sidebar_position: 20
---

# Work with Collected Data

Review the examples below for the possible scenarios on how to work with collected data.

## Example 1: Search by Index

Follow the steps to search by index:

**Step 1 –** Navigate to the Search page of the add-on or Search & Reporting Splunk app

**Step 2 –** Enter the search command:

index=`<your_netwrix_index>`

for example:

index=netwrix

**Step 3 –** Press the Last 24 hours button and choose All time time range.

**Step 4 –** Press the search button; you should see list of the events currently indexed in Splunk.

**Step 5 –** Click on the arrow button next to any of the returned event to expand the list of
parsed fields and confirm that fields are populated properly.

If you do not see any fields, make sure that you are running the search in Smart or Verbose mode.

Follow the steps to get all user account creation events from Microsoft Entra ID (formerly Azure AD)
ports .

**Step 1 –** Navigate to the **Search** page of the add-on or **Search & Reporting** Splunk app

**Step 2 –** Enter the search command:

index=netwrix Action=”Added” ObjectType=”user”

| table Who Action ObjectType What Where

**Step 3 –** Press the Last 24 hours button and choose All time time range.

## Example 2: Use Netwrix Auditor Fields in Index Search

Follow the steps to use Auditor fields in index search:

**Step 1 –** Navigate to the **Search** page of the add-on or **Search & Reporting** Splunk app

**Step 2 –** Enter the search command:

| datamodel `<data_model_name>` search

| search sourcetype=netwrix

for example:

| datamodel Authentication search

| search sourcetype=netwrix

**Step 3 –** Press the Last 24 hours button and choose All time time range.

**Step 4 –** Press the search button; you should see list of the events currently indexed in Splunk
and mapped to the selected data model.

**Step 5 –** Click on the arrow button next to any of the returned event to expand the list of
parsed fields and confirm that fields are populated properly.

## Example 3: Use CIM Data Model Search and Data Model Fields

Follow the steps to get all events for account deletion:

**Step 1 –** Navigate to the Search page of the add-on or Search & Reporting Splunk app

**Step 2 –** Enter the search command:

| datamodel Change search

| search sourcetype=netwrix All_Changes.action=”deleted”

| table All_Changes.vendor_product All_Changes.action All_Changes.src All_Changes.dest
All_Changes.user All_Changes.object All_Changes.object_attrs

**Step 3 –** Press the Last 24 hours button and choose All time time range.
