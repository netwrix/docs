---
title: "Web Service Security"
description: "Web Service Security"
sidebar_position: 40
---

# Web Service Security

Web Service Security can be used to restrict external access to the Netwrix Data Classification
APIs, we recommend when using this functionality that you list the Netwrix Data Classification
service account under the Allow Only Listed records. When Block All is selected certain
functionality within Netwrix Data Classification will be impacted (if there is API use).

Certain methods must be individually enabled for security reasons, such as GetSourceItemContent
which allows you to retrieve the binary content of a crawled item.

There are three modes available:

- Allow All—No restrictions, all users have access to the APIs
- Block All—No API use supported
- Allow Only Listed—Blocks all API use except for those users (or groups) listed

Each mode is assigned to a specific grouping of service methods, you can see which API functions are
affected by clicking the “View Methods” link and edit the security mode by clicking the Edit link.

![webservicesecurity_thumb_0_0](/images/dataclassification/5.7/security/webservicesecurity_thumb_0_0.webp)
