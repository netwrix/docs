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
  - dataclassification
sidebar_label: Configuring Stopwords
tags:
  - system-administration
  - kb
title: "Configuring Stopwords"
knowledge_article_id: kA04u000000Pd4WCAS
---

# Configuring Stopwords

## Overview

Netwrix Data Classification provides a pair of stoplists for each of the supported languages. These stoplists are contained in two tables in the Netwrix Data Classification SQL database:

- `Stoplists` — contains very common words (such as “and”, “it”, and “the” in English) that contribute very little to the searching process. These words are completely removed from the index, reducing its size significantly.
- `StoplistsExpand` — contains less common words that the index includes as individual terms but excludes from compound (multi-word) terms. This list typically includes common prepositions, conjunctions, and adverbs for each of the supported languages.

> **NOTE:** All terms in these tables have a field that associates them with a particular language. Enter all stopwords with appropriate diacritics — all stopword processing is based on the extended ASCII character set.

## Instructions

To edit the stoplists for particular application requirements:

1. Connect to the Netwrix Data Classification SQL database using a SQL editor (e.g., Microsoft Query Analyzer).
2. Add or remove entries in the appropriate table (`Stoplists` or `StoplistsExpand`) with the correct language association.
3. When removing a word from the `Stoplists` table, add it to the `StoplistsExpand` table instead.

A future version of Netwrix Data Classification will provide a graphical front-end utility to manage all system configuration settings.
