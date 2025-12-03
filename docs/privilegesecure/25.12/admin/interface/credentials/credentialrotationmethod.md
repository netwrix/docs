---
title: "Rotation Methods"
description: "Rotation Methods"
sidebar_position: 10
---

# Rotation Methods

The following table summarizes the methods of credential rotation for each type of account.

| Managed Type | Dependencies | Managed / Unmanaged | Method    | Button                  | Description                                                                                                                                                                                                 |
|------------- |------------- |--------------------- |---------- |------------------------ |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Standard     | None         | Managed             | Automatic | Schedule Rotation      | Local or domain user account managed by Privilege Secure, including managed users created by activity sessions. Credentials are stored by Privilege Secure. Credential rotation is performed according to the change policy for that platform type or click Schedule Rotation to force credential rotation. |
| Standard     | None         | Unmanaged           | Manual    | N/A                    | Local or domain user account where the credential must be manually updated on both the resource and in Privilege Secure.                                                                                                                   |
| Standard     | None         | Blank               | N/A       | N/A                    | 	Local or domain user account that is not managed by Privilege Secure and no credentials have ever been stored.|
| Internal     | None         | Managed             | Automatic | Schedule Rotation      | “Internal” Privilege Secure service account with no dependencies (windows services or scheduled tasks). Credentials are stored by Privilege Secure. Credential rotation is performed according to the change policy for that platform type or click Schedule Rotation to force credential rotation. |
| Internal     | None         | Unmanaged           | Manual    | N/A                    | “Internal” Privilege Secure service account with no dependencies (windows services or scheduled tasks) where the credential must be manually updated on both the resource and in Privilege Secure.                                                                                 |
| Service      | One or more  | Managed             | Manual    | Rotate Service Account | Local or domain service account with one or more dependencies (windows services or scheduled tasks). Also includes “Internal” Privilege Secure service account with one or more dependencies. Credentials are stored by Privilege Secure but credential rotation must be initiated manually due to dependencies. Click Rotate Service Account for credential rotation. |
| Service      | One or more  | Unmanaged           | Blank     | Rotate Service Account | Local or domain service account with one or more dependencies (windows services or scheduled tasks) that is not managed by Privilege Secure and no credentials have ever been stored. Click Rotate Service Account for credential rotation - account will change to a “Managed” “Manual” account (see above). |
