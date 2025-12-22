---
description: >-
  Describes how to configure stopwords used by Netwrix Data Classification and
  explains the two stoplist tables in the NDC SQL Database.
keywords:
  - stopwords
  - stoplists
  - StoplistsExpand
  - NDC SQL Database
  - Netwrix Data Classification
  - indexing
  - diacritics
  - SQL editor
  - Query Analyser
products:
  - data-classification
sidebar_label: How to configure stopwords
tags:
  - system-administration
title: "How to configure stopwords"
knowledge_article_id: kA04u000000Pd4WCAS
---

# How to configure stopwords

Netwrix Data Classification provides a pair of stoplists for each of the supported languages.

These stoplists are contained in two tables in the NDC SQL Database:

- Stoplists
- StoplistsExpand

The first table contains a list of very common words (such as: “and”, “it” and “the” in English) that contribute very little to the searching process. These words are completely removed from the index reducing its size significantly.

The second table contains fewer common words that need to be included in the index but is excluded from compound (i.e. multi-word) terms. This list typically includes common prepositions, conjunctions, and adverbs for each of the supported languages.

The stoplists may be edited to suit particular application requirements with words being added or removed from either list. In general, a word removed from the Stoplist table should be moved into the StoplistExpand table.

Note that all terms in these tables have a field that associates them with a particular language. Also, all stopwords should be entered with appropriate diacritics since all stopword processing is based on the extended ASCII character set.

Currently, entries in the Stoplists tables must be managed directly using an appropriate SQL editor such as Microsoft’s Query Analyser. A future version of Netwrix Data Classification will provide a graphical front-end utility to manage all system configuration settings.
