---
title: "Upgrade from Agent App to Gen 7 Agent"
description: "Upgrade from Agent App to Gen 7 Agent"
sidebar_position: 60
---

# Upgrade from Agent App to Gen 7 Agent

If you are currently using an Agent App (Version 1.0.0.x) and you wish to upgrade to use the Gen 7
Agent instead, the procedure is straightforward but as with any software upgrade, there may be
additional steps required depending on your individual circumstances.

The high-level overview of upgrading agents in Gen 7:

**Step 1 –** Stop Agent App service (you may choose to uninstall the program at this stage).

**Step 2 –** Run installer for Gen 7 Agent to install.

- Hub details, Agent username and password are required;
- Thumbprint may be required if using a private certificate on your Hub server.

:::warning
Do not set either a **Nameprefix** or **Namesuffix** for the Agent name – if the Gen 7
Agent registers with the same Host Name as the Agent App is using, the Gen 7 Agent will simply
assume the identity of the Agent App and therefore event and report continuity will be ensured.
:::


**Step 3 –** Once the Gen 7 Agent is operational you can then remove the Agent App (if you didn’t
already do this in step 1).

**Step 4 –** Stop the NNT Agent App Service.

- **For Windows** – Either use the MS Services Console Run > services.msc or use Command Line as
  Administrator: `sc stop NNTAgentService`

![UpgradeAgentWindowsCommandPrompt](/images/changetracker/8.0/install/agent/upgradeagentwindowscommandprompt.webp)

- **For Linux** – Use: `service nntagent stop`

**Step 5 –** Install Gen 7 Agent. (missing or bad snippet)

- **Windows** – See the
  [Gen 7 Agent for Windows](/docs/changetracker/8.0/requirements/gen7agentwindows.md)
  topic for additional information.

- **Linux** – See the
  [Installing Gen 7 Agent for Linux](/docs/changetracker/8.0/install/agent/linuxos.md)
  topic for additional information.

**Step 6 –** Uninstall old Agent App.

- **Windows** – Using **NNTAgent.exe** from command line:

C:\Windows\system32&gt; C:\ProgramData\{2443C4AA-A2DC-4926-9D6B-2D3D8AAE6006}\NNTAgent.exe /s
MODIFY=FALSE REMOVE=TRUE UNINSTALL=YES

- **Linux** – from terminal:

rpm -ev nnt-mono nnt-agent

- **Debian** - from terminal:

    # apt-get remove nnt-agent

    # apt-get remove nnt-mono

    (missing or bad snippet)

    # rm -fr /opt/nnt

    # rm -fr /opt/mono

- MAC OSX – from terminal:

    sudo pkgutil –-forget MonoFramework-MDK-4.6.1.3.macos10.xamarin.universal.pkg

    sudo pkgutil --forget nnt-gen7agent-7.0.0.19-34-x64.pkg

    (missing or bad snippet)

    # rm -fr /var/nnt

    # rm -fr /opt/nnt

    # rm -fr /opt/mono

:::note
Please contact [Netwrix Support](https://www.netwrix.com/support.html) if you need help at
any stage or if you are experiencing issues.

:::
