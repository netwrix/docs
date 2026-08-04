---
description: >-
  Learn how to set up URL allowlists and denylists in Netwrix Endpoint
  Protector, and how to apply them to users and computers. This article covers
  enabling Deep Packet Inspection and configuring Domain and URL lists for
  blocking or allowing uploads.
keywords:
  - URL allowlist
  - URL denylist
  - Deep Packet Inspection
  - Endpoint Protector
  - Content Aware Protection
  - Domain and URL
  - allowlist
  - denylist
  - policy exit points
  - DPI
products:
  - endpointprotector
visibility: public
sidebar_label: Set Up URL Allowlists and Denylists
tags:
  - content-aware-protection-and-dpi
  - kb
title: "Set Up URL Allowlists and Denylists"
knowledge_article_id: kA0Qk0000002B6qKAE
---

# Set Up URL Allowlists and Denylists

## Question
Is it possible to set up URL allowlists and denylists?

## Answer
Yes, this is possible. To set up URL allowlists and denylists, ensure that Deep Packet Inspection is enabled in **Device Control > Global Settings**.

For the full reference, see [Denylists and Allowlists](/docs/endpointprotector/admin/denylistsallowlists/overview).

### Setting Up a URL Denylist
The URL denylist is used to block access to specific websites. Domain and URL denylists are available only for the Content Aware Protection module.

1. In the Netwrix Endpoint Protector Console, navigate to **Denylists and Allowlists > Denylists > Domain and URL**.
2. Click **Add** to create a list of URLs to block. Set a name and description for the list, add the URLs, and click **Save**.

:::note
You can use `*` as a wildcard to match anything before or after the domain. For example, `*example*` will block access to any website with "example" in the URL. You can create or import up to 100 denylists, each with up to 50,000 web domains. See [Domain and URL](/docs/endpointprotector/admin/denylistsallowlists/denylists#domain-and-url) for the full reference.
:::

### Apply Denylist to Users/Computers
1. In the Netwrix Endpoint Protector Console, navigate to **Content Aware Protection > Content Aware Policies** and edit the policy.
2. Ensure that the web browsers used by users are included in the **Policy Exit Points**.
3. Scroll to the policy denylists, click the **Domain and URL** tab, select the checkbox next to the denylist you want to use, and click **Save**.

### Setting Up a URL Allowlist
The URL allowlist is used to allow uploads to specific websites.

1. In the Netwrix Endpoint Protector Console, navigate to **Denylists and Allowlists > Allowlist > Deep Packet Inspection**.
2. Click **Add** to create a list of URLs to allow uploads. Set a name and description for the list, add the URLs, and click **Save**.

:::note
You can use `*` as a wildcard to match anything before or after the domain. For example, `*example*` allows uploads to any website with "example" in the URL. The `?` character can't be used as a wildcard. You can create or import up to 100 allowlists, each with up to 50,000 web domains. See [Deep Packet Inspection](/docs/endpointprotector/admin/denylistsallowlists/allowlists#deep-packet-inspection) for the full reference, including a wildcard matching examples table.
:::

:::tip
For Gmail specifically, also allow **mail.google.com** to permit e-mail attachments added by drag and drop, and **doc.google.com** to permit images added to the e-mail body.
:::

### Apply Allowlist to Users/Computers
1. In the Netwrix Endpoint Protector Console, navigate to **Content Aware Protection > Content Aware Policies** and edit the policy.
2. Ensure that the web browsers used by users are included in the **Policy Exit Points**.
3. Scroll to the policy allowlists, click the **Deep Packet Inspection** tab, select the checkbox next to the allowlist you want to use, and click **Save**.
