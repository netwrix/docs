---
title: "Redaction"
description: "Redaction"
sidebar_position: 40
---

# Redaction

This section contains information on configuring redaction plans and entities. Review the following
for additional information:

- [Redaction Plans](#redaction-plans)
- [Redaction Entity Groups](#redaction-entity-groups)

## Redaction Plans

Use redaction plans as an optional migration step to remove specific entities from supported
content types. During migration, a redaction plan removes the following entity
types (depending on configuration):

- NLP Entities—Items identified by the NLP entity extraction, such as names or locations
- Regex Entities—Items identified by the Regex classification clues, such as credit card numbers or
  social security numbers

    - Skip specific clues as part of a redaction plan by specifying Excluded Clues, such
      as: “VISA” or “SSN” (matched to the term name)

- Custom Entities—Any custom words or phrases associated with the plan.

Masking based redaction will ensure that a specified number of start / end characters will be
retained from each redacted value.

![configredactionplans](/images/dataclassification/5.6.2/configuration/configredactionplans.webp)

## Redaction Entity Groups

Use Entity Groups to add redaction entities to specific groups.

![redactionentitygroups](/images/dataclassification/5.6.2/configuration/redactionentitygroups.webp)

## Redaction Entities

Use Entities to specify custom words or phrases that a redaction
plan should remove.

![configredactionentities](/images/dataclassification/5.6.2/configuration/configredactionentities.webp)
