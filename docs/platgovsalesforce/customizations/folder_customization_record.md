# Report and Dashboard Folder Customization

## Overview
This document describes the Strongpoint customizations for Salesforce types ReportFolder and DashboardFolder.

## Detailed Customization Description

### 1. Folder Types
- **Report Folders**: Contain Salesforce reports
- **Dashboard Folders**: Contain Salesforce dashboards
- Folders can be shared with users or public groups
- Supports hierarchical folder structures with subfolders

### 2. Detection Mechanism
- Changes detected during Netwrix daily scan
- Frequency depends on configured scan schedule

### 3. Related Objects
- Folders can have relationships with:
  - Groups/Roles through access permissions
  - Other folders (parent-child relationships)

![Related Objects](/images/platgovsalesforce/customizations/folder_customization_record_1.webp)

### 4. Metadata Information
- Includes:
  - Customization name
  - Salesforce type
  - Package details
  - Active/Managed status
  - Creation and modification timestamps

![Metadata Information](/images/platgovsalesforce/customizations/folder_customization_record_2.webp)

### 5. Folder Sharing Settings
- Access levels:
  - View access
  - Manage access
- Sharing settings apply to all subfolders
- Can be granted to:
  - Individual users
  - Public groups
  - Roles

![Folder Sharing Settings](/images/platgovsalesforce/customizations/folder_customization_record_3.webp)

![Folder Sharing Settings](/images/platgovsalesforce/customizations/folder_customization_record_4.webp)

![Folder Sharing Settings](/images/platgovsalesforce/customizations/folder_customization_record_5.webp)


### 6. Change Logging
- Tracks changes to access permissions
- Logs include:
  - Who made the change
  - Timestamp of change
  - Type of modification (add/modify/remove)

### 7. Metadata Storage
- XML attachment stores:
  - Folder structure details
  - Access levels for users, groups, and roles

![Metadata Storage](/images/platgovsalesforce/customizations/folder_customization_record_6.webp)

## References
- Additional Information: https://docs.netwrix.com/docs/platgovsalesforce/customizations/understanding_customization_record
