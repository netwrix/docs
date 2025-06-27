# PasswordSecurity: Options

The Options page provides format options for returned data.

![Password Security Data Collection Wizard Scan options page](/img/product_docs/accessanalyzer/11.6/install/application/options.webp)

The configurable scan options are:

- Encrypt communications with Active Directory (SSL) – Enables communication to the domain
  controller over SSL
- Analyze historical passwords – Scans historical passwords that have been stored in Active
  Directory

    **CAUTION:** Enabling the following option will return clear text passwords to be stored in the
    Enterprise Auditor database for the following exceptions: **Clear Text Password**, **Potential
    Keytab Password**, and **Weak Password** (when leveraging a plaintext password dictionary).

- Return cleartext passwords when possible – Returns stored clear-text passwords to the Enterprise
  Auditor database
