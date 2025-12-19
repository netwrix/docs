---
description: >-
  Explains why Netwrix Auditor service account logon attempts fail in
  multi-domain environments and provides steps to suppress or resolve these
  failures.
keywords:
  - Netwrix Auditor
  - logon failures
  - multi-domain
  - Kerberos
  - IgnoreRootDCErrors
  - Active Directory
  - omitexchangeserverlist
  - Exchange
  - monitoring plan
products:
  - auditor
sidebar_label: Logon Failures in Multi-domain Environments
tags: []
title: "Logon Failures in Multi-domain Environments"
knowledge_article_id: kA04u000000PoMKCA0
---

# Logon Failures in Multi-domain Environments

## Symptoms

- The service account used for collecting data in **Netwrix Auditor** is trying to authenticate to a different domain in a multi-domain environment.
- The security event log for the other domain server contains recurring entries on failed logon attempts by the **Netwrix Auditor** service account. The result code is `0x6` — `Client not found in Kerberos database`.

## Cause

In multi-domain environments, Active Directory Auditing collectors may connect to servers in other domains:

- Root DCs.
- Exchange servers.
- Forest domain DCs.

## Solutions

- Root DC errors can be omitted:
  1. Open **Registry Editor** (**Start** > **Run** > **regedit**).
  2. Navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\AD Change Reporter`.
  3. Create a new **DWORD (32-bit)** value and name it **IgnoreRootDCErrors**.
  4. Right-click the value and select **Modify**.
  5. Set the value data to **1**.

- If you would like to prevent **Netwrix Auditor** from accessing Exchange servers, you can use the `omitexchangeserverlist` omit list to specify Exchange servers to be omitted from the monitoring scope. The list can be found in `%Netwrix Auditor installation folder%\Active Directory Auditing`.

- You can also disable schema and configuration monitoring options for your Active Directory monitoring plan:
  1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**.
  2. Select your monitoring plan for Active Directory and click **Edit**.
  3. Select the data source and click **Edit data source**.
  4. Uncheck the **Schema** and **Configurations** checkboxes.
  5. Click **Save** to save changes.

- You can also setup a trust between the server domain and the affected domain with a single service account to collect the data. For additional information on a single dedicated service account used for data collection and reporting purposes, refer to the following article: Active Directory — Overview https://docs.netwrix.com/docs/auditor/10_8/configuration/activedirectory/permissions).  
  For additional information on restrictions in a multi-domain environment, refer to the following article: Server and Client — Domains and Trusts https://docs.netwrix.com/docs/auditor/10_8).
