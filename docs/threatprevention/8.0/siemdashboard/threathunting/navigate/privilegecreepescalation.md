---
title: "Privilege Creep/Escalation"
description: "Privilege Creep/Escalation"
sidebar_position: 30
---

# Privilege Creep/Escalation

The Privilege Creep/Escalation option uses the Account Name field to determine which user is
targeted when searching for threats. Wildcard characters (%) are allowed.

The Privilege Creep/Escalation option contains the following cards:

![privilegecreep](/images/threatprevention/8.0/siemdashboard/splunk/threathunting/dashboard/privilegecreep.webp)

- Last Twenty Successful Group Modification Events (Member) – Shows the details of the last twenty
  successful group modification events where the Account Name matches the Affected Object, as
  recorded in the specified timeframe
- Last Twenty Successful Group Modification Events (Perpetrator) – Shows the details of the last
  twenty successful group modification events where the Account Name matches the Perpetrator, as
  recorded in the specified timeframe

The specified timeframe is set by default to _All Time_.
