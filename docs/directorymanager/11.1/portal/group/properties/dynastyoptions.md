---
title: "Dynasty Options tab"
description: "Group properties - Dynasty Options tab"
sidebar_position: 100
---

# Dynasty Options tab

Directory Managerprovides advanced options that you can use to enhance the Dynasty structure and its
membership. You can:

- Modify the attributes an Organizational/Geographical/Custom Dynasty is build on
- Modify the structure of a managerial Dynasty
- Edit the template used to generate the alias and display names of child groups
- Control the attribute inheritance behavior

Your changes will be reflected on the next update of the Dynasty.

:::note
Advanced Dynasty options are available for Dynasties of the parent and middle level, but not
for the leaf level.
:::


## For an Organizational/Geographical/Custom Dynasty

**Alias Template**

This setting generates the alias names of child groups. **%GROUPBY%** is replaced with the actual
value of the Attributes.

If Exchange Server is the designated messaging system for the identity store, the alias length is
limited to 64 characters and must be unique to the forest. For other messaging systems, the alias
length must not exceed the number of characters supported by the respective messaging system.

Also, the alias must not contain characters that are invalid for the configured messaging system.
The following table lists the valid characters the supported messaging systems.

| Messaging System                                                 | Valid Characters                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange Server 2013, Exchange Server 2016, Exchange Server 2019 | - Uppercase letters (A–Z) - Lowercase letters (a–z) - Numeric digits (0–9) - Special characters: `#`, `---
title: "Dynasty Options tab"
description: "Group properties - Dynasty Options tab"
sidebar_position: 100
---

# Dynasty Options tab

Directory Managerprovides advanced options that you can use to enhance the Dynasty structure and its
membership. You can:

- Modify the attributes an Organizational/Geographical/Custom Dynasty is build on
- Modify the structure of a managerial Dynasty
- Edit the template used to generate the alias and display names of child groups
- Control the attribute inheritance behavior

Your changes will be reflected on the next update of the Dynasty.

:::note
Advanced Dynasty options are available for Dynasties of the parent and middle level, but not
for the leaf level.
:::


## For an Organizational/Geographical/Custom Dynasty

**Alias Template**

This setting generates the alias names of child groups. **%GROUPBY%** is replaced with the actual
value of the Attributes.

If Exchange Server is the designated messaging system for the identity store, the alias length is
limited to 64 characters and must be unique to the forest. For other messaging systems, the alias
length must not exceed the number of characters supported by the respective messaging system.

Also, the alias must not contain characters that are invalid for the configured messaging system.
The following table lists the valid characters the supported messaging systems.

| Messaging System                                                 | Valid Characters                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
, `%`, `&`, `'`, `*`, `+`, `-`, `/`, `=`, `?`, `^`, `_`, `` ` ``, `\{`, `\|`, `\}`, `~` - Periods (`.`) are allowed, but each must be preceded and followed by at least one other valid character |
| All other messaging systems                                      | - Uppercase letters (A–Z) - Lowercase letters (a–z) - Numeric digits (0–9)                                                                                                                                                                                                                                 |
=======
| Messaging System | Valid Characters |
| --- | --- |
| Exchange Server 2013, Exchange Server 2016, Exchange Server 2019 | <ul><li>Uppercase letters (A–Z)</li><li>Lowercase letters (a–z)</li><li>Numeric digits (0–9)</li><li>Special characters: `#`, `$`, `%`, `&`, `'`, `*`, `+`, `-`, `/`, `=`, `?`, `^`, `_`, `` ` ``, `\{`, `\|`, `\}`, `~` - Periods (`.`) are allowed, but each must be preceded and followed by at least one other valid character</li></ul> |
| All other messaging systems                                      | <ul><li>Uppercase letters (A–Z)</li><li>Lowercase letters (a–z)</li><li>Numeric digits (0–9)</li></ul> |

**Display Name Template**

The template to use to generate the display names of the child groups. **%GROUPBY%** is replaced
with the actual value of theAttributes.

**Attributes**

Dynasties create Smart Groups for each distinct value of each attribute listed in the **Attributes**
area.

You can view and change the attributes for parent and middle Dynasties.

- Click **Add** to select a new attribute to add a new level to the Dynasty.
- Select an attribute and click **Edit** to modify it.
- Click **Remove** to remove the selected attribute.

See the [Dynasty Options page](/docs/directorymanager/11.1/portal/group/dynasty/AD/dynastyoptionsorggeocus.md) for details.

**Inheritance**

Use this setting to specify when Dynasty children inherit attributes. Options are:

- **Inherit on creation**: Dynasty children will inherit the attributes’ values only when the
  Dynasty is created. Moreover, whenever a new child group is created, it will inherit the
  attributes’ values.
- **Always inherit**: Dynasty children will inherit the attributes’ values every time the parent
  Dynasty is updated.
- **Never inherit**: Dynasty children will never inherit attribute values from the parent.

The attributes to be inherited are specified at the identity store level. See Dynasty Settings.

When, for a child Dynasty, you change the value of an inherited attribute, the new value may or may
not persist, depending on the inheritance option selected for the parent Dynasty. Here is an
example:

Suppose the administrator has set the managedBy attribute for inheritance.

- With the **Always inherit** option selected for the parent Dynasty, any modifications made to the
  value of the managedBy attribute for a child Dynasty will be replaced with the value of the
  managedBy attribute set for the parent Dynasty, whenever the Dynasty is updated.
- With the **Never inherit** option selected, any modifications made to the value of the managedBy
  attribute for a child Dynasty will persist after update

## For a Managerial Dynasty

Top Manager, Include manager as member, Set manager as owner, Create a Flat managerial list, Exclude
nested lists of direct reports, Create groups in same container as manager, Create groups in this
container

When you create a managerial Dynasty, you specify a Dynasty structure that determines how query
results are grouped.

For example, you specify whether you want to create a separate Smart Group for the direct reports of
the top manager and sub-level managers, or add all direct reports of the top manager and sub-level
managers as members of a single group.

You can view and change these structure options for parent and middle Dynasties. For details, see
the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/portal/group/dynasty/AD/dynastyoptionsmanagerial.md).

:::note
(1) If the **Set manager as owner** check box is selected, the **Always inherit** option is
set for Inheritance, and the managedBy attribute is specified for inheritance, the **Set manager as
owner** option takes priority over the managedBy attribute inheritance. Hence, the manager of a
child Dynasty would be set as its respective primary owner.  
(2) When you clear the **Set manager as owner** check box, the manager set as the primary owner of a
parent Dynasty will not be removed. However, when the Dynasty is updated, the primary owner of a
child Dynasty may be updated, depending on the Dynasty inheritance options. For example, if the
**Always inherit** option is set for Inheritance and the managedBy attribute is specified for
inheritance, the primary owner of the parent Dynasty would be set as the primary owner for all child
Dynasties, replacing their respective primary owners.
:::


**Attributes**

Set a custom attribute to create a managerial lineage in the context of this attribute.

See the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/portal/group/dynasty/AD/dynastyoptionsmanagerial.md)for a
discussion on attributes.

In addition to the scenarios discussed, the following also apply on Dynasty update:

- Specify the ‘XadditionalManager’ attribute in addition to the ‘Manager’ attribute for a parent
  managerial Dynasty.

    On update, new child Dynasties are created with respect to the additional manager attribute data
    and added in their respective managers’ direct reports and additional manager's direct reports.

- Remove the ‘XadditionalManager’ attribute for a parent managerial Dynasty.

    On update, the direct reports of users created with respect to the additional manager attribute
    data are removed from their respective managers’ and additional managers’ direct reports.

    If the Delete Empty and Orphan Dynasty children setting is applied, direct reports of users
    created due to the additional manager attribute data are not only removed from their respective
    managers’ and additional managers’ direct reports; they also get deleted.

**Alias Template**

This setting is used to generate the alias names of the Dynasty's child groups. **%MANAGER%** is
replaced with the alias of the manager being processed. Normally, the mailnickname attribute is used
to store the alias. However, if this attribute is not set, then **%MANAGER%** is replaced with the
display name of the manager.

To use an attribute other than mailNickname for generating the alias for child groups, update the
**%MANAGER%** statement with the desired attribute name. Note that the value of the attribute must
be unique.

Example using the cn attribute:

%MANAGER.cn%

Example using the name attribute:

%MANAGER.name%

If Exchange Server is the designated messaging system for the identity store, the alias length is
limited to 64 characters and must be unique to the forest. For other messaging systems, the alias
length must not exceed the number of characters supported by the respective messaging system.

Also, the alias must not contain characters that are invalid for the configured messaging system.
The following table lists the valid characters the supported messaging systems.

| Messaging System                                                 | Valid Characters                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange Server 2013, Exchange Server 2016, Exchange Server 2019 | - Uppercase letters (`A–Z`) - Lowercase letters (`a–z`) - Numeric digits (`0–9`) - Special characters: `#`, `---
title: "Dynasty Options tab"
description: "Group properties - Dynasty Options tab"
sidebar_position: 100
---

# Dynasty Options tab

Directory Managerprovides advanced options that you can use to enhance the Dynasty structure and its
membership. You can:

- Modify the attributes an Organizational/Geographical/Custom Dynasty is build on
- Modify the structure of a managerial Dynasty
- Edit the template used to generate the alias and display names of child groups
- Control the attribute inheritance behavior

Your changes will be reflected on the next update of the Dynasty.

:::note
Advanced Dynasty options are available for Dynasties of the parent and middle level, but not
for the leaf level.
:::


## For an Organizational/Geographical/Custom Dynasty

**Alias Template**

This setting generates the alias names of child groups. **%GROUPBY%** is replaced with the actual
value of the Attributes.

If Exchange Server is the designated messaging system for the identity store, the alias length is
limited to 64 characters and must be unique to the forest. For other messaging systems, the alias
length must not exceed the number of characters supported by the respective messaging system.

Also, the alias must not contain characters that are invalid for the configured messaging system.
The following table lists the valid characters the supported messaging systems.

| Messaging System                                                 | Valid Characters                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange Server 2013, Exchange Server 2016, Exchange Server 2019 | - Uppercase letters (A–Z) - Lowercase letters (a–z) - Numeric digits (0–9) - Special characters: `#`, `---
title: "Dynasty Options tab"
description: "Group properties - Dynasty Options tab"
sidebar_position: 100
---

# Dynasty Options tab

Directory Managerprovides advanced options that you can use to enhance the Dynasty structure and its
membership. You can:

- Modify the attributes an Organizational/Geographical/Custom Dynasty is build on
- Modify the structure of a managerial Dynasty
- Edit the template used to generate the alias and display names of child groups
- Control the attribute inheritance behavior

Your changes will be reflected on the next update of the Dynasty.

:::note
Advanced Dynasty options are available for Dynasties of the parent and middle level, but not
for the leaf level.
:::


## For an Organizational/Geographical/Custom Dynasty

**Alias Template**

This setting generates the alias names of child groups. **%GROUPBY%** is replaced with the actual
value of the Attributes.

If Exchange Server is the designated messaging system for the identity store, the alias length is
limited to 64 characters and must be unique to the forest. For other messaging systems, the alias
length must not exceed the number of characters supported by the respective messaging system.

Also, the alias must not contain characters that are invalid for the configured messaging system.
The following table lists the valid characters the supported messaging systems.

| Messaging System                                                 | Valid Characters                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
, `%`, `&`, `'`, `*`, `+`, `-`, `/`, `=`, `?`, `^`, `_`, `` ` ``, `\{`, `\|`, `\}`, `~` - Periods (`.`) are allowed, but each must be preceded and followed by at least one other valid character |
| All other messaging systems                                      | - Uppercase letters (A–Z) - Lowercase letters (a–z) - Numeric digits (0–9)                                                                                                                                                                                                                                 |

**Display Name Template**

The template to use to generate the display names of the child groups. **%GROUPBY%** is replaced
with the actual value of theAttributes.

**Attributes**

Dynasties create Smart Groups for each distinct value of each attribute listed in the **Attributes**
area.

You can view and change the attributes for parent and middle Dynasties.

- Click **Add** to select a new attribute to add a new level to the Dynasty.
- Select an attribute and click **Edit** to modify it.
- Click **Remove** to remove the selected attribute.

See the [Dynasty Options page](/docs/directorymanager/11.1/portal/group/dynasty/AD/dynastyoptionsorggeocus.md) for details.

**Inheritance**

Use this setting to specify when Dynasty children inherit attributes. Options are:

- **Inherit on creation**: Dynasty children will inherit the attributes’ values only when the
  Dynasty is created. Moreover, whenever a new child group is created, it will inherit the
  attributes’ values.
- **Always inherit**: Dynasty children will inherit the attributes’ values every time the parent
  Dynasty is updated.
- **Never inherit**: Dynasty children will never inherit attribute values from the parent.

The attributes to be inherited are specified at the identity store level. See Dynasty Settings.

When, for a child Dynasty, you change the value of an inherited attribute, the new value may or may
not persist, depending on the inheritance option selected for the parent Dynasty. Here is an
example:

Suppose the administrator has set the managedBy attribute for inheritance.

- With the **Always inherit** option selected for the parent Dynasty, any modifications made to the
  value of the managedBy attribute for a child Dynasty will be replaced with the value of the
  managedBy attribute set for the parent Dynasty, whenever the Dynasty is updated.
- With the **Never inherit** option selected, any modifications made to the value of the managedBy
  attribute for a child Dynasty will persist after update

## For a Managerial Dynasty

Top Manager, Include manager as member, Set manager as owner, Create a Flat managerial list, Exclude
nested lists of direct reports, Create groups in same container as manager, Create groups in this
container

When you create a managerial Dynasty, you specify a Dynasty structure that determines how query
results are grouped.

For example, you specify whether you want to create a separate Smart Group for the direct reports of
the top manager and sub-level managers, or add all direct reports of the top manager and sub-level
managers as members of a single group.

You can view and change these structure options for parent and middle Dynasties. For details, see
the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/portal/group/dynasty/AD/dynastyoptionsmanagerial.md).

:::note
(1) If the **Set manager as owner** check box is selected, the **Always inherit** option is
set for Inheritance, and the managedBy attribute is specified for inheritance, the **Set manager as
owner** option takes priority over the managedBy attribute inheritance. Hence, the manager of a
child Dynasty would be set as its respective primary owner.  
(2) When you clear the **Set manager as owner** check box, the manager set as the primary owner of a
parent Dynasty will not be removed. However, when the Dynasty is updated, the primary owner of a
child Dynasty may be updated, depending on the Dynasty inheritance options. For example, if the
**Always inherit** option is set for Inheritance and the managedBy attribute is specified for
inheritance, the primary owner of the parent Dynasty would be set as the primary owner for all child
Dynasties, replacing their respective primary owners.
:::


**Attributes**

Set a custom attribute to create a managerial lineage in the context of this attribute.

See the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/portal/group/dynasty/AD/dynastyoptionsmanagerial.md)for a
discussion on attributes.

In addition to the scenarios discussed, the following also apply on Dynasty update:

- Specify the ‘XadditionalManager’ attribute in addition to the ‘Manager’ attribute for a parent
  managerial Dynasty.

    On update, new child Dynasties are created with respect to the additional manager attribute data
    and added in their respective managers’ direct reports and additional manager's direct reports.

- Remove the ‘XadditionalManager’ attribute for a parent managerial Dynasty.

    On update, the direct reports of users created with respect to the additional manager attribute
    data are removed from their respective managers’ and additional managers’ direct reports.

    If the Delete Empty and Orphan Dynasty children setting is applied, direct reports of users
    created due to the additional manager attribute data are not only removed from their respective
    managers’ and additional managers’ direct reports; they also get deleted.

**Alias Template**

This setting is used to generate the alias names of the Dynasty's child groups. **%MANAGER%** is
replaced with the alias of the manager being processed. Normally, the mailnickname attribute is used
to store the alias. However, if this attribute is not set, then **%MANAGER%** is replaced with the
display name of the manager.

To use an attribute other than mailNickname for generating the alias for child groups, update the
**%MANAGER%** statement with the desired attribute name. Note that the value of the attribute must
be unique.

Example using the cn attribute:

%MANAGER.cn%

Example using the name attribute:

%MANAGER.name%

If Exchange Server is the designated messaging system for the identity store, the alias length is
limited to 64 characters and must be unique to the forest. For other messaging systems, the alias
length must not exceed the number of characters supported by the respective messaging system.

Also, the alias must not contain characters that are invalid for the configured messaging system.
The following table lists the valid characters the supported messaging systems.

| Messaging System                                                 | Valid Characters                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
, `%`, `&`, `'`, `*`, `+`, `-`, `/`, `=`, `?`, `^`, `_`, `` ` ``, `\{`, `\|`, `\}`, `~` - Periods (`.`) are allowed in aliases, but each must be preceded and followed by at least one other valid character |
| All other messaging systems                                      | - Uppercase letters (`A–Z`) - Lowercase letters (`a–z`) - Numeric digits (`0–9`)                                                                                                                                                                                                                                            |
**Display Name Template**

The template is used to generate the display names of the Dynasty's child groups. **%MANAGER%** is
replaced with the display name of the manager being processed. To use an attribute other than
displayName to name the child groups, update the **%MANAGER%** statement with the desired attribute
name. Note that the value of the attribute must be unique.

Example using the cn attribute:

%MANAGER.cn%

Example using the name attribute:

%MANAGER.name%

:::note
For a managerial Dynasty, the **%MANAGER%** variable for the alias and display name templates
must be the same. The selected attribute must be a string and cannot include characters that are not
supported in pre-Windows 2000 group names.
:::


**Inheritance**

See Inheritance section on this page.
