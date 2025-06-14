# PasswordSecurity Data Collector

The PasswordSecurity Data Collector compares passwords stored in Active Directory to known, breached
passwords in the Netwrix dictionary or custom dictionaries. The PasswordSecurity Data Collector also
checks for common misconfigurations with passwords in Active Directory.

The PasswordSecurity Data Collector is a core component of Enterprise Auditor, but it has been
preconfigured within the Active Directory Solution. While the data collector is available with all
Enterprise Auditor license options, the Active Directory Solution is only available with a special
Enterprise Auditor license. See the
[Active Directory Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/overview.md)
topic for additional information.

Protocols

- LDAP

Ports

- TCP 389/636

Permissions

- At the domain level:

    - Read
    - Replicating Directory Changes
    - Replicating Directory Changes All
    - Replicating Directory Changes in a Filtered Set
    - Replication Synchronization

## PasswordSecurity Query Configuration

The PasswordSecurity Data Collector is configured through the Password Security Data Collector
Wizard, which contains the following wizard pages:

- [PasswordSecurity: Category](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/passwordsecurity/category.md)
- [PasswordSecurity: Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/passwordsecurity/options.md)
- [PasswordSecurity: Dictionaries](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/passwordsecurity/dictionaries.md)
- [PasswordSecurity: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/passwordsecurity/results.md)
- [PasswordSecurity: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/passwordsecurity/summary.md)
