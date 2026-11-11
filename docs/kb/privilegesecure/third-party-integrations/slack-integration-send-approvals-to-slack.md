---
description: "Set up an approval workflow so a Slack channel receives approval notifications from Privilege Secure, using the channel's email address."
keywords:
  - Slack
  - approval workflow
  - Netwrix Privilege Secure
  - approvals
  - channel email
  - integrations
  - local user
  - Users and Groups
products:
  - privilegesecure
sidebar_label: Sending Approvals to Slack
tags:
  - kb
  - third-party-integrations
title: "Sending Approvals to Slack"
knowledge_article_id: kA0Qk0000000JsHKAU
---

# Sending Approvals to Slack

## Overview

This article describes how to set up an Approval workflow in Netwrix Privilege Secure for Access Management in which a Slack channel receives an approval notification.

## Instructions

1. In Slack, inspect the channel you want to message. The **Integrations** pane has a **Send emails to this channel** setting. Copy the email address.

2. In Privilege Secure, go to the **Users and Groups** page. Click **Add** and create a new **Local user**.

   > **NOTE:** This user does not need to log in to Privilege Secure.

   ![Users and Groups page with Add selected to create a Local user](./../0-images/ka0Qk0000000zeb_0EMQk000001oz7l.png)

3. Set the local user's email address to the Slack channel's email address from step 1:

   ![Local user email address field set to the Slack channel email address](./../0-images/ka0Qk0000000zeb_0EMQk000001ozUL.png)

4. You can now add this local account as an additional approver in any approval workflow. It is not used for approvals, but its email address value allows the configured Slack channel to receive approval messages.
