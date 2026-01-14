---
title: "Navigation"
description: "Navigation"
sidebar_position: 10
---

# Navigation

The Threat Prevention Administration Console is used to:

- Create and configure policies and policy templates
- Configure analytics
- Deploy and manage Agents
- Import and export Threat Prevention policies and policy templates
- Configure alerts

Policies control the real-time event monitoring/blocking of files and directories, users, groups,
Active Directory objects, and Microsoft Exchange objects. These policies enable Threat Prevention to
detect and report changes as well as send notification when changes occur.

## Administration Console Components

The Administration Console has the following components:

- Menu
- Policy Center
- Status Bar

![Threat Prevention Administration Console – Components](/images/threatprevention/8.0/admin/navigation/adminconsole.webp)

There are also right-click commands available within different sections of the Policy Center.

If the Administration Console user interface or windows do not display properly, see the
[Troubleshooting FAQs](/docs/threatprevention/8.0/troubleshooting/overview.md#troubleshooting-faqs) topic for
information.

## Menu

The Menu contains the following selections:

![Administration Console - Menu](/images/threatprevention/8.0/admin/navigation/menu.webp)

| Menu Item     | Option          | Description       |
| ------------- | ------------------- | ------------------- |
| File          | New             | Create new policies (Ctrl+P), new templates (Ctrl+T), or new folders (Ctrl+F) in the selected location of the Policy Center        |
|               | Rename          | Opens a textbox to rename the selected policy, template, or folder in the Policy Center         |
|               | Remove          | Removes the selected policy, template, or folder from the Policy Center   |
|               | Exit             | Exit the Administration Console       |
| Tools         | Export …         | Export (Alt+X) policies and templates through the [Export Policies and Templates Window](/docs/threatprevention/8.0/admin/tools/exportpoliciestemplates.md)           |
|               | Import …          | Import (Alt+I) policies/templates, collections, and event consumers/alerts from an exported file through the [Import Window](/docs/threatprevention/8.0/admin/tools/import.md)        |
| Configuration | Alerts         | Configure and manage all email, event log, and SEIM alerts in the [System Alerting Window](/docs/threatprevention/8.0/admin/configuration/systemalerting/overview.md)        |
|               | Users          | A security feature for configuring access to the Administration Console. Users are added and assigned rights through the [Users and Roles Window](/docs/threatprevention/8.0/admin/configuration/userroles/overview.md).       |
|               | Database > Server        | Manage the events database in the [Events Database Configuration Window](/docs/threatprevention/8.0/admin/configuration/eventsdatabaseconfiguration.md). You can view the information, but cannot make changes.       |
|               | Database > Maintenance          | Use database maintenance to automatically groom the database to optimize performance by archiving and/or deleting data aged beyond a specified threshold. This can be configured to run by Event Type, Analytic, or Policy. It is configured in the [Database Maintenance Window](/docs/threatprevention/8.0/admin/configuration/databasemaintenance/overview.md).          |
|               | Collections            | Manage all Microsoft Collections in the [Collection Manager Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/overview.md)         |
|               | Event Filtering           | Filters Active Directory events to remove “noise” from collected event data and/or exclude logins from machine accounts. Both settings are ON by default. It also allows authentication events from selected hosts or from selected accounts to be excluded, which require configuration before being enabled. A latency threshold can be set to generate alerts when the delivery of AD Events are delayed beyond the threshold. These options are configured in the [Event Filtering Configuration Window](/docs/threatprevention/8.0/admin/configuration/eventfilteringconfiguration.md). |
|               | Netwrix Threat Manager Configuration                   | Enables integration between Threat Prevention and Threat Manager in a global setting. The Threat Manager URI is set in the [Netwrix Threat Manager Configuration Window](/docs/threatprevention/8.0/admin/configuration/threatmanagerconfiguration.md). Choose policies through the Policy checkboxes in this window or the Actions tab of each policy for sending event data to Threat Manager.      |
|               | File Monitor Settings            | Manages the log retention, inherited permissions filtering, disables office file filtering, and the ability to exclude AD accounts and processes for Threat Prevention file monitoring and blocking policies in a global setting. These options are set in the [File Monitor Settings Window](/docs/threatprevention/8.0/admin/configuration/filemonitorsettings.md).       |
|               | EPE Settings           | Manages the Have I Been Pwned password hash database configuration and update options as well as global Password Rules filter configurations. These options are configured in the [EPE Settings Window](/docs/threatprevention/8.0/admin/configuration/epesettings.md).        |
| Help          | Administration Console Help           | Opens the internal help documentation          |
|               | License Manager        | Opens the Threat Prevention [License Manager Window](/docs/threatprevention/8.0/admin/navigation/licensemanager.md) where the customer name, license expiry date, and licensed modules are displayed      |
|               | About Netwrix Threat Prevention Administration Console | Opens the Administration Console window where the product version, copyright, and the Netwrix website link are displayed           |

## Policy Center

The Policy Center is the primary interface of the Administration Console. It is divided into two
sections: the Navigation pane and the Display area.

![Administration Console – Policy Center](/images/threatprevention/8.0/admin/navigation/policycenter.webp)

The Navigation pane provides interface options while the Display area displays the selected
interface. The following interface options are available:

- [Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md)
- [Alerts Interface](/docs/threatprevention/8.0/admin/alerts/overview.md)
- [Investigate Interface](/docs/threatprevention/8.0/admin/investigate/overview.md)
- [Analytics Interface](/docs/threatprevention/8.0/admin/analytics/overview.md)
- [Policies Interface](/docs/threatprevention/8.0/admin/policies/overview.md)
- [Templates Interface](/docs/threatprevention/8.0/admin/templates/overview.md)
- [Tags Node](/docs/threatprevention/8.0/admin/tags.md)

Several right-click menus and additional features are available within these interfaces.

:::tip
Remember, the Investigate, Analytics, Policies, Templates, and TAGS nodes in the Navigation pane
can be expanded and collapsed.
:::


**Agents**

The Agents interface provides data about the Agents within the environment. This includes what
domain the Agent is in, what machine it is deployed on, its current status, and other details. This
interface also indicates if a domain controller does NOT have an Agent deployed on it. Through this
interface, Agents can be deployed, updated, and managed; logging levels can be configured; logs can
be accessed; and Agent information can be exported.

**Alerts**

The Alerts interface provides information on the Threat Prevention Security events, Operations
events, and Configuration events. All events are displayed by default. However, they can be
filtered, sorted, and searched.

**Investigate**

The Investigate interface is a reporting tool for the Administration Console. It provides
information on recent events monitored or blocked by any enabled policy. By default, all events
recently monitored or blocked are available. However, they can be filtered to particular policies,
perpetrators, time frames, domains, servers, computers, events, etc.

**Analytics**

The Analytics interface is a front-line warning tool for detecting incidents in real-time based on
patterns within collected event data indicative of potential security risk. It provides information
on incidents identified by the analytic policies.

**Policies**

The Policies interface provides a central location for creating and configuring all policies. On
selecting the Policy node, the policies are listed in the Display area. In the Navigation pane, the
policies are organized into folders. By default, the folder structure is comprised of but not
limited to three folders: Auditing, Blocking, and Notifications, representing the most common types
of policies enabled by users. Policies can be configured to monitor or block Windows Active
Directory events, Windows Exchange Server 2010, 2013, 2016 and 2019 events, Windows File System
events, NetApp File System events, EMC File System events, and Group Policy Objects events.

A folder can be protected, which controls access to any policy within the folder. A protected policy
cannot be viewed, edited, or deleted by other Administration Console users without explicit
permissions being granted.

**Templates**

The Templates interface provides a central location for creating and configuring all policy
templates. On selecting the Templates node, a list of all policy templates available is displayed in
the Display area. Policy templates must also be stored within a folder. There are pre-created policy
templates which can be imported.

**TAGS**

The TAGS node provides an organizational feature for templates. Many preconfigured templates have
tags which enable users to quickly find a desired template though various groupings. Tags do not
create a duplicate template, but rather display the template in different folders under the TAGS
node.

## Status Bar

The Status Bar is located at the bottom of the Administration Console.

![statusbar](/images/threatprevention/8.0/admin/navigation/statusbar.webp)

It displays the current user account logged into Threat Prevention and current session details.
