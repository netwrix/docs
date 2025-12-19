---
title: "Expressions"
description: "Expressions"
sidebar_position: 40
---

# Expressions

Expressions are a way to define the attributes whose values must be computed based on other
attributes.

## Overview

In Usercube's XML configuration, some attributes are defined with expressions. Expression attributes
do not take a plain string value, but rather an expression that computes a value based on a given
input.

> Typical examples can be found in
> [entity property expressions](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitypropertyexpression/index.md)
> and
> [scalar rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md).

Every expression must be passed at least one argument and return at least one value.

The expression can either be provided as a
[built-in function](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/predefined-functions/index.md)
or as a full-fledged `C#` expression. See the list of available
[C# utility functions](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/csharp-utility-functions/index.md)
and
[functions predefined by Usercube](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/predefined-functions/index.md).

When changing the value of a property that is part of some expressions in the configuration, do not
expect to see all expressions recomputed right away.

In order to ensure the recomputation of all expressions based on the recent change, wait for the
next run of **Update Expressions** in the complete job or through the corresponding connector's
overview page.

### Expressions in the UI

In the UI, the attributes that can be defined with an expression show two fields: `Property Path`
and `Expression`.

> For example, the source object of a scalar rule based on user records is displayed:
>
> ![Property Path and Expression](/images/identitymanager/6.1/integration-guide/toolkit/expressions/expression-propertypath_v602.webp)

The field `Property Path` is usually filled in with the **+** button only when the rule involves one
single attribute. If the object involves more than one attribute, then the attributes are to be
written in `Expression` (C#), with the help of
[predefined simple transformations](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/predefined-functions/index.md).

> The first example defines the source object as simply the user record's `Login` property, while
> the second defines the source object with an expression based on the user record's first and last
> names:
>
> ![Property Path Example](/images/identitymanager/6.1/integration-guide/toolkit/expressions/expression-propertypath-example1_v602.webp)
>
> ![Expression Example](/images/identitymanager/6.1/integration-guide/toolkit/expressions/expression-propertypath-example2_v602.webp)

### Expressions in XML

In XML, inside the C# expressions, make sure to escape `"` characters by writing them as `&quot;`.

> For example:
>
> ```
> <ScalarRule Property="displayName" Expression="C#:person:return person.LastName + &quot; &quot; + person.FirstName;" />
>
> ```

### Nullability checks

Nullability checks constitute a common area for improvement in C# expressions, rather easy to
implement.

See Microsoft documentation on
[nullable reference types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types)
and more precisely on
[nullable operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#nullable-operators).

> For example, the following scalar rule computes the value of users' email addresses via a C#
> expression. The `?` characters cut the operations short by returning `null` when one of the chain
> members returns `null`, thus preventing errors.
>
> ```
> <ScalarRule Property="EmailAddress" Expression="C#:resource:return resource?.mail?.ToLower();" />
>
> ```

## Built-in Functions

Usercube provides a set of
[built-in function](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/predefined-functions/index.md)
that implement basic expressions. They can be used as-is or be included in a C# expression.

Usercube's engine automatically passes the main argument to the function during the computation, but
extra arguments can be provided using the following syntax:

`function name : arg2 | arg3 | ...`

### Example

_Plain built-in function_

```

// transform string to uppercase
Expression="ToUpper"

```

_Built-in function with parameters_

```

// add 1440 minutes to a date formated as dd/MM/yyyy
Expression="ParseLocalDateThenAddMinutes:Romance Standard Time|dd/MM/yyyy|1440"

```

## C# Expressions

More complex expressions can be written as ad-hoc C# code according to the following rules:

- The expression is prefixed by `C#:ParameterName:` where `ParameterName` is the variable name
  pointing to the input value.
- The expression has to return a value

> For example:
>
> ```
>
> // user full name
> C#:user:return user.FirstName+" "+user.LastName;
>
> ```

### QueryHandler

Expression can includes squeries, using the QueryHandler service.

> For example, to query the employee type whose `Identifier` is `CDI`:
>
> ```
>
> C#:user:
> var resources = queryHandler.Select<Directory_EmployeeType>("Select Id Where Identifier=\"CDI\"");
> return resources.FirstOrDefault()?.Id;
>
> ```

> Another example, to query the organization whose `Identifier` is `23040`:
>
> ```
>
> C#:return queryHandler.Select<Directory_Organization>("Select Identifier Where Id=23040").FirstOrDefault()?.Identifier;
>
> ```

### Logger service

Usercube provides a logger service called "logger" to debug C# expressions.

> For example:
>
> ```
>
> C#:resource:logger.LogDebug("Name={0}", resource.Name); return resource.Name;
>
> ```

### White list

.NET libraries from the following white list can be used

**Authorized Namespaces**

_Every class and function from the following namespaces is allowed:_

- `System.Linq`
- `System.Text.RegularExpressions`

**Authorized Classes**

_Beyond the authorized namespaces, the following classes can be used_:

- `System.Convert`
- `System.Reflection.AssemblyFileVersionAttribute`
- `System.Reflection.AssemblyVersionAttribute`
- `System.Reflection.AssemblyCopyrightAttribute`
- `System.Reflection.AssemblyProductAttribute`
- `System.Reflection.AssemblyCompanyAttribute`
- `System.Reflection.AssemblyTitleAttribute`
- `System.Char`
- `Usercube.Expressions.Functions.UtilExpressions`
- `System.Nullable`
- `System.String`
- `System.Int32`
- `System.Random`

**Authorized Methods**

_Beyond the authorized classes, the following methods can be used_:

- `System.Convert`
- `Microsoft.Extensions.Logging.LoggerExtensions.LogDebug`
- `System.DateTime.Add`
- `System.DateTime.AddDays`
- `System.DateTime.AddHours`
- `System.DateTime.AddMicroseconds`
- `System.DateTime.AddMilliseconds`
- `System.DateTime.AddMinutes`
- `System.DateTime.AddMonths`
- `System.DateTime.AddSeconds`
- `System.DateTime.AddTicks`
- `System.DateTime.AddYears`
- `System.DateTime.Compare`
- `System.DateTime.CompareTo`
- `System.DateTime.DaysInMonth`
- `System.DateTime.Equals`
- `System.DateTime.GetDateTimeFormats`
- `System.DateTime.ToUniversalTime`
- `System.DateTime.ToString`

Trying to use code from outside this white list would yield the following error during computation:

`the Method Name : ... Parent Class : ... NameSpace : ... used are not authorized`

## Literal Expression

### Overview

To avoid the use of a C# expression when the parameter is not needed, simple literal values can be
written as literal expressions according to the following rules:

- The expression is prefixed by the `Literal:` tag.
- The expression value must be valid according to the expected type of the property to which the
  expression applies. For example, `Literal:five` does not work for an `Int` property.

Literal expressions are available for
[`ScalarRule`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md),
[`QueryRule`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md)
and
[`EntityPropertyExpression`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
expressions whose target
[`EntityProperty`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)`Type`
attribute is of the following :

- String = 0
- Bytes = 1
- Int32 = 2
- Int64 = 3
- Bool = 5
- Guid = 6
- Double = 7
- Byte = 9
- Int16 = 10
- ForeignKey = 12

Literal expressions are not available for
[`QueryRule`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md)`TargetExpression`
attribute, only `SourceExpression`. Literal expressions are not available for rules targeting a
`DateTime` or `Binary` property.

#### Example

```

**<ScalarRule Property="userAccountControl" Expression="C#:bot:return &quot;66048&quot;;" /><ScalarRule Property="userAccountControl" Expression="Literal:66048" />**

<QueryRule Property="parentdn" TargetBinding="dn" SourceExpression="C#:bot:return &quot;OU=Bots,DC=acme,DC=internal&quot;;" /><QueryRule Property="parentdn" TargetBinding="dn" SourceExpression="Literal:OU=Bots,DC=acme,DC=internal" />

<EntityPropertyExpression Identifier="EntityType_BoolProperty"  EntityType="EntityType" Property="BoolProperty" Expression="Literal:false" /><EntityPropertyExpression Identifier="EntityType_BoolProperty"  EntityType="EntityType" Property="BoolProperty" Expression="Literal:True" /><EntityPropertyExpression Identifier="EntityType_IntProperty"  EntityType="EntityType" Property="IntProperty" Expression="Literal:42" />

<EntityPropertyExpression Identifier="EntityType_BoolProperty"  EntityType="EntityType" Property="BoolProperty" Expression="Literal:42" /><EntityPropertyExpression Identifier="EntityType_IntProperty"  EntityType="EntityType" Property="IntProperty" Expression="Literal:five" />

```

Literal expressions targeting `String` properties can accept any value, since it is already a string
in the configuration.
