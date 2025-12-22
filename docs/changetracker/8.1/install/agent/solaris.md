---
title: "Installing Express Agent for Solaris (SPARC and Intel)"
description: "Installing Express Agent for Solaris (SPARC and Intel)"
sidebar_position: 40
---

# Installing Express Agent for Solaris (SPARC and Intel)

The Change Tracker Express Agent is a reduced feature but ultra-portable Agent provided for use on
any platform where support for .NET (and Mono) is not provided.

Unlike the standard Gen 7 agent, the Express Agent does not require a .NET/Mono runtime. The Express
Agent is provided as an pkg package, downloaded from NNT Members Area and installed using pkg
commands.

# pkgadd -ivh nnt-changetracker-expressagent-2.0.1.3-25.ppc.pkg

Once the package is installed the **HubDetails.xml** can be created using a configuration script.
The `configure-expressagent.sh `and is found within the installation directory -
`/opt/nnt/expressagent`.

# bash /opt/nnt/expressagent/configure-expressagent.sh

Welcome to the NNT ChangeTracker Express Agent Configuration script

Hub URL [https://localhost/api/] : `https://IPADDRESS-SERVERNAME:PORT/api/`

Agent username [agent] : agent

Agent password : passWord121

Agent config path [/var/nnt/expressagent] : /var/nnt/expressagent

==================================================================

The Express Agent will be configured with the following settings :

Hub URL : https://localhost/api/

Agent user : agent

Agent password : `<hidden>`

Config path : /var/nnt/expressagent

==================================================================

The script will also start the agent service. If the agent server is able to communicate with Change
Tracker over the desired HTTP/HTTPS port, the agent will register and display as a new device in the
hub. The agent will be installed into `/opt/nnt/expressagent`. HubDetails, log and database files
will be stored in `var/nnt/expressagent`.

To start and stop the service manually, use the following commands:

# /etc/rc.d/rc2.d/Snntexpressagent.sh start

# /etc/rc.d/rc2.d/Knntexpressagent.sh stop

## Scripted Installation of Gen 7 Express Agent PKG Installer

As with all other agents, the installation process can be scripted.

```bash
/opt/nnt/expressagent/configure-expressagent.sh `https://IPADDRESS-SERVERNAME:PORT/api/` agent passWord121 /var/nnt/expressagent
```

Run the Agent UI. See the [ Agent First Run](/docs/changetracker/8.1/install/agent/firstrun.md) topic for additional information.
