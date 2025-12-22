---
title: "Language Stemming"
description: "Language Stemming"
sidebar_position: 80
---

# Language Stemming

Language stemming is a morphological process that converts words to their root form so that most
inflected forms are considered equal. For example, an English language search for the word “baby”
will also locate documents containing the word “babies”.

Note that the stemming process is highly language specific and so one word may stem differently in
different languages.

Netwrix Data Classification has support for most common languages and will detect the language for
each document. However, when an index is to be built for documents in multiple languages it is
normally important that the same stemmer be used for all documents. Otherwise, a search across the
collection may be compromised when some words from the query are stemmed differently in different
languages.

If all searches are filtered by language then it may make sense to use a different stemmer for each
language. However, in this case we would recommend building a separate index for each language
rather than combining all languages in a single index.

The reason that automatic language detection is important during the indexing process is so that the
correct stoplist is used when extracting terms and concepts. By excluding words in the stoplist the
index size can be significantly reduced. More importantly, the stoplists play an integral part of
the concept identification process.

The stemmer should be selected based on the dominant language for a given index. The default stemmer
is English but this may be configured via the “StemLang” field in the “Config” table in the SQL
Database.

Netwrix Data Classification uses the stemming algorithms published as part of the Snowball project
(see [http://snowball.tartarus.org](http://snowball.tartarus.org/) for details).

## Supported Characters

By default, the NDC database will index words containing the following characters:

- “a–z”
- “A–Z”
- “0–9”
- “’” (single apostrophe)
- “@”
- “#”
- “$”
- “%”
- “&”

- “-” (hyphen)
- “=”
- “_” (underscore)

Indexing of these characters can be stopped by removing the relevant entries from the
CustomTermCharacters table:

- “@”

- “#”
- “$”
- “%”
- “&”
- “-” (hyphen)
- “=”
- “_” (underscore)

Any of the following characters can be included in the list of indexed characters by adding them to
the CustomTermCharacters table:

- “(”
- “)”
- “+”
- “/”
- `"<"`
- `">"`
- “[”
- `"\\"`
- “]”
- “^”
- `"{"`
- “|”
- `"}"`
- `"<"`
- “~”

All other characters are mapped to spaces.

Words containing characters in the CustomTermCharacters table are always index with, and also
without, these characters.

Therefore, a search for:

“fleur de lys”

will always match with a document containing:

“fleur-de-lys”

but not vice versa.

Documents containing text in other alphabets will not be indexed correctly. In general, documents in
other alphabets tend to produce ‘noise’ in the index that is largely ignored since the vast majority
of indexed terms never match with a query.

## Supported for Diacritics (accented characters)

conceptSearching does provide full support for diacritics (aka accented characters) such as: “á”,
“â”, “ä”, “æ” and “ç”.

In all cases the accented characters are mapped to their closest standard letter and searches are
always insensitive to diacritics, so that a search for:

“fitchée”

will match with:

“fitchee”

and vice versa.

Note that this mapping of diacritics is transparent to the end user and all data displayed will
always contain the original characters formats. Therefore, all document summaries, extracts and
related topics will always be displayed with diacritics if the original documents contained them.

In addition, all stopword processing is based on the extended ASCII character set and so stopwords
for different languages are always held with appropriate diacritics.

## Fuzzy Matching Options

It can be useful to search for concepts using a degree of fuzzy matching so that words may be
matched even if the query or documents contain typing errors or variant spelling.

In general, fuzzy matching improves recall but at the expense of precision. In other words, more
documents should be located but some of these may not be relevant to the query. ConceptSearching
offers several options for fuzzy matching so that an application can balance the needs of precision
and recall.

### Fuzzy Stemming

Our stemming algorithms can optionally include a degree of fuzzy matching based on removal of
duplicated consonants. The advantage of this technique is that is improves recall without any loss
of precision since duplicated consonants are largely redundant in word matching. Enabling this
option (set StemmingMode=1 in the Config table) will cause the following words to match:

accelerate with

- accellerate
- acelerate
- acceleration
- accellerator
- acellerates
- etc
