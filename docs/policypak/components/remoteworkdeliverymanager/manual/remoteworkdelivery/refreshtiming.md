---
title: "Understanding Refresh Timing"
description: "Understanding Refresh Timing"
sidebar_position: 30
---

# Understanding Refresh Timing

You might wonder when PolicyPak Remote Work Delivery Manager will attempt to reprocess
and then redownload files. When using the Group Policy method, PolicyPak follows the
standards of Group Policy: at logon, and in the background every 90–120 minutes. If there are new
policies, they are downloaded and applied after that. When using PolicyPak Cloud,
clients check in for new policies every 60 minutes, and this is configurable within PolicyPak Cloud per computer group.


