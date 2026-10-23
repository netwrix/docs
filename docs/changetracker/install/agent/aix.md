---
title: "Installing Express Agent for AIX"
description: "Installing Express Agent for AIX"
sidebar_position: 50
---

# Installing Express Agent for AIX

:::note
For the Change Tracker Express Agent for AIX to identify the Who Made The Change (WMTC) information
for detected file changes, you must install and configure the AIX® Event Infrastructure. IBM's
article [Setting up the AIX Event Infrastructure](https://www.ibm.com/support/knowledgecenter/en/ssw_aix_71/com.ibm.aix.osdevice/settingupahafs.htm)
contains directions for installing the AIX® Event Infrastructure.
:::

The following steps install and configure the AIX® Event Infrastructure.

**Step 1 –** . Install the **bos.ahafs** fileset.

**Step 2 –** Create the directory for the mount point you want.

**Step 3 –** Run the following command:

```bash
mount –v ahafs <mount point> <mount point>
```

**Example**:

```bash
# mkdir /aha
# mount -v ahafs /aha /aha
```

Unlike the standard Gen 7 agent, the Express Agent doesn't require a .NET/Mono runtime. NNT Members
Area provides the Express Agent as an rpm package. Download it and install it using rpm commands.

```bash
# rpm -ivh nnt-changetracker-expressagent-2.0.1.3-25.ppc.rpm
```

After you install the package, use the configuration script to create **HubDetails.xml**.
The script, `configure-expressagent.sh`, is located in the installation directory:
`/opt/nnt/expressagent`.

```bash
# bash /opt/nnt/expressagent/configure-expressagent.sh
```

Welcome to the NNT ChangeTracker Express Agent Configuration script

Hub URL [https://localhost/api/] : `https://IPADDRESS-SERVERNAME:PORT/api/`

Agent username [agent] : agent

Agent password : passWord121

Agent config path [/var/nnt/expressagent] : /var/nnt/expressagent

The Express Agent will be configured with the following settings :

Hub URL : https://localhost/api/

Agent user : agent

Agent password : `<hidden>`

Config path : /var/nnt/expressagent

The script also starts the agent service. If the agent server can communicate with Change
Tracker over the HTTP/HTTPS port you want, the agent registers and displays as a new device in the
hub. The script installs the agent into `/opt/nnt/expressagent` and stores the HubDetails, log, and
database files in `var/nnt/expressagent`.

To start and stop the service manually, use the following commands:

- `# /etc/rc.d/rc2.d/Snntexpressagent.sh start`
- `# /etc/rc.d/rc2.d/Knntexpressagent.sh stop`

## Scripted Installation of Express Agent RPM Installer

As with all other agents, you can script the installation process.

```bash
# bash /opt/nnt/expressagent/configure-expressagent.sh https://IPADDRESS-SERVERNAME:PORT/api/ agent passWord121 /var/nnt/expressagent
```

Run the Agent UI. See the [Agent First Run](/docs/changetracker/install/agent/firstrun.md) topic for additional information.
