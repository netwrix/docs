# AWS: Category

Use the Category page to select the type of scan for the targeted AWS instance or maintenance task
to perform.

![AWS Category page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/category.png)

The options on the Category page are:

- AWS scan jobs

    - Collect Org data – Collects all organization info from an AWS instance
    - Collect IAM data – Collects all users, groups, and roles from an AWS instance
    - Collect S3 – Collects S3 data
    - Collect SDD data – Scans S3 objects for potentially sensitive data

- Maintenance

    - Drop AWS DC Tables – Removes AWS data collector data and tables from the Enterprise Auditor
      database. See the
      [Drop AWS Tables](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/aws/droptables.md)
      topic for additional information.
