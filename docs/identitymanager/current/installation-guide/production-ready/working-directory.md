---
title: "Create a Working Directory"
description: "Create a Working Directory"
sidebar_position: 10
---

# Create a Working Directory

The working directory is a simple Windows directory where Identity Manager's Server and/or Agent executable(s) and dependencies are stored on the workstation. This section shows how to set up the directory for the rest of the installation and Identity Manager's lifespan.

The following steps are to be performed on the Server workstation. They will also have to be executed on the Agent workstation if a separate Agent setup has been chosen.

## Steps

### 1. Create the working directory

The recommended naming convention is `C:/identitymanager<Organization>`, where `<Organization>` is the name of the organization targeted by this installation.

### 2. Extract the content of the runtime archive

Extract the content of the `Runtime` archive into a `Runtime` folder in the newly created working directory.

### 3. Create a new empty folder in the working directory

The folder will be used by the Server and Agent to write and read synchronization files and provisioning orders. Job logs are usually found here. It is usually named `Temp` and is referenced in the technical configuration files.

The working directory structure should now resemble the following:

```text
📦 UsercubeXXX
 ├─ 📁 Temp
 └─ 📁 Runtime
     ├─ 📁 wwwroot
     ├─ ...
     ├─ 📄 Usercube-Server.exe
     ├─ 📄 Usercube-Agent.exe
     ├─ ...
     ├─ 📄 appsettings.agent.json
     ├─ 📄 appsettings.cyberArk.agent.json
     ├─ 📄 appsettings.encrypted.agent.json
     └─ 📄 appsettings.json
```

`Runtime` contains Identity Manager executables and configuration files, including:

- `Usercube-Server.exe`: the Identity Manager Server executable, which also contains an Agent.
- `Usercube-Agent.exe`: the separate Identity Manager Agent executable, that will be used only if
you choose to install a separate agent.
- `appsettings.*.json`:
[Network Configuration](../../integration-guide/network-configuration).

## What's Next?

Next section shows how to install the Identity Manager Database. See the [Install the Database](../../installation-guide/production-ready/database)topic for additional information.

