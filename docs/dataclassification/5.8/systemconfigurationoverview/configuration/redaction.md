---
title: "Redaction"
description: "Redaction"
sidebar_position: 40
---

# Redaction

This topic contains information on configuring redaction plans and entities.

## Redaction Plans

You can use redaction plans as an optional migration step to remove specific entities from supported
content types. During the migration of a document, a migration plan removes the following entity
types (depending on the configuration):

- NLP Entities—Items that the NLP entity extraction identifies, such as names or locations. NLP stands
  for Natural Language Processing, which is a subfield of artificial intelligence that classifies
  and identifies such entities in text as places, organizations, dates, names, monetary
  values, and others
- Regex Entities—Items that the Regex classification clues identify, such as credit card numbers or
  social security numbers

    - You can skip specific clues as part of a redaction plan by specifying Excluded Clues, such
      as: “VISA” or “SSN” (matched to the term name)

- Custom Entities—Any custom words or phrases associated with the plan.

Masking based redaction retains a specified number of start / end characters from each redacted value.

![configredactionplans](/images/dataclassification/5.8/configuration/configredactionplans.webp)

## Redaction Entity Groups

Use Entity Groups to add redaction entities to specific groups.

![redactionentitygroups](/images/dataclassification/5.8/configuration/redactionentitygroups.webp)

## Redaction Entities

Use Entities to specify any custom words or phrases for a redaction plan to remove.

![configredactionentities](/images/dataclassification/5.8/configuration/configredactionentities.webp)
