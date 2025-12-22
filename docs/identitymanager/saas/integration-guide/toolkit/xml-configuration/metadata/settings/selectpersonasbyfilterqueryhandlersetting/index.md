---
title: "Select Personas by Filter Query Handler Setting"
description: "Select Personas by Filter Query Handler Setting"
sidebar_position: 110
---

# Select Personas by Filter Query Handler Setting

This setting is used to filter the entity type used by authentication mechanism.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
    <SelectPersonasByFilterQueryHandlerSetting ResourceDisplayNameProperty="AD_Entry:displayName" PersonTypeFilterProperty="AD_Entry:objectCategory" PersonTypeFilter="Person" />
```

## Properties

| Property                                                     | Type   | Description                                                                                                   |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| Identifier default value: SelectPersonasByFilterQueryHandler | String | Unique identifier of the setting.                                                                             |
| MailProperty optional                                        | String | Defines the mail property. **NOTE:** Required to receive the email for two-way password reset, when relevant. |
| OwnerPhotoTagProperty optional                               | String | Defines the photo tag property.                                                                               |
| PersonTypeFilter optional                                    | String | Defines the value of the property `PersonTypeFilterProperty` that needs to be matched to get elements.        |
| PersonTypeFilterProperty optional                            | String | Defines the filter property.                                                                                  |
| PhotoProperty optional                                       | String | Defines the photo property.                                                                                   |
| ResourceDisplayNameProperty optional                         | String | Represents the display property.                                                                              |
