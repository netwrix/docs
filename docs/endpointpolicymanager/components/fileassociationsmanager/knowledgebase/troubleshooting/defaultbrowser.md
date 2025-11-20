---
title: "Can I use Endpoint Policy ManagerBrowser Router and/or Endpoint Policy Manager File Associations Manager to set the default browser?"
description: "Can I use Endpoint Policy ManagerBrowser Router and/or Endpoint Policy Manager File Associations Manager to set the default browser?"
sidebar_position: 10
---

# Can I use Endpoint Policy ManagerBrowser Router and/or Endpoint Policy Manager File Associations Manager to set the default browser?

Since File Associations Manager handles protocol associations as well as file type associations, it
may be tempting to map http or https to a particular browser as a way of enforcing a default
browser. That will work until Browser Router has any rules at all in that component, and then
Browser Router takes over. If you want to set a default browser, use Browser Router instead of File
Associations Manager.


