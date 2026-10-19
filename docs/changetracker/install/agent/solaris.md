---
title: "Installing Express Agent for Solaris (SPARC and Intel)"
description: "Installing Express Agent for Solaris (SPARC and Intel)"
sidebar_position: 40
---

# Installing Express Agent for Solaris (SPARC and Intel)

The Change Tracker Express Agent is a reduced-feature, ultra-portable Agent for use on any platform
that doesn't support .NET (or Mono).

Unlike the standard Gen 7 agent, the Express Agent doesn't require a .NET/Mono runtime. NNT Members
Area provides the Express Agent as a pkg package. Download it and install it using pkg commands.

# pkgadd -ivh nnt-changetracker-expressagent-2.0.1.3-25.ppc.pkg

After you install the package, use the configuration script to create **HubDetails.xml**.
The script, `configure-expressagent.sh`, is located in the installation directory:
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

The script also starts the agent service. If the agent server can communicate with Change
Tracker over the HTTP/HTTPS port you want, the agent registers and displays as a new device in the
hub. The script installs the agent into `/opt/nnt/expressagent` and stores the HubDetails, log, and
database files in `var/nnt/expressagent`.

To start and stop the service manually, use the following commands:

# /etc/rc.d/rc2.d/Snntexpressagent.sh start

# /etc/rc.d/rc2.d/Knntexpressagent.sh stop

## Scripted installation of Gen 7 Express Agent PKG installer

As with all other agents, you can script the installation process.

```bash
/opt/nnt/expressagent/configure-expressagent.sh `https://IPADDRESS-SERVERNAME:PORT/api/` agent passWord121 /var/nnt/expressagent
```

Run the Agent UI. See the [Agent First Run](/docs/changetracker/install/agent/firstrun.md) topic for additional information.
