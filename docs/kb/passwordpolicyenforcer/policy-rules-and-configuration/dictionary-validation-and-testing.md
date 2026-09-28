---
description: >-
  Explains how to format, deploy, and verify dictionary files used by
  Netwrix Password Policy Enforcer password rules, including guidance for
  multi-domain-controller environments.
keywords:
  - dictionary file
  - Password Policy Enforcer
  - PPE
  - Sort button
  - domain controllers
  - policy rule
  - dictionary rule
  - complexity rule
  - policy testing
products:
  - passwordpolicyenforcer
sidebar_label: Validating and Testing Dictionary Files
tags:
  - kb
  - policy-rules-and-configuration
title: "Validating and Testing Dictionary Files"
knowledge_article_id: kA0Qk000000JiN7IAK
---

# Validating and Testing Dictionary Files

## Related Queries

- "Updating PPE dictionary does not work"
- "Could someone validate our configuration? I updated dictionary words but they do not appear to be updating when I test against them in the console."

## Overview

This article explains how to prepare, deploy, and verify dictionary files. It covers the required file format, how the product reads files during testing, and deployment guidance for environments with multiple domain controllers.

## Instructions

### Preparing and Deploying the Dictionary File

1. **Open the Policy Rule Settings.** In the **Password Policy Console**, edit the rule that uses the dictionary (for example, the **Dictionary** rule).

2. **Format the Dictionary File.** The dictionary must follow the expected format before the product will use it. Ensure the following:

   - All entries are in uppercase.
   - The file contains a blank line at the beginning and a blank line at the end.
   - Entries appear in ascending order.

   Use the rule editor **Sort** button to apply the correct ordering and formatting. The Sort operation will reformat the file to meet these formatting requirements.

   Example formatted dictionary (synthetic values):

   ```text

   APPLE
   BANANA
   ORANGE
   ```

3. **Place the File Where the Rule Expects It.** If you configure the rule to use a local file path, the dictionary file must exist on the same machine where the product evaluates the rule. If the rule points to a network location, place the file at that network path. Example path format:

   ```text
   C:\ProgramData\PasswordPolicyEnforcer\Dictionary\dictionary.txt
   ```

4. **Copy Files to All Domain Controllers That Enforce the Rule.** Netwrix Password Policy Enforcer does not replicate physical dictionary files between machines. If multiple domain controllers enforce password rules, copy the dictionary file to the same path on every domain controller used for password evaluation.

### Testing and Validating the Configuration

1. **Understand How Test Policies Work.** When you run a test policy from the console, the console uses file locations configured locally on the machine running it. If you have local settings selected for dictionary, confirm the files exist on the test machine in the specified locations before testing.

2. **Test and Validate Changes.** After formatting and deploying files, run policy tests on each machine that evaluates passwords. Confirm that the rule detects dictionary entries.

> **NOTE:** The product replicates settings automatically, but you must manually copy dictionary files to every machine that enforces password rules.

## Example Queries and Answers

**Q:** "I updated the dictionary on one server but tests still pass. Why?"

**A:** The console or the domain controller performing the check must have the updated file at the configured path. Ensure the file uses the correct format, run the **Sort** operation in the rule editor, and copy the file to every enforcing server.
