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
  - Password Policy Console
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

- "Updating PPE dictionary does not work."
- "Could someone validate the configuration? I updated dictionary words but they do not appear to be updating when I test against them in the console."
- "I updated the dictionary on one server but tests still pass. Why?"

## Overview

This article explains how to prepare, deploy, and verify dictionary files for the [Dictionary rule](/docs/passwordpolicyenforcer/12_0/admin/manage-policies/rules/dictionary_rule) in Netwrix Password Policy Enforcer (PPE). It covers the required file format, how the product reads files during testing, and deployment guidance for environments with multiple domain controllers. The console or the domain controller performing a check must have the updated file at the configured path, so copy the file to every server that enforces the rule.

## Instructions

### Preparing and Deploying the Dictionary File

1. In the **Password Policy Console**, edit the rule that uses the dictionary (for example, the **Dictionary** rule).

2. Format the dictionary file. The dictionary must follow the expected format before PPE uses it. Click **Sort** in the rule editor to reformat the file and ensure the file meets these requirements:

   - All entries are in uppercase.
   - The file contains a blank line at the beginning and a blank line at the end.
   - Entries appear in ascending order.

   Example formatted dictionary (synthetic values):

   ```text

   APPLE
   BANANA
   ORANGE

   ```

3. Place the dictionary file on a local disk of each machine that evaluates the rule. Example path:

   ```text
   C:\ProgramData\PasswordPolicyEnforcer\Dictionary\dictionary.txt
   ```

    > **IMPORTANT:** Keep dictionary files on a local disk. Shared or network-hosted dictionary files can degrade performance and might jeopardize security.

4. Copy the file to the same path on every domain controller that enforces the rule. 

PPE replicates settings automatically but does not replicate dictionary files. Windows replicates a file that you place in Sysvol (see [Dictionary file replication](/docs/passwordpolicyenforcer/12_0/admin/manage-policies/rules/dictionary_rule#dictionary-file-replication)), but Netwrix recommends keeping a separate local copy on each domain controller to reduce troubleshooting and avoid performance degradation.

### Testing and Validating the Configuration

1. Confirm the dictionary file exists on the test machine. When you run a test policy from the console, the console uses the file locations that you set locally on the machine running it. If the rule uses a local dictionary path, confirm the file exists at that path before testing.

2. After formatting and deploying the files, run [policy tests](/docs/passwordpolicyenforcer/12_0/admin/manage-policies/testpolicy) on each machine that evaluates passwords. Confirm that the rule detects dictionary entries.

## Related Links

- [Dictionary rule](/docs/passwordpolicyenforcer/12_0/admin/manage-policies/rules/dictionary_rule)
- [Dictionary file replication](/docs/passwordpolicyenforcer/12_0/admin/manage-policies/rules/dictionary_rule#dictionary-file-replication)
- [Test Policy](/docs/passwordpolicyenforcer/12_0/admin/manage-policies/testpolicy)
