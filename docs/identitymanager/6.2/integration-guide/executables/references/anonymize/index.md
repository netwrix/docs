---
title: "Usercube-Anonymize"
description: "Usercube-Anonymize"
sidebar_position: 20
---

# Usercube-Anonymize

This tool anonymizes data based on a certain knowledge of the database and the data structure.

## Overview

Anonymizing data helps unlock situations where it is necessary to send data to varied teams while
guaranteeing the privacy of the data owners.

> For example, it can be necessary to transmit data to an integration team that needs to set up
> tests or a development environment to work on the applicative configuration. For example, users
> sometimes need to send data to Identity Manager's support team to reproduce a bug and get it
> corrected.

## Technical Principles

Anonymizing can be performed on data:

- from a CSV file, with the output written to a new CSV file;
- directly inside a SQL database, overwriting existing data with the anonymized data.

    In this case, the plain data is lost. So make sure to work on a copy of the original database.

Several types of data can be anonymized, according to distinct substitution methods that are
deterministic and non-reversible:

- strings have each alphabetical character substituted for another alphabetical character;

    > For example, `John Doe` becomes `Xert Okl`.

    Diacritical characters are replaced by a non-diacritical equivalent.

- numbers have each digit substituted for another digit;

    > For example, `54689` becomes `32016`.

- emails have the username anonymized, while leaving the domain name as is;

    > For example, `johndoe@contoso.com` becomes `xertoekl@contoso.com`.

- Active Directory's RDN properties (Relative Distinguished Names), in the _attribute=value_ format,
  are anonymized via the string method on the value, leaving the attribute as is.

    > For example, `CN=John Doe` becomes `CN=Xert Okl`.

## Examples

### Anonymizing a CSV file

The following example anonymizes the `first_name`, `last_name`, `email` and `phone` column of the
following CSV file:

```

id,first_name,last_name,email,gender,phone
1,Darrin,Crumpe,dcrumpe0@nifty.com,Male,2666420820
2,Lyon,Boddam,lboddam1@eepurl.com,Male,5927617041
3,Roxana,Prose,rprose2@statcounter.com,Female,5134883113
4,Vladimir,Grisedale,vgrisedale3@blogtalkradio.com,Male,1338476916
5,Jaquith,Pendrich,jpendrich4@merriam-webster.com,Female,1894520819
6,Art,Sweatland,asweatland5@boston.com,Male,5066492715
7,Lynelle,Klammt,lklammt6@stumbleupon.com,Female,5653774981
8,Chicky,Blatherwick,cblatherwick7@walmart.com,Male,4095068397
9,Delilah,Kauscher,dkauscher8@de.vu,Female,9324858513
10,Estelle,Melmeth,emelmeth9@dot.gov,Female,2176715812

```

The following command outputs the anonymized data in STDOUT.

```

**./identitymanager-Anonymize.exe -n C:/Projects/identitymanager/Documentation/exampleSources/Anonymizer/users.csv -s "," --columns first_name,last_name,mail:email,number:phone**

```

The output is:

```

id,first_name,last_name,email,gender,phone
1,Afccrp,Icqesl,aicqesl0@nifty.com,Male,6111065265
2,Mdhp,Qhaafe,mqhaafe1@eepurl.com,Male,4665125502
3,Chlfpf,Schnl,cschnl2@statcounter.com,Female,4230223223
4,Imfarerc,Ocrnlafml,iocrnlafml3@blogtalkradio.com,Male,2332051621
5,Jfkqrfg,Slpacrig,jslpacrig4@merriam-webster.com,Female,2260465226
6,Fcf,Nalffmfpa,fnalffmfpa5@boston.com,Male,4511066524
7,Mdplmml,Bmfeef,mbmfeef6@stumbleupon.com,Female,4143550622
8,Igribd,Qmffglcarib,iqmffglcarib7@walmart.com,Male,0564512365
9,Almrmfg,Bfqniglc,abfqniglc8@de.vu,Female,6360242423
10,Lnflmml,Elmelfg,lelmelfg9@dot.gov,Female,6251524226

```

### Anonymizing a SQL Server table

The following example overwrites the `UR_Resources` table of Identity Manager's database with
anonymized data for the `C3`, `C8`, `CA`, `CB`, `CC` and `CD` columns for all resources whose `Type`
is `17`.

```

.\Usercube-Anonymize.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" --table UR_Resources --columns "number:C3,C8,number:CA,mail:CB,number:CC,number:CD" --select-query "select * FROM UR_Resources WHERE Type = 17"

```

## Arguments

| Argument Name                         | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --columns required                    | **Type** Strings **Description** Columns from the CSV or SQL database that need anonymizing. **Usage** The value is a string sequence in the form `type:columname`, separated by a coma `,`, where `type` is used to choose the anonymize algorithm from among the following formats: `string` (default value); `mail`; `number`; `rdn`, and where `columnname` is the actual name, not case-sensitive, of the column to anonymize.                                                                                                                                                                                  |
| --connection-string optional          | **Type** String **Description** Connection string to the SQL Server database to be anonymized. **Note:** required when anonymizing a database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --csv-separator (-s) default value: ; | **Type** String **Description** Separator of the input CSV file, provided between simple quotes. **Note:** used only when anonymizing a CSV file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --entry-file (-n) optional            | **Type** String **Description** Path to the input CSV file to anonymize. **Note:** required when anonymizing a CSV file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --no-transaction optional             | **Type** No Value **Description** Disables the SQL transaction for the request made by the anonymizing tool to the target SQL Server database. **Warning:** NETWRIX recommends using this option only when using transactions leads to a failure (exceeded RAM usage, exceeded CPU usage), because it could corrupt the data from the database. Make sure to prepare a backup of the database before using this option. **Note:** used only when anonymizing a database.                                                                                                                                             |
| --output (-o) default value: STDOUT   | **Type** String **Description** Path of the output CSV file to write the anonymized data. **Note:** used only when anonymizing a CSV file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --select-query (-q) optional          | **Type** String **Description** SQL query to filter the rows to be anonymized. **Note:** used only when anonymizing a database, and useful only when the query includes a "WHERE" condition, otherwise the `--table` and `--columns` arguments are enough. **Usage** The table targeted by the query must be on the table specified in `--table`. **Examples** `SELECT Id, name, firstName FROM Resources WHERE resourceType = 'Person'` is a query with a simple condition. `SELECT * FROM Persons WHERE resourceType = 'Person' AND specialFlag = 'TopSecret'` selects all columns, and adds a specific condition. |
| --table (-t) optional                 | **Type** String **Description** Name of the table from the SQL Server database to be anonymized. **Note:** required when anonymizing a database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
