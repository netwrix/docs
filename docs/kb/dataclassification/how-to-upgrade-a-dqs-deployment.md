---
description: >-
  Describes prerequisites and step-by-step instructions to upgrade a DQS
  deployment (NDC cluster), including preparing installation media, account
  requirements, backups, and verifying the upgrade via the NDC dashboard.
keywords:
  - DQS
  - NDC
  - upgrade
  - cluster
  - conceptQS
  - conceptcollector
  - snapshot
  - SQL database
products:
  - data-classification
sidebar_label: How to Upgrade a DQS Deployment
tags: []
title: "How to Upgrade a DQS Deployment"
knowledge_article_id: kA00g000000PbcmCAC
---

# How to Upgrade a DQS Deployment

**Before upgrading a DQS it is important to have a few things in place.**

1. Make sure that the installation media is copied to each individual node in the cluster ahead of time, this will speed up the process.
2. Ensure that you are using an account that is a local admin on each server in the cluster, using the NDC service account is preferred.
3. Ensure that you take a snapshot of each node in the cluster and backup the NDC SQL database, this will provide a backup in case the upgrade runs into issues. Also, it is best practice to upgrade clients sequentially by version number (ie: 5.5.1 > 5.5.2 > 5.5.3).

## Steps to Upgrade

1. Stop all three NDC services on each node in the cluster (`conceptcollector`, `conceptindexer`, `conceptclassifier`)
2. On the primary node (the original NDC server, also referred to as DQS1), run the installer for the new version as an administrator. Select **Next** on each prompt until the installer completes.
3. To ensure that the upgrade was a success, open a browser and navigate to the NDC dashboard which is found here by default: (`http://localhost/conceptQS`). Ensure that the version and build correspond to the version that you were attempting to upgrade to, if that is the case then you have successfully upgraded the server.
4. Repeat steps 2 and 3 for all subsequent nodes in the cluster, upgrading one server at a time and confirming that the upgrade was a success via the browser.
5. Once all nodes in the cluster are showing the same version, you have completed the upgrade successfully.
