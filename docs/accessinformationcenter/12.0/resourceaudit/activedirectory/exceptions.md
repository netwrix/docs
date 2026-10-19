---
title: "Exceptions Report"
description: "Exceptions Report"
sidebar_position: 30
---

# Exceptions Report

The Exceptions report at the **Active Directory** node provides a list of exceptions across the
targeted Active Directory environment. This report includes a Details table.

![Exceptions report](/images/accessinformationcenter/12.0/resourceaudit/activedirectory/exceptions.webp)

An exception is a problem or risk to Active Directory security. Exceptions include deeply
nested groups and stale membership. This table is blank if no exceptions exist in the
targeted Active Directory environment. This report contains the following columns:

- Server Name – Name of the Domain
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the targeted domains

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- DistinguishedName – Distinguished name for the trustee account
