---
title: "Usercube-FillBankingDatabase"
description: "Usercube-FillBankingDatabase"
sidebar_position: 160
---

# Usercube-FillBankingDatabase

## Example

### Import the banking sources to the `BankingSystem` database.

The Banking demo application uses a database named `BankingSystem`. Once the database is created,
the tables should be created and the sources should be imported, otherwise the Banking demo
application will be empty.

Consider that the database's connection string is `"data source=.;Database=BankingSystem;"`, the
sources are located in the `C:/SDK/DemoApps/Sources` folder, and the `BankingSystemTables` script is
located in `C:/SDK/DemoApps/Banking`. We initialize the database to create its tables, and import
the sources.

`--connection-string "data source=.;Database=BankingSystem;" --sources-path C:/SDK/DemoApps/Sources --banking-sql-path C:/SDK/DemoApps/Banking`

## Arguments

| Argument Name                | Details                                                                                                                                                                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --banking-sql-path required  | **Type** String **Description** Specifies the path to the folder containing the `BankingSystemTables.sql` file. **Example** Set path to `C:/SDK/DemoApps/Banking`: `--connection-string "data source=.;Database=BankingSystem;"`.         |
| --connection-string required | **Type** String **Description** Specifies the connection string of the `BankingSystem` database. **Example** Set the connection string's data source to the local machine: `--connection-string "data source=.;Database=BankingSystem;"`. |
| --sources-path required      | **Type** String **Description** Specifies the path to the banking sources folder. **Example** Set path to `C:/SDK/DemoApps/Sources`: `--sources-path C:/SDK/DemoApps/Sources`.                                                            |
