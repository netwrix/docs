---
title: "AD Users Tab"
description: "AD Users Tab"
sidebar_position: 30
---

# AD Users Tab

Use the AD Users tab to customize Active Directory service queries and caching behavior.

![AD Users Tab](/images/activitymonitor/8.0/admin/agents/properties/aduserstab.webp)

The configurable options are:

- Domain Controllers (IPs and FQDNs) – IP addresses or FQDN of domain controllers. IP addresses or
  FQDN should be entered as separate addresses with space, comma (,), semicolon (;), or a multi-line
  list. Leave the box blank to use the default domain controller.
- Lookup timeout – Specify the time for look-up timeout in milliseconds. The default is 2000
  milliseconds. If a query fails to complete in the specified interval then the product reports an
  empty username or a previous result from the cache. The product continues to wait for a response
  in the background so that further events can use the resolution result.
- Cache TTL for successful results –Specify the caching interval (time-to-live) for successful AD
  responses.The default is 10 hours. When an AD query returns a valid username or SID, the response
  is cached for the specified time. It is recommended to use large TTL values as the user
  information does not often change.
- Cache TTL for failed results – Specify the caching interval (time-to-live) for failed AD
  responses. The default is 1 minute. When an AD query cannot resolve a SID or username, the failed
  result is cached for the specified time. Caching of failed responses helps to reduce the load on
  domain controllers and improve performance of event processing. Short TTL values are recommended
  to make the product report accurate user information.
- Maximum cache size – Specify the maximum cache size for both successful and failed responses. The
  default is 300000.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The Agent
Properties window closes.
