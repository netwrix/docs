---
description: >-
  Explains why Netwrix Auditor shows System in the WHO field for an Object Path
  change after an account name change and how the Canonical-Name attribute is
  involved.
keywords:
  - Active Directory
  - Canonical-Name
  - object path
  - WHO field
  - Netwrix Auditor
  - account name change
  - OU
products:
  - auditor
sidebar_label: System Changed Object Path after Account Name Chan
tags: []
title: "System Changed Object Path after Account Name Chan"
knowledge_article_id: kA00g000000H9SgCAK
---

# System Changed Object Path after Account Name Chan

## Question

Why did System stated in the WHO field change Object Path after the account name change?

## Answer

This behavior is expected. When an account name is modified, the Active Directory Activity Summary contains 2 changes:

- The change indicating the name modification.
- The change indicating the modifications to the Object Path of the same account.

When an account name is modified, Active Directory represented by System automatically changes the account attribute named Canonical-Name. Netwrix Auditor interprets changes to this attribute as object path changes as Canonical-Name attribute reflects the full path to the object in Active Directory. In addition to the name change, Netwrix Auditor creates a change entry with System in the WHO column to reflect the Object Path change details. For additional information on the attribute, refer to the following Microsoft article: https://learn.microsoft.com/en-us/windows/win32/adschema/a-canonicalname?redirectedfrom=MSDN.

Netwrix Auditor reports the second change as Active Directory represented by System changes Object Path in the Canonical-Name attribute. The actual object path wasn't changed as the account is still in the OU. If you move an account to another OU, WHO field will contain the corresponding account name.
