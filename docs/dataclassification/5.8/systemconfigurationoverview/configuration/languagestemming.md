---
title: "Language Stemming"
description: "Language Stemming"
sidebar_position: 80
---

# Language Stemming

Language stemming is a morphological process that converts words to their root form so that the
system treats most inflected forms as equal. For example, an English language search for the word "baby"
will also locate documents containing the word "babies".

:::note
The stemming process is highly language specific and so one word may stem differently in different languages.
:::

Netwrix Data Classification supports most common languages and detects the language for
each document. However, when you build an index for documents in multiple languages, it is
normally important to use the same stemmer for all documents. Otherwise, a search across the
collection may be compromised when some words from the query are stemmed differently in different
languages.

If you filter all searches by language, it may make sense to use a different stemmer for each
language. However, in this case, building a separate index for each language is preferable to combining
all languages in a single index.

Automatic language detection is important during the indexing process so that the product uses the
correct stoplist when extracting terms and concepts. Excluding words in the stoplist can
significantly reduce the index size. More importantly, the stoplists play an integral part of
the concept identification process.

Select the stemmer based on the dominant language for a given index. The default stemmer
is English, but you can configure it via the "StemLang" field in the "Config" table in the SQL
Database.

Netwrix Data Classification uses the stemming algorithms published as part of the Snowball project
(see [http://snowball.tartarus.org](http://snowball.tartarus.org/) for details).

## Supported Characters

By default, the NDC database indexes words containing the following characters:

- "a–z"
- "A–Z"
- "0–9"
- "’" (single apostrophe)
- "@"
- "#"
- "$"
- "%"
- "&"

- "-" (hyphen)
- "="
- "\_" (underscore)

To stop indexing of these characters, remove the relevant entries from the
CustomTermCharacters table:

- "@"

- "#"
- "$"
- "%"
- "&"
- "-" (hyphen)
- "="
- "\_" (underscore)

You can include any of the following characters in the list of indexed characters by adding them to
the CustomTermCharacters table:

- "("
- ")"
- "+"
- "/"
- "`<`"
- "`>`"
- "["
- "\"
- "]"
- "^"
- "`{`"
- "|"
- "`}`"
- "`<`"
- "~"

The product maps all other characters to spaces.

The product always indexes words containing characters from the CustomTermCharacters table both
with and without these characters.

Therefore, a search for:

**"fleur de lys"**

will always match with a document containing:

**"fleur-de-lys"**

but not vice versa.

The product doesn't index documents containing text in other alphabets correctly. In general, documents in
other alphabets tend to produce ‘noise’ in the index that is largely ignored since the vast majority
of indexed terms never match with a query.

## Supported for Diacritics (accented characters)

Netwrix Data Classification provides full support for diacritics (aka accented characters) such as:
"á", "â", "ä", "æ" and "ç".

In all cases the product maps accented characters to their closest standard letter, and searches
are always insensitive to diacritics, so that a search for:

**"fitchée"**

will match with:

**"fitchee"**

and vice versa.

:::note
This mapping of diacritics is transparent to the end user, and all displayed data always contains the original character formats. Therefore, all document summaries, extracts, and related topics always appear with diacritics if the original documents contained them.
:::

In addition, all stopword processing is based on the extended ASCII character set, and so stopwords
for different languages are always held with appropriate diacritics.

## Fuzzy Matching Options

It can be useful to search for concepts using a degree of fuzzy matching so that words match
even if the query or documents contain typing errors or variant spelling.

In general, fuzzy matching improves recall but at the expense of precision. In other words, more
documents should be located but some of these may not be relevant to the query. Netwrix Data
Classification offers several options for fuzzy matching so that an application can balance the
needs of precision and recall.

### Fuzzy Stemming

The stemming algorithms can optionally include a degree of fuzzy matching based on removal of
duplicated consonants. The advantage of this technique is that is improves recall without any loss
of precision since duplicated consonants are largely redundant in word matching. Enabling this
option (set StemmingMode=1 in the Config table) causes the following words to match:

**accelerate with**

- accellerate
- acelerate
- acceleration
- accellerator
- acellerates
- etc
