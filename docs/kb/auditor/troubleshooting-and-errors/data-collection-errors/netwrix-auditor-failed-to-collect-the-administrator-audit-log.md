---
description: >-
  This article explains how to resolve the "Failed to collect the Administrator
  audit log" error in Netwrix Auditor caused by an invalid domain name format.
  It shows how to update the domain to FQDN format in the monitoring plan.
keywords:
  - administrator audit log
  - Exchange servers
  - FQDN
  - monitoring plan
  - domain name
  - Netwrix Auditor
  - health log
  - Take Action
products:
  - auditor
sidebar_label: Netwrix Auditor Failed to Collect the Administrato
tags: []
title: "Netwrix Auditor Failed to Collect the Administrator Audit Log"
knowledge_article_id: kA04u00000111CtCAI
---

# Netwrix Auditor Failed to Collect the Administrator Audit Log

## Symptom

A **Domain** item has the *Take Action* status and the Netwrix Auditor Health Log contains the following error:

```
Failed to collect the Administrator audit log. Unable to obtain a list of Exchange servers: Object reference not set to an instance of an object. 
```

## Cause

Invalid format of the domain name is specified in your monitoring plan settings.

## Resolution

Provide a name for your domain in the FQDN format. For that:

1. In Netwrix Auditor, navigate to **Monitoring Plans**.
2. Select the monitoring plan that contains item with the *Take Action* status.
3. Click **Edit Item** on the right.
4. On the **General** tab, provide the domain name in the FQDN format (e.g., `corp.local`) under **Specify Active Directory** domain.
5. Save your edits.
