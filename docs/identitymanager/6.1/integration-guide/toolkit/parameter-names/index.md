---
title: "Base32 Parameter Names"
description: "Base32 Parameter Names"
sidebar_position: 70
---

# Base32 Parameter Names

## Base32 Parameter Names

Some attributes names in the applicative configuration, such a those related to dimensions
identification, are written using a
[Base32 representation of numbers](https://en.wikipedia.org/wiki/Base32).

Usercube uses flavor of base32 known as **base32hex** described in the
[RFC4648](https://tools.ietf.org/html/rfc4648#rfc4648).

It uses 10 digits from 0 to 9 and 22 letters from A to V to represent numbers.

The following table shows the decimal - base32hex equivalent for the first 127 numbers.

| base32hex | decimal |
| --------- | ------- |
| 0         | 0       |
| 1         | 1       |
| 2         | 2       |
| 3         | 3       |
| 4         | 4       |
| 5         | 5       |
| 6         | 6       |
| 7         | 7       |
| 8         | 8       |
| 9         | 9       |
| a         | 10      |
| b         | 11      |
| c         | 12      |
| d         | 13      |
| e         | 14      |
| f         | 15      |
| g         | 16      |
| h         | 17      |
| i         | 18      |
| j         | 19      |
| k         | 20      |
| l         | 21      |
| m         | 22      |
| n         | 23      |
| o         | 24      |
| p         | 25      |
| q         | 26      |
| r         | 27      |
| s         | 28      |
| t         | 29      |
| u         | 30      |
| v         | 31      |
| 10        | 32      |
| 11        | 33      |
| �         | �       |
| 1A        | 42      |
| �         | �       |
| 20        | 64      |
| �         | �       |
| 2A        | 74      |
| �         | �       |
| 3V        | 127     |

For example, dimensions are identified by a number going from 0 to 127 in decimal representation and
0 to 3V in base32hex representation.

The
[ContextRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/contextrule/index.md)
support _128_ dimension parameters going from `B0` to `B3V` using the **base32hex**`0` to `3V`
numbers to identify a dimension.
