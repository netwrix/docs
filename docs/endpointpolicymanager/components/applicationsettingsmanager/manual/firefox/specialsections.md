---
title: "How to Use Special Sections"
description: "How to Use Special Sections"
sidebar_position: 10
---

# How to Use Special Sections

There are some special sections within the Firefox AppSet and most have pre-configured example
values listed for how to use that section. Many also let you specify the first line as:

`MODE=REPLACE` or `MODE=MERGE`

In the figure shown, you can see Permissions tab has the default example set with `MODE=REPLACE` and shows
some examples on how to use the special section.

![how_to_use_special_sections](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/how_to_use_special_sections.webp)

The figure shown. Site to Zone assignment special section.

:::note
If you leave the MODE line off, the default is MERGE.
:::


Here's what each mode does:

`MODE=REPLACE`: This takes the existing settings on the machine, removes them, and replaces them
with these entries. Use `MODE=REPLACE` if you want to ensure your specific settings, regardless of
what the user already has.

`MODE=MERGE`: This merges the settings a user already has manually placed there, with the entries
you have here. Use` MODE=MERGE` if you want to let users make changes, but also ensure that your
additions make it to their environment.

Note that with some sections (like Bookmarks), MERGE is the only option and is not changeable. In
the next sections we'll explore each tab and highlight anything noteworthy with examples, tips,
tricks, and exceptions.



