---
description: >-
  Shows how to configure Password Manager to use a specific Domain Controller
  for all account operations by adding a registry value, restarting the service,
  and verifying the change in the ALService log.
keywords:
  - password manager
  - domain controller
  - TargetDC
  - registry
  - HKLMSoftwareNetwrixPassword Manager
  - ALService
  - target_comp
  - password reset
  - service restart
products:
  - general
sidebar_label: How to tell Password Manager to use a specific Dom
tags:
  - administration-and-maintenance
title: "How to tell Password Manager to use a specific Domain Controller"
knowledge_article_id: kA00g000000PbdICAS
---

# How to tell Password Manager to use a specific Domain Controller

How to point Password Manager to use a specific Domain Controller for all account operations (password reset, password change etc..)?

## Procedure

1) On the server where the **Password Manager Service** runs, open the **registry** and navigate to `HKLMSoftwareNetwrixPassword Manager` (for 64-bit systems go to `HKLMSoftwareWow6432NodeNetwrixPassword Manager`).

2) Create a new `String Value` named `TargetDC` and specify the **IP address** of the domain controller you want to use.

3) **Restart** the **Password Manager service** after making this registry change to ensure the change is reflected in the next operation.

4) To verify the change is being applied, navigate to the product install directory and find the **ALService** text file. You can then search for the string ` "target_comp" ` occurring at a time AFTER the registry modification was made.
