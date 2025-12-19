---
description: >-
  Learn how to resolve index and license key-related errors reported in Windows
  Services and ConceptSearching event logs by validating configuration,
  restarting services, and resetting key validation.
keywords:
  - ConceptSearching
  - license key
  - index keys
  - CSE
  - Windows Services
  - conceptConfig
  - ConceptIndexer
  - ConceptCollectorService
  - SQL
products:
  - data-classification
sidebar_label: 'Resolving Index and License Key-Related Errors in '
tags: []
title: "Resolving Index and License Key-Related Errors in Windows Services"
knowledge_article_id: kA00g000000H9dsCAC
---

# Resolving Index and License Key-Related Errors in Windows Services

## Overview

During the initial installation process or in case of configuration changes, you may encounter one of the following errors prompted in Windows Services indicating an invalid license key:

```
The registered license key is invalid.
```

```
The index files key is invalid.
```

```
Index keys do not match.
```

These errors may be accompanied by the following errors in ConceptSearching event logs:

```
The registered license key is invalid.
```

```
The Index files (CSE) key does not match the connected SQL database identifier.
```

To troubleshoot the issue, refer to the following steps:

1. Validate the configuration.
2. Restart the Windows Services.
3. Reset the key validation.

## Instructions

### Step 1 − Validate the configuration

Validate the configuration is as expected for all services/applications:

1. Open each of the service/application config locations. Refer to the following default locations:

```text
C:\Program Files\ConceptSearching\Services\ConceptCollectorService
```

```text
C:\Program Files\ConceptSearching\Services\ConceptIndexer
```

```text
C:\inetpub\wwwroot\conceptQS\bin
```

2. Run `conceptConfig.exe` in each location.

3. Verify and validate each location to point to the following items:

- Correct CSE file location, located in `C:\Program Files\ConceptSearching\conceptDB` by default. In a DQS environment, the CSE file location might differ in each separate server.
- Correct SQL database.

4. If you're using Windows Authentication, ensure the services and application pools are configured to run under the correct user. You can verify this via `services.msc` and `inetmgr` respectively.

### Step 2 − Restart the Windows Services

After validating the configuration, restart the related services and confirm if the issue is resolved. If not − proceed to the Step 3.

### Step 3 − Reset the key validation check

The key validation check should be reset in case CSE files were:

- Manually replaced.
- Moved from another system.
- Updated manually.

> IMPORTANT: The validation check should be reset only after you've confirmed the configuration is correct. While resetting the validation will allow the services to begin processing files, it may lead to the index corruption (if services are pointing to wrong files).

Refer to the following steps:

1. Stop all services.

2. Run the following SQL statement:

- In a single server (non-DQS) environment:

```sql
Environment: UPDATE Config SET LicenseKey = NULL
```

- In a DQS environment:

```sql
UPDATE DQS SET LicenseKey = NULL
```

3. Restart the services.
