---
title: "Language Stemming"
description: "Language Stemming"
sidebar_position: 80
---

# Language Stemming

Language stemming is a morphological process that converts words to their root form so that most
inflected forms are considered equal. For example, an English language search for the word “baby”
will also locate documents containing the word “babies”.

The stemming process is highly language-specific, so one word may stem differently in
different languages.

Netwrix Data Classification supports most common languages and automatically detects the language for
each document. When building an index for documents in multiple languages, use the same stemmer for all documents.
Otherwise, searches across the collection may be compromised if query words stem differently in different
languages.

If you filter all searches by language, you might use a different stemmer for each
language. However, it's better to build a separate index for each language
than combining all languages in a single index.

Automatic language detection during indexing is important because it ensures the
correct stoplist is used when extracting terms and concepts. Excluding stoplist words significantly
reduces index size and improves concept identification.

Select the stemmer based on the dominant language for a given index. The default stemmer
is English, but you can configure it via the “StemLang” field in the “Config” table in the SQL
database.

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

Stop indexing these characters by removing the relevant entries from the
CustomTermCharacters table:

- “@”

- “#”
- “$”
- “%”
- “&”
- “-” (hyphen)
- “=”
- “_” (underscore)

Add any of the following characters to the CustomTermCharacters table to include them in the list of indexed characters:

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

This mapping of diacritics is transparent to the end user, and all data displayed will
always contain the original character formats. Therefore, all document summaries, extracts, and
related topics will always be displayed with diacritics if the original documents contained them.

In addition, all stopword processing is based on the extended ASCII character set and so stopwords
for different languages are always held with appropriate diacritics.

## Fuzzy Matching Options

Fuzzy matching lets you search for concepts even if the query or documents contain typing errors or variant spelling.

Fuzzy matching improves recall at the expense of precision. More documents are located,
but some may not be relevant to the query. Netwrix Data Classification offers several fuzzy matching options
to balance precision and recall needs.

### Fuzzy Stemming

Stemming algorithms can optionally include fuzzy matching based on removing
duplicated consonants. This technique improves recall without losing
precision because duplicated consonants are largely redundant in word matching. Enable this
option (set StemmingMode=1 in the Config table) to match the following words:

accelerate with

- accellerate
- acelerate
- acceleration
- accellerator
- acellerates
- etc
