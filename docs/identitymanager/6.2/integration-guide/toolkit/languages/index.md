---
title: "Languages"
description: "Languages"
sidebar_position: 50
---

# Languages

Some configuration string must be specified in multiple languages. For this, the name of the
corresponding XML attribute is suffixed by `_L1`, `_L2`,... `_L8`. For example, the property
_DisplayName_ of an [Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) can be
specified in English and French:

```

<EntityType Identifier="Directory_User" DisplayName_L1="User" DisplayName_L2="Collaborateur">    ...
</EntityType>

```

Languages list must be specified by [Language](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/language/index.md)
elements.

```

**<Language Code="en-US" IndicatorNumber="1" />  <Language Code="fr-FR" IndicatorNumber="2" />**

```

The code is a combination of an ISO 639 two-letter lowercase culture code associated with a language
and an ISO 3166 two-letter uppercase subculture code associated with a country or region.
