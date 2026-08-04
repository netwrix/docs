---
description: >-
  Shows how to exclude or edit lines from process output tracking on agentless
  devices using the ExcludeMatchesWithComment login script directive, so that
  always-changing values such as uptime do not generate change events.
keywords:
  - exclude
  - process output
  - agentless
  - Netwrix Change Tracker
  - login script
  - ExcludeMatchesWithComment
  - exclusions
  - uptime
products:
  - changetracker
knowledge_article_id: kA04u0000000JdjCAE
sidebar_label: Excluding Information from Process Output Tracking (Agentless)
tags: [kb, configuration-and-setup]
title: Excluding or Editing Information from Process Output Tracking (Agentless)
---

# Excluding or Editing Information from Process Output Tracking (Agentless)

## Overview

This article shows how to exclude or edit lines from process output tracking on agentless devices.

Process output trackers on agentless devices can generate change events for values that always change between polls, such as system uptime or the current time source. Use the `ExcludeMatchesWithComment` login script directive to exclude or relabel these lines so they do not generate unwanted change events.

> **NOTE:** This only changes what Netwrix Change Tracker records. It does not change the information on the monitored device itself.

## Instructions

1. Go to **Settings**.
2. On the sidebar, select **Credentials**.
3. Select the credential set used by the device, then select **Edit**.
4. In the login script, add the following line above any existing directives:

   ```text
   ExcludeMatchesWithComment,<replacement-comment>,<match-text>
   ```

   - `<replacement-comment>` — the text to display in place of the matched line.
   - `<match-text>` — a regular expression matching the line you want to exclude or relabel. The first few words of the line are usually enough.

5. Select **Update**, then start the process output tracker from the device's **Devices** screen.

After the tracker runs, the matched line appears as `<replacement-comment>` in the tracked output instead of its original text, and no longer generates a change event on subsequent polls unless the replacement text itself changes.

> **NOTE:** Add multiple `ExcludeMatchesWithComment` lines to the login script to exclude more than one line from the tracked output. For an example of this directive used in a device's login script, see [Adding a Palo Alto Device as a Proxied Device](./add-palo-alto-proxied-device.md).
