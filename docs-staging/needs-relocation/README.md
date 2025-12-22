# Files Awaiting Relocation to Product-Specific KB Directories

**Status**: Temporary staging location
**Date Moved**: December 16, 2024
**Moved From**: `/docs/kb/activitymonitor/`
**Moved By**: Activity Monitor KB reorganization (branch: kb-activitymonitor-reorg)

## Purpose

These 28 files were found in the Activity Monitor KB directory but are actually about other Netwrix products. They were data quality errors in the original repository. To keep the Activity Monitor reorg focused and avoid requiring approvals from multiple product teams, these files have been temporarily staged here.

**Product tags have already been corrected** in each file's frontmatter, making future relocation straightforward.

## Files by Target Product

### Endpoint Protector (6 files)
Target directory: `/docs/kb/endpointprotector/`

1. `increase_communication_security_option.md` - About Endpoint Protector security settings
2. `uninstall_endpoint_protector_linux_clients_older_than_version_2.0.0.0.md` - EPP Linux client uninstall
3. `how_to_set_up_an_offline_temporary_password.md` - EPP Management Console OTPs
4. `block_applications_using_content_aware_protection.md` - EPP Content Aware Protection policies
5. `multiple_licenses_assigned_to_the_same_computer.md` - EPP license management
6. `capture_client_logs_using_the_support_tool-v2_on_a_windows_machine.md` - EPP Support Tool (downloads from download.endpointprotector.com)

### Directory Manager (9 files)
Target directory: `/docs/kb/directorymanager/`

7. `join_or_leave_a_group_on_behalf_of_another_user.md` - Directory Manager group management
8. `how_to_handle_duplicate_first_and_last_names_when_creating_users_with_synchronize_jobs.md` - Directory Manager sync jobs
9. `how_to_reapply_smartgroup_queries_and_identify_groups_with_disabled_users_in_bulk.md` - Directory Manager SmartGroups
10. `set_the_do_not_notify_feature_for_additional_owners_in_the_portal.md` - Directory Manager notifications
11. `bulk_create_groups_with_multiple_additional_owners_from_a_csv_file.md` - Directory Manager bulk operations
12. `configure_security_questions_for_an_identity_store.md` - Directory Manager security
13. `disable_ad_authentication_on_the_portal.md` - Directory Manager Portal authentication
14. `how_to_change_the_samaccountname,_alias,_and_user_logon_name_format_to_first.last_in_the_portal.md` - Directory Manager user identifiers
15. `add_an_external_url_to_the_portal_navigation_bar.md` - Directory Manager Portal navigation

### Log Tracker (1 file)
Target directory: `/docs/kb/logtracker/`

16. `monitoring_microsoft_sql_-_log_tracker_vs._change_tracker.md` - About Netwrix Log Tracker and Change Tracker

### Privilege Secure (1 file)
Target directory: `/docs/kb/privilegesecure/`

17. `high_availability_-_enter_or_exit_a_failover_state_using_nps.hamgr.exe.md` - Privilege Secure HA failover (NPS.HaMgr.exe)

### Threat Manager (2 files)
Target directory: `/docs/kb/threatmanager/`

18. `not_receiving_threat_events.md` - Threat Manager (formerly StealthDEFEND) event reception
19. `configuring_the_entra_id_sync_integration.md` - Threat Manager Entra ID integration

### Threat Prevention (1 file)
Target directory: `/docs/kb/threatprevention/`

20. `agent-returns-no-results-for-active-directory.md` - Threat Prevention (SIWindowsAgent, StealthINTERCEPT)

### Access Analyzer (4 files)
Target directory: `/docs/kb/accessanalyzer/`

21. `error-fsac-system-scan-job-targets-incorrect-host.md` - FSAC System Scan in Access Analyzer
22. `error_the_process_cannot_access_sadictionary_hashed_sorted.dat_because_it_is_being_used_by_another_p.md` - StealthAUDIT (Access Analyzer) dictionary file error
23. `error_'dbo.sa_fsaa_resources.id'_is_not_the_same_data_type_as_referencing_column.md` - Access Analyzer FSAA database schema error
24. `error_the_applet_is_not_running_or_port_8767_is_blocked.md` - Access Analyzer FSAA applet connection error

### .NET Dependencies Cross-Product Files (4 files)
These files should go to their respective product directories:

25. `net_dependencies_for_netwrix_access_analyzer.md` → `/docs/kb/accessanalyzer/`
26. `net_dependencies_for_netwrix_threat_manager.md` → `/docs/kb/threatmanager/`
27. `net_dependencies_for_netwrix_threat_prevention.md` → `/docs/kb/threatprevention/`
28. `net_dependencies_for_netwrix_recovery_for_active_directory.md` → `/docs/kb/recoveryad/`

## Product Tags Status

All files have had their `products` frontmatter field corrected:
- Files no longer have `products: - activitymonitor` tag (except where legitimately multi-product)
- Each file now has the correct product tag matching its target directory
- This makes relocation simple - just move files and they'll work

## Next Steps

Product teams should create separate branches to claim their files:
- `kb-endpointprotector-add-kbs`: Move 6 files from general/needs-relocation to endpointprotector
- `kb-directorymanager-add-kbs`: Move 9 files from general/needs-relocation to directorymanager
- `kb-logtracker-add-kbs`: Move 1 file from general/needs-relocation to logtracker
- `kb-privilegesecure-add-kbs`: Move 1 file from general/needs-relocation to privilegesecure
- `kb-threatmanager-add-kbs`: Move 2 files from general/needs-relocation to threatmanager
- `kb-threatprevention-add-kbs`: Move 1 file from general/needs-relocation to threatprevention
- `kb-accessanalyzer-add-kbs`: Move 4 files + 1 .NET file from general/needs-relocation to accessanalyzer
- `kb-recoveryad-add-kbs`: Move 1 .NET file from general/needs-relocation to recoveryad

## Related Information

- **Original Issue**: Activity Monitor KB contained files about other products (data quality issue in original repository)
- **Verified Against**: Salesforce Activity Monitor KB list - confirmed these files do not belong in Activity Monitor
- **Branch**: kb-activitymonitor-reorg
- **Commit**: Includes 2 Unicode filename fixes + 28 product tag corrections + 28 file moves + 1 duplicate deletion
