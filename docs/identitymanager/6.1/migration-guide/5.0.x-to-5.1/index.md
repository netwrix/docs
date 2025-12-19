---
title: "5.0.X to 5.1"
description: "5.0.X to 5.1"
sidebar_position: 50
---

# 5.0.X to 5.1

## 1. Jobs

For any information about Jobs or Tasks:

- [Data model: Jobs](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/index.md)
- [Execute Jobs](/docs/identitymanager/6.1/integration-guide/tasks-jobs/jobs/index.md)
- [information about all Tasks](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/tasks/index.md)
- [Information about Jobs](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/jobs/job/index.md)

#### a. Powershell

In the old configuration, the Tasks needed to have an InstanceIdentifier (-i) to be launched. This
argument no longer exists today.

**Old powershell:**

```

    & $exeSynchronizationJob -j AzureAD_Synchronization -i 'Synchronizing AzureAD' -s $sqlConnectionString -p $pathTempSynchronization -u $apiUri -a $jobSecret -c $jobClientId -t AzureAD

```

**New powershell:**

```

    & $exeSynchronizationJob -j AzureAD_Synchronization -s $sqlConnectionString -p $pathTempSynchronization -u $apiUri -a $jobSecret -c $jobClientId -t AzureAD

```

**Other change:**

There are not openIdClient in all Synchronization. A new property is necessary to launch a
synchronization with a command:

```

    [Required]
    "-o|--cacheFilePath ", "Specifies the cache file directory to reload provisioning cache." (SingleValue)

```

There are not OpenIdclient for manualProvisioning.

In FulfillLDAPTask, the property Port doesn't exist in 5.1. The Server property write with this rule
: "Host:Port"

#### b. Configuration XML

In old configuration the task was named Job. All Jobs in 5.0.X are called Tasks in 5.1. The
Executable "Usercube-Upgrade-ConfigurationVersion" writes correctly Job in Task and Use the
scaffolding type. But the migrated tasks are not configured. it's necessary to check all Tasks and
connectors too before importing configuration.

**old Task configuration:**

```

**<Job DisplayName_L1="HR - Synchronization" Identifier="HR_Synchronization" Connector="HR" OpenIdClient="Job" JobType="Synchronization"/>**

```

**New Task configuration:**

```

    <SynchronizeTask Identifier="HR_Synchronization" DisplayName_L1="HR - Synchronization" DisplayName_L2="RH - Synchronisation" Connector="HR" OpenIdClient="Job" />

```

#### c. Api RunJob

This API no longer exists in version 5.1. To launch a Task on the server side you must use either:

- The automaton (by creating a Job and linking the Tasks you want to launch)
- The [RunTask API](/docs/identitymanager/6.1/integration-guide/api/server/job/index.md)

#### d. Information system appsettings

All the information of the information system is on this file:
[appsettings.ConnectionInformation.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).
To launch Tasks that need to connect to this system and that are launched with the automaton, you
must enter this information in this file.

#### f. Encryption appsettings.ConnectionInformation.json

All data from external systems is in a JSON that can be encrypted with an RSA key. Encrypt this with
[Usercube-Protect-X509JsonFile](/docs/identitymanager/6.1/integration-guide/executables/references/protect-x509jsonfile/index.md)
