---
title: "Using a Wildcard"
description: "Using a Wildcard"
sidebar_position: 30
---

# Using a Wildcard

Instead of IDs you can use the keywords in Table 2.

Table 2: Keywords to use instead of IDs.

| Noun                              | Verb   | Affected Items |
| --------------------------------- | ------ | -------------- | -------------- |
| \*all\*                           | Enable | Disable        | All Add-ons    |
| \*extension\* (or \*extensions\*) | Enable | Disable        | All Extensions |
| \*plugin\* (or \*plugins\*)       | Enable | Disable        | All Plugins    |
| \*service\* (or \*services\*)     | Enable | Disable        | All Services   |

Note that more a specific keyword wins over a more general one and therefore can be combined. For
example, the following would disable all add-ons, but leave extensions enabled. Then it would
disable the "Clearly" extension from Evernote by its friendly name ID.

```
*all*, disable
*extensions*, enable
readable@evernote.com, disable
```

:::warning
If you use \*all\*, disable, you could see Firefox close after disabling all
extensions; it could take a second launch to work.

:::



