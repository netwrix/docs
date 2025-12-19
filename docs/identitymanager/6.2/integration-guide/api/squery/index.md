---
title: "API query grammar"
description: "API query grammar"
sidebar_position: 20
---

# API query grammar

Identity Manager's API query language allows to express exactly needed data in an API's GET call.
Query is optionally specified by the squery parameter.

### Grammar

Here's the query language's formal description. See the
[EBNF syntax ](https://en.wikipedia.org/wiki/Extended_Backus–Naur_form)for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
    [query] = [historizationFilter] , [joins] , [limit] , [select] , [where] , [orderby] ;
    historizationFilter = asof | between | contained ;
    asof = "as of" , '"' , date , '"' ;
    between = "between" , '"' , date , '"', "and", '"' , date , '"' ;
    contained = "contained in" , "(" , '"' , date , '"' , "," , '"' , date , '"' , ")" ;
    joins = join , { join } ;
    join = "join" , binding ( "of type" identifier ) , alias ;
    binding = [alias , "."] , property ;
    property = identifier ;
    alias = identifier ;
    identifier = letter , { letter | digit | "_" } ;
    limit = "pagesize" , integer
    select = projections ;
    projections = "select" , binding , { "," , binding } ;
    where = "where" , filter ;
    filter = comparison  | combinatorFilter ;
    combinatorFilter = "(" , filter , (andCombinatorFilter | orCombinatorFilter) , ")" ;
    andCombinatorFilter = "and" , filter , { "and , filter } ;
    orCombinatorFilter = "or" , filter , { "or , filter } ;
    comparison = binding , operator , rightOperand ;
    rightOperand = value | binding ;
    operator = "=" | "!=" | "<" | ">" | "<=" | ">=" | "%=" | "=%" | "%=%" | "!%=" | "!=%" | "!%=%" | "&=" ;
    value = integer | boolean | '"' , string , '"' | "null" | '"' , date , '";
    boolean = "false" | "true"
    date = yyyy-mm-ddThh:mm:ssZ
    orderby = "order by" , binding , sortdirection , { "," ,  binding , sortdirection }
    sortdirection = "asc" | "desc".

```

### Operators' semantic

- **=** : Equal.
- **!=** : Not Equal.
- **`<`** : Less than.
- **`>`** : Greater than.
- **`<=`** : Less than or equal.
- **`>=`** : Greater than or equal.
- **%=** : Start with.
- **=%** : End with.
- **%=%** : Contain.
- **!%=** : Doesn't start with.
- **!=%** : Doesn't end with.
- **!%=%** : Doesn't contain.
- **&=** : Has flag

### Query without select section

If select is not specified, API will just return queried elements' Ids.

### Examples

Last 100 started job's instances' Ids.

:::tip
Remember, The `Top` in the API queries had been deprecated and `PageSize`should be used instead.
:::


Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
/api/Job/JobInstance?squery=order  by StartDate desc&PageSize=100
```

A Complete query would be like:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

join Properties p join p.Association1 ea1  PageSize 2 select Id,Identifier,p.Id,p.Identifier,ea1.Id,ea1.Identifier where Id > 45 order by DisplayName_L1 asc

```

This query when executed on `/api/Metadata/EntityType` route will return the first 2 EntityTypes
with their properties ordered by DisplayName:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

{
  "Result": [{
      "Id": "2147483653",
      "Properties": [
        {
          "Id": "-9223372015379939327",
          "Association1": {
            "Id": "-9223372015379939327",
            "Identifier": "AssignedCompositeRole.Role-CompositeRole.AssignedCompositeRoles"
          },
          "Identifier": "Role"
        },
        {
          "Id": "-9223372015379939326",
          "Association1": {
            "Id": "-9223372015379939326",
            "Identifier": "AssignedCompositeRole.Owner-Resource.AssignedCompositeRoles"
          },
          "Identifier": "Owner"
        },
        ...
        {
          "Id": "-9223372015379939324",
          "Identifier": "WorkflowState"
        },
        {
          "Id": "-9223372015379939312",
          "Identifier": "WorkflowInstanceId"
        }],
      "Identifier": "AssignedCompositeRole"
    },
    {
      "Id": "2147483654",
      "Properties": [{
          "Id": "-9223372011084972031",
          "Association1": {
            "Id": "-9223372011084972031",
            "Identifier": "AssignedResourceNavigation.AssignedResourceType-AssignedResourceType.AssignedResourceNavigations"
          },
          "Identifier": "AssignedResourceType"
        },
        {
          "Id": "-9223372011084972030",
          "Association1": {
            "Id": "-9223372011084972030",
            "Identifier": "AssignedResourceNavigation.Property-EntityProperty.AssignedResourceNavigations"
          },
          "Identifier": "Property"
        },
        ...
        {
          "Id": "-9223372011084972012",
          "Identifier": "PerformerId"
        },
        {
          "Id": "-9223372011084972025",
          "Identifier": "StartDate"
        }],
      "Identifier": "AssignedResourceNavigation"
    }
  ]
}

```

### HasFlag operator

Determines whether one or more bit fields are set in the property.

#### Example

How to determine whether the DisplayFilter property has its first and third bits are set to 1.

- Comparison expression in the squery (101 in binary = 5 in decimal):

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
DisplayFilter &= 5

```

- SQL equivalent (see
  [Microsoft Documentation](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/bitwise-operators-transact-sql?view=sql-server-ver15)
  about the bitwise operators):

```
DisplayFilter & 5 = 5

```

### Historization filter

Provides information about data stored in Identity Manager at any point in time, rather than only
the data that is correct at the current moment in time.

The **historizationfilter** expression can take the following values:

- **As of**: Returns the rows that are active at the time specified by the date parameter.
- **Between**: Returns the values for all row versions that are active within the specified time
  range, regardless of whether they activated before the start date parameter value or deactivated
  after the end date parameter value.
- **Contained in**: Returns the values for all row versions that were opened and closed within the
  specified time range defined by the two **datetime** values.

For now, the **between** and **contained in** historization filters can be used only in ReportQuery.

#### Example

The following squery returns the active users at "01/01/2022".

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
"2022-01-01T23:00:00Z" select Id, MainFirstName, MainLastName, Op_MainTitle_DisplayName, Op_MainOrganization_DisplayName, Op_MainLocation_DisplayName, MainPhoneNumber, MainMobileNumber, MainEmployeeCategory.Id, MainLeave, MainVIP
```
