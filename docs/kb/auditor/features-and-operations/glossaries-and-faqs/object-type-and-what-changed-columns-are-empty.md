---
description: >-
  Explains why the "Object type" and "What Changed" columns can be empty in
  reports when the Remote Registry service on the target server is disabled or
  unreachable, and how to check service accessibility from the Netwrix host.
keywords:
  - Object type
  - What Changed
  - Remote Registry
  - event collector
  - Netwrix Auditor
  - report columns
  - disabled service
  - target server
products:
  - auditor
sidebar_label: Object type" and "What Changed" columns are empty
tags: []
title: Object type" and "What Changed" columns are empty
knowledge_article_id: kA00g000000H9ZpCAK
---

# Object type" and "What Changed" columns are empty

![User-added]./../0-images/servlet_image_3823966b1661.png)

---

This is a typical report from a target server with a disabled/unavailable Remote Registry service. In that case event collector tries to work with another API and sometimes all events are interpreted as "read" with "Object path" missing.

---

Check if Remote Registry service is running on the target server and is accessible from Netwrix host machine.

