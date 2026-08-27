---
title: "Permissions for AD FS Auditing"
description: "Permissions for AD FS Auditing"
sidebar_position: 20
---

# Permissions for AD FS Auditing

Before you start creating a monitoring plan to audit your AD FS federation servers, plan for the
account you'll use for data collection. This account must meet the following requirements. You
provide this account in the monitoring plan wizard.

**On the target server:**

- If the target AD FS federation server is a domain controller, then the account must belong to the
  **Administrators** or **Domain Admins** group
- Otherwise, if the server isn't a domain controller, the account must belong to the **Local
  Administrators** group.
