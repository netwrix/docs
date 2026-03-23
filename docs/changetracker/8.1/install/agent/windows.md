---
title: "Installing Gen 7 Agent for Windows"
description: "Installing Gen 7 Agent for Windows"
sidebar_position: 10
---

# Installing Gen 7 Agent for Windows

The **Hub API** page must be entered together with **Access Credentials**.

By default the Agent username is ‘agent’ with password ‘passWord121’ but these can be changed. See
the Users: User Administration topic for additional information.

![InstallAgent](/images/changetracker/8.1/install/agent/installagent.webp)

By default the Agent will register using the Name of the server but there is an opportunity to
customize this during installation or post-installation by editing the Hub Details file. See the
[First Run – HubDetails.xml File](/docs/changetracker/8.1/admin/settingstab/devicegroups.md) topic for additional
information.

:::info
During installation, you can also do this on the **Advanced Configuration**
step and test agent connectivity.
:::


![InstallAgentAdvancedConfiguration](/images/changetracker/8.1/install/agent/installagentadvancedconfiguration.webp)

![InstallAgentTestConnectivity](/images/changetracker/8.1/install/agent/installagenttestconnectivity.webp)

:::note
To maximize performance, Gen 7 Agent stores operational files in
_%PROGRAMDATA%\NNT\gen7agent.service_. If you ever need to provide the
**rolling-log.txt** file to [Netwrix Support](https://www.netwrix.com/support.html), it is in the same location. See the [First Run – HubDetails.xml File](/docs/changetracker/8.1/admin/settingstab/devicegroups.md) topic
for additional information on downloading the .xml file for agents.
:::


![InstallAgentOperationFiles](/images/changetracker/8.1/install/agent/installagentoperationfiles.webp)

Run the Agent UI. See the [Agent First Run](/docs/changetracker/8.1/install/agent/firstrun.md) topic for additional information.
