---
description: >-
  Shows how to use custom sensitive file categories in the Sensitive Data
  Discovery module so Netwrix Auditor can generate reports using taxonomies from
  Netwrix Data Classification.
keywords:
  - sensitive data
  - taxonomy
  - Netwrix Auditor
  - Netwrix Data Classification
  - Sensitive Data Discovery
  - custom categories
  - file classification
products:
  - auditor
  - data-classification
sidebar_label: How to View Custom Sensitive File Categories in Ne
tags: []
title: "How to View Custom Sensitive File Categories in Netwrix Auditor"
knowledge_article_id: kA0Qk0000000YsvKAE
---

# How to View Custom Sensitive File Categories in Netwrix Auditor

## Overview

The Sensitive Data Discovery (SDD) module allows you to generate Netwrix Auditor reports and alerts for sensitive data collected and classified with Netwrix Data Classification (NDC). This article covers the use of custom sensitive file categories in the Sensitive Data Discovery module.

## Instructions

> **IMPORTANT:** Due to the current SDD limitations, Netwrix Auditor can use only taxonomies built-in in Netwrix Data Classification:
>
> - CCPA
> - CMMC
> - Financial Records
> - GDPR
> - GLBA
> - HIPAA
> - PCI DSS
> - PHI
> - PII

Refer to the following steps:

> **NOTE:** You can reset a built-in taxonomy later—they are included in Netwrix Data Classification as templates pre-populated with terms/clues.

1. Select the built-in taxonomy to modify — in the main Netwrix Data Classification screen, select the **Content** tab and click **Taxonomies**. In the left pane of the **Term Management** section, select the target taxonomy from the drop-down list.
2. Delete the built-in taxonomy terms up to the root term — it is usually named after the taxonomy (e.g., the root CMMC term is named **CMMC**).
   
   > **NOTE:** To delete parent terms, first delete the children terms.
3. Once the built-in terms are cleared, create a new child term under the root taxonomy term. Right-click the root term and click **Add Child Term(s)**. Then, insert the new clues to the child term.

   ![User-added image]./../0-images/ka0Qk0000002kpx_0EMQk000003xxWz.png)
4. Set up your sources to include target files for the modified taxonomy. Wait for the files to be crawled and classified.

The corresponding Netwrix Auditor report will include the used taxonomy and file owner.

