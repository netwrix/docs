---
title: "Web Service Security"
description: "Web Service Security"
sidebar_position: 40
---

# Web Service Security

Use Web Service Security to restrict external access to the Netwrix Data Classification APIs. When you enable this functionality, you can list the Netwrix Data Classification service account under Allow Only Listed records. When you select Block All, some functionality within Netwrix Data Classification stops working (if there is API use).

Certain methods must be individually enabled for security reasons, such as GetSourceItemContent,
which lets you retrieve the binary content of a crawled item.

There are three modes available:

- Allow All—No restrictions, all users have access to the APIs
- Block All—No API use supported
- Allow Only Listed—Blocks all API use except for those users (or groups) listed

Each mode is assigned to a specific grouping of service methods. Click “View Methods” to see which API functions are affected, and click Edit to change the security mode.

![webservicesecurity_thumb_0_0](/images/dataclassification/5.7/security/webservicesecurity_thumb_0_0.webp)
