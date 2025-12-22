---
title: "Deployment Scenarios"
description: "Deployment Scenarios"
sidebar_position: 20
---

# Deployment Scenarios

The Add-On can run on any computer in your environment, except for the machine where your Nutanix
Prism Central/Element runs. Depending on the deployment scenario you choose, you will need to define
a different set of parameters

Possible deployment options are as follows:

1. Add-on running on the same machine as Auditor Server.
2. Add-on running on the remote machine.

## Example 1

- The add-on runs on the Auditor Server.
- Configuration parameters to specify in **settings.xml** (sample values):

````<NetwrixAuditorEndpoint>
https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint>```

```<NetwrixAuditorUserName/>```

```<NetrixAuditorPassword/>```

Configuration parameters __NetwrixAuditorUserName__ and __NetwrixAuditorPassword__ are not required.

You will be prompted for the corresponding set of credentials (user name and password) when you run the __install.ps1__ script. For that, use the Netwrix Auditor __Add-on for Nutanix AHV Configurator__ tool (see steps 4 and 5 of the [Deploy the Add-On](/docs/auditor/10.7/addon/nutanixahv/install.md)). Credentials for connection to Nutanix Prism server will be then encrypted and stored in the solution configuration. Consider that user account should have the __User Admin__ role in Nutanix Prism.

## Example 2

- The add-on runs on the Auditor Server with the explicitly specified user credentials, or on the remote machine.
- Configuration parameters to specify in __settings.xml__ (sample values):

  ```<NetwrixAuditorEndpoint>
  https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint>```

  ```<NetwrixAuditorUserName>SecurityOfficer```
  ```</NetwrixAuditorUserName>```

  ```<NetwrixAuditorPassword>NetwrixUser```
  ```</NetwrixAuditorPassword>```

Netwrix recommends to create a special user account with permissions to access Auditor and Nutanix server.
````
