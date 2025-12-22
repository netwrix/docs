---
title: "Usercube-Decrypt-File"
description: "Usercube-Decrypt-File"
sidebar_position: 70
---

# Usercube-Decrypt-File

In Identity Manager, files are encrypted by default. This tool decrypts an input file to save it
into an output file or an OutPutConsole that can be used in Powershell scripts or programs.

## Examples

### Result loaded in OutPutConsole (PowerShell Script)

The following example, used in a Powershell script, saves in the variable `decryptFile` the string
obtained by decrypting the files specified by the `ordersFile` variable. The decryption is made
using the agent side certificate defined in the agent's `appsettings.json`.

```

**$decryptFile = & ./identitymanager-Decrypt-File.exe --files $ordersFile**

```

## Arguments

| Argument Name                        | Details                                                                                                                                                                                                                    |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --files (-f) required                | **Type** String **Description** List of all the files to decrypt.                                                                                                                                                          |
| --encoding (-e) default value: UTF-8 | **Type** String **Description** Encoding used for any encryption/decryption. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). |
| --output-path (-o) optional          | **Type** String **Description** Output path to save all decrypted files. **Note:** used only when the result is saved in a file.                                                                                           |
|                                      |                                                                                                                                                                                                                            |
| ---                                  | ---                                                                                                                                                                                                                        |
| --log-level optional                 | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                          |
