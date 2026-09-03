---
title: "Installing Gen 7 Agent for Windows"
description: "Installing Gen 7 Agent for Windows"
sidebar_position: 10
---

# Installing Gen 7 Agent for Windows

Enter the **Hub API** page together with **Access Credentials**.

By default, the Agent username is `agent` with password `passWord121`, but you can change these.
See the Users: User Administration topic for additional information.

![InstallAgent](/images/changetracker/install/agent/installagent.webp)

By default, the Agent registers using the name of the server, but you can customize this during
installation or after installation by editing the Hub Details file. See the
[First Run – HubDetails.xml File](/docs/changetracker/admin/settingstab/devicegroups.md) topic for additional
information.

:::info
You can also customize the agent name on the **Advanced Configuration**
step of the installation, which also lets you test agent connectivity.
:::


![InstallAgentAdvancedConfiguration](/images/changetracker/install/agent/installagentadvancedconfiguration.webp)

![InstallAgentTestConnectivity](/images/changetracker/install/agent/installagenttestconnectivity.webp)

:::note
To maximize performance, Gen 7 Agent operational files are located in
_%PROGRAMDATA%\NNT\gen7agent.service_. If you ever need to provide the
**rolling-log.txt** file to [Netwrix Support](https://www.netwrix.com/support.html), you can find
it here. See the [First Run – HubDetails.xml File](/docs/changetracker/admin/settingstab/devicegroups.md) topic
for additional information on downloading the .xml file for agents.
:::


![InstallAgentOperationFiles](/images/changetracker/install/agent/installagentoperationfiles.webp)

Run the Agent UI. See the [Agent First Run](/docs/changetracker/install/agent/firstrun.md) topic for additional information.
