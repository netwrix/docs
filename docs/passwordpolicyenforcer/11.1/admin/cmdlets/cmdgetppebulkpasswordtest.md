---
title: "Get-PPEBulkPasswordTest"
description: "Get-PPEBulkPasswordTest"
sidebar_position: 50
---

# Get-PPEBulkPasswordTest

The **Get-PPEBulkPasswordTest** cmdlet runs the Password Policy Enforcer bulk password test of the
specified policy.

**SYNTAX**

**Get-PPEBulkPasswordTest** **-PasswordFile** `<_string_>` **-Policy** `<_string_>`
**-ResultFolder** `<_string_>` [`<_CommonParameters_>`]

**PARAMETERS**

**-PasswordFile** `<_string_>`

Path and name of the text file containing the passwords to test. Passwords in your test file are 1
per line.

**-Policy** `<_string_>`

The name of the policy to enforce for the test.

**-ResultFolder** `<_string_>`

The folder for the created html report.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Get-PPEBulkPasswordTest -PasswordFile C:\PPE\password.txt -Policy "Eval Policy"
-resultFolder C:\PPE

Bulk test is running...

The report is created: "C:\PPE\password.txt_Result_2209222024122350.html".

![Results of the Get-PPEBulkPasswordTest cmdlet](/images/passwordpolicyenforcer/11.1/administration/cmdletgetppebulkpasswordtest.webp)
