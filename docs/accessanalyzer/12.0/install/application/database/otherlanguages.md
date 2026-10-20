---
title: "Non-English Language Environments"
description: "Non-English Language Environments"
sidebar_position: 10
---

# Non-English Language Environments

There are specific SQL Server requirements when installing Access Analyzer in a non-English Language
environment, specifically when the environment uses a non-Latin alphabet.

## Requirements

Meet the following collation requirements before installing Access Analyzer.

### Database & Server Collation Settings

The collation settings at the database level must match the server-level collation setting.

**Symptoms**

Common errors that occur are:

- Implicit conversion of VARCHAR value to VARCHAR can't be performed because the collation of the
  value is unresolved due to a collation conflict.
    - Couldn't find stored procedure `#SA_ImportObject`
    - Can't drop the procedure `#SA_ImportObject`, because it doesn't exist or lack of permission
- Can't resolve the collation conflict between **SQL_Latin1_General_CP1_CI_AS** and
  **French_CI_AS** in the equal to operation.

**Cause**

These errors occur because the Access Analyzer solutions use many temporary functions and procedures
which in turn use the collation at the server level. Temporary tables created within a stored
procedure use the TEMPDB database’s collation instead of the current user database’s collation.
Therefore, there will be issues in analysis due to the mismatch.

**Resolution**

The following is a workaround to avoid collation errors. However, when making changes
at the SQL Server level, use caution as it actually rebuilds all user/system database objects. If
there are schema bound objects (i.e. Constraints), the whole operation will fail. ensure to have
all of the information or scripts needed to recreate the Access Analyzer user’s databases and all of
the objects in them. Customers should use a localized version of the SQL Server, and this shouldn't
be done in production environments.

#### Change Collation at the Database Level

**Step 1 –** Access the Database Properties in SQL Server Management Studio.

![SQL Server Management Studio Database Properties window](/images/accessanalyzer/12.0/install/application/databasepropertiescollation.webp)

**Step 2 –** Select **Options** and set the collation.

Now that the collations match, proceed with Access Analyzer installation.

#### Change Collation at the SQL Server Level

![SQL Server Configuration Manager](/images/accessanalyzer/12.0/install/application/sqlserverconfigurationmanager.webp)

**Step 1 –** Stop the SQL Server service from the Configuration Manager.

**Step 2 –** Open CMD console as Administrator, and go to the following path (or the path where the
binary files are):

```
…\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\Binn  
```

**Step 3 –** Execute the following command (or whichever collation is needed):

```
sqlservr.exe  -m -T4022 -T3659 -q "French _CS_AS"
```

See the Microsoft
[Collation and Unicode support](https://learn.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support)
article for collation matches.

**Step 4 –** Wait until it finishes and start the SQL Server service again.

Now that the collations match, proceed with Access Analyzer installation.

### Case Sensitive Collation

Access Analyzer doesn't support case sensitive collation settings. Case insensitive collations
include **CI** in the collation name, for example **Latin1_General_CI_AS**.

**Cause**

For example, if there's an English install of SQL Server but a Turkish collation, which is case
sensitive, SQL Server can't find `SYS.INDEXES`. So `'SYS.INDEXES != 'sys.indexes' `in the
environment.

**Resolution**

All collation settings must be case insensitive.

## Troubleshooting

The following are possible problems for future consideration.

During comparison or joining of columns, collation conflict error occurs in two cases if collation
of one column doesn't match with collation of another column:

The following script can generate this:

```
CREATE TABLE TestTab
(PrimaryKey int PRIMARY KEY,
CharCol char(10) COLLATE French_CI_AS,
CharCol2 char(10) COLLATE greek_ci_as
)
INSERT INTO TestTab VALUES (1, 'abc', 'abc') 
SELECT * FROM TestTab WHERE CharCol = CharCol2
```

- Error Returned – Can't resolve the collation conflict between **Greek_CI_AS** and
  **French_CI_AS** in the equal to operation.
- Resolution – If you change the select statement as follows, it runs successfully.

    ```
    SELECT * FROM TestTab WHERE CharCol = CharCol2 COLLATE Albanian_CI_AI
    ```

:::note
Explicit collation (Albanian_CI_AI) isn't one of any column, but after that it will
complete successfully. SQL Server hasn't matched the collation of the two columns; instead, it
implements the third rule of collation precedence. See the Microsoft
[Collation Precedence](https://learn.microsoft.com/en-us/sql/t-sql/statements/collation-precedence-transact-sql)
article for additional information.
:::


### Resources

The following articles may be of assistance:

- Microsoft
  [Collation and Unicode support](https://learn.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support)
  article
- Microsoft
  [Collation Precedence](https://learn.microsoft.com/en-us/sql/t-sql/statements/collation-precedence-transact-sql)
  article
- Microsoft
  [Set or change the server collation](https://learn.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-server-collation)
  article
