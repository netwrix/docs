---
title: "Upward Data Synchronization"
description: "Upward Data Synchronization"
sidebar_position: 10
---

# Upward Data Synchronization

Upward Data Synchronization (Sync Up) is the process that copies relevant managed systems data into
[Usercube's resource repository](/docs/identitymanager/6.1/integration-guide/entity-model/index.md)
and translates them into resources that match the configured Entity Model.

Performing a _Sync Up_ allows the user to:

- integrate the managed systems state with Usercube. The copied data serves as the basis for the
  assignment computation;
- check that previously edited provisioning orders have been accurately executed;
- ascertains differences between the real managed system state and the theoretical state.

## Overview

### A scheduled sync up per managed system

_Sync Up_ is performed regularly, at least every day, as a
[set of Tasks](/docs/identitymanager/6.1/integration-guide/tasks-jobs/index.md).

A _Sync Up_ is planned for every managed system that interact with Usercube.

A _Sync Up_ is associated with a
[**Connector**](/docs/identitymanager/6.1/integration-guide/connectors/index.md).

### Three sync up mode

Usercube provides three distinct synchronization algorithms:

- _incremental_
- _complete_
- _initial_

_Complete_ is most straightforward one. A _complete__Sync Up_ loads the managed systems' data into
Usercube as-is, replacing entirely the currently held data.

As it involves sending large amounts of data over HTTP between _Agent_ and _Server_, _complete_
execution time can be quite large.

To improve the _Sync Up_ execution time, Usercube provides the _incremental_ mode. This mode only
considers changes made to the managed systems since the last _Sync Up_. Those are applied to the
Usercube's database. Only changes are sent through the network, instead of whole data files, which
allows the _Sync Up_ execution time to be greatly reduced.

Changes are computed either by the managed system itself, given such capabilities are available, or
by a Usercube's _Agent_.

However, the _incremental_ mode cannot be 100% reliable for two reasons.

First, it relies on external inputs that are not directly controlled by Usercube. Second, it only
exports changes based on the managed system state, not on Usercube's database state.

External perturbations could cause slight differences between the database's state and the managed
systems'. Order can be restored by running a _complete_ Sync Up regularly. A _complete_ Sync Up
ensures the database is in a stable state, faithfully reflecting the managed system state, before
resuming the _incremental Sync Up_ iterations.

Safeguards are also implemented to avoid accidental overwrites, that would be caused by an empty or
incomplete input.

Finally, the _initial__Sync Up_ is designed to be used the first time a managed system connects to
Usercube. Just as the _complete_, it loads the data as a whole. But, unlike the _complete_, it does
not overwrites the currently held data and does not provide any safeguard. The _initial_ mode
provides a quick way to perform the first _Sync Up_. The trade-off is security: _initial__Sync Up_
should only be used the first time a managed system connected to Usercube and the database is empty,
as far as this connector is concerned. Launching the Initial _Sync Up_ twice would actually load the
same data twice whereas launching the _complete_ twice would have the same effect as launching the
_complete_ once.

### An ETL process

_Sync Up_ is organized as an
[Extract, Transform, Load](https://en.wikipedia.org/wiki/Extract,_transform,_load) process. It's
composed of three steps: _export_, _prepare-synchronization_, and _synchronization_.

## Export

The _Export_ is the first step of the _Sync Up_.

During this step, data is extracted from the managed system and generates _CSV files_ containing the
managed system's raw data. The **output** of this process is called the **_CSV source files_**. They
are written to the
[export directory](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
waiting to be used by the next-in-line _prepare-synchronization task_.

The _Export_ occurs _Agent_-side.

### Native support or custom process

Depending on the managed systems capabilities, an _Export_ step can be performed by one of
Usercube's native tasks or by custom scripts.

#### Using Usercube's native process

Usercube's
[**Connectors**](/docs/identitymanager/6.1/integration-guide/connectors/index.md)
provide native _Export_ tasks for the most common managed systems. _Active Directory_, _SAP_, or
_SharePoint_ are examples of natively supported managed systems. The output _CSV source files_
format is described in the
[**Connectors**](/docs/identitymanager/6.1/integration-guide/connectors/index.md)
section together with an exhaustive list of supported source managed systems.

[Connectors](/docs/identitymanager/6.1/integration-guide/connectors/index.md) are
Usercube's link to the managed system. They provide configurable export and fulfill capabilities
that can be used by Usercube _as-is_ without any further development.

#### Using a custom process

Exporting data from a managed system without a native Usercube process is still possible by writing
a custom _Export_ process.

If the managed system has built-in export capabilities, Usercube can simply rely on exports
scheduled by the source managed system. Regularly, the managed system generates reports, in whatever
format. A custom task, such as a
[PowerShell script](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/invokeexpressiontask/index.md),
can then be used to retrieve the generated exports, adapt them to the _CSV source files_ format
expected by Usercube and copy them to the
[_export directory_](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md).
The whole can be scheduled and orchestrated by a
[Job](/docs/identitymanager/6.1/integration-guide/tasks-jobs/jobs/index.md).

**For example**, a common scenario is to configure an HR management system to perform daily extracts
of its data to CSV files for the _Agent_ to find. This usually can be set up without any Usercube's
task, just by using the managed system and the organization's network capabilities.

If the managed system does not provide built-in export features but provides an API or an exposed
database, it's possible to write a custom _export_ process based on that API or direct requests to
the managed system's database. This process can then be used as an _export task_ wrapped in a
[PowerShell script](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/invokeexpressiontask/index.md)
or a
[SQL command](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/invokesqlcommandtask/index.md).
Any Windows process that can be called from a PowerShell script and generate a CSV file can serve as
an export process.

**How to choose the custom CSV source file format ?** It's best to keep it simple and stick as
closely as possible to the managed system data model. Data cleansing and translation to the resource
repository's Entity Model is handled later in the _Sync Up_ process. There is no need to try and
optimize the CSV source file format in a custom script. It's best to keep it close to the managed
system to be able to spot early _export_ errors.

### Export tasks output

The format of the exported _CSV Source files_ depends on the chosen _Sync Up_ mode and on the used
_export task_. Nonetheless, there are a few criteria that _prepare-synchronization_ expects to find
in those files.

First, it must be a CSV format. One line per entry, and every attribute as a column.

Then, there is a slight difference between _Complete/Initial_ and _Incremental_ export.

With the _Complete_ and _Initial_ modes, _CSV source files_ contain an exact extract of the managed
system's data as a list of entries. At this point, the Entity Model is not yet involved. Every line
of the _CSV source file_ mirrors a line in the source managed system database.

With _Incremental_ mode, if the source managed system is able, one more column is added. It contains
a ADD, UPDATE, or DELETE instruction. _Incremental_ export generates a list of changes made on the
managed system since the last export, instead of an exact mirror of the data. Active Directory and
Microsoft Entra ID (formerly Microsoft Azure AD), for example, are able to produce such exports, as
LDIF files, that the Active Directory connector translates into _resources_ changes. Usercube's
native support for ServiceNow and SCIM also provides such capabilities.

In case the source managed system does not possess _incremental_ export capabilities, the changes
computation is performed during the _prepare-synchronization_ step.

Inside those constraints, every natively supported _export task_ generates its own _CSV source file
format_, described in the
[connectors section](/docs/identitymanager/6.1/integration-guide/connectors/index.md).
Usually, two kinds of files are generated: _entries_, describing plain entries, and _associations_,
describing associations between entries.

All _CSV source files_ are written to the _export directory_.

At the end of the _export_ step, the
[_export directory_](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
contains several files per connectors, that will be translated into _resources_ during
_prepare-synchronization_ and _synchronization_ steps thanks to Entity Mapping (see below).

The
[_export directory_](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
can also contain opaque [cookie files](https://ldapwiki.com/wiki/DirSync) used for incremental
export of a few systems such as Active Directory, Microsoft Entra ID, ServiceNow, and SCIM.

The reader might now understand how, as laid out in the overview, the input data could be unreliable
given the volatile nature of the managed system export methods. _Complete_ and _incremental_ modes
work together to find the best compromise between reliability and execution time.

### Example

The following example demonstrates the native Active Directory export process.

Exporting data from an Active Directory can be achieved by using the
[Usercube-Export-ActiveDirectory task](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exporttask/index.md)
within a Job.

The Tasks requests from the source Active Directory all entries that match a configured filter. It
outputs a set of _CSV source files_, containing raw AD Entries data (`ad_entries.csv`), information
about group membership (`ad_members.csv`) and about the hierarchical organization
(`ad_managers.csv`).

![Active Directory Export Example](/images/identitymanager/6.1/integration-guide/synchronization/upward-data-sync/ad_export_example.webp)

`ad_entries.csv` contains raw AD entry data.

                    ```

employeeID;businessCategory;extensionAttribute15;objectCategory;sAMAccountName;userPrincipalName;parentdn
00001;fames;ac;turpis;egestas;integer;eget 00002;ullamcorper;eget;nulla;facilisi;etiam
00003;integer;eget;aliquet;nibh;praesent

````


```ad_managers.csv``` contains a list of associations, representing the link between an employee (```employeeId``` column) and their manager (```manager``` column).

                    ```
employeeID;manager
00001,99812
00002,99812
00003,99812

````

`ad_members.csv` contains also a list of associations, representing the link between a group
(identified by its `dn`) and its members (the `member` column).

                    ```

dn;member CN=SG_APP_AG002,DC=internal;CN=U34811,DC=internal
CN=SG_APP_AG002,DC=internal;CN=U18184,DC=internal CN=SG_APP_AG002,DC=internal;CN=U43405,DC=internal
CN=SG_APP_AG002,DC=internal;CN=U51630,DC=internal

````


## Entity Mapping

The aim of the _Sync Up_ is to load managed systems' data into the resource repository. As such, it requires Usercube to translate data from the managed system format (or, more accurately, the _export task_'s output format) into the resource repository format, that is, the [Entity Model](/docs/identitymanager/6.1/integration-guide/entity-model/index.md).

The translation rules are described in the [applicative configuration](/docs/identitymanager/6.1/integration-guide/toolkit/index.md) by [```<EntityTypeMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) and [```<EntityAssociationMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md) elements.

[```<EntityTypeMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) elements map the resources _CSV source files_ columns to [Entity Types](/docs/identitymanager/6.1/integration-guide/entity-model/index.md#entity-types) properties. Each mapping also identifies one column as the _primary key_ for this Entity Type. The _primary key_ is used to uniquely identify a resource in the _Sync Up_ process. It's mandatory to be able to perform _incremental__Sync Up_, as it allows to identify a resource on which an _update_ or a _delete_ has to be performed.

[```<EntityAssociationMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md) elements translate the _CSV source files_ into [Entity Associations](/docs/identitymanager/6.1/integration-guide/entity-model/index.md). They describe rules identifying associations between resources loaded thanks to the [```<EntityTypeMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md).

## Prepare Synchro

_Prepare-Synchronization_ is the second step of the _Sync Up_. It transforms the _CSV source files_ further, before the _Synchronization_ step.

It performs data cleansing and, in _incremental_ mode, computes changes made on the source managed system since the last _Prepare-Synchronization_.

It's performed on the _Agent_-side.

### Data cleansing

The following actions are performed on the _CSV source files._

1. Removing columns that are not used in [```<EntityTypeMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) or [```<EntityAssociationMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md)
2. Removing entries that have a null primary key
3. Removing duplicates
4. Sorting entries according to the primary key

The result of the _Prepare-Synchronization_ is stored in the [_export directory_](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md) as three files:

For every entity type of the relevant _Connector_ involved in an [```<EntityTypeMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) or an [```<EntityAssociationMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md) , a ```.sorted.csv``` file is generated, containing the final, cleaned, sorted result.

Duplicates are kept in a separate ```.duplicates.csv``` file.

Null primary key entries are kept in a separate ```.nullpk.csv``` file.

### Computing changes

In _incremental_ mode, changes might need to be computed by the _Agent_.

If the export step has provided computed changes, no further process is required. The changes will be sent as-is to the server.

If the export step has provided a full extract of the managed systems, the _prepare-synchronization_ step computes changes. This computation is based on the result of the last data cleansing, generated by the previous _prepare-synchronization_, and stored in the ```previous``` folder in the [_export directory_](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md).

For _incremental_ mode, it is recommended to use managed systems to compute changes when possible. Dedicated workstations and knowledge of the inner data organization allow managed systems to compute changes with a performance that Usercube can't match. Also, using managed systems for these operations avoid generating heavy files and alleviate Usercube's processing load.

The result is a set of clean lists of changes stored as ```.sorted.delta``` file containing a _command_ column.

The _command_ column can take the following values: _insert_, _update_, _delete_, and _merge_. These are instructions for the _synchronization_ step to apply the changes to the database.

The ```.sorted``` file (the original cleaned export file, not the changes) is stored in the ```previous``` folder inside the [_export directory_](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md). It will be used as a reference for the next _incremental__prepare-synchronization_ to compute the changes if needed.

Tampering with the ```previous``` folder content would result in false changes in order to be computed and result in data corruption in the Usercube database. To restore the Usercube database to a state faithful to the managed system, a _complete__Sync Up_ would be required.

### Preparing the server

At the beginning of every _prepare-synchronization_ process, the _Server_ is notified via HTTP.

Upon receiving the notification, the server creates a directory on its host environment, identified by a unique GUID, to contain ```.sorted``` or ```.sorted.delta``` files that will be sent by the agent.

This aims to prevent network errors that would cause an _incremental_ database update to happen more than once.

That means several _export_ and _Prepare-Synchronization_ tasks can be executed simultaneously, they will be processed by the server one at a time in the right order.

Of course, any notification of a _complete__Prepare-Synchronization_ would cancel the previous non-processed _incremental_ ones. As a _complete_ reloads the whole database, it renders _incremental_ changes computation moot.

### Sending clean exports

```.sorted``` or ```.sorted.delta``` files are sent over HTTP to the _Server_ for the last step.

### Prepare synchronization tasks

- [PrepareSynchronizationTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md) is the standard _prepare-synchronization_ task.
- [PrepareSynchronization Change Task](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md) is used to process data source files containing changes.
- [PrepareSynchronizationActiveDirectoryTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md) is specialized for Active Directory. This task handles Active Directory _incremental_ prepare-synchronization by using Active Directory _cookies_.

### Example

The following illustration models the complete _prepare-synchronization_ steps applied to an Active Directory export. The matching _Connector_ defines an Entity Type _AD Entry_ and two associations: _members_ and _manager_.

![Active Directory Prepare-Synchronization Example](/images/identitymanager/6.1/integration-guide/synchronization/upward-data-sync/ad_preparesynchro_example.webp)

## Synchro

_Synchronization_ is the last step. It loads data into the resource repository from cleaned _CSV source files_. It's performed _Server_-side.

### Translating

Before writing to the Usercube's database, the _Server_ uses [```<EntityTypeMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) and [```<EntityAssociationMapping>```](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md) to translate _CSV source files_ into _Entity Model compliant_ resources and resolve association links.

### Tables

The _Synchronization_ step involves four tables from Usercube's database.

- UR_Resources contains the actual resources.
- Mono-valued associations ( [target column index](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) 128 to 137 included ) are stored in UR_Resources as well,
- Multi-valued associations ( [target column index](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) null or -1 or 0 to 127 included ) are stored in the UR_ResourceLinks table.
- UR_ResourcesChanges and UR_ResourceLinkChanges are intermediary tables, used by the complete mode as an extra step before committing changes to the UR_Resources and UR_ResourceLinks in the context of a safeguard mechanism.

### Complete

_Complete__synchronization_ starts with a ```.sorted.csv``` file that contains cleaned data, as in whole data, not mere changes.

_Complete synchronization_ replaces entirely the database resources. That means that all resource, for that [Connector](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connector/index.md), that are in the database but not in the _CSV source files_ will be deleted. That means no change made to the database from outside of the connectors or the UI are persistent.

_Complete synchronization_ does not blindly insert data into Usercube database. Its aim is to update Usercube database to match the ```.sorted``` files received.

To do so, ```.sorted``` files are translated into resources. Then, ```.sorted``` resources are compared against the currently hold database resources, matching Primary Key to Primary Key, to find differences.

That means that, just as the _incremental_ mode, the complete mode will actually apply changes to the database. The difference being that the _complete_ synchronization computes the changes on the _Server_ and the _incremental_ computation computes the changes on the _Agent_ or the managed system. Hence, complete synchronization has to send large data files over the network and is slower.

#### Safeguard

Before actually updating the database, the number of changes to be applied to the database to match the ```.sorted``` resources is compared to a user-defined threshold.

The threshold is a percentage of the total number of stored resources. If the number of changes goes over the threshold, the synchronization is blocked. This safeguard aims at detecting human or system errors that could corrupt Usercube's database. For example, a number of _delete_ commands greater than the threshold could be caused by an accidental empty _CSV source file_ being fed to the _synchronization_.

For this purpose, changes are applied to an intermediary safeguard set of tables, UR_ResourcesChanges and UR_ResourceLinkChanges. The threshold is checked, and if validated, changes are applied to the UR_Resources and UR_ResourceLinks tables.

### Initial

_Initial_ synchronization loads the translated resources directly into the database, using INSERT SQL commands. There is no threshold checking, no comparing the data to insert to the currently held data to find differences. It should only be used on a managed system for which Usercube does not hold any resources yet.

### Incremental

The incremental mode uses a ```.sorted.delta``` file that contains changes.

Thresholds are checked just as with the _complete_, using intermediary UR_ResourcesChanges and UR_ResourceLinkChanges. tables.

Then, changes according to the _command_ column are applied to UR_Resources and UR_ResourceLinks.

### Synchronization tasks

- [SynchronizeTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md) is the standard _synchronization_ task.
- [SynchronizeChangesTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md) is used to handle changes together with [PrepareSynchronization Change Task](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md).
- [SynchronizeActiveDirectoryTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index.md) is specialized for Active Directory. To be used with [PrepareSynchronizationActiveDirectoryTask](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md).

### Example

This example illustrates the _complete_ loading of Active Directory ```.sorted``` files into Usercube database.

![Active Directory Synchronization Example](/images/identitymanager/6.1/integration-guide/synchronization/upward-data-sync/ad_synchro_example.webp)

## Handling Errors

The _syncro_ step is where potential errors laid out in the overview could impact the database.

- The ```previous``` folder content could be tampered with;
- Managed systems limitations, or human error in the export step, could result in a wrong or incomplete _CSV source file_ being fed to the _Synchronization_;
- Usercube database could be restored to an older state to try and fix hardware failure or SQL tests gone wrong.

These events, although exceptional, occur. They cause Usercube's database and the managed systems to be slightly off one another. The _incremental__Sync Up_ cannot fix these differences because the database is not taken into account in the changes computation. The _complete__Sync Up_ can fix it because it compares directly the database against the _export_ output files, i.e. it relies on the managed system's state, not on the database state.

It is hence recommended to run at least a daily _complete_ synchronization to account for these exceptional events and quickly fix the errors they might have cause into the database.

Remember that _incremental_ and _complete_ Sync Up modes use safeguards to avoid accidental overwrites. That means any error that could find its way into the database would be small.

_Incremental_ mode also offers another optimization that will be described in the [evaluate policy section](/docs/identitymanager/6.1/integration-guide/role-assignment/evaluate-policy/index.md). Trade-offs of that optimization can also be counterbalanced by running a daily _complete_ synchronization.

## Thresholds

A introduced earlier, to mitigate the risk of data loss in the case of abnormal data source files, the _synchronization Job_ is locked if the number of changes to apply goes over a specific threshold.

Thresholds can be configured by the user in the applicative configuration and be specific to a [Connector](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connector/index.md), an [EntityTypeMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) and/or an [EntityAssociationMapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md). They are expressed as number of lines (ex: ```MaximumInsertedLines```) or as a rate (ex: ```MaxPercentageDeletedLines```).

A synchronization task locked by a threshold can be unlocked by executing the Synchronization Validation task.

Thresholds are ignored in _initial_ mode.

The task's argument ```-force``` can be used to ignore thresholds.

**---**

Next, a word about the assignment policy.
````
