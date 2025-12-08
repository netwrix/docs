---
description: >-
  Step-by-step instructions to move an on-premises Netwrix Auditor installation
  to a VM hosted by a cloud service provider, including preparation, migration,
  licensing, and network considerations.
keywords:
  - Netwrix Auditor
  - migration
  - cloud
  - VM
  - server migration
  - ports
  - license
  - requirements
products:
  - auditor
sidebar_label: How to Move Netwrix Auditor to the Cloud?
tags: []
title: "How to Move Netwrix Auditor to the Cloud?"
knowledge_article_id: kA04u000001116lCAA
---

# How to Move Netwrix Auditor to the Cloud?

## Question

How to move an on-premises Netwrix Auditor installation to a VM running on a cloud service provider?

## Answer

Consider it to simply be an installation on another network. Netwrix recommends the following scenario:

1. Spin up a new Windows Server VM in your cloud environment, provision it based on the Auditor Requirements: [Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/overview)

2. After that, migrate your old instance according to the following article: Migrating Netwrix Auditor to New Server: [Migrating Auditor to New Server](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/migrating-auditor-to-new-server).

   > **NOTE:** When you go to migrate, both the old and new instances of Netwrix Auditor must be exactly the same version and build. In Netwrix Auditor, navigate to **Settings** -> **About Netwrix Auditor** and check the build number.

3. Make sure you applied the license. You will need a license for Netwrix Auditor no matter where it is used.

If you are using an internal file server, make sure Netwrix Auditor is able to access it across the internet or a VPN if you have a tunnel set up. For additional information on required protocols and ports that must be opened, refer to the following article: [Protocols and Ports](https://docs.netwrix.com/docs/auditor/10_8/requirements/ports)
