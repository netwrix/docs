---
title: "Redaction"
description: "Redaction"
sidebar_position: 40
---

# Redaction

This topic contains information on configuring redaction plans and entities.

## Redaction Plans

Redaction plans can be used as an optional migration step to remove specific entities from supported
content types. During the migration of a document a migration plan will remove the following entity
types (depending on the configuration):

- NLP Entities—Items identified by the NLP entity extraction, such as names or locations. NLP stands
  for Natural Language Processing, which is a subfield of artificial intelligence and allows to
  classify and identify such entities in text as places, organizations, dates, names, monetary
  values, and others
- Regex Entities—Items identified by the Regex classification clues, such as credit card numbers or
  social security numbers

    - Specific clues can be skipped as part of a redaction plan by specifying Excluded Clues, such
      as: “VISA” or “SSN” (matched to the term name)

- Custom Entities—Any custom words or phrases associated with the plan.

Masking based redaction will ensure that a specified number of start / end characters will be
retained from each redacted value.

![configredactionplans](/images/dataclassification/5.7/configuration/configredactionplans.webp)

## Redaction Entity Groups

Entity Groups can be used to add redaction entities to specific groups.

![redactionentitygroups](/images/dataclassification/5.7/configuration/redactionentitygroups.webp)

## Redaction Entities

Entities can be used to specify any custom words or phrases that should be removed by a redaction
plan.

![configredactionentities](/images/dataclassification/5.7/configuration/configredactionentities.webp)
