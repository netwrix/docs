---
description: >-
  Use taxonomy mappings or workflow actions to automatically apply Office
  Classification Labels to documents in SharePoint at the time of
  classification.
keywords:
  - Office Classification Labels
  - taxonomy mapping
  - SharePoint
  - O365 Label
  - classification
  - Taxonomy Manager
  - QS Administration
  - Workflow Action
  - auto-classification
products:
  - auditor
  - data-classification
visibility: public
sidebar_label: How to automatically apply Office Classification L
tags: []
title: "How to automatically apply Office Classification Labels"
knowledge_article_id: kA00g000000H9e4CAC
---

# How to automatically apply Office Classification Labels

The below steps can be followed to ensure that Office Classification Labels will be automatically applied at the time of classification.

There are two methods of applying labels, both of which are described below:

- **Taxonomy Mapping** - For a simple automated experience it is possible to assign labels to existing Term Set structures within **Taxonomy Manager**
- **Workflow Action** - For a more complex assignment experience it is also possible to both add, and remove labels via **Workflow Actions**

## Taxonomy Mapping

1. Log into the **QS Administration interface**
2. Navigate to the **Taxonomies** area
3. Navigate to the **Term** that is to be used to define when the **Classification Label** should be applied (please note, the **taxonomy** in question should be an auto-classified **SharePoint Term Set**)
4. Select the **Settings** tab
5. Scroll to the **Microsoft Office Classification Labels** section
6. Select **Add** and choose the label that you wish to apply (if the site collection has only recently been added then the label may not yet have been synchronised down)

### How does this work?

At the time of classification the Classifier process will identify any terms that have both met their threshold and also contain mappings to Office Classification Labels. The engine will then select the highest scoring term, and automatically apply the mapped label to the document in SharePoint (taking into account which labels are available per site collection as well as the setting specified at the term level).

## Workflow Action

1. Log into the **QS Administration interface**
2. Navigate to the **Workflows** area
3. Create a **Workflow**, either selecting a **SharePoint** source - or creating the workflow against the generic **SharePoint** type
4. Configure the **Workflow** conditions
5. Select **"Add"** to add a new **Rule Action**
6. Under **SharePoint**, select either: **"Write O365 Label"** or **"Remove O365 Label"**
7. Specify the **label** that should be **written** or **removed** and then select **Save**
