---
title: "Why would it sometimes takes two logoffs and logons to see Start Screen or Taskbar changes?"
description: "Why would it sometimes takes two logoffs and logons to see Start Screen or Taskbar changes?"
sidebar_position: 130
---

# Why would it sometimes takes two logoffs and logons to see Start Screen or Taskbar changes?

To answer this, there are two scenarios.

Scenario 1:

- The user has no profile at all.
- GPOs apply SYNCHRONOUSLY but Explorer doesn't get the signal about Netwrix Endpoint Policy Manager
  (formerly PolicyPak) Start Screen & Taskbar.
- This means you typically need another log off and back on to see the "now written, but not yet
  seen" Start Screen & Taskbar.

Scenario 2:

- The user has a profile, but he is logged off.
- Then the Admin makes some change to Start Menu.
- When the User logs on, because policies are applied asynchronously, the end-user missed the chance
  to apply those to Explorer. So, you see the result at the next logon because the Start Screen &
  Taskbar policies are "now written, but not yet seen."


