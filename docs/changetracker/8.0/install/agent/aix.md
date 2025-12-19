---
title: "Installing Express Agent for AIX"
description: "Installing Express Agent for AIX"
sidebar_position: 50
---

# Installing Express Agent for AIX

Note: In order for the Change Tracker Express Agent for AIX to identify the who made the change
(WMTC) information for detected file changes, the AIX® Event Infrastructure must be installed and
configured. Directions for the installation of the AIX® Event Infrastructure can be found in the
following IBM’s article:
[Setting up the AIX Event Infrastructure](https://www.ibm.com/support/knowledgecenter/en/ssw_aix_71/com.ibm.aix.osdevice/settingupahafs.htm)
article.

In summary the AIX® Event Infrastructure installed and configured using the below steps.

**Step 1 –** . Install the **bos.ahafs** fileset.

**Step 2 –** Create the directory for the desired mount point.

**Step 3 –** Run the following command:

`mount –v ahafs <mount point> <mount point>`

**Example**:

# mkdir /aha

# mount -v ahafs /aha /aha

Unlike the standard Gen 7 agent, the Express Agent does not require a .NET/Mono runtime. The Express
Agent is provided as an rpm package, downloaded from NNT Members Area and installed using rpm
commands.

# rpm -ivh rpm -ivh nnt-changetracker-expressagent-2.0.1.3-25.ppc.rpm

Once the package is installed the **HubDetails.xml** can be created using a configuration script.
The configure-expressagent.sh and is found within the installation directory: /opt/nnt/expressagent.

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

(missing or bad snippet)

## Scripted Installation of Express Agent RPM Installer

As with all other agents, the installation process can be scripted.

# bash /opt/nnt/expressagent/configure-expressagent.sh `https://IPADDRESS-SERVERNAME:PORT/api/` agent passWord121 /var/nnt/expressagent

(missing or bad snippet)
