---
description: >-
  This article provides step-by-step instructions on how to obtain a daily list of users added or removed from any Active Directory group using Netwrix Auditor.
keywords:
  - Active Directory
  - Netwrix Auditor
  - user management
sidebar_label: Daily User Changes in AD Groups
tags: []
title: "How to Get a Daily List of Users Added/Removed From Any AD Group?"
knowledge_article_id: kA04u000001116qCAA
products:
  - auditor
---

# How to Get a Daily List of Users Added/Removed From Any AD Group?

## Question

How to get the list of users added/removed from an Active Directory group on a regular basis (for example, daily)?

## Answer

Create a subscription to Netwrix search results with the following parameters:

1. **Filters**  
   ![User-added image]./../0-images/servlet_image_ebe11c05eb6f.png)  

   Windows records users adding or removing as a change to the group itself, since the group is an AD object. Therefore, the **Action** filter type is suggested to be *Modified*.

2. **Schedule**  
   Set the schedule to whatever frequency you want – the Subscription returns all events that occurred after the latest Subscription delivery. The initial one may have a lot.

For additional information on how to create subscriptions, refer to the following article: [Administration – Subscriptions](https://docs.netwrix.com/docs/auditor/10_8/admin/subscriptions/overview).