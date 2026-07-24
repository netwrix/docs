---
description: >-
  Shows how to add a Palo Alto firewall as a proxied device in Netwrix Change
  Tracker. Covers SSH credential prerequisites, prompt regex configuration, and
  the login script directives current Gen 7 agents require.
keywords:
  - Palo Alto
  - proxy agent
  - proxied device
  - SSH credentials
  - login script
  - prompt regex
  - ExecuteAndCapture
  - ExcludeMatchesWithComment
  - Netwrix Change Tracker
  - Gen 7 agent
products:
  - changetracker
knowledge_article_id: kA04u0000000JXHCA2
sidebar_label: Adding a Palo Alto Device as a Proxied Device
tags: [kb, configuration-and-setup]
title: Adding a Palo Alto Device as a Proxied Device
---

# Adding a Palo Alto Device as a Proxied Device

## Overview

This article describes how to add a Palo Alto device as a proxied device on a current Gen 7 agent, including SSH credential prerequisites, prompt regex configuration, and the login script directives it requires.

A Gen 7 agent acting as a proxy agent can monitor devices that cannot run the agent directly, such as network appliances and firewalls. A single proxy agent instance can monitor hundreds of proxied devices. Palo Alto firewalls register as proxied devices in the same way as other network appliances, but they need specific SSH prompt and login script configuration to register successfully with Netwrix Change Tracker.

## Instructions

### Step 1 — Prerequisites

Before adding the device in the console, complete the following on the Palo Alto device:

1. Set up SSH credentials with at least enough privilege to run `show system info` and `show config running`.
2. Turn off the Palo Alto confirmation prompt so its text cannot be mistaken for the device's command prompt. Add a login banner in its place if a banner is required for policy.

    > **NOTE:** If the confirmation prompt contains a character that matches the configured prompt regex (such as a bare `>`), Netwrix Change Tracker may treat it as the full prompt and end the tracking session before it captures the complete output. For more detail on prompt regex matching, refer to [Advanced Configuration](pathname:///docs/changetracker/8_2/admin/agentlessscript/advancedconfiguration/).
3. Test the credentials using an SSH client. Note the exact command prompt string, since a later step needs it. For example, in the prompt `username@localhost> show config running`, the prompt itself is `username@localhost>`.

### Step 2 — Add the Proxied Device

1. Log in to the Netwrix Change Tracker console and go to **Settings**.
2. On the left navigation, select **Agents & Devices**, locate the proxy agent to use, and click **+Add Proxied Device**.
3. Enter the following details:
   - **Name** — enter the name to display for the device in the console.
   - **IP Address** — enter the device's IP address.
   - **Device Type** — select **Network**.
   - **Groups** — select or search for the appropriate device group (for example, search "Palo Alto" for the default group).
   - **Diagnostic Mode** — select this checkbox. It surfaces additional detail if the login script needs troubleshooting.
4. Click **+New Credentials** to configure device credentials.

### Step 3 — Configure the Credentials

1. Give the credential set a name.
2. Set **Terminal Type** to **ANSI**.
3. Set **Protocol** to **SSH2**.
4. Set **New Line** to **CRLF**.
5. Enter the SSH username and password configured in the prerequisites.
6. Select **Password with Connect**.
7. Configure the prompt regex to match the device's command prompt, using the prompt string identified during prerequisite testing:
   - If the firewall places `(active)` immediately before the `>` character, use:

     ```text
     regex:\nusername@hostname(active)>
     ```

   - Otherwise, use:

     ```text
     regex:\n.+-hostname>
     ```

   Replace `username` and `hostname` with the actual credential username and device hostname.
8. Configure the **Login Script** using the directives in the next section.
9. Click **Update** to save the credential, then click **Update** again on the proxied device to save the device.

### Step 4 — Configure the Login Script

Palo Alto configurations export in XML format by default. The `set cli config-output-format set` command switches the output to `set` format, which is easier for Netwrix Change Tracker to parse.

Enter the following login script:

```text
StripCtrl,ON
ExcludeMatchesWithComment,**Uptime Line Removed**,uptime\:
ExcludeMatchesWithComment,**Current time Line Removed**,time\:
Execute,\n
Sleep,2
Execute,set cli pager off
Sleep,2
Execute,set cli config-output-format set
Sleep,2
```

Each directive does the following:

- `StripCtrl,ON` — removes control characters from the captured output.
- `ExcludeMatchesWithComment,<comment>,<match text>` — replaces any line matching `<match text>` with `<comment>` so that lines that always change (such as uptime or the current time) do not generate change events.
- `Execute,<command>` — sends a command to the device.
- `Sleep,<seconds>` — pauses the script for the specified number of seconds to let the device respond before the next directive runs.

### Alternate Login Script for Command-Capture Devices

The primary login script relies on the tracker's default behavior: it scrapes everything between matched prompts as the tracked session output. Use the alternate script below instead when you need to build the tracked output from specific command results only, by capturing each command's output explicitly into the `$$RESULTS$$` variable with `ExecuteAndCapture`, rather than the full scraped session:

```text
ExcludeMatchesWithComment,,^time.+|^uptime.+|^app-.+|^av-.+|^threat.+|^wf-.+|^url-.+|^wildfire-.+|^global-.+|^Unkn.+
Sleep,1
Execute,set cli pager off
Sleep,1
Execute,set cli config-output-format set
Sleep,1
Send,show config running
ExecuteAndCapture,$$RESULTS$$,
Sleep,1
Send,show system info
ExecuteAndCapture,$$RESULTS$$,
Sleep,1
Send,show admins all
ExecuteAndCapture,$$RESULTS$$,
```

`Send,<command>` sends a command without waiting for a prompt match, and the following `ExecuteAndCapture,$$RESULTS$$,` directive captures the command's output into the tracked result set. Repeat the `Send`/`ExecuteAndCapture` pair for each command whose output the tracker needs to capture.

> **IMPORTANT:** If you use the alternate login script, update the Palo Alto monitoring template's tracked attributes filter to match the `show config running`, `show system info`, and `show admins all` output sections it captures.
