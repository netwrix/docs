---
title: "How does Endpoint Policy Manager Scripts & Triggers know when the VPN connection is made or lost?"
description: "How does Endpoint Policy Manager Scripts & Triggers know when the VPN connection is made or lost?"
sidebar_position: 120
---

# How does Endpoint Policy Manager Scripts & Triggers know when the VPN connection is made or lost?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts & Triggers VPN connection supports the
following VPN connections:

- Microsoft VPN
- OpenVPN GUI
- OpenVPN Connect
- Cisco VPN
- Fortinet VPN

## Microsoft VPN

PPScripts uses Microsoft RAS API to listen when RAS connection is created or closed. Windows sends
notification for it with server's name. PPScripts checks if this is VPN connection and lookup for
policy with VPN trigger and same server's name. If policy found, PPScripts executes corresponding
script.

## OpenVPN GUI

OpenVPN doesn't use Microsoft RAS API, but it VPN profile allow execute script for
connect/disconnect. PPScripts lookup for OpenVPN profile and modifies them. Add script for
connect/disconnect with PP utility that notifies PPScripts about OpenVPN connect/Disconnect.

## OpenVPN Connect

This version of OpenVPN doesn't allow execute scripts for connect/disconnect. PPScripts uses Windows
API to listen if new network adapter was added/removed. Then PPScripts trying to check OpenVPN logs
for this adapter name and find corresponding server's name.

## Cisco VPN

Cisco VPN provides API for their VPN. PPScripts uses this API to get notification about
connect/disconnect and server's name.

## Fortinet VPN

Fortinet doesn't provide API that notifies about connection/disconnection. But Fortinet VPN creates
virtual network adapter that matched to following mask "FortinetVirtual Ethernet Adapter"

PPScripts listens if new network adapter was added/removed, check adapter's name, and execute
corresponding script but without name of server.


