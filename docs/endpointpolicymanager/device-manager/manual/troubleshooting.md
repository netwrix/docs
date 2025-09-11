---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 60
---

# Troubleshooting

Logging occurs on the endpoint. Use the Event Log first to look for events.

![trouble2](assets/devicemanager/trouble2.webp)

In addition, you can use Endpoint Policy Manager's text based logs.

You will need admin access to see `c:\ProgramData\PolicyPak\PolicyPak` Device Manager logs.

Each log occurs when different policy triggering events occur. Special log is
ppComputer_Operational.log which explains what's happening in real-time on the machine.

![logging1](assets/devicemanager/logging1.webp)
