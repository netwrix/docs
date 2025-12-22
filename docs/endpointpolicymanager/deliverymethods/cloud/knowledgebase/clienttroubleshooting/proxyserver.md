---
title: "How must my Proxy Server be configured to allow Endpoint Policy Manager Cloud communication?"
description: "How must my Proxy Server be configured to allow Endpoint Policy Manager Cloud communication?"
sidebar_position: 50
---

# How must my Proxy Server be configured to allow Endpoint Policy Manager Cloud communication?

The Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud client communication is always
encrypted end to end. Endpoint Policy Manager cloud will try on port 443 or 80 as necessary. If you
need to configure your Proxy Server to allow communication to specific hosts, you need to set the
following:

- cloud-agent.policypak.com via HTTPS/443
- cloud-events.policypak.com via HTTPS/443
- ppdl.blob.core.windows.net via HTTPS/443


