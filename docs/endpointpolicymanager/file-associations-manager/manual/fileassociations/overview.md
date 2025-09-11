---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 100
---

# Troubleshooting

The most common problem users encounter with Netwrix Endpoint Policy Manager (formerly PolicyPak)
File Associations Manager occurs during initial use when trying to make associations. Here are some
tips when trying to troubleshoot Endpoint Policy Manager File Associations Manager:

- Do not try to use Microsoft's method and Endpoint Policy Manager's method for managing file
  associations on the same Windows 10 endpoints. Only one method will win.
- If deploying policies on the computer side, then Endpoint Policy Manager File Associations Manager
  will attempt to map file associations if any user has the registered application you specify (not
  only the logged-on user at the moment)>.This is a risk if the program exists at all on the
  endpoint, but the user logging on at that moment (say on a Terminal Server/RDS machine) doesn't
  have access to that application.
