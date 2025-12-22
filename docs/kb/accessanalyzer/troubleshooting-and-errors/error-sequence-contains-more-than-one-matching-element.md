---
description: >-
  Explains how to resolve the "Sequence contains more than one matching
  element." error in Netwrix Access Analyzer by removing duplicate entries from
  the report.xml file.
keywords:
  - Sequence contains more than one matching element
  - report.xml
  - Netwrix Access Analyzer
  - report generation
  - duplicate entries
  - Reports\report.xml
  - report error
  - remove duplicate report
products:
  - access-analyzer
sidebar_label: 'Error: Sequence Contains More Than One Matching El'
tags:
  - troubleshooting-and-errors
title: 'Error: Sequence Contains More Than One Matching Element'
knowledge_article_id: kA0Qk0000001o7dKAA
---

# Error: Sequence Contains More Than One Matching Element

## Symptom

When running a job in Netwrix Access Analyzer that generates a report, the report generation fails with the error:

`Sequence contains more than one matching element.`

## Cause

Duplicate entries in the ` %sainstalldir%\Reports\report.xml` file lead to the report failing to populate, as it cannot be determined which field is correct.

### Report Configuration Example

```xml
<Reports>
  <Report>
    <Id>{F5BE87EC-11E4-4779-93C9-462DB92F68E4}</Id>
    <Name>Attribute Changes</Name>
    <Version>3</Version>
    <Author>Netwrix Corporation</Author>
    <Published>true</Published>
    <Generated>Monday, January 27, 2025 5:00 PM</Generated>
    <Description>This report tracks attribute changes within Active Directory.</Description>
    <Tags />
  </Report>
  <Report>
    <Id>{F5BE87EC-11E4-4779-93C9-462DB92F68E4}</Id>
    <Name>Attribute Changes</Name>
    <Version>3</Version>
    <Author>Netwrix Corporation</Author>
    <Published>true</Published>
    <Generated>Monday, January 27, 2025 5:00 PM</Generated>
    <Description>This report tracks attribute changes within Active Directory.</Description>
    <Tags />
  </Report>
</Reports>
```

## Resolution

To resolve this issue, follow these steps:

1. Open the ` %sainstalldir%\Reports\report.xml` file in a text editor.
2. Locate and remove all duplicate entries for the job causing the error.
   I. Copy the line that begins and ends with ` <Id>` and `</Id>`. Search the file for this line.  
   II. Remove any duplicates of the corresponding ` <Report></Report>` section.
3. Save the file.
4. Run the job again to generate the report.

### Report Configuration Example

```xml
<Reports>
  <Report>
    <Id>{F5BE87EC-11E4-4779-93C9-462DB92F68E4}</Id>
    <Name>Attribute Changes</Name>
    <Version>3</Version>
    <Author>Netwrix Corporation</Author>
    <Published>true</Published>
    <Generated>Monday, January 27, 2025 5:00 PM</Generated>
    <Description>This report tracks attribute changes within Active Directory.</Description>
    <Tags />
  </Report>
</Reports>
```
