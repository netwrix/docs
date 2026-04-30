---
title: "Netwrix Threat Prevention Integration"
description: "Netwrix Threat Prevention Integration"
sidebar_position: 20
---

# Netwrix Threat Prevention Integration

Threat Prevention v6.0+ can be configured to send Active Directory data to Threat Manager. This is
done by generating an App Token in Threat Manager and then using that app token when configuring the
Threat Manager Event Sink in Threat Prevention. See the
[Threat Prevention documentation](https://helpcenter.netwrix.com/category/threatprevention) for
additional information.

:::note
Integration between Threat Prevention and Threat Manager was introduced with the release
of Threat Prevention v6.0 or later and Threat Manager v2.0 or later.
:::


The Threat Manager DC Sync threat is sourced by a Threat Prevention AD Replication Monitoring
policy. It is necessary for the policy to be configured to exclude domain controllers on the Host
(From) filter.

Threat Prevention v7.2+ supports sending events to Threat Manager utilizing Protobuf, which allows
for higher performance event delivery to Threat Manager.
