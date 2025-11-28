---
description: >-
  Explains how to grant the "Log on as a service" right to the service account
  when installation reports the error during product installation.
keywords:
  - log on as a service
  - service account
  - secpol.msc
  - local security policy
  - Password Manager
  - service rights
  - Windows
products:
  - general
sidebar_label: Failed to grant "Log on as a service" right
tags:
  - troubleshooting-and-errors
title: Failed to grant \"Log on as a service\" right
knowledge_article_id: kA00g000000H9ZuCAK
---

# Failed to grant "Log on as a service" right

During product installation you are asked to specify credentials to run the software.

But you receive the "Failed to grant the "Log on as  a service" right to the service account" error.

![User-added image](./../0-images/ka04u00000116cm_0EM700000005joE.png)

---

Password Manager is based on a service.

The service should run under an account with appropriate rights to perform required operations.

However the service account also should be allowed to run services. The right is called "Log on as a service" and can be granted via Local security policy.

---

## Resolution

To grant the "Log on as a service" rights please:

1. Run `secpol.msc`
2. In the left pane navigate to **Security Settings - Local policies - User rights assignment**
3. Double-click the **Log on as a service** entry in the right pane and add the account you want the service to run under
4. Click **OK** to apply

![User-added image](./../0-images/ka04u00000116cm_0EM700000005jox.png)
