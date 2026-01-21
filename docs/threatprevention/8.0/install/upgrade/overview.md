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
- Upgrade Threat Prevention 7.5 to 8.0
- Upgrade Threat Prevention 8.0.x to 8.0.y (upgrade to a later build of the same version)

To migrate the Threat Prevention server to a different machine, see the
[Migrate the Enterprise Manager Server](/docs/threatprevention/8.0/install/migrateemserver.md) topic.

To upgrade older versions, please reach out to
[Netwrix Support](https://www.netwrix.com/support.html) for assistance.

:::note
By design, the Threat Prevention 7.5 server (Enterprise Manager) can talk to 7.3.9 and 7.4
Agents, and does not accept connections from pre 7.3.9 Agents. Existing customers must upgrade to
7.3.9 first and then to 7.5. Else pre 7.3.9 Agents will be orphaned.
:::


Typically a new release includes new policy templates. The Templates Update window displays the
following message after an update: “Changes to Default Templates Detected. Do you want to update
Templates?” Click **Yes** to import or **No** to skip. See the
[Upgrade Policy Templates](/docs/threatprevention/8.0/install/upgrade/policytemplates.md) topic for instructions on importing these templates
if you selected **No** during the upgrade process.

## Considerations

The upgrade process must be done on all servers where the Threat Prevention Infrastructure is
installed and all systems where the Agent is deployed. For deploying Agent, see the
[Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md) topic.

:::info
It is a best practice to export policies for backup prior to performing an
upgrade.
:::


For NAS file system monitoring, Threat Prevention works in conjunction with the Activity Monitor.
Hence, the agent versions for the two products must be compatible. See the
[NAS Device Support](/docs/threatprevention/8.0/requirements/agent/agentnas.md) topic for information on version compatibility.

## Infrastructure Upgrade Procedure for 8.0.x to 8.0.y

You can upgrade from an earlier Threat Prevention 8.0 build to a later build of the same version.

Follow the steps to install a later build of the same version.

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Do not make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Do not manually delete any other files post uninstall.

**Step 2 –** Install the newer build to the same location as the previous build. See the
[Application Server Install](/docs/threatprevention/8.0/install/application.md) topic for additional information.


## Infrastructure Upgrade Procedure for 7.5 to 8.0

Follow the steps to upgrade from Threat Prevention 7.5 to 8.0.

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Do not make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Do not manually delete any other files post uninstall.

**Step 2 –** Install the Threat Prevention 8.0 infrastructure using the "Database Login Information"
for the existing Threat Prevention 7.5 database. See the
[Application Server Install](/docs/threatprevention/8.0/install/application.md) topic for installing v8.0.

The installer will look for the CertsInfo folder at the Threat Prevention 7.5 path and copy the
needed files to the new CertsInfo folder, available at the following path in Threat Prevention 8.0:

`...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\`

Verify that the post install CertsInfo folder contents have been copied from Threat Prevention 7.5
(check file dates). If not, manually copy the files from the old to the new path. Else 7.5 Agents
will be orphaned.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md) in v8.0 to upgrade the
Agent.

See the [Upgrade Agent](/docs/threatprevention/8.0/install/upgrade/agent.md) topic for additional information. See the
[Manual Uninstall on the Agent Server](/docs/threatprevention/8.0/install/upgrade/uninstallagent.md#manual-uninstall-on-the-agent-server) topic
for information on removing the Agent from the server where it was deployed.

:::note
If you are running a previous version of the Agent, you must first upgrade it to 7.5 and
then to 8.0.
:::

**Step 4 -** Use the [EPE Settings](/docs/threatprevention/8.0/admin/configuration/epesettings.md) in v8.0 to update the HIBP database.

:::note
This is a requirement when upgrading to 8.0 as the HIBP password database format has changed for performance optimizations.
:::

## Infrastructure Upgrade Procedure for 7.5.x to 7.5.y

You can upgrade from an earlier Threat Prevention 7.5 build to a later build of the same version.

Follow the steps to install a later build of the same version.

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Do not make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Do not manually delete any other files post uninstall.

**Step 2 –** Install the newer build to the same location as the previous build. See the
[Application Server Install](/docs/threatprevention/8.0/install/application.md) topic for additional information.

## Infrastructure Upgrade Procedure for 7.4 to 7.5

Follow the steps to upgrade from Threat Prevention 7.4 to 7.5.

**Step 1 –** Uninstall the existing Threat Prevention server from Control Panel > Programs.

- Do not make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Do not manually delete any other files post uninstall.

**Step 2 –** Install the Threat Prevention 7.5 infrastructure using the "Database Login Information"
for the existing Threat Prevention 7.4 database. See the
[Application Server Install](/docs/threatprevention/8.0/install/application.md) topic for installing v7.5.

The installer will look for the CertsInfo folder at the Threat Prevention 7.4 path and copy the
needed files to the new Certsinfo folder, available at the following path in Threat Prevention 7.5:

`...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\`

Verify that the post install Certsinfo folder contents have been copied from Threat Prevention 7.4
(check file dates). If not, manually copy the files from the old to the new path. Else 7.4 Agents
will be orphaned.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md) in v7.5 to upgrade the
Agent.

See the [Upgrade Agent](/docs/threatprevention/8.0/install/upgrade/agent.md) topic for additional information. See the
[Manual Uninstall on the Agent Server](/docs/threatprevention/8.0/install/upgrade/uninstallagent.md#manual-uninstall-on-the-agent-server) topic
for information on removing the Agent from the server where it was deployed.

:::note
If you are running a previous version of the Agent, you must first upgrade it to 7.3.9 ad
then to 7.5.
:::


## Infrastructure Upgrade Procedure for 7.3.9 to 7.5

Follow the steps to upgrade from StealthINTERCEPT 7.3.9 to Threat Prevention 7.5.

**Step 1 –** Uninstall the existing StealthINTERCEPT server from Control Panel > Programs.

- Do not make any changes to the existing Threat Prevention database. The database schema is
  automatically upgraded.
- Do not manually delete any other files post uninstall.

**Step 2 –** Install the Threat Prevention 7.5 infrastructure using the "Database Login Information"
for the existing StealthINTERCEPT database. See the [Application Server Install](/docs/threatprevention/8.0/install/application.md)
topic for installing v7.5.

The installer will look for the CertsInfo folder at the StealthINTERCEPT 7.3.9 path and copy the
needed files to the new Certsinfo folder, available at the following path in Threat Prevention 7.5:

`...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\`

Verify that the post install Certsinfo folder contents have been copied from StealthINTERCEPT 7.3.9
(check file dates). If not, manually copy the files from the old to the new path. Else 7.3.9 Agents
will be orphaned.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md) in v7.5 to upgrade the
Agent.

See the [Upgrade Agent](/docs/threatprevention/8.0/install/upgrade/agent.md) topic for additional information. See the
[Manual Uninstall on the Agent Server](/docs/threatprevention/8.0/install/upgrade/uninstallagent.md#manual-uninstall-on-the-agent-server) topic
for information on removing the Agent from the server where it was deployed.

:::note
If you are running a previous version of the Agent, you must first upgrade it to 7.3.9 and
then to 7.5.
:::


## Infrastructure Upgrade Procedure for 7.3.7 to 7.3.9

Follow the steps to upgrade from StealthINTERCEPT 7.3.7+ to 7.3.9.

**Step 1 –** Uninstall the existing StealthINTERCEPT server.

- Do not make any changes to the existing StealthINTERCEPT database. The database schema is
  automatically upgraded.

**Step 2 –** Install the StealthINTERCEPT infrastructure for the newer version, using the "Database
Login Information" for the existing StealthINTERCEPT database. See the
[Application Server Install](/docs/threatprevention/8.0/install/application.md) topic for additional information.

**Step 3 –** Use the [Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md) in the 7.3.9 version to
upgrade the Agent.

See the [Upgrade Agent](/docs/threatprevention/8.0/install/upgrade/agent.md) topic for additional information. See the
[Manual Uninstall on the Agent Server](/docs/threatprevention/8.0/install/upgrade/uninstallagent.md#manual-uninstall-on-the-agent-server) topic
for information on removing the Agent from the server where it was deployed.
