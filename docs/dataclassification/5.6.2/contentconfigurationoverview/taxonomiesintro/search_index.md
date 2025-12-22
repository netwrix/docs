---
title: "Search Index"
description: "Search Index"
sidebar_position: 90
---

# Search Index

Netwrix Data Classification uses two mathematical principles to achieve its results:

- Bayesian inference
- Shannon’s information theory

Bayesian inference is used to determine the weightings to be applied to individual words in the
query so that the words that are most useful in identifying the required concepts receive the
highest weightings. Initially, these weightings are based on the relative frequency of query terms
as distributed across the entire index. Where relevance feedback information is available then these
weightings are adjusted to tune the behaviour in favour of documents that are known to be relevant.

Shannon’s information theory is necessary when identifying concepts because the order in which words
appear has a great effect on meaning.

Nevertheless, the vast majority of retrieval systems available today would regard a document
containing all words from a user’s query to be 100% relevant – especially if all of the words are in
close proximity. However, this is much too simplistic an approach for effective concept
identification. For example, just because a sentence contains the words “money” and “order” does not
necessarily mean that the topic is about “money orders”.

Shannon’s information theory states that the more frequently a sequence appears the less
information, or entropy, it contains. Netwrix Data Classification uses this model to compute the
incremental value of compound terms over their lower order components. In this way we are able to
identify the word sequences that convey the most meaning and adjust the standard weightings
accordingly.
