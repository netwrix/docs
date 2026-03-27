---
title: "Usercube-Encrypt-File"
description: "Usercube-Encrypt-File"
sidebar_position: 100
---

# Usercube-Encrypt-File

In Identity Manager, files are encrypted by default. This tool encrypts an input file or the InputConsole of a Powershell program or file to save it as an encrypted output file. This task cannot be configured in the configuration.

## Examples

### Launch the tools with input console (powershell script)

The following example, used in a Powershell script, decrypts the file(s) specified by the `csvResult` variable and saves the result in the location specified in `resultsFile`. The encryption is made using the certificate's thumbprint, store location and store name.

```shell
$csvResult | & ./Usercube-Encrypt-File.exe --file-cert-thumbprint $certificateThumbprint --file-cert-store-location $certificateStoreLocation --file-cert-store-name $certificateStoreName --output-path $resultsFile
```

## Arguments

 | Argument Name | Details | 
 | --- | --- | 
 | --files (-f) optional | **Type** String **Description** List of all the files to encrypt. **Note:** required when the entry is made of files. | 
 | --output-path (-o) optional | **Type** String **Description** Output path to save the encrypted files or input console. | 
 | --- | --- | 
 | --- | --- | 
 | --file-cert-thumbprint optional | **Type** String **Description** Thumbprint of the certificate when the certificate is in the store. | 
 | --file-cert-dn optional | **Type** String **Description** Subject Distinguished Name of the certificate when the certificate is in the store. | 
 | --file-cert-store-location optional | **Type** String **Description** Store location of the certificate when the certificate is in the store. | 
 | --file-cert-store-name optional | **Type** String **Description** Store name of the certificate when the certificate is in the store. | 
 | --file-cert-file optional | **Type** String **Description** File path of the certificate when the certificate is in a PFX file. | 
 | --file-cert-password optional | **Type** String **Description** Password of the certificate when the certificate is in a PFX file. | 
 | --- | --- | 
 | --- | --- | 
 | --log-level optional | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. | 
