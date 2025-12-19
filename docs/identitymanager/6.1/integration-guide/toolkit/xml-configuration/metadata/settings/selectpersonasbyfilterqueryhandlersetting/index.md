---
title: "SelectPersonasByFilterQueryHandlerSetting"
description: "SelectPersonasByFilterQueryHandlerSetting"
sidebar_position: 110
---

# SelectPersonasByFilterQueryHandlerSetting

This setting is used to filter the entity type used by authentication mechanism.

## Examples

```

**<SelectPersonasByFilterQueryHandlerSetting ResourceDisplayNameProperty="AD_Entry:displayName" PersonTypeFilterProperty="AD_Entry:objectCategory" PersonTypeFilter="Person" />**

```

## Properties

| Property                                                     | Details                                                                                                                                       |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier default value: SelectPersonasByFilterQueryHandler | **Type** String **Description** Unique identifier of the setting.                                                                             |
| MailProperty optional                                        | **Type** String **Description** Defines the mail property. **Note:** required to receive the email for two-way password reset, when relevant. |
| OwnerPhotoTagProperty optional                               | **Type** String **Description** Defines the photo tag property.                                                                               |
| PersonTypeFilter optional                                    | **Type** String **Description** The documentation is not yet available.                                                                       |
| PersonTypeFilterProperty optional                            | **Type** String **Description** Defines the filter property                                                                                   |
| PhotoProperty optional                                       | **Type** String **Description** The documentation is not yet available.                                                                       |
| ResourceDisplayNameProperty optional                         | **Type** String **Description** Represents the display property.                                                                              |
