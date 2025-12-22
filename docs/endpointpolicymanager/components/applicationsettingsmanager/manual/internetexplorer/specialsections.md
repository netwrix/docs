---
title: "How to Use Special Sections"
description: "How to Use Special Sections"
sidebar_position: 20
---

# How to Use Special Sections

Most special sections have some pre-configured example values listed for you as examples on how to
use that section. Many also let you specify the first line as:

```
MODE=REPLACE or MODE=MERGE
```

In the figure shown, you can see the Site to Zone Assignment in the Security tab has the default example set
with MODE=REPLACE. The figure also shows some examples on how to use the special section.

![how_to_use_special_sections](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/how_to_use_special_sections.webp)

The figure shown. Using the Site to Zone Assignment special section.

:::note
If you leave the MODE line off, the default is MERGE.
:::


Here's what each mode does:

- `MODE=REPLACE`: This takes the existing settings on the machine, removes them, and replaces them
  with these entries. Use MODE=REPLACE if you want to ensure your specific settings, regardless of
  what the user already has.
- `MODE=MERGE`: This merges the settings a user has already manually placed there, with the entries
  you have here. Use MODE=MERGE if you want to let users make changes, but also ensure that your
  additions make it to their environment.

In the next sections, we'll explore each tab and highlight anything noteworthy with examples, tips
and tricks, and exceptions.



