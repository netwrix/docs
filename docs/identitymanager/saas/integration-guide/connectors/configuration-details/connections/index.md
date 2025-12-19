---
title: "Connections"
description: "Connections"
sidebar_position: 10
---

# Connections

This page gathers useful information concerning the possible uses of connections, used by connectors
in order to extract and/or fulfill data from/to external systems.

## Connection Configuration

A connector needs at least one
[Connection](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) which needs to be
declared both in the XML configuration and in the
[appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
file to be used. The connection settings must be set in appsettings.agent.json > Connections >
**connectionIdentifier**, where **connectionIdentifier** is the identifier specified for the
connection in the XML configuration.

See the [Connection](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) topic for
additional information.

The information stored in the connection depends on the export and/or fulfill technologies used by
the connection's package.

See the [References: Connectors](/docs/identitymanager/saas/integration-guide/connectors/references-connectors/index.md) topic for additional
information.

## Connection Tables

A [Connection Table](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connectiontable/index.md)
represents the potential output of the connection's
[Export Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exporttask/index.md), when the
connection's package allows export. The export process generates CSV files (our connection tables)
whose names start with the connection's identifier. The files' suffixes depend on the connector. See
the [References: Connectors](/docs/identitymanager/saas/integration-guide/connectors/references-connectors/index.md) topic for additional information.

The name of these files are used to specify the connection tables of the
[Entity Type Mapping](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)
and
[Entity Association Mapping](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md)
in order to link the connectors' properties to the source files and columns from the managed
systems.

A connection table is used in the definition of an entity type as `Source`, while the available
columns of the selected table are used for the mapping as `Source Columns`.

![connectiontables_ui_v60](/images/identitymanager/saas/integration-guide/connectors/configuration-details/connections/connectiontables_ui_v60.webp)

## Refresh Schema

A schema is a snapshot of the data structure (metadata) retrieved by a connection. It needs to be
refreshed to enable the configuration of entity types and resource types.

Identity Manager refreshes a connection's schema:

- after the connection creation;
- when clicking on **Refresh Schema** on the connection's page: only the schema of the current
  connection is refreshed;

    ![Refresh Schema of One Connection](/images/identitymanager/saas/user-guide/set-up/connect-system/connection-creation/connectioncreation_refreshschema_v522.webp)

- when clicking on **Refresh all schemas** on the connector's page: all schemas of the connector are
  refreshed.

    ![Refresh all Schemas](/images/identitymanager/saas/user-guide/set-up/connect-system/connection-creation/connectioncreation_refreshall_v602.webp)

In the **Connections** frame, either the last successful schema update is indicated or an icon is
shown if the refresh schema failed.

![Failed Refresh Schemas](/images/identitymanager/saas/user-guide/set-up/connect-system/connection-creation/connectioncreation_failedindicator_v602.webp)

Some packages don't generate a schema. For these packages, the **Refresh Schema** button isn't
displayed on the connection's page. On the connector's page, a connection without schema is
indicated by the sentence "There is no schema for this connection".

![No Schema](/images/identitymanager/saas/user-guide/set-up/connect-system/connection-creation/connectioncreation_noschema_v522.webp)

The connections' schemas must be refreshed before editing the connector's entity types via the UI,
whether the connections were created via the UI or XML configuration. Otherwise, there will be no
connection table available in the `Source` dropdown, so you will not be able to save anything.

## Export/Fulfill Tasks and Resource Type Mappings

Connections are given to `ExportTasks` through the `Connection` attribute, which is mandatory as the
`ExportTask` needs this information to use the right technology and search the information in the
`appsettings.agent.json`.

It can also be given to `FulfillTasks` the same way but must not be if the `FulfillTask` has
`TaskResourceTypes`.

`ResourceTypeMappings` have the `Connection` attribute as well, which is mandatory. If a
`FulfillTask` has `TaskResourceTypes`, it will use the given connections to provision the different
`ResourceTypes`.

## Secured Options

A connection's parameters fall into two categories: regular or secured options.

The particularity of secured options is that, once set, they will never again be shown to users.
Hence, extra care should be taken while specifying them.

There are several types of secured options: a simple field or multiple key-value fields.

See the [Configure Secured Options](/docs/identitymanager/saas/integration-guide/connectors/configuration-details/configure-secured-options/index.md) topic for additional information.
