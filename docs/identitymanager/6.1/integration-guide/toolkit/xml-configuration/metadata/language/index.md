---
title: "Language"
description: "Language"
sidebar_position: 70
---

# Language

Represents a configuration entity used to create multilingual application.

## Examples

The following example declares a new language.

```

**<Language Code="en-US" IndicatorNumber="1" />**

```

## Properties

| Property                 | Details                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------- |
| Code required            | **Type** String **Description** Unique identifier of the language (fr-FR, en-US�). |
| IndicatorNumber required | **Type** Int32 **Description** Defines the default language.                       |
| JsonPath optional        | **Type** String **Description** The original translations file path                |
