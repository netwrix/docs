---
title: "Usercube-Export-Excel"
description: "Usercube-Export-Excel"
sidebar_position: 140
---

# Usercube-Export-Excel

## Examples

### Exporting a file respecting the default parameters

Consider the file `C:/identitymanagerContoso/Sources/hr_example.xlsx` with `UTF8` encoding, it can be
exported using these command's arguments:

`--raw-files-path C:/identitymanagerContoso/Sources/hr_example.xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/identitymanagerContoso/Temp/ExportOutput`

The output file(s) will be located in `C:/identitymanagerContoso/Temp/ExportOutput/`. Their number
corresponds to the number of sheets in the XLSX file and they would be labeled: `HREXAMPLE_0.csv`,
`HREXAMPLE_1.csv`, � `HREXAMPLE_n-1.csv` where n corresponds to the amount of spread sheets of the
XLSX file. The encoding is `UTF8` and the separator is `,`.

### Skipping some file's lines

The possibility to skip lines is made available using the `--lines-to-skip` argument:

`--raw-files-path C:/identitymanagerContoso/Sources/hr_example.xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/identitymanagerContoso/Temp/ExportOutput --lines-to-skip 10`

As a consequence, the exported file would include the content of the XLSX file without the ten first
lines.

### Regex in file name

Considering a generated file following the regex: `C:/identitymanagerContoso/Sources/hr_example(.*?).xlsx`,
for instance `C:/identitymanagerContoso/Sources/hr_example5fH8g1.xlsx`, if several files match with the
regex, the executable would use the most recent one.

The regex can be included in the filename and would need to be precised using the `--is-regex`
argument:

`--raw-files-path C:/identitymanagerContoso/Sources/hr_example(.*?).xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/identitymanagerContoso/Temp/ExportOutput --is-regex`

### Choosing value to trim

It's possible to precise characters to trim using the `--values-to-trim` argument:

`--raw-files-path C:/identitymanagerContoso/Sources/hr_example.xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/identitymanagerContoso/Temp/ExportOutput --values-to-trim e`

The CSV output file will see every words beginning and ending by "e" (lower-case, this process is
case sensitive) removed of this letter.

### Ignoring particular sheets

The `--sheets-ignored` argument allows the user to specify for each sheet if it should be ignored
during the export. More precisely, a list of true or false arguments should be specified
respectively to the sheets. Let's say the `C:/identitymanagerContoso/Sources/hr_example.xlsx` file
possesses three sheets, in order to export the first and the last ones the arguments would be:

`--raw-files-path C:/identitymanagerContoso/Sources/hr_example.xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/identitymanagerContoso/Temp/ExportOutput --sheets-ignored false true true false`

Thus, two CSV files would be created corresponding to the the chosen ones: `HREXAMPLE_0.csv` and
`HREXAMPLE_3.csv`.

## Path Duality and the Not-Launch-Export System

The export executable might be used for a complete or an incremental synchronization. Thus, it
possesses two paths that could be precised - depending on the case - with the `--raw-files-path` for
complete synchronizations argument or the `--path-incremental` for incremental ones.

At the end of the day, the `--not-incremental` argument defines the export behavior: if present it
means a complete synchronization should be performed and the `--raw-files-path` argument must be
precised; if missing an incremental synchronization would be performed using `--path-incremental`.

It means that if the user provide the `--not-incremental` argument and no `--raw-files-path`, or if
the user doesn't provide `--not-incremental` nor `--path-incremental`, the export will not be
launched to prevent any issue (complete data for an incremental synchronization for instance). The
`--force-complete` argument bypasses this safeguard: during the initialization job for example,
where we want to perform a complete synchronization, even for Excel connections with only an
incremental path.

## Arguments

| Argument Name                    | Details                                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| --not-incremental optional       | **Type** No Value **Description** Specifies the synchronization mode, its presence meaning complete, its absence incremental. |
| --is-regex optional              | **Type** No Value **Description** The file's name is a regex so we find the last generated corresponding file.                |
|                                  |                                                                                                                               |
| ---                              | ---                                                                                                                           |
| --connection-identifier optional | **Type** String **Description** Connector's connection identifier. The output file will have this identifier as name.         |
| --output-path required           | **Type** String **Description** Output path for the files generated by the export.                                            |
