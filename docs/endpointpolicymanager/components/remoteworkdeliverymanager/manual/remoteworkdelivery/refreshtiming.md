---
title: "Understanding Refresh Timing"
description: "Understanding Refresh Timing"
sidebar_position: 30
---

# Understanding Refresh Timing

You might wonder when Endpoint Policy Manager Remote Work Delivery Manager will attempt to reprocess
and then redownload files. When using the Group Policy method, Endpoint Policy Manager follows the
standards of Group Policy: at logon, and in the background every 90–120 minutes. If there are new
policies, they are downloaded and applied after that. When using Endpoint Policy Manager Cloud,
clients check in for new policies every 60 minutes, and this is configurable within Endpoint Policy
Manager Cloud per computer group.


