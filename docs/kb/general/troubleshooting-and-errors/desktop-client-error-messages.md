---
description: >-
  Describes how to suppress Password Manager client error messages when the
  client cannot reach the server at startup by setting a registry value or
  deploying a Group Policy template.
keywords:
  - Password Manager
  - Desktop Client
  - suppress errors
  - PRM_SuppressEnrollmentErrors
  - registry
  - netwrixprm.adm
  - Group Policy
products:
  - general
sidebar_label: Desktop Client Error Messages
tags:
  - troubleshooting-and-errors
title: "Desktop Client Error Messages"
knowledge_article_id: kA00g000000H9aTCAS
---

# Desktop Client Error Messages

Error messages showing up for the Password Manager client that you would like to suppress.

---

Password Manager client starts on machine startup and tries to connect to the Password Manager server.
If for some reasons it can not connect, an error  is shown.

It is expected if a machine is off the network and the server cannot be reached. For such situations there is an option to suppress error messages.

---

If you are getting error messages on your Desktop Clients for Password Manager and need to suppress the error messages, do the following:

1.  Open Registry on the Desktop Client
2.  Go to `HKLMSoftware[Wow6432Node]PoliciesNetwrixPasswordManager`
3.  Create a DWORD value titled `PRM_SuppressEnrollmentErrors` and set the value to `1`

This value can be distributed across multiple machines by means of `netwrixprm.adm` template for Group policy, located in the Password Manager installation directory.
The policy is called **Suppress Enrollment Errors**
