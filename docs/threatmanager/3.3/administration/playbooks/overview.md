---
title: "Playbooks"
description: "Playbooks"
sidebar_position: 60
---

# Playbooks

The first step in designating steps to run in response to a threat is to add a playbook. A playbook
ties a threat or "trigger type" to the steps you want to take in response to that threat.
You can assign a threat response to a playbook on the
[Threat Detection Page](/docs/threatmanager/3.3/administration/configuration/threatdetection/threatdetection.md). After you create a playbook,
you add steps that specify the action you want for the threat response.

:::info
Execute playbooks in a test environment and review the results before executing
them in the production environment.
:::


When testing or first getting started with playbooks in Threat Manager, trigger playbooks manually
instead of automatically. After you manually test the playbooks and become familiar with
Threat Manager threats and threat responses, you can enable automatic triggering of playbooks.

## Add a Playbook

To add a playbook:

![threatresponse](/images/threatmanager/3.0/administration/playbooks/threatresponse.webp)

**Step 1 –** In the Threat Response box, click New Playbook. Threat Manager creates a new playbook
called "My Playbook 1". As you add more playbooks, Threat Manager appends sequential numbers to My
Playbook.

Change the name of the playbook immediately after creation for organizational
purposes.

**Step 2 –** Select the newly-created playbook from the Playbooks tab and click the Edit button.
Rename My Playbook with the name you want and optionally enter a description for the playbook in the
Description field.

**Step 3 –** Configure the Playbook using the configuration tabs.

**Step 4 –** Click the Save button.

The new playbook now has the name you want, and you can add steps to it. See the Actions
Tab topic for additional information.

## Configure a Playbook

Configure playbooks using the tabs on the Threat Response page.

![playbooktabs](/images/threatmanager/3.0/administration/playbooks/playbooktabs.webp)

The Threat Response page contains the following configuration tabs:

- General Tab
- Actions Tab
- Follow-Up Tab
- Logs Tab

### General Tab

The General Tab contains the Allowed Threats box which allows customization of which threats are
applicable for the selected playbook.

![generaltab](/images/threatmanager/3.0/administration/playbooks/generaltab.webp)

The General tab has the following configuration options:

- Allowed for all threat response – Allows customization of which threats are applicable for this
  playbook. (All threats are allowed by default). If you exclude a threat from Allowed Threats, you
  can't run it ad hoc on the Threat Details page, and it isn't available for automated threat
  response.
- Send Email on Execution of Playbook – Threat Manager sends an email notification after the
  playbook runs.
- Search Threats – Select the threats allowed as a threat response for this playbook from the
  dropdown list.

### Actions Tab

After you create or import a playbook, add steps to it using the Actions tab. Steps are
actions taken in response to a threat. See the
[Preconfigured Actions](/docs/threatmanager/3.3/administration/configuration/threatresponse.md#preconfigured-actions) topic for
additional information.

Follow the instructions to add steps to a Playbook.

![actionstab](/images/threatmanager/3.0/administration/playbooks/actionstab.webp)

**Step 1 –** Select the playbook from the Playbooks list in the Threat Response box or on the
Playbooks overview.

**Step 2 –** Click the Actions tab and then click **Add Step** to open a box to add a step to the
playbook.

**Step 3 –** Enter the following information in the box:

![addstep](/images/threatmanager/3.0/administration/playbooks/addstep.webp)

- Display Name – The name you want for the step
- Action Type – The type of action to take for the threat response. Select the action you want from
  the dropdown list. Additional configuration information is required depending upon the type of
  action selected. See the [Action Configuration for Playbook Steps](/docs/threatmanager/3.3/administration/playbooks/action/overview.md) topic for
  additional information.
- Continue on Error – Select this checkbox to execute the next step if the current step fails

**Step 4 –** Click Add to add the step to the playbook.

The step appears in the playbook.

### Follow-Up Tab

You can configure Follow-Up Playbooks on the Follow-Up tab. Follow-Up playbooks allow additional
playbooks to run after the playbook completes. This allows a Threat Manager administrator to 
sequence a series of playbooks together as part of a threat response.

![followuptab](/images/threatmanager/3.0/administration/playbooks/followuptab.webp)

The Follow-Up tab has the following configuration options:

- Send Email on Follow-up – Send an email notification when a follow-up playbook runs
- On Fail – If the current playbook fails, run the selected playbook from the dropdown list
- On Success – If the current playbook runs successfully, run the selected playbook from the
  dropdown list

Click **Save** to save the configured settings.

### Logs Tab

Click the Logs tab to access the Playbook Execution History table. The table lists all playbook
executions and also lets you search the table.

![This screenshot displays the Logs tab on the Threat Response page.](/images/threatmanager/3.0/administration/playbooks/logstab.webp)

The table provides the following information:

- Threat – The threat type that triggered the playbook
    - Click the threat link to open the [Threat Details Page](/docs/threatmanager/3.3/administration/threats/threatdetails/overview.md) and view
      information about the threat.
- Threat Detected – The time Threat Manager detected the threat
- Time Started – The time the playbook started
- Time Finished – The time the playbook finished
- Status – The status of the playbook execution:
    - Queued
    - Running
    - Complete
    - Completed with Errors
    - Canceled
    - Failed
- View Log – View the log file for the playbook execution. Clicking View Log opens the Action Log
  window.

## Action Log Window

The Action Log window contains a Logs tab and a Step Details tab.

## Logs Tab

The Logs tab displays logs for the playbook execution.

![This screenshot displays the Logs tab on the Action Log window.](/images/threatmanager/3.0/administration/playbooks/action/logstab.webp)

The Logs tab displays a table with the following columns:

- Time – The timestamp for the log
- Level – Type of log message displayed, which indicates the severity of the log message
- Message – Informational text displayed for the log

## Step Details Tab

The Step Details tab displays information about the action steps in the playbook execution.

![This screenshot displays the Step Details tab on the Action Log window.](/images/threatmanager/3.0/administration/playbooks/stepdetailstab.webp)

The Step Details tab contains a table with the following columns:

- Action Step – The name of the action step in the playbook
- Status – The status of the action step
- Message – Any informational or output messages from the action step
- Executed On – The host where the playbook ran the action step
