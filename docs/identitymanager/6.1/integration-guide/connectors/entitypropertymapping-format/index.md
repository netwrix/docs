---
title: "References: Format for the EntityPropertyMapping"
description: "References: Format for the EntityPropertyMapping"
sidebar_position: 50
---

# References: Format for the EntityPropertyMapping

This page lists all available formats for entity properties, in order to help you manage said
formats when exporting and fulfilling resources from/to external systems.

The attribute `Format` can be defined in an EntityPropertyMapping to indicate the format of the data
in the external system. It will allow Usercube to correctly convert the data to its own format
during the export and fulfillment processes.

## Available Formats

### Active Directory / LDAP / OpenLDAP

| Format                               | Corresponding Property Type | Note                                                                                                                                                                                                                    |
| ------------------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Bit:`<PropertyIdentifier>`:`<Bit>`_ | String/Int16/Int32/Int64    | When provisioning a bitmask property, for example `userAccountControl`, the format must contain the identifier of the property and the bit to be provisioned, for example `bit:userAccountControl:2`. See more details. |
| _Bool_                               | Bool                        |                                                                                                                                                                                                                         |
| _Byte_                               | Byte                        |                                                                                                                                                                                                                         |
| _Bytes/Binary_                       | Bytes/Binary                |                                                                                                                                                                                                                         |
| _Concat:separator_                   | String                      | Mono-valued attribute that may contain multiple values separated by a `<separator>` (example: `extensionAttribute15` which requires using `concat:;`)                                                                   |
| _DateTime/1601Date_                  | DateTime                    | [Classic LDAP Dates](https://www.epochconverter.com/ldap) and [Generalized DateTimes](https://ldapwiki.com/wiki/GeneralizedTime)                                                                                        |
| _Double_                             | Double                      |                                                                                                                                                                                                                         |
| _Guid_                               | Guid                        | 32 digits Guid (example: c076e361fa5f428e833939a449ce2db3)                                                                                                                                                              |
| _Int16_                              | Int16                       |                                                                                                                                                                                                                         |
| _Int32_                              | Int32                       |                                                                                                                                                                                                                         |
| _Int64_                              | Int64/ForeignKey/Option     | Some attributes are stored as long integers (_Int64_) even though their name implies that they hold dates, like `accountExpires` and `pwdLastSet` attributes.                                                           |
| _MultivaluedText_                    | String                      | Multi-valued attribute flattened to a string containing values separated by a `\n`. Its provisioning with a scalar rule requires a specific sorting, see the focus under this table. See more details.                  |
| _RDN_                                | String                      | [Relative Distinguished Name](https://ldap.com/ldap-dns-and-rdns/)                                                                                                                                                      |
| _SID_                                | String                      | [Security Identifiers](https://ldapwiki.com/wiki/ObjectSID)                                                                                                                                                             |

#### Focus on Bit

Some systems use bitmask properties, i.e. properties containing a set of boolean flags represented
by individual bits.

Scalar properties are provisioned by scalar rules, usually changing the whole value of the property.
For bitmask properties, changing the whole value often requires an unnecessarily complex expression.
Hence, a bitmask property should be modified one bit at a time (bit provisioning). In order to
change only one flag without altering the others, a bitmask property must be completed by one
fictitious property for each bit to be modified.

Then scalar rules can be created for each single-bit property individually.

In a given resource type, there should be scalar rules either for the bitmask property, or for the
single-bit "sub-properties", not both.

> For example, we choose to create a property `bit_userAccountControl_2` to represent the second bit
> of `userAccountControl`.
>
> ![New Property for Bit Provisioning](/images/identitymanager/6.1/integration-guide/connectors/entitypropertymapping-format/bitprov_property_v603.webp)
>
> XML configuration looks like the following:
>
> ```xml
>
> <EntityType ... >
>   <Property Identifier="userAccountControl" DisplayName_L1="userAccountControl" TargetColumnIndex="15" Type="String" />
>   <Property Identifier="userAccountControlBit2" DisplayName_L1="userAccountControl second bit" TargetColumnIndex="61" Type="String" />
>   ...
> </EntityType>
> <EntityTypeMapping ... >
>   <Property Identifier="userAccountControl" ConnectionColumn="userAccountControl" />
>   <Property Identifier="userAccountControlBit2" ConnectionColumn="bit_userAccountControl_2" Format="bit:userAccountControl:2" />
>   ...
> </EntityTypeMapping>
> ```

When creating a property of bit format:

- through the UI, there is no need filling the connection column field, because it will be filled
  automatically once the format fields are filled. A manual value for connection column would be
  overridden.
- through XML configuration, the connection column must be specified manually but there are no
  additional requirements.

#### Focus on MultivaluedText

To provision a `MultivaluedText` property, the associated scalar rule's source object must return a
`string`, where the values are separated by a `\n`. Most of the time, the value of the source object
is computed with an expression.

The order of the values within the property is important, because Usercube will use the results of
the synchronization and of the computation of the scalar rule's expression. Usercube compares both
results to compute the `Verified` provisioning state if they are found equal. Regarding that fact,
if the scalar rule's expression does not compute the `MultivaluedText` with the values in the same
order as Usercube's synchronization, the property will never be `Verified`.

NETWRIX recommends, in the scalar rule's expression, ordering the elements before joining them into
a `string` with `myList.OrderBy(e => e, StringComparer.OrdinalIgnoreCase)`, where `myList` is the
list of values.

> For example, the scalar rule's C# expression for a `MultivaluedText` can look like:
>
> ```
>
> <ScalarRule Property="displayName" Expression="var myList = new string[]
> {
>     &quot;SMTP:aemiliee.bulot@contoso.com&quot;,
>     &quot;smtp:aemiliee.bulott@contoso.com&quot;,
>     &quot;smtp:aemiliee.bulot_contoso.com@example.mail.onmicrosoft.com&quot;,
> };
>
> return String.Join(&quot;\n&quot;, myList.OrderBy(e => e, StringComparer.OrdinalIgnoreCase));" />
>
> ```

### ServiceNow

| Format             | Corresponding Property Type | Description                                                |
| ------------------ | --------------------------- | ---------------------------------------------------------- |
| _Bool_             | Bool                        |                                                            |
| _Byte_             | Byte                        |                                                            |
| _Bytes/Binary_     | Bytes/Binary                |                                                            |
| _DateTime or Date_ | DateTime                    | Date in ServiceNow format                                  |
| _Double_           | Double                      |                                                            |
| _Guid_             | Guid                        | 32 digits Guid (example: c076e361fa5f428e833939a449ce2db3) |
| _Int16_            | Int16                       |                                                            |
| _Int32_            | Int32                       |                                                            |
| _Int64_            | Int64/ForeignKey/Option     |                                                            |

#### Example

In this example, we will export and fulfill the start date of an employee in a ServiceNow instance.

We define an
[EntityProperty](/docs/identitymanager/6.1/integration-guide/entity-model/index.md)
called `u_startdate` with the **Type**`DateTime` to display it as a date in the UI.

```
ServiceNow Connector.xml
...
<EntityType Identifier="ServiceNow_User" DisplayName_L1="ServiceNow User" DisplayName_L2="Utilisateur ServiceNow">   <Property Identifier="u_startdate" DisplayName_L1="Start Date" TargetColumnIndex="1" Type="DateTime"/></EntityType>...

```

To correctly export the start date from ServiceNow, we transform the string received into a string
that is readable as a date by Usercube. To do so, we must declare in the EntityTypeMapping that we
will not receive a simple string, but a string formatted as a `DateTime`.

```
ServiceNow Connector.xml
...
<EntityTypeMapping Identifier="ServiceNow_User" Connector="ServiceNow" ConnectionTable="ServiceNowExportFulfillment_user">   <Property Identifier="u_startdate" ConnectionColumn="u_startdate" Format="DateTime" /></EntityTypeMapping>...

```

This allows the export of the attribute `u_startdate` as a date in Usercube's format.

The fulfillment will use the same format defined in the EntityTypeMapping through the **Binding**
declared in the ResourceType.

![Export and Fulfill Data transformation](/images/identitymanager/6.1/integration-guide/connectors/entitypropertymapping-format/entitypropertymapping-format-flowchart.webp)
