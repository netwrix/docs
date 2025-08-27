---
title: "Password Expiration Monitoring Scope"
description: "Password Expiration Monitoring Scope"
sidebar_position: 20
---

# Password Expiration Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from monitoring and
alerting on password expiration.

Follow the steps to exclude data from the Active Directory monitoring scope.

**Step 1 –** Navigate to the \_%Netwrix Auditor installation folder%\Password Expiration
Alerting_folder.

**Step 2 –** Edit the omitoulist.txt file, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File           | Description                                                                                                                             | Syntax                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| omitoulist.txt | This file defines a list of OUs to exclude from being audited. To specify the OUs and their subOUs, type names each on a separate line. | `Name` For example: `*OU=C,OU=B,OU=A*` |
