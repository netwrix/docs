---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 110
---

# Upgrade Procedure

This topic provides the basic steps needed to upgrade the following on the same machine:

- Upgrade StealthINTERCEPT 7.3.7 to 7.3.9
- Upgrade StealthINTERCEPT 7.3.9 to Threat Prevention 7.5
- Upgrade Threat Prevention 7.4 to 7.5
- Upgrade Threat Prevention 7.5.x to 7.5.y (upgrade to a later build of the same version)
- Upgrade Threat Prevention 7.5 to 8.1
- Upgrade Threat Prevention 8.0 to 8.1
- Upgrade Threat Prevention 8.1.x to 8.1.y (upgrade to a later build of the same version)

To migrate the Threat Prevention server to a different machine, see the
[Migrate the Enterprise Manager Server](/docs/threatprevention/8.1/install/migrateemserver.md) topic.

To upgrade older versions, contact
[Netwrix Support](https://www.netwrix.com/support.html) for assistance.

:::note
By design, the Threat Prevention 7.5 server (Enterprise Manager) can talk to 7.3.9 and 7.4
Agents, and doesn't accept connections from pre 7.3.9 Agents. Existing customers must upgrade to
7.3.9 first and then to 7.5. Else pre 7.3.9 Agents will be orphaned.
:::


Typically a new release includes new policy templates. The Templates Update window displays the
following message after an update: “Changes to Default Templates Detected. Do you want to update
Templates?” Click **Yes** to import or **No** to skip. See the
[Upgrade Policy Templates](/docs/threatprevention/8.1/install/upgrade/policytemplates.md) topic for instructions on importing these templates
if you selected **No** during the upgrade process.

## Considerations

The upgrade process must be done on all servers where the Threat Prevention Infrastructure is
installed and all systems where the Agent is deployed. For deploying Agent, see the
[Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) topic.

:::info
As a best practice, export policies for backup before performing an
upgrade.
:::


For NAS file system monitoring, Threat Prevention works in conjunction with the Activity Monitor.
Hence, the agent versions for the two products must be compatible. See the
[NAS Device Support](/docs/threatprevention/8.1/requirements/agent/agentnas.md) topic for information on version compatibility.

## Logging Changes in Version 8.1

Version 8.1 reworks logging across every Threat Prevention component. The names of the active log
files don't change, so an existing procedure for collecting logs still works. Configuration files,
archived file names, and one integration do change. Review the following before you upgrade, and
plan the changes to any customized configuration.

**Archived log file names** – Archived logs are named with a timestamp, such as
`SIEnterpriseManager_20260804-153000.log`, instead of a sequence number, such as
`SIEnterpriseManager.log.1`. Update any script or monitoring tool that collects archived logs by
matching the `.log.<number>` pattern.

**Windows Event Log entries** – The Enterprise Manager and the Administration Console no longer
write to the **SI Events** source in the Windows Event Log. Point any monitoring that reads that
source at the file logs instead.

**Collecting Agent logs** – **Get Agent Log** in the Agents interface downloads a ZIP archive of the
`logs` and `ADMonitor_logs` folders from the selected server, rather than the active Agent log file
on its own. See the
[Access Agent Log Files](/docs/threatprevention/8.1/admin/agents/agents-windows/loglevelconfiguration.md#access-agent-log-files)
topic for additional information.

**AD Monitor log files** – A single `EventTrace.log` replaces `ADTrace.log` and `LDAPTrace.log`. It
also records Kerberos, DCSync, NTLM, password change, AD CS, AD FS, and FSMO events.

**AD Monitor settings** – You must change three settings in a customized `Logging.ini`. An
obsolete setting is ignored without an error, so the logging you expect stops appearing with no
other symptom.

| Setting in a customized Logging.ini | Change to make |
| --- | --- |
| `AdmTrace = true` or `LdapTrace = true` | Replace with `EventFilter = AdmEvent LdapEvent`, listing the categories you need. The output moves to `EventTrace.log`. |
| `Filter = Rules` or `Filter = Intervals Timers` | Replace with `DebugFilter = Rules`. Drop `Intervals`, which never had an effect. |
| `DebugTrace = Api` | Replace with `DebugTrace = ApiCall`. Earlier versions accepted the shortened value; version 8.1 accepts only the full level name. |

See the [Log Files and Logging Configuration](/docs/threatprevention/8.1/troubleshooting/logging.md)
and
[AD Monitor Logging Configuration](/docs/threatprevention/8.1/troubleshooting/admonitorlogging.md)
topics for additional information.

## Infrastructure Upgrade Procedure for 8.1.x to 8.1.y

You can upgrade from an earlier Threat Prevention 8.1 build to a later build of the same version.

To install a later build of the same version:

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Don't make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Don't manually delete any other files post uninstall.

**Step 2 –** Install the newer build to the same location as the previous build. See the
[Application Server Install](/docs/threatprevention/8.1/install/application.md) topic for additional information.

## Infrastructure Upgrade Procedure for 8.0 to 8.1

Version 8.1 keeps the installation paths and the Agent compatibility of version 8.0, so the upgrade
follows the same steps as an upgrade between builds. The CertsInfo folder doesn't move, so the
Agents reconnect without any manual step.

To upgrade from Threat Prevention 8.0 to 8.1:

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Don't make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Don't manually delete any other files post uninstall.

**Step 2 –** Install Threat Prevention 8.1 to the same location as the previous version. See the
[Application Server Install](/docs/threatprevention/8.1/install/application.md) topic for additional information.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) in v8.1 to upgrade the
Agent.

See the [Upgrade Agent](/docs/threatprevention/8.1/install/upgrade/agent.md) topic for additional information.

Review the [Logging Changes in Version 8.1](#logging-changes-in-version-81) section in this topic
before you upgrade. You must update a customized `Logging.ini` on a domain controller by hand.

## Infrastructure Upgrade Procedure for 7.5 to 8.1

To upgrade from Threat Prevention 7.5 to 8.1:

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Don't make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Don't manually delete any other files post uninstall.

**Step 2 –** Install the Threat Prevention 8.1 infrastructure using the "Database Login Information"
for the existing Threat Prevention 7.5 database. See the
[Application Server Install](/docs/threatprevention/8.1/install/application.md) topic for installing v8.1.

The installer will look for the CertsInfo folder at the Threat Prevention 7.5 path and copy the
needed files to the new CertsInfo folder, available at the following path in Threat Prevention 8.1:

`...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\`

Verify that the post install CertsInfo folder contents have been copied from Threat Prevention 7.5
(check file dates). If not, manually copy the files from the old to the new path. Else 7.5 Agents
will be orphaned.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) in v8.1 to upgrade the
Agent.

See the [Upgrade Agent](/docs/threatprevention/8.1/install/upgrade/agent.md) topic for additional information. See the
[Manual Uninstall on the Agent Server](/docs/threatprevention/8.1/install/upgrade/uninstallagent.md#manual-uninstall-on-the-agent-server) topic
for information on removing the Agent from the server where it was deployed.

:::note
If you are running a previous version of the Agent, you must first upgrade it to 7.5 and
then to 8.1.
:::

**Step 4 -** Use the [EPE Settings](/docs/threatprevention/8.1/admin/configuration/epesettings.md) in v8.1 to update the HIBP database.

:::note
This is a requirement when upgrading from Threat Prevention 7.5, as the HIBP password database format has changed for performance optimizations.
:::

Review the [Logging Changes in Version 8.1](#logging-changes-in-version-81) section in this topic
before you upgrade. You must update a customized `Logging.ini` on a domain controller by hand.

## Infrastructure Upgrade Procedure for 7.5.x to 7.5.y

You can upgrade from an earlier Threat Prevention 7.5 build to a later build of the same version.

To install a later build of the same version:

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Don't make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Don't manually delete any other files post uninstall.

**Step 2 –** Install the newer build to the same location as the previous build. See the
[Application Server Install](/docs/threatprevention/8.1/install/application.md) topic for additional information.

## Infrastructure Upgrade Procedure for 7.4 to 7.5

To upgrade from Threat Prevention 7.4 to 7.5:

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Don't make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Don't manually delete any other files post uninstall.

**Step 2 –** Install the Threat Prevention 7.5 infrastructure using the "Database Login Information"
for the existing Threat Prevention 7.4 database. See the
[Application Server Install](/docs/threatprevention/8.1/install/application.md) topic for installing v7.5.

The installer will look for the CertsInfo folder at the Threat Prevention 7.4 path and copy the
needed files to the new Certsinfo folder, available at the following path in Threat Prevention 7.5:

`...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\`

Verify that the post install Certsinfo folder contents have been copied from Threat Prevention 7.4
(check file dates). If not, manually copy the files from the old to the new path. Else 7.4 Agents
will be orphaned.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) in v7.5 to upgrade the
Agent.

See the [Upgrade Agent](/docs/threatprevention/8.1/install/upgrade/agent.md) topic for additional information. See the
[Manual Uninstall on the Agent Server](/docs/threatprevention/8.1/install/upgrade/uninstallagent.md#manual-uninstall-on-the-agent-server) topic
for information on removing the Agent from the server where it was deployed.

:::note
If you are running a previous version of the Agent, you must first upgrade it to 7.3.9 ad
then to 7.5.
:::


## Infrastructure Upgrade Procedure for 7.3.9 to 7.5

To upgrade from StealthINTERCEPT 7.3.9 to Threat Prevention 7.5:

**Step 1 –** Uninstall the existing StealthINTERCEPT server from Control Panel > Programs.

- Don't make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Don't manually delete any other files post uninstall.

**Step 2 –** Install the Threat Prevention 7.5 infrastructure using the "Database Login Information"
for the existing StealthINTERCEPT database. See the [Application Server Install](/docs/threatprevention/8.1/install/application.md)
topic for installing v7.5.

The installer will look for the CertsInfo folder at the StealthINTERCEPT 7.3.9 path and copy the
needed files to the new Certsinfo folder, available at the following path in Threat Prevention 7.5:

`...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\`

Verify that the post install Certsinfo folder contents have been copied from StealthINTERCEPT 7.3.9
(check file dates). If not, manually copy the files from the old to the new path. Else 7.3.9 Agents
will be orphaned.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) in v7.5 to upgrade the
Agent.

See the [Upgrade Agent](/docs/threatprevention/8.1/install/upgrade/agent.md) topic for additional information. See the
[Manual Uninstall on the Agent Server](/docs/threatprevention/8.1/install/upgrade/uninstallagent.md#manual-uninstall-on-the-agent-server) topic
for information on removing the Agent from the server where it was deployed.

:::note
If you are running a previous version of the Agent, you must first upgrade it to 7.3.9 and
then to 7.5.
:::


## Infrastructure Upgrade Procedure for 7.3.7 to 7.3.9

To upgrade from StealthINTERCEPT 7.3.7+ to 7.3.9:

**Step 1 –** Uninstall the existing StealthINTERCEPT server.

- Don't make any changes to the existing StealthINTERCEPT database. The database schema is
  automatically upgraded.

**Step 2 –** Install the StealthINTERCEPT infrastructure for the newer version, using the "Database
Login Information" for the existing StealthINTERCEPT database. See the
[Application Server Install](/docs/threatprevention/8.1/install/application.md) topic for additional information.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.1/admin/agents/overview.md) in the 7.3.9 version to
upgrade the Agent.

See the [Upgrade Agent](/docs/threatprevention/8.1/install/upgrade/agent.md) topic for additional information. See the
[Manual Uninstall on the Agent Server](/docs/threatprevention/8.1/install/upgrade/uninstallagent.md#manual-uninstall-on-the-agent-server) topic
for information on removing the Agent from the server where it was deployed.
