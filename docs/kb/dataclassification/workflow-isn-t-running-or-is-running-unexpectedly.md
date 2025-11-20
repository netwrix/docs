---
description: >-
  Step-by-step guidance to troubleshoot workflows in Netwrix Data Classification
  when they do not run, run unexpectedly, or when documents are misclassified.
keywords:
  - workflow
  - classification
  - troubleshooting
  - logs
  - reclassify
  - Windows Event Logs
  - trace logging
  - document migration
products:
  - data-classification
sidebar_label: Workflow Isn't Running or Is Running Unexpectedly
tags: []
title: Workflow Isn't Running or Is Running Unexpectedly
knowledge_article_id: kA0Qk0000000PpdKAE
---

# Workflow Isn't Running or Is Running Unexpectedly

## Overview

This article offers step-by-step guidance for resolving common workflow issues. Whether your workflow isn't working, runs unexpectedly, or documents are misclassified, the guide provides solutions for each scenario.

## Instructions

### Workflow isn't running

1. Please make sure that the workflow is enabled.
2. Go to the **Log** section and check if there were attempts to run the workflow for the document. Depending on the result, follow one of the instructions below:

   - **There was a successful attempt to run the workflow** – Check the workflow action configuration. Then enable workflow trace logging and reclassify the document. Check the Windows Event Logs for details of any issues. (e.g., skipping redaction because the file type isn't supported).

   - **Failed to run the workflow** – A basic error message will be displayed that may assist you with troubleshooting the issue. If it doesn't give enough details, then enable workflow trace logging and reclassify the document. Check the Windows Event Logs for details of any issues.

   - **No attempts to run the workflow** – Check that the conditions are configured correctly for the workflow and workflow rule. If the workflow and workflow rules are configured correctly, then check the classifications of the document. If the classifications aren't as expected, then please reference the following documentation for the troubleshooting steps: [Classification Troubleshooting](/docs/kb/dataclassification/classification-troubleshooting)

3. Filter the workflow logs and check if there are other workflows being run for the document. Workflows run in a priority order. If there is more than one migration action, then the second migration will fail as the document has already been moved.

### Workflow is running unexpectedly

This typically means that the document has a classification that isn't expected to have or that the conditions in the workflow rule are not configured correctly.

1. Check the workflow rule conditions. Pay attention to the parameters. Learn more about rule configuration and description of classification rules: https://docs.netwrix.com/docs/dataclassification/5_7 (Configure a Workflow using Advanced dialog ⸱ v5.7)

2. Check the document's classifications. If there is a classification that is not intended, then reference the following documentation for troubleshooting steps: [Classification Troubleshooting](/docs/kb/dataclassification/classification-troubleshooting)
