---
title: "Agent Installer Update Window"
description: "Agent Installer Update Window"
sidebar_position: 10
---

# Agent Installer Update Window

Netwrix periodically releases updated Agent installation packages. Typically these updates
accompany Microsoft KBs (hot-fixes) that alter the LSASS components and interfere with the
Agent instrumentation. See the [Agent Information](/docs/threatprevention/8.1/install/agent/overview.md) topic for
additional information.

To download an installation package, the Threat Prevention server must be connected to the internet.
You may need to allow the following URL in the browser security settings:

- For Threat Prevention v8.1:
  [https://www.netwrix.com/go/siagent810zip](https://www.netwrix.com/go/siagent810zip)

To download the updated Agent installer:

**Step 1 –** Click **Agents** in the left pane to launch the Agents interface. Then click **Update
Agent Installer** to launch the Agent Installer Update window.

![Agent Installer Update window](/images/threatprevention/8.1/admin/agents/window/checkfornewversion.webp)

**Step 2 –** Click **Check for Newer Version of the Netwrix Threat Prevention Agent**. Threat
Prevention downloads the Agent installer from a static URL and then compares the Agent installer
in use to the installer downloaded.

![Agent Installer Update window showing that Agent Installer is up-to-date](/images/threatprevention/8.1/admin/agents/window/uptodate.webp)

- If the versions are the same, the message specifies **Agent Installer is up-to-date…** and
  displays the Agent version number. Click **Close** to close the window.

![Agent Installer Update window showing that Agent version is outdated](/images/threatprevention/8.1/admin/agents/window/agentversionmismatch.webp)

- If the downloaded version is newer, the message displays both version numbers and provides an
  option to apply the update. Click **Apply Update**.

:::note
When you replace the Agent installer with a newer version, the Agents interface highlights
every Agent version to indicate that it isn't the current version. Update those Agents to the new
version using the Upgrade Agent option on the right-click menu.

:::
