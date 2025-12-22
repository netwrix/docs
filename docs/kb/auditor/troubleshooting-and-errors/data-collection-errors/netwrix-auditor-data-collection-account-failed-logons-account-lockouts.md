---
description: >-
  Explains causes and resolutions when the Netwrix Auditor Data Collection
  Account produces failed logons or gets locked out, with steps to update
  credentials across monitoring plans, custom accounts, SQL/SSRS settings,
  services, and supplemental collectors.
keywords:
  - Data Collection Account
  - failed logons
  - account lockouts
  - credentials
  - monitoring plan
  - SQL
  - SSRS
  - services
  - Netwrix Password Reset
products:
  - auditor
sidebar_label: 'Netwrix Auditor Data Collection Account: Failed Lo'
tags: []
title: 'Netwrix Auditor Data Collection Account: Failed Logons | Account Lockouts'
knowledge_article_id: kA00g000000H9eMCAS
---

# Netwrix Auditor Data Collection Account: Failed Logons | Account Lockouts

## Symptom

Logon Activity reports show that the Data Collection Account is producing failed logons and/or getting locked out.

## Cause

One of the locations shown below has expired credentials.

## Resolution

### Monitoring Plans

Credentials entered for a monitoring plan are found by navigating from the **Netwrix Auditor Home Page**:

1. Click **Monitoring Plans**.
2. Double-click a selected monitoring plan.
3. Click **Edit Settings** (top right).
4. Open the **Data Collection** tab and update the credentials.

**Enter good and current credentials under the Data Collection Tab.**

---

### Custom Data Collection Account

There may be times when a custom account is needed for auditing a specific data source. The input field for custom Data Collection Accounts is found by navigating from the **Netwrix Auditor Home Page**:

1. Click **Monitoring Plans**.
2. Double-click a selected monitoring plan.
3. Double-click a selected *Item*.

![Custom Data Collection Account](https://kb.netwrix.com/wp-content/uploads/2019/09/Custom-DCA.png)

**Enter good and current credentials into the Custom Account fields. If you are using the Default Data Collection Account, leave the custom fields blank.**

---

### SQL & SSRS Settings

Found by navigating from the **Netwrix Auditor Home Page**:

1. Click **Settings**.
2. Open the **Audit Database** tab.

![SQL & SSRS Settings](https://kb.netwrix.com/wp-content/uploads/2019/09/Settings-1024x558.png)

**Enter good and current credentials by clicking `Modify` for both SQL and SSRS settings.**

---

### Services

Some Netwrix Auditor services may run under the Netwrix Auditor Data Collection Account. Identify such services:

![Services](https://kb.netwrix.com/wp-content/uploads/2019/09/Services.png)

- Right-click the service and select **Properties**.

![Change Service Credentials](https://kb.netwrix.com/wp-content/uploads/2019/09/Change-Service-creds.png)

**Enter good and current credentials and click "OK".**

---

### Netwrix Password Reset, Event Log Manager, and Inactive User Tracker

Netwrix Auditor comes installed with three additional programs that provide additional auditing avenues. Navigating to the Data Collection Account credentials is the same for all three. Find the programs via the Start Menu:

1. Open the Start Menu.
2. Select a monitoring plan for the program.
3. Click **Edit**.

**Note:** If you do not have any monitoring plans for these programs, you may skip this step.

![Password Reset, ELM, IUT](https://kb.netwrix.com/wp-content/uploads/2019/09/Pen_IUT_ELM-1024x548.png)

**Enter good and current credentials for these collectors and click "Save".**

---

### The issue has not been resolved...

If you are still receiving failed logons and/or lockouts for your Netwrix Auditor Data Collection Account, consider the following:

- Confirm that no other applications are using the same account as a service account (for example: backup software, virus scanners, etc.).
- Stop Netwrix services for a short period. Take note of the window during which the services are stopped. Once services are running again, allow some time for data to upload to SQL. After waiting, run a search like the one below:

![Search for Data Collection Account failures](https://kb.netwrix.com/wp-content/uploads/2019/09/Search-for-DCA-1024x409.png)

- If any failed logons and/or lockouts are reported for the Data Collection Account, Netwrix is certainly not the root cause.
- If the proposed solutions above do not resolve the issue, contact Technical Support for assistance.
