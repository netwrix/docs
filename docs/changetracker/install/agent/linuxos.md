---
title: "Installing Gen 7 Agent for Linux"
description: "Installing Gen 7 Agent for Linux"
sidebar_position: 30
---

# Installing Gen 7 Agent for Linux

## Using local RPM files

You can also install the **Gen 7 Agent** on Linux and Unix platforms.

Install the Gen7 Agent RPM as follows:

[root@CentOS-6 tmp]# rpm -ivh nnt-changetracker-gen7agentcore-7.0.1.9-252.noarch.rpm

After installation, configure the **HubDetails.xml** file. Edit **HubDetails.xml** directly at
the `/var/nnt/gen7agent.app.netcore` path, or use the
`/opt/nnt/gen7agentcore/configure-gen7agentcore.sh` script.

Configuring Gen7 Agent service...

Setting file ownership...

===========================================================================

Gen7 Agent install complete.

Now run /opt/nnt/gen7agentcore/configure-gen7agent.sh to complete installation.

===========================================================================

=================================================================

The Gen7 Agent will be configured with the following settings :

Hub URL : https://192.168.1.107/api

Agent user : agent

Agent password : `<hidden>`

Agent path : /opt/nnt/gen7agentcore/bin

Agent prefix : GenVII-

Agent suffix :

Agent thumbprint :

=================================================================

Start the **Agent service** using the following command:

[root@CentOS-6 tmp]# /sbin/service gen7agentcore start

Starting NNT Gen7 Agent :

[root@CentOS-6 tmp]# [ OK ]

## Scripted installation of Gen 7 Agent RPM installer

The following single command completes the entire process:

[root@CentOS-6 tmp]# rpm -ivh nnt-changetracker-gen7agentcore-7.0.1.9-252.noarch.rpm ;
/opt/nnt/gen7agentcore/configure-gen7agentcore.sh https://192.168.1.107/api agent passWord121
/opt/nnt/agent/bin GenVII- ; /sbin/service nntgen7agent start

:::note
Remove `rpm -evv nnt-changetracker-gen7agentcore-7.0.1.9-252.noarch`
:::


### For Debian Linux

Netwrix provides packages for **Debian** distributions. Download the relevant Gen 7 Agent
package, then install it using:

# dpkg -i nnt-changetracker-gen7agentcore_7.0.1.8-261_all.deb

You can then use the same steps for configuring your **HubDetails.xml** file as in the previous
section.

:::note
To uninstall the Gen 7 Agent on Debian, use:
:::


# apt-get remove nnt-gen7agentcore

Remove the Gen 7 Agent files, located at:

# rm -fr /etc/systemd/system/nntgen7agentcore.service

# rm -fr /opt/nnt

#### For Mac OSX

# sudo installer -pkg /tmp/nnt-gen7agentcore-7.0.0.19-34-x64.pkg -target /

:::note
To uninstall the Gen 7 Agent on MACOSX, use the following command:
:::


sudo pkgutil --forget nnt-gen7agentcore-7.0.0.19-34-x64.pkg

Remove the Gen 7 Agent files, located at:

# rm -fr /var/nnt

# rm -fr /opt/nnt

Run the Agent UI. See the [Agent First Run](/docs/changetracker/install/agent/firstrun.md) topic for additional information.
