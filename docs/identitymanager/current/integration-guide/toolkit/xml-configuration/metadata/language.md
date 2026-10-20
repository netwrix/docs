---
title: "Language"
description: ""
sidebar_position: 7
---

Represents a configuration entity used to create multilingual application.

By default, the product includes translations for English (en-US), French (fr-FR), Spanish (es-ES), German (de-DE), Italian (it-IT), Korean (ko-KR), and Traditional Chinese (zh-TW).


## Examples
The following example declares a new language.
```xml
<Language Code="en-US" IndicatorNumber="1" />
```


## Properties

|Property|Details|
|---|---|
| Code required | **Type:** String **Description:** Unique identifier of the language (fr-FR, en-US...). It is a combination of an ISO 639 two-letter lowercase culture code associated with a language and an ISO 3166 two-letter uppercase subculture code associated with a country or region. |
| IndicatorNumber required | **Type:** Int32 **Description:** Defines the default language. |
| JsonPath optional | **Type:** String **Description:** The original translations file path |
