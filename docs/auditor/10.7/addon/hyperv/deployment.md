---
title: "Deployment Scenarios"
description: "Deployment Scenarios"
sidebar_position: 20
---

# Deployment Scenarios

The add-on can be deployed on any computer in your environment. For example, you can run the add-on
on the computer where Auditor is installed, or on a remote server. Also, consider different SCVMM
deployment scenarios. Possible deployment options are as follows (here it is assumed that the add-on
is installed together with Auditor server):

1. Add-on running on the same machine as SCVMM server (with Management Console):

![deployment_1](/images/auditor/10.7/addon/hyperv/diagram1server.webp)

2. Add-on and SCVMM server (with Management Console) running on different machines:

![deployment_2](/images/auditor/10.7/addon/hyperv/diagram2servers_thumb_0_0.webp)

In this scenario, the account used to access SCVMM server must be a member of the _Remote Management
Users_ local group on the SCVMM server.

3. Add-on running on the same machine as SCVMM Management Console; SCVMM server running on the
   remote machine:

![deployment_3](/images/auditor/10.7/addon/hyperv/diagram3servers_thumb_0_0.webp)

In this scenario, make sure to specify SCVMM server address in the **DataCollectionServer**
parameter (not the machine where SCVMM console runs) in the **settings.xml** configuration file. See
the [Add-On Parameters](/docs/auditor/10.7/addon/hyperv/parameters.md)topic for additional information.

Depending on the deployment scenario you choose, you will need to define a set of the add-on
parameters. Several examples are provided below.

In the certain scenarios you may need to configure not all parameters but only some of them.

## Example 1

- The add-on runs on the Auditor server.
- The _System_ account is used to launch the add-on via Task Scheduler (default configuration).
- Configuration parameters to specify in **settings.xml** (sample values):

````<NetwrixAuditorEndpoint>
https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint>```

```<NetwrixAuditorUserName/>```

```<NetrixAuditorPassword/>```

Configuration parameters __NetwrixAuditorUserName__ and __NetrixAuditorPassword__ are not required.

## Example 2

- The add-on runs on the Auditor server with the explicitly specified user credentials.
- Configuration parameters to specify in __settings.xml__ (sample values):

  ```<NetwrixAuditorEndpoint>
  https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint>```

  ```<NetwrixAuditorUserName>SecurityOfficer```
  ```</NetwrixAuditorUserName>```

  ```<NetwrixAuditorPassword>NetwrixUser```
  ```</NetwrixAuditorPassword>```

## Example 3

- The add-on runs on the machine with SCVMM.
- The _System_ account is used to launch the add-on via Task Scheduler (default configuration).
- Configuration parameters to specify in __settings.xml__:

```<DataCollectionServer/>
````

`<DataCollectionUserName/>`

`<DataCollectionPassword/>`

Credentials for **Data Collection Server** (that is, SCVMM) are not required.

## Example 4

- SCVMM and/or Auditor run on the machines other than the add-on server.
- In this case, the corresponding set of credentials (for **Data Collection Server** and/or Netwrix
  Auditor) must be specified explicitly.
- Configuration parameters to specify in **settings.xml** (sample values):

    `<NetwrixAuditorEndpoint>https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint> `

`<NetwrixAuditorUserName>SecurityOfficer</NetwrixAuditorUserName>`

`<NetrixAuditorPassword>NetwrixUser</NetrixAuditorPassword>`

`<DataCollectionServer>SCVMMServer</DataCollectionServer>`

`<DataCollectionUserName>SCVMMAdmin</DataCollectionUserName>`

`<DataCollectionPassword>Password</DataCollectionPassword>`
