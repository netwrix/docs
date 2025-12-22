---
title: "Installing Gen 7 Agent for Linux"
description: "Installing Gen 7 Agent for Linux"
sidebar_position: 30
---

# Installing Gen 7 Agent for Linux

## Using Local RPM Files

**Gen 7 Agent** can also be installed on Linux and Unix platforms.

Installation simply requires the Gen7 Agent RPM to be installed as follows:

[root@CentOS-6 tmp]# rpm -ivh nnt-changetracker-gen7agentcore-7.0.1.9-252.noarch.rpm

Once installed, the **HubDetails.xml** file must be configured – this can be done directly by
editing a **HubDetails.xml** on the `/var/nnt/gen7agent.app.netcore` path or by using the
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

The **Agent service** can then be started using the following command;

[root@CentOS-6 tmp]# /sbin/service gen7agentcore start

Starting NNT Gen7 Agent :

[root@CentOS-6 tmp]# [ OK ]

## Scripted Installation of Gen 7 Agent RPM Installer

The entire process outlined above can be completed using a single command as follows:

[root@CentOS-6 tmp]# rpm -ivh nnt-changetracker-gen7agentcore-7.0.1.9-252.noarch.rpm ;
/opt/nnt/gen7agentcore/configure-gen7agentcore.sh https://192.168.1.107/api agent passWord121
/opt/nnt/agent/bin GenVII- ; /sbin/service nntgen7agent start

:::note
Remove `rpm -evv nnt-changetracker-gen7agentcore-7.0.1.9-252.noarch`
:::


### For Debian Linux

Netwrix provides packages for **Debian** distributions so please download the relevant Gen 7 Agent
package then install using:

# dpkg -i nnt-changetracker-gen7agentcore_7.0.1.8-261_all.deb

You can then use the same steps for configuring your **HubDetails.xml** file as in the previous
section.

:::note
To uninstall the Gen 7 Agent on Debian, use:
:::


# apt-get remove nnt-gen7agentcore

You’ll then want to remove the Gen 7 Agent files which will be found at:

# rm -fr /etc/systemd/system/nntgen7agentcore.service

# rm -fr /opt/nnt

#### For Mac OSX

# sudo installer -pkg /tmp/nnt-gen7agentcore-7.0.0.19-34-x64.pkg -target /

:::note
To uninstall the Gen 7 Agent on MACOSX, use the following command:
:::


sudo pkgutil --forget nnt-gen7agentcore-7.0.0.19-34-x64.pkg

You’ll then want to remove the Gen 7 Agent files which will be found at:

# rm -fr /var/nnt

# rm -fr /opt/nnt

(missing or bad snippet)
