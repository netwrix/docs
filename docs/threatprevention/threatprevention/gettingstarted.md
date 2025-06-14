# Getting Started

After launching the Threat Prevention Administration Console, the administrator must configure some
initial settings to start monitoring the organization's environment:

- In the Administration Console, configure users, alerts, collections, policies, and database
  maintenance.
- Install and configure the Netwrix Threat Manager Reporting Module to view event data.

## Configure Additional Users

From installation to first launch, a single Threat Prevention administrator is the only user who can
access the Administration Console. This user must create additional users and assign them roles that
control what they have access to. See the
[Users and Roles Window](admin/configuration/userroles/overview.md) topic to configure users.

## Configure Alerts

The administrator must configure email and SIEM alerts before they can be enabled. See the
[System Alerting Window](admin/configuration/systemalerting/overview.md) topic to enable alerts and
to select your desired events for sending notifications.

## Configure Collections

Collections are reusable lists of policy filter settings. To create new policies using policy
templates, Collections must be configured. Several templates are configured using Collections as a
policy filter. See the
[Collection Manager Window](admin/configuration/collectionmanager/overview.md) topic to configure
Collections.

## Create, Configure, and Enable Policies

After deploying Agents and completing initial configuration, it is time to create, configure, and
enable policies to begin monitoring your organization’s environment. Do either of the following:

- Use a policy template to create a policy. See the
  [Pre-Created Templates](admin/templates/folder/overview.md) topic for additional information.
- Create a new policy and template configuration. See the
  [Policy Configuration](admin/policies/configuration.md) and
  [Template Configuration](admin/templates/configuration.md) topics for additional information.

On enabling and saving a policy configuration, the Agent is automatically sent the necessary
information to begin monitoring.

**CAUTION:** Use extreme caution when enabling lockdown policies to ensure that the required events
do not unintentionally get blocked.

**_RECOMMENDED:_** Start with monitoring the environment before enabling lockdown policies. For
example, first configure a monitoring policy for the events to be blocked. Watch the captured events
to ensure the filters are returning the expected events. Once assured, create the lockdown policy to
block those events.

**_RECOMMENDED:_** After configuring a new policy, navigate to either the
[Recent Events Tab](admin/policies/recentevents/overview.md) in the policy's configuration or to the
[Investigate Interface](admin/investigate/overview.md) to confirm that the intended events being
monitored are intended. Refresh the data to view the recent events.

### View Event Data

You can view event data using any of the following:

- Administration Console – Navigate to either the Recent Events tab in the policy's configuration or
  to the Investigate interface to view data for the events being monitored. See the
  [Recent Events Tab](admin/policies/recentevents/overview.md) and
  [Investigate Interface](admin/investigate/overview.md) topics for details. Event data configured
  to be sent to syslog (SIEM) can also be viewed on the
  [SIEM Output Viewer](admin/configuration/siemoutputviewer.md) window.
- Netwrix Threat Manager Reporting Module – Use this application to run investigations and generate
  reports. See the Set Up the Threat Manager Reporting Module topic to install and launch the
  application.

## Configure Database Maintenance

Database maintenance is essential to manage the size of the event database. The size should be based
on your data retention needs for various types of event data. See the
[Database Maintenance Window](admin/configuration/databasemaintenance/overview.md) topic for
additional information.

## Set Up the Threat Manager Reporting Module

Prerequisites

- See the [Reporting Module Server Requirements](requirements/reportingserver.md) topic for details
  on prerequisites.
- See the
  [Netwrix Threat Manager Reporting Module Ports](requirements/ports.md#netwrix-threat-manager-reporting-module-ports)
  topic for a list of firewall ports used.

Installation

Install the Netwrix Threat Manager Reporting Module application. Typically, this is done on the same
server where Threat Prevention resides, but it can be on any server within the same environment.
This application needs access to the Threat Prevention database. See the
[Reporting Module Installation](install/reportingmodule/overview.md) topic for additional
information.

First Launch

On launching Netwrix Threat Manager Reporting Module for the first time, you will set the password
for the builtin Administrator account, and optionally enable MFA for that account. See the
[First Launch](install/reportingmodule/firstlaunch.md) topic for additional information.

Initial Configuration

Configure the following:

- Credential Profile – See the
  [Credential Profile Page](reportingmodule/configuration/integrations/credentialprofile.md) topic
  for additional information.

    - Configure one Credential Profile for Active Directory Sync
    - Configure one Credential Profile for connection to the Threat Prevention database

- Active Directory Sync – Configure the application to sync with Active Directory. See the
  [Active Directory Sync Page](reportingmodule/configuration/integrations/activedirectorysync.md)
  topic for additional information.
- Netwrix Integration – Configure connection to the Netwrix Threat Manager Reporting Module
  database. See the
  [Netwrix Integrations Page](reportingmodule/configuration/integrations/netwrixintegrations.md)
  topic for additional information.
- Configure Console Access through Role Assignment – Grant access to Administrators, Report
  Reviewers, Responders, Reviewers, Response Managers, and Report Administrators. See the
  [User Access Page](reportingmodule/configuration/systemsettings/useraccess.md) topic for
  additional information.
