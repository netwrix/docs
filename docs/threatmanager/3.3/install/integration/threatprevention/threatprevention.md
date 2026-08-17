---
title: "Netwrix Threat Prevention Integration"
description: "Netwrix Threat Prevention Integration"
sidebar_position: 20
---

# Netwrix Threat Prevention Integration

You can configure Threat Prevention v6.0+ to send Active Directory data to Threat Manager. To do
this, generate an App Token in Threat Manager and then use that app token when configuring the
Threat Manager Event Sink in Threat Prevention. See the
[Threat Prevention documentation](https://helpcenter.netwrix.com/category/threatprevention) for
additional information.

:::note
Threat Prevention v6.0 or later and Threat Manager v2.0 or later introduced integration
between the two products.
:::


The Threat Manager DC Sync threat comes from a Threat Prevention AD Replication Monitoring
policy. Configure the policy to exclude domain controllers on the Host (From) filter.

Threat Prevention v7.2+ supports sending events to Threat Manager using Protobuf, which allows
for higher performance event delivery to Threat Manager.
