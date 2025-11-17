---
description: >-
  Explains whether Netwrix Password Reset can limit reports to users with Fine
  Grained Policy settings and provides a workaround using two Managed Objects.
keywords:
  - Fine Grained Policy
  - account expiration
  - Managed Objects
  - Netwrix Password Reset
  - password expiration
  - FGPP
  - Active Directory
products:
  - auditor
sidebar_label: Fine Grained Policy and account expiration
tags: []
title: "Fine Grained Policy and account expiration"
knowledge_article_id: kA00g000000H9TdCAK
---

# Fine Grained Policy and account expiration

Can Netwrix Password Reset only report on users with the Fine Grained Policy settings enabled if you need to monitor account expiration as well?

No — this feature is not available in the current product version. You can use the following workaround:

1. Create a Managed Object to monitor the Fine Grained Policy users.
2. Create a separate Managed Object to monitor account expiration.
