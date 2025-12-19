---
title: "PasswordSecurity: Options"
description: "PasswordSecurity: Options"
sidebar_position: 20
---

# PasswordSecurity: Options

The Options page provides format options for returned data.

![Password Security Data Collection Wizard Scan options page](/images/accessanalyzer/12.0/admin/datacollector/passwordsecurity/options.webp)

The configurable scan options are:

- Encrypt communications with Active Directory (SSL) – Enables communication to the domain
  controller over SSL
- Analyze historical passwords – Scans historical passwords that have been stored in Active
  Directory

    :::warning
    Enabling the following option will return clear text passwords to be stored in the
    Access Analyzer database for the following exceptions: **Clear Text Password**, **Potential
    Keytab Password**, and **Weak Password** (when leveraging a plaintext password dictionary).
    :::


- Return cleartext passwords when possible – Returns stored clear-text passwords to the Access
  Analyzer database
