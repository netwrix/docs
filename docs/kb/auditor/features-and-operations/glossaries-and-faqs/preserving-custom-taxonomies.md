---
description: >-
  Describes how to export (backup) and import custom taxonomies in Netwrix Data
  Classification so you can protect them from SQL database loss and move them
  between instances.
keywords:
  - custom taxonomy
  - taxonomy backup
  - Netwrix Data Classification
  - export taxonomy
  - import taxonomy
  - SQL DB
  - XML
  - Global Settings
products:
  - auditor
  - data-classification
sidebar_label: Preserving Custom Taxonomies
tags: []
title: "Preserving Custom Taxonomies"
knowledge_article_id: kA00g000000Pbd5CAC
---

# Preserving Custom Taxonomies

## Situation

When installing Netwrix Data Classification there are 12 default Taxonomies that are available out of the box. These taxonomies are added to the SQL DB via the installer. In a situation where you have created a custom taxonomy, it is important to create a backup. This is because as a loss of the SQL DB for any reason will cause you to lose the custom taxonomy and force you to recreate it. This will also allow you to move custom taxonomies to multiple Netwrix Data Classification instances that each have their own SQL DB.

### Steps to Backup

1. From the Netwrix Data Classification dashboard (default: `http://localhost/conceptQS`) click **Taxonomies** at the top of the page  
2. Navigate to **Global Settings** found in the blue banner near the top of the page  
3. Find the custom taxonomy that you have created and click the checkbox to the immediate left of it  
4. Click **Export**, you will then be prompted by the browser to save an XML copy of the taxonomy.  
5. Place the XML file anywhere you would like for later retrieval.

### Steps to upload a taxonomy

1. From the Netwrix Data Classification dashboard (default: `http://localhost/conceptQS`) click **Taxonomies** at the top of the page
2. Navigate to **Global Settings** found in the blue banner near the top of the page  
3. Click **Add**, you will then be prompted with three options, in this situation we will be clicking **Upload**  
4. The next screen will prompt you to browse for the XML that you intend to upload. Once you’ve specified the correct file location, click **Next** and then **save**. You have successfully uploaded the taxonomy.
