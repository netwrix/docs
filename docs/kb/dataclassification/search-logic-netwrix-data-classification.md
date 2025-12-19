---
description: >-
  How to restrict search results by using keywords, phrases, and operators in
  Netwrix Data Classification. Explains required and excluded term syntax and
  spacing rules, including Compound Term Processing behavior.
keywords:
  - search
  - keywords
  - compound term processing
  - operators
  - required terms
  - excluded terms
  - Netwrix Data Classification
products:
  - data-classification
sidebar_label: Search Logic - Netwrix Data Classification
tags: []
title: "Search Logic - Netwrix Data Classification"
knowledge_article_id: kA04u000000XmDXCA0
---

# Searching

Restrict the search results by the specified keywords or phrases. When Compound Term Processing is enabled, enclosing multiple words in double quotes (") will perform a search for that phrase.

---

## Required Terms

The plus operator may be used to mark individual words and concepts as mandatory. For example:

`tennis +Wimbledon`

This example will search for the words “tennis” and “Wimbledon” but all documents returned would need to contain the second word. Quotation marks may be used to identify a mandatory concept. For example:

`tennis +"Wimbledon Championships"`

Here the concept “Wimbledon Championships” would be required in every document returned. When using the plus operator, there must be no spaces between the plus sign and the mandatory word (or concept). In the below example the plus sign is ignored.

`tennis +Wimbledon`

## Excluded Terms

The minus operator may be used to mark individual words or concepts as excluded. For example:

`tennis -Wimbledon`

This example will search for the word “tennis”, but will exclude any document containing the word “Wimbledon”. Quotation marks may be used to identify an excluded concept. For example:

`tennis -"Wimbledon Championships"`

This example will search for the word “tennis”, but will exclude any document containing the concept “Wimbledon Championships”. When using the minus operator, there must be no spaces between the minus sign and the excluded word (or concept). In the below example the minus sign is ignored, because it is followed by a space.

`tennis - Wimbledon`

When using the minus operator, there must be a space preceding the minus sign (unless it is at the start of a new line). In the below example the minus sign is ignored, because it is not preceded by a space.

`Wimbledon-fortnight`
